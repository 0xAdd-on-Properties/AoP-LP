import React, { useState } from 'react';
import { Search, Heart, MapPin, Bed, Bath, Square, ChevronLeft, ChevronRight, Leaf, Home, Building, TreePine, Zap, Recycle, Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';
import StandardNavbar from '../../../components/StandardNavbar';
import useClickOutside from '../../../hooks/useClickOutside';

const EcoProps = () => {
  const [activeTab, setActiveTab] = useState('BUY');
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

  const ecoPropertyCategories = [
    'All EcoProps', 'Earthships', 'Mandala Homes', 'Eco Communes', 'Smart Apartments', 'Tiny Homes', 'Off-Grid Homes', 'PG/Co-Living'
  ];

  const ecoProperties = [
    {
      id: 1,
      title: "Auroville Earthship",
      type: "Earthship",
      location: "Auroville, Tamil Nadu",
      price: "₹45 Lakhs",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
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
      title: "Goa Mandala Villa",
      type: "Mandala Home",
      location: "Anjuna, Goa",
      price: "₹65 Lakhs",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
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
      title: "Kerala Eco Commune",
      type: "Eco Commune",
      location: "Wayanad, Kerala",
      price: "₹85 Lakhs",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800",
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
      title: "Himachal Smart Home",
      type: "Smart Apartment",
      location: "Shimla, Himachal Pradesh",
      price: "₹55 Lakhs",
      image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800",
      bedrooms: 3,
      bathrooms: 2,
      area: "1400 sq ft",
      features: ["Smart Automation", "Energy Monitoring", "Water Recycling", "Green Roof"],
      sustainability: "Net Zero",
      rating: 4.7
    },
    {
      id: 5,
      title: "Pondicherry Tiny Home",
      type: "Tiny Home",
      location: "Pondicherry, Tamil Nadu",
      price: "₹25 Lakhs",
      image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800",
      bedrooms: 1,
      bathrooms: 1,
      area: "600 sq ft",
      features: ["Minimalist Design", "Solar Power", "Composting Toilet", "Vertical Garden"],
      sustainability: "Minimal Footprint",
      rating: 4.6
    },
    {
      id: 6,
      title: "Rajasthan Off-Grid Villa",
      type: "Off-Grid Home",
      location: "Jodhpur, Rajasthan",
      price: "₹75 Lakhs",
      image: "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=800",
      bedrooms: 4,
      bathrooms: 3,
      area: "2000 sq ft",
      features: ["Complete Independence", "Wind Power", "Water Wells", "Desert Garden"],
      sustainability: "Fully Sustainable",
      rating: 4.8
    }
  ];

  const ecoPropertyTypes = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Earthships",
      description: "Self-sufficient homes built with natural and recycled materials",
      count: "25+ Properties",
      link: "/earthships"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Mandala Homes",
      description: "Sacred geometry-inspired sustainable living spaces",
      count: "18+ Properties",
      link: "/mandala-homes"
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Eco Communes",
      description: "Community-based sustainable living communities",
      count: "12+ Properties",
      link: "/eco-communes"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Smart Apartments",
      description: "Technology-integrated sustainable apartment living",
      count: "35+ Properties",
      link: "/smart-apartments"
    }
  ];

  return (
    <div className="min-h-screen bg-white" style={{ minHeight: '100vh' }}>
      {/* Sticky Navbar */}
      <StandardNavbar />
      
      {/* Header with Search */}
      <header className="bg-gradient-to-br from-slate-900 via-emerald-900 to-blue-900 text-white py-16 relative overflow-hidden pt-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 mb-6">
              <Leaf className="w-5 h-5 text-emerald-300" />
              <span className="text-emerald-200 font-medium">EcoProps - Sustainable Properties</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-300 via-green-300 to-teal-300 bg-clip-text text-transparent">
                Discover Your Perfect
              </span>
              <br />
              <span className="text-white">Eco-Friendly Home</span>
            </h1>
            
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
              Find sustainable properties across India that align with your environmental values and lifestyle
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="glass-card rounded-2xl p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search by location, property type, or features..."
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
                    />
                  </div>
                </div>
                <div className="lg:w-48">
                  <select className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20">
                    <option value="" className="bg-slate-800">Property Type</option>
                    <option value="earthships" className="bg-slate-800">Earthships</option>
                    <option value="mandala" className="bg-slate-800">Mandala Homes</option>
                    <option value="communes" className="bg-slate-800">Eco Communes</option>
                    <option value="smart" className="bg-slate-800">Smart Apartments</option>
                  </select>
                </div>
                <button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/25">
                  Search Properties
                </button>
              </div>
            </div>
          </div>

          {/* Popular Localities */}
          <div className="flex flex-wrap justify-center gap-3">
            {popularLocalities.map((locality) => (
              <button
                key={locality}
                className="glass-card px-6 py-3 rounded-full text-white hover:bg-white/20 transition-all duration-300"
              >
                {locality}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Normalizing Earthships Section - Right Below Hero */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white to-emerald-300 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-300 to-green-300 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 mb-6">
                <Leaf className="w-5 h-5 text-emerald-200" />
                <span className="text-emerald-100 font-medium">Sustainable Living Revolution</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Normalizing <span className="bg-gradient-to-r from-emerald-200 to-green-200 bg-clip-text text-transparent">Earthships</span> and <span className="bg-gradient-to-r from-teal-200 to-cyan-200 bg-clip-text text-transparent">Sustainable Constructions</span>
              </h2>
              
              <p className="text-lg text-emerald-100 mb-8 leading-relaxed">
                We are revolutionizing sustainable living across India by promoting eco-friendly construction practices. 
                Our platform connects you with properties that prioritize environmental responsibility, modern comfort, 
                and a greener future for generations to come.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-3xl">🌱</span>
                  </div>
                  <h3 className="font-semibold text-white mb-1">Sustainable Community</h3>
                  <p className="text-sm text-emerald-200">Eco-friendly living spaces</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-3xl">🏠</span>
                  </div>
                  <h3 className="font-semibold text-white mb-1">Green Architecture</h3>
                  <p className="text-sm text-emerald-200">Innovative construction methods</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h3 className="font-semibold text-white mb-1">Clean Energy</h3>
                  <p className="text-sm text-emerald-200">Renewable power solutions</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105">
                  Explore EcoProps
                </button>
                <button className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-500/25">
                  Learn More
                </button>
              </div>
            </div>

            <div className="text-center lg:text-right">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-emerald-400 to-green-500 rounded-3xl mx-auto lg:mx-0 flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">🏗️</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Earthship Construction</h3>
                    <p className="text-emerald-100">Sustainable Building Solutions</p>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">♻️</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">🌿</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Earthships Focus Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-4">Sustainable Property Types</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Explore different types of eco-friendly properties designed for sustainable living</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <Home className="w-8 h-8" />, 
                title: "Earthships", 
                description: "Self-sufficient homes built with natural and recycled materials", 
                count: "25+ Properties",
                link: "/earthships"
              },
              { 
                icon: <Building className="w-8 h-8" />, 
                title: "Mandala Homes", 
                description: "Sacred geometry-inspired sustainable living spaces", 
                count: "18+ Properties",
                link: "/mandala-homes"
              },
              { 
                icon: <TreePine className="w-8 h-8" />, 
                title: "Eco Communes", 
                description: "Community-based sustainable living communities", 
                count: "12+ Properties",
                link: "/eco-communes"
              },
              { 
                icon: <Leaf className="w-8 h-8" />, 
                title: "Smart Apartments", 
                description: "Technology-integrated sustainable apartment living", 
                count: "35+ Properties",
                link: "/smart-apartments"
              }
            ].map((propertyType, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => window.location.href = propertyType.link}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center mb-4 text-white">
                  {propertyType.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{propertyType.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{propertyType.description}</p>
                <div className="text-emerald-600 font-semibold">{propertyType.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">

        {/* Featured EcoProps */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                  Featured EcoProps
                </h2>
                <p className="text-lg text-slate-600">
                  Handpicked sustainable properties for conscious living
                </p>
              </div>
              <button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/25">
                View All Properties
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ecoProperties.map((property) => (
                <div key={property.id} className="glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer" onClick={() => window.location.href = property.link || '#'}>
                  <div className="relative h-48">
                    <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
                    <button className="absolute top-4 right-4 p-2 glass-card rounded-full hover:bg-white/30 transition-all duration-300">
                      <Heart className="w-5 h-5 text-white" />
                    </button>
                    <div className="absolute top-4 left-4 bg-emerald-500/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white text-sm font-medium">{property.sustainability}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-white text-sm font-medium">{property.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-white/90 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-slate-800">{property.title}</h3>
                      <span className="text-emerald-600 font-medium">{property.type}</span>
                    </div>
                    
                    <div className="flex items-center text-slate-600 mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-slate-600 text-sm mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Bed className="w-4 h-4 mr-1" />
                          <span>{property.bedrooms}</span>
                        </div>
                        <div className="flex items-center">
                          <Bath className="w-4 h-4 mr-1" />
                          <span>{property.bathrooms}</span>
                        </div>
                        <div className="flex items-center">
                          <Square className="w-4 h-4 mr-1" />
                          <span>{property.area}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-slate-800">{property.price}</div>
                      <button 
                        onClick={() => window.location.href = `/property/${property.id}`}
                        className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300 text-sm"
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
        <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">In Spotlight</h2>
                <p className="text-slate-600">Featured sustainable property developments</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Spotlight Property" className="w-full h-64 md:h-full object-cover" />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center mr-4">
                      <TreePine className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">EcoVillage Developers</h3>
                      <p className="text-slate-600">Sustainable Community Living</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-2xl font-bold text-slate-800 mb-2">Auroville Eco Community</h4>
                    <p className="text-slate-600 mb-4">Auroville, Tamil Nadu</p>
                    <div className="text-3xl font-bold text-emerald-600 mb-2">₹2.5 Cr - 4.8 Cr</div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-emerald-500 to-green-500 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <p className="text-sm text-slate-600 mt-2">75% Sold</p>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/25">
                    View Project Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects in Focus */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Projects in Focus</h2>
                <p className="text-slate-600">Latest sustainable development projects</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Green Valley Apartments", price: "₹25L - 45L", image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400" },
                { title: "Eco Heights Residency", price: "₹30L - 50L", image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400" },
                { title: "Sustainable Living Complex", price: "₹35L - 55L", image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400" }
              ].map((project, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{project.title}</h3>
                    <div className="text-xl font-bold text-emerald-600 mb-4">{project.price}</div>
                    <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white py-2 rounded-lg font-semibold transition-all duration-300">
                      View Project
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recently Added */}
        <section className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Recently Added</h2>
                <p className="text-slate-600">Latest eco-properties added to our platform</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { title: "Greenway Eco Apartments", price: "₹28L", image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400" },
                { title: "Sunrise Earthships", price: "₹40L", image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400" },
                { title: "Ocean View Gardens", price: "₹35L", image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400" },
                { title: "Newlands Eco Residency", price: "₹65L", image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400" }
              ].map((property, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <img src={property.image} alt={property.title} className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-slate-800 mb-1 text-sm">{property.title}</h3>
                    <div className="text-lg font-bold text-emerald-600 mb-3">{property.price}</div>
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/25">
                      Contact
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Everything You Need in Real Estate */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent mb-4">Everything You Need in Real Estate</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Comprehensive services for all your sustainable property needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <Home className="w-8 h-8" />, title: "Property Valuation", description: "Accurate sustainable property assessments" },
                { icon: <Building className="w-8 h-8" />, title: "Legal Assistance", description: "Complete legal support for transactions" },
                { icon: <MapPin className="w-8 h-8" />, title: "Location Analysis", description: "Comprehensive area and market analysis" },
                { icon: <Zap className="w-8 h-8" />, title: "Energy Audits", description: "Sustainability and efficiency assessments" },
                { icon: <TreePine className="w-8 h-8" />, title: "Eco Certifications", description: "Green building certifications and compliance" },
                { icon: <Recycle className="w-8 h-8" />, title: "Waste Management", description: "Sustainable waste management solutions" }
              ].map((service, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recommended Sellers */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-emerald-50">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Recommended Sellers</h2>
                <p className="text-slate-600">Trusted sustainable property developers and agents</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="flex space-x-6 overflow-x-auto pb-4">
              {[
                { name: "Ravi Kumar", company: "EcoVillage Developers" },
                { name: "Suresh", company: "Green Homes India" },
                { name: "Anil", company: "Sustainable Living Co." },
                { name: "John", company: "Eco Properties" },
                { name: "Raju", company: "Green Builders" }
              ].map((seller, index) => (
                <div key={index} className="flex-shrink-0 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-xl">
                    {seller.name.charAt(0)}
                  </div>
                  <h3 className="font-semibold text-slate-800">{seller.name}</h3>
                  <p className="text-sm text-slate-600">{seller.company}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* News & Articles */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">News & Articles</h2>
                <p className="text-slate-600">Latest insights on sustainable real estate</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Vizag's sustainable real estate market trends", date: "February 14, 2024", image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400" },
                { title: "Luxury eco-apartments gaining popularity", date: "February 14, 2024", image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400" },
                { title: "Sustainable living communities on the rise", date: "February 14, 2024", image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400" }
              ].map((article, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{article.title}</h3>
                    <p className="text-sm text-slate-600 mb-4">{article.date}</p>
                    <button className="text-emerald-600 hover:text-emerald-700 font-semibold">
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Property Details Modal */}
      {isModalOpen && selectedProperty && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" ref={propertyModalRef}>
            <div className="relative">
              {/* Header */}
              <div className="bg-gradient-to-r from-slate-700 to-slate-800 p-8 rounded-t-3xl relative">
                <button 
                  onClick={() => {setSelectedProperty(null); setIsModalOpen(false);}}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
                >
                  ✕
                </button>
                
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={selectedProperty?.image || ''} 
                    alt={selectedProperty?.title || ''}
                    className="w-24 h-24 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="text-3xl font-bold text-white">{selectedProperty?.title || ''}</h3>
                    <p className="text-gray-300 text-lg">{selectedProperty?.type || ''}</p>
                    <p className="text-emerald-300 text-xl font-semibold">{selectedProperty?.price || ''}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Property Details</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-gray-300">
                        <MapPin className="w-4 h-4 text-emerald-400" />
                        <span>{selectedProperty?.location || 'N/A'}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-300">
                        <Bed className="w-4 h-4 text-emerald-400" />
                        <span>{selectedProperty?.bedrooms || 'N/A'} Bedrooms</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-300">
                        <Bath className="w-4 h-4 text-emerald-400" />
                        <span>{selectedProperty?.bathrooms || 'N/A'} Bathrooms</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-300">
                        <Square className="w-4 h-4 text-emerald-400" />
                        <span>{selectedProperty?.area || 'N/A'} sq ft</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Sustainability Features</h4>
                    <div className="space-y-2">
                      {selectedProperty?.features?.map((feature: any, idx: number) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <button className="flex-1 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg shadow-emerald-500/25">
                    Schedule Site Visit
                  </button>
                  <button className="flex-1 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg shadow-teal-500/25">
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

      {/* Footer */}
      <footer className="bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">AoPEco - EcoProps</h2>
            <p className="text-emerald-100 mb-6">
              Your trusted partner in sustainable real estate. From eco-friendly homes to green living, we've got you covered.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="bg-black/30">
          <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold mb-3">Company</h3>
                <div className="space-y-2 text-sm">
                  {['Careers', 'About Us', 'Our Team', 'Terms', 'Refund Policy', 'Privacy Policy', 'Contact Us'].map((link) => (
                    <a key={link} href="#" className="block text-emerald-100 hover:text-white transition-colors">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Partner With Us</h3>
                <div className="space-y-2 text-sm">
                  {['Developers', 'Individual Space', 'Banks', 'Architects'].map((link) => (
                    <a key={link} href="#" className="block text-emerald-100 hover:text-white transition-colors">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Explore</h3>
                <div className="space-y-2 text-sm">
                  {['News', 'Loans', 'Rental', 'Investment'].map((link) => (
                    <a key={link} href="#" className="block text-emerald-100 hover:text-white transition-colors">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Mobile App</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-green-100">Download our mobile app for better experience</p>
                  <div className="flex space-x-2 mb-4">
                    <div className="w-20 h-8 bg-white/20 rounded flex items-center justify-center">
                      <span className="text-xs">App Store</span>
                    </div>
                    <div className="w-20 h-8 bg-white/20 rounded flex items-center justify-center">
                      <span className="text-xs">Play Store</span>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="hover:text-emerald-200 transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-emerald-200 transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-emerald-200 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-emerald-200 transition-colors">
                      <Youtube className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-emerald-200 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/20 text-center">
              <p className="text-emerald-100 text-sm">
                © 2025 AddonProp. All rights reserved. Built with love by{' '}
                <a href="https://studio.sted.space" className="text-emerald-200 hover:text-white transition-colors underline">
                  studio.sted.space
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EcoProps;
