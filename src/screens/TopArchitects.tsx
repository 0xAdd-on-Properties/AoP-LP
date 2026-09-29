'use client';

import { useState } from 'react';
import { MapPin, Star, Send } from 'lucide-react';
import StandardNavbar from '../components/StandardNavbar';
import Footer from '../components/Footer';

const architects = [
  {
    name: 'Studio Manduva',
    city: 'Visakhapatnam',
    specialty: 'Vastu-aligned residential design',
    experience: '14 years',
    image: 'https://images.pexels.com/photos/8960946/pexels-photo-8960946.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Ananya Rao & Associates',
    city: 'Hyderabad',
    specialty: 'Sustainable apartment complexes',
    experience: '11 years',
    image: 'https://images.pexels.com/photos/8960995/pexels-photo-8960995.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Terra Line Architects',
    city: 'Vijayawada',
    specialty: 'Earthship & natural building',
    experience: '9 years',
    image: 'https://images.pexels.com/photos/8278917/pexels-photo-8278917.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Konda Design Collective',
    city: 'Visakhapatnam',
    specialty: 'Farmhouse & retreat architecture',
    experience: '16 years',
    image: 'https://images.pexels.com/photos/3831164/pexels-photo-3831164.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function TopArchitects() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lead_type: 'architect_inquiry', ...form }),
      });
      if (!res.ok) throw new Error('Failed');
      setDone(true);
    } catch {
      setError('Could not submit your request. Try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    'w-full bg-white border border-black/10 rounded-xl px-4 py-2.5 text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-emerald-600/30';
  const labelClass = 'block text-sm font-medium text-[#1d1d1f] mb-1';

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <StandardNavbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-16">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-medium text-emerald-600 mb-3">Design Partners</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4 tracking-tight">Top Architects</h1>
          <p className="text-lg text-[#6e6e73] leading-relaxed">
            Vetted architecture studios across Andhra Pradesh, from Vastu-aligned residential design
            to earthship and natural building specialists.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {architects.map((a) => (
            <div key={a.name} className="bg-white rounded-2xl border border-black/5 overflow-hidden">
              <img src={a.image} alt={a.name} className="w-full h-36 object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-[#1d1d1f] mb-1">{a.name}</h3>
                <div className="flex items-center text-[#86868b] text-sm mb-2">
                  <MapPin className="w-3.5 h-3.5 mr-1 shrink-0" />
                  {a.city}
                </div>
                <p className="text-sm text-[#6e6e73] leading-relaxed mb-3">{a.specialty}</p>
                <div className="flex items-center text-sm text-[#1d1d1f]">
                  <Star className="w-3.5 h-3.5 mr-1 text-yellow-400 fill-current shrink-0" />
                  {a.experience} experience
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-black/5 p-6 sm:p-10">
          {done ? (
            <div className="text-center py-8">
              <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">Request received</h3>
              <p className="text-[#6e6e73]">We'll match you with an architect and reach out shortly.</p>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-1">Looking for an architect?</h2>
              <p className="text-[#6e6e73] text-sm mb-6">Tell us about your project and we'll connect you with the right studio.</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Name</label>
                    <input required value={form.name} onChange={(e) => update('name', e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>City</label>
                    <input value={form.city} onChange={(e) => update('city', e.target.value)} className={inputClass} placeholder="Visakhapatnam" />
                  </div>
                  <div>
                    <label className={labelClass}>Email</label>
                    <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Phone</label>
                    <input value={form.phone} onChange={(e) => update('phone', e.target.value)} className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Project details</label>
                  <textarea rows={4} value={form.message} onChange={(e) => update('message', e.target.value)} className={inputClass} placeholder="Plot size, budget, style you're after..." />
                </div>
                {error && <p className="text-sm text-red-600">{error}</p>}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white py-3 rounded-full font-semibold transition-colors"
                >
                  <Send className="w-4 h-4" />
                  {submitting ? 'Sending...' : 'Request an architect'}
                </button>
              </form>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
