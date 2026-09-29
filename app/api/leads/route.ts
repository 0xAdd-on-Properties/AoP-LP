import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db-user';

const VALID_LEAD_TYPES = ['architect_inquiry', 'mortgage_inquiry', 'ecozone_inquiry'];

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: 'Invalid body' }, { status: 400 });

  const { lead_type, name, email = null, phone = null, city = null, message = null, metadata = null } = body;

  if (!VALID_LEAD_TYPES.includes(lead_type) || !name) {
    return NextResponse.json({ error: 'lead_type and name are required' }, { status: 400 });
  }

  const rows = await sql`
    INSERT INTO service_leads (lead_type, name, email, phone, city, message, metadata)
    VALUES (${lead_type}, ${name}, ${email}, ${phone}, ${city}, ${message}, ${metadata ? JSON.stringify(metadata) : null})
    RETURNING id
  `;

  return NextResponse.json({ ok: true, id: rows[0].id }, { status: 201 });
}
