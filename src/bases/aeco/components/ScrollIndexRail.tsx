'use client';

import React, { useEffect, useRef, useState } from 'react';

const SECTIONS = [
  { id: 'rail-innovations', label: 'Innovative Technologies' },
  { id: 'rail-properties', label: 'Sustainable Properties' },
  { id: 'rail-services', label: 'Our Services' },
  { id: 'rail-construction', label: 'Sustainable Construction Ecosystem' },
  { id: 'rail-architecture', label: 'Sustainable Architecture' },
];

const ScrollIndexRail = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const ratios = useRef<Record<string, number>>({});

  useEffect(() => {
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => !!el
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.current[entry.target.id] = entry.intersectionRatio;
        }
        const [topId] = Object.entries(ratios.current).sort((a, b) => b[1] - a[1])[0] ?? [null];
        const hasVisible = Object.values(ratios.current).some((r) => r > 0);
        setVisible(hasVisible);
        if (hasVisible) setActiveId(topId as string);
      },
      { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      className={`hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col items-start gap-0.5 transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {SECTIONS.map((s) => {
        const active = s.id === activeId;
        return (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="group flex items-center gap-3 py-2.5 text-left"
          >
            <span
              className={`shrink-0 rounded-full transition-all duration-300 ${
                active ? 'w-2.5 h-2.5 bg-emerald-600' : 'w-1.5 h-1.5 bg-[#86868b]/40 group-hover:bg-[#86868b]/70'
              }`}
            />
            <span
              className={`text-xs font-medium whitespace-nowrap transition-all duration-300 ${
                active
                  ? 'text-[#1d1d1f] opacity-100 translate-x-0'
                  : 'text-[#86868b] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0'
              }`}
            >
              {s.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default ScrollIndexRail;
