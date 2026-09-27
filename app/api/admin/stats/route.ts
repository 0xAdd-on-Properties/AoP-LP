import { NextRequest, NextResponse } from 'next/server';
import { getDbUser, sql } from '@/lib/db-user';

export async function GET(req: NextRequest) {
  const dbUser = await getDbUser(req);
  if (!dbUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!dbUser.is_admin) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

  const [usersByRole, properties, projects, skus, orders, quotationRequests, suppliers] = await Promise.all([
    sql`SELECT COALESCE(role::text, 'unset') AS role, COUNT(*)::int AS count FROM users GROUP BY role ORDER BY count DESC`,
    sql`SELECT COUNT(*)::int AS count FROM properties`,
    sql`SELECT COUNT(*)::int AS count FROM projects`,
    sql`SELECT COUNT(*)::int AS count FROM skus`,
    sql`SELECT status, COUNT(*)::int AS count FROM orders GROUP BY status`,
    sql`SELECT status, COUNT(*)::int AS count FROM quotation_requests GROUP BY status`,
    sql`SELECT scope, COUNT(*)::int AS count, COUNT(*) FILTER (WHERE verified)::int AS verified_count FROM supplier_directory GROUP BY scope`,
  ]);

  const totalUsers = usersByRole.reduce((sum: number, r: any) => sum + r.count, 0);

  return NextResponse.json({
    totalUsers,
    usersByRole,
    propertiesCount: properties[0]?.count ?? 0,
    projectsCount: projects[0]?.count ?? 0,
    skusCount: skus[0]?.count ?? 0,
    ordersByStatus: orders,
    quotationRequestsByStatus: quotationRequests,
    suppliersByScope: suppliers,
  });
}
