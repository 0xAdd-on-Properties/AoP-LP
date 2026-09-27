'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useStackApp, useUser } from '@hexclave/next';

export default function AuthStateSync() {
  const app = useStackApp();
  const user = useUser({ or: 'return-null' });
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const syncUser = async () => {
      if (!user) {
        return;
      }

      try {
        const authHeaders = await app.getAuthHeaders();
        const res = await fetch('/api/user/sync', {
          method: 'POST',
          headers: {
            ...authHeaders,
            'Content-Type': 'application/json',
          },
        });
        const data = await res.json().catch(() => null);
        if (data && !data.role && pathname !== '/onboarding') {
          router.replace('/onboarding');
        }
      } catch {
        // Keep auth UX non-blocking even if sync fails.
      }
    };

    void syncUser();
  }, [app, user?.id, pathname, router]);

  return null;
}
