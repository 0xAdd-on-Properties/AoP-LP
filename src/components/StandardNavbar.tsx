import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, ChevronDown, Home, Leaf, Package, Box, Building, Wrench, Paintbrush, Calculator, FileText, Shield } from 'lucide-react';

const StandardNavbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const dropdownRef = useRef(null);
  const userMenuRef = useRef(null);
  const location = useLocation();

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
    setShowUserMenu(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
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

  return (
    <div className="fixed top-0 w-full z-50 flex justify-center pt-4" ref={dropdownRef}>
      {/* Search Icon - Left of Navbar */}
      <div className="absolute left-8 top-6">
        <button className="p-3 glass-card rounded-full text-white hover:text-emerald-400 transition-colors duration-300">
          <Search className="w-5 h-5" />
        </button>
      </div>

      {/* User Icon - Right of Navbar */}
      <div className="absolute right-8 top-6" ref={userMenuRef}>
        <button
          onClick={() => setShowUserMenu(!showUserMenu)}
          className="p-3 glass-card rounded-full text-white hover:text-emerald-400 transition-colors duration-300"
        >
          <User className="w-5 h-5" />
        </button>
        {showUserMenu && (
          <div className="absolute top-full right-0 mt-2 w-48 glass-card rounded-xl shadow-xl py-2">
            <Link
              to="/login"
              className="block px-4 py-3 text-gray-300 hover:bg-white/10 hover:text-white transition-colors duration-200"
              onClick={closeDropdowns}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block px-4 py-3 text-gray-300 hover:bg-white/10 hover:text-white transition-colors duration-200"
              onClick={closeDropdowns}
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>

      {/* Half-Width Glassmorphic Navbar */}
      <nav className="w-1/2 max-w-4xl bg-white/90 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4 shadow-lg">
        <div className="flex items-center justify-between h-12">
          {/* Left Side - EcoProps, Markets, 3DProps */}
          <div className="flex items-center space-x-6">
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('ecoprops')}
                className="flex items-center space-x-2 text-slate-700 hover:text-emerald-600 transition-colors duration-300"
              >
                <Leaf className="w-4 h-4" />
                <span className="text-sm font-medium">EcoProps</span>
                <ChevronDown className="w-3 h-3" />
              </button>
                      {activeDropdown === 'ecoprops' && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-md border border-white/20 rounded-xl shadow-xl py-2">
                  {ecoPropsItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:bg-white/10 hover:text-white transition-colors duration-200"
                      onClick={closeDropdowns}
                    >
                      {item.icon}
                      <span className="text-sm">{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('markets')}
                className="flex items-center space-x-2 text-slate-700 hover:text-emerald-600 transition-colors duration-300"
              >
                <Package className="w-4 h-4" />
                <span className="text-sm font-medium">Markets</span>
                <ChevronDown className="w-3 h-3" />
              </button>
                      {activeDropdown === 'markets' && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-md border border-white/20 rounded-xl shadow-xl py-2">
                  {marketplacesItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:bg-white/10 hover:text-white transition-colors duration-200"
                      onClick={closeDropdowns}
                    >
                      {item.icon}
                      <span className="text-sm">{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('3dprops')}
                className="flex items-center space-x-2 text-slate-700 hover:text-emerald-600 transition-colors duration-300"
              >
                <Box className="w-4 h-4" />
                <span className="text-sm font-medium">3DProps</span>
                <ChevronDown className="w-3 h-3" />
              </button>
                      {activeDropdown === '3dprops' && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-md border border-white/20 rounded-xl shadow-xl py-2">
                  {threeDPropsItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:bg-white/10 hover:text-white transition-colors duration-200"
                      onClick={closeDropdowns}
                    >
                      {item.icon}
                      <span className="text-sm">{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Center - Dynamic Logo */}
          <Link to="/" className="flex items-center space-x-2">
            {location.pathname === '/ecoprops' ? (
              <>
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  AoPEco
                </span>
              </>
            ) : location.pathname === '/eco' ? (
              <>
                <div className="w-8 h-8 bg-gradient-to-r from-green-700 to-emerald-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent">
                  AEco
                </span>
              </>
            ) : location.pathname === '/aopmarkets' ? (
              <>
                <div className="w-8 h-8 bg-gradient-to-r from-slate-700 to-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-gray-700 bg-clip-text text-transparent">
                  AoPM
                </span>
              </>
            ) : (
              <>
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  AoP
                </span>
              </>
            )}
          </Link>

          {/* Right Side - Buy, Sell, Rent */}
          <div className="flex items-center space-x-6">
            <Link to="/buy" className="text-slate-700 hover:text-emerald-600 transition-colors duration-300 text-sm font-medium">
              Buy
            </Link>
            <Link to="/sell" className="text-slate-700 hover:text-emerald-600 transition-colors duration-300 text-sm font-medium">
              Sell
            </Link>
            <Link to="/rent" className="text-slate-700 hover:text-emerald-600 transition-colors duration-300 text-sm font-medium">
              Rent
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default StandardNavbar;
