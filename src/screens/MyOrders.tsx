'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useStackApp, useUser } from '@hexclave/next';
import { Package } from 'lucide-react';
import StandardNavbar from '../components/StandardNavbar';

type OrderItem = {
  id: number;
  sku_id: number;
  quantity: number;
  price_at_purchase: string;
};

type Order = {
  id: number;
  total_amount: string;
  status: string;
  created_at: string;
  order_items: OrderItem[];
};

export default function MyOrders() {
  const router = useRouter();
  const app = useStackApp();
  const user = useUser({ or: 'return-null' });
  const [orders, setOrders] = useState<Order[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user === null) router.replace('/login');
  }, [user, router]);

  useEffect(() => {
    const load = async () => {
      if (!user) return;
      try {
        const authHeaders = await app.getAuthHeaders();
        const res = await fetch('/api/orders', { headers: authHeaders });
        if (!res.ok) throw new Error('Failed to load');
        const data = await res.json();
        setOrders(data.orders);
      } catch {
        setError('Could not load your orders.');
      }
    };
    void load();
  }, [user?.id, app]);

  const statusClass = (status: string) => {
    if (status === 'fulfilled') return 'bg-emerald-50 text-emerald-700';
    if (status === 'confirmed') return 'bg-amber-100 text-amber-700';
    if (status === 'cancelled') return 'bg-red-50 text-red-700';
    return 'bg-black/5 text-[#6e6e73]';
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <StandardNavbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-32 pb-16">
        <h1 className="text-3xl font-bold text-[#1d1d1f] mb-8">My Orders</h1>

        {error && <p className="text-red-600">{error}</p>}
        {orders === null && !error && <p className="text-[#86868b]">Loading...</p>}

        {orders?.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-black/5">
            <p className="text-[#86868b] mb-4">You haven't placed any orders yet.</p>
            <Link href="/materials" className="text-emerald-600 font-semibold hover:underline">
              Browse materials
            </Link>
          </div>
        )}

        {orders && orders.length > 0 && (
          <div className="space-y-4">
            {orders.map((o) => (
              <div key={o.id} className="bg-white rounded-2xl border border-black/5 p-5">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <Package className="w-4 h-4 text-[#86868b] shrink-0" />
                    <h3 className="font-semibold text-[#1d1d1f]">Order #{o.id}</h3>
                  </div>
                  <span className={`shrink-0 text-xs font-medium px-2 py-1 rounded-full ${statusClass(o.status)}`}>
                    {o.status}
                  </span>
                </div>
                <p className="text-sm text-[#86868b] mb-3">
                  {new Date(o.created_at).toLocaleDateString()} · {o.order_items.length} item(s)
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#1d1d1f]">₹{o.total_amount}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
