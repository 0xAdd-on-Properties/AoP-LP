import { NextRequest, NextResponse } from 'next/server';
import { getDbUser, sql } from '@/lib/db-user';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const dbUser = await getDbUser(req);
  if (!dbUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const requestRow = await sql`SELECT requester_id FROM quotation_requests WHERE id = ${params.id}`;
  if (!requestRow[0]) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  // Only the requester (sees all quotes) or a provider (sees just their own) can view.
  const rows = requestRow[0].requester_id === dbUser.id
    ? await sql`
        SELECT q.*, u.display_name AS provider_name FROM quotes q
        JOIN users u ON u.id = q.provider_id
        WHERE q.quotation_request_id = ${params.id} ORDER BY q.created_at ASC
      `
    : await sql`
        SELECT * FROM quotes WHERE quotation_request_id = ${params.id} AND provider_id = ${dbUser.id}
      `;

  return NextResponse.json({ quotes: rows });
}

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const dbUser = await getDbUser(req);
  if (!dbUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (dbUser.role !== 'service_provider' && dbUser.role !== 'builder') {
    return NextResponse.json({ error: 'Only service providers and builders can submit quotes' }, { status: 403 });
  }

  const requestRow = await sql`SELECT status FROM quotation_requests WHERE id = ${params.id}`;
  if (!requestRow[0]) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  const body = await req.json().catch(() => null);
  const amount = body?.amount;
  if (!amount || Number(amount) <= 0) {
    return NextResponse.json({ error: 'A positive amount is required' }, { status: 400 });
  }

  const rows = await sql`
    INSERT INTO quotes (quotation_request_id, provider_id, amount, message)
    VALUES (${params.id}, ${dbUser.id}, ${amount}, ${body.message ?? null})
    ON CONFLICT (quotation_request_id, provider_id)
      DO UPDATE SET amount = EXCLUDED.amount, message = EXCLUDED.message
    RETURNING *
  `;

  await sql`UPDATE quotation_requests SET status = 'quoted', updated_at = NOW() WHERE id = ${params.id} AND status = 'open'`;

  return NextResponse.json({ quote: rows[0] }, { status: 201 });
}
