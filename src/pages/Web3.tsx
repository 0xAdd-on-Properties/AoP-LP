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
    // Simulate wallet connection
    setWalletConnected(true);
  };

  return (
    <div className="min-h-screen bg-base-100 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-base-200 to-base-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              <span className="gradient-text">Web3 Property</span>
              <br />
              <span className="text-white">Ecosystem</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of real estate with blockchain technology, smart contracts, 
              and decentralized finance integrated into sustainable property investment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={connectWallet}
              className={`btn btn-lg ${walletConnected ? 'btn-success' : 'btn-primary'}`}
            >
              <Wallet className="w-5 h-5 mr-2" />
              {walletConnected ? 'Wallet Connected' : 'Connect Wallet'}
            </button>
            <button className="btn btn-outline btn-lg">
              <Code className="w-5 h-5 mr-2" />
              Explore DApps
            </button>
          </div>
        </div>
      </section>

      {/* Wallet Connection Status */}
      {walletConnected && (
        <section className="py-8 bg-success/10 border-b border-success/20">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
              <span className="text-success font-medium">
                Wallet Connected: 0x742d...Ae12 | Balance: 1.25 ETH, 2,450 MATIC
              </span>
            </div>
          </div>
        </section>
      )}

      {/* Web3 Features */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Web3 Features</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Cutting-edge blockchain technology powering the next generation of property investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {web3Features.map((feature, idx) => {
              const IconComponent = feature.icon;
              const statusColors = {
                'Live': 'badge-success',
                'Beta': 'badge-warning',
                'Coming Soon': 'badge-info',
                'Development': 'badge-secondary',
                'Research': 'badge-ghost'
              };
              
              return (
                <div key={idx} className="card bg-base-200 shadow-xl card-hover">
                  <div className="card-body">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className={`badge ${statusColors[feature.status]}`}>
                        {feature.status}
                      </div>
                    </div>
                    <h3 className="card-title text-white">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                    
                    <div className="card-actions justify-end mt-4">
                      <button className="btn btn-primary btn-sm">
                        Learn More
                        <ArrowUpRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Supported Networks */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Supported Blockchain Networks</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Multi-chain support for optimal user experience and cost efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportedNetworks.map((network) => (
              <div 
                key={network.id} 
                className={`card shadow-xl cursor-pointer card-hover ${
                  selectedNetwork === network.id ? 'bg-primary/20 border border-primary' : 'bg-base-100'
                }`}
                onClick={() => setSelectedNetwork(network.id)}
              >
                <div className="card-body text-center">
                  <div className="text-4xl mb-4">{network.icon}</div>
                  <h3 className="card-title text-white justify-center">{network.name}</h3>
                  
                  <div className="space-y-3 mt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Gas Token:</span>
                      <span className="text-white">{network.gasToken}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Avg Gas:</span>
                      <span className="text-white">{network.avgGas}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Speed:</span>
                      <span className="text-white">{network.speed}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex flex-wrap gap-1 justify-center">
                      {network.features.map((feature, idx) => (
                        <span key={idx} className="badge badge-outline badge-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedNetwork === network.id && (
                    <div className="mt-4">
                      <button className="btn btn-primary btn-sm">
                        Switch to {network.name}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DApps Ecosystem */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Decentralized Applications</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore our ecosystem of DApps built for sustainable property investment
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {dapps.map((dapp, idx) => (
              <div key={idx} className="card bg-base-200 shadow-xl">
                <div className="card-body">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="card-title text-white text-lg">{dapp.name}</h3>
                    <div className="badge badge-primary">{dapp.category}</div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">{dapp.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <p className="text-gray-400 text-xs">TVL</p>
                      <p className="text-white font-bold">{dapp.tvl}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-400 text-xs">Users</p>
                      <p className="text-white font-bold">{dapp.users}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-400 text-xs">APY</p>
                      <p className="text-success font-bold">{dapp.apy}</p>
                    </div>
                  </div>
                  
                  <div className="card-actions justify-center">
                    <button className="btn btn-primary btn-block">
                      Launch DApp
                      <ArrowUpRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Contract Info */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Smart Contract Security</h2>
              <p className="text-gray-300 mb-6">
                Our smart contracts are audited by leading security firms and implement best practices 
                for secure property tokenization and trading.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-success" />
                  <span className="text-white">Multi-signature wallet security</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lock className="w-5 h-5 text-success" />
                  <span className="text-white">Timelock mechanisms for upgrades</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-success" />
                  <span className="text-white">Gas-optimized contract architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="w-5 h-5 text-success" />
                  <span className="text-white">Open-source and verified contracts</span>
                </div>
              </div>
              
              <div className="mt-8">
                <button className="btn btn-primary mr-4">
                  View Contracts
                </button>
                <button className="btn btn-outline">
                  Security Audit
                </button>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-white mb-4">Contract Addresses</h3>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-400 text-sm">Property Token Contract</p>
                    <div className="flex items-center space-x-2">
                      <code className="text-primary text-sm bg-base-200 px-2 py-1 rounded">
                        0x742d35C...2Ae12
                      </code>
                      <button className="btn btn-xs btn-ghost">
                        <Link2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-gray-400 text-sm">Marketplace Contract</p>
                    <div className="flex items-center space-x-2">
                      <code className="text-primary text-sm bg-base-200 px-2 py-1 rounded">
                        0x8f2a14B...7Cf89
                      </code>
                      <button className="btn btn-xs btn-ghost">
                        <Link2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-gray-400 text-sm">Staking Contract</p>
                    <div className="flex items-center space-x-2">
                      <code className="text-primary text-sm bg-base-200 px-2 py-1 rounded">
                        0xa3c92E1...9Bd43
                      </code>
                      <button className="btn btn-xs btn-ghost">
                        <Link2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="stats stats-vertical w-full">
                    <div className="stat">
                      <div className="stat-title text-gray-400">Total Value Locked</div>
                      <div className="stat-value text-primary text-lg">$5.2M</div>
                    </div>
                    <div className="stat">
                      <div className="stat-title text-gray-400">Active Users</div>
                      <div className="stat-value text-secondary text-lg">2,447</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join the Web3 Property Revolution</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Be part of the future where property investment is transparent, accessible, and powered by blockchain technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-white btn-lg">
              <Wallet className="w-5 h-5 mr-2" />
              Connect Wallet
            </button>
            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-primary btn-lg">
              <Code className="w-5 h-5 mr-2" />
              Developer Docs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Web3;
