'use client';

import { useState } from 'react';
import { X, MapPin, Globe2 } from 'lucide-react';

export type MapPoint = {
  label: string;
  sublabel?: string;
  x: number; // 0-100, percentage position on the map viewBox
  y: number; // 0-100
  highlight?: boolean;
};

// Approximate percentage positions on the India outline viewBox below.
export const INDIA_POINTS: Record<string, MapPoint> = {
  visakhapatnam: { label: 'Visakhapatnam', sublabel: 'Andhra Pradesh', x: 68, y: 62 },
  prakasam: { label: 'Prakasam (Chimakurthy)', sublabel: 'Andhra Pradesh', x: 60, y: 68 },
  hyderabad: { label: 'Hyderabad', sublabel: 'Telangana', x: 54, y: 55 },
  kishangarh: { label: 'Kishangarh', sublabel: 'Rajasthan', x: 40, y: 32 },
  mumbai: { label: 'Mumbai', sublabel: 'Maharashtra', x: 32, y: 55 },
  kolkata: { label: 'Kolkata', sublabel: 'West Bengal', x: 78, y: 48 },
  chennai: { label: 'Chennai', sublabel: 'Tamil Nadu', x: 60, y: 82 },
  gurugram: { label: 'Gurugram', sublabel: 'Haryana', x: 42, y: 20 },
  ahmedabad: { label: 'Ahmedabad', sublabel: 'Gujarat', x: 28, y: 42 },
  kadapa: { label: 'Kadapa', sublabel: 'Andhra Pradesh', x: 58, y: 72 },
  tirupati: { label: 'Tirupati', sublabel: 'Andhra Pradesh', x: 58, y: 78 },
  vizianagaram: { label: 'Vizianagaram', sublabel: 'Andhra Pradesh', x: 68, y: 58 },
};

// Approximate percentage positions on the World outline viewBox below.
export const WORLD_POINTS: Record<string, MapPoint> = {
  india: { label: 'India', x: 68, y: 52 },
  italy: { label: 'Italy', sublabel: 'Carrara marble', x: 50, y: 36 },
  turkey: { label: 'Turkey', sublabel: 'Natural stone', x: 55, y: 36 },
  portugal: { label: 'Portugal', sublabel: 'Cork', x: 42, y: 38 },
  austria: { label: 'Austria', sublabel: 'Mass timber', x: 51, y: 32 },
  scandinavia: { label: 'Finland / Sweden', sublabel: 'CLT timber', x: 51, y: 22 },
  usa: { label: 'USA', sublabel: 'Reclaimed timber', x: 20, y: 34 },
};

function IndiaOutline() {
  return (
    <path
      d="M 40 8 L 46 7 L 52 9 L 55 14 L 60 15 L 64 18 L 62 22 L 66 24 L 70 28 L 72 34 L 70 40 L 74 44 L 76 50 L 74 56 L 70 58 L 68 64 L 64 66 L 66 72 L 62 78 L 60 84 L 56 88 L 54 84 L 52 78 L 48 74 L 50 68 L 46 64 L 44 58 L 38 56 L 34 60 L 28 58 L 26 52 L 30 48 L 28 42 L 24 38 L 26 32 L 24 26 L 28 22 L 26 16 L 32 14 L 34 18 L 38 14 L 36 10 Z"
      fill="currentColor"
    />
  );
}

function WorldOutline() {
  return (
    <>
      {/* Americas */}
      <path d="M 8 20 L 16 18 L 22 22 L 24 30 L 20 36 L 22 44 L 18 52 L 14 50 L 12 42 L 8 36 L 6 28 Z" fill="currentColor" opacity="0.7" />
      {/* Europe */}
      <path d="M 44 18 L 52 16 L 56 20 L 54 26 L 58 30 L 54 34 L 48 32 L 44 26 Z" fill="currentColor" opacity="0.7" />
      {/* Africa */}
      <path d="M 44 34 L 52 32 L 56 40 L 54 52 L 48 58 L 44 52 L 42 42 Z" fill="currentColor" opacity="0.7" />
      {/* Asia (incl. India, Turkey) */}
      <path d="M 56 18 L 68 14 L 82 18 L 88 26 L 84 34 L 76 32 L 70 40 L 66 50 L 60 56 L 56 48 L 58 38 L 54 30 L 58 24 Z" fill="currentColor" opacity="0.7" />
      {/* Australia */}
      <path d="M 78 56 L 88 54 L 92 60 L 86 64 L 78 62 Z" fill="currentColor" opacity="0.7" />
    </>
  );
}

export default function LocationMapWidget({
  title,
  points,
  mode,
  defaultOpen = true,
}: {
  title: string;
  points: MapPoint[];
  mode: 'india' | 'world';
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  if (points.length === 0) return null;

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 items-center justify-center rounded-full bg-white border border-black/10 shadow-lg text-[#1d1d1f] hover:bg-black/5 transition-colors"
        aria-label="Show origin map"
      >
        <Globe2 className="w-4 h-4" />
      </button>
    );
  }

  return (
    <div className="hidden lg:block fixed right-6 top-1/2 -translate-y-1/2 z-30 w-[300px] bg-white/95 [backdrop-filter:blur(20px)_saturate(180%)] border border-black/10 rounded-3xl shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-black/5">
        <div className="flex items-center gap-2 min-w-0">
          <Globe2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <p className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wide truncate">{title}</p>
        </div>
        <button
          onClick={() => setOpen(false)}
          className="w-6 h-6 rounded-full flex items-center justify-center text-[#86868b] hover:bg-black/5 hover:text-[#1d1d1f] transition-colors shrink-0"
          aria-label="Hide map"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="relative w-full aspect-[4/5] bg-[#f5f5f7]">
        <svg viewBox="0 0 100 90" className="w-full h-full text-[#1d1d1f]/10">
          {mode === 'india' ? <IndiaOutline /> : <WorldOutline />}
        </svg>

        {points.map((p, i) => (
          <div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2 group"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          >
            <span className={`block w-2.5 h-2.5 rounded-full border-2 border-white shadow ${p.highlight ? 'bg-emerald-600' : 'bg-[#1d1d1f]'}`}>
              {p.highlight && (
                <span className="absolute inset-0 rounded-full bg-emerald-600 animate-ping opacity-75" />
              )}
            </span>
            <div className="pointer-events-none absolute left-1/2 bottom-full mb-2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-[#1d1d1f] text-white text-[11px] rounded-lg px-2.5 py-1.5 shadow-lg">
              <p className="font-medium">{p.label}</p>
              {p.sublabel && <p className="text-white/60">{p.sublabel}</p>}
            </div>
          </div>
        ))}
      </div>

      <div className="px-4 py-3 border-t border-black/5 max-h-32 overflow-y-auto">
        <div className="space-y-1.5">
          {points.map((p, i) => (
            <div key={i} className="flex items-center gap-2 text-xs">
              <MapPin className={`w-3 h-3 shrink-0 ${p.highlight ? 'text-emerald-600' : 'text-[#86868b]'}`} />
              <span className="text-[#1d1d1f] truncate">{p.label}</span>
              {p.sublabel && <span className="text-[#86868b] truncate">· {p.sublabel}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
