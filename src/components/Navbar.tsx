import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Globe, Leaf, ChevronDown, Home } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-white/10" ref={dropdownRef}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" onClick={closeDropdowns}>
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-teal-400 rounded-full border-2 border-slate-900"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                Add On Prop
              </h1>
              <p className="text-xs text-gray-400">Sustainable Living</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {/* AOP Button */}
              <Link 
                to="/property-marketplace" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-cyan-500/25"
              >
                <Home className="w-4 h-4" />
                <span>AOP</span>
              </Link>
              
              <Link to="/property-marketplace" className="text-white hover:text-emerald-400 transition-colors font-medium">
                Buy
              </Link>
              <Link to="/property-marketplace" className="text-white hover:text-emerald-400 transition-colors font-medium">
                Rent
              </Link>
              
              {/* EcoProps Dropdown */}
              <div className="relative">
                <button 
                  className="text-white hover:text-emerald-400 transition-colors font-medium flex items-center space-x-1"
                  onClick={() => handleDropdownToggle('ecoprops')}
                >
                  <span>EcoProps</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'ecoprops' && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 border border-white/20 rounded-xl shadow-lg backdrop-blur-md">
                    <Link to="/earthships" className="block px-4 py-3 text-white hover:text-emerald-400 hover:bg-white/10 transition-colors">
                      Earthships
                    </Link>
                    <Link to="/mandala-homes" className="block px-4 py-3 text-white hover:text-emerald-400 hover:bg-white/10 transition-colors">
                      Mandala Houses
                    </Link>
                    <Link to="/eco-communes" className="block px-4 py-3 text-white hover:text-emerald-400 hover:bg-white/10 transition-colors">
                      Eco Communes
                    </Link>
                    <Link to="/property-marketplace" className="block px-4 py-3 text-white hover:text-emerald-400 hover:bg-white/10 transition-colors rounded-b-xl">
                      Smart Apartments
                    </Link>
                  </div>
                )}
              </div>

              {/* Marketplace Dropdown */}
              <div className="relative">
                <button 
                  className="text-white hover:text-emerald-400 transition-colors font-medium flex items-center space-x-1"
                  onClick={() => handleDropdownToggle('marketplace')}
                >
                  <span>Marketplace</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'marketplace' && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-slate-800 border border-white/20 rounded-xl shadow-lg backdrop-blur-md">
                    <Link to="/sustainify-market" className="block px-4 py-3 text-white hover:text-emerald-400 hover:bg-white/10 transition-colors">
                      Sustainify Market
                    </Link>
                    <Link to="/materials-marketplace" className="block px-4 py-3 text-white hover:text-emerald-400 hover:bg-white/10 transition-colors">
                      Materials Marketplace
                    </Link>
                    <Link to="/furnishings-marketplace" className="block px-4 py-3 text-white hover:text-emerald-400 hover:bg-white/10 transition-colors">
                      Furnishings Marketplace
                    </Link>
                    <Link to="/sustainable-systems-marketplace" className="block px-4 py-3 text-white hover:text-emerald-400 hover:bg-white/10 transition-colors">
                      Sustainable Systems
                    </Link>
                    <Link to="/sustainable-technologies-marketplace" className="block px-4 py-3 text-white hover:text-emerald-400 hover:bg-white/10 transition-colors rounded-b-xl">
                      Sustainable Technologies
                    </Link>
                  </div>
                )}
              </div>

              {/* 3D Property Dropdown */}
              <div className="relative">
                <button 
                  className="text-white hover:text-emerald-400 transition-colors font-medium flex items-center space-x-1"
                  onClick={() => handleDropdownToggle('3dproperty')}
                >
                  <span>3D Property</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === '3dproperty' && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 border border-white/20 rounded-xl shadow-lg backdrop-blur-md">
                    <Link to="/simple-3d-modelling" className="block px-4 py-3 text-white hover:text-emerald-400 hover:bg-white/10 transition-colors">
                      Simple 3D Modelling
                    </Link>
                    <Link to="/virtual-tours" className="block px-4 py-3 text-white hover:text-emerald-400 hover:bg-white/10 transition-colors">
                      Virtual Tours
                    </Link>
                    <Link to="/asset-tokenization" className="block px-4 py-3 text-white hover:text-emerald-400 hover:bg-white/10 transition-colors">
                      Asset Tokenization
                    </Link>
                    <Link to="/web3" className="block px-4 py-3 text-white hover:text-emerald-400 hover:bg-white/10 transition-colors">
                      Web3
                    </Link>
                    <Link to="/metaverse" className="block px-4 py-3 text-white hover:text-emerald-400 hover:bg-white/10 transition-colors rounded-b-xl">
                      Metaverse
                    </Link>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </button>
              <button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-emerald-500/25">
                <User className="w-4 h-4" />
                <span>Login</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              <Link to="/property-marketplace" className="text-white hover:text-emerald-400 transition-colors font-medium">
                Buy
              </Link>
              <Link to="/property-marketplace" className="text-white hover:text-emerald-400 transition-colors font-medium">
                Rent
              </Link>
              <Link to="/earthships" className="text-white hover:text-emerald-400 transition-colors font-medium">
                Earthships
              </Link>
              <Link to="/mandala-homes" className="text-white hover:text-emerald-400 transition-colors font-medium">
                Mandala Houses
              </Link>
              <Link to="/sustainify-market" className="text-white hover:text-emerald-400 transition-colors font-medium">
                Marketplace
              </Link>
              <Link to="/virtual-tours" className="text-white hover:text-emerald-400 transition-colors font-medium">
                3D Property
              </Link>
              <button className="bg-gradient-to-r from-emerald-500 to-green-600 px-6 py-2 rounded-lg font-semibold w-fit shadow-lg shadow-emerald-500/25">
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;