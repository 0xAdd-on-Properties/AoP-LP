import { NextRequest, NextResponse } from 'next/server';
import { getDbUser } from '@/lib/db-user';

const TWENTY_BASE = process.env.TWENTY_API_BASE_URL || 'http://127.0.0.1:9030';

function fieldValue(v: unknown): string {
  if (v == null) return '';
  if (typeof v === 'string') return v;
  if (typeof v === 'object' && 'value' in (v as Record<string, unknown>)) {
    return String((v as Record<string, unknown>).value ?? '');
  }
  return String(v);
}

export async function GET(req: NextRequest) {
  const dbUser = await getDbUser(req);
  if (!dbUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!dbUser.is_admin) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

  const apiKey = process.env.TWENTY_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'CRM not configured. Set TWENTY_API_KEY in the server environment.' },
      { status: 503 }
    );
  }

  const { searchParams } = new URL(req.url);
  const limit = searchParams.get('limit') || '50';
  const cursor = searchParams.get('cursor');
  const search = searchParams.get('search') ?? '';
  const grade = searchParams.get('grade');
  const stage = searchParams.get('stage');

  const filters: string[] = [];
  if (search) filters.push(`name[ilike]:%25${encodeURIComponent(search)}%25`);
  if (grade) filters.push(`supplierGrade[eq]:${encodeURIComponent(grade)}`);
  if (stage) filters.push(`pipelineStage[eq]:${encodeURIComponent(stage)}`);

  const url = new URL(`${TWENTY_BASE}/rest/companies`);
  url.searchParams.set('limit', limit);
  if (cursor) url.searchParams.set('starting_after', cursor);
  if (filters.length === 1) {
    url.searchParams.set('filter', filters[0]);
  } else if (filters.length > 1) {
    url.searchParams.set('filter', `and(${filters.join(',')})`);
  }

  let upstream: Response;
  try {
    upstream = await fetch(url, {
      headers: { Authorization: `Bearer ${apiKey}` },
      cache: 'no-store',
    });
  } catch {
    return NextResponse.json({ error: 'Could not reach the CRM. Is the SSH tunnel to RackNerd up?' }, { status: 502 });
  }

  if (!upstream.ok) {
    const text = await upstream.text().catch(() => '');
    return NextResponse.json({ error: `CRM request failed: ${upstream.status} ${text.slice(0, 200)}` }, { status: 502 });
  }

  const json = await upstream.json();
  const companies = (json?.data?.companies ?? []).map((c: Record<string, unknown>) => ({
    id: c.id,
    name: c.name,
    domain: fieldValue(c.domainName && (c.domainName as Record<string, unknown>).primaryLinkUrl),
    categories: c.materialCategories ?? '',
    city: c.address && (c.address as Record<string, unknown>).addressCity,
    supplierGrade: fieldValue(c.supplierGrade),
    pipelineStage: fieldValue(c.pipelineStage) || 'UNGRADED',
    gradeScore: c.gradeScore ?? null,
  }));

  return NextResponse.json({
    companies,
    pageInfo: json?.pageInfo ?? { hasNextPage: false, endCursor: null },
  });
}
