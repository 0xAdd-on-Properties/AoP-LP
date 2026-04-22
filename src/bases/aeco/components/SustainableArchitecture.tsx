'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  Leaf, 
  Sun, 
  Droplets, 
  Wind, 
  Recycle, 
  TreePine, 
  Thermometer,
  Lightbulb,
  Home,
  Globe,
  Shield
} from 'lucide-react';
import useClickOutside from '../../../hooks/useClickOutside';

const SustainableArchitecture = () => {
  const [selectedPrinciple, setSelectedPrinciple] = useState<any>(null);

  const principleModalRef = useClickOutside(() => {
    setSelectedPrinciple(null);
  });

  const handlePrincipleClick = (principle) => {
    setSelectedPrinciple(principle);
  };

  const closePrincipleModal = () => {
    setSelectedPrinciple(null);
  };

  const principles = [
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Energy Efficiency",
      description: "Minimizing energy consumption through passive design and renewable systems",
      gradient: "from-yellow-500 to-orange-500",
      details: {
        overview: "Energy efficiency in sustainable architecture focuses on reducing energy consumption through intelligent design, passive solar strategies, and high-performance building systems.",
        strategies: [
          "Passive solar design and orientation",
          "High-performance insulation systems",
          "Energy-efficient windows and glazing",
          "Natural ventilation strategies",
          "LED lighting and smart controls",
          "Heat recovery ventilation systems"
        ],
        benefits: "Reduce energy costs by 60-80%, lower carbon footprint, improved indoor comfort, and long-term cost savings.",
        applications: "Residential homes, commercial buildings, educational facilities, healthcare centers"
      }
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Water Conservation",
      description: "Efficient water use through harvesting, recycling, and conservation systems",
      gradient: "from-blue-500 to-cyan-500",
      details: {
        overview: "Water conservation in sustainable architecture involves comprehensive water management strategies that reduce consumption, harvest rainwater, and recycle greywater.",
        strategies: [
          "Rainwater harvesting systems",
          "Greywater recycling and treatment",
          "Low-flow fixtures and appliances",
          "Drought-resistant landscaping",
          "Permeable paving materials",
          "Smart irrigation systems"
        ],
        benefits: "Reduce water consumption by 40-60%, lower utility costs, water security, and reduced environmental impact.",
        applications: "Urban developments, agricultural facilities, industrial complexes, residential communities"
      }
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Sustainable Materials",
      description: "Using eco-friendly, recycled, and locally sourced building materials",
      gradient: "from-green-500 to-emerald-500",
      details: {
        overview: "Sustainable materials selection focuses on using environmentally responsible materials that minimize environmental impact throughout their lifecycle.",
        strategies: [
          "Recycled and reclaimed materials",
          "Locally sourced materials",
          "Rapidly renewable resources",
          "Low-impact manufacturing processes",
          "Non-toxic and low-VOC materials",
          "Durable and long-lasting materials"
        ],
        benefits: "Reduced environmental impact, improved indoor air quality, support for local economy, and lower transportation costs.",
        applications: "Green buildings, eco-homes, sustainable communities, renovation projects"
      }
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Natural Ventilation",
      description: "Passive cooling and air circulation through strategic design",
      gradient: "from-sky-500 to-blue-500",
      details: {
        overview: "Natural ventilation uses wind and thermal buoyancy to provide fresh air and cooling without mechanical systems, reducing energy consumption.",
        strategies: [
          "Cross-ventilation design",
          "Stack effect ventilation",
          "Wind-driven ventilation",
          "Thermal mass integration",
          "Operable windows and vents",
          "Courtyard and atrium designs"
        ],
        benefits: "Reduced cooling costs, improved indoor air quality, lower maintenance requirements, and enhanced occupant comfort.",
        applications: "Tropical architecture, office buildings, educational facilities, residential developments"
      }
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Green Building Design",
      description: "Integrating vegetation and natural elements into building design",
      gradient: "from-green-600 to-lime-500",
      details: {
        overview: "Green building design incorporates living vegetation into the building envelope and surroundings to improve environmental performance and occupant well-being.",
        strategies: [
          "Green roofs and living walls",
          "Urban forest integration",
          "Biophilic design principles",
          "Native plant landscaping",
          "Vertical gardens and terraces",
          "Natural habitat preservation"
        ],
        benefits: "Improved air quality, reduced urban heat island effect, enhanced biodiversity, and improved mental health.",
        applications: "Urban buildings, hospitals, schools, residential complexes, commercial developments"
      }
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "Thermal Comfort",
      description: "Maintaining comfortable indoor temperatures through passive design",
      gradient: "from-red-500 to-orange-500",
      details: {
        overview: "Thermal comfort in sustainable architecture is achieved through passive design strategies that maintain comfortable indoor temperatures with minimal energy use.",
        strategies: [
          "Thermal mass optimization",
          "Insulation and air sealing",
          "Solar heat gain control",
          "Natural cooling strategies",
          "Radiant heating and cooling",
          "Adaptive comfort principles"
        ],
        benefits: "Consistent indoor comfort, reduced energy consumption, lower operating costs, and improved occupant satisfaction.",
        applications: "Residential buildings, offices, educational facilities, healthcare centers"
      }
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Daylighting Design",
      description: "Maximizing natural light while controlling glare and heat gain",
      gradient: "from-yellow-400 to-amber-500",
      details: {
        overview: "Daylighting design optimizes the use of natural light to reduce artificial lighting needs while maintaining visual comfort and preventing overheating.",
        strategies: [
          "Strategic window placement",
          "Light shelves and reflectors",
          "Skylights and clerestories",
          "Light-colored interior surfaces",
          "Automated daylight controls",
          "Glare control systems"
        ],
        benefits: "Reduced lighting energy costs, improved occupant well-being, enhanced productivity, and better circadian rhythm support.",
        applications: "Office buildings, schools, healthcare facilities, retail spaces"
      }
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Passive House Standards",
      description: "Ultra-low energy building standard for maximum efficiency",
      gradient: "from-indigo-500 to-purple-500",
      details: {
        overview: "Passive House is a rigorous, voluntary standard for energy efficiency that results in ultra-low energy buildings requiring little energy for heating or cooling.",
        strategies: [
          "Superior insulation performance",
          "Airtight building envelope",
          "High-performance windows",
          "Thermal bridge-free construction",
          "Heat recovery ventilation",
          "Passive solar gains optimization"
        ],
        benefits: "90% reduction in heating/cooling energy, superior indoor air quality, exceptional comfort, and long-term durability.",
        applications: "Residential homes, multi-family buildings, schools, offices, commercial buildings"
      }
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Climate-Responsive Design",
      description: "Adapting architecture to local climate conditions and resources",
      gradient: "from-teal-500 to-green-500",
      details: {
        overview: "Climate-responsive design adapts building form, orientation, and systems to local climate conditions, maximizing comfort while minimizing energy use.",
        strategies: [
          "Climate analysis and response",
          "Seasonal sun path optimization",
          "Wind pattern utilization",
          "Local material integration",
          "Traditional building techniques",
          "Microclimate creation"
        ],
        benefits: "Optimal comfort in local conditions, reduced energy consumption, cultural appropriateness, and resilience to climate change.",
        applications: "Regional architecture, vernacular buildings, climate-specific developments, adaptive reuse projects"
      }
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Resilient Design",
      description: "Building structures that can withstand and adapt to environmental challenges",
      gradient: "from-gray-600 to-slate-700",
      details: {
        overview: "Resilient design creates buildings that can withstand, adapt to, and recover from environmental stresses and climate change impacts.",
        strategies: [
          "Disaster-resistant construction",
          "Flexible and adaptable spaces",
          "Redundant building systems",
          "Local resource utilization",
          "Community-centered design",
          "Future-proofing strategies"
        ],
        benefits: "Enhanced safety and security, reduced maintenance costs, adaptability to changing needs, and community resilience.",
        applications: "Disaster-prone areas, coastal developments, urban planning, critical infrastructure"
      }
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Life Cycle Assessment",
      description: "Evaluating environmental impact throughout building lifecycle",
      gradient: "from-emerald-500 to-teal-500",
      details: {
        overview: "Life Cycle Assessment (LCA) evaluates the environmental impacts of a building throughout its entire lifecycle, from material extraction to end-of-life disposal.",
        strategies: [
          "Cradle-to-grave analysis",
          "Embodied energy assessment",
          "Carbon footprint calculation",
          "Material impact evaluation",
          "End-of-life planning",
          "Circular economy principles"
        ],
        benefits: "Informed material selection, reduced environmental impact, improved sustainability credentials, and long-term cost optimization.",
        applications: "Green building certification, sustainable development, corporate sustainability, policy development"
      }
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Bioclimatic Architecture",
      description: "Harmonizing buildings with natural climate and environmental conditions",
      gradient: "from-lime-500 to-green-600",
      details: {
        overview: "Bioclimatic architecture designs buildings that work in harmony with local climate conditions, using natural elements for comfort and energy efficiency.",
        strategies: [
          "Solar geometry optimization",
          "Natural ventilation systems",
          "Thermal mass utilization",
          "Vegetation integration",
          "Water feature incorporation",
          "Microclimate manipulation"
        ],
        benefits: "Minimal mechanical systems needed, enhanced occupant comfort, reduced environmental impact, and cultural sensitivity.",
        applications: "Tropical architecture, desert buildings, Mediterranean design, vernacular architecture"
      }
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-green-500/30 mb-6">
            <Building2 className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-medium">Sustainable Architecture</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Principles of
            </span>
            <br />
            <span className="text-white">Sustainable Design</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Sustainable architecture seeks to minimize the negative environmental impact of buildings 
            through improved efficiency and moderation in the use of materials, energy, development space, 
            and the ecosystem at large.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {principles.map((principle, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer"
              onClick={() => handlePrincipleClick(principle)}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                   style={{
                     background: `linear-gradient(45deg, var(--tw-gradient-from), var(--tw-gradient-to))`,
                     '--tw-gradient-from': principle.gradient.split(' ')[1],
                     '--tw-gradient-to': principle.gradient.split(' ')[3]
                   } as React.CSSProperties}>
              </div>
              
              {/* Icon */}
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-4 text-emerald-400">
                {principle.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">
                {principle.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {principle.description}
              </p>
              
              {/* Hover Effect */}
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Principle Details Modal */}
        {selectedPrinciple && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-slate-800 border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" ref={principleModalRef}>
              <div className="relative">
                {/* Header */}
                <div className="bg-gradient-to-r from-slate-700 to-slate-800 p-8 rounded-t-3xl relative">
                  <button 
                    onClick={closePrincipleModal}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
                  >
                    ✕
                  </button>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center text-emerald-400">
                      {selectedPrinciple.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">{selectedPrinciple.title}</h3>
                      <p className="text-gray-300 text-lg">{selectedPrinciple.description}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-white mb-4">Overview</h4>
                    <p className="text-gray-300 text-lg leading-relaxed">{selectedPrinciple.details.overview}</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">Key Strategies</h4>
                      <ul className="space-y-3">
                        {selectedPrinciple.details.strategies.map((strategy, idx) => (
                          <li key={idx} className="text-gray-300 flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{strategy}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">Applications</h4>
                      <p className="text-gray-300 leading-relaxed mb-6">{selectedPrinciple.details.applications}</p>
                      
                      <h4 className="text-xl font-semibold text-white mb-4">Benefits</h4>
                      <p className="text-gray-300 leading-relaxed">{selectedPrinciple.details.benefits}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300">
                      Implement This Principle
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
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
            Explore Sustainable Architecture Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default SustainableArchitecture;