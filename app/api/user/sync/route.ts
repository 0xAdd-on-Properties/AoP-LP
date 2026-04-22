import { NextRequest, NextResponse } from 'next/server';
import { stackServerApp } from '@/lib/stack-server';
import { neon } from '@neondatabase/serverless';

export async function POST(req: NextRequest) {
  const user = await stackServerApp.getUser({ tokenStore: req });
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const sql = neon(process.env.DATABASE_URL!);
  await sql`
    INSERT INTO users (stack_user_id, email, display_name)
    VALUES (${user.id}, ${user.primaryEmail ?? null}, ${user.displayName ?? null})
    ON CONFLICT (stack_user_id) DO UPDATE
      SET email        = EXCLUDED.email,
          display_name = EXCLUDED.display_name,
          updated_at   = NOW()
  `;

  return NextResponse.json({ ok: true });
}
