import { NextRequest, NextResponse } from 'next/server';
import { getDbUser } from '@/lib/db-user';

export async function GET(req: NextRequest) {
  const dbUser = await getDbUser(req);
  if (!dbUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  return NextResponse.json({ role: dbUser.role, is_admin: dbUser.is_admin });
}
