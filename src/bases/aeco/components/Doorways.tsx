'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const doorways = [
  {
    title: 'AddonProps',
    tagline: 'Buy, sell, and rent real estate',
    href: '/aop',
    bg: 'bg-blue-700',
  },
  {
    title: 'AddonEcoProps',
    tagline: 'Earthships, mandala homes & eco communes',
    href: '/ecoprops',
    bg: 'bg-emerald-700',
  },
  {
    title: 'AddonEco',
    tagline: 'Reclaiming villages, cities & land as biodiversity zones',
    href: '/ecozones',
    bg: 'bg-emerald-500',
  },
  {
    title: 'AopMarkets',
    tagline: 'Materials, furnishings & sustainable tech',
    href: '/aopmarkets',
    bg: 'bg-blue-500',
  },
];

const Doorways = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-sm font-medium text-emerald-600 mb-3">Find Your Way In</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
            Four doorways, one mission
          </h2>
          <p className="text-lg text-[#6e6e73] leading-relaxed">
            AddonProp is home to four connected spaces. Pick the one that fits what you're here for.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {doorways.map((d) => (
            <Link
              key={d.title}
              href={d.href}
              className={`group relative block rounded-3xl overflow-hidden aspect-[3/4] ${d.bg}`}
            >
              <img
                src="/brand/doorway.gif"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-white font-bold text-lg sm:text-xl">{d.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </div>
                <p className="text-white/75 text-sm leading-snug">{d.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doorways;
