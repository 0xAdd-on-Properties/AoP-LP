'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useStackApp, useUser } from '@hexclave/next';
import { Plus, Package, Trash2, MapPin } from 'lucide-react';
import StandardNavbar from '../components/StandardNavbar';

type Sku = {
  id: number;
  name: string;
  category: string;
  status: string;
  price: string;
  unit: string;
  stock_quantity: number;
  made_in_india: boolean;
  origin_country: string | null;
  sale_type: 'b2b_wholesale' | 'b2c_retail' | 'both';
};

const SALE_TYPE_LABEL: Record<Sku['sale_type'], string> = {
  b2b_wholesale: 'Wholesale (B2B)',
  b2c_retail: 'Retail (B2C)',
  both: 'Wholesale & Retail',
};

export default function MySkus() {
  const app = useStackApp();
  const user = useUser({ or: 'return-null' });
  const [skus, setSkus] = useState<Sku[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      if (!user) return;
      try {
        const authHeaders = await app.getAuthHeaders();
        const res = await fetch('/api/skus?mine=true', { headers: authHeaders });
        if (!res.ok) throw new Error('Failed to load');
        const data = await res.json();
        setSkus(data.skus);
      } catch {
        setError('Could not load your SKUs.');
      }
    };
    void load();
  }, [user?.id, app]);

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this SKU?')) return;
    const authHeaders = await app.getAuthHeaders();
    const res = await fetch(`/api/skus/${id}`, { method: 'DELETE', headers: authHeaders });
    if (res.ok) setSkus((prev) => prev?.filter((s) => s.id !== id) ?? null);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <StandardNavbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-32 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-[#1d1d1f]">My SKUs</h1>
          <Link
            href="/dashboard/materials/new"
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full font-semibold transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add SKU
          </Link>
        </div>

        {error && <p className="text-red-600">{error}</p>}

        {skus === null && !error && <p className="text-[#86868b]">Loading...</p>}

        {skus?.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-black/5">
            <p className="text-[#86868b] mb-4">You haven't listed any SKUs yet.</p>
            <Link href="/dashboard/materials/new" className="text-emerald-600 font-semibold hover:underline">
              List your first SKU
            </Link>
          </div>
        )}

        {skus && skus.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skus.map((s) => (
              <div key={s.id} className="min-w-0 bg-white rounded-2xl border border-black/5 p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="min-w-0 font-semibold text-[#1d1d1f]">{s.name}</h3>
                  <span
                    className={`shrink-0 text-xs font-medium px-2 py-1 rounded-full ${
                      s.status === 'active'
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-black/5 text-[#6e6e73]'
                    }`}
                  >
                    {s.status}
                  </span>
                </div>
                <div className="flex items-center text-[#86868b] text-sm mb-2">
                  <Package className="w-3.5 h-3.5 mr-1 shrink-0" />
                  {s.category} · Stock: {s.stock_quantity}
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-emerald-50 text-emerald-700">
                    <MapPin className="w-3 h-3" />
                    {s.made_in_india ? 'Made in India' : `Imported · ${s.origin_country || 'Unknown'}`}
                  </span>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-black/5 text-[#6e6e73]">
                    {SALE_TYPE_LABEL[s.sale_type]}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#1d1d1f]">₹{s.price}</span>
                  <span className="text-xs text-[#86868b] uppercase">per {s.unit}</span>
                </div>
                <button
                  onClick={() => handleDelete(s.id)}
                  className="mt-3 flex items-center gap-1.5 text-sm text-red-600 hover:text-red-700"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
