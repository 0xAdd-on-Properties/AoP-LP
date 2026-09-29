'use client';

import React, { useState } from 'react';
import { Send, Sprout, Building2, Users, TreeDeciduous, ArrowRight } from 'lucide-react';
import StandardNavbar from '../../../components/StandardNavbar';
import Footer from '../../../components/Footer';

const zoneTypes = [
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Village Zones',
    description: 'Whole villages redesigned around solar power, water self-sufficiency, and shared green infrastructure — without uprooting the way of life already there.',
    image: 'https://images.pexels.com/photos/32267647/pexels-photo-32267647.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: 'City Zones',
    description: 'Dense urban pockets retrofitted with rooftop solar, vertical greenery, and waste-to-resource loops — proving sustainability scales past the single home.',
    image: 'https://images.pexels.com/photos/34024471/pexels-photo-34024471.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: <Sprout className="w-5 h-5" />,
    title: 'Commune Zones',
    description: 'Intentional communities built around shared land, shared resources, and shared governance — for groups who want to build a life together, sustainably.',
    image: 'https://images.pexels.com/photos/7849905/pexels-photo-7849905.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: <TreeDeciduous className="w-5 h-5" />,
    title: 'Biodiversity Reclamation Zones',
    description: 'Degraded and wasted land turned back into thriving ecosystems — reforestation, wetland recovery, and native species return, at scale.',
    image: 'https://images.pexels.com/photos/28662967/pexels-photo-28662967.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const process = [
  { step: '01', title: 'Survey the land', description: 'Ecological and social assessment of the site — soil, water, biodiversity, and the people already there.' },
  { step: '02', title: 'Design the zone', description: 'Solarpunk-grade planning: renewable energy, native ecology, and human infrastructure designed together, not in conflict.' },
  { step: '03', title: 'Build with the community', description: 'Co-design with residents, builders, and local material suppliers already on the AddonProp network.' },
  { step: '04', title: 'Reclaim and monitor', description: 'Ongoing ecological monitoring so the zone keeps trending toward more biodiversity, not less.' },
];

const stats = [
  { number: '4', label: 'Zone Types Defined' },
  { number: '0', label: 'Zones Active — You Could Be First' },
  { number: '100%', label: 'Community Co-Designed' },
];

export default function Ecozones() {
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
        body: JSON.stringify({ lead_type: 'ecozone_inquiry', ...form }),
      });
      if (!res.ok) throw new Error('Failed');
      setDone(true);
    } catch {
      setError('Could not submit your proposal. Try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    'w-full bg-white border border-black/10 rounded-xl px-4 py-2.5 text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-emerald-600/30';
  const labelClass = 'block text-sm font-medium text-[#1d1d1f] mb-1';

  return (
    <div className="min-h-screen bg-white">
      <StandardNavbar />

      {/* Hero */}
      <section className="relative bg-[#f5f5f7] overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="min-w-0 space-y-6 sm:space-y-8">
              <p className="text-sm font-medium text-emerald-600">AddonEco</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1d1d1f] leading-[1.05]">
                Reclaim the land.<br /><span className="text-emerald-600">Rebuild the zone.</span>
              </h1>
              <p className="text-base sm:text-lg text-[#6e6e73] leading-relaxed max-w-xl">
                Not a single home. Not one plot. A whole village, city block, commune, or
                stretch of degraded land — redesigned as a solarpunk biodiversity hub, built
                with the people already on it.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#propose" className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-full font-medium text-white transition-colors text-sm">
                  Propose a zone
                </a>
                <a href="#zones" className="px-6 py-3 rounded-full font-medium text-[#1d1d1f] border border-black/10 hover:bg-black/5 transition-colors text-sm">
                  See the zone types
                </a>
              </div>
            </div>
            <div className="min-w-0">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
                <img
                  src="https://images.pexels.com/photos/36725873/pexels-photo-36725873.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Aerial view of a village woven into lush forest"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-5 sm:p-6">
                  <p className="text-white font-semibold text-sm sm:text-base">A village, not erased by nature — woven into it</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zone Types */}
      <section id="zones" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-sm font-medium text-emerald-600 mb-3">Four Scales</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
              Regeneration doesn't stop at one house
            </h2>
            <p className="text-lg text-[#6e6e73] leading-relaxed">
              A zone is defined by scale and purpose, not property type. Pick the one that matches what you're trying to build or restore.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {zoneTypes.map((zone) => (
              <div key={zone.title} className="group relative rounded-3xl overflow-hidden aspect-[16/10]">
                <img
                  src={zone.image}
                  alt={zone.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center text-white">
                  {zone.icon}
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <h3 className="text-white font-bold text-lg sm:text-xl mb-1.5">{zone.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{zone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-24 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-sm font-medium text-emerald-600 mb-3">The Process</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
              How a zone comes together
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/5 rounded-2xl overflow-hidden border border-black/5">
            {process.map((p) => (
              <div key={p.step} className="bg-white p-6 sm:p-8 min-w-0">
                <p className="text-emerald-600 font-bold text-sm mb-3">{p.step}</p>
                <h3 className="text-base font-semibold text-[#1d1d1f] mb-2">{p.title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 sm:py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <p className="text-sm font-medium text-emerald-400 mb-4">Where We're Starting</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight leading-tight">
              This is early. That's the point.
            </h2>
            <p className="text-lg text-white/60 leading-relaxed">
              We're not claiming a portfolio of finished zones — we're opening the door for the first ones.
              If you have land, a village, or a community ready to be rebuilt around biodiversity, you'd be founding this.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-[#0a0a0a] p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-white/50 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Propose a zone */}
      <section id="propose" className="py-16 sm:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-[#f5f5f7] rounded-3xl p-6 sm:p-10">
            {done ? (
              <div className="text-center py-8">
                <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">Proposal received</h3>
                <p className="text-[#6e6e73]">We'll reach out to talk through the site and what a zone could look like there.</p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-1">
                  <ArrowRight className="w-5 h-5 text-emerald-600" />
                  <h2 className="text-xl font-bold text-[#1d1d1f]">Propose a zone</h2>
                </div>
                <p className="text-[#6e6e73] text-sm mb-6">
                  Tell us about the land or community you have in mind — village, city block, commune, or degraded land worth reclaiming.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Name</label>
                      <input required value={form.name} onChange={(e) => update('name', e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>City / Region</label>
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
                    <label className={labelClass}>About the land or community</label>
                    <textarea rows={4} value={form.message} onChange={(e) => update('message', e.target.value)} className={inputClass} placeholder="Size, current condition, who's already there, what you're hoping for..." />
                  </div>
                  {error && <p className="text-sm text-red-600">{error}</p>}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white py-3 rounded-full font-semibold transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    {submitting ? 'Sending...' : 'Propose this zone'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
