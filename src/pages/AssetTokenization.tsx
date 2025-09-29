import React, { useState } from 'react';
import { Coins, Shield, TrendingUp, Users, Lock, Zap, Globe, BarChart3, Wallet } from 'lucide-react';

const AssetTokenization = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [investmentAmount, setInvestmentAmount] = useState(10000);

  const tokenizedProperties = [
    {
      id: 1,
      name: "Eco Villa Araku Valley",
      location: "Araku Valley, Visakhapatnam",
      totalValue: "₹85,00,000",
      tokenPrice: "₹100",
      tokensAvailable: 25000,
      investors: 156,
      expectedReturn: "12-15%",
      sustainabilityScore: 95,
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Solar Powered", "Rainwater Harvesting", "Carbon Negative"],
      blockchain: "Polygon",
      verified: true
    },
    {
      id: 2,
      name: "Mandala Sacred Homes",
      location: "Madhurawada, Visakhapatnam",
      totalValue: "₹1,20,00,000",
      tokenPrice: "₹150",
      tokensAvailable: 18000,
      investors: 234,
      expectedReturn: "10-12%",
      sustainabilityScore: 92,
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Vastu Compliant", "Sacred Geometry", "Energy Optimized"],
      blockchain: "Ethereum",
      verified: true
    },
    {
      id: 3,
      name: "Smart Eco Apartments",
      location: "Gajuwaka, Visakhapatnam",
      totalValue: "₹65,00,000",
      tokenPrice: "₹75",
      tokensAvailable: 35000,
      investors: 89,
      expectedReturn: "8-10%",
      sustainabilityScore: 88,
      image: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["IoT Enabled", "Vertical Gardens", "Energy Positive"],
      blockchain: "Polygon",
      verified: true
    }
  ];

  const benefits = [
    {
      icon: Coins,
      title: "Fractional Ownership",
      description: "Own a portion of premium properties with as little as ₹1,000 investment"
    },
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Smart contracts ensure transparent and secure property ownership records"
    },
    {
      icon: TrendingUp,
      title: "Passive Income",
      description: "Earn rental income and capital appreciation from tokenized properties"
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Invest in Indian sustainable properties from anywhere in the world"
    },
    {
      icon: Zap,
      title: "Instant Liquidity",
      description: "Trade property tokens on secondary markets for instant liquidity"
    },
    {
      icon: Lock,
      title: "Regulatory Compliant",
      description: "All tokenizations follow SEBI guidelines and Indian regulations"
    }
  ];

  const calculateTokens = (amount) => {
    if (!selectedProperty) return 0;
    return Math.floor(amount / selectedProperty.tokenPrice);
  };

  return (
    <div className="min-h-screen bg-base-100 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-base-200 to-base-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              <span className="gradient-text">Real Estate</span>
              <br />
              <span className="text-white">Asset Tokenization</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Democratize sustainable property investment through blockchain technology. 
              Own fractions of premium eco-properties with complete transparency and security.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary btn-lg">
              <Coins className="w-5 h-5 mr-2" />
              Start Investing
            </button>
            <button className="btn btn-outline btn-lg">
              <Shield className="w-5 h-5 mr-2" />
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How Property Tokenization Works</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Understanding the process of tokenizing real estate assets on the blockchain
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Property Selection</h3>
              <p className="text-gray-300 text-sm">We select high-quality sustainable properties for tokenization</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Legal Structure</h3>
              <p className="text-gray-300 text-sm">Create legal framework and compliance with Indian regulations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Smart Contract</h3>
              <p className="text-gray-300 text-sm">Deploy smart contracts on blockchain for transparent ownership</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-info rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Token Trading</h3>
              <p className="text-gray-300 text-sm">Investors can buy, sell, and trade property tokens</p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Properties */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">Tokenized Properties</h2>
            <button className="btn btn-outline">View All Properties</button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tokenizedProperties.map((property) => (
              <div key={property.id} className="card bg-base-100 shadow-xl card-hover">
                <figure className="relative h-48">
                  <img 
                    src={property.image} 
                    alt={property.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Verification Badge */}
                  {property.verified && (
                    <div className="absolute top-4 left-4 badge badge-success gap-2">
                      <Shield className="w-3 h-3" />
                      Verified
                    </div>
                  )}

                  {/* Blockchain Badge */}
                  <div className="absolute top-4 right-4 badge badge-primary">
                    {property.blockchain}
                  </div>

                  {/* Total Value */}
                  <div className="absolute bottom-4 right-4 bg-primary px-3 py-1 rounded-xl">
                    <span className="text-white font-bold text-sm">{property.totalValue}</span>
                  </div>
                </figure>

                <div className="card-body">
                  <h3 className="card-title text-white">{property.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{property.location}</p>

                  {/* Investment Details */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-gray-400 text-xs">Token Price</p>
                      <p className="text-white font-semibold">{property.tokenPrice}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Expected Return</p>
                      <p className="text-success font-semibold">{property.expectedReturn}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Available Tokens</p>
                      <p className="text-white font-semibold">{property.tokensAvailable.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Investors</p>
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3 text-gray-400" />
                        <span className="text-white font-semibold">{property.investors}</span>
                      </div>
                    </div>
                  </div>

                  {/* Sustainability Score */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-400 text-xs">Sustainability Score</span>
                      <span className="text-success font-bold">{property.sustainabilityScore}/100</span>
                    </div>
                    <progress 
                      className="progress progress-success w-full" 
                      value={property.sustainabilityScore} 
                      max="100"
                    ></progress>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {property.features.map((feature, idx) => (
                      <span key={idx} className="badge badge-outline badge-sm">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="card-actions justify-between">
                    <button 
                      onClick={() => setSelectedProperty(property)}
                      className="btn btn-primary"
                    >
                      Invest Now
                    </button>
                    <button className="btn btn-ghost btn-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-base-200 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedProperty.name}</h3>
                  <p className="text-gray-400">{selectedProperty.location}</p>
                </div>
                <button 
                  onClick={() => setSelectedProperty(null)}
                  className="btn btn-circle btn-ghost"
                >
                  ✕
                </button>
              </div>

              {/* Investment Calculator */}
              <div className="card bg-base-100 mb-6">
                <div className="card-body">
                  <h4 className="card-title text-white">Investment Calculator</h4>
                  
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-gray-300">Investment Amount (₹)</span>
                    </label>
                    <input 
                      type="range"
                      min="1000"
                      max="100000"
                      value={investmentAmount}
                      onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                      className="range range-primary"
                    />
                    <div className="w-full flex justify-between text-xs text-gray-400 px-2">
                      <span>₹1K</span>
                      <span>₹50K</span>
                      <span>₹100K</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="stat">
                      <div className="stat-title text-gray-400">Investment Amount</div>
                      <div className="stat-value text-primary text-lg">₹{investmentAmount.toLocaleString()}</div>
                    </div>
                    <div className="stat">
                      <div className="stat-title text-gray-400">Tokens Received</div>
                      <div className="stat-value text-secondary text-lg">{calculateTokens(investmentAmount)}</div>
                    </div>
                    <div className="stat">
                      <div className="stat-title text-gray-400">Ownership %</div>
                      <div className="stat-value text-accent text-lg">
                        {((calculateTokens(investmentAmount) / selectedProperty.tokensAvailable) * 100).toFixed(2)}%
                      </div>
                    </div>
                    <div className="stat">
                      <div className="stat-title text-gray-400">Expected Return</div>
                      <div className="stat-value text-success text-lg">{selectedProperty.expectedReturn}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Property Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Property Features</h4>
                  <div className="space-y-2">
                    {selectedProperty.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Investment Details</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Token Price</span>
                      <span className="text-white">{selectedProperty.tokenPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Blockchain</span>
                      <span className="text-white">{selectedProperty.blockchain}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Current Investors</span>
                      <span className="text-white">{selectedProperty.investors}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Sustainability Score</span>
                      <span className="text-success">{selectedProperty.sustainabilityScore}/100</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-4">
                <button className="btn btn-primary flex-1">
                  <Wallet className="w-4 h-4 mr-2" />
                  Connect Wallet & Invest
                </button>
                <button className="btn btn-outline">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Analytics
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Tokenized Real Estate?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Blockchain technology brings transparency, accessibility, and liquidity to real estate investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <div key={idx} className="card bg-base-200 shadow-lg">
                  <div className="card-body text-center">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="card-title text-white text-lg justify-center">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Investing?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of investors who are building wealth through tokenized sustainable real estate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-white btn-lg">
              <Coins className="w-5 h-5 mr-2" />
              Browse Properties
            </button>
            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-primary btn-lg">
              <Shield className="w-5 h-5 mr-2" />
              Learn About Security
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AssetTokenization;
