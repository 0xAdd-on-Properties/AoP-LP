import { neon } from '@neondatabase/serverless';

// Lazily initialised so the module can be imported without the env var being set at build time.
let _sql: ReturnType<typeof neon> | null = null;

export function getDb() {
  if (!_sql) {
    const url = process.env.DATABASE_URL;
    if (!url) throw new Error('Missing env var: DATABASE_URL');
    _sql = neon(url);
  }
  return _sql;
}
