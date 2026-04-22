'use client';

import React, { useState } from 'react';
import { 
  Leaf, 
  Home, 
  Zap, 
  Droplets, 
  TreePine, 
  Recycle,
  Globe,
  Cpu,
  Shield,
  Wind,
  Sun,
  Sprout,
  Search,
  Mountain,
  Waves,
  Flower2,
  Thermometer,
  Lightbulb,
  Wrench,
  Building2,
  Sparkles
} from 'lucide-react';
import useClickOutside from '../../../hooks/useClickOutside';

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState<any>(null);

  const featureModalRef = useClickOutside(() => {
    setSelectedFeature(null);
  });

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
  };

  const closeFeatureModal = () => {
    setSelectedFeature(null);
  };

  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Property Search",
      description: "AI-powered property discovery with advanced filters and recommendations",
      gradient: "from-emerald-500 to-green-500",
      details: {
        overview: "Advanced AI-powered property search engine that understands your preferences and lifestyle needs.",
        features: ["Smart filtering by sustainability metrics", "AI-powered property recommendations", "Virtual property tours", "Price prediction algorithms", "Neighborhood sustainability scores"],
        benefits: "Find your perfect sustainable home 10x faster with our intelligent matching system.",
        process: "Set Preferences → AI Analysis → Curated Results → Virtual Tours → Site Visits"
      }
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Drone Tech",
      description: "Advanced drone surveying for accurate property assessment and monitoring",
      gradient: "from-teal-500 to-cyan-500",
      details: {
        overview: "Cutting-edge drone technology for comprehensive property analysis and monitoring.",
        features: ["High-resolution aerial photography", "3D property mapping", "Structural health monitoring", "Environmental impact assessment", "Construction progress tracking"],
        benefits: "Get accurate property insights with precision surveying and real-time monitoring.",
        process: "Site Survey → Drone Deployment → Data Collection → Analysis → Detailed Reports"
      }
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable Materials",
      description: "Eco-friendly construction materials marketplace with carbon footprint tracking",
      gradient: "from-green-500 to-emerald-500",
      details: {
        overview: "Curated marketplace of sustainable construction materials with full lifecycle tracking.",
        features: ["Carbon footprint calculator", "Local material sourcing", "Quality certifications", "Bulk pricing options", "Sustainability ratings"],
        benefits: "Build sustainably while reducing costs and environmental impact by up to 60%.",
        process: "Material Selection → Carbon Assessment → Quality Verification → Procurement → Delivery"
      }
    },
    {
      icon: <Flower2 className="w-8 h-8" />,
      title: "Sustainable Furnishings",
      description: "Interior design solutions with sustainable and locally sourced materials",
      gradient: "from-green-500 to-emerald-500",
      details: {
        overview: "Complete interior design solutions using eco-friendly and locally crafted furnishings.",
        features: ["Local artisan partnerships", "Recycled material furniture", "Non-toxic finishes", "Custom design services", "Sustainable textile options"],
        benefits: "Create beautiful interiors that support local communities and reduce environmental impact.",
        process: "Design Consultation → Material Selection → Local Sourcing → Custom Creation → Installation"
      }
    },
    {
      icon: <Mountain className="w-8 h-8" />,
      title: "Vastu-Optimized Design",
      description: "Ancient architectural wisdom meets modern sustainability",
      gradient: "from-emerald-500 to-teal-500",
      details: {
        overview: "Harmonious living spaces designed using ancient Vastu principles integrated with modern sustainability.",
        features: ["Traditional Vastu compliance", "Energy flow optimization", "Natural light maximization", "Sacred geometry integration", "Wellness-focused layouts"],
        benefits: "Experience enhanced well-being and prosperity through scientifically-backed ancient design principles.",
        process: "Site Analysis → Vastu Assessment → Design Integration → Energy Optimization → Implementation"
      }
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Renewable Energy Systems",
      description: "Solar, wind, and biogas integration for complete energy independence",
      gradient: "from-yellow-400 to-emerald-500",
      details: {
        overview: "Complete renewable energy solutions for total energy independence and carbon neutrality.",
        features: ["Solar panel systems", "Wind energy integration", "Biogas generation", "Battery storage solutions", "Smart grid connectivity"],
        benefits: "Achieve 100% energy independence while reducing electricity costs by up to 90%.",
        process: "Energy Audit → System Design → Installation → Grid Integration → Monitoring"
      }
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Hydro & Aquaponics",
      description: "Closed-loop water systems with food production capabilities",
      gradient: "from-cyan-500 to-teal-500",
      details: {
        overview: "Integrated water management and food production systems for complete self-sufficiency.",
        features: ["Rainwater harvesting", "Greywater recycling", "Aquaponics systems", "Fish farming integration", "Automated irrigation"],
        benefits: "Reduce water consumption by 80% while producing fresh fish and vegetables year-round.",
        process: "Water Assessment → System Design → Installation → Ecosystem Balancing → Maintenance"
      }
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Carbon Sink Creation",
      description: "Properties designed to absorb more carbon than they produce",
      gradient: "from-green-600 to-emerald-600",
      details: {
        overview: "Transform properties into carbon-negative environments that actively fight climate change.",
        features: ["Strategic tree plantation", "Soil carbon enhancement", "Wetland creation", "Carbon credit generation", "Biodiversity restoration"],
        benefits: "Generate additional income through carbon credits while creating a positive environmental impact.",
        process: "Carbon Assessment → Plantation Planning → Implementation → Monitoring → Credit Generation"
      }
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Waste to Resource",
      description: "Advanced waste management turning waste into valuable resources",
      gradient: "from-teal-600 to-cyan-600",
      details: {
        overview: "Revolutionary waste management systems that convert all waste streams into valuable resources.",
        features: ["Organic waste composting", "Biogas generation", "Plastic recycling", "Greywater treatment", "Resource recovery"],
        benefits: "Eliminate waste disposal costs while generating energy, fertilizer, and other valuable resources.",
        process: "Waste Audit → System Design → Installation → Process Optimization → Resource Harvesting"
      }
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Asset Tokenization",
      description: "Convert real estate assets into blockchain tokens for better liquidity and fractional ownership",
      gradient: "from-emerald-500 to-green-600",
      details: {
        overview: "Blockchain-powered asset tokenization enabling fractional ownership and enhanced liquidity.",
        features: ["Property tokenization", "Smart contract development", "Fractional ownership", "Transparent transactions", "Global investor access"],
        benefits: "Unlock property value with fractional ownership and instant liquidity through blockchain technology.",
        process: "Asset Valuation → Legal Framework → Tokenization → Smart Contracts → Trading Platform"
      }
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "3D Tours & Web3",
      description: "Immersive virtual property tours with metaverse integration and blockchain assets",
      gradient: "from-cyan-500 to-teal-600",
      details: {
        overview: "Next-generation property visualization with immersive 3D tours and metaverse integration.",
        features: ["360° virtual tours", "VR/AR experiences", "Metaverse property showcases", "Digital twin creation", "Blockchain verification"],
        benefits: "Experience properties remotely with photorealistic virtual tours and metaverse integration.",
        process: "3D Scanning → Virtual Tour Creation → Metaverse Integration → Blockchain Verification → Platform Deployment"
      }
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "3D Printed Construction",
      description: "Rapid, precise, and sustainable building technology",
      gradient: "from-teal-600 to-cyan-600",
      details: {
        overview: "Revolutionary 3D printing technology for rapid, precise, and sustainable construction.",
        features: ["Automated construction", "Custom architectural designs", "Reduced material waste", "Faster build times", "Complex geometries"],
        benefits: "Build faster, cheaper, and more sustainably with 50% less material waste and 70% faster construction.",
        process: "Design Optimization → Material Preparation → 3D Printing → Quality Control → Finishing"
      }
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Earthship Technology",
      description: "Self-sufficient homes using recycled materials and natural systems",
      gradient: "from-emerald-600 to-green-600",
      details: {
        overview: "Completely self-sufficient homes built with recycled materials and natural energy systems.",
        features: ["Recycled tire construction", "Natural temperature regulation", "Rainwater harvesting", "Solar power systems", "Food production areas"],
        benefits: "Live completely off-grid with zero utility bills and minimal environmental impact.",
        process: "Site Preparation → Foundation → Wall Construction → Systems Integration → Interior Finishing"
      }
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Eco-Cooling Corridors",
      description: "Natural cooling systems reducing energy consumption by 70%",
      gradient: "from-cyan-500 to-teal-500",
      details: {
        overview: "Natural cooling systems that reduce energy consumption while maintaining optimal comfort.",
        features: ["Wind tunnel design", "Thermal mass optimization", "Natural ventilation", "Evaporative cooling", "Green corridor integration"],
        benefits: "Reduce cooling costs by 70% while maintaining perfect indoor climate naturally.",
        process: "Climate Analysis → Airflow Design → Construction → System Integration → Performance Optimization"
      }
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "Smart Climate Control",
      description: "AI-powered systems optimizing comfort and efficiency",
      gradient: "from-yellow-400 to-emerald-500",
      details: {
        overview: "Intelligent climate control systems that learn your preferences and optimize energy usage.",
        features: ["AI-powered automation", "Predictive climate control", "Energy optimization", "Remote monitoring", "Adaptive learning"],
        benefits: "Perfect comfort with 60% less energy consumption through intelligent automation.",
        process: "System Installation → AI Training → Preference Learning → Optimization → Continuous Improvement"
      }
    },
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "Urban Food Forests",
      description: "Integrated agroforestry systems for urban environments",
      gradient: "from-green-500 to-emerald-500",
      details: {
        overview: "Multi-layered food production systems that mimic natural forest ecosystems in urban settings.",
        features: ["Permaculture design", "Multi-story food production", "Native species integration", "Soil regeneration", "Community involvement"],
        benefits: "Produce fresh food while improving air quality and creating community gathering spaces.",
        process: "Site Analysis → Ecosystem Design → Species Selection → Planting → Community Training"
      }
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Bio Pools & Gardens",
      description: "Natural swimming pools and therapeutic garden spaces",
      gradient: "from-teal-500 to-cyan-500",
      details: {
        overview: "Chemical-free swimming pools and healing gardens that work with natural biological processes.",
        features: ["Natural water filtration", "Aquatic plant systems", "Chemical-free swimming", "Therapeutic gardens", "Wildlife habitats"],
        benefits: "Enjoy crystal-clear swimming water without chemicals while supporting local ecosystems.",
        process: "Design Planning → Excavation → Biological System Setup → Plant Installation → Ecosystem Balancing"
      }
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-500/30 mb-6">
            <Leaf className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-300 font-medium">Sustainable Innovations</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
              Technologies That
            </span>
            <br />
            <span className="text-white">Transform Living</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the convergence of ancient wisdom and cutting-edge technology 
            in sustainable real estate solutions for modern Bharat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer"
              onClick={() => handleFeatureClick(feature)}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                   style={{
                     background: `linear-gradient(45deg, var(--tw-gradient-from), var(--tw-gradient-to))`,
                     '--tw-gradient-from': feature.gradient.split(' ')[1],
                     '--tw-gradient-to': feature.gradient.split(' ')[3]
                   } as React.CSSProperties}>
              </div>
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-4 text-white`}>
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
              
              {/* Hover Effect */}
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-full bg-gradient-to-r from-emerald-400 to-green-400 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Details Modal */}
        {selectedFeature && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-slate-800 border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" ref={featureModalRef}>
              <div className="relative">
                {/* Header */}
                <div className="bg-gradient-to-r from-slate-700 to-slate-800 p-8 rounded-t-3xl relative">
                  <button 
                    onClick={closeFeatureModal}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
                  >
                    ✕
                  </button>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${selectedFeature.gradient} rounded-xl flex items-center justify-center text-white`}>
                      {selectedFeature.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">{selectedFeature.title}</h3>
                      <p className="text-gray-300 text-lg">{selectedFeature.description}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-white mb-4">Overview</h4>
                    <p className="text-gray-300 text-lg leading-relaxed">{selectedFeature.details.overview}</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                      <ul className="space-y-3">
                        {selectedFeature.details.features.map((feature, idx) => (
                          <li key={idx} className="text-gray-300 flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">Process Flow</h4>
                      <p className="text-gray-300 leading-relaxed mb-6">{selectedFeature.details.process}</p>
                      
                      <h4 className="text-xl font-semibold text-white mb-4">Benefits</h4>
                      <p className="text-gray-300 leading-relaxed">{selectedFeature.details.benefits}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300">
                      Get Started
                    </button>
                    <button className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300">
                      Schedule Consultation
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

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/25">
            Explore All Technologies
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;