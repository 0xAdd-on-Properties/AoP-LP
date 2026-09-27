'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStackApp } from '@hexclave/next';
import StandardNavbar from '../components/StandardNavbar';

const SERVICE_TYPES = [
  { value: 'construction', label: 'Construction' },
  { value: 'interior_design', label: 'Interior Design' },
  { value: 'renovation', label: 'Renovation' },
];

export default function QuotationRequestForm() {
  const router = useRouter();
  const app = useStackApp();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    service_type: 'construction',
    title: '',
    description: '',
    budget_min: '',
    budget_max: '',
    city: 'Visakhapatnam',
    locality: '',
  });

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const authHeaders = await app.getAuthHeaders();
      const res = await fetch('/api/quotation-requests', {
        method: 'POST',
        headers: { ...authHeaders, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          budget_min: form.budget_min ? Number(form.budget_min) : null,
          budget_max: form.budget_max ? Number(form.budget_max) : null,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || 'Failed to submit request');
      }
      router.push('/dashboard/quotes');
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
        <h1 className="text-3xl font-bold text-[#1d1d1f] mb-2">Get a Quote</h1>
        <p className="text-[#6e6e73] mb-8">
          Tell us about your construction or interior design project — verified builders and service
          providers will respond with quotes.
        </p>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-black/5 p-6 space-y-5">
          <div>
            <label className={labelClass}>Service Type</label>
            <select
              value={form.service_type}
              onChange={(e) => update('service_type', e.target.value)}
              className={inputClass}
            >
              {SERVICE_TYPES.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelClass}>Project Title</label>
            <input
              required
              value={form.title}
              onChange={(e) => update('title', e.target.value)}
              className={inputClass}
              placeholder="e.g. Full home interior for 3BHK apartment"
            />
          </div>

          <div>
            <label className={labelClass}>Details</label>
            <textarea
              value={form.description}
              onChange={(e) => update('description', e.target.value)}
              rows={4}
              className={inputClass}
              placeholder="Describe the scope, timeline, and any preferences"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="min-w-0">
              <label className={labelClass}>Budget Min (₹)</label>
              <input
                type="number"
                value={form.budget_min}
                onChange={(e) => update('budget_min', e.target.value)}
                className={inputClass}
              />
            </div>
            <div className="min-w-0">
              <label className={labelClass}>Budget Max (₹)</label>
              <input
                type="number"
                value={form.budget_max}
                onChange={(e) => update('budget_max', e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="min-w-0">
              <label className={labelClass}>City</label>
              <input
                value={form.city}
                onChange={(e) => update('city', e.target.value)}
                className={inputClass}
              />
            </div>
            <div className="min-w-0">
              <label className={labelClass}>Locality</label>
              <input
                value={form.locality}
                onChange={(e) => update('locality', e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-full font-semibold disabled:opacity-50 transition-colors"
          >
            {submitting ? 'Submitting...' : 'Request Quote'}
          </button>
        </form>
      </main>
    </div>
  );
}
