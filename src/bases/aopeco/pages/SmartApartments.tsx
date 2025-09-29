import React, { useState } from 'react';
import { Search, Heart, MapPin, Bed, Bath, Square, ChevronLeft, ChevronRight, Leaf, Home, Building, TreePine, Zap, Recycle, Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';
import StandardNavbar from '../../../components/StandardNavbar';
import useClickOutside from '../../../hooks/useClickOutside';

const SmartApartments = () => {
  const [activeTab, setActiveTab] = useState('BUY');
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
      location: "Whitefield, Bangalore",
      price: "₹65 Lakhs",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
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
      location: "Hitec City, Hyderabad",
      price: "₹55 Lakhs",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800",
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
      location: "Koramangala, Bangalore",
      price: "₹75 Lakhs",
      image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800",
      bedrooms: 3,
      bathrooms: 3,
      area: "1600 sq ft",
      features: ["IoT Sensors", "Smart Kitchen", "Automated Parking", "Health Monitoring"],
      sustainability: "Green Building Certified",
      rating: 4.7,
      link: "/smart-apartments"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <StandardNavbar />
      
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 text-white py-12 sm:py-16 relative overflow-hidden pt-24 sm:pt-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                Smart Apartments
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Experience the future of urban living with AI-powered, IoT-integrated smart apartments designed for sustainable and intelligent living.
            </p>
          </div>

          {/* Search Section */}
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-4 sm:p-6 mb-6">
              <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search smart apartments..."
                    className="w-full p-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 text-white placeholder-white/70"
                  />
                </div>
                <div className="flex-1">
                  <select className="w-full p-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 text-white">
                    <option value="" className="bg-slate-800 text-white">All Types</option>
                    <option value="ai-powered" className="bg-slate-800 text-white">AI-Powered</option>
                    <option value="iot-integrated" className="bg-slate-800 text-white">IoT Integrated</option>
                    <option value="energy-efficient" className="bg-slate-800 text-white">Energy Efficient</option>
                  </select>
                </div>
                <button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </button>
              </div>
            </div>

            {/* Popular Localities */}
            <div className="text-center">
              <p className="text-emerald-100 mb-3">Popular Locations:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {popularLocalities.map((locality) => (
                  <button
                    key={locality}
                    className="glass-card hover:bg-white/30 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    {locality}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">
        {/* Property Categories */}
        <div className="border-b border-white/20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex overflow-x-auto py-4 space-x-6">
              {smartApartmentCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg'
                      : 'bg-white/80 text-slate-700 hover:text-emerald-600 hover:bg-white/90 border border-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Smart Apartments */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-emerald-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Featured Smart Apartments</h2>
                <p className="text-slate-600">Discover our hand-picked smart apartments with cutting-edge technology</p>
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {smartApartments.map((property) => (
                <div key={property.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer" onClick={() => handlePropertyClick(property)}>
                  <div className="relative h-48">
                    <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-25 flex items-end p-4">
                      <span className="text-white text-lg font-semibold">{property.price}</span>
                    </div>
                    <button className="absolute top-4 right-4 bg-white/30 backdrop-blur-md rounded-full p-2 text-white hover:text-red-500 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{property.title}</h3>
                    <div className="flex items-center text-slate-600 text-sm mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{property.location}</span>
                    </div>
                    <div className="flex justify-between text-slate-700 text-sm">
                      <div className="flex items-center">
                        <Bed className="w-4 h-4 mr-1" /> {property.bedrooms} Beds
                      </div>
                      <div className="flex items-center">
                        <Bath className="w-4 h-4 mr-1" /> {property.bathrooms} Baths
                      </div>
                      <div className="flex items-center">
                        <Square className="w-4 h-4 mr-1" /> {property.area}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Smart Features Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">Smart Living Features</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Experience the future of urban living with these intelligent features</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Zap className="w-8 h-8" />, title: "AI Home Assistant", description: "Voice-controlled smart home management" },
                { icon: <Home className="w-8 h-8" />, title: "Smart Lighting", description: "Automated lighting with mood settings" },
                { icon: <Recycle className="w-8 h-8" />, title: "Energy Management", description: "Real-time energy monitoring and optimization" },
                { icon: <Building className="w-8 h-8" />, title: "Security Systems", description: "Advanced biometric and IoT security" },
                { icon: <TreePine className="w-8 h-8" />, title: "Air Quality Control", description: "Automated air purification and monitoring" },
                { icon: <Leaf className="w-8 h-8" />, title: "Water Management", description: "Smart water usage and recycling systems" }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center mb-4 text-white mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Property Modal */}
      {isModalOpen && selectedProperty && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div ref={propertyModalRef} className="bg-white rounded-2xl p-6 max-w-2xl w-full shadow-2xl relative">
            <button 
              onClick={() => setIsModalOpen(false)} 
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition-colors"
            >
              ×
            </button>
            <img src={selectedProperty.image} alt={selectedProperty.title} className="w-full h-64 object-cover rounded-xl mb-4" />
            <h3 className="text-3xl font-bold text-slate-800 mb-2">{selectedProperty.title}</h3>
            <div className="flex items-center text-slate-600 text-lg mb-4">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{selectedProperty.location}</span>
            </div>
            <p className="text-slate-700 text-2xl font-semibold mb-4">{selectedProperty.price}</p>
            <div className="grid grid-cols-3 gap-4 text-slate-700 text-base mb-6">
              <div className="flex items-center">
                <Bed className="w-5 h-5 mr-2" /> {selectedProperty.bedrooms} Beds
              </div>
              <div className="flex items-center">
                <Bath className="w-5 h-5 mr-2" /> {selectedProperty.bathrooms} Baths
              </div>
              <div className="flex items-center">
                <Square className="w-5 h-5 mr-2" /> {selectedProperty.area}
              </div>
            </div>
            <p className="text-slate-700 mb-6">
              Experience the future of urban living with this cutting-edge smart apartment featuring AI-powered home automation, 
              IoT integration, and sustainable living solutions.
            </p>
            <div className="space-y-3">
              <button 
                onClick={() => window.location.href = `/property/${selectedProperty.id}`}
                className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg"
              >
                View Property
              </button>
              <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg">
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
