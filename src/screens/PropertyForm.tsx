'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStackApp } from '@hexclave/next';
import StandardNavbar from '../components/StandardNavbar';

const PROPERTY_TYPES = ['villa', 'apartment', 'house', 'plot', 'commercial', 'builder_floor'];

export default function PropertyForm() {
  const router = useRouter();
  const app = useStackApp();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    title: '',
    description: '',
    property_type: 'apartment',
    listing_type: 'buy',
    price: '',
    city: 'Visakhapatnam',
    locality: '',
    bedrooms: '',
    bathrooms: '',
    area_sqft: '',
  });

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const authHeaders = await app.getAuthHeaders();
      const res = await fetch('/api/properties', {
        method: 'POST',
        headers: { ...authHeaders, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          price: Number(form.price),
          bedrooms: form.bedrooms ? Number(form.bedrooms) : null,
          bathrooms: form.bathrooms ? Number(form.bathrooms) : null,
          area_sqft: form.area_sqft ? Number(form.area_sqft) : null,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || 'Failed to create listing');
      }
      router.push('/dashboard/properties');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <StandardNavbar />
      <main className="max-w-2xl mx-auto px-4 pt-32 pb-16">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">List a Property</h1>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
            <input
              required
              value={form.title}
              onChange={(e) => update('title', e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="e.g. 3 BHK Villa with Garden"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
            <textarea
              value={form.description}
              onChange={(e) => update('description', e.target.value)}
              rows={3}
              className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Property Type</label>
              <select
                value={form.property_type}
                onChange={(e) => update('property_type', e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                {PROPERTY_TYPES.map((t) => (
                  <option key={t} value={t}>{t.replace('_', ' ')}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Listing Type</label>
              <select
                value={form.listing_type}
                onChange={(e) => update('listing_type', e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="buy">Buy</option>
                <option value="rent">Rent</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Price (₹)</label>
            <input
              required
              type="number"
              value={form.price}
              onChange={(e) => update('price', e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">City</label>
              <input
                value={form.city}
                onChange={(e) => update('city', e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Locality</label>
              <input
                value={form.locality}
                onChange={(e) => update('locality', e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="e.g. MVP Colony"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Bedrooms</label>
              <input
                type="number"
                value={form.bedrooms}
                onChange={(e) => update('bedrooms', e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Bathrooms</label>
              <input
                type="number"
                value={form.bathrooms}
                onChange={(e) => update('bathrooms', e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Area (sq ft)</label>
              <input
                type="number"
                value={form.area_sqft}
                onChange={(e) => update('area_sqft', e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold disabled:opacity-50 transition-colors"
          >
            {submitting ? 'Publishing...' : 'Publish Listing'}
          </button>
        </form>
      </main>
    </div>
  );
}
