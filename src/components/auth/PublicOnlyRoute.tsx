'use client';

import { useRouter } from 'next/navigation';
import { useUser } from '@hexclave/next';
import { useEffect, type ReactNode } from 'react';

export default function PublicOnlyRoute({ children }: { children: ReactNode }) {
  const user = useUser({ or: 'return-null' });
  const router = useRouter();

  useEffect(() => {
    if (user) router.replace('/');
  }, [user, router]);

  if (user) return null;
  return <>{children}</>;
}
