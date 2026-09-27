'use client';

import React, { useState } from 'react';
import { Coins, Shield, TrendingUp, Users, Lock, Zap, Globe, BarChart3, Wallet } from 'lucide-react';

const AssetTokenization = () => {
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
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

  const steps = [
    { number: "1", title: "Property Selection", description: "We select high-quality sustainable properties for tokenization" },
    { number: "2", title: "Legal Structure", description: "Create legal framework and compliance with Indian regulations" },
    { number: "3", title: "Smart Contract", description: "Deploy smart contracts on blockchain for transparent ownership" },
    { number: "4", title: "Token Trading", description: "Investors can buy, sell, and trade property tokens" }
  ];

  const calculateTokens = (amount) => {
    if (!selectedProperty) return 0;
    return Math.floor(amount / selectedProperty.tokenPrice);
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-[#f5f5f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20">
          <div className="max-w-3xl min-w-0 space-y-6">
            <p className="text-sm font-medium text-emerald-600">Real Estate Tokenization</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1d1d1f] leading-[1.05]">
              <span className="text-emerald-600">Fractional</span> ownership, on-chain
            </h1>
            <p className="text-base sm:text-lg text-[#6e6e73] leading-relaxed max-w-xl">
              Democratize sustainable property investment through blockchain technology.
              Own fractions of premium eco-properties with complete transparency and security.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-[#1d1d1f] hover:bg-black px-6 py-3 rounded-full font-medium text-white transition-colors text-sm">
                Start Investing
              </button>
              <button className="px-6 py-3 rounded-full font-medium text-[#1d1d1f] border border-black/10 hover:bg-black/5 transition-colors text-sm">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-sm font-medium text-emerald-600 mb-3">The process</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
              How property tokenization works
            </h2>
            <p className="text-lg text-[#6e6e73] leading-relaxed">
              Understanding the process of tokenizing real estate assets on the blockchain.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/5 rounded-2xl overflow-hidden border border-black/5">
            {steps.map((step) => (
              <div key={step.number} className="bg-white p-6 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600 font-semibold text-sm">
                  {step.number}
                </div>
                <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">{step.title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Properties */}
      <section className="py-16 sm:py-24 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight">Tokenized properties</h2>
            <button className="px-5 py-2.5 rounded-full font-medium text-[#1d1d1f] border border-black/10 hover:bg-black/5 transition-colors text-sm w-fit">
              View all properties
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {tokenizedProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-2xl overflow-hidden border border-black/5 min-w-0">
                <div className="relative h-48">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {property.verified && (
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                        <Shield className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-[#1d1d1f] text-xs font-medium">Verified</span>
                      </div>
                    )}
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-[#1d1d1f] text-xs font-medium">{property.blockchain}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white px-3 py-1.5 rounded-full shadow-sm">
                    <span className="text-[#1d1d1f] font-semibold text-sm">{property.totalValue}</span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 min-w-0">
                  <h3 className="text-lg font-semibold text-[#1d1d1f] mb-1 truncate">{property.name}</h3>
                  <p className="text-[#6e6e73] text-sm mb-4 truncate">{property.location}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="min-w-0">
                      <p className="text-[#86868b] text-xs">Token price</p>
                      <p className="text-[#1d1d1f] font-semibold">{property.tokenPrice}</p>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[#86868b] text-xs">Expected return</p>
                      <p className="text-emerald-600 font-semibold">{property.expectedReturn}</p>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[#86868b] text-xs">Available tokens</p>
                      <p className="text-[#1d1d1f] font-semibold">{property.tokensAvailable.toLocaleString()}</p>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[#86868b] text-xs">Investors</p>
                      <div className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-[#86868b]" />
                        <span className="text-[#1d1d1f] font-semibold">{property.investors}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs text-[#6e6e73]">Sustainability score</span>
                      <span className="text-emerald-600 font-semibold text-sm">{property.sustainabilityScore}/100</span>
                    </div>
                    <div className="w-full bg-black/5 rounded-full h-1.5">
                      <div
                        className="bg-emerald-600 h-1.5 rounded-full"
                        style={{ width: `${property.sustainabilityScore}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {property.features.map((feature, idx) => (
                      <span key={idx} className="text-xs text-[#6e6e73] border border-black/10 rounded-full px-2.5 py-1">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProperty(property)}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 px-4 py-2.5 rounded-full font-medium text-white transition-colors text-sm"
                    >
                      Invest now
                    </button>
                    <button className="text-[#1d1d1f] hover:text-emerald-600 text-sm font-medium transition-colors whitespace-nowrap">
                      Details
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
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-black/10 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="min-w-0">
                  <h3 className="text-xl font-bold text-[#1d1d1f] truncate">{selectedProperty.name}</h3>
                  <p className="text-[#6e6e73] text-sm truncate">{selectedProperty.location}</p>
                </div>
                <button
                  onClick={() => setSelectedProperty(null)}
                  className="w-9 h-9 bg-black/5 hover:bg-black/10 rounded-full flex items-center justify-center text-[#1d1d1f] transition-colors flex-shrink-0"
                >
                  ✕
                </button>
              </div>

              <div className="bg-[#f5f5f7] rounded-2xl p-5 sm:p-6 mb-6">
                <h4 className="text-sm font-semibold text-[#1d1d1f] mb-4 uppercase tracking-wide">Investment calculator</h4>

                <label className="block text-sm text-[#6e6e73] mb-2">Investment amount (₹)</label>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                  className="w-full accent-emerald-600"
                />
                <div className="w-full flex justify-between text-xs text-[#86868b] mt-1 mb-5">
                  <span>₹1K</span>
                  <span>₹50K</span>
                  <span>₹100K</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="min-w-0">
                    <p className="text-xs text-[#86868b]">Investment amount</p>
                    <p className="text-lg font-semibold text-[#1d1d1f]">₹{investmentAmount.toLocaleString()}</p>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-[#86868b]">Tokens received</p>
                    <p className="text-lg font-semibold text-[#1d1d1f]">{calculateTokens(investmentAmount)}</p>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-[#86868b]">Ownership %</p>
                    <p className="text-lg font-semibold text-[#1d1d1f]">
                      {((calculateTokens(investmentAmount) / selectedProperty.tokensAvailable) * 100).toFixed(2)}%
                    </p>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-[#86868b]">Expected return</p>
                    <p className="text-lg font-semibold text-emerald-600">{selectedProperty.expectedReturn}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-[#1d1d1f] mb-3 uppercase tracking-wide">Property features</h4>
                  <div className="space-y-2">
                    {selectedProperty.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full flex-shrink-0"></div>
                        <span className="text-[#1d1d1f] text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-[#1d1d1f] mb-3 uppercase tracking-wide">Investment details</h4>
                  <div className="space-y-2.5 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#6e6e73]">Token price</span>
                      <span className="text-[#1d1d1f]">{selectedProperty.tokenPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6e6e73]">Blockchain</span>
                      <span className="text-[#1d1d1f]">{selectedProperty.blockchain}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6e6e73]">Current investors</span>
                      <span className="text-[#1d1d1f]">{selectedProperty.investors}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6e6e73]">Sustainability score</span>
                      <span className="text-emerald-600">{selectedProperty.sustainabilityScore}/100</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-full font-medium text-white transition-colors text-sm inline-flex items-center justify-center gap-2">
                  <Wallet className="w-4 h-4" />
                  Connect wallet & invest
                </button>
                <button className="flex-1 border border-black/10 hover:bg-black/5 px-6 py-3 rounded-full font-medium text-[#1d1d1f] transition-colors text-sm inline-flex items-center justify-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  View analytics
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Benefits */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-sm font-medium text-emerald-600 mb-3">Why tokenize</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
              Why choose tokenized real estate?
            </h2>
            <p className="text-lg text-[#6e6e73] leading-relaxed">
              Blockchain technology brings transparency, accessibility, and liquidity to real estate investment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/5 rounded-2xl overflow-hidden border border-black/5">
            {benefits.map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <div key={idx} className="bg-white hover:bg-[#f5f5f7] transition-colors p-6 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">{benefit.title}</h3>
                  <p className="text-sm text-[#6e6e73] leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA — the one deliberate dark section */}
      <section className="bg-[#1d1d1f] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-8 sm:mb-10">
            <p className="text-sm font-medium text-emerald-400 mb-3">Get started</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              Ready to start investing?
            </h2>
            <p className="text-white/60 leading-relaxed">
              Join thousands of investors building wealth through tokenized sustainable real estate.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-[#1d1d1f] bg-white hover:bg-white/90 transition-colors text-sm">
              <Coins className="w-4 h-4" />
              Browse properties
            </button>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white bg-white/10 hover:bg-white/15 transition-colors text-sm">
              <Shield className="w-4 h-4" />
              Learn about security
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AssetTokenization;
