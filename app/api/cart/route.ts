import { NextRequest, NextResponse } from 'next/server';
import { getDbUser, sql } from '@/lib/db-user';

export async function GET(req: NextRequest) {
  const dbUser = await getDbUser(req);
  if (!dbUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const items = await sql`
    SELECT
      ci.id, ci.quantity, ci.sku_id, ci.created_at,
      s.name, s.price, s.images, s.unit, s.stock_quantity
    FROM cart_items ci
    JOIN skus s ON s.id = ci.sku_id
    WHERE ci.user_id = ${dbUser.id}
    ORDER BY ci.created_at DESC
  `;

  const total = items.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);

  return NextResponse.json({ items, total });
}

export async function POST(req: NextRequest) {
  const dbUser = await getDbUser(req);
  if (!dbUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: 'Invalid body' }, { status: 400 });

  const { sku_id, quantity = 1 } = body;
  if (!sku_id || quantity <= 0) {
    return NextResponse.json({ error: 'sku_id and a positive quantity are required' }, { status: 400 });
  }

  const rows = await sql`
    INSERT INTO cart_items (user_id, sku_id, quantity)
    VALUES (${dbUser.id}, ${sku_id}, ${quantity})
    ON CONFLICT (user_id, sku_id)
    DO UPDATE SET quantity = cart_items.quantity + EXCLUDED.quantity
    RETURNING *
  `;

  return NextResponse.json({ item: rows[0] }, { status: 201 });
}
