'use client';

import React, { useState } from 'react';
import { Search, Filter, Leaf, Star, ShoppingCart, Heart, Share2 } from 'lucide-react';

const FurnishingsMarketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Furnishings', count: '1,800+' },
    { id: 'furniture', name: 'Eco Furniture', count: '650+' },
    { id: 'textiles', name: 'Organic Textiles', count: '420+' },
    { id: 'lighting', name: 'Sustainable Lighting', count: '280+' },
    { id: 'decor', name: 'Natural Decor', count: '320+' },
    { id: 'storage', name: 'Eco Storage', count: '180+' }
  ];

  const furnishings = [
    {
      id: 1,
      name: "Reclaimed Wood Dining Set",
      category: "furniture",
      price: "₹45,000",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 156,
      carbonFootprint: "Carbon Neutral",
      certifications: ["Reclaimed Wood", "Non-Toxic Finish"],
      description: "Handcrafted dining set made from reclaimed teak wood"
    },
    {
      id: 2,
      name: "Organic Cotton Bedding Set",
      category: "textiles",
      price: "₹8,500",
      image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      reviews: 312,
      carbonFootprint: "Low Carbon",
      certifications: ["GOTS Certified", "100% Organic"],
      description: "Luxurious organic cotton bedding with natural dyes"
    },
    {
      id: 3,
      name: "Bamboo Floor Lamp",
      category: "lighting",
      price: "₹3,200",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      reviews: 89,
      carbonFootprint: "Carbon Negative",
      certifications: ["Sustainable Bamboo", "LED Compatible"],
      description: "Modern bamboo floor lamp with adjustable height"
    },
    {
      id: 4,
      name: "Hemp Fiber Cushions",
      category: "textiles",
      price: "₹1,800",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.6,
      reviews: 134,
      carbonFootprint: "Carbon Negative",
      certifications: ["Hemp Fiber", "Natural Filling"],
      description: "Comfortable cushions made from organic hemp fiber"
    },
    {
      id: 5,
      name: "Cork Storage Boxes",
      category: "storage",
      price: "₹2,400",
      image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.5,
      reviews: 67,
      carbonFootprint: "Low Carbon",
      certifications: ["Cork Harvest", "Biodegradable"],
      description: "Stylish storage boxes made from sustainable cork"
    },
    {
      id: 6,
      name: "Jute Wall Hangings",
      category: "decor",
      price: "₹1,200",
      image: "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 98,
      carbonFootprint: "Carbon Neutral",
      certifications: ["Natural Jute", "Handwoven"],
      description: "Beautiful handwoven jute wall hangings for natural decor"
    }
  ];

  const filteredFurnishings = selectedCategory === 'all'
    ? furnishings
    : furnishings.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#f5f5f7] pt-28 sm:pt-32 pb-10 sm:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-8">
            <p className="text-sm font-medium text-emerald-600 mb-3">Home & Interiors</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1d1d1f] leading-[1.05] mb-4">
              Eco-friendly <span className="text-emerald-600">furnishings</span> marketplace
            </h1>
            <p className="text-base sm:text-lg text-[#6e6e73] leading-relaxed">
              Sustainable furniture, organic textiles, and eco-friendly home decor crafted by
              local artisans using natural materials.
            </p>
          </div>

          <div className="bg-white border border-black/10 rounded-2xl p-3 shadow-sm max-w-3xl">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1 min-w-0 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#86868b] w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search eco-friendly furnishings..."
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

      {/* Furnishings Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8 gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1d1d1f]">
              {filteredFurnishings.length} Items Found
            </h2>
            <button className="border border-black/10 hover:bg-black/5 px-4 py-2 rounded-full text-sm font-medium text-[#1d1d1f] transition-colors flex items-center gap-2 flex-shrink-0">
              <Filter className="w-4 h-4" />
              <span className="hidden sm:inline">More Filters</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFurnishings.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-black/5 hover:shadow-lg transition-shadow min-w-0"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/95 backdrop-blur-sm text-emerald-700 px-2.5 py-1 rounded-full text-xs font-medium border border-black/5">
                      {item.carbonFootprint}
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
                      {item.price}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-semibold text-[#1d1d1f] mb-1">{item.name}</h3>
                  <p className="text-[#6e6e73] text-sm leading-relaxed mb-3">{item.description}</p>

                  <div className="flex items-center gap-1.5 mb-3">
                    <Star className="w-3.5 h-3.5 text-emerald-600 fill-current" />
                    <span className="text-[#1d1d1f] text-sm font-medium">{item.rating}</span>
                    <span className="text-[#86868b] text-xs">({item.reviews} reviews)</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.certifications.map((cert, idx) => (
                      <span key={idx} className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium">
                        {cert}
                      </span>
                    ))}
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

      {/* Benefits Section */}
      <section className="py-16 sm:py-24 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight mb-3">
              Why choose eco-friendly furnishings?
            </h2>
            <p className="text-[#6e6e73] text-base sm:text-lg leading-relaxed">
              Our furnishings are crafted by local artisans using sustainable materials and
              traditional techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-black/5 rounded-2xl overflow-hidden border border-black/5">
            <div className="bg-white p-6 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">Natural Materials</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                Made from organic, renewable materials that are safe for your family and the
                environment.
              </p>
            </div>

            <div className="bg-white p-6 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">Artisan Crafted</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                Handcrafted by skilled local artisans, supporting traditional craftsmanship and
                communities.
              </p>
            </div>

            <div className="bg-white p-6 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                <Star className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">Quality Assured</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                Each piece is carefully inspected for quality and sustainability standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FurnishingsMarketplace;
