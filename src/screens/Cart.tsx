'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useStackApp, useUser } from '@hexclave/next';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import StandardNavbar from '../components/StandardNavbar';

type CartItem = {
  id: number;
  sku_id: number;
  quantity: number;
  name: string;
  price: string;
  unit: string;
  stock_quantity: number;
};

export default function Cart() {
  const router = useRouter();
  const app = useStackApp();
  const user = useUser({ or: 'return-null' });
  const [items, setItems] = useState<CartItem[] | null>(null);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState<string | null>(null);

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
  }, [user?.id, app]);

  const updateQuantity = async (id: number, quantity: number) => {
    if (quantity <= 0) return;
    const authHeaders = await app.getAuthHeaders();
    const res = await fetch(`/api/cart/${id}`, {
      method: 'PATCH',
      headers: { ...authHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity }),
    });
    if (res.ok) {
      setItems((prev) => {
        const next = prev?.map((i) => (i.id === id ? { ...i, quantity } : i)) ?? null;
        setTotal(next ? next.reduce((sum, i) => sum + Number(i.price) * i.quantity, 0) : 0);
        return next;
      });
    }
  };

  const removeItem = async (id: number) => {
    const authHeaders = await app.getAuthHeaders();
    const res = await fetch(`/api/cart/${id}`, { method: 'DELETE', headers: authHeaders });
    if (res.ok) {
      setItems((prev) => {
        const next = prev?.filter((i) => i.id !== id) ?? null;
        setTotal(next ? next.reduce((sum, i) => sum + Number(i.price) * i.quantity, 0) : 0);
        return next;
      });
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <StandardNavbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-32 pb-16">
        <h1 className="text-3xl font-bold text-[#1d1d1f] mb-8">Your Cart</h1>

        {error && <p className="text-red-600">{error}</p>}
        {items === null && !error && <p className="text-[#86868b]">Loading...</p>}

        {items?.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-black/5">
            <ShoppingBag className="w-8 h-8 text-[#86868b] mx-auto mb-3" />
            <p className="text-[#86868b] mb-4">Your cart is empty.</p>
            <Link href="/materials" className="text-emerald-600 font-semibold hover:underline">
              Browse materials
            </Link>
          </div>
        )}

        {items && items.length > 0 && (
          <>
            <div className="space-y-4 mb-8">
              {items.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl border border-black/5 p-5 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="font-semibold text-[#1d1d1f] truncate">{item.name}</h3>
                    <p className="text-sm text-[#86868b]">₹{item.price} / {item.unit}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="flex items-center border border-black/10 rounded-full">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 text-[#1d1d1f] hover:text-emerald-600"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-8 text-center text-sm font-medium text-[#1d1d1f]">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 text-[#1d1d1f] hover:text-emerald-600"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <span className="font-semibold text-[#1d1d1f] w-20 text-right">
                      ₹{(Number(item.price) * item.quantity).toFixed(2)}
                    </span>
                    <button onClick={() => removeItem(item.id)} className="text-red-600 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl border border-black/5 p-5 flex items-center justify-between mb-6">
              <span className="text-[#6e6e73] font-medium">Total</span>
              <span className="text-xl font-bold text-[#1d1d1f]">₹{total.toFixed(2)}</span>
            </div>

            <Link
              href="/checkout"
              className="block text-center w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-full font-semibold transition-colors"
            >
              Proceed to Checkout
            </Link>
          </>
        )}
      </main>
    </div>
  );
}
