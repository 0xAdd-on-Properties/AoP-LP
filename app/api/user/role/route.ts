import { NextRequest, NextResponse } from 'next/server';
import { stackServerApp } from '@/lib/stack-server';
import { neon } from '@neondatabase/serverless';

const VALID_ROLES = [
  'general_user',
  'investor',
  'dealer_broker',
  'builder',
  'materials_supplier',
  'service_provider',
] as const;

export async function POST(req: NextRequest) {
  const user = await stackServerApp.getUser({ tokenStore: req });
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json().catch(() => null);
  const role = body?.role;
  if (!VALID_ROLES.includes(role)) {
    return NextResponse.json({ error: 'Invalid role' }, { status: 400 });
  }

  const sql = neon(process.env.DATABASE_URL!);
  await sql`
    UPDATE users
    SET role = ${role}, updated_at = NOW()
    WHERE stack_user_id = ${user.id}
  `;

  return NextResponse.json({ ok: true, role });
}
