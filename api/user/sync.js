import { StackServerApp } from '@stackframe/stack';
import { neon } from '@neondatabase/serverless';

const stackServer = new StackServerApp({
  projectId: process.env.STACK_PROJECT_ID!,
  publishableClientKey: process.env.STACK_PUBLISHABLE_CLIENT_KEY!,
  secretServerKey: process.env.STACK_SECRET_SERVER_KEY!,
  tokenStore: 'memory',
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Verify Stack session from incoming request headers
  const user = await stackServer.getUser({ tokenStore: req });
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const sql = neon(process.env.DATABASE_URL!);
  await sql`
    INSERT INTO users (stack_user_id, email, display_name)
    VALUES (${user.id}, ${user.primaryEmail ?? null}, ${user.displayName ?? null})
    ON CONFLICT (stack_user_id) DO UPDATE
      SET email        = EXCLUDED.email,
          display_name = EXCLUDED.display_name,
          updated_at   = NOW()
  `;

  return res.status(200).json({ ok: true });
}
