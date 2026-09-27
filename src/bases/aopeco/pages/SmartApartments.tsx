'use client';

import React, { useState } from 'react';
import { Search, Heart, MapPin, Bed, Bath, Square, Zap, Home, Recycle, Building, TreePine, Leaf } from 'lucide-react';
import LocationFilter from '../../../components/LocationFilter';
import useClickOutside from '../../../hooks/useClickOutside';

const SmartApartments = () => {
  const [selectedCity, setSelectedCity] = useState('Visakhapatnam');
  const [selectedCategory, setSelectedCategory] = useState('All Smart Apartments');
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const propertyModalRef = useClickOutside(() => {
    setSelectedProperty(null);
    setIsModalOpen(false);
  });

  const handlePropertyClick = (property: any) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const popularLocalities = [
    'Bangalore', 'Mumbai', 'Delhi', 'Pune', 'Hyderabad'
  ];

  const smartApartmentCategories = [
    'All Smart Apartments', 'AI-Powered', 'IoT Integrated', 'Energy Efficient', 'Green Certified', 'Smart Security', 'Automated Living'
  ];

  const smartApartments = [
    {
      id: 1,
      title: "TechVista Smart Residency",
      type: "Smart Apartment",
      location: "Madhurawada, Visakhapatnam",
      price: "₹65 Lakhs",
      image: "/images/homes/smart-eco-apartments.png",
      bedrooms: 2,
      bathrooms: 2,
      area: "1200 sq ft",
      features: ["AI Home Assistant", "Smart Lighting", "Automated Climate Control", "Voice Commands"],
      sustainability: "LEED Gold Certified",
      rating: 4.8,
      link: "/smart-apartments"
    },
    {
      id: 2,
      title: "EcoSmart Towers",
      type: "Smart Apartment",
      location: "MVP Colony, Visakhapatnam",
      price: "₹55 Lakhs",
      image: "/images/homes/smart-eco-apartments.png",
      bedrooms: 3,
      bathrooms: 2,
      area: "1400 sq ft",
      features: ["Solar Integration", "Smart Appliances", "Water Management", "Security Systems"],
      sustainability: "Net Zero Energy",
      rating: 4.9,
      link: "/smart-apartments"
    },
    {
      id: 3,
      title: "IntelliHome Complex",
      type: "Smart Apartment",
      location: "Rushikonda, Visakhapatnam",
      price: "₹75 Lakhs",
      image: "/images/homes/smart-eco-apartments.png",
      bedrooms: 3,
      bathrooms: 3,
      area: "1600 sq ft",
      features: ["IoT Sensors", "Smart Kitchen", "Automated Parking", "Health Monitoring"],
      sustainability: "Green Building Certified",
      rating: 4.7,
      link: "/smart-apartments"
    }
  ];

  const smartFeatures = [
    { icon: <Zap className="w-5 h-5" />, title: "AI Home Assistant", description: "Voice-controlled smart home management" },
    { icon: <Home className="w-5 h-5" />, title: "Smart Lighting", description: "Automated lighting with mood settings" },
    { icon: <Recycle className="w-5 h-5" />, title: "Energy Management", description: "Real-time energy monitoring and optimization" },
    { icon: <Building className="w-5 h-5" />, title: "Security Systems", description: "Advanced biometric and IoT security" },
    { icon: <TreePine className="w-5 h-5" />, title: "Air Quality Control", description: "Automated air purification and monitoring" },
    { icon: <Leaf className="w-5 h-5" />, title: "Water Management", description: "Smart water usage and recycling systems" }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-[#f5f5f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="min-w-0 space-y-6">
              <p className="text-sm font-medium text-emerald-600">Urban Sustainability</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1d1d1f] leading-[1.05]">
                <span className="text-emerald-600">Smart apartments</span> in {selectedCity}
              </h1>
              <p className="text-base sm:text-lg text-[#6e6e73] leading-relaxed max-w-xl">
                Experience the future of urban living with AI-powered, IoT-integrated smart
                apartments designed for sustainable and intelligent living.
              </p>
            </div>
            <div className="min-w-0">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
                <img
                  src="/images/homes/smart-eco-apartments.png"
                  alt="A modern Indian apartment tower with vertical gardens and rooftop solar against a city skyline"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-5 sm:p-6">
                  <p className="text-white font-semibold text-sm sm:text-base">Connected, Efficient Living</p>
                  <p className="text-white/80 text-xs sm:text-sm">IoT Integrated · Net Zero Energy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="bg-white border border-black/10 rounded-2xl p-3 sm:p-4 shadow-sm mb-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 sm:gap-3">
              <div className="min-w-0 rounded-xl overflow-hidden bg-[#1d1d1f]">
                <LocationFilter selectedCity={selectedCity} onCityChange={setSelectedCity} />
              </div>
              <div className="lg:col-span-2 min-w-0 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#86868b] w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search smart apartments..."
                  className="w-full pl-10 pr-3 py-3 bg-[#f5f5f7] rounded-xl text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:ring-2 focus:ring-emerald-600/40 text-sm"
                />
              </div>
              <select className="min-w-0 bg-[#f5f5f7] rounded-xl px-4 py-3 text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-emerald-600/40 text-sm">
                <option value="">All Types</option>
                <option value="ai-powered">AI-Powered</option>
                <option value="iot-integrated">IoT Integrated</option>
                <option value="energy-efficient">Energy Efficient</option>
              </select>
            </div>
          </div>

          <div>
            <p className="text-sm text-[#6e6e73] mb-3">Popular locations</p>
            <div className="flex flex-wrap gap-2">
              {popularLocalities.map((locality) => (
                <button
                  key={locality}
                  className="px-4 py-2 rounded-full text-sm font-medium text-[#1d1d1f] border border-black/10 hover:bg-black/5 transition-colors"
                >
                  {locality}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category tabs */}
      <section className="bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex overflow-x-auto py-4 gap-2 sm:gap-3">
            {smartApartmentCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap py-2 px-4 rounded-full font-medium transition-colors text-sm ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white'
                    : 'text-[#1d1d1f] hover:bg-black/5 border border-black/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Smart Apartments */}
      <section className="py-16 sm:py-24 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10 sm:mb-12">
            <p className="text-sm font-medium text-emerald-600 mb-3">Featured</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight mb-3">
              Featured smart apartments
            </h2>
            <p className="text-[#6e6e73]">Hand-picked smart apartments with cutting-edge technology</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {smartApartments.map((property) => (
              <div
                key={property.id}
                className="group bg-white rounded-2xl overflow-hidden border border-black/5 hover:shadow-xl transition-shadow cursor-pointer min-w-0"
                onClick={() => handlePropertyClick(property)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={property.image} alt={property.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#1d1d1f] hover:bg-white transition-all"
                  >
                    <Heart className="w-4 h-4" />
                  </button>
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
                  <div className="flex items-center justify-between text-[#6e6e73] text-sm">
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" /> {property.bedrooms}
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4" /> {property.bathrooms}
                    </div>
                    <div className="flex items-center gap-1 min-w-0">
                      <Square className="w-4 h-4 flex-shrink-0" /> <span className="truncate">{property.area}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Living Features */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-sm font-medium text-emerald-600 mb-3">Smart Living</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
              Intelligent features, built in
            </h2>
            <p className="text-lg text-[#6e6e73] leading-relaxed">
              Experience the future of urban living with these intelligent, energy-conscious features.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/5 rounded-2xl overflow-hidden border border-black/5">
            {smartFeatures.map((feature, index) => (
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

      {/* Property Modal */}
      {isModalOpen && selectedProperty && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div ref={propertyModalRef} className="bg-white border border-black/10 rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 bg-black/5 hover:bg-black/10 rounded-full flex items-center justify-center text-[#1d1d1f] transition-colors"
            >
              ✕
            </button>
            <img src={selectedProperty.image} alt={selectedProperty.title} className="w-full h-56 sm:h-64 object-cover rounded-2xl mb-6" />
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] mb-2">{selectedProperty.title}</h3>
            <div className="flex items-center gap-2 text-[#6e6e73] mb-4">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{selectedProperty.location}</span>
            </div>
            <p className="text-[#1d1d1f] text-xl sm:text-2xl font-semibold mb-6">{selectedProperty.price}</p>
            <div className="grid grid-cols-3 gap-4 text-[#1d1d1f] text-sm mb-6">
              <div className="flex items-center gap-2">
                <Bed className="w-4 h-4 text-emerald-600" /> {selectedProperty.bedrooms} Beds
              </div>
              <div className="flex items-center gap-2">
                <Bath className="w-4 h-4 text-emerald-600" /> {selectedProperty.bathrooms} Baths
              </div>
              <div className="flex items-center gap-2 min-w-0">
                <Square className="w-4 h-4 text-emerald-600 flex-shrink-0" /> <span className="truncate">{selectedProperty.area}</span>
              </div>
            </div>
            <p className="text-[#6e6e73] leading-relaxed mb-6">
              Experience the future of urban living with this cutting-edge smart apartment featuring
              AI-powered home automation, IoT integration, and sustainable living solutions.
            </p>
            <div className="grid grid-cols-2 gap-2 mb-6">
              {selectedProperty.features.map((feature: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2 min-w-0">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full flex-shrink-0"></div>
                  <span className="text-[#6e6e73] text-sm truncate">{feature}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              <button
                onClick={() => window.location.href = `/property/${selectedProperty.id}`}
                className="w-full bg-[#1d1d1f] hover:bg-black px-6 py-3 rounded-full font-medium text-white transition-colors text-sm"
              >
                View Property
              </button>
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-full font-medium text-white transition-colors text-sm">
                Contact Agent
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmartApartments;
