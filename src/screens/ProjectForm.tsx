'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStackApp } from '@hexclave/next';
import StandardNavbar from '../components/StandardNavbar';

export default function ProjectForm() {
  const router = useRouter();
  const app = useStackApp();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: '',
    description: '',
    city: 'Visakhapatnam',
    locality: '',
    status: 'under_construction',
    possession_date: '',
    total_units: '',
  });

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const authHeaders = await app.getAuthHeaders();
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { ...authHeaders, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          possession_date: form.possession_date || null,
          total_units: form.total_units ? Number(form.total_units) : null,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || 'Failed to create project');
      }
      router.push('/dashboard/projects');
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
        <h1 className="text-3xl font-bold text-[#1d1d1f] mb-8">List a Project</h1>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-black/5 p-6 space-y-5">
          <div>
            <label className={labelClass}>Project Name</label>
            <input
              required
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              className={inputClass}
              placeholder="e.g. Green Meadows Residency"
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
                placeholder="e.g. MVP Colony"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="min-w-0">
              <label className={labelClass}>Status</label>
              <select
                value={form.status}
                onChange={(e) => update('status', e.target.value)}
                className={inputClass}
              >
                <option value="under_construction">Under Construction</option>
                <option value="ready_to_move">Ready to Move</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="min-w-0">
              <label className={labelClass}>Possession Date</label>
              <input
                type="date"
                value={form.possession_date}
                onChange={(e) => update('possession_date', e.target.value)}
                className={inputClass}
              />
            </div>
            <div className="min-w-0">
              <label className={labelClass}>Total Units</label>
              <input
                type="number"
                value={form.total_units}
                onChange={(e) => update('total_units', e.target.value)}
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
            {submitting ? 'Publishing...' : 'Publish Project'}
          </button>
        </form>
      </main>
    </div>
  );
}
