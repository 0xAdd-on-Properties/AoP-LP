'use client';

import React, { useState } from 'react';
import { Search, Heart, Share2, Star, Leaf, Zap, Droplets, Wind, Cpu, Wifi, Battery, Shield } from 'lucide-react';

const SustainableTechnologiesMarketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'All Technologies', icon: Cpu },
    { id: 'iot', name: 'IoT & Smart Sensors', icon: Wifi },
    { id: 'ai', name: 'AI & Machine Learning', icon: Cpu },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: Shield },
    { id: 'energy', name: 'Energy Tech', icon: Battery },
    { id: 'water', name: 'Water Tech', icon: Droplets },
    { id: 'air', name: 'Air Quality Tech', icon: Wind }
  ];

  const technologies = [
    {
      id: 1,
      name: 'Smart Building IoT Platform',
      category: 'iot',
      price: '$15,000',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg',
      carbonFootprint: '-40%',
      certification: 'IoT Certified',
      description: 'Complete IoT ecosystem for smart building management',
      features: ['Real-time monitoring', 'Predictive maintenance', 'Energy optimization', 'Remote control'],
      specifications: {
        connectivity: '5G/WiFi 6',
        sensors: '50+ integrated sensors',
        battery: '10-year lifespan',
        compatibility: 'Universal protocols'
      }
    },
    {
      id: 2,
      name: 'AI Energy Optimization System',
      category: 'ai',
      price: '$25,000',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg',
      carbonFootprint: '-60%',
      certification: 'AI Ethics Certified',
      description: 'Machine learning system for optimal energy consumption',
      features: ['Predictive analytics', 'Load balancing', 'Peak shaving', 'Grid integration'],
      specifications: {
        processing: 'Edge AI computing',
        accuracy: '95% prediction accuracy',
        integration: 'Cloud & on-premise',
        updates: 'Continuous learning'
      }
    },
    {
      id: 3,
      name: 'Blockchain Carbon Credits Platform',
      category: 'blockchain',
      price: '$50,000',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg',
      carbonFootprint: 'Carbon Neutral',
      certification: 'Blockchain Verified',
      description: 'Decentralized platform for carbon credit trading',
      features: ['Smart contracts', 'Transparent tracking', 'Automated trading', 'Compliance reporting'],
      specifications: {
        blockchain: 'Ethereum/Polygon',
        security: 'Multi-sig wallets',
        scalability: '10,000+ TPS',
        governance: 'DAO structure'
      }
    },
    {
      id: 4,
      name: 'Smart Grid Battery Management',
      category: 'energy',
      price: '$35,000',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg',
      carbonFootprint: '-50%',
      certification: 'Grid Certified',
      description: 'Advanced battery management for renewable energy storage',
      features: ['Grid synchronization', 'Peak load management', 'Backup power', 'Remote monitoring'],
      specifications: {
        capacity: '100kWh - 1MWh',
        efficiency: '95% round-trip',
        lifespan: '20+ years',
        warranty: '10-year performance'
      }
    },
    {
      id: 5,
      name: 'Water Quality Monitoring System',
      category: 'water',
      price: '$12,000',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg',
      carbonFootprint: '-30%',
      certification: 'Water Safe Certified',
      description: 'Real-time water quality monitoring and treatment',
      features: ['Multi-parameter sensing', 'Automated treatment', 'Alert systems', 'Data analytics'],
      specifications: {
        parameters: '15+ water quality metrics',
        accuracy: '±2% measurement accuracy',
        connectivity: 'LoRaWAN/Cellular',
        maintenance: 'Self-cleaning sensors'
      }
    },
    {
      id: 6,
      name: 'Air Purification IoT Network',
      category: 'air',
      price: '$18,000',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg',
      carbonFootprint: '-35%',
      certification: 'Air Quality Certified',
      description: 'Intelligent air purification with IoT monitoring',
      features: ['PM2.5/PM10 monitoring', 'Automated purification', 'Health alerts', 'Zone control'],
      specifications: {
        coverage: '1000-5000 sq ft',
        filtration: 'HEPA + UV-C + Plasma',
        sensors: 'Laser particle counter',
        control: 'Mobile app + voice'
      }
    }
  ];

  const filteredTechnologies = technologies.filter(tech => {
    const matchesCategory = selectedCategory === 'all' || tech.category === selectedCategory;
    const matchesSearch = tech.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tech.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openTechModal = (tech) => {
    setSelectedTech(tech);
  };

  const closeTechModal = () => {
    setSelectedTech(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#f5f5f7] pt-28 sm:pt-32 pb-10 sm:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-8">
            <p className="text-sm font-medium text-emerald-600 mb-3">Green Tech</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1d1d1f] leading-[1.05] mb-4">
              Sustainable <span className="text-emerald-600">technologies</span> marketplace
            </h1>
            <p className="text-base sm:text-lg text-[#6e6e73] leading-relaxed">
              Cutting-edge sustainable technologies that power the future of eco-friendly living.
            </p>
          </div>

          <div className="bg-white border border-black/10 rounded-2xl p-3 shadow-sm max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#86868b] w-4 h-4" />
              <input
                type="text"
                placeholder="Search sustainable technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-3 py-3 bg-[#f5f5f7] rounded-xl text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:ring-2 focus:ring-emerald-600/40 text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-black/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-[#1d1d1f] text-white'
                      : 'border border-black/10 text-[#1d1d1f] hover:bg-black/5'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTechnologies.map((tech) => (
              <div
                key={tech.id}
                onClick={() => openTechModal(tech)}
                className="group bg-white rounded-2xl overflow-hidden border border-black/5 hover:shadow-lg transition-shadow cursor-pointer min-w-0"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 flex gap-1.5" onClick={(e) => e.stopPropagation()}>
                    <button className="w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#1d1d1f] hover:bg-white transition-colors">
                      <Heart className="w-3.5 h-3.5" />
                    </button>
                    <button className="w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#1d1d1f] hover:bg-white transition-colors">
                      <Share2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-white/95 backdrop-blur-sm text-emerald-700 px-2.5 py-1 rounded-full text-xs font-medium border border-black/5">
                      {tech.certification}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-1 gap-2">
                    <h3 className="text-base font-semibold text-[#1d1d1f]">{tech.name}</h3>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <Star className="w-3.5 h-3.5 text-emerald-600 fill-current" />
                      <span className="text-xs text-[#6e6e73]">{tech.rating}</span>
                    </div>
                  </div>

                  <p className="text-[#6e6e73] text-sm leading-relaxed mb-4">{tech.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-[#1d1d1f]">{tech.price}</span>
                    <div className="flex items-center gap-1 text-emerald-600">
                      <Leaf className="w-3.5 h-3.5" />
                      <span className="text-xs font-medium">{tech.carbonFootprint}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {tech.features.slice(0, 2).map((feature, index) => (
                      <span
                        key={index}
                        className="bg-black/5 text-[#1d1d1f] px-2.5 py-1 rounded-full text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight mb-3">
              Why choose our sustainable technologies?
            </h2>
            <p className="text-[#6e6e73] text-base sm:text-lg leading-relaxed">
              Leading the future with innovative, eco-friendly technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-black/5 rounded-2xl overflow-hidden border border-black/5">
            <div className="bg-white p-6 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">Energy Efficient</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                Reduce energy consumption by up to 60% with smart optimization.
              </p>
            </div>

            <div className="bg-white p-6 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">Carbon Neutral</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                Achieve net-zero emissions with our sustainable technology stack.
              </p>
            </div>

            <div className="bg-white p-6 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">Future-Proof</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                Scalable solutions that grow with your sustainability goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Detail Modal */}
      {selectedTech && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-black/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="relative">
              <img
                src={selectedTech.image}
                alt={selectedTech.name}
                className="w-full h-56 sm:h-64 object-cover rounded-t-3xl"
              />
              <button
                onClick={closeTechModal}
                className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#1d1d1f] hover:bg-white transition-all"
              >
                ✕
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1d1d1f]">{selectedTech.name}</h2>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-emerald-600 fill-current" />
                    <span className="text-[#1d1d1f] text-sm font-medium">{selectedTech.rating}</span>
                  </div>
                  <span className="text-2xl font-bold text-[#1d1d1f]">{selectedTech.price}</span>
                </div>
              </div>

              <p className="text-[#1d1d1f] mb-8 text-base">{selectedTech.description}</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-sm font-semibold text-[#1d1d1f] mb-3 uppercase tracking-wide">Key Features</h3>
                  <ul className="space-y-2.5">
                    {selectedTech.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-[#1d1d1f] text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#1d1d1f] mb-3 uppercase tracking-wide">Specifications</h3>
                  <div className="space-y-3">
                    {Object.entries(selectedTech.specifications as Record<string, string>).map(([key, value]) => (
                      <div key={key} className="flex justify-between gap-4">
                        <span className="text-[#6e6e73] capitalize text-sm">{key}:</span>
                        <span className="text-[#1d1d1f] text-sm text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-8 flex-wrap">
                <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Leaf className="w-4 h-4" />
                  <span>Carbon Impact: {selectedTech.carbonFootprint}</span>
                </div>
                <div className="bg-black/5 text-[#1d1d1f] px-4 py-2 rounded-full text-sm font-medium">
                  {selectedTech.certification}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-full font-medium text-white transition-colors text-sm">
                  Request Quote
                </button>
                <button className="flex-1 border border-black/10 hover:bg-black/5 px-6 py-3 rounded-full font-medium text-[#1d1d1f] transition-colors text-sm">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SustainableTechnologiesMarketplace;
