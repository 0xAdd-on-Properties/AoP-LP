'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStackApp, useUser } from '@hexclave/next';
import { Search, ShoppingCart, MapPin } from 'lucide-react';
import StandardNavbar from '../components/StandardNavbar';

type Sku = {
  id: number;
  name: string;
  description: string | null;
  category: string;
  price: string;
  unit: string;
  stock_quantity: number;
  images: string[];
  made_in_india: boolean;
  origin_country: string | null;
  sale_type: 'b2b_wholesale' | 'b2c_retail' | 'both';
  sourcing_story: string | null;
};

const SALE_TYPE_LABEL: Record<Sku['sale_type'], string> = {
  b2b_wholesale: 'Wholesale (B2B)',
  b2c_retail: 'Retail (B2C)',
  both: 'Wholesale & Retail',
};

export default function MaterialsBrowse() {
  const router = useRouter();
  const app = useStackApp();
  const user = useUser({ or: 'return-null' });
  const [skus, setSkus] = useState<Sku[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [addingId, setAddingId] = useState<number | null>(null);
  const [addedId, setAddedId] = useState<number | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/api/skus');
        if (!res.ok) throw new Error('Failed to load');
        const data = await res.json();
        setSkus(data.skus);
      } catch {
        setError('Could not load materials.');
      }
    };
    void load();
  }, []);

  const filtered = useMemo(() => {
    if (!skus) return null;
    const q = query.trim().toLowerCase();
    if (!q) return skus;
    return skus.filter(
      (s) => s.name.toLowerCase().includes(q) || s.category.toLowerCase().includes(q),
    );
  }, [skus, query]);

  const handleAddToCart = async (skuId: number) => {
    if (!user) {
      router.push('/login');
      return;
    }
    setAddingId(skuId);
    try {
      const authHeaders = await app.getAuthHeaders();
      const res = await fetch('/api/cart', {
        method: 'POST',
        headers: { ...authHeaders, 'Content-Type': 'application/json' },
        body: JSON.stringify({ sku_id: skuId, quantity: 1 }),
      });
      if (res.ok) {
        setAddedId(skuId);
        setTimeout(() => setAddedId((prev) => (prev === skuId ? null : prev)), 1500);
      }
    } finally {
      setAddingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <StandardNavbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-16">
        <p className="text-sm font-medium text-emerald-600 mb-3">Building Materials</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
          Sustainable materials
        </h1>
        <p className="text-base sm:text-lg text-[#6e6e73] leading-relaxed mb-8 max-w-2xl">
          Browse materials from verified suppliers and add them straight to your cart.
        </p>

        <div className="relative max-w-md mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#86868b] w-4 h-4" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or category..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-black/10 rounded-xl text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:ring-2 focus:ring-emerald-600/30 text-sm"
          />
        </div>

        {error && <p className="text-red-600">{error}</p>}
        {filtered === null && !error && <p className="text-[#86868b]">Loading...</p>}

        {filtered?.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-black/5">
            <p className="text-[#86868b]">No materials found.</p>
          </div>
        )}

        {filtered && filtered.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((s) => (
              <div key={s.id} className="min-w-0 bg-white rounded-2xl border border-black/5 p-5">
                <p className="text-xs font-medium text-emerald-600 mb-1">{s.category}</p>
                <h3 className="text-base font-semibold text-[#1d1d1f] mb-1">{s.name}</h3>
                {s.description && (
                  <p className="text-[#6e6e73] text-sm leading-relaxed mb-3 line-clamp-2">{s.description}</p>
                )}

                <div className="flex flex-wrap gap-1.5 mb-3">
                  <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-emerald-50 text-emerald-700">
                    <MapPin className="w-3 h-3" />
                    {s.made_in_india ? 'Made in India' : `Imported · ${s.origin_country || 'Unknown origin'}`}
                  </span>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-black/5 text-[#6e6e73]">
                    {SALE_TYPE_LABEL[s.sale_type]}
                  </span>
                </div>

                {s.sourcing_story && (
                  <p className="text-[#86868b] text-xs leading-relaxed mb-3 line-clamp-2">{s.sourcing_story}</p>
                )}

                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-[#1d1d1f]">₹{s.price}</span>
                  <span className="text-xs text-[#86868b] uppercase">per {s.unit}</span>
                </div>
                <button
                  onClick={() => handleAddToCart(s.id)}
                  disabled={addingId === s.id}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-full text-sm font-medium transition-colors disabled:opacity-50"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  {addedId === s.id ? 'Added ✓' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
