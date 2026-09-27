import { NextRequest, NextResponse } from 'next/server';
import { getDbUser, sql } from '@/lib/db-user';

const UPDATABLE_FIELDS = [
  'title', 'description', 'property_type', 'listing_type', 'status', 'price',
  'city', 'locality', 'bedrooms', 'bathrooms', 'area_sqft', 'images', 'features',
] as const;

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const rows = await sql`SELECT * FROM properties WHERE id = ${params.id}`;
  if (!rows[0]) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json({ property: rows[0] });
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const dbUser = await getDbUser(req);
  if (!dbUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const existing = await sql`SELECT owner_id FROM properties WHERE id = ${params.id}`;
  if (!existing[0]) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  if (existing[0].owner_id !== dbUser.id) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: 'Invalid body' }, { status: 400 });

  const updates: Record<string, unknown> = {};
  for (const field of UPDATABLE_FIELDS) {
    if (field in body) {
      updates[field] = field === 'images' || field === 'features' ? JSON.stringify(body[field]) : body[field];
    }
  }
  if (Object.keys(updates).length === 0) {
    return NextResponse.json({ error: 'No updatable fields provided' }, { status: 400 });
  }

  const setClauses = Object.keys(updates).map((key, i) => `${key} = $${i + 2}`).join(', ');
  const values = Object.values(updates);
  const rows = await sql.query(
    `UPDATE properties SET ${setClauses}, updated_at = NOW() WHERE id = $1 RETURNING *`,
    [params.id, ...values],
  );

  return NextResponse.json({ property: rows[0] });
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const dbUser = await getDbUser(req);
  if (!dbUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const existing = await sql`SELECT owner_id FROM properties WHERE id = ${params.id}`;
  if (!existing[0]) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  if (existing[0].owner_id !== dbUser.id) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  await sql`DELETE FROM properties WHERE id = ${params.id}`;
  return NextResponse.json({ ok: true });
}
