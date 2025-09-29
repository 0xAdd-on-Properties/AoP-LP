import React, { useState } from 'react';
import { Search, Filter, MapPin, Star, Eye, Heart, Share2, Bed, Bath, Square, Users, TreePine, Recycle, Home } from 'lucide-react';

const EcoCommunes = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [filters, setFilters] = useState({
    priceRange: '',
    location: '',
    communitySize: ''
  });

  const communeProperties = [
    {
      id: 1,
      title: "Araku Valley Eco Community",
      location: "Araku Valley, Visakhapatnam",
      price: "₹45,00,000",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.8,
      views: "4.5k",
      beds: 2,
      baths: 1,
      area: "1,000 sq ft",
      communitySize: "25 families",
      features: ["Community Living", "Shared Resources", "Organic Farming", "Zero Waste"],
      sustainabilityScore: 94,
      description: "Join a sustainable community focused on shared resources and environmental harmony in the beautiful Araku Valley."
    },
    {
      id: 2,
      title: "Lambasingi Sustainable Village",
      location: "Lambasingi, Visakhapatnam",
      price: "₹35,00,000",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.7,
      views: "3.2k",
      beds: 1,
      baths: 1,
      area: "800 sq ft",
      communitySize: "40 families",
      features: ["Hill Station Living", "Cool Climate", "Community Gardens", "Shared Kitchens"],
      sustainabilityScore: 92,
      description: "Experience cool mountain living in India's Kashmir with a community focused on sustainable practices."
    },
    {
      id: 3,
      title: "Paderu Forest Community",
      location: "Paderu, Visakhapatnam",
      price: "₹55,00,000",
      image: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.9,
      views: "2.8k",
      beds: 3,
      baths: 2,
      area: "1,400 sq ft",
      communitySize: "15 families",
      features: ["Forest Living", "Wildlife Sanctuary", "Eco-Tourism", "Research Center"],
      sustainabilityScore: 96,
      description: "Live in harmony with nature in this forest community dedicated to conservation and research."
    },
    {
      id: 4,
      title: "Borra Caves Eco Retreat",
      location: "Borra Caves, Visakhapatnam",
      price: "₹65,00,000",
      image: "https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.6,
      views: "3.7k",
      beds: 2,
      baths: 2,
      area: "1,200 sq ft",
      communitySize: "20 families",
      features: ["Cave Tourism", "Adventure Activities", "Wellness Center", "Spiritual Practices"],
      sustainabilityScore: 89,
      description: "Unique eco-community near the famous Borra Caves, combining adventure tourism with sustainable living."
    },
    {
      id: 5,
      title: "Chintapalli Tribal Community",
      location: "Chintapalli, Visakhapatnam",
      price: "₹40,00,000",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.8,
      views: "2.1k",
      beds: 2,
      baths: 1,
      area: "900 sq ft",
      communitySize: "35 families",
      features: ["Tribal Culture", "Traditional Crafts", "Medicinal Plants", "Cultural Exchange"],
      sustainabilityScore: 93,
      description: "Experience authentic tribal culture while contributing to sustainable community development."
    },
    {
      id: 6,
      title: "Koyyuru Riverside Community",
      location: "Koyyuru, Visakhapatnam",
      price: "₹50,00,000",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.7,
      views: "3.9k",
      beds: 2,
      baths: 2,
      area: "1,100 sq ft",
      communitySize: "30 families",
      features: ["Riverside Living", "Water Sports", "Fishing Community", "Boat Building"],
      sustainabilityScore: 91,
      description: "Riverside eco-community focused on water conservation and traditional fishing practices."
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
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Eco Communes
              </span>
              <br />
              <span className="text-white">in Visakhapatnam</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Join sustainable communities that share resources, values, and a commitment to environmental harmony. 
              Experience collaborative living while reducing your ecological footprint.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search eco commune properties..."
                    className="w-full bg-white/10 border border-white/20 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
                  />
                </div>
              </div>
              
              <select 
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-400"
                value={filters.priceRange}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              >
                <option value="" className="text-gray-800">All Prices</option>
                <option value="low" className="text-gray-800">Under ₹40L</option>
                <option value="mid" className="text-gray-800">₹40L - ₹60L</option>
                <option value="high" className="text-gray-800">Above ₹60L</option>
              </select>

              <select 
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-400"
                value={filters.communitySize}
                onChange={(e) => handleFilterChange('communitySize', e.target.value)}
              >
                <option value="" className="text-gray-800">Community Size</option>
                <option value="small" className="text-gray-800">Under 20 families</option>
                <option value="medium" className="text-gray-800">20-30 families</option>
                <option value="large" className="text-gray-800">30+ families</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Eco Commune Features */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What Makes Eco Communes Special?</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Eco communes offer a unique lifestyle where individuals and families come together to create 
              sustainable communities based on shared values, resources, and environmental responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Community Living</h3>
              <p className="text-gray-300 text-sm">Shared spaces, resources, and responsibilities create strong community bonds</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Recycle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Shared Resources</h3>
              <p className="text-gray-300 text-sm">Reduce individual costs through shared facilities, tools, and services</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TreePine className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Organic Farming</h3>
              <p className="text-gray-300 text-sm">Community gardens and farms provide fresh, organic food for all residents</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Sustainable Living</h3>
              <p className="text-gray-300 text-sm">Zero waste practices and renewable energy systems for minimal environmental impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">
              {communeProperties.length} Eco Commune Communities Available
            </h2>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 bg-white/10 border border-white/20 px-4 py-2 rounded-lg text-white hover:bg-white/20 transition-all">
                <Filter className="w-4 h-4" />
                <span>More Filters</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communeProperties.map((property) => (
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
                  <div className="absolute top-4 left-4 bg-green-500 px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-medium">Eco Commune</span>
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
                  <div className="absolute bottom-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 px-3 py-1 rounded-xl">
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
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{property.communitySize}</span>
                    </div>
                  </div>

                  {/* Sustainability Score */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 text-sm">Community Score</span>
                      <span className="text-green-400 font-bold">{property.sustainabilityScore}/100</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                        style={{ width: `${property.sustainabilityScore}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2">
                    {property.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
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
                  <p className="text-green-300 text-lg">Eco Commune</p>
                </div>
                <div className="absolute bottom-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-2 rounded-xl">
                  <span className="text-white font-bold text-xl">{selectedProperty.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Property Details */}
                  <div className="lg:col-span-2">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-white mb-4">Community Details</h3>
                      <p className="text-gray-300 leading-relaxed mb-6">{selectedProperty.description}</p>
                      
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-2 mb-2">
                            <Bed className="w-5 h-5 text-green-400" />
                            <span className="text-2xl font-bold text-white">{selectedProperty.beds}</span>
                          </div>
                          <span className="text-gray-400 text-sm">Bedrooms</span>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-2 mb-2">
                            <Bath className="w-5 h-5 text-green-400" />
                            <span className="text-2xl font-bold text-white">{selectedProperty.baths}</span>
                          </div>
                          <span className="text-gray-400 text-sm">Bathrooms</span>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-2 mb-2">
                            <Users className="w-5 h-5 text-green-400" />
                            <span className="text-2xl font-bold text-white">{selectedProperty.communitySize.split(' ')[0]}</span>
                          </div>
                          <span className="text-gray-400 text-sm">Families</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-white mb-4">Community Features</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {selectedProperty.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
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
                        <MapPin className="w-5 h-5 text-green-400" />
                        <span>{selectedProperty.location}</span>
                      </div>
                      
                      <h4 className="text-lg font-bold text-white mb-4">Community Score</h4>
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-300">Overall Rating</span>
                          <span className="text-green-400 font-bold text-xl">{selectedProperty.sustainabilityScore}/100</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full"
                            style={{ width: `${selectedProperty.sustainabilityScore}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4 text-blue-400" />
                            <span className="text-gray-300 text-sm">Community Engagement</span>
                          </div>
                          <span className="text-white font-medium">95%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <TreePine className="w-4 h-4 text-green-400" />
                            <span className="text-gray-300 text-sm">Environmental Impact</span>
                          </div>
                          <span className="text-white font-medium">92%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Recycle className="w-4 h-4 text-orange-400" />
                            <span className="text-gray-300 text-sm">Resource Sharing</span>
                          </div>
                          <span className="text-white font-medium">98%</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300">
                        Schedule Community Visit
                      </button>
                      <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300">
                        Virtual Tour
                      </button>
                      <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300">
                        Join Community
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

export default EcoCommunes;