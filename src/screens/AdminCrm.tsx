'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useStackApp, useUser } from '@hexclave/next';
import { ArrowLeft, Search, ExternalLink, ShieldCheck } from 'lucide-react';
import StandardNavbar from '../components/StandardNavbar';

type Company = {
  id: string;
  name: string;
  domain: string;
  categories: string;
  city: string | null;
  supplierGrade: string;
  pipelineStage: string;
  gradeScore: number | null;
};

const GRADE_STYLES: Record<string, string> = {
  A: 'bg-emerald-50 text-emerald-700',
  B: 'bg-blue-50 text-blue-700',
  C: 'bg-amber-50 text-amber-700',
  D: 'bg-red-50 text-red-700',
};

const STAGE_LABEL: Record<string, string> = {
  UNGRADED: 'Ungraded',
  CONTACTED: 'Contacted',
  VERIFIED: 'Verified',
  ONBOARDED: 'Onboarded',
};

export default function AdminCrm() {
  const router = useRouter();
  const app = useStackApp();
  const user = useUser({ or: 'return-null' });
  const [authorized, setAuthorized] = useState<boolean | null>(null);
  const [companies, setCompanies] = useState<Company[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [gradeFilter, setGradeFilter] = useState('');

  useEffect(() => {
    if (user === null) router.replace('/login');
  }, [user, router]);

  useEffect(() => {
    const load = async () => {
      if (!user) return;
      try {
        const authHeaders = await app.getAuthHeaders();
        const params = new URLSearchParams({ limit: '100' });
        if (search) params.set('search', search);
        if (gradeFilter) params.set('grade', gradeFilter);
        const res = await fetch(`/api/admin/crm/companies?${params}`, { headers: authHeaders });
        if (res.status === 403) {
          setAuthorized(false);
          return;
        }
        if (!res.ok) {
          const data = await res.json().catch(() => null);
          throw new Error(data?.error || 'Failed to load');
        }
        const data = await res.json();
        setCompanies(data.companies);
        setAuthorized(true);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Could not load CRM data.');
        setAuthorized(true);
      }
    };
    void load();
  }, [user?.id, app, search, gradeFilter]);

  if (!user || authorized === null) return null;

  if (authorized === false) {
    return (
      <div className="min-h-screen bg-[#f5f5f7]">
        <StandardNavbar />
        <main className="max-w-2xl mx-auto px-4 sm:px-6 pt-32 pb-16 text-center">
          <ShieldCheck className="w-8 h-8 text-[#86868b] mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-[#1d1d1f] mb-2">Admin access required</h1>
          <p className="text-[#6e6e73]">This account doesn't have admin access on AddonProp.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <StandardNavbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-16">
        <Link href="/admin" className="inline-flex items-center gap-2 text-sm text-[#6e6e73] hover:text-[#1d1d1f] transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Admin
        </Link>

        <h1 className="text-3xl font-bold text-[#1d1d1f] mb-2">Supplier CRM</h1>
        <p className="text-[#6e6e73] mb-8">
          Live from Twenty CRM — the 9,300+ Indian material suppliers we imported and graded.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#86868b] w-4 h-4" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search company name..."
              className="w-full pl-10 pr-3 py-2.5 bg-white border border-black/10 rounded-xl text-sm text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
            />
          </div>
          <div className="flex gap-2">
            {['', 'A', 'B', 'C', 'D'].map((g) => (
              <button
                key={g || 'all'}
                onClick={() => setGradeFilter(g)}
                className={`px-4 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  gradeFilter === g ? 'bg-[#1d1d1f] text-white' : 'bg-white border border-black/10 text-[#1d1d1f] hover:bg-black/5'
                }`}
              >
                {g || 'All grades'}
              </button>
            ))}
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-100 text-red-700 text-sm rounded-2xl p-4 mb-6">
            {error}
          </div>
        )}

        {companies === null && !error && <p className="text-[#86868b]">Loading...</p>}

        {companies && companies.length === 0 && !error && (
          <div className="text-center py-16 bg-white rounded-2xl border border-black/5">
            <p className="text-[#86868b]">No companies match this filter.</p>
          </div>
        )}

        {companies && companies.length > 0 && (
          <div className="bg-white rounded-2xl border border-black/5 overflow-hidden">
            {companies.map((c) => (
              <div key={c.id} className="flex items-start justify-between gap-4 p-4 sm:p-5 border-b border-black/5 last:border-b-0">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                    <h4 className="font-semibold text-[#1d1d1f] truncate">{c.name}</h4>
                    {c.supplierGrade && (
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${GRADE_STYLES[c.supplierGrade] ?? 'bg-black/5 text-[#6e6e73]'}`}>
                        Grade {c.supplierGrade}
                      </span>
                    )}
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full shrink-0 bg-black/5 text-[#6e6e73]">
                      {STAGE_LABEL[c.pipelineStage] ?? c.pipelineStage}
                    </span>
                  </div>
                  <p className="text-sm text-[#6e6e73]">
                    {[c.categories, c.city].filter(Boolean).join(' · ')}
                  </p>
                  {c.domain && (
                    <a href={`https://${c.domain}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-emerald-600 hover:underline mt-1">
                      {c.domain} <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
