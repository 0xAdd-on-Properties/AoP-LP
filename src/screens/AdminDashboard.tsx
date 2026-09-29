'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useStackApp, useUser } from '@hexclave/next';
import { Check, Trash2, Plus, ShieldCheck, ExternalLink, Database } from 'lucide-react';
import StandardNavbar from '../components/StandardNavbar';

type Stats = {
  totalUsers: number;
  usersByRole: { role: string; count: number }[];
  propertiesCount: number;
  projectsCount: number;
  skusCount: number;
  ordersByStatus: { status: string; count: number }[];
  quotationRequestsByStatus: { status: string; count: number }[];
  suppliersByScope: { scope: string; count: number; verified_count: number }[];
};

type Supplier = {
  id: number;
  name: string;
  category: string;
  scope: 'vizag' | 'andhra' | 'india' | 'world';
  city: string | null;
  state: string | null;
  country: string;
  description: string | null;
  website: string | null;
  founded_year: number | null;
  verified: boolean;
};

const SCOPE_LABEL: Record<Supplier['scope'], string> = {
  vizag: 'Visakhapatnam',
  andhra: 'Andhra Pradesh',
  india: 'India-wide',
  world: 'Worldwide',
};

const SCOPES: Supplier['scope'][] = ['vizag', 'andhra', 'india', 'world'];

const PERSONA_LINKS = [
  { label: 'General User — browse properties', href: '/' },
  { label: 'Dealer/Broker — list a property', href: '/dashboard/properties/new' },
  { label: 'Dealer/Broker — my listings', href: '/dashboard/properties' },
  { label: 'Builder — my projects', href: '/dashboard/projects' },
  { label: 'Materials Supplier — add a SKU', href: '/dashboard/materials/new' },
  { label: 'Materials Supplier — my SKUs', href: '/dashboard/materials' },
  { label: 'Buyer — browse materials', href: '/materials' },
  { label: 'Buyer — cart', href: '/cart' },
  { label: 'Buyer — my orders', href: '/dashboard/orders' },
  { label: 'Service Provider — my quote requests', href: '/dashboard/quotes' },
  { label: 'General User — get a quote', href: '/get-a-quote' },
];

