import { NextRequest, NextResponse } from 'next/server';
import { getDbUser, sql } from '@/lib/db-user';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const dbUser = await getDbUser(req);
  if (!dbUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const orders = await sql`SELECT * FROM orders WHERE id = ${params.id}`;
  if (!orders[0]) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  if (orders[0].buyer_id !== dbUser.id) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const items = await sql`
    SELECT oi.*, s.name AS sku_name
    FROM order_items oi
    JOIN skus s ON s.id = oi.sku_id
    WHERE oi.order_id = ${params.id}
  `;

  return NextResponse.json({ order: { ...orders[0], order_items: items } });
}
