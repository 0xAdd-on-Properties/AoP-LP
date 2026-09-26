'use client';

import React, { useState } from 'react';
import { Search, Filter, MapPin, Star, Eye, Heart, Share2, Bed, Bath, Square, Zap, Droplets, TreePine, Recycle } from 'lucide-react';
import LocationFilter from '../../../components/LocationFilter';

const Earthships = () => {
  const [selectedCity, setSelectedCity] = useState('Visakhapatnam');
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [filters, setFilters] = useState({
    priceRange: '',
    location: '',
    sustainabilityRating: ''
  });

  const earthshipProperties = [
    {
      id: 1,
      title: "Traditional Earthship Villa",
      location: "Lambasingi, Visakhapatnam",
      price: "₹75,00,000",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.9,
      views: "1.8k",
      beds: 3,
      baths: 2,
      area: "1,750 sq ft",
      features: ["Recycled Materials", "Thermal Mass", "Food Production", "Off-Grid Living"],
      sustainabilityScore: 97,
      description: "Experience complete self-sufficiency in this traditional earthship built with recycled materials and natural systems."
    },
    {
      id: 2,
      title: "Modern Earthship Eco-Home",
      location: "Araku Valley, Visakhapatnam",
      price: "₹85,00,000",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.8,
      views: "2.3k",
      beds: 3,
      baths: 2,
      area: "1,850 sq ft",
      features: ["Solar Power", "Rainwater Harvesting", "Natural Cooling", "Organic Garden"],
      sustainabilityScore: 95,
      description: "A stunning modern earthship that combines ancient wisdom with contemporary sustainable technology."
    },
    {
      id: 3,
      title: "Earthship Community Home",
      location: "Paderu, Visakhapatnam",
      price: "₹65,00,000",
      image: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.7,
      views: "1.5k",
      beds: 2,
      baths: 2,
      area: "1,400 sq ft",
      features: ["Community Living", "Shared Resources", "Zero Waste", "Natural Building"],
      sustainabilityScore: 94,
      description: "Join a sustainable earthship community focused on shared resources and environmental harmony."
    },
    {
      id: 4,
      title: "Luxury Earthship Retreat",
      location: "Borra Caves, Visakhapatnam",
      price: "₹1,20,00,000",
      image: "https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.9,
      views: "3.2k",
      beds: 4,
      baths: 3,
      area: "2,200 sq ft",
      features: ["Luxury Finishes", "Advanced Systems", "Spa Features", "Guest Quarters"],
      sustainabilityScore: 96,
      description: "Luxury earthship retreat with premium amenities while maintaining complete sustainability."
    },
    {
      id: 5,
      title: "Compact Earthship Studio",
      location: "Chintapalli, Visakhapatnam",
      price: "₹45,00,000",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.6,
      views: "1.2k",
      beds: 1,
      baths: 1,
      area: "800 sq ft",
      features: ["Compact Design", "Efficient Systems", "Low Maintenance", "Starter Home"],
      sustainabilityScore: 92,
      description: "Perfect starter earthship for those beginning their sustainable living journey."
    },
    {
      id: 6,
      title: "Family Earthship Compound",
      location: "Koyyuru, Visakhapatnam",
      price: "₹1,50,00,000",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.8,
      views: "2.8k",
      beds: 5,
      baths: 4,
      area: "3,000 sq ft",
      features: ["Multi-Generational", "Workshop Space", "Large Gardens", "Storage Areas"],
      sustainabilityScore: 98,
      description: "Spacious earthship compound designed for large families with extensive sustainable systems."
    }
  ];

  const openPropertyDetails = (property) => {
    setSelectedProperty(property);
  };

  const closePropertyDetails = () => {
    setSelectedProperty(null);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Earthship Homes
              </span>
              <br />
              <span className="text-white">in Visakhapatnam</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Discover self-sufficient earthship homes built with recycled materials, featuring natural temperature 
              regulation, renewable energy systems, and food production capabilities for complete off-grid living.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              <LocationFilter selectedCity={selectedCity} onCityChange={setSelectedCity} />

              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search earthship properties..."
                    className="w-full bg-white/10 border border-white/20 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <select
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-400"
                value={filters.priceRange}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              >
                <option value="" className="text-gray-800">All Prices</option>
                <option value="low" className="text-gray-800">Under ₹50L</option>
                <option value="mid" className="text-gray-800">₹50L - ₹1Cr</option>
                <option value="high" className="text-gray-800">Above ₹1Cr</option>
              </select>

              <select 
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-400"
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
              >
                <option value="" className="text-gray-800">All Locations</option>
                <option value="Lambasingi" className="text-gray-800">Lambasingi</option>
                <option value="Araku Valley" className="text-gray-800">Araku Valley</option>
                <option value="Paderu" className="text-gray-800">Paderu</option>
                <option value="Borra Caves" className="text-gray-800">Borra Caves</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Earthship Features */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What Makes Earthships Special?</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Earthships are completely self-sufficient homes that provide their own power, water, 
              sewage treatment, and food production while maintaining comfortable living temperatures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Recycle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Recycled Materials</h3>
              <p className="text-gray-300 text-sm">Built using recycled tires, bottles, and cans for sustainable construction</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Solar Power</h3>
              <p className="text-gray-300 text-sm">Complete energy independence through solar panels and battery systems</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Water Systems</h3>
              <p className="text-gray-300 text-sm">Rainwater harvesting and greywater recycling for water independence</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TreePine className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Food Production</h3>
              <p className="text-gray-300 text-sm">Integrated greenhouse and garden systems for fresh food year-round</p>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">
              {earthshipProperties.length} Earthship Properties Available
            </h2>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 bg-white/10 border border-white/20 px-4 py-2 rounded-lg text-white hover:bg-white/20 transition-all">
                <Filter className="w-4 h-4" />
                <span>More Filters</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {earthshipProperties.map((property) => (
              <div 
                key={property.id}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => openPropertyDetails(property)}
              >
                <div className="relative h-48">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Property Type Badge */}
                  <div className="absolute top-4 left-4 bg-emerald-500 px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-medium">Earthship</span>
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

                  {/* Stats */}
                  <div className="absolute bottom-4 left-4 flex space-x-3">
                    <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm">{property.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Eye className="w-4 h-4 text-white" />
                      <span className="text-white text-sm">{property.views}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="absolute bottom-4 right-4 bg-gradient-to-r from-emerald-500 to-teal-500 px-3 py-1 rounded-xl">
                    <span className="text-white font-bold">{property.price}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{property.title}</h3>
                  <div className="flex items-center space-x-1 text-gray-400 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  {/* Property Details */}
                  <div className="flex items-center space-x-4 mb-4 text-gray-300">
                    <div className="flex items-center space-x-1">
                      <Bed className="w-4 h-4" />
                      <span className="text-sm">{property.beds}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Bath className="w-4 h-4" />
                      <span className="text-sm">{property.baths}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Square className="w-4 h-4" />
                      <span className="text-sm">{property.area}</span>
                    </div>
                  </div>

                  {/* Sustainability Score */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 text-sm">Sustainability Score</span>
                      <span className="text-emerald-400 font-bold">{property.sustainabilityScore}/100</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full"
                        style={{ width: `${property.sustainabilityScore}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2">
                    {property.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Details Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Header Image */}
              <div className="h-64 overflow-hidden rounded-t-3xl relative">
                <img 
                  src={selectedProperty.image} 
                  alt={selectedProperty.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent"></div>
                <button 
                  onClick={closePropertyDetails}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
                >
                  ✕
                </button>
                <div className="absolute bottom-4 left-4">
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProperty.title}</h2>
                  <p className="text-emerald-300 text-lg">Earthship Home</p>
                </div>
                <div className="absolute bottom-4 right-4 bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 rounded-xl">
                  <span className="text-white font-bold text-xl">{selectedProperty.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Property Details */}
                  <div className="lg:col-span-2">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-white mb-4">Property Details</h3>
                      <p className="text-gray-300 leading-relaxed mb-6">{selectedProperty.description}</p>
                      
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-2 mb-2">
                            <Bed className="w-5 h-5 text-emerald-400" />
                            <span className="text-2xl font-bold text-white">{selectedProperty.beds}</span>
                          </div>
                          <span className="text-gray-400 text-sm">Bedrooms</span>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-2 mb-2">
                            <Bath className="w-5 h-5 text-emerald-400" />
                            <span className="text-2xl font-bold text-white">{selectedProperty.baths}</span>
                          </div>
                          <span className="text-gray-400 text-sm">Bathrooms</span>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-2 mb-2">
                            <Square className="w-5 h-5 text-emerald-400" />
                            <span className="text-2xl font-bold text-white">{selectedProperty.area.split(' ')[0]}</span>
                          </div>
                          <span className="text-gray-400 text-sm">Sq Ft</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-white mb-4">Earthship Features</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {selectedProperty.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
                      <h4 className="text-lg font-bold text-white mb-4">Location</h4>
                      <div className="flex items-center space-x-2 text-gray-300 mb-4">
                        <MapPin className="w-5 h-5 text-emerald-400" />
                        <span>{selectedProperty.location}</span>
                      </div>
                      
                      <h4 className="text-lg font-bold text-white mb-4">Sustainability Score</h4>
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-300">Overall Rating</span>
                          <span className="text-emerald-400 font-bold text-xl">{selectedProperty.sustainabilityScore}/100</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full"
                            style={{ width: `${selectedProperty.sustainabilityScore}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Zap className="w-4 h-4 text-yellow-400" />
                            <span className="text-gray-300 text-sm">Energy Independence</span>
                          </div>
                          <span className="text-white font-medium">100%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Droplets className="w-4 h-4 text-blue-400" />
                            <span className="text-gray-300 text-sm">Water Self-Sufficiency</span>
                          </div>
                          <span className="text-white font-medium">95%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <TreePine className="w-4 h-4 text-green-400" />
                            <span className="text-gray-300 text-sm">Food Production</span>
                          </div>
                          <span className="text-white font-medium">80%</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300">
                        Schedule Site Visit
                      </button>
                      <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300">
                        Virtual Tour
                      </button>
                      <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300">
                        Get Financing
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Earthships;