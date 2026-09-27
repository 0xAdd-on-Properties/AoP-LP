import { NextRequest, NextResponse } from 'next/server';
import { getDbUser, sql } from '@/lib/db-user';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const mine = searchParams.get('mine') === 'true';
  const city = searchParams.get('city');

  if (mine) {
    const dbUser = await getDbUser(req);
    if (!dbUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const rows = await sql`
      SELECT * FROM projects WHERE builder_id = ${dbUser.id} ORDER BY created_at DESC
    `;
    return NextResponse.json({ projects: rows });
  }

  const rows = city
    ? await sql`SELECT * FROM projects WHERE city = ${city} ORDER BY created_at DESC`
    : await sql`SELECT * FROM projects ORDER BY created_at DESC`;

  return NextResponse.json({ projects: rows });
}

export async function POST(req: NextRequest) {
  const dbUser = await getDbUser(req);
  if (!dbUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (dbUser.role !== 'builder') {
    return NextResponse.json({ error: 'Only builders can create projects' }, { status: 403 });
  }

  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: 'Invalid body' }, { status: 400 });

  const {
    name, description, city = 'Visakhapatnam', locality,
    status = 'under_construction', possession_date = null, total_units = null,
    images = [],
  } = body;

  if (!name) {
    return NextResponse.json({ error: 'name is required' }, { status: 400 });
  }

  const rows = await sql`
    INSERT INTO projects (
      builder_id, name, description, city, locality, status,
      possession_date, total_units, images
    ) VALUES (
      ${dbUser.id}, ${name}, ${description ?? null}, ${city}, ${locality ?? null}, ${status},
      ${possession_date}, ${total_units}, ${JSON.stringify(images)}
    )
    RETURNING *
  `;

  return NextResponse.json({ project: rows[0] }, { status: 201 });
}
