import { NextRequest, NextResponse } from 'next/server';
import { getDbUser, sql } from '@/lib/db-user';

const SUPPLIER_ROLES = ['materials_supplier'];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const mine = searchParams.get('mine') === 'true';
  const category = searchParams.get('category');

  if (mine) {
    const dbUser = await getDbUser(req);
    if (!dbUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const rows = await sql`
      SELECT * FROM skus WHERE supplier_id = ${dbUser.id} ORDER BY created_at DESC
    `;
    return NextResponse.json({ skus: rows });
  }

  const rows = category
    ? await sql`SELECT * FROM skus WHERE status = 'active' AND category = ${category} ORDER BY created_at DESC`
    : await sql`SELECT * FROM skus WHERE status = 'active' ORDER BY created_at DESC`;

  return NextResponse.json({ skus: rows });
}

export async function POST(req: NextRequest) {
  const dbUser = await getDbUser(req);
  if (!dbUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!dbUser.role || !SUPPLIER_ROLES.includes(dbUser.role)) {
    return NextResponse.json({ error: 'Only materials suppliers can list SKUs' }, { status: 403 });
  }

  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: 'Invalid body' }, { status: 400 });

  const {
    name, description, category, price, unit = 'unit', stock_quantity = 0, images = [],
    made_in_india = true, origin_country = null, sale_type = 'b2c_retail', sourcing_story = null,
  } = body;

  if (!name || !category || !price) {
    return NextResponse.json({ error: 'name, category, and price are required' }, { status: 400 });
  }
  if (!['b2b_wholesale', 'b2c_retail', 'both'].includes(sale_type)) {
    return NextResponse.json({ error: 'Invalid sale_type' }, { status: 400 });
  }

  const rows = await sql`
    INSERT INTO skus (
      supplier_id, name, description, category, price, unit, stock_quantity, images,
      made_in_india, origin_country, sale_type, sourcing_story
    ) VALUES (
      ${dbUser.id}, ${name}, ${description ?? null}, ${category}, ${price}, ${unit},
      ${stock_quantity}, ${JSON.stringify(images)},
      ${made_in_india}, ${made_in_india ? null : origin_country}, ${sale_type}, ${sourcing_story ?? null}
    )
    RETURNING *
  `;

  return NextResponse.json({ sku: rows[0] }, { status: 201 });
}
