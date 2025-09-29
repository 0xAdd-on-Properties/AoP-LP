import React, { useState } from 'react';
import { Search, Filter, Heart, Share2, Star, Leaf, Zap, Droplets, Wind, Sun, Cpu, Wifi, Battery, Shield } from 'lucide-react';

const SustainableTechnologiesMarketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState(null);

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
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Sustainable <span className="text-blue-400">Technologies</span> Marketplace
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Discover cutting-edge sustainable technologies that power the future of eco-friendly living
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search sustainable technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTechnologies.map((tech) => (
            <div
              key={tech.id}
              onClick={() => openTechModal(tech)}
              className="bg-slate-800 rounded-xl overflow-hidden hover:bg-slate-750 transition-all cursor-pointer group"
            >
              <div className="relative">
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="p-2 bg-slate-900/80 rounded-full hover:bg-slate-900 transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-slate-900/80 rounded-full hover:bg-slate-900 transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {tech.certification}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{tech.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-slate-300">{tech.rating}</span>
                  </div>
                </div>
                
                <p className="text-slate-400 mb-4">{tech.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-400">{tech.price}</span>
                  <div className="flex items-center gap-1 text-green-400">
                    <Leaf className="w-4 h-4" />
                    <span className="text-sm">{tech.carbonFootprint}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {tech.features.slice(0, 2).map((feature, index) => (
                    <span
                      key={index}
                      className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm"
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

      {/* Benefits Section */}
      <div className="bg-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Sustainable Technologies?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Leading the future with innovative, eco-friendly technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Energy Efficient</h3>
              <p className="text-slate-400">
                Reduce energy consumption by up to 60% with smart optimization
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Carbon Neutral</h3>
              <p className="text-slate-400">
                Achieve net-zero emissions with our sustainable technology stack
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Future-Proof</h3>
              <p className="text-slate-400">
                Scalable solutions that grow with your sustainability goals
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Detail Modal */}
      {selectedTech && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedTech.image}
                alt={selectedTech.name}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={closeTechModal}
                className="absolute top-4 right-4 bg-slate-900/80 text-white p-2 rounded-full hover:bg-slate-900 transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold">{selectedTech.name}</h2>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span>{selectedTech.rating}</span>
                  </div>
                  <span className="text-3xl font-bold text-blue-400">{selectedTech.price}</span>
                </div>
              </div>
              
              <p className="text-slate-300 mb-6 text-lg">{selectedTech.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedTech.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Specifications</h3>
                  <div className="space-y-3">
                    {Object.entries(selectedTech.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-slate-400 capitalize">{key}:</span>
                        <span className="text-slate-300">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-green-600/20 text-green-400 px-4 py-2 rounded-lg">
                  <Leaf className="w-5 h-5" />
                  <span>Carbon Impact: {selectedTech.carbonFootprint}</span>
                </div>
                <div className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-lg">
                  {selectedTech.certification}
                </div>
              </div>
              
              <div className="flex gap-4">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                  Request Quote
                </button>
                <button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
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