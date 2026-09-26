'use client';

import { StackProvider, StackTheme } from '@hexclave/next';
import { stackApp } from '@/lib/stack';
import AuthStateSync from '@/src/components/auth/AuthStateSync';
import ThemeToggle from '@/src/components/ThemeToggle';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StackProvider app={stackApp}>
      <StackTheme>
        <AuthStateSync />
        <ThemeToggle />
        {children}
      </StackTheme>
    </StackProvider>
  );
}
