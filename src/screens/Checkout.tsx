'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useStackApp, useUser } from '@hexclave/next';
import StandardNavbar from '../components/StandardNavbar';

type CartItem = {
  id: number;
  sku_id: number;
  quantity: number;
  name: string;
  price: string;
  unit: string;
};

export default function Checkout() {
  const router = useRouter();
  const app = useStackApp();
  const user = useUser({ or: 'return-null' });
  const [items, setItems] = useState<CartItem[] | null>(null);
  const [total, setTotal] = useState(0);
  const [shippingAddress, setShippingAddress] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderId, setOrderId] = useState<number | null>(null);

  useEffect(() => {
    if (user === null) router.replace('/login');
  }, [user, router]);

  useEffect(() => {
    const load = async () => {
      if (!user) return;
      try {
        const authHeaders = await app.getAuthHeaders();
        const res = await fetch('/api/cart', { headers: authHeaders });
        if (!res.ok) throw new Error('Failed to load');
        const data = await res.json();
        setItems(data.items);
        setTotal(data.total);
      } catch {
        setError('Could not load your cart.');
      }
    };
    void load();
  }, [app, user]);

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const authHeaders = await app.getAuthHeaders();
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { ...authHeaders, 'Content-Type': 'application/json' },
        body: JSON.stringify({ shipping_address: shippingAddress }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || 'Failed to place order');
      }
      const data = await res.json();
      setOrderId(data.order.id);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    'w-full bg-white border border-black/10 rounded-xl px-4 py-2.5 text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-emerald-600/30';
  const labelClass = 'block text-sm font-medium text-[#1d1d1f] mb-1';

  if (!user) return null;

  if (orderId !== null) {
    return (
      <div className="min-h-screen bg-[#f5f5f7]">
        <StandardNavbar />
        <main className="max-w-2xl mx-auto px-4 sm:px-6 pt-32 pb-16 text-center">
          <div className="bg-white rounded-2xl border border-black/5 p-10">
            <h1 className="text-2xl font-bold text-[#1d1d1f] mb-2">Order placed</h1>
            <p className="text-[#6e6e73] mb-6">
              Your order #{orderId} has been confirmed. Payment is collected on delivery.
            </p>
            <Link
              href="/dashboard/orders"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
            >
              View my orders
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <StandardNavbar />
      <main className="max-w-2xl mx-auto px-4 sm:px-6 pt-32 pb-16">
        <h1 className="text-3xl font-bold text-[#1d1d1f] mb-8">Checkout</h1>

        {error && <p className="text-red-600 mb-4">{error}</p>}
        {items === null && !error && <p className="text-[#86868b]">Loading...</p>}

        {items?.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-black/5">
            <p className="text-[#86868b] mb-4">Your cart is empty.</p>
            <Link href="/materials" className="text-emerald-600 font-semibold hover:underline">
              Browse materials
            </Link>
          </div>
        )}

        {items && items.length > 0 && (
          <>
            <div className="bg-white rounded-2xl border border-black/5 p-5 mb-6 space-y-3">
              <h2 className="font-semibold text-[#1d1d1f] mb-2">Order Summary</h2>
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between text-sm">
                  <span className="text-[#6e6e73]">{item.name} × {item.quantity}</span>
                  <span className="text-[#1d1d1f] font-medium">
                    ₹{(Number(item.price) * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
              <div className="flex items-center justify-between pt-3 border-t border-black/5">
                <span className="text-[#6e6e73] font-medium">Total</span>
                <span className="text-lg font-bold text-[#1d1d1f]">₹{total.toFixed(2)}</span>
              </div>
            </div>

            <form onSubmit={handlePlaceOrder} className="bg-white rounded-2xl border border-black/5 p-6 space-y-5">
              <div>
                <label className={labelClass}>Shipping Address</label>
                <textarea
                  required
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  rows={4}
                  className={inputClass}
                  placeholder="Enter the delivery address"
                />
              </div>

              <p className="text-xs text-[#86868b]">
                Payment collected on delivery — online payment coming soon.
              </p>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-full font-semibold disabled:opacity-50 transition-colors"
              >
                {submitting ? 'Placing order...' : 'Place Order'}
              </button>
            </form>
          </>
        )}
      </main>
    </div>
  );
}
