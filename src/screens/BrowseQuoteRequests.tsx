'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useStackApp, useUser } from '@hexclave/next';
import { MapPin, Briefcase, ChevronDown, ChevronUp, Send, CheckCircle2 } from 'lucide-react';
import StandardNavbar from '../components/StandardNavbar';

type QuoteRequest = {
  id: number;
  service_type: string;
  title: string;
  description: string | null;
  status: string;
  city: string;
  locality: string | null;
  budget_min: string | null;
  budget_max: string | null;
  requester_name: string | null;
};

type Quote = {
  id: number;
  amount: string;
  message: string | null;
};

function QuoteCard({ request }: { request: QuoteRequest }) {
  const app = useStackApp();
  const [expanded, setExpanded] = useState(false);
  const [myQuote, setMyQuote] = useState<Quote | null | undefined>(undefined);
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggle = async () => {
    const next = !expanded;
    setExpanded(next);
    if (next && myQuote === undefined) {
      try {
        const authHeaders = await app.getAuthHeaders();
        const res = await fetch(`/api/quotation-requests/${request.id}/quotes`, { headers: authHeaders });
        const data = await res.json();
        const existing = data.quotes?.[0] ?? null;
        setMyQuote(existing);
        if (existing) {
          setAmount(existing.amount);
          setMessage(existing.message ?? '');
        }
      } catch {
        setMyQuote(null);
      }
    }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || Number(amount) <= 0) {
      setError('Enter a valid quote amount.');
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      const authHeaders = await app.getAuthHeaders();
      const res = await fetch(`/api/quotation-requests/${request.id}/quotes`, {
        method: 'POST',
        headers: { ...authHeaders, 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: Number(amount), message: message || null }),
      });
      if (!res.ok) throw new Error('Failed to submit quote');
      const data = await res.json();
      setMyQuote(data.quote);
    } catch {
      setError('Could not submit your quote. Try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-black/5 overflow-hidden">
      <button onClick={toggle} className="w-full text-left p-5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="font-semibold text-[#1d1d1f] mb-1">{request.title}</h3>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#86868b]">
            <span className="flex items-center">
              <Briefcase className="w-3.5 h-3.5 mr-1 shrink-0" />
              {request.service_type.replace('_', ' ')}
            </span>
            <span className="flex items-center">
              <MapPin className="w-3.5 h-3.5 mr-1 shrink-0" />
              {request.locality ? `${request.locality}, ` : ''}{request.city}
            </span>
            {request.requester_name && <span>by {request.requester_name}</span>}
          </div>
          {(request.budget_min || request.budget_max) && (
            <p className="text-sm text-[#1d1d1f] mt-2">
              Budget: ₹{request.budget_min ?? '?'} – ₹{request.budget_max ?? '?'}
            </p>
          )}
        </div>
        <div className="shrink-0 flex items-center gap-2 text-[#6e6e73]">
          {myQuote && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
          {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>

      {expanded && (
        <div className="border-t border-black/5 p-5 bg-[#f5f5f7]">
          {request.description && (
            <p className="text-sm text-[#6e6e73] mb-4 leading-relaxed">{request.description}</p>
          )}
          <form onSubmit={submit} className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-[#1d1d1f] mb-1">
                {myQuote ? 'Update your quote (₹)' : 'Your quote (₹)'}
              </label>
              <input
                type="number"
                min="1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-white border border-black/10 rounded-xl px-4 py-2.5 text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
                placeholder="e.g. 350000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1d1d1f] mb-1">Message (optional)</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="w-full bg-white border border-black/10 rounded-xl px-4 py-2.5 text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
                placeholder="Timeline, approach, or anything the client should know"
              />
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button
              type="submit"
              disabled={submitting}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white px-5 py-2.5 rounded-full font-semibold transition-colors"
            >
              <Send className="w-4 h-4" />
              {submitting ? 'Submitting...' : myQuote ? 'Update Quote' : 'Submit Quote'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default function BrowseQuoteRequests() {
  const app = useStackApp();
  const user = useUser({ or: 'return-null' });
  const [requests, setRequests] = useState<QuoteRequest[] | null>(null);
  const [forbidden, setForbidden] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      if (!user) return;
      try {
        const authHeaders = await app.getAuthHeaders();
        const res = await fetch('/api/quotation-requests', { headers: authHeaders });
        if (res.status === 403) {
          setForbidden(true);
          return;
        }
        if (!res.ok) throw new Error('Failed to load');
        const data = await res.json();
        setRequests(data.requests);
      } catch {
        setError('Could not load open requests.');
      }
    };
    void load();
  }, [user?.id, app]);

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <StandardNavbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-32 pb-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1d1d1f]">Find Jobs to Quote</h1>
          <p className="text-[#6e6e73] mt-1">Open construction and interior design requests from property owners</p>
        </div>

        {forbidden && (
          <div className="text-center py-16 bg-white rounded-2xl border border-black/5">
            <p className="text-[#86868b] mb-4">
              Only service providers and builders can browse open quote requests.
            </p>
            <Link href="/onboarding" className="text-emerald-600 font-semibold hover:underline">
              Update your role
            </Link>
          </div>
        )}

        {error && <p className="text-red-600">{error}</p>}
        {!forbidden && requests === null && !error && <p className="text-[#86868b]">Loading...</p>}

        {requests?.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-black/5">
            <p className="text-[#86868b]">No open requests right now. Check back soon.</p>
          </div>
        )}

        {requests && requests.length > 0 && (
          <div className="space-y-4">
            {requests.map((r) => <QuoteCard key={r.id} request={r} />)}
          </div>
        )}
      </main>
    </div>
  );
}
