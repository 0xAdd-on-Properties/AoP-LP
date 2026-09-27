import { NextRequest } from 'next/server';
import { stackServerApp } from '@/lib/stack-server';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

export type DbUser = {
  id: number;
  stack_user_id: string;
  email: string | null;
  display_name: string | null;
  role: string | null;
};

/** Resolves the authenticated request to this app's internal users row (not the Hexclave user). */
export async function getDbUser(req: NextRequest): Promise<DbUser | null> {
  const user = await stackServerApp.getUser({ tokenStore: req });
  if (!user) return null;

  const rows = await sql`
    SELECT id, stack_user_id, email, display_name, role
    FROM users
    WHERE stack_user_id = ${user.id}
  `;
  return (rows[0] as DbUser) ?? null;
}

export { sql };
