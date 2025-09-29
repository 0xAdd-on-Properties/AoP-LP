import React, { useState, useEffect } from 'react';
import { Search, Play, ChevronDown, Home, Leaf, Zap, Shield, Globe, Building, TreePine, Droplets, Sun, Wind, Recycle, Sprout, Mountain } from 'lucide-react';
import useClickOutside from '../../../hooks/useClickOutside';

const Hero = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  
  const cardModalRef = useClickOutside(() => {
    setSelectedCard(null);
  });

  const ecosystemCards = [
    {
      icon: Home,
      title: "Smart Properties",
      subtitle: "AI-Powered Management",
      features: ["Carbon Negative", "Energy Independent", "Water Harvesting"],
      color: "from-emerald-500/30 to-green-500/30"
    },
    {
      icon: Sprout,
      title: "Eco Villages",
      subtitle: "Sustainable Communities",
      features: ["Zero Waste", "Renewable Energy", "Organic Farming"],
      color: "from-green-500/30 to-teal-500/30"
    },
    {
      icon: Sun,
      title: "Solar Energy",
      subtitle: "Clean Power Systems",
      features: ["Solar Panels", "Battery Storage", "Smart Distribution"],
      color: "from-teal-500/30 to-cyan-500/30"
    },
    {
      icon: Droplets,
      title: "Water Systems",
      subtitle: "Sustainable Water Management",
      features: ["Rain Harvesting", "Water Recycling", "Smart Irrigation"],
      color: "from-cyan-500/30 to-emerald-500/30"
    },
    {
      icon: Wind,
      title: "Wind Energy",
      subtitle: "Renewable Power",
      features: ["Wind Turbines", "Clean Energy", "Grid Integration"],
      color: "from-emerald-500/30 to-green-500/30"
    },
    {
      icon: Mountain,
      title: "Green Infrastructure",
      subtitle: "Nature-Based Solutions",
      features: ["Green Roofs", "Living Walls", "Urban Forests"],
      color: "from-teal-500/30 to-cyan-500/30"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % ecosystemCards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-4000"></div>
        </div>

        {/* Sacred Geometry Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-emerald-400 rotate-45 animate-spin"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-teal-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/2 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 transform rotate-12 animate-bounce"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 lg:pt-28">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-4 sm:mb-6">
                  <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                    Sustainable
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Living
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    Revolution
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
                  Transform your living space into a sustainable ecosystem. From smart homes to eco-villages, 
                  discover the future of sustainable living in India.
                </p>
              </div>

              {/* Search Bar */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 sm:w-5 h-4 sm:h-5" />
                    <input
                      type="text"
                      placeholder="Search for sustainable properties..."
                      className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-all duration-300 text-sm sm:text-base"
                    />
                  </div>
                  <div className="relative group">
                    <select className="appearance-none bg-white/10 border border-white/20 rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-white focus:outline-none focus:border-emerald-400 transition-all duration-300 pr-8 sm:pr-10 w-full sm:w-48 text-sm sm:text-base">
                      <option value="" className="bg-slate-800 text-white">All Types</option>
                      <option value="earthships" className="bg-slate-800 text-white">Earthships</option>
                      <option value="mandala" className="bg-slate-800 text-white">Mandala Homes</option>
                      <option value="eco-communes" className="bg-slate-800 text-white">Eco Communes</option>
                      <option value="smart-apartments" className="bg-slate-800 text-white">Smart Apartments</option>
                    </select>
                    <ChevronDown className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 sm:w-5 h-4 sm:h-5 pointer-events-none group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg shadow-emerald-500/25 text-sm sm:text-base">
                    Search
                  </button>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg shadow-teal-500/25 flex items-center justify-center text-sm sm:text-base">
                  <Play className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                  Watch Demo
                </button>
                <button className="bg-white/10 hover:bg-white/20 border border-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-white transition-all duration-300 text-sm sm:text-base">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Content - Rotating Cards */}
            <div className="space-y-6 lg:space-y-8">
              <div className="text-center">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent mb-2">
                  Complete Property Ecosystem
                </h2>
                <p className="text-gray-300 text-base sm:text-lg">
                  Everything you need for sustainable living
                </p>
              </div>
              
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentCardIndex * 33.333}%)` }}>
                  {ecosystemCards.map((card, index) => {
                    const IconComponent = card.icon;
                    return (
                      <div key={index} className="w-1/3 flex-shrink-0 px-2 sm:px-3">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-6 h-full cursor-pointer hover:scale-105 transition-all duration-300" onClick={() => setSelectedCard(card)}>
                          <div className={`bg-gradient-to-br ${card.color} rounded-xl sm:rounded-2xl h-20 sm:h-24 lg:h-32 mb-2 sm:mb-3 lg:mb-4 flex items-center justify-center overflow-hidden relative`}>
                            <div className={`w-full h-full bg-gradient-to-br ${card.color} rounded-xl sm:rounded-2xl flex items-center justify-center`}>
                              <IconComponent className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 text-white/80" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl sm:rounded-2xl"></div>
                            <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 text-left">
                              <h3 className="text-white text-xs sm:text-sm lg:text-base font-semibold">{card.title}</h3>
                              <p className="text-gray-200 text-xs">{card.subtitle}</p>
                            </div>
                          </div>
                          <div className="space-y-1">
                            {card.features.slice(0, 2).map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex justify-between text-white text-xs">
                                <span className="truncate">{feature}</span>
                                <span className="text-green-400 ml-1">✓</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Card Indicators */}
              <div className="flex justify-center space-x-2">
                {ecosystemCards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCardIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentCardIndex 
                        ? 'bg-emerald-400 scale-125' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-2 -left-2 bg-gradient-to-r from-emerald-400 to-green-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Sprout className="w-6 h-6 text-white" />
              </div>
              
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-teal-500 to-cyan-500 w-20 h-20 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white text-xs font-bold text-center">Eco<br/>System</span>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/60" />
          </div>
        </div>
      </section>

      {/* Card Details Modal */}
      {selectedCard && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 border border-white/20 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" ref={cardModalRef}>
            <div className="relative">
              {/* Header */}
              <div className="bg-gradient-to-r from-slate-700 to-slate-800 p-8 rounded-t-3xl relative">
                <button 
                  onClick={() => setSelectedCard(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
                >
                  ✕
                </button>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${selectedCard.color} rounded-xl flex items-center justify-center`}>
                    <selectedCard.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">{selectedCard.title}</h3>
                    <p className="text-gray-300 text-lg">{selectedCard.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                  <div className="space-y-3">
                    {selectedCard.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg shadow-emerald-500/25">
                    Learn More
                  </button>
                  <button className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;