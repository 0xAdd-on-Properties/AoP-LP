import { NextRequest, NextResponse } from 'next/server';
import { getDbUser, sql } from '@/lib/db-user';

const SERVICE_TYPES = ['construction', 'interior_design', 'renovation'];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const mine = searchParams.get('mine') === 'true';
  const dbUser = await getDbUser(req);
  if (!dbUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  if (mine) {
    const rows = await sql`
      SELECT * FROM quotation_requests WHERE requester_id = ${dbUser.id} ORDER BY created_at DESC
    `;
    return NextResponse.json({ requests: rows });
  }

  // Service providers/builders browse open requests to quote on.
  if (dbUser.role !== 'service_provider' && dbUser.role !== 'builder') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }
  const rows = await sql`
    SELECT qr.*, u.display_name AS requester_name
    FROM quotation_requests qr
    JOIN users u ON u.id = qr.requester_id
    WHERE qr.status = 'open'
    ORDER BY qr.created_at DESC
  `;
  return NextResponse.json({ requests: rows });
}

export async function POST(req: NextRequest) {
  const dbUser = await getDbUser(req);
  if (!dbUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: 'Invalid body' }, { status: 400 });

  const {
    service_type, title, description,
    budget_min = null, budget_max = null,
    city = 'Visakhapatnam', locality = null,
  } = body;

  if (!title || !SERVICE_TYPES.includes(service_type)) {
    return NextResponse.json({ error: 'title and a valid service_type are required' }, { status: 400 });
  }

  const rows = await sql`
    INSERT INTO quotation_requests (
      requester_id, service_type, title, description, budget_min, budget_max, city, locality
    ) VALUES (
      ${dbUser.id}, ${service_type}, ${title}, ${description ?? null}, ${budget_min}, ${budget_max}, ${city}, ${locality}
    )
    RETURNING *
  `;

  return NextResponse.json({ request: rows[0] }, { status: 201 });
}
