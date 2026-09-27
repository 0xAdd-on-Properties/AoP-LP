'use client';

import React from 'react';
import { useState } from 'react';
import { Package, Truck, Shield, Leaf, Zap, Droplets, TreePine, Recycle, Search } from 'lucide-react';
import useClickOutside from '../../../hooks/useClickOutside';

const Marketplace = () => {
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

  const categories = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Property Marketplace",
      items: "15,000+ properties",
      description: "Discover and buy sustainable properties across India",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400",
      details: {
        features: ["Virtual Tours", "Drone Surveys", "Sustainability Ratings", "Price Predictions"],
        process: "Browse → Schedule Visit → Get Financing → Complete Purchase",
        benefits: "AI-powered matching, verified sustainable properties, end-to-end support"
      }
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Sustainable Materials",
      items: "2,400+ products",
      description: "Eco-friendly building materials from bamboo to recycled steel",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400",
      details: {
        features: ["Carbon Footprint Tracking", "Quality Certifications", "Bulk Pricing", "Local Sourcing"],
        process: "Select Materials → Get Quote → Quality Check → Delivery",
        benefits: "Reduced environmental impact, cost savings, quality assurance"
      }
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Tokenized Assets Marketplace",
      items: "500+ tokenized properties",
      description: "Buy fractional ownership in premium sustainable properties",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400",
      details: {
        features: ["Fractional Ownership", "Blockchain Security", "Instant Liquidity", "Global Access"],
        process: "Browse Tokens → Verify Identity → Purchase Shares → Earn Returns",
        benefits: "Lower entry barriers, diversified portfolio, transparent ownership"
      }
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Renewable Energy",
      items: "850+ systems",
      description: "Solar panels, wind turbines, and energy storage solutions",
      image: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=400",
      details: {
        features: ["Energy Audit", "Custom Design", "Installation Support", "Monitoring Systems"],
        process: "Site Assessment → System Design → Installation → Monitoring",
        benefits: "Energy independence, reduced bills, carbon footprint reduction"
      }
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Water Systems",
      items: "320+ solutions",
      description: "Rainwater harvesting, filtration, and aquaponic systems",
      image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400",
      details: {
        features: ["Water Quality Testing", "Custom Solutions", "Maintenance Support", "Smart Monitoring"],
        process: "Water Audit → System Design → Installation → Maintenance",
        benefits: "Water security, cost savings, sustainable water management"
      }
    },
    {
      icon: <TreePine className="w-6 h-6" />,
      title: "Urban Gardens",
      items: "1,200+ items",
      description: "Vertical gardens, hydroponic systems, and organic supplies",
      image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400",
      details: {
        features: ["Space Planning", "Plant Selection", "Automated Systems", "Organic Supplies"],
        process: "Space Assessment → Garden Design → Setup → Maintenance",
        benefits: "Fresh produce, air purification, stress reduction, food security"
      }
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Smart Home Tech",
      items: "950+ devices",
      description: "IoT sensors, automation systems, and monitoring tools",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400",
      details: {
        features: ["Home Automation", "Energy Monitoring", "Security Systems", "Climate Control"],
        process: "Home Assessment → System Design → Installation → Configuration",
        benefits: "Convenience, energy efficiency, security, remote monitoring"
      }
    },
    {
      icon: <Recycle className="w-6 h-6" />,
      title: "Waste Management",
      items: "180+ systems",
      description: "Composting units, biogas systems, and recycling equipment",
      image: "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=400",
      details: {
        features: ["Waste Audit", "Custom Solutions", "Training Programs", "Monitoring Systems"],
        process: "Waste Assessment → System Design → Installation → Training",
        benefits: "Waste reduction, resource recovery, cost savings, environmental impact"
      }
    }
  ];

  const features = [
    {
      icon: <Truck className="w-5 h-5" />,
      title: "Carbon-Neutral Delivery",
      description: "All shipments offset with renewable energy"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Sustainability Verified",
      description: "Every product meets our eco-standards"
    },
    {
      icon: <Package className="w-5 h-5" />,
      title: "Bulk Discounts",
      description: "Save more on larger sustainable projects"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-sm font-medium text-emerald-600 mb-3">Sustainable Construction Ecosystem</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
            Everything you need, in one marketplace
          </h2>
          <p className="text-lg text-[#6e6e73] leading-relaxed">
            A curated marketplace of eco-friendly materials, renewable energy systems, and
            innovative technologies for your sustainable property journey.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
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
                <p className="text-[#6e6e73] text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl border border-black/5 p-6 sm:p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  {feature.icon}
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-[#1d1d1f] mb-1">{feature.title}</h4>
                  <p className="text-[#6e6e73] text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[#6e6e73] text-sm">
            Join 50,000+ satisfied customers building sustainable futures across India
          </p>
          <div className="flex gap-3 flex-shrink-0">
            <button className="bg-[#1d1d1f] hover:bg-black px-5 py-2.5 rounded-full font-medium text-white transition-colors text-sm">
              Browse all products
            </button>
            <button className="border border-black/10 hover:bg-black/5 px-5 py-2.5 rounded-full font-medium text-[#1d1d1f] transition-colors text-sm">
              Become a vendor
            </button>
          </div>
        </div>

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

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div>
                      <h4 className="text-sm font-semibold text-[#1d1d1f] mb-3 uppercase tracking-wide">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedCategory.details.features.map((feature, idx) => (
                          <li key={idx} className="text-[#6e6e73] text-sm flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-[#1d1d1f] mb-3 uppercase tracking-wide">Process</h4>
                      <p className="text-[#6e6e73] text-sm leading-relaxed">{selectedCategory.details.process}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-[#1d1d1f] mb-3 uppercase tracking-wide">Benefits</h4>
                      <p className="text-[#6e6e73] text-sm leading-relaxed">{selectedCategory.details.benefits}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-full font-medium text-white transition-colors text-sm">
                      Get Started
                    </button>
                    <button className="flex-1 border border-black/10 hover:bg-black/5 px-6 py-3 rounded-full font-medium text-[#1d1d1f] transition-colors text-sm">
                      Schedule Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Marketplace;
