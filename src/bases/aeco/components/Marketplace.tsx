import React from 'react';
import { useState } from 'react';
import { Package, Truck, Shield, Leaf, Zap, Droplets, TreePine, Recycle, Search } from 'lucide-react';
import useClickOutside from '../../../hooks/useClickOutside';

const Marketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

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
      icon: <Search className="w-8 h-8" />,
      title: "Property Marketplace",
      items: "15,000+ properties",
      description: "Discover and buy sustainable properties across India",
      gradient: "from-blue-500 to-indigo-500",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400",
      details: {
        features: ["Virtual Tours", "Drone Surveys", "Sustainability Ratings", "Price Predictions"],
        process: "Browse → Schedule Visit → Get Financing → Complete Purchase",
        benefits: "AI-powered matching, verified sustainable properties, end-to-end support"
      }
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable Materials",
      items: "2,400+ products",
      description: "Eco-friendly building materials from bamboo to recycled steel",
      gradient: "from-green-500 to-emerald-500",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400",
      details: {
        features: ["Carbon Footprint Tracking", "Quality Certifications", "Bulk Pricing", "Local Sourcing"],
        process: "Select Materials → Get Quote → Quality Check → Delivery",
        benefits: "Reduced environmental impact, cost savings, quality assurance"
      }
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Tokenized Assets Marketplace",
      items: "500+ tokenized properties",
      description: "Buy fractional ownership in premium sustainable properties",
      gradient: "from-purple-500 to-pink-500",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400",
      details: {
        features: ["Fractional Ownership", "Blockchain Security", "Instant Liquidity", "Global Access"],
        process: "Browse Tokens → Verify Identity → Purchase Shares → Earn Returns",
        benefits: "Lower entry barriers, diversified portfolio, transparent ownership"
      }
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Renewable Energy",
      items: "850+ systems",
      description: "Solar panels, wind turbines, and energy storage solutions",
      gradient: "from-yellow-500 to-orange-500",
      image: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=400",
      details: {
        features: ["Energy Audit", "Custom Design", "Installation Support", "Monitoring Systems"],
        process: "Site Assessment → System Design → Installation → Monitoring",
        benefits: "Energy independence, reduced bills, carbon footprint reduction"
      }
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Water Systems",
      items: "320+ solutions",
      description: "Rainwater harvesting, filtration, and aquaponic systems",
      gradient: "from-blue-500 to-cyan-500",
      image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400",
      details: {
        features: ["Water Quality Testing", "Custom Solutions", "Maintenance Support", "Smart Monitoring"],
        process: "Water Audit → System Design → Installation → Maintenance",
        benefits: "Water security, cost savings, sustainable water management"
      }
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Urban Gardens",
      items: "1,200+ items",
      description: "Vertical gardens, hydroponic systems, and organic supplies",
      gradient: "from-green-600 to-lime-500",
      image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400",
      details: {
        features: ["Space Planning", "Plant Selection", "Automated Systems", "Organic Supplies"],
        process: "Space Assessment → Garden Design → Setup → Maintenance",
        benefits: "Fresh produce, air purification, stress reduction, food security"
      }
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Smart Home Tech",
      items: "950+ devices",
      description: "IoT sensors, automation systems, and monitoring tools",
      gradient: "from-gray-600 to-slate-700",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400",
      details: {
        features: ["Home Automation", "Energy Monitoring", "Security Systems", "Climate Control"],
        process: "Home Assessment → System Design → Installation → Configuration",
        benefits: "Convenience, energy efficiency, security, remote monitoring"
      }
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Waste Management",
      items: "180+ systems",
      description: "Composting units, biogas systems, and recycling equipment",
      gradient: "from-green-600 to-teal-600",
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
      icon: <Truck className="w-6 h-6" />,
      title: "Carbon-Neutral Delivery",
      description: "All shipments offset with renewable energy"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sustainability Verified",
      description: "Every product meets our eco-standards"
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Bulk Discounts",
      description: "Save more on larger sustainable projects"
    }
  ];

  return (
    <section className="py-24 bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-green-400 to-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-green-500/30 mb-6">
            <Package className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-medium">Sustainable Construction Ecosystem</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Everything You Need
            </span>
            <br />
            <span className="text-white">For Sustainable Living</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our curated marketplace of eco-friendly materials, renewable energy systems, 
            and innovative technologies for your sustainable property journey.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => handleCategoryClick(category)}
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-20">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              <div className="relative p-8">
                {/* Icon */}
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-4 text-emerald-400">
                  {category.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                  {category.title}
                </h3>
                <p className="text-green-400 text-sm font-medium mb-3">{category.items}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {category.description}
                </p>
                
                {/* CTA Button */}
                <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300">
                  Explore Category
                </button>
              </div>

              {/* Hover Glow */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl`}></div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-emerald-400 flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
              Browse All Products
            </button>
            <button className="bg-white/10 hover:bg-white/20 border border-white/20 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300">
              Become a Vendor
            </button>
          </div>
          
          <p className="text-gray-400 text-sm mt-6">
            Join 50,000+ satisfied customers building sustainable futures across India
          </p>
        </div>

        {/* Category Details Modal */}
        {selectedCategory && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-slate-800 border border-white/20 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" ref={categoryModalRef}>
              <div className="relative">
                {/* Header Image */}
                <div className="h-48 overflow-hidden rounded-t-3xl relative">
                  <img 
                    src={selectedCategory.image} 
                    alt={selectedCategory.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent"></div>
                  <button 
                    onClick={closeModal}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
                  >
                    ✕
                  </button>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center text-emerald-400">
                      {selectedCategory.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{selectedCategory.title}</h3>
                      <p className="text-green-400 font-medium">{selectedCategory.items}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg mb-8">{selectedCategory.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div>
                      <h4 className="text-white font-semibold mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedCategory.details.features.map((feature, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">Process</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{selectedCategory.details.process}</p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">Benefits</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{selectedCategory.details.benefits}</p>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300">
                      Get Started
                    </button>
                    <button className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300">
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