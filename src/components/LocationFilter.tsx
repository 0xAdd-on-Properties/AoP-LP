'use client';

import { useState } from 'react';
import { MapPin, ChevronDown, Check } from 'lucide-react';
import useClickOutside from '../hooks/useClickOutside';

export const LAUNCHED_CITIES = ['Visakhapatnam'];
export const UPCOMING_CITIES = ['Bengaluru', 'Hyderabad', 'Chennai', 'Gurgaon', 'Mumbai'];

interface LocationFilterProps {
  selectedCity?: string;
  onCityChange?: (city: string) => void;
  className?: string;
}

const LocationFilter = ({ selectedCity = 'Visakhapatnam', onCityChange, className = '' }: LocationFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutside(() => setIsOpen(false));

  return (
    <div className={`relative ${className}`} ref={ref}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full h-full flex items-center justify-between gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-3 text-white hover:bg-white/25 transition-colors"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-2 truncate">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span className="truncate">{selectedCity}</span>
        </span>
        <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-72 bg-slate-800 border border-white/20 rounded-xl shadow-2xl z-50 overflow-hidden">
          <div className="px-4 pt-3 pb-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400">Live now</p>
          </div>
          {LAUNCHED_CITIES.map((city) => (
            <button
              key={city}
              type="button"
              onClick={() => {
                onCityChange?.(city);
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-between px-4 py-2.5 text-left text-white hover:bg-white/10 transition-colors"
            >
              <span>{city}</span>
              {city === selectedCity && <Check className="w-4 h-4 text-emerald-400" />}
            </button>
          ))}

          <div className="px-4 pt-3 pb-2 border-t border-white/10 mt-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Coming soon</p>
          </div>
          {UPCOMING_CITIES.map((city) => (
            <div
              key={city}
              className="w-full flex items-center justify-between px-4 py-2.5 text-gray-500 cursor-not-allowed"
              title={`${city} launches soon`}
            >
              <span>{city}</span>
              <span className="text-[10px] font-medium bg-white/5 border border-white/10 rounded-full px-2 py-0.5">Soon</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationFilter;
