import React, { useState } from 'react';
import { Search, Package, Truck, Shield, Leaf, Zap, Droplets, TreePine, Recycle, ArrowRight, Star, Users, Globe, Building, Home, Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';
import StandardNavbar from '../../../components/StandardNavbar';
import useClickOutside from '../../../hooks/useClickOutside';

const AoPmarkets = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categoryModalRef = useClickOutside(() => {
    setSelectedCategory(null);
  });

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const closeModal = () => {
    setSelectedCategory(null);
  };

  const marketplaceCategories = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Property Marketplace",
      description: "Discover and buy sustainable properties across India",
      items: "15,000+ properties",
      gradient: "from-slate-600 to-slate-700",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "/aop",
      features: ["Virtual Tours", "Drone Surveys", "Sustainability Ratings", "Price Predictions"],
      process: "Browse → Schedule Visit → Get Financing → Complete Purchase",
      benefits: "AI-powered matching, verified sustainable properties, end-to-end support"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable Properties",
      description: "Earthships, Mandala Homes, Eco Communes, and Smart Apartments",
      items: "8,500+ eco-properties",
      gradient: "from-emerald-600 to-green-700",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "/ecoprops",
      features: ["Eco-Friendly Design", "Renewable Energy", "Natural Materials", "Community Living"],
      process: "Explore → Visit → Choose → Move In",
      benefits: "Sustainable living, reduced carbon footprint, community support"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainify Market",
      description: "Main marketplace hub with all sustainable categories",
      items: "50,000+ products",
      gradient: "from-green-500 to-emerald-500",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "/sustainify-market",
      features: ["Category Browsing", "Product Discovery", "Vendor Network", "Quality Assurance"],
      process: "Explore → Compare → Purchase → Track Delivery",
      benefits: "One-stop shop for all sustainable living needs"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Materials Marketplace",
      description: "Eco-friendly building materials from bamboo to recycled steel",
      items: "2,400+ products",
      gradient: "from-teal-500 to-cyan-500",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "/materials-marketplace",
      features: ["Carbon Footprint Tracking", "Quality Certifications", "Bulk Pricing", "Local Sourcing"],
      process: "Select Materials → Get Quote → Quality Check → Delivery",
      benefits: "Reduced environmental impact, cost savings, quality assurance"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Furnishings Marketplace",
      description: "Sustainable furniture and home decor items",
      items: "1,800+ products",
      gradient: "from-amber-500 to-yellow-600",
      image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "/furnishings-marketplace",
      features: ["Eco Materials", "Handcrafted Items", "Custom Design", "Fair Trade"],
      process: "Browse → Customize → Order → Delivery",
      benefits: "Unique designs, sustainable materials, supporting artisans"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Sustainable Technologies",
      description: "Water systems, waste management, and green tech",
      items: "1,200+ technologies",
      gradient: "from-blue-500 to-cyan-500",
      image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "/sustainable-technologies-marketplace",
      features: ["Water Quality Testing", "Custom Solutions", "Maintenance Support", "Smart Monitoring"],
      process: "Technology Assessment → Solution Design → Implementation → Support",
      benefits: "Water security, cost savings, sustainable technology adoption"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Sustainable Systems",
      description: "Renewable energy and smart home systems",
      items: "850+ systems",
      gradient: "from-amber-600 to-orange-700",
      image: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "/sustainable-systems-marketplace",
      features: ["Energy Audit", "Custom Design", "Installation Support", "Monitoring Systems"],
      process: "Site Assessment → System Design → Installation → Monitoring",
      benefits: "Energy independence, reduced bills, carbon footprint reduction"
    }
  ];

  const marketplaceStats = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "50,000+",
      description: "Active Users"
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "75,000+",
      description: "Products Listed"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "500+",
      description: "Cities Covered"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "4.8/5",
      description: "Average Rating"
    }
  ];

  return (
    <div className="min-h-screen bg-white" style={{ minHeight: '100vh' }}>
      {/* Sticky Navbar */}
      <StandardNavbar />
      
      {/* Header */}
      <header className="bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 text-white py-16 relative overflow-hidden pt-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-gray-400 to-slate-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-slate-400 to-gray-400 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-6">
              <Package className="w-5 h-5 text-gray-300" />
              <span className="text-gray-200 font-medium">AoP Markets - All Marketplaces</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-300 via-slate-200 to-gray-300 bg-clip-text text-transparent">
                Discover All
              </span>
              <br />
              <span className="text-white">Marketplaces</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Access all our marketplaces from one place - properties, materials, furnishings, systems, and technologies
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search across all marketplaces..."
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/20"
                    />
                  </div>
                </div>
                <div className="lg:w-48">
                  <select className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/20">
                    <option value="" className="bg-slate-800">All Categories</option>
                    <option value="properties" className="bg-slate-800">Properties</option>
                    <option value="materials" className="bg-slate-800">Materials</option>
                    <option value="furnishings" className="bg-slate-800">Furnishings</option>
                    <option value="systems" className="bg-slate-800">Systems</option>
                    <option value="technologies" className="bg-slate-800">Technologies</option>
                  </select>
                </div>
                <button className="bg-gradient-to-r from-gray-700 to-slate-800 hover:from-gray-600 hover:to-slate-700 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg shadow-gray-500/25">
                  Search All
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-gradient-to-br from-slate-50 via-gray-50 to-slate-50">
        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {marketplaceStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-slate-200 rounded-xl flex items-center justify-center mx-auto mb-4 text-slate-700 shadow-lg">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-slate-800 mb-2">{stat.title}</div>
                  <div className="text-slate-600">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Marketplace Categories */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-slate-700 to-gray-600 bg-clip-text text-transparent mb-4">
                All Marketplaces
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Explore our comprehensive range of sustainable marketplaces
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {marketplaceCategories.map((category, index) => (
                <div 
                  key={index}
                  className={`group relative glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer mx-auto h-80 ${
                    index === 6 ? 'md:col-start-2' : ''
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-20">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>

                  <div className="relative p-6 bg-white/95 backdrop-blur-sm border border-white/20 h-full flex flex-col">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center mb-4 text-white shadow-lg`}>
                      {category.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-slate-600 text-sm font-medium mb-3">{category.items}</p>
                      <p className="text-slate-700 text-sm leading-relaxed mb-4">
                        {category.description}
                      </p>
                    </div>
                    
                    {/* CTA Button */}
                    <button 
                      onClick={() => window.location.href = category.link}
                      className={`w-full bg-gradient-to-r ${category.gradient} hover:opacity-90 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg mt-auto`}
                    >
                      Visit Marketplace
                    </button>
                  </div>

                  {/* Hover Glow */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl`}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gradient-to-br from-gray-100 to-slate-100">
          <div className="container mx-auto px-6">
            <div className="bg-white/95 backdrop-blur-md border border-gray-200 rounded-3xl p-8 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-200 to-gray-300 rounded-xl flex items-center justify-center text-slate-700 flex-shrink-0 shadow-md">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">Carbon-Neutral Delivery</h4>
                    <p className="text-slate-600 text-sm">All shipments offset with renewable energy</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-200 to-gray-300 rounded-xl flex items-center justify-center text-slate-700 flex-shrink-0 shadow-md">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">Sustainability Verified</h4>
                    <p className="text-slate-600 text-sm">Every product meets our eco-standards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-200 to-gray-300 rounded-xl flex items-center justify-center text-slate-700 flex-shrink-0 shadow-md">
                    <Package className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">Bulk Discounts</h4>
                    <p className="text-slate-600 text-sm">Save more on larger sustainable projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
              Ready to Start Your Sustainable Journey?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Join thousands of customers building sustainable futures across India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-slate-800 to-gray-900 hover:from-slate-700 hover:to-gray-800 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg shadow-slate-500/25">
                Browse All Marketplaces
              </button>
              <button className="bg-white hover:bg-gray-50 border border-gray-300 px-8 py-4 rounded-xl font-semibold text-slate-800 transition-all duration-300 shadow-md">
                Become a Vendor
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">AoPM - AddonProp Markets</h2>
            <p className="text-gray-300 mb-6">
              Your one-stop destination for all sustainable marketplaces. From properties to materials, we've got you covered.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="bg-black/40">
          <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
              <div>
                <h3 className="font-semibold mb-3">Company</h3>
                <div className="space-y-2 text-sm">
                  {['Careers', 'About Us', 'Our Team', 'Terms', 'Refund Policy', 'Privacy Policy', 'Contact Us'].map((link) => (
                    <a key={link} href="#" className="block text-gray-300 hover:text-white transition-colors">
                      {link}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Marketplaces</h3>
                <div className="space-y-2 text-sm">
                  {['Properties', 'Materials', 'Furnishings', 'Systems', 'Technologies'].map((link) => (
                    <a key={link} href="#" className="block text-gray-300 hover:text-white transition-colors">
                      {link}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Explore</h3>
                <div className="space-y-2 text-sm">
                  {['News', 'Loans', 'Rental', 'Investment'].map((link) => (
                    <a key={link} href="#" className="block text-gray-300 hover:text-white transition-colors">
                      {link}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Mobile App</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-300">Download our mobile app for better experience</p>
                  <div className="flex space-x-2 mb-4">
                    <div className="w-20 h-8 bg-white/20 rounded flex items-center justify-center">
                      <span className="text-xs">App Store</span>
                    </div>
                    <div className="w-20 h-8 bg-white/20 rounded flex items-center justify-center">
                      <span className="text-xs">Play Store</span>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="hover:text-gray-200 transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-gray-200 transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-gray-200 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-gray-200 transition-colors">
                      <Youtube className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-gray-200 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-600 text-center">
              <p className="text-gray-300 text-sm">
                © 2025 AddonProp Markets. All rights reserved. Built with love by{' '}
                <a href="https://studio.sted.space" className="text-gray-200 hover:text-white transition-colors underline">
                  studio.sted.space
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Category Details Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 border border-white/20 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" ref={categoryModalRef}>
            <div className="relative">
              {/* Header Image */}
              <div className="h-48 overflow-hidden rounded-t-3xl relative">
                <img 
                  src={selectedCategory.image} 
                  alt={selectedCategory.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent"></div>
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
                >
                  ✕
                </button>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-200 to-gray-300 rounded-xl flex items-center justify-center text-slate-700 shadow-md">
                    {selectedCategory.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedCategory.title}</h3>
                    <p className="text-gray-300 font-medium">{selectedCategory.items}</p>
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-8">{selectedCategory.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedCategory.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Process</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{selectedCategory.process}</p>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Benefits</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{selectedCategory.benefits}</p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="flex-1 bg-gradient-to-r from-slate-700 to-gray-800 hover:from-slate-600 hover:to-gray-700 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300">
                    Visit Marketplace
                  </button>
                  <button className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AoPmarkets;
