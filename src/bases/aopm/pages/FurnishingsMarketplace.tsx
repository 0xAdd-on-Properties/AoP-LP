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
    <div className="min-h-screen bg-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Eco-Friendly Furnishings
              </span>
              <br />
              <span className="text-white">Marketplace</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover sustainable furniture, organic textiles, and eco-friendly home decor 
              crafted by local artisans using natural materials.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search eco-friendly furnishings..."
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

      {/* Furnishings Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">
              {filteredFurnishings.length} Items Found
            </h2>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 bg-white/10 border border-white/20 px-4 py-2 rounded-lg text-white hover:bg-white/20 transition-all">
                <Filter className="w-4 h-4" />
                <span>More Filters</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFurnishings.map((item) => (
              <div 
                key={item.id}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative h-48">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Carbon Footprint Badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.carbonFootprint === 'Carbon Negative' ? 'bg-green-500' :
                      item.carbonFootprint === 'Carbon Neutral' ? 'bg-blue-500' : 'bg-orange-500'
                    }`}>
                      <span className="text-white">{item.carbonFootprint}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all">
                      <Heart className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Price */}
                  <div className="absolute bottom-4 right-4 bg-gradient-to-r from-emerald-500 to-teal-500 px-3 py-1 rounded-xl">
                    <span className="text-white font-bold">{item.price}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{item.description}</p>

                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-medium">{item.rating}</span>
                    </div>
                    <span className="text-gray-400 text-sm">({item.reviews} reviews)</span>
                  </div>

                  {/* Certifications */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.certifications.map((cert, idx) => (
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
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Eco-Friendly Furnishings?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our furnishings are crafted by local artisans using sustainable materials and traditional techniques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Natural Materials</h3>
              <p className="text-gray-300">Made from organic, renewable materials that are safe for your family and the environment</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Artisan Crafted</h3>
              <p className="text-gray-300">Handcrafted by skilled local artisans, supporting traditional craftsmanship and communities</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Quality Assured</h3>
              <p className="text-gray-300">Each piece is carefully inspected for quality and sustainability standards</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FurnishingsMarketplace;