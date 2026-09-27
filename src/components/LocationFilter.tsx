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
        className="w-full h-full flex items-center justify-between gap-2 bg-white border border-black/10 rounded-lg px-4 py-3 text-[#1d1d1f] hover:bg-black/5 transition-colors"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-2 truncate">
          <MapPin className="w-4 h-4 flex-shrink-0 text-[#86868b]" />
          <span className="truncate">{selectedCity}</span>
        </span>
        <ChevronDown className={`w-4 h-4 flex-shrink-0 text-[#86868b] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-72 bg-white/95 [backdrop-filter:blur(20px)_saturate(180%)] border border-black/5 rounded-xl shadow-xl z-50 overflow-hidden">
          <div className="px-4 pt-3 pb-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">Live now</p>
          </div>
          {LAUNCHED_CITIES.map((city) => (
            <button
              key={city}
              type="button"
              onClick={() => {
                onCityChange?.(city);
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-between px-4 py-2.5 text-left text-[#1d1d1f] hover:bg-black/5 transition-colors"
            >
              <span>{city}</span>
              {city === selectedCity && <Check className="w-4 h-4 text-emerald-600" />}
            </button>
          ))}

          <div className="px-4 pt-3 pb-2 border-t border-black/5 mt-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#86868b]">Coming soon</p>
          </div>
          {UPCOMING_CITIES.map((city) => (
            <div
              key={city}
              className="w-full flex items-center justify-between px-4 py-2.5 text-[#86868b] cursor-not-allowed"
              title={`${city} launches soon`}
            >
              <span>{city}</span>
              <span className="text-[10px] font-medium bg-black/5 border border-black/10 rounded-full px-2 py-0.5">Soon</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationFilter;
