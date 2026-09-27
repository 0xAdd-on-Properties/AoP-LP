import { NextRequest, NextResponse } from 'next/server';
import { getDbUser, sql } from '@/lib/db-user';

const UPDATABLE_FIELDS = [
  'name', 'category', 'scope', 'city', 'state', 'country', 'description',
  'website', 'founded_year', 'verified', 'claimed_by_sku_id',
] as const;

async function requireAdmin(req: NextRequest) {
  const dbUser = await getDbUser(req);
  if (!dbUser) return { error: NextResponse.json({ error: 'Unauthorized' }, { status: 401 }) };
  if (!dbUser.is_admin) return { error: NextResponse.json({ error: 'Forbidden' }, { status: 403 }) };
  return { dbUser };
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const { error } = await requireAdmin(req);
  if (error) return error;

  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: 'Invalid body' }, { status: 400 });

  const updates: Record<string, unknown> = {};
  for (const field of UPDATABLE_FIELDS) {
    if (field in body) updates[field] = body[field];
  }
  if (Object.keys(updates).length === 0) {
    return NextResponse.json({ error: 'No updatable fields provided' }, { status: 400 });
  }

  const setClauses = Object.keys(updates).map((key, i) => `${key} = $${i + 2}`).join(', ');
  const values = Object.values(updates);
  const rows = await sql.query(
    `UPDATE supplier_directory SET ${setClauses} WHERE id = $1 RETURNING *`,
    [params.id, ...values],
  );
  if (!rows[0]) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  return NextResponse.json({ supplier: rows[0] });
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { error } = await requireAdmin(req);
  if (error) return error;

  await sql`DELETE FROM supplier_directory WHERE id = ${params.id}`;
  return NextResponse.json({ ok: true });
}
