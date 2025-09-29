import React, { useState } from 'react';
import { ArrowRight, Star, Eye, MapPin } from 'lucide-react';
import useClickOutside from '../../../hooks/useClickOutside';

const PropertyTypes = () => {
  const [selectedPropertyType, setSelectedPropertyType] = useState(null);

  const propertyModalRef = useClickOutside(() => {
    setSelectedPropertyType(null);
  });

  const openPropertyPage = (propertyType) => {
    setSelectedPropertyType(propertyType);
  };

  const closePropertyPage = () => {
    setSelectedPropertyType(null);
  };

  const propertyTypes = [
    {
      id: 1,
      title: "Earthship Eco-Homes",
      subtitle: "Self-Sufficient Living",
      description: "Off-grid homes built with recycled materials, featuring natural temperature regulation and food production systems.",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "₹45,00,000",
      features: ["Solar Power", "Rainwater Harvesting", "Natural Cooling", "Food Production"],
      rating: 4.9,
      views: "2.3k"
    },
    {
      id: 2,
      title: "Mandala Villas",
      subtitle: "Vastu-Optimized Design",
      description: "Luxurious villas designed using sacred geometry principles for optimal energy flow and well-being.",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "₹1,20,00,000",
      features: ["Sacred Geometry", "Vastu Compliant", "Smart Systems", "Meditation Spaces"],
      rating: 4.8,
      views: "5.7k"
    },
    {
      id: 3,
      title: "Smart Eco-Apartments",
      subtitle: "Urban Sustainability",
      description: "High-tech apartments with integrated renewable energy, urban farming, and waste-to-resource systems.",
      image: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "₹85,00,000",
      features: ["IoT Integration", "Vertical Gardens", "Energy Positive", "Community Spaces"],
      rating: 4.7,
      views: "8.1k"
    },
    {
      id: 4,
      title: "Bio-Dome Residences",
      subtitle: "Futuristic Living",
      description: "Dome-shaped homes with bio-integrated systems creating self-sustaining micro-ecosystems.",
      image: "https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "₹75,00,000",
      features: ["Climate Control", "Air Purification", "Aquaponics", "360° Views"],
      rating: 4.9,
      views: "3.2k"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-500/30 mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-300 font-medium">Property Collections</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-white">Discover Your Perfect</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent font-black tracking-tight">
              Sustainable Home
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From traditional earthships to futuristic bio-domes, find properties that align 
            with your values and vision for sustainable living.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {propertyTypes.map((property, index) => (
            <div 
              key={property.id}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02]"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Stats Overlay */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm font-medium">{property.rating}</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                    <Eye className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-medium">{property.views}</span>
                  </div>
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-2 rounded-xl">
                  <span className="text-white font-bold">{property.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {property.title}
                    </h3>
                    <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-blue-400 font-medium text-sm mb-3">{property.subtitle}</p>
                  <p className="text-gray-300 leading-relaxed mb-6">{property.description}</p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {property.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg shadow-emerald-500/25">
                    Virtual Tour
                  </button>
                  <button 
                    className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300"
                    onClick={() => openPropertyPage(property)}
                  >
                    Learn More
                  </button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
            </div>
          ))}
        </div>

        {/* Property Page Modal */}
        {selectedPropertyType && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-slate-800 border border-white/20 rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-y-auto" ref={propertyModalRef}>
              <div className="relative">
                {/* Header */}
                <div className="relative h-64 overflow-hidden rounded-t-3xl">
                  <img 
                    src={selectedPropertyType.image} 
                    alt={selectedPropertyType.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-transparent to-transparent"></div>
                  <button 
                    onClick={closePropertyPage}
                    className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
                  >
                    ✕
                  </button>
                  <div className="absolute bottom-4 left-4">
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedPropertyType.title} in Visakhapatnam</h2>
                    <p className="text-blue-300 text-lg">{selectedPropertyType.subtitle}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Property List */}
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold text-white mb-6">Available Properties</h3>
                      <div className="space-y-6">
                        {[1, 2, 3, 4, 5].map((property, idx) => (
                          <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all cursor-pointer">
                            <div className="flex items-start space-x-4">
                              <img 
                                src={selectedPropertyType.image} 
                                alt={`Property ${idx + 1}`}
                                className="w-24 h-24 object-cover rounded-xl"
                              />
                              <div className="flex-1">
                                <div className="flex items-start justify-between mb-2">
                                  <h4 className="text-lg font-semibold text-white">{selectedPropertyType.title} Villa {idx + 1}</h4>
                                  <span className="text-green-400 font-bold text-lg">{selectedPropertyType.price}</span>
                                </div>
                                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                                  <span className="flex items-center space-x-1">
                                    <MapPin className="w-4 h-4" />
                                    <span>Vizag, Sector {idx + 1}</span>
                                  </span>
                                  <span className="flex items-center space-x-1">
                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                    <span>{selectedPropertyType.rating}</span>
                                  </span>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                  {selectedPropertyType.features.slice(0, 4).map((feature, featureIdx) => (
                                    <div key={featureIdx} className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                      <span className="text-gray-300 text-sm">{feature}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Filters & Info */}
                    <div>
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Filter Properties</h4>
                        <div className="space-y-4">
                          <div>
                            <label className="text-gray-300 text-sm mb-2 block">Price Range</label>
                            <select className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white">
                              <option value="" className="text-gray-800">Any Price</option>
                              <option value="low" className="text-gray-800">Under ₹50L</option>
                              <option value="mid" className="text-gray-800">₹50L - ₹1Cr</option>
                              <option value="high" className="text-gray-800">Above ₹1Cr</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-gray-300 text-sm mb-2 block">Sustainability Rating</label>
                            <select className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white">
                              <option value="" className="text-gray-800">Any Rating</option>
                              <option value="4+" className="text-gray-800">4+ Stars</option>
                              <option value="4.5+" className="text-gray-800">4.5+ Stars</option>
                              <option value="5" className="text-gray-800">5 Stars</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-gray-300 text-sm mb-2 block">Area</label>
                            <select className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white">
                              <option value="" className="text-gray-800">All Areas</option>
                              <option value="mvp" className="text-gray-800">MVP Colony</option>
                              <option value="gajuwaka" className="text-gray-800">Gajuwaka</option>
                              <option value="madhurawada" className="text-gray-800">Madhurawada</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Why Choose {selectedPropertyType.title}?</h4>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">{selectedPropertyType.description}</p>
                        <div className="space-y-2">
                          {selectedPropertyType.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <button className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300">
                      Schedule Site Visit
                    </button>
                    <button className="flex-1 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg shadow-emerald-500/25">
                      Virtual Tour
                    </button>
                    <button className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300">
                      Get Brochure
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/25 flex items-center space-x-2 mx-auto">
            <span>View All Properties</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyTypes;