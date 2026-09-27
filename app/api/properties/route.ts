import { NextRequest, NextResponse } from 'next/server';
import { getDbUser, sql } from '@/lib/db-user';

const LISTER_ROLES = ['dealer_broker', 'builder'];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const mine = searchParams.get('mine') === 'true';
  const city = searchParams.get('city');

  if (mine) {
    const dbUser = await getDbUser(req);
    if (!dbUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const rows = await sql`
      SELECT * FROM properties WHERE owner_id = ${dbUser.id} ORDER BY created_at DESC
    `;
    return NextResponse.json({ properties: rows });
  }

  const rows = city
    ? await sql`SELECT * FROM properties WHERE status = 'active' AND city = ${city} ORDER BY created_at DESC`
    : await sql`SELECT * FROM properties WHERE status = 'active' ORDER BY created_at DESC`;

  return NextResponse.json({ properties: rows });
}

export async function POST(req: NextRequest) {
  const dbUser = await getDbUser(req);
  if (!dbUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!dbUser.role || !LISTER_ROLES.includes(dbUser.role)) {
    return NextResponse.json({ error: 'Only dealers/brokers and builders can list properties' }, { status: 403 });
  }

  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: 'Invalid body' }, { status: 400 });

  const {
    title, description, property_type, listing_type, price,
    city = 'Visakhapatnam', locality, bedrooms, bathrooms, area_sqft,
    images = [], features = [], project_id = null,
  } = body;

  if (!title || !property_type || !listing_type || !price) {
    return NextResponse.json({ error: 'title, property_type, listing_type, and price are required' }, { status: 400 });
  }

  const rows = await sql`
    INSERT INTO properties (
      owner_id, project_id, title, description, property_type, listing_type,
      price, city, locality, bedrooms, bathrooms, area_sqft, images, features
    ) VALUES (
      ${dbUser.id}, ${project_id}, ${title}, ${description ?? null}, ${property_type}, ${listing_type},
      ${price}, ${city}, ${locality ?? null}, ${bedrooms ?? null}, ${bathrooms ?? null}, ${area_sqft ?? null},
      ${JSON.stringify(images)}, ${JSON.stringify(features)}
    )
    RETURNING *
  `;

  return NextResponse.json({ property: rows[0] }, { status: 201 });
}
