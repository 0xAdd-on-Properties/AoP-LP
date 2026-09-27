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

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-sm font-medium text-emerald-600 mb-3">Our Services</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d1f] tracking-tight">
            Everything you need for sustainable living
          </h2>
        </div>

        {/* For Residents */}
        <div className="mb-16">
          <div className="flex items-baseline justify-between gap-4 mb-6 flex-wrap">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f]">For residents of Bharat</h3>
          </div>
          <p className="text-[#6e6e73] leading-relaxed max-w-3xl mb-8">
            We can help you find sustainable homes or make your homes sustainable. Come together
            and we can design the perfect commune for your group, or help you build that
            suburban sustainable woodhouse or farmhouse.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/5 rounded-2xl overflow-hidden border border-black/5">
            {residentServices.map((service, index) => (
              <div
                key={index}
                className="bg-white hover:bg-[#f5f5f7] transition-colors p-6 cursor-pointer min-w-0"
                onClick={() => handleServiceClick(service)}
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600 [&>svg]:w-5 [&>svg]:h-5">
                  {service.icon}
                </div>
                <h4 className="text-base font-semibold text-[#1d1d1f] mb-1.5">
                  {service.title}
                </h4>
                <p className="text-sm text-[#6e6e73] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* For Businesses */}
        <div className="mb-4">
          <div className="flex items-baseline justify-between gap-4 mb-6 flex-wrap">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f]">For businesses</h3>
          </div>
          <p className="text-[#6e6e73] leading-relaxed max-w-3xl mb-8">
            We can help you turn your apartments, societies and communities sustainable —
            transforming business properties into profitable, eco-friendly assets that benefit
            both your bottom line and the environment.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/5 rounded-2xl overflow-hidden border border-black/5">
            {businessServices.map((service, index) => (
              <div
                key={index}
                className="bg-white hover:bg-[#f5f5f7] transition-colors p-6 cursor-pointer min-w-0"
                onClick={() => handleServiceClick(service)}
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600 [&>svg]:w-5 [&>svg]:h-5">
                  {service.icon}
                </div>
                <h4 className="text-base font-semibold text-[#1d1d1f] mb-1.5">
                  {service.title}
                </h4>
                <p className="text-sm text-[#6e6e73] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Details Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white border border-black/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" ref={serviceModalRef}>
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-6 gap-4">
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                      {selectedService.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f]">{selectedService.title}</h3>
                      <p className="text-[#6e6e73] text-sm sm:text-base">{selectedService.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={closeServiceModal}
                    className="w-9 h-9 bg-black/5 hover:bg-black/10 rounded-full flex items-center justify-center text-[#1d1d1f] transition-colors flex-shrink-0"
                  >
                    ✕
                  </button>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-[#1d1d1f] mb-3 uppercase tracking-wide">Overview</h4>
                  <p className="text-[#1d1d1f] text-base leading-relaxed">{selectedService.details.overview}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-sm font-semibold text-[#1d1d1f] mb-3 uppercase tracking-wide">Our Services</h4>
                    <ul className="space-y-2.5">
                      {selectedService.details.services.map((service, idx) => (
                        <li key={idx} className="text-[#1d1d1f] text-sm flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-[#1d1d1f] mb-3 uppercase tracking-wide">Process Flow</h4>
                    <p className="text-[#6e6e73] text-sm leading-relaxed mb-6">{selectedService.details.process}</p>

                    <h4 className="text-sm font-semibold text-[#1d1d1f] mb-3 uppercase tracking-wide">Key Benefits</h4>
                    <p className="text-[#6e6e73] text-sm leading-relaxed">{selectedService.details.benefits}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-full font-medium text-white transition-colors text-sm">
                    Get Quote
                  </button>
                  <button className="flex-1 border border-black/10 hover:bg-black/5 px-6 py-3 rounded-full font-medium text-[#1d1d1f] transition-colors text-sm">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="/get-a-quote" className="bg-[#1d1d1f] hover:bg-black px-6 py-3 rounded-full font-medium text-white transition-colors text-sm text-center">
            Get started today
          </a>
          <a href="/get-a-quote" className="border border-black/10 hover:bg-black/5 px-6 py-3 rounded-full font-medium text-[#1d1d1f] transition-colors text-sm text-center">
            Schedule consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
