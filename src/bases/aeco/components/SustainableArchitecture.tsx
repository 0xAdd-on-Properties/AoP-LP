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
      icon: <Sun className="w-6 h-6" />,
      title: "Energy Efficiency",
      description: "Minimizing energy consumption through passive design and renewable systems",
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
      icon: <Droplets className="w-6 h-6" />,
      title: "Water Conservation",
      description: "Efficient water use through harvesting, recycling, and conservation systems",
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
      icon: <Recycle className="w-6 h-6" />,
      title: "Sustainable Materials",
      description: "Using eco-friendly, recycled, and locally sourced building materials",
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
      icon: <Wind className="w-6 h-6" />,
      title: "Natural Ventilation",
      description: "Passive cooling and air circulation through strategic design",
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
      icon: <TreePine className="w-6 h-6" />,
      title: "Green Building Design",
      description: "Integrating vegetation and natural elements into building design",
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
      icon: <Thermometer className="w-6 h-6" />,
      title: "Thermal Comfort",
      description: "Maintaining comfortable indoor temperatures through passive design",
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
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Daylighting Design",
      description: "Maximizing natural light while controlling glare and heat gain",
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
      icon: <Home className="w-6 h-6" />,
      title: "Passive House Standards",
      description: "Ultra-low energy building standard for maximum efficiency",
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
      icon: <Globe className="w-6 h-6" />,
      title: "Climate-Responsive Design",
      description: "Adapting architecture to local climate conditions and resources",
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
      icon: <Shield className="w-6 h-6" />,
      title: "Resilient Design",
      description: "Building structures that can withstand and adapt to environmental challenges",
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
      icon: <Building2 className="w-6 h-6" />,
      title: "Life Cycle Assessment",
      description: "Evaluating environmental impact throughout building lifecycle",
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
      icon: <Leaf className="w-6 h-6" />,
      title: "Bioclimatic Architecture",
      description: "Harmonizing buildings with natural climate and environmental conditions",
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
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-sm font-medium text-emerald-600 mb-3">Sustainable Architecture</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
            Principles of sustainable design
          </h2>
          <p className="text-lg text-[#6e6e73] leading-relaxed">
            Sustainable architecture minimizes the environmental impact of buildings through
            improved efficiency and moderation in the use of materials, energy, development
            space, and the ecosystem at large.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/5 rounded-2xl overflow-hidden border border-black/5">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="group bg-white hover:bg-[#f5f5f7] transition-colors p-6 cursor-pointer min-w-0"
              onClick={() => handlePrincipleClick(principle)}
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                {principle.icon}
              </div>
              <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">
                {principle.title}
              </h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* Principle Details Modal */}
        {selectedPrinciple && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white border border-black/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" ref={principleModalRef}>
              <div className="relative">
                <div className="p-6 sm:p-8 border-b border-black/5 relative">
                  <button
                    onClick={closePrincipleModal}
                    className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 bg-black/5 hover:bg-black/10 rounded-full flex items-center justify-center text-[#1d1d1f] transition-colors"
                  >
                    ✕
                  </button>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                      {selectedPrinciple.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f]">{selectedPrinciple.title}</h3>
                      <p className="text-[#6e6e73] text-sm sm:text-base">{selectedPrinciple.description}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-[#1d1d1f] mb-3 uppercase tracking-wide">Overview</h4>
                    <p className="text-[#1d1d1f] text-base leading-relaxed">{selectedPrinciple.details.overview}</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-sm font-semibold text-[#1d1d1f] mb-3 uppercase tracking-wide">Key Strategies</h4>
                      <ul className="space-y-2.5">
                        {selectedPrinciple.details.strategies.map((strategy, idx) => (
                          <li key={idx} className="text-[#1d1d1f] text-sm flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{strategy}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-[#1d1d1f] mb-3 uppercase tracking-wide">Applications</h4>
                      <p className="text-[#6e6e73] text-sm leading-relaxed mb-6">{selectedPrinciple.details.applications}</p>

                      <h4 className="text-sm font-semibold text-[#1d1d1f] mb-3 uppercase tracking-wide">Benefits</h4>
                      <p className="text-[#6e6e73] text-sm leading-relaxed">{selectedPrinciple.details.benefits}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-full font-medium text-white transition-colors text-sm">
                      Implement This Principle
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
            Explore sustainable architecture solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default SustainableArchitecture;
