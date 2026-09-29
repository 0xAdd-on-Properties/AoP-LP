'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useStackApp, useUser } from '@hexclave/next';
import { Plus, MapPin, Trash2 } from 'lucide-react';
import StandardNavbar from '../components/StandardNavbar';

type Property = {
  id: number;
  title: string;
  property_type: string;
  listing_type: string;
  status: string;
  price: string;
  city: string;
  locality: string | null;
};

export default function MyListings() {
  const app = useStackApp();
  const user = useUser({ or: 'return-null' });
  const [properties, setProperties] = useState<Property[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      if (!user) return;
      try {
        const authHeaders = await app.getAuthHeaders();
        const res = await fetch('/api/properties?mine=true', { headers: authHeaders });
        if (!res.ok) throw new Error('Failed to load');
        const data = await res.json();
        setProperties(data.properties);
      } catch {
        setError('Could not load your listings.');
      }
    };
    void load();
  }, [user?.id, app]);

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this listing?')) return;
    const authHeaders = await app.getAuthHeaders();
    const res = await fetch(`/api/properties/${id}`, { method: 'DELETE', headers: authHeaders });
    if (res.ok) setProperties((prev) => prev?.filter((p) => p.id !== id) ?? null);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <StandardNavbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-32 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-[#1d1d1f]">My Listings</h1>
          <Link
            href="/dashboard/properties/new"
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full font-semibold transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Property
          </Link>
        </div>

        {error && <p className="text-red-600">{error}</p>}

        {properties === null && !error && <p className="text-[#86868b]">Loading...</p>}

        {properties?.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-black/5">
            <p className="text-[#86868b] mb-4">You haven't listed any properties yet.</p>
            <Link href="/dashboard/properties/new" className="text-emerald-600 font-semibold hover:underline">
              List your first property
            </Link>
          </div>
        )}

        {properties && properties.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {properties.map((p) => (
              <div key={p.id} className="min-w-0 bg-white rounded-2xl border border-black/5 p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="min-w-0 font-semibold text-[#1d1d1f]">{p.title}</h3>
                  <span
                    className={`shrink-0 text-xs font-medium px-2 py-1 rounded-full ${
                      p.status === 'active'
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-black/5 text-[#6e6e73]'
                    }`}
                  >
                    {p.status}
                  </span>
                </div>
                <div className="flex items-center text-[#86868b] text-sm mb-2">
                  <MapPin className="w-3.5 h-3.5 mr-1 shrink-0" />
                  {p.locality ? `${p.locality}, ` : ''}
                  {p.city}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#1d1d1f]">₹{p.price}</span>
                  <span className="text-xs text-[#86868b] uppercase">{p.property_type} · {p.listing_type}</span>
                </div>
                <button
                  onClick={() => handleDelete(p.id)}
                  className="mt-3 flex items-center gap-1.5 text-sm text-red-600 hover:text-red-700"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
