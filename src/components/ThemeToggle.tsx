import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Home, Leaf, Package, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
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

  const menuItems = [
    {
      icon: <Home className="w-5 h-5" />,
      label: "AOP",
      description: "Property Marketplace",
      link: "/aop",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Leaf className="w-5 h-5" />,
      label: "AoPEco",
      description: "EcoProps Only",
      link: "/ecoprops",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: <Building className="w-5 h-5" />,
      label: "AEco",
      description: "Ecosystem Universe",
      link: "/eco",
      color: "from-teal-500 to-cyan-600"
    },
    {
      icon: <Package className="w-5 h-5" />,
      label: "AoPmarkets",
      description: "All Marketplaces",
      link: "/aopmarkets",
      color: "from-blue-500 to-indigo-600"
    }
  ];

  return (
    <div 
      className="fixed bottom-6 left-6 z-50" 
      ref={menuRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Menu Items */}
      {showMenu && (
        <div className="absolute bottom-16 left-0 space-y-3 animate-in slide-in-from-bottom-2 duration-300">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="group flex items-center space-x-3 bg-white/90 backdrop-blur-md border border-white/20 rounded-2xl p-4 hover:bg-white/95 hover:scale-105 transition-all duration-300 min-w-[200px] shadow-lg"
              onClick={() => setShowMenu(false)}
            >
              <div className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-md`}>
                {item.icon}
              </div>
              <div>
                <div className="font-semibold text-slate-800 group-hover:text-slate-900">{item.label}</div>
                <div className="text-sm text-slate-600">{item.description}</div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={toggleTheme}
        className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 rounded-full shadow-lg shadow-blue-500/25 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun className="w-6 h-6 text-white group-hover:rotate-180 transition-transform duration-500" />
        ) : (
          <Moon className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-500" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
