import type { Metadata } from 'next';
import { Suspense } from 'react';
import { StackProvider, StackTheme } from '@stackframe/stack';
import { stackApp } from '@/lib/stack';
import AuthStateSync from '@/src/components/auth/AuthStateSync';
import ThemeToggle from '@/src/components/ThemeToggle';
import '@/src/index.css';

export const metadata: Metadata = {
  title: 'AddonProp - Complete Property Ecosystem',
  description: "India's leading platform for sustainable property marketplace, eco-friendly construction materials, and smart real estate solutions.",
  keywords: 'property marketplace, sustainable construction, eco properties, real estate India, green buildings, smart homes',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StackProvider app={stackApp}>
          <StackTheme>
            <Suspense>
              <AuthStateSync />
              <ThemeToggle />
              {children}
            </Suspense>
          </StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}
