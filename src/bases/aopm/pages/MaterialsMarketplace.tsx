'use client';

import React, { useState } from 'react';
import { Search, Filter, Leaf, Recycle, TreePine, Star, ShoppingCart } from 'lucide-react';

const MaterialsMarketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Materials', count: '2,400+' },
    { id: 'bamboo', name: 'Bamboo Products', count: '450+' },
    { id: 'recycled', name: 'Recycled Materials', count: '680+' },
    { id: 'natural', name: 'Natural Stone', count: '320+' },
    { id: 'timber', name: 'Sustainable Timber', count: '290+' },
    { id: 'composite', name: 'Eco Composites', count: '180+' }
  ];

  const materials = [
    {
      id: 1,
      name: "Premium Bamboo Flooring",
      category: "bamboo",
      price: "₹180/sq ft",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 245,
      carbonFootprint: "Carbon Negative",
      certifications: ["FSC Certified", "Low VOC"],
      description: "Premium bamboo flooring with natural finish and anti-microbial properties"
    },
    {
      id: 2,
      name: "Recycled Steel Roofing Sheets",
      category: "recycled",
      price: "₹120/sq ft",
      image: "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.6,
      reviews: 203,
      carbonFootprint: "Low Carbon",
      certifications: ["100% Recycled", "Weather Resistant"],
      description: "Durable recycled steel roofing with 25-year warranty"
    },
    {
      id: 3,
      name: "Reclaimed Teak Wood Planks",
      category: "timber",
      price: "₹450/sq ft",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      reviews: 156,
      carbonFootprint: "Carbon Neutral",
      certifications: ["Reclaimed Wood", "Termite Resistant"],
      description: "Beautiful reclaimed teak wood planks with unique character"
    },
    {
      id: 4,
      name: "Natural Sandstone Tiles",
      category: "natural",
      price: "₹85/sq ft",
      image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      reviews: 189,
      carbonFootprint: "Low Carbon",
      certifications: ["Natural Stone", "Slip Resistant"],
      description: "Premium natural sandstone tiles for flooring and walls"
    },
    {
      id: 5,
      name: "Hemp-Lime Composite Blocks",
      category: "composite",
      price: "₹25/block",
      image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.5,
      reviews: 98,
      carbonFootprint: "Carbon Negative",
      certifications: ["Bio-Based", "Insulating"],
      description: "Lightweight hemp-lime composite blocks with excellent insulation"
    },
    {
      id: 6,
      name: "Bamboo Fiber Insulation",
      category: "bamboo",
      price: "₹65/sq ft",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 134,
      carbonFootprint: "Carbon Negative",
      certifications: ["Natural Fiber", "Fire Resistant"],
      description: "High-performance bamboo fiber insulation for walls and roofs"
    }
  ];

  const filteredMaterials = selectedCategory === 'all' 
    ? materials 
    : materials.filter(material => material.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Sustainable Materials
              </span>
              <br />
              <span className="text-white">Marketplace</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover eco-friendly building materials from bamboo to recycled steel, 
              all certified for sustainability and quality.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search sustainable materials..."
                  className="w-full bg-white/10 border border-white/20 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
                />
              </div>
              <select className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-400">
                <option value="" className="text-gray-800">Sort by Price</option>
                <option value="low" className="text-gray-800">Low to High</option>
                <option value="high" className="text-gray-800">High to Low</option>
              </select>
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">
              {filteredMaterials.length} Materials Found
            </h2>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 bg-white/10 border border-white/20 px-4 py-2 rounded-lg text-white hover:bg-white/20 transition-all">
                <Filter className="w-4 h-4" />
                <span>More Filters</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMaterials.map((material) => (
              <div 
                key={material.id}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative h-48">
                  <img 
                    src={material.image} 
                    alt={material.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Carbon Footprint Badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      material.carbonFootprint === 'Carbon Negative' ? 'bg-green-500' :
                      material.carbonFootprint === 'Carbon Neutral' ? 'bg-blue-500' : 'bg-orange-500'
                    }`}>
                      <span className="text-white">{material.carbonFootprint}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="absolute bottom-4 right-4 bg-gradient-to-r from-emerald-500 to-teal-500 px-3 py-1 rounded-xl">
                    <span className="text-white font-bold">{material.price}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{material.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{material.description}</p>

                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-medium">{material.rating}</span>
                    </div>
                    <span className="text-gray-400 text-sm">({material.reviews} reviews)</span>
                  </div>

                  {/* Certifications */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {material.certifications.map((cert, idx) => (
                      <span key={idx} className="bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded-full text-xs">
                        {cert}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2">
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300">
                      Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Sustainable Materials?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our materials are carefully selected for their environmental benefits and superior performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Eco-Friendly</h3>
              <p className="text-gray-300">Reduce environmental impact with materials that are renewable and biodegradable</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Recycle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Recycled Content</h3>
              <p className="text-gray-300">Many materials contain recycled content, reducing waste and conserving resources</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TreePine className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Carbon Negative</h3>
              <p className="text-gray-300">Some materials actually absorb more carbon than they produce during manufacturing</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaterialsMarketplace;