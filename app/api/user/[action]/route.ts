import { NextRequest, NextResponse } from 'next/server';
import { stackServerApp } from '@/lib/stack-server';
import { getDbUser } from '@/lib/db-user';
import { neon } from '@neondatabase/serverless';

const VALID_ROLES = [
  'general_user',
  'investor',
  'dealer_broker',
  'builder',
  'materials_supplier',
  'service_provider',
] as const;

export async function GET(req: NextRequest, { params }: { params: { action: string } }) {
  if (params.action !== 'me') return NextResponse.json({ error: 'Not found' }, { status: 404 });

  const dbUser = await getDbUser(req);
  if (!dbUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  return NextResponse.json({ role: dbUser.role, is_admin: dbUser.is_admin });
}

export async function POST(req: NextRequest, { params }: { params: { action: string } }) {
  const user = await stackServerApp.getUser({ tokenStore: req });
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const sql = neon(process.env.DATABASE_URL!);

  if (params.action === 'sync') {
    const rows = await sql`
      INSERT INTO users (stack_user_id, email, display_name)
      VALUES (${user.id}, ${user.primaryEmail ?? null}, ${user.displayName ?? null})
      ON CONFLICT (stack_user_id) DO UPDATE
        SET email        = EXCLUDED.email,
            display_name = EXCLUDED.display_name,
            updated_at   = NOW()
      RETURNING role
    `;
    return NextResponse.json({ ok: true, role: rows[0]?.role ?? null });
  }

  if (params.action === 'role') {
    const body = await req.json().catch(() => null);
    const role = body?.role;
    if (!VALID_ROLES.includes(role)) {
      return NextResponse.json({ error: 'Invalid role' }, { status: 400 });
    }
    await sql`
      UPDATE users
      SET role = ${role}, updated_at = NOW()
      WHERE stack_user_id = ${user.id}
    `;
    return NextResponse.json({ ok: true, role });
  }

  return NextResponse.json({ error: 'Not found' }, { status: 404 });
}
