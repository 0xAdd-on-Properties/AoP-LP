'use client';

import React, { useState } from 'react';
import { Search, Filter, Zap, Droplets, Recycle, Star, ShoppingCart, Heart, Share2 } from 'lucide-react';

const SustainableSystemsMarketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Systems', count: '950+' },
    { id: 'energy', name: 'Energy Systems', count: '320+' },
    { id: 'water', name: 'Water Systems', count: '280+' },
    { id: 'waste', name: 'Waste Management', count: '180+' },
    { id: 'climate', name: 'Climate Control', count: '120+' },
    { id: 'automation', name: 'Smart Automation', count: '50+' }
  ];

  const systems = [
    {
      id: 1,
      name: "Solar Panel System 5KW",
      category: "energy",
      price: "₹2,50,000",
      image: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      reviews: 189,
      carbonFootprint: "Carbon Negative",
      certifications: ["IEC Certified", "25 Year Warranty"],
      description: "Complete solar panel system with installation and monitoring"
    },
    {
      id: 2,
      name: "Rainwater Harvesting System",
      category: "water",
      price: "₹85,000",
      image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 98,
      carbonFootprint: "Carbon Neutral",
      certifications: ["Water Quality Certified", "10 Year Warranty"],
      description: "Complete rainwater collection and filtration system"
    },
    {
      id: 3,
      name: "Biogas Generation Unit",
      category: "waste",
      price: "₹1,20,000",
      image: "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      reviews: 67,
      carbonFootprint: "Carbon Negative",
      certifications: ["Bio-Safe", "Methane Capture"],
      description: "Convert organic waste into clean cooking gas"
    },
    {
      id: 4,
      name: "Smart Climate Control System",
      category: "climate",
      price: "₹45,000",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.6,
      reviews: 134,
      carbonFootprint: "Low Carbon",
      certifications: ["IoT Enabled", "Energy Star"],
      description: "AI-powered climate control with 60% energy savings"
    },
    {
      id: 5,
      name: "Greywater Recycling System",
      category: "water",
      price: "₹65,000",
      image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 89,
      carbonFootprint: "Carbon Neutral",
      certifications: ["Water Recycling", "Health Safe"],
      description: "Recycle bathroom and kitchen water for irrigation"
    },
    {
      id: 6,
      name: "Home Automation Hub",
      category: "automation",
      price: "₹25,000",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.5,
      reviews: 156,
      carbonFootprint: "Low Carbon",
      certifications: ["Smart Home", "Voice Control"],
      description: "Central hub for all smart home devices and monitoring"
    }
  ];

  const filteredSystems = selectedCategory === 'all'
    ? systems
    : systems.filter(system => system.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#f5f5f7] pt-28 sm:pt-32 pb-10 sm:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-8">
            <p className="text-sm font-medium text-emerald-600 mb-3">Energy, Water & Automation</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1d1d1f] leading-[1.05] mb-4">
              Sustainable <span className="text-emerald-600">systems</span> marketplace
            </h1>
            <p className="text-base sm:text-lg text-[#6e6e73] leading-relaxed">
              Complete sustainable systems for energy, water, waste management, and smart
              automation to make your property self-sufficient.
            </p>
          </div>

          <div className="bg-white border border-black/10 rounded-2xl p-3 shadow-sm max-w-3xl">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1 min-w-0 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#86868b] w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search sustainable systems..."
                  className="w-full pl-10 pr-3 py-3 bg-[#f5f5f7] rounded-xl text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:ring-2 focus:ring-emerald-600/40 text-sm"
                />
              </div>
              <div className="relative">
                <select className="appearance-none bg-[#f5f5f7] rounded-xl pl-4 pr-9 py-3 text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-emerald-600/40 text-sm w-full sm:w-44">
                  <option value="">Sort by Price</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
              <button className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-xl font-semibold text-white transition-colors text-sm whitespace-nowrap">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-black/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-[#1d1d1f] text-white'
                    : 'border border-black/10 text-[#1d1d1f] hover:bg-black/5'
                }`}
              >
                {category.name} <span className="opacity-60">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Systems Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8 gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1d1d1f]">
              {filteredSystems.length} Systems Found
            </h2>
            <button className="border border-black/10 hover:bg-black/5 px-4 py-2 rounded-full text-sm font-medium text-[#1d1d1f] transition-colors flex items-center gap-2 flex-shrink-0">
              <Filter className="w-4 h-4" />
              <span className="hidden sm:inline">More Filters</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSystems.map((system) => (
              <div
                key={system.id}
                className="group bg-white rounded-2xl overflow-hidden border border-black/5 hover:shadow-lg transition-shadow min-w-0"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={system.image}
                    alt={system.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/95 backdrop-blur-sm text-emerald-700 px-2.5 py-1 rounded-full text-xs font-medium border border-black/5">
                      {system.carbonFootprint}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 flex gap-1.5">
                    <button className="w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#1d1d1f] hover:bg-white transition-colors">
                      <Heart className="w-3.5 h-3.5" />
                    </button>
                    <button className="w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#1d1d1f] hover:bg-white transition-colors">
                      <Share2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-[#1d1d1f] text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                      {system.price}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-semibold text-[#1d1d1f] mb-1">{system.name}</h3>
                  <p className="text-[#6e6e73] text-sm leading-relaxed mb-3">{system.description}</p>

                  <div className="flex items-center gap-1.5 mb-3">
                    <Star className="w-3.5 h-3.5 text-emerald-600 fill-current" />
                    <span className="text-[#1d1d1f] text-sm font-medium">{system.rating}</span>
                    <span className="text-[#86868b] text-xs">({system.reviews} reviews)</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {system.certifications.map((cert, idx) => (
                      <span key={idx} className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium">
                        {cert}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-full text-sm font-medium text-white transition-colors flex items-center justify-center gap-2">
                      <ShoppingCart className="w-3.5 h-3.5" />
                      <span>Get Quote</span>
                    </button>
                    <button className="border border-black/10 hover:bg-black/5 px-4 py-2 rounded-full text-sm font-medium text-[#1d1d1f] transition-colors">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight mb-3">
              Why choose sustainable systems?
            </h2>
            <p className="text-[#6e6e73] text-base sm:text-lg leading-relaxed">
              Our systems are designed for maximum efficiency and minimal environmental impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-black/5 rounded-2xl overflow-hidden border border-black/5">
            <div className="bg-white p-6 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">Energy Independence</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                Generate your own clean energy and reduce dependence on the grid.
              </p>
            </div>

            <div className="bg-white p-6 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">Water Security</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                Harvest, recycle, and purify water for complete water independence.
              </p>
            </div>

            <div className="bg-white p-6 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                <Recycle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">Zero Waste</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                Convert all waste into valuable resources like energy and fertilizer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SustainableSystemsMarketplace;
