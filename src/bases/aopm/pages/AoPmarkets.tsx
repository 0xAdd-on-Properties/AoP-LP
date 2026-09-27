'use client';

import React, { useState } from 'react';
import { Search, Package, Truck, Shield, Leaf, Zap, Droplets, TreePine, Recycle, ArrowRight, Star, Users, Globe, Building, Home, Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';
import StandardNavbar from '../../../components/StandardNavbar';
import useClickOutside from '../../../hooks/useClickOutside';

const AoPmarkets = () => {
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

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
      icon: <Home className="w-5 h-5" />,
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
      icon: <Leaf className="w-5 h-5" />,
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
      icon: <Leaf className="w-5 h-5" />,
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
      icon: <Package className="w-5 h-5" />,
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
      icon: <Building className="w-5 h-5" />,
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
      icon: <Droplets className="w-5 h-5" />,
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
      icon: <Zap className="w-5 h-5" />,
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
      icon: <Users className="w-5 h-5" />,
      title: "50,000+",
      description: "Active Users"
    },
    {
      icon: <Package className="w-5 h-5" />,
      title: "75,000+",
      description: "Products Listed"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "500+",
      description: "Cities Covered"
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "4.8/5",
      description: "Average Rating"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navbar */}
      <StandardNavbar />

      {/* Header */}
      <header className="bg-[#f5f5f7] pt-28 sm:pt-32 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-8">
            <p className="text-sm font-medium text-emerald-600 mb-3">AoP Markets</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1d1d1f] leading-[1.05] mb-4">
              Discover all <span className="text-emerald-600">marketplaces</span>
            </h1>
            <p className="text-base sm:text-lg text-[#6e6e73] leading-relaxed">
              Access every AddonProp marketplace from one place — properties, materials,
              furnishings, systems, and technologies.
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-white border border-black/10 rounded-2xl p-3 shadow-sm max-w-3xl">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1 min-w-0 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#86868b] w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search across all marketplaces..."
                  className="w-full pl-10 pr-3 py-3 bg-[#f5f5f7] rounded-xl text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:ring-2 focus:ring-emerald-600/40 text-sm"
                />
              </div>
              <div className="relative">
                <select className="appearance-none bg-[#f5f5f7] rounded-xl pl-4 pr-9 py-3 text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-emerald-600/40 text-sm w-full sm:w-44">
                  <option value="">All Categories</option>
                  <option value="properties">Properties</option>
                  <option value="materials">Materials</option>
                  <option value="furnishings">Furnishings</option>
                  <option value="systems">Systems</option>
                  <option value="technologies">Technologies</option>
                </select>
              </div>
              <button className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-xl font-semibold text-white transition-colors text-sm whitespace-nowrap">
                Search All
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-white">
        {/* Stats Section */}
        <section className="py-12 sm:py-16 border-b border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              {marketplaceStats.map((stat, index) => (
                <div key={index} className="min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-3 text-emerald-600">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] mb-1">{stat.title}</div>
                  <div className="text-[#6e6e73] text-sm">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Marketplace Categories */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-12 sm:mb-16">
              <p className="text-sm font-medium text-emerald-600 mb-3">Every Category, One Login</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
                All marketplaces
              </h2>
              <p className="text-lg text-[#6e6e73] leading-relaxed">
                Explore our comprehensive range of sustainable marketplaces, from property
                discovery to materials, furnishings, systems, and technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {marketplaceCategories.map((category, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden border border-black/5 hover:shadow-lg transition-shadow cursor-pointer min-w-0"
                  onClick={() => handleCategoryClick(category)}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                      {category.icon}
                    </div>
                    <h3 className="text-base font-semibold text-[#1d1d1f] mb-1">
                      {category.title}
                    </h3>
                    <p className="text-emerald-600 text-xs font-medium mb-3">{category.items}</p>
                    <p className="text-[#6e6e73] text-sm leading-relaxed mb-5">
                      {category.description}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = category.link;
                      }}
                      className="w-full bg-[#1d1d1f] hover:bg-black px-4 py-2.5 rounded-full font-medium text-white transition-colors text-sm flex items-center justify-center gap-2"
                    >
                      Visit Marketplace
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-24 bg-[#f5f5f7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-black/5 rounded-2xl overflow-hidden border border-black/5">
              <div className="bg-white p-6 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">Carbon-Neutral Delivery</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">All shipments offset with renewable energy</p>
              </div>
              <div className="bg-white p-6 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">Sustainability Verified</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">Every product meets our eco-standards</p>
              </div>
              <div className="bg-white p-6 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                  <Package className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">Bulk Discounts</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">Save more on larger sustainable projects</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
              Ready to start your sustainable journey?
            </h2>
            <p className="text-lg text-[#6e6e73] mb-8 max-w-2xl mx-auto">
              Join thousands of customers building sustainable futures across India
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-[#1d1d1f] hover:bg-black px-6 py-3 rounded-full font-medium text-white transition-colors text-sm">
                Browse All Marketplaces
              </button>
              <button className="border border-black/10 hover:bg-black/5 px-6 py-3 rounded-full font-medium text-[#1d1d1f] transition-colors text-sm">
                Become a Vendor
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1d1d1f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">AoPM — AddonProp Markets</h2>
            <p className="text-white/60 mb-6">
              Your one-stop destination for all sustainable marketplaces. From properties to
              materials, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 pt-10 border-t border-white/10">
            <div className="min-w-0">
              <h3 className="font-semibold mb-3 text-sm">Company</h3>
              <div className="space-y-2 text-sm">
                {['Careers', 'About Us', 'Our Team', 'Terms', 'Refund Policy', 'Privacy Policy', 'Contact Us'].map((link) => (
                  <a key={link} href="#" className="block text-white/60 hover:text-white transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="min-w-0">
              <h3 className="font-semibold mb-3 text-sm">Marketplaces</h3>
              <div className="space-y-2 text-sm">
                {['Properties', 'Materials', 'Furnishings', 'Systems', 'Technologies'].map((link) => (
                  <a key={link} href="#" className="block text-white/60 hover:text-white transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="min-w-0">
              <h3 className="font-semibold mb-3 text-sm">Explore</h3>
              <div className="space-y-2 text-sm">
                {['News', 'Loans', 'Rental', 'Investment'].map((link) => (
                  <a key={link} href="#" className="block text-white/60 hover:text-white transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="min-w-0">
              <h3 className="font-semibold mb-3 text-sm">Mobile App</h3>
              <div className="space-y-2 text-sm">
                <p className="text-white/60">Download our mobile app for better experience</p>
                <div className="flex gap-2 mb-4">
                  <div className="w-20 h-8 bg-white/10 rounded flex items-center justify-center">
                    <span className="text-xs">App Store</span>
                  </div>
                  <div className="w-20 h-8 bg-white/10 rounded flex items-center justify-center">
                    <span className="text-xs">Play Store</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-white/60 hover:text-white transition-colors">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-white/50 text-sm">
              © 2025 AddonProp Markets. All rights reserved. Built with love by{' '}
              <a href="https://studio.sted.space" className="text-white/70 hover:text-white transition-colors underline">
                studio.sted.space
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Category Details Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-black/10 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" ref={categoryModalRef}>
            <div className="relative">
              <div className="h-44 overflow-hidden rounded-t-3xl relative">
                <img
                  src={selectedCategory.image}
                  alt={selectedCategory.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#1d1d1f] hover:bg-white transition-all"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                    {selectedCategory.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1d1d1f]">{selectedCategory.title}</h3>
                    <p className="text-emerald-600 font-medium text-sm">{selectedCategory.items}</p>
                  </div>
                </div>

                <p className="text-[#1d1d1f] text-base mb-8">{selectedCategory.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-[#1d1d1f] mb-3 uppercase tracking-wide">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedCategory.features.map((feature, idx) => (
                        <li key={idx} className="text-[#6e6e73] text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-[#1d1d1f] mb-3 uppercase tracking-wide">Process</h4>
                    <p className="text-[#6e6e73] text-sm leading-relaxed">{selectedCategory.process}</p>
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-[#1d1d1f] mb-3 uppercase tracking-wide">Benefits</h4>
                    <p className="text-[#6e6e73] text-sm leading-relaxed">{selectedCategory.benefits}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => window.location.href = selectedCategory.link}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-full font-medium text-white transition-colors text-sm"
                  >
                    Visit Marketplace
                  </button>
                  <button className="flex-1 border border-black/10 hover:bg-black/5 px-6 py-3 rounded-full font-medium text-[#1d1d1f] transition-colors text-sm">
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
