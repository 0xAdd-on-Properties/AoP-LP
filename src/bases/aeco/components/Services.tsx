'use client';

import React from 'react';
import { useState } from 'react';
import { Home, Building, Users, TreePine, Wrench, Coins, FileText, Shield } from 'lucide-react';
import useClickOutside from '../../../hooks/useClickOutside';

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  const serviceModalRef = useClickOutside(() => {
    setSelectedService(null);
  });

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const closeServiceModal = () => {
    setSelectedService(null);
  };

  const residentServices = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "Find Sustainable Homes",
      description: "Discover eco-friendly properties that match your lifestyle and budget",
      details: {
        overview: "Comprehensive property search service helping you find the perfect sustainable home that aligns with your values and budget.",
        services: ["AI-powered property matching", "Sustainability assessment", "Virtual property tours", "Neighborhood analysis", "Financial planning assistance"],
        benefits: "Find your dream sustainable home 5x faster with our expert guidance and AI-powered recommendations.",
        process: "Consultation → Preference Analysis → Property Curation → Site Visits → Purchase Support"
      }
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Make Homes Sustainable",
      description: "Transform your existing property with renewable energy and eco-systems",
      details: {
        overview: "Complete home transformation service that converts conventional properties into sustainable, energy-efficient living spaces.",
        services: ["Energy audit and optimization", "Solar panel installation", "Water harvesting systems", "Waste management setup", "Smart home integration"],
        benefits: "Reduce utility bills by 70% while increasing property value and environmental impact.",
        process: "Home Assessment → Sustainability Plan → System Installation → Optimization → Monitoring"
      }
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Design Perfect Communes",
      description: "Create sustainable communities with shared resources and values",
      details: {
        overview: "Community planning service that helps groups create intentional sustainable communities with shared resources and aligned values.",
        services: ["Community planning", "Shared resource design", "Governance structure", "Sustainable infrastructure", "Social space design"],
        benefits: "Build stronger communities while reducing individual costs and environmental impact through shared resources.",
        process: "Group Formation → Vision Alignment → Master Planning → Infrastructure Development → Community Launch"
      }
    },
    {
      icon: <TreePine className="w-6 h-6" />,
      title: "Farmhouses & Getaways",
      description: "Build your dream sustainable retreat in suburban or rural settings",
      details: {
        overview: "Specialized service for creating sustainable farmhouses and retreat properties that blend luxury with environmental responsibility.",
        services: ["Rural property selection", "Sustainable architecture", "Organic farming setup", "Renewable energy systems", "Eco-tourism planning"],
        benefits: "Create a profitable sustainable retreat that generates income while providing personal sanctuary.",
        process: "Location Scouting → Design Planning → Sustainable Construction → Systems Integration → Operations Setup"
      }
    }
  ];

  const businessServices = [
    {
      icon: <Building className="w-6 h-6" />,
      title: "Apartment Sustainability",
      description: "Convert residential complexes to energy-efficient, sustainable communities",
      details: {
        overview: "Comprehensive apartment complex transformation service that converts traditional buildings into sustainable, energy-efficient communities.",
        services: ["Building energy audit", "Renewable energy installation", "Water management systems", "Waste processing setup", "Community gardens"],
        benefits: "Reduce operational costs by 60% while increasing property value and tenant satisfaction.",
        process: "Complex Assessment → Sustainability Planning → Phased Implementation → System Integration → Performance Monitoring"
      }
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Society Transformation",
      description: "Implement waste management, renewable energy, and green spaces",
      details: {
        overview: "Complete society transformation service that implements sustainable systems across residential communities.",
        services: ["Waste-to-energy systems", "Community solar projects", "Green space development", "Water recycling", "Smart infrastructure"],
        benefits: "Transform societies into self-sufficient communities with reduced maintenance costs and enhanced quality of life.",
        process: "Society Assessment → Resident Engagement → System Design → Implementation → Community Training"
      }
    },
    {
      icon: <Coins className="w-6 h-6" />,
      title: "Asset Tokenization",
      description: "Convert real estate assets into blockchain tokens for better liquidity",
      details: {
        overview: "Blockchain-based asset tokenization service that enables fractional ownership and enhanced liquidity for real estate investments.",
        services: ["Asset valuation", "Legal framework setup", "Smart contract development", "Token creation", "Trading platform integration"],
        benefits: "Unlock property value with fractional ownership, instant liquidity, and global investor access.",
        process: "Asset Evaluation → Legal Compliance → Tokenization → Smart Contracts → Market Launch"
      }
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "NPA Management",
      description: "Sustainable restoration and management of non-performing assets",
      details: {
        overview: "Specialized NPA recovery service that transforms non-performing real estate assets into profitable sustainable properties.",
        services: ["Asset assessment", "Recovery strategy", "Sustainable renovation", "Value enhancement", "Market repositioning"],
        benefits: "Recover asset value while creating sustainable properties that generate long-term returns.",
        process: "Asset Analysis → Recovery Planning → Sustainable Renovation → Value Enhancement → Market Relaunch"
      }
    }
  ];

  const specializations = [
    "Asset Restoration & Renovation", "Property Tokenization & RWAs", "NPA Management & Recovery",
    "Carbon Credit Generation", "Sustainable Tourism Development", "Smart City Consulting",
    "Green Building Certification", "Environmental Impact Assessment", "Community Development",
    "Renewable Energy Integration", "Water Management Systems", "Waste-to-Energy Solutions"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-500/30 mb-6">
            <Users className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-300 font-medium">Our Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent font-black tracking-tight">
              Everything You Need
            </span>
            <br />
            <span className="text-white font-bold">For Sustainable Living</span>
          </h2>
        </div>

        {/* For Residents */}
        <div className="mb-20">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">For Residents of Bharat</h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We can help you find sustainable homes or make your homes sustainable. Come together and we can design 
                the perfect communes for your group, or design that homestay or help you build your getaway suburban 
                sustainable woodhouse or farmhouses.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {residentServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-all duration-300 group cursor-pointer"
                  onClick={() => handleServiceClick(service)}
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 text-emerald-400 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* For Businesses */}
        <div className="mb-20">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">For Businesses</h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We can help you turn your apartments, societies and communities go sustainable. Transform your business 
                properties into profitable, eco-friendly assets that benefit both your bottom line and the environment.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {businessServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-all duration-300 group cursor-pointer"
                  onClick={() => handleServiceClick(service)}
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 text-emerald-400 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-violet-300 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Details Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-slate-800 border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" ref={serviceModalRef}>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center text-emerald-400">
                      {selectedService.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
                      <p className="text-gray-300">{selectedService.description}</p>
                    </div>
                  </div>
                  <button 
                    onClick={closeServiceModal}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
                  >
                    ✕
                  </button>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-white mb-4">Overview</h4>
                  <p className="text-gray-300 text-lg leading-relaxed">{selectedService.details.overview}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Our Services</h4>
                    <ul className="space-y-3">
                      {selectedService.details.services.map((service, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start space-x-3">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Process Flow</h4>
                    <p className="text-gray-300 leading-relaxed mb-6">{selectedService.details.process}</p>
                    
                    <h4 className="text-xl font-semibold text-white mb-4">Key Benefits</h4>
                    <p className="text-gray-300 leading-relaxed">{selectedService.details.benefits}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300">
                    Get Quote
                  </button>
                  <button className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg shadow-green-500/25">
                    Schedule Consultation
                  </button>
                  <button className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/25">
              Get Started Today
            </button>
            <button className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;