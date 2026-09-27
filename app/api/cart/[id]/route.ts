import { NextRequest, NextResponse } from 'next/server';
import { getDbUser, sql } from '@/lib/db-user';

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const dbUser = await getDbUser(req);
  if (!dbUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const existing = await sql`SELECT user_id FROM cart_items WHERE id = ${params.id}`;
  if (!existing[0]) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  if (existing[0].user_id !== dbUser.id) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: 'Invalid body' }, { status: 400 });

  const { quantity } = body;
  if (!quantity || quantity <= 0) {
    return NextResponse.json({ error: 'quantity must be greater than 0' }, { status: 400 });
  }

  const rows = await sql`
    UPDATE cart_items SET quantity = ${quantity} WHERE id = ${params.id} RETURNING *
  `;

  return NextResponse.json({ item: rows[0] });
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const dbUser = await getDbUser(req);
  if (!dbUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const existing = await sql`SELECT user_id FROM cart_items WHERE id = ${params.id}`;
  if (!existing[0]) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  if (existing[0].user_id !== dbUser.id) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  await sql`DELETE FROM cart_items WHERE id = ${params.id}`;
  return NextResponse.json({ ok: true });
}
