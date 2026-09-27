import { NextRequest, NextResponse } from 'next/server';
import { getDbUser, sql } from '@/lib/db-user';

export async function GET(req: NextRequest) {
  const dbUser = await getDbUser(req);
  if (!dbUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!dbUser.is_admin) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

  const { searchParams } = new URL(req.url);
  const scope = searchParams.get('scope');

  const rows = scope
    ? await sql`SELECT * FROM supplier_directory WHERE scope = ${scope} ORDER BY verified ASC, name ASC`
    : await sql`SELECT * FROM supplier_directory ORDER BY scope, verified ASC, name ASC`;

  return NextResponse.json({ suppliers: rows });
}

export async function POST(req: NextRequest) {
  const dbUser = await getDbUser(req);
  if (!dbUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!dbUser.is_admin) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: 'Invalid body' }, { status: 400 });

  const {
    name, category, scope, city = null, state = null, country = 'India',
    description = null, website = null, founded_year = null, verified = false,
  } = body;

  if (!name || !category || !scope) {
    return NextResponse.json({ error: 'name, category, and scope are required' }, { status: 400 });
  }
  if (!['vizag', 'andhra', 'india', 'world'].includes(scope)) {
    return NextResponse.json({ error: 'Invalid scope' }, { status: 400 });
  }

  const rows = await sql`
    INSERT INTO supplier_directory (
      name, category, scope, city, state, country, description, website, founded_year, verified
    ) VALUES (
      ${name}, ${category}, ${scope}, ${city}, ${state}, ${country},
      ${description}, ${website}, ${founded_year}, ${verified}
    )
    RETURNING *
  `;

  return NextResponse.json({ supplier: rows[0] }, { status: 201 });
}
