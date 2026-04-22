'use client';

import { useEffect } from 'react';
import { useStackApp, useUser } from '@stackframe/stack';

export default function AuthStateSync() {
  const app = useStackApp();
  const user = useUser({ or: 'return-null' });

  useEffect(() => {
    const syncUser = async () => {
      if (!user) {
        return;
      }

      try {
        const authHeaders = await app.getAuthHeaders();
        await fetch('/api/user/sync', {
          method: 'POST',
          headers: {
            ...authHeaders,
            'Content-Type': 'application/json',
          },
        });
      } catch {
        // Keep auth UX non-blocking even if sync fails.
      }
    };

    void syncUser();
  }, [app, user?.id]);

  return null;
}
