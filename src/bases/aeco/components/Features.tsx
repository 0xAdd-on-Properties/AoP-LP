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
      image: "https://images.pexels.com/photos/8730024/pexels-photo-8730024.jpeg?auto=compress&cs=tinysrgb&w=600",
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
      image: "https://images.pexels.com/photos/5413118/pexels-photo-5413118.jpeg?auto=compress&cs=tinysrgb&w=600",
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
      image: "https://images.pexels.com/photos/33894664/pexels-photo-33894664.jpeg?auto=compress&cs=tinysrgb&w=600",
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
      image: "https://images.pexels.com/photos/37415406/pexels-photo-37415406.jpeg?auto=compress&cs=tinysrgb&w=600",
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
      image: "https://images.pexels.com/photos/31969419/pexels-photo-31969419.jpeg?auto=compress&cs=tinysrgb&w=600",
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
      image: "https://images.pexels.com/photos/35425765/pexels-photo-35425765.jpeg?auto=compress&cs=tinysrgb&w=600",
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
      image: "https://images.pexels.com/photos/7509424/pexels-photo-7509424.jpeg?auto=compress&cs=tinysrgb&w=600",
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
      image: "https://images.pexels.com/photos/11780322/pexels-photo-11780322.png?auto=compress&cs=tinysrgb&w=600",
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
      image: "https://images.pexels.com/photos/7512849/pexels-photo-7512849.jpeg?auto=compress&cs=tinysrgb&w=600",
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
      image: "https://images.pexels.com/photos/30547584/pexels-photo-30547584.jpeg?auto=compress&cs=tinysrgb&w=600",
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
      image: "https://images.pexels.com/photos/8730022/pexels-photo-8730022.jpeg?auto=compress&cs=tinysrgb&w=600",
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
      image: "https://images.pexels.com/photos/20341728/pexels-photo-20341728.jpeg?auto=compress&cs=tinysrgb&w=600",
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
      image: "/images/homes/earthship-eco-home.png",
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
      image: "https://images.pexels.com/photos/32006325/pexels-photo-32006325.jpeg?auto=compress&cs=tinysrgb&w=600",
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
      image: "https://images.pexels.com/photos/27638181/pexels-photo-27638181.jpeg?auto=compress&cs=tinysrgb&w=600",
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
      image: "https://images.pexels.com/photos/37861012/pexels-photo-37861012.jpeg?auto=compress&cs=tinysrgb&w=600",
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
      image: "https://images.pexels.com/photos/16808430/pexels-photo-16808430.jpeg?auto=compress&cs=tinysrgb&w=600",
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
    <section id="rail-innovations" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-sm font-medium text-emerald-600 mb-3">Sustainable Innovations</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
            Technologies that transform living
          </h2>
          <p className="text-lg text-[#6e6e73] leading-relaxed">
            Ancient wisdom meets cutting-edge technology in sustainable real estate
            solutions for modern Bharat.
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative shrink-0 w-64 sm:w-72 aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer snap-start"
              onClick={() => handleFeatureClick(feature)}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center text-white [&>svg]:w-4 [&>svg]:h-4">
                {feature.icon}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-white font-semibold text-lg mb-1 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-sm leading-snug line-clamp-2">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[#86868b] text-sm mt-3 sm:hidden">Swipe to explore →</p>

        {/* Feature Details Modal */}
        {selectedFeature && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white border border-black/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" ref={featureModalRef}>
              <div className="relative">
                {/* Header */}
                <div className="p-6 sm:p-8 border-b border-black/5 relative">
                  <button
                    onClick={closeFeatureModal}
                    className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 bg-black/5 hover:bg-black/10 rounded-full flex items-center justify-center text-[#1d1d1f] transition-colors"
                  >
                    ✕
                  </button>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 [&>svg]:w-6 [&>svg]:h-6 flex-shrink-0">
                      {selectedFeature.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f]">{selectedFeature.title}</h3>
                      <p className="text-[#6e6e73] text-sm sm:text-base">{selectedFeature.description}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-[#1d1d1f] mb-3 uppercase tracking-wide">Overview</h4>
                    <p className="text-[#1d1d1f] text-base leading-relaxed">{selectedFeature.details.overview}</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-sm font-semibold text-[#1d1d1f] mb-3 uppercase tracking-wide">Key Features</h4>
                      <ul className="space-y-2.5">
                        {selectedFeature.details.features.map((feature, idx) => (
                          <li key={idx} className="text-[#1d1d1f] text-sm flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-[#1d1d1f] mb-3 uppercase tracking-wide">Process Flow</h4>
                      <p className="text-[#6e6e73] text-sm leading-relaxed mb-6">{selectedFeature.details.process}</p>

                      <h4 className="text-sm font-semibold text-[#1d1d1f] mb-3 uppercase tracking-wide">Benefits</h4>
                      <p className="text-[#6e6e73] text-sm leading-relaxed">{selectedFeature.details.benefits}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
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

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16">
          <button className="bg-[#1d1d1f] hover:bg-black px-6 py-3 rounded-full font-medium text-white transition-colors text-sm">
            Explore all technologies
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;