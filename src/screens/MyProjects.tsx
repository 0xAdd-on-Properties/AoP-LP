'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useStackApp, useUser } from '@hexclave/next';
import { Plus, MapPin, Trash2 } from 'lucide-react';
import StandardNavbar from '../components/StandardNavbar';

type Project = {
  id: number;
  name: string;
  status: string;
  city: string;
  locality: string | null;
  possession_date: string | null;
  total_units: number | null;
};

const STATUS_LABELS: Record<string, string> = {
  under_construction: 'Under Construction',
  ready_to_move: 'Ready to Move',
  completed: 'Completed',
};

const STATUS_CLASSES: Record<string, string> = {
  under_construction: 'bg-black/5 text-[#6e6e73]',
  ready_to_move: 'bg-emerald-50 text-emerald-700',
  completed: 'bg-[#1d1d1f]/10 text-[#1d1d1f]',
};

const formatPossession = (date: string | null) => {
  if (!date) return null;
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return null;
  return `Ready by ${d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`;
};

export default function MyProjects() {
  const app = useStackApp();
  const user = useUser({ or: 'return-null' });
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      if (!user) return;
      try {
        const authHeaders = await app.getAuthHeaders();
        const res = await fetch('/api/projects?mine=true', { headers: authHeaders });
        if (!res.ok) throw new Error('Failed to load');
        const data = await res.json();
        setProjects(data.projects);
      } catch {
        setError('Could not load your projects.');
      }
    };
    void load();
  }, [app, user]);

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this project?')) return;
    const authHeaders = await app.getAuthHeaders();
    const res = await fetch(`/api/projects/${id}`, { method: 'DELETE', headers: authHeaders });
    if (res.ok) setProjects((prev) => prev?.filter((p) => p.id !== id) ?? null);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <StandardNavbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-32 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-[#1d1d1f]">My Projects</h1>
          <Link
            href="/dashboard/projects/new"
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full font-semibold transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Project
          </Link>
        </div>

        {error && <p className="text-red-600">{error}</p>}

        {projects === null && !error && <p className="text-[#86868b]">Loading...</p>}

        {projects?.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-black/5">
            <p className="text-[#86868b] mb-4">You haven't listed any projects yet.</p>
            <Link href="/dashboard/projects/new" className="text-emerald-600 font-semibold hover:underline">
              List your first project
            </Link>
          </div>
        )}

        {projects && projects.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((p) => {
              const possession = formatPossession(p.possession_date);
              return (
                <div key={p.id} className="min-w-0 bg-white rounded-2xl border border-black/5 p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="min-w-0 font-semibold text-[#1d1d1f]">{p.name}</h3>
                    <span
                      className={`shrink-0 text-xs font-medium px-2 py-1 rounded-full ${STATUS_CLASSES[p.status] ?? 'bg-black/5 text-[#6e6e73]'}`}
                    >
                      {STATUS_LABELS[p.status] ?? p.status}
                    </span>
                  </div>
                  <div className="flex items-center text-[#86868b] text-sm mb-2">
                    <MapPin className="w-3.5 h-3.5 mr-1 shrink-0" />
                    {p.locality ? `${p.locality}, ` : ''}
                    {p.city}
                  </div>
                  {possession && <p className="text-sm text-[#6e6e73] mb-1">{possession}</p>}
                  {p.total_units != null && (
                    <p className="text-sm text-[#6e6e73] mb-1">{p.total_units} units</p>
                  )}
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="mt-3 flex items-center gap-1.5 text-sm text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
