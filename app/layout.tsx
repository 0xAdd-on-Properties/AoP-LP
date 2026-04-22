import type { Metadata } from 'next';
import { Suspense } from 'react';
import Providers from './providers';
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
        <Suspense>
          <Providers>{children}</Providers>
        </Suspense>
      </body>
    </html>
  );
}
