'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStackApp } from '@hexclave/next';
import { User, TrendingUp, Handshake, Building2, PackageSearch, HardHat } from 'lucide-react';

const ROLES = [
  {
    id: 'general_user',
    title: 'General User',
    description: 'Browse, shortlist, and buy or rent properties',
    icon: User,
  },
  {
    id: 'investor',
    title: 'Investor',
    description: 'Track opportunities and returns across listings',
    icon: TrendingUp,
  },
  {
    id: 'dealer_broker',
    title: 'Property Dealer / Broker',
    description: 'List properties on behalf of owners, manage leads',
    icon: Handshake,
  },
  {
    id: 'builder',
    title: 'Builder / Construction Company',
    description: 'List projects and units, manage inventory',
    icon: Building2,
  },
  {
    id: 'materials_supplier',
    title: 'Materials Supplier',
    description: 'List SKUs, manage stock, fulfill orders',
    icon: PackageSearch,
  },
  {
    id: 'service_provider',
    title: 'Construction / Interior Services',
    description: 'Quote on construction and interior design jobs',
    icon: HardHat,
  },
] as const;

export default function Onboarding() {
  const router = useRouter();
  const app = useStackApp();
  const [selected, setSelected] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleContinue = async () => {
    if (!selected) return;
    setSubmitting(true);
    setError(null);
    try {
      const authHeaders = await app.getAuthHeaders();
      const res = await fetch('/api/user/role', {
        method: 'POST',
        headers: { ...authHeaders, 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: selected }),
      });
      if (!res.ok) throw new Error('Failed to save role');
      router.replace('/');
    } catch {
      setError('Something went wrong. Please try again.');
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">What brings you to AddonProp?</h1>
          <p className="text-slate-600">Pick the option that fits best — you can always update this later.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ROLES.map(({ id, title, description, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setSelected(id)}
              className={`text-left p-5 rounded-2xl border-2 transition-all duration-200 ${
                selected === id
                  ? 'border-emerald-500 bg-emerald-50 shadow-md'
                  : 'border-slate-200 bg-white hover:border-emerald-300 hover:shadow-sm'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                  selected === id ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-600'
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
              <p className="text-sm text-slate-600">{description}</p>
            </button>
          ))}
        </div>

        {error && <p className="text-red-600 text-sm mt-4 text-center">{error}</p>}

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={handleContinue}
            disabled={!selected || submitting}
            className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors"
          >
            {submitting ? 'Saving...' : 'Continue'}
          </button>
        </div>
      </div>
    </main>
  );
}
