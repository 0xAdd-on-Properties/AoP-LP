'use client';

import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-[#f5f5f7] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <div className="min-w-0 space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1d1d1f] leading-[1.05]">
              Sustainable living,{' '}
              <span className="text-emerald-600">built for India.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#6e6e73] leading-relaxed max-w-xl">
              Smart homes, eco-villages, and solar-powered communities — one
              platform to discover, list, and build sustainably.
            </p>

            {/* Search bar */}
            <div className="bg-white border border-black/10 rounded-2xl p-3 shadow-sm">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 min-w-0 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#86868b] w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search for sustainable properties..."
                    className="w-full pl-10 pr-3 py-3 bg-[#f5f5f7] rounded-xl text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:ring-2 focus:ring-emerald-600/40 text-sm"
                  />
                </div>
                <div className="relative">
                  <select className="appearance-none bg-[#f5f5f7] rounded-xl pl-4 pr-9 py-3 text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-emerald-600/40 text-sm w-full sm:w-44">
                    <option value="">All Types</option>
                    <option value="earthships">Earthships</option>
                    <option value="mandala">Mandala Homes</option>
                    <option value="manduva">Manduva Homes</option>
                    <option value="eco-communes">Eco Communes</option>
                    <option value="smart-apartments">Smart Apartments</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#86868b] w-4 h-4 pointer-events-none" />
                </div>
                <button className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-xl font-semibold text-white transition-colors text-sm whitespace-nowrap">
                  Search
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#featured"
                className="bg-[#1d1d1f] hover:bg-black px-6 py-3 rounded-full font-medium text-white transition-colors text-sm"
              >
                Explore properties
              </a>
              <a
                href="/get-a-quote"
                className="px-6 py-3 rounded-full font-medium text-[#1d1d1f] border border-black/10 hover:bg-black/5 transition-colors text-sm"
              >
                Get a quote
              </a>
            </div>
          </div>

          {/* Right content — real photo, not a decoration */}
          <div className="min-w-0">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
              <img
                src="/images/homes/hero-courtyard-house.png"
                alt="A traditional Indian courtyard home with a tiled roof and wooden verandah"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-5 sm:p-6">
                <p className="text-white font-semibold text-sm sm:text-base">Manduva Courtyard Home</p>
                <p className="text-white/80 text-xs sm:text-sm">Andhra Pradesh · Terracotta Roof</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
