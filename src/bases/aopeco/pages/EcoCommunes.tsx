'use client';

import React, { useState } from 'react';
import { Search, Filter, MapPin, Star, Eye, Bed, Bath, Users, TreePine, Recycle, Home, ArrowRight } from 'lucide-react';
import LocationFilter from '../../../components/LocationFilter';
import useClickOutside from '../../../hooks/useClickOutside';

const EcoCommunes = () => {
  const [selectedCity, setSelectedCity] = useState('Visakhapatnam');
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [filters, setFilters] = useState({
    priceRange: '',
    location: '',
    communitySize: ''
  });

  const propertyModalRef = useClickOutside(() => {
    setSelectedProperty(null);
  });

  const communeProperties = [
    {
      id: 1,
      title: "Araku Valley Eco Community",
      location: "Araku Valley, Visakhapatnam",
      price: "₹45,00,000",
      image: "/images/homes/biodome-residence.png",
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
      image: "/images/homes/hero-courtyard-house.png",
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
      image: "/images/homes/biodome-residence.png",
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
      image: "/images/homes/mandala-villa.png",
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
      image: "/images/homes/hero-courtyard-house.png",
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
      image: "/images/homes/earthship-eco-home.png",
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

  const openPropertyDetails = (property: any) => {
    setSelectedProperty(property);
  };

  const closePropertyDetails = () => {
    setSelectedProperty(null);
  };

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const communeFeatures = [
    { icon: <Users className="w-5 h-5" />, title: "Community Living", description: "Shared spaces, resources, and responsibilities create strong community bonds" },
    { icon: <Recycle className="w-5 h-5" />, title: "Shared Resources", description: "Reduce individual costs through shared facilities, tools, and services" },
    { icon: <TreePine className="w-5 h-5" />, title: "Organic Farming", description: "Community gardens and farms provide fresh, organic food for all residents" },
    { icon: <Home className="w-5 h-5" />, title: "Sustainable Living", description: "Zero waste practices and renewable energy systems for minimal environmental impact" }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-[#f5f5f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="min-w-0 space-y-6">
              <p className="text-sm font-medium text-emerald-600">Collaborative Living</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1d1d1f] leading-[1.05]">
                <span className="text-emerald-600">Eco communes</span> in Visakhapatnam
              </h1>
              <p className="text-base sm:text-lg text-[#6e6e73] leading-relaxed max-w-xl">
                Join sustainable communities that share resources, values, and a commitment to
                environmental harmony — collaborative living with a lighter ecological footprint.
              </p>
            </div>
            <div className="min-w-0">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
                <img
                  src="/images/homes/hero-courtyard-house.png"
                  alt="A traditional Indian courtyard home shared by a community, tiled roof and verandah"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-5 sm:p-6">
                  <p className="text-white font-semibold text-sm sm:text-base">Shared Courtyards, Shared Values</p>
                  <p className="text-white/80 text-xs sm:text-sm">Community Farming · Zero Waste</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & filters */}
      <section className="bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="bg-white border border-black/10 rounded-2xl p-3 sm:p-4 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 sm:gap-3">
              <div className="min-w-0 rounded-xl overflow-hidden bg-[#1d1d1f]">
                <LocationFilter selectedCity={selectedCity} onCityChange={setSelectedCity} />
              </div>

              <div className="lg:col-span-2 min-w-0 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#86868b] w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search eco commune properties..."
                  className="w-full pl-10 pr-3 py-3 bg-[#f5f5f7] rounded-xl text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:ring-2 focus:ring-emerald-600/40 text-sm"
                />
              </div>

              <select
                className="min-w-0 bg-[#f5f5f7] rounded-xl px-4 py-3 text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-emerald-600/40 text-sm"
                value={filters.priceRange}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              >
                <option value="">All Prices</option>
                <option value="low">Under ₹40L</option>
                <option value="mid">₹40L - ₹60L</option>
                <option value="high">Above ₹60L</option>
              </select>

              <select
                className="min-w-0 bg-[#f5f5f7] rounded-xl px-4 py-3 text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-emerald-600/40 text-sm"
                value={filters.communitySize}
                onChange={(e) => handleFilterChange('communitySize', e.target.value)}
              >
                <option value="">Community Size</option>
                <option value="small">Under 20 families</option>
                <option value="medium">20-30 families</option>
                <option value="large">30+ families</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* What makes eco communes special */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-sm font-medium text-emerald-600 mb-3">Why Eco Communes</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
              What makes eco communes special?
            </h2>
            <p className="text-lg text-[#6e6e73] leading-relaxed">
              Individuals and families come together to build sustainable communities based on
              shared values, resources, and environmental responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/5 rounded-2xl overflow-hidden border border-black/5">
            {communeFeatures.map((feature, index) => (
              <div key={index} className="group bg-white hover:bg-[#f5f5f7] transition-colors p-6 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                  {feature.icon}
                </div>
                <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">{feature.title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties grid */}
      <section className="py-16 sm:py-24 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight">
              {communeProperties.length} eco commune communities available
            </h2>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-[#1d1d1f] border border-black/10 hover:bg-black/5 transition-colors text-sm w-fit">
              <Filter className="w-4 h-4" />
              More Filters
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {communeProperties.map((property) => (
              <div
                key={property.id}
                className="group bg-white rounded-2xl overflow-hidden border border-black/5 hover:shadow-xl transition-shadow cursor-pointer min-w-0"
                onClick={() => openPropertyDetails(property)}
              >
                <div className="relative h-48 overflow-hidden">
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

                <div className="p-5 sm:p-6 min-w-0">
                  <h3 className="text-lg font-semibold text-[#1d1d1f] mb-1 truncate">{property.title}</h3>
                  <div className="flex items-center gap-1.5 text-[#6e6e73] mb-4">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="text-sm truncate">{property.location}</span>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-[#6e6e73] text-sm">
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" /> {property.beds}
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4" /> {property.baths}
                    </div>
                    <div className="flex items-center gap-1 min-w-0">
                      <Users className="w-4 h-4 flex-shrink-0" /> <span className="truncate">{property.communitySize}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs text-[#6e6e73]">Community Score</span>
                      <span className="text-emerald-600 font-semibold text-sm">{property.sustainabilityScore}/100</span>
                    </div>
                    <div className="w-full bg-black/5 rounded-full h-1.5">
                      <div
                        className="bg-emerald-600 h-1.5 rounded-full"
                        style={{ width: `${property.sustainabilityScore}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {property.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 min-w-0">
                        <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full flex-shrink-0"></div>
                        <span className="text-[#6e6e73] text-xs truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA — the one deliberate dark section */}
      <section className="bg-[#1d1d1f] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-8 sm:mb-10">
            <p className="text-sm font-medium text-emerald-400 mb-3">Explore more</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              Prefer to live on your own plot?
            </h2>
            <p className="text-white/60 leading-relaxed">
              Communes are one way to live sustainably. Browse the rest of the collection.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="/earthships" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white bg-white/10 hover:bg-white/15 transition-colors text-sm">
              Earthships <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/mandala-homes" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white bg-white/10 hover:bg-white/15 transition-colors text-sm">
              Mandala Homes <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/smart-apartments" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white bg-white/10 hover:bg-white/15 transition-colors text-sm">
              Smart Apartments <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Property Details Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-black/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" ref={propertyModalRef}>
            <div className="relative">
              <div className="h-56 sm:h-64 overflow-hidden rounded-t-3xl relative">
                <img
                  src={selectedProperty.image}
                  alt={selectedProperty.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <button
                  onClick={closePropertyDetails}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#1d1d1f] hover:bg-white transition-all"
                >
                  ✕
                </button>
                <div className="absolute bottom-4 left-4 sm:left-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">{selectedProperty.title}</h2>
                  <p className="text-white/80 text-base sm:text-lg">Eco Commune</p>
                </div>
                <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-xl shadow-sm">
                  <span className="text-[#1d1d1f] font-bold text-lg sm:text-xl">{selectedProperty.price}</span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 min-w-0">
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-[#1d1d1f] mb-3">Community Details</h3>
                      <p className="text-[#6e6e73] leading-relaxed mb-6">{selectedProperty.description}</p>

                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center min-w-0">
                          <div className="flex items-center justify-center gap-2 mb-1">
                            <Bed className="w-5 h-5 text-emerald-600" />
                            <span className="text-2xl font-bold text-[#1d1d1f]">{selectedProperty.beds}</span>
                          </div>
                          <span className="text-[#6e6e73] text-sm">Bedrooms</span>
                        </div>
                        <div className="text-center min-w-0">
                          <div className="flex items-center justify-center gap-2 mb-1">
                            <Bath className="w-5 h-5 text-emerald-600" />
                            <span className="text-2xl font-bold text-[#1d1d1f]">{selectedProperty.baths}</span>
                          </div>
                          <span className="text-[#6e6e73] text-sm">Bathrooms</span>
                        </div>
                        <div className="text-center min-w-0">
                          <div className="flex items-center justify-center gap-2 mb-1">
                            <Users className="w-5 h-5 text-emerald-600" />
                            <span className="text-2xl font-bold text-[#1d1d1f]">{selectedProperty.communitySize.split(' ')[0]}</span>
                          </div>
                          <span className="text-[#6e6e73] text-sm">Families</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-base font-semibold text-[#1d1d1f] mb-3">Community Features</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedProperty.features.map((feature: string, idx: number) => (
                          <div key={idx} className="flex items-center gap-3 bg-[#f5f5f7] p-3 rounded-lg min-w-0">
                            <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full flex-shrink-0"></div>
                            <span className="text-[#1d1d1f] text-sm truncate">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="min-w-0">
                    <div className="bg-[#f5f5f7] rounded-2xl p-5 sm:p-6 mb-6">
                      <h4 className="text-base font-semibold text-[#1d1d1f] mb-4">Location</h4>
                      <div className="flex items-center gap-2 text-[#6e6e73] mb-5">
                        <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm truncate">{selectedProperty.location}</span>
                      </div>

                      <h4 className="text-base font-semibold text-[#1d1d1f] mb-3">Community Score</h4>
                      <div className="mb-5">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[#6e6e73] text-sm">Overall Rating</span>
                          <span className="text-emerald-600 font-bold text-lg">{selectedProperty.sustainabilityScore}/100</span>
                        </div>
                        <div className="w-full bg-black/10 rounded-full h-2">
                          <div
                            className="bg-emerald-600 h-2 rounded-full"
                            style={{ width: `${selectedProperty.sustainabilityScore}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2 min-w-0">
                            <Users className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                            <span className="text-[#6e6e73] text-sm truncate">Community Engagement</span>
                          </div>
                          <span className="text-[#1d1d1f] font-medium text-sm flex-shrink-0">95%</span>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2 min-w-0">
                            <TreePine className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                            <span className="text-[#6e6e73] text-sm truncate">Environmental Impact</span>
                          </div>
                          <span className="text-[#1d1d1f] font-medium text-sm flex-shrink-0">92%</span>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2 min-w-0">
                            <Recycle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                            <span className="text-[#6e6e73] text-sm truncate">Resource Sharing</span>
                          </div>
                          <span className="text-[#1d1d1f] font-medium text-sm flex-shrink-0">98%</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <button className="w-full bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-full font-medium text-white transition-colors text-sm">
                        Schedule Community Visit
                      </button>
                      <button className="w-full bg-[#1d1d1f] hover:bg-black px-6 py-3 rounded-full font-medium text-white transition-colors text-sm">
                        Virtual Tour
                      </button>
                      <button className="w-full border border-black/10 hover:bg-black/5 px-6 py-3 rounded-full font-medium text-[#1d1d1f] transition-colors text-sm">
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
