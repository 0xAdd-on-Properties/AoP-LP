'use client';

import React, { useState } from 'react';
import { Wallet, Link2, Shield, Zap, Globe, Code, Coins, Users, Lock, ArrowUpRight } from 'lucide-react';

const Web3 = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState('polygon');

  const web3Features = [
    {
      icon: Wallet,
      title: "Crypto Payments",
      description: "Pay for properties using major cryptocurrencies like ETH, MATIC, and USDC",
      status: "Live"
    },
    {
      icon: Shield,
      title: "Smart Contracts",
      description: "Automated property transactions with built-in escrow and security",
      status: "Live"
    },
    {
      icon: Coins,
      title: "DeFi Integration",
      description: "Stake property tokens to earn yield and access decentralized finance",
      status: "Beta"
    },
    {
      icon: Users,
      title: "DAO Governance",
      description: "Community-driven decisions for property development and management",
      status: "Coming Soon"
    },
    {
      icon: Globe,
      title: "Cross-Chain Support",
      description: "Trade property tokens across multiple blockchain networks",
      status: "Development"
    },
    {
      icon: Lock,
      title: "Zero-Knowledge Proofs",
      description: "Private property verification without revealing sensitive data",
      status: "Research"
    }
  ];

  const statusStyle = {
    'Live': 'text-emerald-600 bg-emerald-50',
    'Beta': 'text-[#1d1d1f] bg-black/5',
    'Coming Soon': 'text-[#1d1d1f] bg-black/5',
    'Development': 'text-[#1d1d1f] bg-black/5',
    'Research': 'text-[#86868b] bg-black/5'
  };

  const supportedNetworks = [
    {
      id: 'ethereum',
      name: 'Ethereum',
      icon: '⟠',
      gasToken: 'ETH',
      avgGas: '$15-50',
      speed: 'Medium',
      features: ['NFTs', 'DeFi', 'Smart Contracts']
    },
    {
      id: 'polygon',
      name: 'Polygon',
      icon: '⬟',
      gasToken: 'MATIC',
      avgGas: '$0.01-0.05',
      speed: 'Fast',
      features: ['Low Fees', 'Fast Transactions', 'Ethereum Compatible']
    },
    {
      id: 'bsc',
      name: 'BSC',
      icon: '◆',
      gasToken: 'BNB',
      avgGas: '$0.20-1.00',
      speed: 'Fast',
      features: ['Low Fees', 'High Throughput', 'DeFi Ecosystem']
    }
  ];

  const dapps = [
    {
      name: "Property NFT Marketplace",
      description: "Trade property NFTs representing ownership rights",
      category: "Marketplace",
      tvl: "$2.5M",
      users: "1.2K",
      apy: "8-12%"
    },
    {
      name: "Rental Yield Protocol",
      description: "Earn passive income from tokenized rental properties",
      category: "DeFi",
      tvl: "$890K",
      users: "456",
      apy: "6-10%"
    },
    {
      name: "Property Development DAO",
      description: "Community funding for sustainable property projects",
      category: "DAO",
      tvl: "$1.8M",
      users: "789",
      apy: "4-8%"
    }
  ];

  const connectWallet = () => {
    setWalletConnected(true);
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-[#f5f5f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20">
          <div className="max-w-3xl min-w-0 space-y-6">
            <p className="text-sm font-medium text-emerald-600">Blockchain-powered real estate</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1d1d1f] leading-[1.05]">
              The <span className="text-emerald-600">Web3</span> property ecosystem
            </h1>
            <p className="text-base sm:text-lg text-[#6e6e73] leading-relaxed max-w-xl">
              Experience the future of real estate with blockchain technology, smart contracts,
              and decentralized finance integrated into sustainable property investment.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={connectWallet}
                className={`px-6 py-3 rounded-full font-medium transition-colors text-sm inline-flex items-center gap-2 ${
                  walletConnected ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : 'bg-[#1d1d1f] hover:bg-black text-white'
                }`}
              >
                <Wallet className="w-4 h-4" />
                {walletConnected ? 'Wallet connected' : 'Connect wallet'}
              </button>
              <button className="px-6 py-3 rounded-full font-medium text-[#1d1d1f] border border-black/10 hover:bg-black/5 transition-colors text-sm inline-flex items-center gap-2">
                <Code className="w-4 h-4" />
                Explore DApps
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Wallet Connection Status */}
      {walletConnected && (
        <section className="py-3 bg-emerald-50 border-b border-emerald-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></div>
              <span className="text-emerald-700 font-medium text-sm text-center">
                Wallet connected: 0x742d…Ae12 · Balance: 1.25 ETH, 2,450 MATIC
              </span>
            </div>
          </div>
        </section>
      )}

      {/* Web3 Features */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-sm font-medium text-emerald-600 mb-3">Built-in</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
              Web3 features
            </h2>
            <p className="text-lg text-[#6e6e73] leading-relaxed">
              Cutting-edge blockchain technology powering the next generation of property investment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {web3Features.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div key={idx} className="bg-white border border-black/5 rounded-2xl p-6 min-w-0">
                  <div className="flex items-start justify-between mb-4 gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap ${statusStyle[feature.status]}`}>
                      {feature.status}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">{feature.title}</h3>
                  <p className="text-sm text-[#6e6e73] leading-relaxed mb-4">{feature.description}</p>

                  <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium inline-flex items-center gap-1 transition-colors">
                    Learn more
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Supported Networks */}
      <section className="py-16 sm:py-24 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-sm font-medium text-emerald-600 mb-3">Multi-chain</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
              Supported blockchain networks
            </h2>
            <p className="text-lg text-[#6e6e73] leading-relaxed">
              Multi-chain support for optimal user experience and cost efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {supportedNetworks.map((network) => (
              <div
                key={network.id}
                onClick={() => setSelectedNetwork(network.id)}
                className={`rounded-2xl p-6 cursor-pointer transition-colors min-w-0 ${
                  selectedNetwork === network.id ? 'bg-white border-2 border-emerald-600' : 'bg-white border border-black/5 hover:border-black/10'
                }`}
              >
                <div className="text-3xl mb-3 text-[#1d1d1f]">{network.icon}</div>
                <h3 className="text-[#1d1d1f] font-semibold text-base mb-4">{network.name}</h3>

                <div className="space-y-2.5 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#86868b]">Gas token</span>
                    <span className="text-[#1d1d1f]">{network.gasToken}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#86868b]">Avg gas</span>
                    <span className="text-[#1d1d1f]">{network.avgGas}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#86868b]">Speed</span>
                    <span className="text-[#1d1d1f]">{network.speed}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {network.features.map((feature, idx) => (
                    <span key={idx} className="text-xs text-[#6e6e73] border border-black/10 rounded-full px-2.5 py-1">
                      {feature}
                    </span>
                  ))}
                </div>

                {selectedNetwork === network.id && (
                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-full font-medium text-white transition-colors text-sm">
                    Switch to {network.name}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DApps Ecosystem */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-sm font-medium text-emerald-600 mb-3">Ecosystem</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
              Decentralized applications
            </h2>
            <p className="text-lg text-[#6e6e73] leading-relaxed">
              Explore our ecosystem of DApps built for sustainable property investment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {dapps.map((dapp, idx) => (
              <div key={idx} className="bg-white border border-black/5 rounded-2xl p-6 min-w-0">
                <div className="flex items-start justify-between mb-3 gap-3">
                  <h3 className="text-[#1d1d1f] font-semibold text-base">{dapp.name}</h3>
                  <span className="text-xs font-medium text-emerald-600 bg-emerald-50 rounded-full px-2.5 py-1 flex-shrink-0">
                    {dapp.category}
                  </span>
                </div>

                <p className="text-[#6e6e73] text-sm mb-5 leading-relaxed">{dapp.description}</p>

                <div className="grid grid-cols-3 gap-2 mb-5">
                  <div className="min-w-0">
                    <p className="text-[#86868b] text-xs">TVL</p>
                    <p className="text-[#1d1d1f] font-semibold text-sm">{dapp.tvl}</p>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#86868b] text-xs">Users</p>
                    <p className="text-[#1d1d1f] font-semibold text-sm">{dapp.users}</p>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#86868b] text-xs">APY</p>
                    <p className="text-emerald-600 font-semibold text-sm">{dapp.apy}</p>
                  </div>
                </div>

                <button className="w-full bg-emerald-600 hover:bg-emerald-700 px-4 py-2.5 rounded-full font-medium text-white transition-colors text-sm inline-flex items-center justify-center gap-1.5">
                  Launch DApp
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Contract Info */}
      <section className="py-16 sm:py-24 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="min-w-0">
              <p className="text-sm font-medium text-emerald-600 mb-3">Security</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4 tracking-tight">Smart contract security</h2>
              <p className="text-[#6e6e73] mb-6 leading-relaxed">
                Our smart contracts are audited by leading security firms and implement best
                practices for secure property tokenization and trading.
              </p>

              <div className="space-y-3.5 mb-8">
                <div className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-[#1d1d1f] text-sm">Multi-signature wallet security</span>
                </div>
                <div className="flex items-center gap-3">
                  <Lock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-[#1d1d1f] text-sm">Timelock mechanisms for upgrades</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-[#1d1d1f] text-sm">Gas-optimized contract architecture</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-[#1d1d1f] text-sm">Open-source and verified contracts</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="bg-[#1d1d1f] hover:bg-black px-6 py-3 rounded-full font-medium text-white transition-colors text-sm">
                  View contracts
                </button>
                <button className="px-6 py-3 rounded-full font-medium text-[#1d1d1f] border border-black/10 hover:bg-black/5 transition-colors text-sm">
                  Security audit
                </button>
              </div>
            </div>

            <div className="min-w-0 bg-white rounded-3xl border border-black/5 p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-[#1d1d1f] mb-5">Contract addresses</h3>

              <div className="space-y-4 mb-6">
                <div className="min-w-0">
                  <p className="text-[#86868b] text-xs mb-1">Property token contract</p>
                  <div className="flex items-center gap-2 min-w-0">
                    <code className="text-emerald-600 text-xs bg-emerald-50 px-2 py-1 rounded-md truncate">
                      0x742d35C...2Ae12
                    </code>
                    <button className="w-7 h-7 rounded-lg hover:bg-black/5 flex items-center justify-center text-[#6e6e73] flex-shrink-0 transition-colors">
                      <Link2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="min-w-0">
                  <p className="text-[#86868b] text-xs mb-1">Marketplace contract</p>
                  <div className="flex items-center gap-2 min-w-0">
                    <code className="text-emerald-600 text-xs bg-emerald-50 px-2 py-1 rounded-md truncate">
                      0x8f2a14B...7Cf89
                    </code>
                    <button className="w-7 h-7 rounded-lg hover:bg-black/5 flex items-center justify-center text-[#6e6e73] flex-shrink-0 transition-colors">
                      <Link2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="min-w-0">
                  <p className="text-[#86868b] text-xs mb-1">Staking contract</p>
                  <div className="flex items-center gap-2 min-w-0">
                    <code className="text-emerald-600 text-xs bg-emerald-50 px-2 py-1 rounded-md truncate">
                      0xa3c92E1...9Bd43
                    </code>
                    <button className="w-7 h-7 rounded-lg hover:bg-black/5 flex items-center justify-center text-[#6e6e73] flex-shrink-0 transition-colors">
                      <Link2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-5 border-t border-black/5">
                <div className="min-w-0">
                  <p className="text-[#86868b] text-xs">Total value locked</p>
                  <p className="text-[#1d1d1f] font-semibold text-lg">$5.2M</p>
                </div>
                <div className="min-w-0">
                  <p className="text-[#86868b] text-xs">Active users</p>
                  <p className="text-[#1d1d1f] font-semibold text-lg">2,447</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA — the one deliberate dark section */}
      <section className="bg-[#1d1d1f] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-8 sm:mb-10">
            <p className="text-sm font-medium text-emerald-400 mb-3">Join us</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              Join the Web3 property revolution
            </h2>
            <p className="text-white/60 leading-relaxed">
              Be part of the future where property investment is transparent, accessible, and powered by blockchain technology.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-[#1d1d1f] bg-white hover:bg-white/90 transition-colors text-sm">
              <Wallet className="w-4 h-4" />
              Connect wallet
            </button>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white bg-white/10 hover:bg-white/15 transition-colors text-sm">
              <Code className="w-4 h-4" />
              Developer docs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Web3;
