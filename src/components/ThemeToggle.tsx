'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Home, Leaf, Package, Building } from 'lucide-react';
import Link from 'next/link';
import useClickOutside from '../hooks/useClickOutside';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useClickOutside(() => {
    setShowMenu(false);
  });

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      setIsDark(true); // Default to dark
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const menuItems = [
    {
      icon: <Home className="w-4 h-4" />,
      label: "AOP",
      description: "Property Marketplace",
      link: "/aop"
    },
    {
      icon: <Leaf className="w-4 h-4" />,
      label: "AoPEco",
      description: "EcoProps Only",
      link: "/ecoprops"
    },
    {
      icon: <Building className="w-4 h-4" />,
      label: "AEco",
      description: "Ecosystem Universe",
      link: "/eco"
    },
    {
      icon: <Package className="w-4 h-4" />,
      label: "AoPmarkets",
      description: "All Marketplaces",
      link: "/aopmarkets"
    }
  ];

  return (
    <div
      className="fixed bottom-6 left-6 z-50"
      ref={menuRef}
    >
      {/* Menu Items */}
      {showMenu && (
        <div className="absolute bottom-16 left-0 w-56 bg-white/90 [backdrop-filter:blur(20px)_saturate(180%)] border border-black/5 rounded-2xl shadow-xl py-2 overflow-hidden">
          <div className="px-4 pt-2 pb-1 text-xs font-medium text-[#86868b] uppercase tracking-wide">Switch base</div>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="group flex items-center gap-3 px-4 py-2.5 hover:bg-black/5 transition-colors duration-150"
              onClick={() => setShowMenu(false)}
            >
              <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center text-[#1d1d1f]/70 group-hover:text-[#1d1d1f] flex-shrink-0">
                {item.icon}
              </div>
              <div className="min-w-0">
                <div className="font-medium text-sm text-[#1d1d1f]">{item.label}</div>
                <div className="text-xs text-[#86868b] truncate">{item.description}</div>
              </div>
            </Link>
          ))}
          <div className="mt-1 pt-1 border-t border-black/5">
            <button
              onClick={() => { toggleTheme(); setShowMenu(false); }}
              className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-black/5 transition-colors duration-150 text-left"
            >
              <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center text-[#1d1d1f]/70 flex-shrink-0">
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </div>
              <div className="font-medium text-sm text-[#1d1d1f]">{isDark ? "Light Mode" : "Dark Mode"}</div>
            </button>
          </div>
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={handleClick}
        className="w-12 h-12 bg-[#1d1d1f] hover:bg-black rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
        aria-label="Switch base"
      >
        <Package className="w-5 h-5 text-white" />
      </button>
    </div>
  );
};

export default ThemeToggle;