export default function AdminDashboard() {
  const router = useRouter();
  const app = useStackApp();
  const user = useUser({ or: 'return-null' });
  const [authorized, setAuthorized] = useState<boolean | null>(null);
  const [stats, setStats] = useState<Stats | null>(null);
  const [suppliers, setSuppliers] = useState<Supplier[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeScope, setActiveScope] = useState<Supplier['scope']>('vizag');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newSupplier, setNewSupplier] = useState({
    name: '', category: '', city: '', state: '', country: 'India', description: '', website: '', founded_year: '',
  });

  useEffect(() => {
    if (user === null) router.replace('/login');
  }, [user, router]);

  useEffect(() => {
    const load = async () => {
      if (!user) return;
      try {
        const authHeaders = await app.getAuthHeaders();
        const [statsRes, suppliersRes] = await Promise.all([
          fetch('/api/admin/stats', { headers: authHeaders }),
          fetch('/api/admin/suppliers', { headers: authHeaders }),
        ]);
        if (statsRes.status === 403 || suppliersRes.status === 403) {
          setAuthorized(false);
          return;
        }
        if (!statsRes.ok || !suppliersRes.ok) throw new Error('Failed to load');
        setStats(await statsRes.json());
        const data = await suppliersRes.json();
        setSuppliers(data.suppliers);
        setAuthorized(true);
      } catch {
        setError('Could not load admin data.');
      }
    };
    void load();
  }, [user?.id, app]);

  const toggleVerified = async (id: number, verified: boolean) => {
    const authHeaders = await app.getAuthHeaders();
    const res = await fetch(`/api/admin/suppliers/${id}`, {
      method: 'PATCH',
      headers: { ...authHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({ verified: !verified }),
    });
    if (res.ok) {
      setSuppliers((prev) => prev?.map((s) => (s.id === id ? { ...s, verified: !verified } : s)) ?? null);
    }
  };

  const deleteSupplier = async (id: number) => {
    if (!confirm('Remove this supplier from the directory?')) return;
    const authHeaders = await app.getAuthHeaders();
    const res = await fetch(`/api/admin/suppliers/${id}`, { method: 'DELETE', headers: authHeaders });
    if (res.ok) setSuppliers((prev) => prev?.filter((s) => s.id !== id) ?? null);
  };

  const addSupplier = async (e: React.FormEvent) => {
    e.preventDefault();
    const authHeaders = await app.getAuthHeaders();
    const res = await fetch('/api/admin/suppliers', {
      method: 'POST',
      headers: { ...authHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...newSupplier,
        scope: activeScope,
        founded_year: newSupplier.founded_year ? Number(newSupplier.founded_year) : null,
      }),
    });
    if (res.ok) {
      const data = await res.json();
      setSuppliers((prev) => (prev ? [...prev, data.supplier] : [data.supplier]));
      setNewSupplier({ name: '', category: '', city: '', state: '', country: 'India', description: '', website: '', founded_year: '' });
      setShowAddForm(false);
    }
  };

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

  const inputClass = 'w-full bg-white border border-black/10 rounded-xl px-3 py-2 text-sm text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-emerald-600/30';
  const scopedSuppliers = suppliers?.filter((s) => s.scope === activeScope) ?? [];

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <StandardNavbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-16">
        <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
          <h1 className="text-3xl font-bold text-[#1d1d1f]">Admin</h1>
          <Link
            href="/admin/crm"
            className="inline-flex items-center gap-2 bg-[#1d1d1f] hover:bg-black text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
          >
            <Database className="w-3.5 h-3.5" />
            Supplier CRM
          </Link>
        </div>
        <p className="text-[#6e6e73] mb-10">Platform overview, supplier directory review, and persona test links.</p>

        {error && <p className="text-red-600 mb-6">{error}</p>}

        {/* Stats */}
        {stats && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-black/5 rounded-2xl overflow-hidden border border-black/5 mb-10">
            <div className="bg-white p-5 min-w-0">
              <p className="text-2xl font-bold text-[#1d1d1f]">{stats.totalUsers}</p>
              <p className="text-xs text-[#86868b]">Users</p>
            </div>
            <div className="bg-white p-5 min-w-0">
              <p className="text-2xl font-bold text-[#1d1d1f]">{stats.propertiesCount}</p>
              <p className="text-xs text-[#86868b]">Properties</p>
            </div>
            <div className="bg-white p-5 min-w-0">
              <p className="text-2xl font-bold text-[#1d1d1f]">{stats.projectsCount}</p>
              <p className="text-xs text-[#86868b]">Builder Projects</p>
            </div>
            <div className="bg-white p-5 min-w-0">
              <p className="text-2xl font-bold text-[#1d1d1f]">{stats.skusCount}</p>
              <p className="text-xs text-[#86868b]">Material SKUs</p>
            </div>
          </div>
        )}

        {stats && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-2xl border border-black/5 p-5 min-w-0">
              <h3 className="text-sm font-semibold text-[#1d1d1f] mb-3">Users by role</h3>
              <div className="space-y-1.5">
                {stats.usersByRole.map((r) => (
                  <div key={r.role} className="flex items-center justify-between text-sm">
                    <span className="text-[#6e6e73] capitalize truncate">{r.role.replace(/_/g, ' ')}</span>
                    <span className="text-[#1d1d1f] font-medium shrink-0">{r.count}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-black/5 p-5 min-w-0">
              <h3 className="text-sm font-semibold text-[#1d1d1f] mb-3">Orders by status</h3>
              <div className="space-y-1.5">
                {stats.ordersByStatus.length === 0 && <p className="text-sm text-[#86868b]">No orders yet.</p>}
                {stats.ordersByStatus.map((o) => (
                  <div key={o.status} className="flex items-center justify-between text-sm">
                    <span className="text-[#6e6e73] capitalize truncate">{o.status}</span>
                    <span className="text-[#1d1d1f] font-medium shrink-0">{o.count}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-black/5 p-5 min-w-0">
              <h3 className="text-sm font-semibold text-[#1d1d1f] mb-3">Quote requests by status</h3>
              <div className="space-y-1.5">
                {stats.quotationRequestsByStatus.length === 0 && <p className="text-sm text-[#86868b]">None yet.</p>}
                {stats.quotationRequestsByStatus.map((q) => (
                  <div key={q.status} className="flex items-center justify-between text-sm">
                    <span className="text-[#6e6e73] capitalize truncate">{q.status}</span>
                    <span className="text-[#1d1d1f] font-medium shrink-0">{q.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Supplier directory */}
        <div className="mb-4 flex items-center justify-between flex-wrap gap-3">
          <h2 className="text-xl font-bold text-[#1d1d1f]">Supplier directory</h2>
          <button
            onClick={() => setShowAddForm((v) => !v)}
            className="inline-flex items-center gap-2 bg-[#1d1d1f] hover:bg-black text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            Add supplier
          </button>
        </div>

        <div className="flex gap-2 mb-6 flex-wrap">
          {SCOPES.map((scope) => {
            const scopeStats = stats?.suppliersByScope.find((s) => s.scope === scope);
            return (
              <button
                key={scope}
                onClick={() => setActiveScope(scope)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeScope === scope ? 'bg-[#1d1d1f] text-white' : 'bg-white border border-black/10 text-[#1d1d1f] hover:bg-black/5'
                }`}
              >
                {SCOPE_LABEL[scope]} {scopeStats ? `(${scopeStats.verified_count}/${scopeStats.count} verified)` : ''}
              </button>
            );
          })}
        </div>

        {showAddForm && (
          <form onSubmit={addSupplier} className="bg-white rounded-2xl border border-black/5 p-5 mb-6 space-y-3">
            <p className="text-xs font-medium text-[#86868b] uppercase tracking-wide">Adding to: {SCOPE_LABEL[activeScope]}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input required placeholder="Company name" value={newSupplier.name} onChange={(e) => setNewSupplier((p) => ({ ...p, name: e.target.value }))} className={inputClass} />
              <input required placeholder="Category (e.g. Granite & Marble)" value={newSupplier.category} onChange={(e) => setNewSupplier((p) => ({ ...p, category: e.target.value }))} className={inputClass} />
              <input placeholder="City" value={newSupplier.city} onChange={(e) => setNewSupplier((p) => ({ ...p, city: e.target.value }))} className={inputClass} />
              <input placeholder="State" value={newSupplier.state} onChange={(e) => setNewSupplier((p) => ({ ...p, state: e.target.value }))} className={inputClass} />
              <input placeholder="Country" value={newSupplier.country} onChange={(e) => setNewSupplier((p) => ({ ...p, country: e.target.value }))} className={inputClass} />
              <input placeholder="Founded year" type="number" value={newSupplier.founded_year} onChange={(e) => setNewSupplier((p) => ({ ...p, founded_year: e.target.value }))} className={inputClass} />
              <input placeholder="Website" value={newSupplier.website} onChange={(e) => setNewSupplier((p) => ({ ...p, website: e.target.value }))} className={`${inputClass} sm:col-span-2`} />
              <textarea placeholder="Description / why they're notable" value={newSupplier.description} onChange={(e) => setNewSupplier((p) => ({ ...p, description: e.target.value }))} rows={2} className={`${inputClass} sm:col-span-2`} />
            </div>
            <button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors">
              Add to directory
            </button>
          </form>
        )}

        {suppliers === null && !error && <p className="text-[#86868b] mb-10">Loading...</p>}

        {suppliers && (
          <div className="bg-white rounded-2xl border border-black/5 overflow-hidden mb-10">
            {scopedSuppliers.length === 0 && (
              <p className="text-[#86868b] text-sm p-6">No suppliers in this tier yet.</p>
            )}
            {scopedSuppliers.map((s) => (
              <div key={s.id} className="flex items-start justify-between gap-4 p-4 sm:p-5 border-b border-black/5 last:border-b-0">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                    <h4 className="font-semibold text-[#1d1d1f] truncate">{s.name}</h4>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${s.verified ? 'bg-emerald-50 text-emerald-700' : 'bg-black/5 text-[#6e6e73]'}`}>
                      {s.verified ? 'Verified' : 'Unverified'}
                    </span>
                  </div>
                  <p className="text-sm text-[#6e6e73]">
                    {s.category} · {[s.city, s.state, s.country].filter(Boolean).join(', ')}
                    {s.founded_year ? ` · est. ${s.founded_year}` : ''}
                  </p>
                  {s.description && <p className="text-sm text-[#86868b] mt-1">{s.description}</p>}
                  {s.website && (
                    <a href={s.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-emerald-600 hover:underline mt-1">
                      {s.website} <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button onClick={() => toggleVerified(s.id, s.verified)} className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${s.verified ? 'bg-emerald-600 text-white' : 'bg-black/5 text-[#6e6e73] hover:bg-black/10'}`} title="Toggle verified">
                    <Check className="w-4 h-4" />
                  </button>
                  <button onClick={() => deleteSupplier(s.id)} className="w-8 h-8 rounded-full flex items-center justify-center text-red-600 hover:bg-red-50 transition-colors" title="Delete">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Persona quick-links */}
        <h2 className="text-xl font-bold text-[#1d1d1f] mb-4">Test as a persona</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PERSONA_LINKS.map((p) => (
            <Link key={p.href} href={p.href} className="flex items-center justify-between gap-2 bg-white rounded-xl border border-black/5 px-4 py-3 hover:bg-black/5 transition-colors min-w-0">
              <span className="text-sm text-[#1d1d1f] truncate">{p.label}</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#86868b] shrink-0" />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
