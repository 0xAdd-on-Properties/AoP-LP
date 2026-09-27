'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStackApp } from '@hexclave/next';
import StandardNavbar from '../components/StandardNavbar';

export default function SkuForm() {
  const router = useRouter();
  const app = useStackApp();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    unit: '',
    stock_quantity: '',
    made_in_india: 'true',
    origin_country: '',
    sale_type: 'b2c_retail',
    sourcing_story: '',
  });

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const authHeaders = await app.getAuthHeaders();
      const res = await fetch('/api/skus', {
        method: 'POST',
        headers: { ...authHeaders, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          price: Number(form.price),
          stock_quantity: form.stock_quantity ? Number(form.stock_quantity) : 0,
          made_in_india: form.made_in_india === 'true',
          origin_country: form.made_in_india === 'true' ? null : form.origin_country,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || 'Failed to create SKU');
      }
      router.push('/dashboard/materials');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
      setSubmitting(false);
    }
  };

  const inputClass =
    'w-full bg-white border border-black/10 rounded-xl px-4 py-2.5 text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-emerald-600/30';
  const labelClass = 'block text-sm font-medium text-[#1d1d1f] mb-1';

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <StandardNavbar />
      <main className="max-w-2xl mx-auto px-4 sm:px-6 pt-32 pb-16">
        <h1 className="text-3xl font-bold text-[#1d1d1f] mb-8">Add a SKU</h1>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-black/5 p-6 space-y-5">
          <div>
            <label className={labelClass}>Name</label>
            <input
              required
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              className={inputClass}
              placeholder="e.g. Recycled Steel Roofing Sheets"
            />
          </div>

          <div>
            <label className={labelClass}>Description</label>
            <textarea
              value={form.description}
              onChange={(e) => update('description', e.target.value)}
              rows={3}
              className={inputClass}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="min-w-0">
              <label className={labelClass}>Category</label>
              <input
                required
                value={form.category}
                onChange={(e) => update('category', e.target.value)}
                className={inputClass}
                placeholder="e.g. Recycled Materials"
              />
            </div>
            <div className="min-w-0">
              <label className={labelClass}>Unit</label>
              <input
                value={form.unit}
                onChange={(e) => update('unit', e.target.value)}
                className={inputClass}
                placeholder="e.g. bag, sq ft, ton"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="min-w-0">
              <label className={labelClass}>Price (₹)</label>
              <input
                required
                type="number"
                value={form.price}
                onChange={(e) => update('price', e.target.value)}
                className={inputClass}
              />
            </div>
            <div className="min-w-0">
              <label className={labelClass}>Stock Quantity</label>
              <input
                type="number"
                value={form.stock_quantity}
                onChange={(e) => update('stock_quantity', e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          <div className="pt-2 border-t border-black/5">
            <p className="text-sm font-semibold text-[#1d1d1f] mb-1 pt-4">Sourcing &amp; sustainability</p>
            <p className="text-xs text-[#86868b] mb-4">
              Buyers see this on the product page — be specific, it's what makes the sustainability claim credible.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="min-w-0">
              <label className={labelClass}>Made in India?</label>
              <select
                value={form.made_in_india}
                onChange={(e) => update('made_in_india', e.target.value)}
                className={inputClass}
              >
                <option value="true">Yes, made in India</option>
                <option value="false">No, imported</option>
              </select>
            </div>
            <div className="min-w-0">
              <label className={labelClass}>Sale type</label>
              <select
                value={form.sale_type}
                onChange={(e) => update('sale_type', e.target.value)}
                className={inputClass}
              >
                <option value="b2c_retail">B2C — Retail</option>
                <option value="b2b_wholesale">B2B — Wholesale</option>
                <option value="both">Both B2B &amp; B2C</option>
              </select>
            </div>
          </div>

          {form.made_in_india === 'false' && (
            <div>
              <label className={labelClass}>Imported from</label>
              <input
                value={form.origin_country}
                onChange={(e) => update('origin_country', e.target.value)}
                className={inputClass}
                placeholder="e.g. Germany, China, Vietnam"
              />
            </div>
          )}

          <div>
            <label className={labelClass}>Sourcing story</label>
            <textarea
              value={form.sourcing_story}
              onChange={(e) => update('sourcing_story', e.target.value)}
              rows={4}
              className={inputClass}
              placeholder="Where does this material actually come from? Who makes it, how is it produced, and what makes it sustainable?"
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-full font-semibold disabled:opacity-50 transition-colors"
          >
            {submitting ? 'Publishing...' : 'Publish SKU'}
          </button>
        </form>
      </main>
    </div>
  );
}
