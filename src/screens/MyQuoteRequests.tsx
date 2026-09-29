'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useStackApp, useUser } from '@hexclave/next';
import { Plus, MapPin, Briefcase } from 'lucide-react';
import StandardNavbar from '../components/StandardNavbar';

type QuoteRequest = {
  id: number;
  service_type: string;
  title: string;
  status: string;
  city: string;
  locality: string | null;
  budget_min: string | null;
  budget_max: string | null;
};

export default function MyQuoteRequests() {
  const app = useStackApp();
  const user = useUser({ or: 'return-null' });
  const [requests, setRequests] = useState<QuoteRequest[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      if (!user) return;
      try {
        const authHeaders = await app.getAuthHeaders();
        const res = await fetch('/api/quotation-requests?mine=true', { headers: authHeaders });
        if (!res.ok) throw new Error('Failed to load');
        const data = await res.json();
        setRequests(data.requests);
      } catch {
        setError('Could not load your requests.');
      }
    };
    void load();
  }, [user?.id, app]);

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <StandardNavbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-32 pb-16">
        <div className="flex items-center justify-between mb-8">
          <div className="min-w-0">
            <h1 className="text-3xl font-bold text-[#1d1d1f]">My Quote Requests</h1>
            <p className="text-[#6e6e73] mt-1">Construction and interior design jobs you've posted</p>
          </div>
          <Link
            href="/get-a-quote"
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full font-semibold transition-colors shrink-0"
          >
            <Plus className="w-4 h-4" />
            New Request
          </Link>
        </div>

        {error && <p className="text-red-600">{error}</p>}
        {requests === null && !error && <p className="text-[#86868b]">Loading...</p>}

        {requests?.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-black/5">
            <p className="text-[#86868b] mb-4">You haven't requested any quotes yet.</p>
            <Link href="/get-a-quote" className="text-emerald-600 font-semibold hover:underline">
              Get your first quote
            </Link>
          </div>
        )}

        {requests && requests.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {requests.map((r) => (
              <div key={r.id} className="min-w-0 bg-white rounded-2xl border border-black/5 p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="min-w-0 font-semibold text-[#1d1d1f]">{r.title}</h3>
                  <span
                    className={`shrink-0 text-xs font-medium px-2 py-1 rounded-full ${
                      r.status === 'quoted'
                        ? 'bg-amber-100 text-amber-700'
                        : r.status === 'accepted'
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-black/5 text-[#6e6e73]'
                    }`}
                  >
                    {r.status}
                  </span>
                </div>
                <div className="flex items-center text-[#86868b] text-sm mb-1">
                  <Briefcase className="w-3.5 h-3.5 mr-1 shrink-0" />
                  {r.service_type.replace('_', ' ')}
                </div>
                <div className="flex items-center text-[#86868b] text-sm mb-3">
                  <MapPin className="w-3.5 h-3.5 mr-1 shrink-0" />
                  {r.locality ? `${r.locality}, ` : ''}
                  {r.city}
                </div>
                {(r.budget_min || r.budget_max) && (
                  <p className="text-sm text-[#1d1d1f]">
                    Budget: ₹{r.budget_min ?? '?'} – ₹{r.budget_max ?? '?'}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
