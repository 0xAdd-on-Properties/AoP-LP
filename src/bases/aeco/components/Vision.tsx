'use client';

import React from 'react';
import { useState } from 'react';
import { Target, Users, Globe, Zap, TreePine, Home } from 'lucide-react';
import useClickOutside from '../../../hooks/useClickOutside';

const Vision = () => {
  const [selectedSpecialization, setSelectedSpecialization] = useState<any>(null);

  const specializationModalRef = useClickOutside(() => {
    setSelectedSpecialization(null);
  });

  const handleSpecializationClick = (specialization) => {
    setSelectedSpecialization(specialization);
  };

  const closeSpecializationModal = () => {
    setSelectedSpecialization(null);
  };

  const specializationDetails = {
    "Waste Management Systems": {
      description: "Comprehensive waste management solutions that convert waste into valuable resources while maintaining zero-waste principles.",
      services: ["Organic waste composting systems", "Biogas generation units", "Recycling facility setup", "Waste segregation training"],
      benefits: "Reduce waste disposal costs by 80%, generate renewable energy, create valuable compost for gardens"
    },
    "Urban Gardens": {
      description: "Transform urban spaces into productive green areas using vertical farming, hydroponics, and permaculture principles.",
      services: ["Vertical garden installation", "Hydroponic system setup", "Rooftop farming solutions", "Community garden planning"],
      benefits: "Fresh organic produce, improved air quality, reduced food costs, community building"
    },
    "Eco-Cooling Corridors": {
      description: "Natural cooling systems that reduce energy consumption while creating comfortable living environments.",
      services: ["Wind tunnel design", "Green corridor planning", "Natural ventilation systems", "Thermal comfort optimization"],
      benefits: "Reduce cooling costs by 60%, improve indoor air quality, create natural climate control"
    },
    "Hydro & Aquaponic Systems": {
      description: "Integrated water and food production systems that maximize resource efficiency and sustainability.",
      services: ["Aquaponics system design", "Fish farming integration", "Water recycling systems", "Automated monitoring"],
      benefits: "90% less water usage, fresh fish and vegetables, closed-loop ecosystem, year-round production"
    },
    "Green Corridors": {
      description: "Connected green spaces that support biodiversity while providing recreational and environmental benefits.",
      services: ["Biodiversity planning", "Native plant selection", "Wildlife habitat creation", "Ecological restoration"],
      benefits: "Enhanced biodiversity, natural air purification, recreational spaces, property value increase"
    },
    "Renewable Energy Systems": {
      description: "Complete renewable energy solutions including solar, wind, and hybrid systems for energy independence.",
      services: ["Solar panel installation", "Wind turbine setup", "Battery storage systems", "Grid-tie solutions"],
      benefits: "Energy independence, reduced electricity bills, carbon footprint reduction, government incentives"
    },
    "Bio Pools": {
      description: "Natural swimming pools that use biological filtration instead of chemicals for clean, healthy water.",
      services: ["Natural pool design", "Biological filtration systems", "Aquatic plant selection", "Ecosystem balancing"],
      benefits: "Chemical-free swimming, natural water treatment, wildlife habitat, low maintenance costs"
    },
    "Dome Constructions": {
      description: "Geodesic and earthen dome structures that provide maximum space efficiency and natural climate control.",
      services: ["Geodesic dome design", "Earthbag construction", "Natural building materials", "Climate optimization"],
      benefits: "Energy efficient design, earthquake resistant, unique architecture, cost-effective construction"
    },
    "3D Printed Construction": {
      description: "Revolutionary construction technology that reduces waste, time, and costs while enabling complex designs.",
      services: ["3D printing consultation", "Custom design services", "Material optimization", "Construction supervision"],
      benefits: "50% faster construction, reduced material waste, complex geometries possible, cost savings"
    },
    "Sustainable Bricks": {
      description: "Eco-friendly building materials made from recycled waste, agricultural residues, and natural materials.",
      services: ["Fly ash brick production", "Compressed earth blocks", "Recycled plastic bricks", "Quality testing"],
      benefits: "Lower carbon footprint, waste utilization, better insulation, cost-effective building"
    },
    "Carbon Sinks": {
      description: "Natural and engineered systems that capture and store atmospheric carbon dioxide for climate mitigation.",
      services: ["Forest plantation", "Soil carbon enhancement", "Wetland restoration", "Carbon credit generation"],
      benefits: "Climate change mitigation, additional revenue streams, ecosystem restoration, regulatory compliance"
    },
    "Ecological Fixturing": {
      description: "Integration of natural elements into built environments for enhanced sustainability and wellness.",
      services: ["Living wall systems", "Natural lighting optimization", "Biophilic design", "Indoor air purification"],
      benefits: "Improved indoor air quality, enhanced well-being, energy savings, natural aesthetics"
    },
    "Agroforestry": {
      description: "Integrated land management combining trees, crops, and livestock for sustainable food production.",
      services: ["Agroforestry planning", "Tree-crop integration", "Silvopasture systems", "Permaculture design"],
      benefits: "Increased biodiversity, soil improvement, multiple income streams, climate resilience"
    },
    "Sustainable Village Consulting": {
      description: "Comprehensive village development planning that integrates traditional wisdom with modern sustainability practices.",
      services: ["Village master planning", "Community engagement", "Traditional knowledge integration", "Infrastructure development"],
      benefits: "Preserved cultural heritage, improved quality of life, sustainable development, community empowerment"
    },
    "Smart Construction R&D": {
      description: "Research and development of innovative construction technologies and sustainable building materials.",
      services: ["Material innovation", "Construction technology research", "Prototype development", "Performance testing"],
      benefits: "Access to cutting-edge construction technologies, reduced building costs, improved sustainability"
    },
    "Sustainable Materials R&D": {
      description: "Development of eco-friendly building materials using local resources and waste streams.",
      services: ["Material research", "Local resource utilization", "Waste-to-material conversion", "Quality testing"],
      benefits: "Innovative sustainable materials, reduced construction costs, local economic development"
    },
    "Asset Restoration & Renovation": {
      description: "Comprehensive restoration services that transform old properties into sustainable, modern living spaces.",
      services: ["Heritage building restoration", "Sustainable renovation", "Energy efficiency upgrades", "Modern amenity integration"],
      benefits: "Preserved architectural heritage, increased property value, reduced environmental impact, modern comfort"
    },
    "Property Tokenization & RWAs": {
      description: "Blockchain-based property tokenization enabling fractional ownership and transparent real estate investments.",
      services: ["Property tokenization", "Smart contract development", "Investor onboarding", "Compliance management"],
      benefits: "Fractional ownership, increased liquidity, transparent transactions, global investor access"
    },
    "NPA Management & Recovery": {
      description: "Specialized services for non-performing asset recovery and transformation into productive sustainable properties.",
      services: ["Asset valuation", "Recovery strategy", "Property rehabilitation", "Sustainable conversion"],
      benefits: "Asset recovery, value enhancement, sustainable transformation, regulatory compliance"
    },
    "Carbon Credit Generation": {
      description: "Development and management of carbon credit projects for additional revenue streams and climate impact.",
      services: ["Carbon project development", "Verification and certification", "Credit trading", "Impact monitoring"],
      benefits: "Additional revenue streams, climate impact, regulatory compliance, sustainability credentials"
    },
    "Sustainable Tourism Development": {
      description: "Eco-tourism infrastructure development that balances visitor experience with environmental conservation.",
      services: ["Eco-resort planning", "Sustainable infrastructure", "Community involvement", "Environmental protection"],
      benefits: "Economic development, environmental conservation, community empowerment, cultural preservation"
    },
    "Smart City Consulting": {
      description: "Comprehensive smart city planning that integrates technology with sustainability for livable urban environments.",
      services: ["Smart city planning", "IoT integration", "Sustainable infrastructure", "Digital governance"],
      benefits: "Improved quality of life, efficient resource use, reduced environmental impact, economic growth"
    },
    "Green Building Certification": {
      description: "Professional certification services for green building standards including LEED, GRIHA, and IGBC.",
      services: ["Certification consulting", "Documentation support", "Performance monitoring", "Compliance verification"],
      benefits: "Certified green credentials, energy savings, market differentiation, regulatory advantages"
    },
    "Environmental Impact Assessment": {
      description: "Comprehensive environmental impact studies and mitigation strategies for sustainable development projects.",
      services: ["EIA studies", "Environmental monitoring", "Mitigation planning", "Regulatory compliance"],
      benefits: "Regulatory compliance, risk mitigation, environmental protection, stakeholder confidence"
    },
    "ESG Compliance & Reporting": {
      description: "Environmental, Social, and Governance compliance services for sustainable business operations.",
      services: ["ESG framework development", "Sustainability reporting", "Compliance monitoring", "Stakeholder engagement"],
      benefits: "Regulatory compliance, investor confidence, brand reputation, sustainable growth"
    },
    "Public Smart Contract Development": {
      description: "Development of transparent, public smart contracts for real estate transactions and property management.",
      services: ["Smart contract architecture", "Public blockchain deployment", "Transaction automation", "Governance protocols"],
      benefits: "Transparent transactions, reduced costs, automated processes, trustless operations"
    },
    "Policy Development & Consulting": {
      description: "Policy research and development for sustainable real estate and urban planning initiatives.",
      services: ["Policy research", "Regulatory framework development", "Stakeholder consultation", "Implementation support"],
      benefits: "Informed policy decisions, regulatory clarity, sustainable development, public-private partnerships"
    },
    "Water Management Systems": {
      description: "Comprehensive water management solutions for sustainable water use and conservation.",
      services: ["Water audit", "Conservation systems", "Treatment solutions", "Smart monitoring"],
      benefits: "Water security, cost savings, environmental protection, regulatory compliance"
    },
    "Waste-to-Energy Solutions": {
      description: "Advanced waste processing systems that convert waste streams into renewable energy.",
      services: ["Waste analysis", "Energy conversion systems", "Process optimization", "Energy distribution"],
      benefits: "Waste reduction, renewable energy generation, cost savings, environmental impact"
    },
    "Community Development Programs": {
      description: "Comprehensive community development initiatives that promote sustainable living and social cohesion.",
      services: ["Community planning", "Social programs", "Skill development", "Local economic development"],
      benefits: "Stronger communities, economic opportunities, social cohesion, sustainable development"
    }
  };

  const stats = [
    { number: "50,000+", label: "Sustainable Homes Built", icon: <Home className="w-5 h-5" /> },
    { number: "2M+", label: "Tons CO2 Offset", icon: <TreePine className="w-5 h-5" /> },
    { number: "500+", label: "Smart Cities Connected", icon: <Globe className="w-5 h-5" /> },
    { number: "95%", label: "Energy Independence", icon: <Zap className="w-5 h-5" /> }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Vision Statement */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <p className="text-sm font-medium text-emerald-400 mb-4">Our Vision</p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            Making India's smart cities and villages a reality
          </h2>

          <p className="text-lg text-white/60 leading-relaxed">
            We blend the timeless wisdom of ancient Indian architecture with cutting-edge
            sustainable technologies to create homes that honor our heritage while
            protecting our future.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 mb-16 sm:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="min-w-0">
              <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                To democratize sustainable living by making eco-friendly, technologically
                advanced properties accessible to every family in Bharat. We handle the R&D
                and heavy lifting with advanced technologies, ensuring sustainable housing
                remains affordable and seamless.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/10 px-3 py-1.5 rounded-full text-white/80 text-xs font-medium">Ancient Wisdom</span>
                <span className="bg-white/10 px-3 py-1.5 rounded-full text-white/80 text-xs font-medium">Modern Technology</span>
                <span className="bg-white/10 px-3 py-1.5 rounded-full text-white/80 text-xs font-medium">Affordable Access</span>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl h-48 flex items-center justify-center min-w-0">
              <div className="text-center px-4">
                <div className="w-14 h-14 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-emerald-400" />
                </div>
                <h4 className="text-white text-base font-semibold mb-1">Community First</h4>
                <p className="text-white/50 text-sm">Building sustainable communities for all generations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden mb-16 sm:mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#0a0a0a] p-6 text-center"
            >
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mx-auto mb-3 text-emerald-400">
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-white/50 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Specializations */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-6">Core specializations</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Waste Management Systems", "Urban Gardens", "Eco-Cooling Corridors",
              "Hydro & Aquaponic Systems", "Green Corridors", "Renewable Energy Systems",
              "Bio Pools", "Dome Constructions", "3D Printed Construction", "Sustainable Bricks",
              "Carbon Sinks", "Ecological Fixturing", "Agroforestry", "Sustainable Village Consulting",
              "Smart Construction R&D", "Sustainable Materials R&D"
            ].map((specialization, index) => (
              <button
                key={index}
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 text-white/80 text-sm transition-colors"
                onClick={() => handleSpecializationClick(specialization)}
              >
                {specialization}
              </button>
            ))}
          </div>
        </div>

        {/* Extended Specializations */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-xl font-bold text-white mb-6">Extended specializations</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Asset Restoration & Renovation", "Property Tokenization & RWAs", "NPA Management & Recovery",
              "Carbon Credit Generation", "Sustainable Tourism Development", "Smart City Consulting",
              "Green Building Certification", "Environmental Impact Assessment",
              "ESG Compliance & Reporting", "Public Smart Contract Development", "Policy Development & Consulting",
              "Water Management Systems", "Waste-to-Energy Solutions", "Community Development Programs"
            ].map((specialization, index) => (
              <button
                key={index}
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 text-white/80 text-sm transition-colors"
                onClick={() => handleSpecializationClick(specialization)}
              >
                {specialization}
              </button>
            ))}
          </div>
        </div>

        {/* Specialization Details Modal */}
        {selectedSpecialization && specializationDetails[selectedSpecialization] && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-[#1c1c1e] border border-white/10 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" ref={specializationModalRef}>
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <h3 className="text-xl font-bold text-white">{selectedSpecialization}</h3>
                  <button
                    onClick={closeSpecializationModal}
                    className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors flex-shrink-0"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-white/70 text-base mb-8 leading-relaxed">
                  {specializationDetails[selectedSpecialization].description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">Our Services</h4>
                    <ul className="space-y-2.5">
                      {specializationDetails[selectedSpecialization].services.map((service, idx) => (
                        <li key={idx} className="text-white/70 text-sm flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">Key Benefits</h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {specializationDetails[selectedSpecialization].benefits}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-full font-medium text-white transition-colors text-sm">
                    Get Quote
                  </button>
                  <button className="flex-1 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full font-medium text-white transition-colors text-sm">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <button className="bg-emerald-600 hover:bg-emerald-700 px-8 py-3.5 rounded-full font-medium text-white transition-colors text-sm">
            Join our mission
          </button>
        </div>
      </div>
    </section>
  );
};

export default Vision;
