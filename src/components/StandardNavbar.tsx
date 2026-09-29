'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Search, User, ChevronDown, Home, Leaf, Package, Box, Building, Wrench, Paintbrush, Calculator, FileText, Shield, Menu, X, ShoppingCart } from 'lucide-react';
import { useUser, useStackApp } from '@hexclave/next';

const StandardNavbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<any>(null);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const user = useUser({ or: 'return-null' });
  const app = useStackApp();
  const [selfInfo, setSelfInfo] = useState<{ role: string | null; is_admin: boolean } | null>(null);

  useEffect(() => {
    const uid = user?.id ?? null;
    if (!uid) {
      setSelfInfo(null);
      return;
    }
    let cancelled = false;
    (async () => {
      try {
        const authHeaders = await app.getAuthHeaders();
        const res = await fetch('/api/user/me', { headers: authHeaders });
        if (!res.ok) return;
        const data = await res.json();
        if (!cancelled) setSelfInfo(data);
      } catch {
        // Non-critical: nav just falls back to the default link set.
      }
    })();
    return () => { cancelled = true; };
  }, [user?.id, app]);

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
    setShowUserMenu(false);
    setShowSearch(false);
    setShowMobileMenu(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setShowSearch(false);
        setShowMobileMenu(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const ecoPropsItems = [
    { name: 'Earthships', link: '/earthships', icon: <Home className="w-4 h-4" /> },
    { name: 'Mandala Homes', link: '/mandala-homes', icon: <Building className="w-4 h-4" /> },
    { name: 'Manduva Homes', link: '/manduva-homes', icon: <Home className="w-4 h-4" /> },
    { name: 'Eco Communes', link: '/eco-communes', icon: <Leaf className="w-4 h-4" /> },
    { name: 'Smart Apartments', link: '/smart-apartments', icon: <Box className="w-4 h-4" /> }
  ];

  const marketplacesItems = [
    { name: 'Sustainify Market', link: '/sustainify-market', icon: <Package className="w-4 h-4" /> },
    { name: 'Materials', link: '/materials-marketplace', icon: <Wrench className="w-4 h-4" /> },
    { name: 'Furnishings', link: '/furnishings-marketplace', icon: <Paintbrush className="w-4 h-4" /> },
    { name: 'Systems', link: '/sustainable-systems-marketplace', icon: <Calculator className="w-4 h-4" /> },
    { name: 'Technologies', link: '/sustainable-technologies-marketplace', icon: <FileText className="w-4 h-4" /> }
  ];

  const threeDPropsItems = [
    { name: '3D Modelling', link: '/simple-3d-modelling', icon: <Box className="w-4 h-4" /> },
    { name: 'Virtual Tours', link: '/virtual-tours', icon: <Building className="w-4 h-4" /> },
    { name: 'Asset Tokenization', link: '/asset-tokenization', icon: <Shield className="w-4 h-4" /> },
    { name: 'Web3', link: '/web3', icon: <Package className="w-4 h-4" /> },
    { name: 'Metaverse', link: '/metaverse', icon: <Box className="w-4 h-4" /> }
  ];

  const navDropdown = (key: string, label: string, Icon: any, items: typeof ecoPropsItems) => (
    <div className="relative">
      <button
        onClick={() => handleDropdownToggle(key)}
        className="flex items-center gap-1 sm:gap-1.5 text-[#1d1d1f]/70 hover:text-[#1d1d1f] transition-colors duration-200"
      >
        <Icon className="w-3.5 h-3.5 sm:hidden" />
        <span className="text-sm font-medium hidden sm:block">{label}</span>
        <ChevronDown className="w-3 h-3" />
      </button>
      {activeDropdown === key && (
        <div className="absolute top-full left-0 mt-3 w-52 bg-white/95 [backdrop-filter:blur(20px)_saturate(180%)] border border-black/5 rounded-2xl shadow-xl py-2 z-10">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="flex items-center gap-3 px-4 py-2.5 text-[#1d1d1f]/80 hover:bg-black/5 hover:text-[#1d1d1f] transition-colors duration-150 text-sm"
              onClick={closeDropdowns}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="fixed top-0 w-full z-50 flex justify-center pt-3 sm:pt-4 px-3 sm:px-4">
      <nav
        ref={navRef}
        className="w-full max-w-5xl bg-white/70 [backdrop-filter:blur(20px)_saturate(180%)] border border-black/5 rounded-2xl px-3 sm:px-5 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
      >
        <div className="flex items-center justify-between h-14">
          {/* Left — logo + nav links */}
          <div className="flex items-center gap-5 sm:gap-7 min-w-0">
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
              <img src="/brand/logo.webp" alt="Add On Properties" className="w-8 h-8 rounded-lg object-cover" />
              <span className="text-lg font-bold text-[#1d1d1f] hidden sm:block">Add On Properties</span>
            </Link>

            <div className="hidden md:flex items-center gap-5">
              {navDropdown('ecoprops', 'EcoProps', Leaf, ecoPropsItems)}
              {navDropdown('markets', 'Markets', Package, marketplacesItems)}
              {navDropdown('3dprops', '3DProps', Box, threeDPropsItems)}
            </div>
          </div>

          {/* Right — search, buy, user, mobile menu */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <div className="relative">
              <button
                onClick={() => setShowSearch(!showSearch)}
                aria-label="Search"
                className="w-9 h-9 flex items-center justify-center rounded-full text-[#1d1d1f]/70 hover:text-[#1d1d1f] hover:bg-black/5 transition-colors duration-200"
              >
                <Search className="w-4 h-4" />
              </button>
              {showSearch && (
                <div className="absolute top-full right-0 mt-3 w-64 sm:w-72 bg-white/95 [backdrop-filter:blur(20px)_saturate(180%)] border border-black/5 rounded-2xl shadow-xl p-3 z-10">
                  <input
                    type="text"
                    autoFocus
                    placeholder="Search properties, materials..."
                    className="w-full px-3 py-2 bg-black/5 rounded-xl text-sm text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
                  />
                </div>
              )}
            </div>

            <div className="relative hidden md:block">
              <button
                onClick={() => handleDropdownToggle('buy')}
                className="flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium text-[#1d1d1f]/70 hover:text-[#1d1d1f] hover:bg-black/5 transition-colors duration-200"
              >
                <span>Buy</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {activeDropdown === 'buy' && (
                <div className="absolute top-full right-0 mt-3 w-40 bg-white/95 [backdrop-filter:blur(20px)_saturate(180%)] border border-black/5 rounded-2xl shadow-xl py-2 z-10">
                  <Link href="/buy" className="block px-4 py-2.5 text-[#1d1d1f]/80 hover:bg-black/5 hover:text-[#1d1d1f] transition-colors duration-150 text-sm" onClick={closeDropdowns}>
                    Buy Properties
                  </Link>
                  <Link href="/sell" className="block px-4 py-2.5 text-[#1d1d1f]/80 hover:bg-black/5 hover:text-[#1d1d1f] transition-colors duration-150 text-sm" onClick={closeDropdowns}>
                    Sell Properties
                  </Link>
                  <Link href="/rent" className="block px-4 py-2.5 text-[#1d1d1f]/80 hover:bg-black/5 hover:text-[#1d1d1f] transition-colors duration-150 text-sm" onClick={closeDropdowns}>
                    Rent Properties
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/cart"
              aria-label="Cart"
              className="w-9 h-9 flex items-center justify-center rounded-full text-[#1d1d1f]/70 hover:text-[#1d1d1f] hover:bg-black/5 transition-colors duration-200"
            >
              <ShoppingCart className="w-4 h-4" />
            </Link>

            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                aria-label="Account"
                className="w-9 h-9 flex items-center justify-center rounded-full text-[#1d1d1f]/70 hover:text-[#1d1d1f] hover:bg-black/5 transition-colors duration-200"
              >
                <User className="w-4 h-4" />
              </button>
              {showUserMenu && (
                <div className="absolute top-full right-0 mt-3 w-56 bg-white/95 [backdrop-filter:blur(20px)_saturate(180%)] border border-black/5 rounded-2xl shadow-xl py-2 z-10 max-h-[70vh] overflow-y-auto">
                  {user ? (
                    <>
                      <div className="px-4 py-2.5 text-[#1d1d1f] text-sm font-medium border-b border-black/5 truncate">
                        {user.displayName || user.primaryEmail}
                      </div>
                      <Link href="/dashboard/properties" className="block px-4 py-2.5 text-[#1d1d1f]/80 hover:bg-black/5 hover:text-[#1d1d1f] transition-colors duration-150 text-sm" onClick={closeDropdowns}>
                        My Listings
                      </Link>
                      <Link href="/dashboard/projects" className="block px-4 py-2.5 text-[#1d1d1f]/80 hover:bg-black/5 hover:text-[#1d1d1f] transition-colors duration-150 text-sm" onClick={closeDropdowns}>
                        My Projects
                      </Link>
                      <Link href="/dashboard/materials" className="block px-4 py-2.5 text-[#1d1d1f]/80 hover:bg-black/5 hover:text-[#1d1d1f] transition-colors duration-150 text-sm" onClick={closeDropdowns}>
                        My SKUs
                      </Link>
                      <Link href="/dashboard/orders" className="block px-4 py-2.5 text-[#1d1d1f]/80 hover:bg-black/5 hover:text-[#1d1d1f] transition-colors duration-150 text-sm" onClick={closeDropdowns}>
                        My Orders
                      </Link>
                      <Link href="/dashboard/quotes" className="block px-4 py-2.5 text-[#1d1d1f]/80 hover:bg-black/5 hover:text-[#1d1d1f] transition-colors duration-150 text-sm" onClick={closeDropdowns}>
                        My Quote Requests
                      </Link>
                      {(selfInfo?.role === 'service_provider' || selfInfo?.role === 'builder') && (
                        <Link href="/dashboard/provider-quotes" className="block px-4 py-2.5 text-[#1d1d1f]/80 hover:bg-black/5 hover:text-[#1d1d1f] transition-colors duration-150 text-sm" onClick={closeDropdowns}>
                          Find Jobs to Quote
                        </Link>
                      )}
                      {selfInfo?.is_admin && (
                        <Link href="/admin" className="block px-4 py-2.5 text-[#1d1d1f]/80 hover:bg-black/5 hover:text-[#1d1d1f] transition-colors duration-150 text-sm" onClick={closeDropdowns}>
                          Admin Dashboard
                        </Link>
                      )}
                      <button
                        onClick={() => { user.signOut(); closeDropdowns(); }}
                        className="block w-full text-left px-4 py-2.5 text-[#1d1d1f]/80 hover:bg-black/5 hover:text-[#1d1d1f] transition-colors duration-150 text-sm"
                      >
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link href="/login" className="block px-4 py-2.5 text-[#1d1d1f]/80 hover:bg-black/5 hover:text-[#1d1d1f] transition-colors duration-150 text-sm" onClick={closeDropdowns}>
                        Login
                      </Link>
                      <Link href="/signup" className="block px-4 py-2.5 text-[#1d1d1f]/80 hover:bg-black/5 hover:text-[#1d1d1f] transition-colors duration-150 text-sm" onClick={closeDropdowns}>
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>

            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              aria-label="Menu"
              className="w-9 h-9 flex items-center justify-center rounded-full text-[#1d1d1f]/70 hover:text-[#1d1d1f] hover:bg-black/5 transition-colors duration-200 md:hidden"
            >
              {showMobileMenu ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {showMobileMenu && (
          <div className="md:hidden border-t border-black/5 py-3 px-1">
            <div className="mb-1 px-3 text-xs font-medium text-[#86868b] uppercase tracking-wide">EcoProps</div>
            {ecoPropsItems.map((item, index) => (
              <Link key={index} href={item.link} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[#1d1d1f]/80 hover:bg-black/5 hover:text-[#1d1d1f] transition-colors duration-150 text-sm" onClick={closeDropdowns}>
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
            <div className="mt-3 mb-1 px-3 text-xs font-medium text-[#86868b] uppercase tracking-wide">Markets</div>
            {marketplacesItems.map((item, index) => (
              <Link key={index} href={item.link} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[#1d1d1f]/80 hover:bg-black/5 hover:text-[#1d1d1f] transition-colors duration-150 text-sm" onClick={closeDropdowns}>
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
            <div className="mt-3 mb-1 px-3 text-xs font-medium text-[#86868b] uppercase tracking-wide">3DProps</div>
            {threeDPropsItems.map((item, index) => (
              <Link key={index} href={item.link} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[#1d1d1f]/80 hover:bg-black/5 hover:text-[#1d1d1f] transition-colors duration-150 text-sm" onClick={closeDropdowns}>
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-black/5 flex gap-2 px-3">
              <Link href="/buy" className="flex-1 text-center py-2.5 rounded-full bg-black/5 hover:bg-black/10 text-[#1d1d1f] text-sm font-medium transition-colors" onClick={closeDropdowns}>Buy</Link>
              <Link href="/sell" className="flex-1 text-center py-2.5 rounded-full bg-black/5 hover:bg-black/10 text-[#1d1d1f] text-sm font-medium transition-colors" onClick={closeDropdowns}>Sell</Link>
              <Link href="/rent" className="flex-1 text-center py-2.5 rounded-full bg-black/5 hover:bg-black/10 text-[#1d1d1f] text-sm font-medium transition-colors" onClick={closeDropdowns}>Rent</Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default StandardNavbar;
