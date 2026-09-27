'use client';

import React, { useState } from 'react';
import { Search, Filter, MapPin, Star, Eye, Bed, Bath, Square, Wind, Sun, TreePine, Home, ArrowRight } from 'lucide-react';
import LocationFilter from '../../../components/LocationFilter';
import useClickOutside from '../../../hooks/useClickOutside';

const ManduvaHomes = () => {
  const [selectedCity, setSelectedCity] = useState('Visakhapatnam');
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [filters, setFilters] = useState({
    priceRange: '',
    location: '',
    sustainabilityRating: ''
  });

  const propertyModalRef = useClickOutside(() => {
    setSelectedProperty(null);
  });

  const manduvaProperties = [
    {
      id: 1,
      title: "Heritage Manduva Courtyard House",
      location: "Bheemili, Visakhapatnam",
      price: "₹75,00,000",
      image: "/images/homes/hero-courtyard-house.png",
      rating: 4.8,
      views: "4.9k",
      beds: 3,
      baths: 2,
      area: "2,200 sq ft",
      features: ["Central Courtyard", "Terracotta Roof Tiles", "Wooden Thinnai", "Natural Cooling"],
      sustainabilityScore: 91,
      description: "A restored manduva-style home built around a central open courtyard, with a red clay tiled roof and hand-carved wooden verandah pillars — traditional Andhra courtyard architecture designed for passive cooling."
    },
    {
      id: 2,
      title: "Anakapalle Manduva Villa",
      location: "Anakapalle, Visakhapatnam",
      price: "₹68,00,000",
      image: "/images/homes/hero-courtyard-house.png",
      rating: 4.7,
      views: "3.6k",
      beds: 3,
      baths: 3,
      area: "2,000 sq ft",
      features: ["Nadumuttam Courtyard", "Verandah Seating", "Rainwater Collection", "Cross Ventilation"],
      sustainabilityScore: 89,
      description: "Classic manduva layout with rooms wrapped around an open-to-sky courtyard, letting light and air move through the home naturally without mechanical cooling."
    },
    {
      id: 3,
      title: "Madhurawada Tiled Roof Manduva",
      location: "Madhurawada, Visakhapatnam",
      price: "₹92,00,000",
      image: "/images/homes/hero-courtyard-house.png",
      rating: 4.9,
      views: "5.4k",
      beds: 4,
      baths: 3,
      area: "2,600 sq ft",
      features: ["Mangalore Tile Roof", "Wooden Pillar Verandah", "Tulsi Courtyard", "Lime Plaster Walls"],
      sustainabilityScore: 93,
      description: "A larger family manduva home with a stepped courtyard, breathable lime-plastered walls, and a deep verandah shading the rooms from direct sun through the day."
    },
    {
      id: 4,
      title: "Rushikonda Coastal Manduva",
      location: "Rushikonda, Visakhapatnam",
      price: "₹58,00,000",
      image: "/images/homes/hero-courtyard-house.png",
      rating: 4.6,
      views: "2.8k",
      beds: 2,
      baths: 2,
      area: "1,500 sq ft",
      features: ["Compact Courtyard", "Terracotta Flooring", "Wooden Doorframes", "Salt-Air Resistant Roof"],
      sustainabilityScore: 87,
      description: "A smaller coastal manduva home adapted for the sea breeze, with a compact central courtyard and terracotta detailing that keeps interiors naturally cool through the humid months."
    },
    {
      id: 5,
      title: "Pendurthi Ancestral Manduva",
      location: "Pendurthi, Visakhapatnam",
      price: "₹1,05,00,000",
      image: "/images/homes/hero-courtyard-house.png",
      rating: 4.9,
      views: "6.3k",
      beds: 5,
      baths: 4,
      area: "3,400 sq ft",
      features: ["Grand Courtyard", "Carved Wooden Pillars", "Well Water System", "Joint-Family Wings"],
      sustainabilityScore: 94,
      description: "A grand ancestral-style manduva home restored for a joint family, with a large central courtyard, a working well, and wings of rooms opening onto shared verandahs."
    },
    {
      id: 6,
      title: "Sabbavaram Farmstead Manduva",
      location: "Sabbavaram, Visakhapatnam",
      price: "₹48,00,000",
      image: "/images/homes/hero-courtyard-house.png",
      rating: 4.5,
      views: "2.1k",
      beds: 2,
      baths: 1,
      area: "1,300 sq ft",
      features: ["Farmstead Courtyard", "Clay Tile Roof", "Cattle-Shed Adjoining", "Kitchen Garden"],
      sustainabilityScore: 85,
      description: "A modest working farmstead manduva home just outside the city, with a small courtyard, attached kitchen garden, and the same tiled-roof cooling principles as its city cousins."
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

  const manduvaFeatures = [
    { icon: <Home className="w-5 h-5" />, title: "Central Courtyard", description: "Rooms open onto a shared open-to-sky courtyard (nadumuttam) that lights and ventilates the whole home" },
    { icon: <Sun className="w-5 h-5" />, title: "Terracotta Roofing", description: "Traditional clay tile roofs that shed heat far better than concrete slabs in the Vizag climate" },
    { icon: <Wind className="w-5 h-5" />, title: "Passive Cooling", description: "Deep wooden verandahs (thinnai) and cross-ventilation keep interiors cool without air conditioning" },
    { icon: <TreePine className="w-5 h-5" />, title: "Natural Materials", description: "Lime-plastered walls, wood pillars, and terracotta flooring — breathable, low-impact, and built to last" }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-[#f5f5f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="min-w-0 space-y-6">
              <p className="text-sm font-medium text-emerald-600">Traditional Courtyard Architecture</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1d1d1f] leading-[1.05]">
                <span className="text-emerald-600">Manduva</span> homes in Visakhapatnam
              </h1>
              <p className="text-base sm:text-lg text-[#6e6e73] leading-relaxed max-w-xl">
                Traditional Andhra courtyard homes built around an open central manduva, with
                terracotta tile roofs and wooden verandahs designed for passive cooling —
                heritage architecture, restored for modern living.
              </p>
            </div>
            <div className="min-w-0">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
                <img
                  src="/images/homes/hero-courtyard-house.png"
                  alt="A traditional Indian manduva courtyard home with a tiled roof and wooden verandah"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-5 sm:p-6">
                  <p className="text-white font-semibold text-sm sm:text-base">Manduva Courtyard Living</p>
                  <p className="text-white/80 text-xs sm:text-sm">Terracotta Roof · Central Courtyard</p>
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
                  placeholder="Search manduva properties..."
                  className="w-full pl-10 pr-3 py-3 bg-[#f5f5f7] rounded-xl text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:ring-2 focus:ring-emerald-600/40 text-sm"
                />
              </div>

              <select
                className="min-w-0 bg-[#f5f5f7] rounded-xl px-4 py-3 text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-emerald-600/40 text-sm"
                value={filters.priceRange}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              >
                <option value="">All Prices</option>
                <option value="low">Under ₹60L</option>
                <option value="mid">₹60L - ₹90L</option>
                <option value="high">Above ₹90L</option>
              </select>

              <select
                className="min-w-0 bg-[#f5f5f7] rounded-xl px-4 py-3 text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-emerald-600/40 text-sm"
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
              >
                <option value="">All Locations</option>
                <option value="Bheemili">Bheemili</option>
                <option value="Anakapalle">Anakapalle</option>
                <option value="Madhurawada">Madhurawada</option>
                <option value="Rushikonda">Rushikonda</option>
                <option value="Pendurthi">Pendurthi</option>
                <option value="Sabbavaram">Sabbavaram</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* What makes manduva homes special */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-sm font-medium text-emerald-600 mb-3">Why Manduva Homes</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
              What makes manduva homes special?
            </h2>
            <p className="text-lg text-[#6e6e73] leading-relaxed">
              Generations of Andhra courtyard architecture, built around a simple idea: an open
              central manduva that lights, cools, and ventilates the whole home without machines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/5 rounded-2xl overflow-hidden border border-black/5">
            {manduvaFeatures.map((feature, index) => (
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
              {manduvaProperties.length} manduva properties available
            </h2>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-[#1d1d1f] border border-black/10 hover:bg-black/5 transition-colors text-sm w-fit">
              <Filter className="w-4 h-4" />
              More Filters
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {manduvaProperties.map((property) => (
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
                      <Square className="w-4 h-4 flex-shrink-0" /> <span className="truncate">{property.area}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs text-[#6e6e73]">Sustainability Score</span>
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
              Looking for a different feel?
            </h2>
            <p className="text-white/60 leading-relaxed">
              Manduva homes are one path to sustainable living. Browse the rest of the collection.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="/earthships" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white bg-white/10 hover:bg-white/15 transition-colors text-sm">
              Earthships <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/mandala-homes" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white bg-white/10 hover:bg-white/15 transition-colors text-sm">
              Mandala Homes <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/eco-communes" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white bg-white/10 hover:bg-white/15 transition-colors text-sm">
              Eco Communes <ArrowRight className="w-4 h-4" />
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
                  <p className="text-white/80 text-base sm:text-lg">Manduva Home</p>
                </div>
                <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-xl shadow-sm">
                  <span className="text-[#1d1d1f] font-bold text-lg sm:text-xl">{selectedProperty.price}</span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 min-w-0">
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-[#1d1d1f] mb-3">Property Details</h3>
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
                            <Square className="w-5 h-5 text-emerald-600" />
                            <span className="text-2xl font-bold text-[#1d1d1f]">{selectedProperty.area.split(' ')[0]}</span>
                          </div>
                          <span className="text-[#6e6e73] text-sm">Sq Ft</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-base font-semibold text-[#1d1d1f] mb-3">Manduva Features</h4>
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

                      <h4 className="text-base font-semibold text-[#1d1d1f] mb-3">Sustainability Score</h4>
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
                            <Wind className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                            <span className="text-[#6e6e73] text-sm truncate">Passive Cooling</span>
                          </div>
                          <span className="text-[#1d1d1f] font-medium text-sm flex-shrink-0">93%</span>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2 min-w-0">
                            <Sun className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                            <span className="text-[#6e6e73] text-sm truncate">Natural Light</span>
                          </div>
                          <span className="text-[#1d1d1f] font-medium text-sm flex-shrink-0">96%</span>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2 min-w-0">
                            <TreePine className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                            <span className="text-[#6e6e73] text-sm truncate">Natural Materials</span>
                          </div>
                          <span className="text-[#1d1d1f] font-medium text-sm flex-shrink-0">90%</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <button className="w-full bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-full font-medium text-white transition-colors text-sm">
                        Schedule Site Visit
                      </button>
                      <button className="w-full bg-[#1d1d1f] hover:bg-black px-6 py-3 rounded-full font-medium text-white transition-colors text-sm">
                        Virtual Tour
                      </button>
                      <button className="w-full border border-black/10 hover:bg-black/5 px-6 py-3 rounded-full font-medium text-[#1d1d1f] transition-colors text-sm">
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

export default ManduvaHomes;
