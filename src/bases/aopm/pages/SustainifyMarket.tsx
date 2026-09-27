'use client';

import React, { useState } from 'react';
import { Package, Truck, Shield, Leaf, Search, Filter, Star, ShoppingCart } from 'lucide-react';

const SustainifyMarket = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', count: '15,000+' },
    { id: 'materials', name: 'Sustainable Materials', count: '2,400+' },
    { id: 'furnishings', name: 'Eco Furnishings', count: '1,800+' },
    { id: 'systems', name: 'Sustainable Systems', count: '950+' },
    { id: 'technologies', name: 'Green Technologies', count: '1,200+' }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Bamboo Flooring Premium",
      category: "materials",
      price: "₹180/sq ft",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 245,
      carbonFootprint: "Low",
      description: "Premium bamboo flooring with natural finish"
    },
    {
      id: 2,
      name: "Solar Panel Kit 5KW",
      category: "technologies",
      price: "₹2,50,000",
      image: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      reviews: 189,
      carbonFootprint: "Carbon Negative",
      description: "Complete solar panel system with installation"
    },
    {
      id: 3,
      name: "Reclaimed Wood Furniture Set",
      category: "furnishings",
      price: "₹45,000",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      reviews: 156,
      carbonFootprint: "Low",
      description: "Handcrafted furniture from reclaimed wood"
    },
    {
      id: 4,
      name: "Rainwater Harvesting System",
      category: "systems",
      price: "₹85,000",
      image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 98,
      carbonFootprint: "Carbon Neutral",
      description: "Complete rainwater collection and filtration system"
    },
    {
      id: 5,
      name: "Recycled Steel Roofing",
      category: "materials",
      price: "₹120/sq ft",
      image: "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.6,
      reviews: 203,
      carbonFootprint: "Low",
      description: "Durable recycled steel roofing sheets"
    },
    {
      id: 6,
      name: "Organic Cotton Bedding",
      category: "furnishings",
      price: "₹8,500",
      image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      reviews: 312,
      carbonFootprint: "Low",
      description: "100% organic cotton bedding set"
    }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? featuredProducts
    : featuredProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#f5f5f7] pt-28 sm:pt-32 pb-10 sm:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-8">
            <p className="text-sm font-medium text-emerald-600 mb-3">One Marketplace, Every Category</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1d1d1f] leading-[1.05] mb-4">
              <span className="text-emerald-600">Sustainify</span> Market
            </h1>
            <p className="text-base sm:text-lg text-[#6e6e73] leading-relaxed">
              Your one-stop marketplace for sustainable materials, eco-friendly furnishings,
              green technologies, and sustainable systems.
            </p>
          </div>

          <div className="bg-white border border-black/10 rounded-2xl p-3 shadow-sm max-w-3xl">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1 min-w-0 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#86868b] w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search sustainable products..."
                  className="w-full pl-10 pr-3 py-3 bg-[#f5f5f7] rounded-xl text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:ring-2 focus:ring-emerald-600/40 text-sm"
                />
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

      {/* Featured Products */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8 gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1d1d1f]">
              {selectedCategory === 'all' ? 'Featured Products' : `${categories.find(c => c.id === selectedCategory)?.name}`}
            </h2>
            <button className="border border-black/10 hover:bg-black/5 px-4 py-2 rounded-full text-sm font-medium text-[#1d1d1f] transition-colors flex items-center gap-2 flex-shrink-0">
              <Filter className="w-4 h-4" />
              <span className="hidden sm:inline">Filters</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden border border-black/5 hover:shadow-lg transition-shadow min-w-0"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/95 backdrop-blur-sm text-emerald-700 px-2.5 py-1 rounded-full text-xs font-medium border border-black/5">
                      {product.carbonFootprint}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-[#1d1d1f] text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                      {product.price}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-semibold text-[#1d1d1f] mb-1">{product.name}</h3>
                  <p className="text-[#6e6e73] text-sm leading-relaxed mb-3">{product.description}</p>

                  <div className="flex items-center gap-1.5 mb-4">
                    <Star className="w-3.5 h-3.5 text-emerald-600 fill-current" />
                    <span className="text-[#1d1d1f] text-sm font-medium">{product.rating}</span>
                    <span className="text-[#86868b] text-xs">({product.reviews} reviews)</span>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-full text-sm font-medium text-white transition-colors flex items-center justify-center gap-2">
                      <ShoppingCart className="w-3.5 h-3.5" />
                      <span>Add to Cart</span>
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

      {/* Features */}
      <section className="py-16 sm:py-24 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-black/5 rounded-2xl overflow-hidden border border-black/5">
            <div className="bg-white p-6 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">Carbon-Neutral Delivery</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                All shipments offset with renewable energy and sustainable packaging.
              </p>
            </div>

            <div className="bg-white p-6 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">Sustainability Verified</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                Every product meets our strict environmental and quality standards.
              </p>
            </div>

            <div className="bg-white p-6 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                <Package className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">Bulk Discounts</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                Save more on larger orders for your sustainable building projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SustainifyMarket;
