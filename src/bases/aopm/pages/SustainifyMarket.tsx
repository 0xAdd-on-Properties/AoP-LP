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
    <div className="min-h-screen bg-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Sustainify Market
              </span>
              <br />
              <span className="text-white">Everything Sustainable</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your one-stop marketplace for sustainable materials, eco-friendly furnishings, 
              green technologies, and sustainable systems.
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search sustainable products..."
                  className="w-full bg-white/10 border border-white/20 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
                />
              </div>
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

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">
              {selectedCategory === 'all' ? 'Featured Products' : `${categories.find(c => c.id === selectedCategory)?.name}`}
            </h2>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 bg-white/10 border border-white/20 px-4 py-2 rounded-lg text-white hover:bg-white/20 transition-all">
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative h-48">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Carbon Footprint Badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      product.carbonFootprint === 'Carbon Negative' ? 'bg-green-500' :
                      product.carbonFootprint === 'Carbon Neutral' ? 'bg-blue-500' : 'bg-orange-500'
                    }`}>
                      <span className="text-white">{product.carbonFootprint}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="absolute bottom-4 right-4 bg-gradient-to-r from-emerald-500 to-teal-500 px-3 py-1 rounded-xl">
                    <span className="text-white font-bold">{product.price}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{product.description}</p>

                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-medium">{product.rating}</span>
                    </div>
                    <span className="text-gray-400 text-sm">({product.reviews} reviews)</span>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2">
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300">
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
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Carbon-Neutral Delivery</h3>
              <p className="text-gray-300">All shipments offset with renewable energy and sustainable packaging</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Sustainability Verified</h3>
              <p className="text-gray-300">Every product meets our strict environmental and quality standards</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Bulk Discounts</h3>
              <p className="text-gray-300">Save more on larger orders for your sustainable building projects</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SustainifyMarket;