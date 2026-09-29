'use client';

import React, { useState } from 'react';
import { Search, Heart, MapPin, Bed, Bath, Square, ChevronLeft, ChevronRight, Leaf, Home, Building, TreePine, Zap, Recycle, ArrowRight } from 'lucide-react';
import StandardNavbar from '../../../components/StandardNavbar';
import Footer from '../../../components/Footer';
import LocationFilter from '../../../components/LocationFilter';
import useClickOutside from '../../../hooks/useClickOutside';

const EcoProps = () => {
  const [selectedCity, setSelectedCity] = useState('Visakhapatnam');
  const [selectedCategory, setSelectedCategory] = useState('All EcoProps');
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
    'Auroville', 'Pondicherry', 'Goa', 'Kerala', 'Himachal Pradesh'
  ];

  const ecoProperties = [
    {
      id: 1,
      title: "Lambasingi Earthship",
      type: "Earthship",
      location: "Lambasingi, Visakhapatnam",
      price: "₹45 Lakhs",
      image: "/images/homes/earthship-eco-home.png",
      bedrooms: 3,
      bathrooms: 2,
      area: "1200 sq ft",
      features: ["Solar Power", "Rainwater Harvesting", "Natural Ventilation", "Organic Garden"],
      sustainability: "Carbon Negative",
      rating: 4.9,
      link: "/earthships"
    },
    {
      id: 2,
      title: "Madhurawada Mandala Villa",
      type: "Mandala Home",
      location: "Madhurawada, Visakhapatnam",
      price: "₹65 Lakhs",
      image: "/images/homes/mandala-villa.png",
      bedrooms: 4,
      bathrooms: 3,
      area: "1800 sq ft",
      features: ["Bamboo Construction", "Solar Panels", "Composting System", "Meditation Space"],
      sustainability: "Zero Waste",
      rating: 4.8,
      link: "/mandala-homes"
    },
    {
      id: 3,
      title: "Araku Valley Eco Commune",
      type: "Eco Commune",
      location: "Araku Valley, Visakhapatnam",
      price: "₹85 Lakhs",
      image: "/images/homes/biodome-residence.png",
      bedrooms: 5,
      bathrooms: 4,
      area: "2200 sq ft",
      features: ["Community Living", "Shared Resources", "Organic Farming", "Renewable Energy"],
      sustainability: "Energy Independent",
      rating: 4.9,
      link: "/eco-communes"
    },
    {
      id: 4,
      title: "MVP Colony Smart Home",
      type: "Smart Apartment",
      location: "MVP Colony, Visakhapatnam",
      price: "₹55 Lakhs",
      image: "/images/homes/smart-eco-apartments.png",
      bedrooms: 3,
      bathrooms: 2,
      area: "1400 sq ft",
      features: ["Smart Automation", "Energy Monitoring", "Water Recycling", "Green Roof"],
      sustainability: "Net Zero",
      rating: 4.7,
      link: "/smart-apartments"
    },
    {
      id: 5,
      title: "Bheemili Manduva Courtyard House",
      type: "Manduva Home",
      location: "Bheemili, Visakhapatnam",
      price: "₹75 Lakhs",
      image: "/images/homes/hero-courtyard-house.png",
      bedrooms: 3,
      bathrooms: 2,
      area: "2200 sq ft",
      features: ["Central Courtyard", "Terracotta Roof Tiles", "Wooden Thinnai", "Natural Cooling"],
      sustainability: "Passive Cooling",
      rating: 4.8,
      link: "/manduva-homes"
    },
    {
      id: 6,
      title: "Anakapalle Off-Grid Villa",
      type: "Off-Grid Home",
      location: "Anakapalle, Visakhapatnam",
      price: "₹75 Lakhs",
      image: "/images/homes/earthship-eco-home.png",
      bedrooms: 4,
      bathrooms: 3,
      area: "2000 sq ft",
      features: ["Complete Independence", "Wind Power", "Water Wells", "Desert Garden"],
      sustainability: "Fully Sustainable",
      rating: 4.8,
      link: "/earthships"
    }
  ];

  const ecoPropertyTypes = [
    { icon: <Home className="w-5 h-5" />, title: "Earthships", description: "Self-sufficient homes built with natural and recycled materials", count: "25+ Properties", link: "/earthships" },
    { icon: <Building className="w-5 h-5" />, title: "Mandala Homes", description: "Sacred geometry-inspired sustainable living spaces", count: "18+ Properties", link: "/mandala-homes" },
    { icon: <Home className="w-5 h-5" />, title: "Manduva Homes", description: "Traditional Andhra courtyard homes with terracotta roofs", count: "14+ Properties", link: "/manduva-homes" },
    { icon: <TreePine className="w-5 h-5" />, title: "Eco Communes", description: "Community-based sustainable living communities", count: "12+ Properties", link: "/eco-communes" },
    { icon: <Leaf className="w-5 h-5" />, title: "Smart Apartments", description: "Technology-integrated sustainable apartment living", count: "35+ Properties", link: "/smart-apartments" }
  ];

  const realEstateServices = [
    { icon: <Home className="w-5 h-5" />, title: "Property Valuation", description: "Accurate sustainable property assessments" },
    { icon: <Building className="w-5 h-5" />, title: "Legal Assistance", description: "Complete legal support for transactions" },
    { icon: <MapPin className="w-5 h-5" />, title: "Location Analysis", description: "Comprehensive area and market analysis" },
    { icon: <Zap className="w-5 h-5" />, title: "Energy Audits", description: "Sustainability and efficiency assessments" },
    { icon: <TreePine className="w-5 h-5" />, title: "Eco Certifications", description: "Green building certifications and compliance" },
    { icon: <Recycle className="w-5 h-5" />, title: "Waste Management", description: "Sustainable waste management solutions" }
  ];

  const projectsInFocus = [
    { title: "Green Valley Apartments", price: "₹25L - 45L", image: "/images/homes/smart-eco-apartments.png" },
    { title: "Eco Heights Residency", price: "₹30L - 50L", image: "/images/homes/hero-courtyard-house.png" },
    { title: "Sustainable Living Complex", price: "₹35L - 55L", image: "/images/homes/mandala-villa.png" }
  ];

  const recentlyAdded = [
    { title: "Greenway Eco Apartments", price: "₹28L", image: "/images/homes/smart-eco-apartments.png" },
    { title: "Sunrise Earthships", price: "₹40L", image: "/images/homes/earthship-eco-home.png" },
    { title: "Ocean View Gardens", price: "₹35L", image: "/images/homes/biodome-residence.png" },
    { title: "Newlands Eco Residency", price: "₹65L", image: "/images/homes/hero-courtyard-house.png" }
  ];

  const newsArticles = [
    { title: "Vizag's sustainable real estate market trends", date: "February 14, 2024", image: "/images/homes/hero-courtyard-house.png" },
    { title: "Luxury eco-apartments gaining popularity", date: "February 14, 2024", image: "/images/homes/earthship-eco-home.png" },
    { title: "Sustainable living communities on the rise", date: "February 14, 2024", image: "/images/homes/smart-eco-apartments.png" }
  ];

  const recommendedSellers = [
    { name: "Ravi Kumar", company: "EcoVillage Developers" },
    { name: "Suresh", company: "Green Homes India" },
    { name: "Anil", company: "Sustainable Living Co." },
    { name: "John", company: "Eco Properties" },
    { name: "Raju", company: "Green Builders" }
  ];

  return (
    <div className="bg-white">
      <StandardNavbar />

      {/* Hero */}
      <header className="relative bg-[#f5f5f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="min-w-0 space-y-6 sm:space-y-8">
              <p className="text-sm font-medium text-emerald-600">EcoProps · Sustainable Properties</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1d1d1f] leading-[1.05]">
                Discover your perfect <span className="text-emerald-600">eco-friendly</span> home
              </h1>
              <p className="text-base sm:text-lg text-[#6e6e73] leading-relaxed max-w-xl">
                Find sustainable properties in {selectedCity} that align with your environmental
                values and lifestyle.
              </p>

              <div className="bg-white border border-black/10 rounded-2xl p-3 shadow-sm">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="rounded-xl overflow-hidden bg-[#1d1d1f] sm:w-40">
                    <LocationFilter selectedCity={selectedCity} onCityChange={setSelectedCity} />
                  </div>
                  <div className="flex-1 min-w-0 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#86868b] w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search by location, type, or features..."
                      className="w-full pl-10 pr-3 py-3 bg-[#f5f5f7] rounded-xl text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:ring-2 focus:ring-emerald-600/40 text-sm"
                    />
                  </div>
                  <button className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-xl font-semibold text-white transition-colors text-sm whitespace-nowrap">
                    Search
                  </button>
                </div>
              </div>

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

            <div className="min-w-0">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
                <img
                  src="/images/homes/hero-courtyard-house.png"
                  alt="A traditional Indian courtyard home with a tiled roof and wooden verandah"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-5 sm:p-6">
                  <p className="text-white font-semibold text-sm sm:text-base">Every Kind of Sustainable Home</p>
                  <p className="text-white/80 text-xs sm:text-sm">Earthships · Mandala · Manduva · Communes · Smart Apartments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Normalizing Earthships */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="min-w-0 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                <img
                  src="/images/homes/earthship-eco-home.png"
                  alt="A rammed-earth earthship home with solar panels"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="min-w-0 order-1 lg:order-2 space-y-6">
              <p className="text-sm font-medium text-emerald-600">Sustainable Living Revolution</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] tracking-tight leading-tight">
                Normalizing <span className="text-emerald-600">earthships</span> and sustainable construction
              </h2>
              <p className="text-[#6e6e73] leading-relaxed">
                We're revolutionizing sustainable living across India by promoting eco-friendly
                construction practices — connecting you with properties that prioritize
                environmental responsibility, modern comfort, and a greener future.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-3 text-emerald-600">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-semibold text-[#1d1d1f] mb-0.5">Sustainable</p>
                  <p className="text-xs text-[#6e6e73]">Eco-friendly spaces</p>
                </div>
                <div className="min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-3 text-emerald-600">
                    <Building className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-semibold text-[#1d1d1f] mb-0.5">Green Architecture</p>
                  <p className="text-xs text-[#6e6e73]">Innovative methods</p>
                </div>
                <div className="min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-3 text-emerald-600">
                    <Zap className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-semibold text-[#1d1d1f] mb-0.5">Clean Energy</p>
                  <p className="text-xs text-[#6e6e73]">Renewable power</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="/earthships" className="bg-[#1d1d1f] hover:bg-black px-6 py-3 rounded-full font-medium text-white transition-colors text-sm">
                  Explore EcoProps
                </a>
                <a href="/get-a-quote" className="px-6 py-3 rounded-full font-medium text-[#1d1d1f] border border-black/10 hover:bg-black/5 transition-colors text-sm">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Property Types */}
      <section className="py-16 sm:py-24 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-sm font-medium text-emerald-600 mb-3">Property Collections</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
              Sustainable property types
            </h2>
            <p className="text-lg text-[#6e6e73] leading-relaxed">
              Explore different types of eco-friendly properties designed for sustainable living.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/5 rounded-2xl overflow-hidden border border-black/5">
            {ecoPropertyTypes.map((propertyType, index) => (
              <a
                key={index}
                href={propertyType.link}
                className="group bg-white hover:bg-white/80 transition-colors p-6 min-w-0"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                  {propertyType.icon}
                </div>
                <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">{propertyType.title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed mb-3">{propertyType.description}</p>
                <div className="text-emerald-600 font-medium text-sm">{propertyType.count}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured EcoProps */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
            <div className="max-w-xl min-w-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1d1d1f] tracking-tight mb-2">
                Featured EcoProps
              </h2>
              <p className="text-[#6e6e73]">Handpicked sustainable properties for conscious living</p>
            </div>
            <button className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-full font-medium text-white transition-colors text-sm w-fit">
              View All Properties
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {ecoProperties.map((property) => (
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
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-[#1d1d1f] text-xs font-medium">{property.sustainability}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1">
                    <span className="text-amber-500 text-xs">★</span>
                    <span className="text-[#1d1d1f] text-xs font-medium">{property.rating}</span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-[#1d1d1f] truncate">{property.title}</h3>
                    <span className="text-emerald-600 font-medium text-xs flex-shrink-0">{property.type}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[#6e6e73] mb-4">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="text-sm truncate">{property.location}</span>
                  </div>

                  <div className="flex items-center gap-4 text-[#6e6e73] text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      <span>{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center gap-1 min-w-0">
                      <Square className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{property.area}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xl font-bold text-[#1d1d1f]">{property.price}</div>
                    <button
                      onClick={(e) => { e.stopPropagation(); window.location.href = `/property/${property.id}`; }}
                      className="bg-[#1d1d1f] hover:bg-black px-4 py-2 rounded-full font-medium text-white transition-colors text-xs flex-shrink-0"
                    >
                      View Property
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In Spotlight */}
      <section className="py-16 sm:py-24 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight">In Spotlight</h2>
              <p className="text-[#6e6e73] text-sm mt-1">Featured sustainable property developments</p>
            </div>
            <div className="hidden sm:flex gap-2">
              <button className="p-2 border border-black/10 rounded-lg hover:bg-black/5 transition-colors">
                <ChevronLeft className="w-4 h-4 text-[#1d1d1f]" />
              </button>
              <button className="p-2 border border-black/10 rounded-lg hover:bg-black/5 transition-colors">
                <ChevronRight className="w-4 h-4 text-[#1d1d1f]" />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm">
            <div className="md:flex">
              <div className="md:w-1/2 min-w-0">
                <img src="/images/homes/biodome-residence.png" alt="Auroville Eco Community" className="w-full h-64 md:h-full object-cover" />
              </div>
              <div className="md:w-1/2 p-6 sm:p-8 min-w-0">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-11 h-11 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <TreePine className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-[#1d1d1f] truncate">EcoVillage Developers</h3>
                    <p className="text-[#6e6e73] text-sm truncate">Sustainable Community Living</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] mb-1">Auroville Eco Community</h4>
                  <p className="text-[#6e6e73] mb-3">Auroville, Tamil Nadu</p>
                  <div className="text-2xl sm:text-3xl font-bold text-emerald-600 mb-3">₹2.5 Cr - 4.8 Cr</div>
                  <div className="w-full bg-black/10 rounded-full h-1.5">
                    <div className="bg-emerald-600 h-1.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <p className="text-sm text-[#6e6e73] mt-2">75% Sold</p>
                </div>

                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-full font-medium transition-colors text-sm">
                  View Project Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects in Focus */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight">Projects in Focus</h2>
              <p className="text-[#6e6e73] text-sm mt-1">Latest sustainable development projects</p>
            </div>
            <div className="hidden sm:flex gap-2">
              <button className="p-2 border border-black/10 rounded-lg hover:bg-black/5 transition-colors">
                <ChevronLeft className="w-4 h-4 text-[#1d1d1f]" />
              </button>
              <button className="p-2 border border-black/10 rounded-lg hover:bg-black/5 transition-colors">
                <ChevronRight className="w-4 h-4 text-[#1d1d1f]" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsInFocus.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden border border-black/5 hover:shadow-xl transition-shadow min-w-0">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-5 sm:p-6">
                  <h3 className="text-base font-semibold text-[#1d1d1f] mb-2 truncate">{project.title}</h3>
                  <div className="text-lg font-bold text-emerald-600 mb-4">{project.price}</div>
                  <button className="w-full border border-black/10 hover:bg-black/5 text-[#1d1d1f] py-2.5 rounded-full font-medium transition-colors text-sm">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recently Added */}
      <section className="py-16 sm:py-24 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight">Recently Added</h2>
              <p className="text-[#6e6e73] text-sm mt-1">Latest eco-properties added to our platform</p>
            </div>
            <div className="hidden sm:flex gap-2">
              <button className="p-2 border border-black/10 rounded-lg hover:bg-black/5 transition-colors">
                <ChevronLeft className="w-4 h-4 text-[#1d1d1f]" />
              </button>
              <button className="p-2 border border-black/10 rounded-lg hover:bg-black/5 transition-colors">
                <ChevronRight className="w-4 h-4 text-[#1d1d1f]" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {recentlyAdded.map((property, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden border border-black/5 hover:shadow-xl transition-shadow min-w-0">
                <img src={property.image} alt={property.title} className="w-full h-28 sm:h-32 object-cover" />
                <div className="p-3 sm:p-4">
                  <h3 className="font-medium text-[#1d1d1f] mb-1 text-sm truncate">{property.title}</h3>
                  <div className="text-base font-bold text-emerald-600 mb-3">{property.price}</div>
                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-full text-xs font-medium transition-colors">
                    Contact
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Everything You Need in Real Estate */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-sm font-medium text-emerald-600 mb-3">Full Service</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
              Everything you need in real estate
            </h2>
            <p className="text-lg text-[#6e6e73] leading-relaxed">
              Comprehensive services for all your sustainable property needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/5 rounded-2xl overflow-hidden border border-black/5">
            {realEstateServices.map((service, index) => (
              <div key={index} className="group bg-white hover:bg-[#f5f5f7] transition-colors p-6 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                  {service.icon}
                </div>
                <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">{service.title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Sellers */}
      <section className="py-16 sm:py-24 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight">Recommended Sellers</h2>
              <p className="text-[#6e6e73] text-sm mt-1">Trusted sustainable property developers and agents</p>
            </div>
            <div className="hidden sm:flex gap-2">
              <button className="p-2 border border-black/10 rounded-lg hover:bg-black/5 transition-colors">
                <ChevronLeft className="w-4 h-4 text-[#1d1d1f]" />
              </button>
              <button className="p-2 border border-black/10 rounded-lg hover:bg-black/5 transition-colors">
                <ChevronRight className="w-4 h-4 text-[#1d1d1f]" />
              </button>
            </div>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-2">
            {recommendedSellers.map((seller, index) => (
              <div key={index} className="flex-shrink-0 text-center w-24">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg">
                  {seller.name.charAt(0)}
                </div>
                <h3 className="font-medium text-[#1d1d1f] text-sm truncate">{seller.name}</h3>
                <p className="text-xs text-[#6e6e73] truncate">{seller.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Articles */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight">News & Articles</h2>
              <p className="text-[#6e6e73] text-sm mt-1">Latest insights on sustainable real estate</p>
            </div>
            <div className="hidden sm:flex gap-2">
              <button className="p-2 border border-black/10 rounded-lg hover:bg-black/5 transition-colors">
                <ChevronLeft className="w-4 h-4 text-[#1d1d1f]" />
              </button>
              <button className="p-2 border border-black/10 rounded-lg hover:bg-black/5 transition-colors">
                <ChevronRight className="w-4 h-4 text-[#1d1d1f]" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {newsArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden border border-black/5 hover:shadow-xl transition-shadow min-w-0">
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                <div className="p-5 sm:p-6">
                  <h3 className="text-base font-semibold text-[#1d1d1f] mb-2">{article.title}</h3>
                  <p className="text-sm text-[#6e6e73] mb-4">{article.date}</p>
                  <button className="inline-flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Details Modal */}
      {isModalOpen && selectedProperty && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-black/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" ref={propertyModalRef}>
            <div className="relative">
              <div className="p-6 sm:p-8 border-b border-black/5 relative">
                <button
                  onClick={() => { setSelectedProperty(null); setIsModalOpen(false); }}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 bg-black/5 hover:bg-black/10 rounded-full flex items-center justify-center text-[#1d1d1f] transition-colors"
                >
                  ✕
                </button>

                <div className="flex items-center gap-4">
                  <img
                    src={selectedProperty?.image || ''}
                    alt={selectedProperty?.title || ''}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] truncate">{selectedProperty?.title || ''}</h3>
                    <p className="text-[#6e6e73] text-sm sm:text-base truncate">{selectedProperty?.type || ''}</p>
                    <p className="text-emerald-600 text-lg sm:text-xl font-semibold">{selectedProperty?.price || ''}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-[#1d1d1f] mb-3 uppercase tracking-wide">Property Details</h4>
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-3 text-[#6e6e73]">
                        <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm truncate">{selectedProperty?.location || 'N/A'}</span>
                      </div>
                      <div className="flex items-center gap-3 text-[#6e6e73]">
                        <Bed className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm">{selectedProperty?.bedrooms || 'N/A'} Bedrooms</span>
                      </div>
                      <div className="flex items-center gap-3 text-[#6e6e73]">
                        <Bath className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm">{selectedProperty?.bathrooms || 'N/A'} Bathrooms</span>
                      </div>
                      <div className="flex items-center gap-3 text-[#6e6e73]">
                        <Square className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm">{selectedProperty?.area || 'N/A'} sq ft</span>
                      </div>
                    </div>
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-[#1d1d1f] mb-3 uppercase tracking-wide">Sustainability Features</h4>
                    <div className="space-y-2">
                      {selectedProperty?.features?.map((feature: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-2 min-w-0">
                          <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full flex-shrink-0"></div>
                          <span className="text-[#6e6e73] text-sm truncate">{feature}</span>
                        </div>
                      ))}
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

      <Footer />
    </div>
  );
};

export default EcoProps;
