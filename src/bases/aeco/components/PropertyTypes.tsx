'use client';

import React, { useState } from 'react';
import { ArrowRight, Star, Eye, MapPin } from 'lucide-react';
import useClickOutside from '../../../hooks/useClickOutside';

const PropertyTypes = () => {
  const [selectedPropertyType, setSelectedPropertyType] = useState<any>(null);

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
      image: "/images/homes/earthship-eco-home.png",
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
      image: "/images/homes/mandala-villa.png",
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
      image: "/images/homes/smart-eco-apartments.png",
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
      image: "/images/homes/biodome-residence.png",
      price: "₹75,00,000",
      features: ["Climate Control", "Air Purification", "Aquaponics", "360° Views"],
      rating: 4.9,
      views: "3.2k"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-sm font-medium text-emerald-600 mb-3">Property Collections</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
            Discover your perfect sustainable home
          </h2>
          <p className="text-lg text-[#6e6e73] leading-relaxed">
            From traditional earthships to futuristic bio-domes, find properties that
            align with your values and vision for sustainable living.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {propertyTypes.map((property) => (
            <div
              key={property.id}
              className="group bg-white rounded-3xl overflow-hidden border border-black/5 hover:shadow-xl transition-shadow min-w-0"
            >
              {/* Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-current" />
                    <span className="text-[#1d1d1f] text-xs font-medium">{property.rating}</span>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-[#6e6e73]" />
                    <span className="text-[#1d1d1f] text-xs font-medium">{property.views}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-white px-3 py-1.5 rounded-full shadow-sm">
                  <span className="text-[#1d1d1f] font-semibold text-sm">{property.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f]">
                    {property.title}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-[#86868b] group-hover:text-emerald-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                </div>
                <p className="text-emerald-600 font-medium text-sm mb-3">{property.subtitle}</p>
                <p className="text-[#6e6e73] text-sm leading-relaxed mb-6">{property.description}</p>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {property.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full flex-shrink-0"></div>
                      <span className="text-[#6e6e73] text-sm truncate">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 px-5 py-2.5 rounded-full font-medium text-white transition-colors text-sm">
                    Virtual Tour
                  </button>
                  <button
                    className="flex-1 border border-black/10 hover:bg-black/5 px-5 py-2.5 rounded-full font-medium text-[#1d1d1f] transition-colors text-sm"
                    onClick={() => openPropertyPage(property)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Property Page Modal */}
        {selectedPropertyType && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white border border-black/10 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" ref={propertyModalRef}>
              <div className="relative">
                {/* Header */}
                <div className="relative h-56 sm:h-64 overflow-hidden rounded-t-3xl">
                  <img
                    src={selectedPropertyType.image}
                    alt={selectedPropertyType.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <button
                    onClick={closePropertyPage}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#1d1d1f] hover:bg-white transition-all"
                  >
                    ✕
                  </button>
                  <div className="absolute bottom-4 left-4 sm:left-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">{selectedPropertyType.title} in Visakhapatnam</h2>
                    <p className="text-white/80 text-base sm:text-lg">{selectedPropertyType.subtitle}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Property List */}
                    <div className="lg:col-span-2 min-w-0">
                      <h3 className="text-lg font-semibold text-[#1d1d1f] mb-4">Available Properties</h3>
                      <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((property, idx) => (
                          <div key={idx} className="bg-[#f5f5f7] rounded-2xl p-4 sm:p-5 hover:bg-black/5 transition-colors cursor-pointer">
                            <div className="flex items-start gap-4">
                              <img
                                src={selectedPropertyType.image}
                                alt={`Property ${idx + 1}`}
                                className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl flex-shrink-0"
                              />
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2 mb-1">
                                  <h4 className="text-sm sm:text-base font-semibold text-[#1d1d1f] truncate">{selectedPropertyType.title} Villa {idx + 1}</h4>
                                  <span className="text-emerald-600 font-semibold text-sm sm:text-base flex-shrink-0">{selectedPropertyType.price}</span>
                                </div>
                                <div className="flex items-center gap-4 text-xs text-[#6e6e73] mb-2">
                                  <span className="flex items-center gap-1">
                                    <MapPin className="w-3.5 h-3.5" />
                                    <span>Vizag, Sector {idx + 1}</span>
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Star className="w-3.5 h-3.5 text-amber-500 fill-current" />
                                    <span>{selectedPropertyType.rating}</span>
                                  </span>
                                </div>
                                <div className="grid grid-cols-2 gap-1.5">
                                  {selectedPropertyType.features.slice(0, 4).map((feature, featureIdx) => (
                                    <div key={featureIdx} className="flex items-center gap-1.5">
                                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full flex-shrink-0"></div>
                                      <span className="text-[#6e6e73] text-xs truncate">{feature}</span>
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
                    <div className="min-w-0">
                      <div className="bg-[#f5f5f7] rounded-2xl p-5 mb-4">
                        <h4 className="text-sm font-semibold text-[#1d1d1f] mb-4">Filter Properties</h4>
                        <div className="space-y-3">
                          <div>
                            <label className="text-[#6e6e73] text-xs mb-1.5 block">Price Range</label>
                            <select className="w-full bg-white border border-black/10 rounded-lg px-3 py-2 text-[#1d1d1f] text-sm">
                              <option value="">Any Price</option>
                              <option value="low">Under ₹50L</option>
                              <option value="mid">₹50L - ₹1Cr</option>
                              <option value="high">Above ₹1Cr</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-[#6e6e73] text-xs mb-1.5 block">Sustainability Rating</label>
                            <select className="w-full bg-white border border-black/10 rounded-lg px-3 py-2 text-[#1d1d1f] text-sm">
                              <option value="">Any Rating</option>
                              <option value="4+">4+ Stars</option>
                              <option value="4.5+">4.5+ Stars</option>
                              <option value="5">5 Stars</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-[#6e6e73] text-xs mb-1.5 block">Area</label>
                            <select className="w-full bg-white border border-black/10 rounded-lg px-3 py-2 text-[#1d1d1f] text-sm">
                              <option value="">All Areas</option>
                              <option value="mvp">MVP Colony</option>
                              <option value="gajuwaka">Gajuwaka</option>
                              <option value="madhurawada">Madhurawada</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#f5f5f7] rounded-2xl p-5">
                        <h4 className="text-sm font-semibold text-[#1d1d1f] mb-3">Why Choose {selectedPropertyType.title}?</h4>
                        <p className="text-[#6e6e73] text-sm leading-relaxed mb-4">{selectedPropertyType.description}</p>
                        <div className="space-y-2">
                          {selectedPropertyType.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full flex-shrink-0"></div>
                              <span className="text-[#6e6e73] text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-8">
                    <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-full font-medium text-white transition-colors text-sm">
                      Schedule Site Visit
                    </button>
                    <button className="flex-1 bg-[#1d1d1f] hover:bg-black px-6 py-3 rounded-full font-medium text-white transition-colors text-sm">
                      Virtual Tour
                    </button>
                    <button className="flex-1 border border-black/10 hover:bg-black/5 px-6 py-3 rounded-full font-medium text-[#1d1d1f] transition-colors text-sm">
                      Get Brochure
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View All */}
        <div className="mt-12 sm:mt-16">
          <button className="bg-[#1d1d1f] hover:bg-black px-6 py-3 rounded-full font-medium text-white transition-colors text-sm inline-flex items-center gap-2">
            <span>View all properties</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyTypes;
