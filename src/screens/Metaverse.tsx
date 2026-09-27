'use client';

import React, { useState } from 'react';
import { Gamepad2, Headphones, Users, Globe, Zap, Eye, Building, Map, Settings, Play } from 'lucide-react';

const Metaverse = () => {
  const [selectedWorld, setSelectedWorld] = useState<any>(null);
  const [vrMode, setVrMode] = useState(false);

  const virtualWorlds = [
    {
      id: 1,
      name: "EcoVerse Visakhapatnam",
      description: "Virtual recreation of Visakhapatnam with sustainable properties",
      thumbnail: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      users: "2.4k",
      properties: 156,
      status: "Live",
      features: ["VR Compatible", "Social Interaction", "Property Tours", "Virtual Events"],
      landSize: "10km x 10km",
      theme: "Coastal Sustainability"
    },
    {
      id: 2,
      name: "Mandala Sacred Metaverse",
      description: "Sacred geometry-based virtual world for spiritual property experiences",
      thumbnail: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      users: "1.8k",
      properties: 89,
      status: "Beta",
      features: ["Meditation Spaces", "Sacred Geometry", "Vastu Consulting", "Energy Healing"],
      landSize: "5km x 5km",
      theme: "Spiritual Harmony"
    },
    {
      id: 3,
      name: "Green Tech City",
      description: "Futuristic smart city showcasing cutting-edge sustainable technology",
      thumbnail: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800",
      users: "3.1k",
      properties: 234,
      status: "Live",
      features: ["AI Integration", "Smart Contracts", "IoT Simulation", "Tech Demos"],
      landSize: "15km x 15km",
      theme: "Future Technology"
    },
    {
      id: 4,
      name: "Araku Hills Virtual Resort",
      description: "Scenic mountain resort with eco-lodges and nature experiences",
      thumbnail: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      users: "967",
      properties: 45,
      status: "Development",
      features: ["Nature Sounds", "Wildlife Simulation", "Eco Tourism", "Adventure Sports"],
      landSize: "8km x 8km",
      theme: "Mountain Retreat"
    }
  ];

  const metaverseFeatures = [
    {
      icon: Eye,
      title: "Immersive Property Tours",
      description: "Walk through properties in photorealistic virtual environments"
    },
    {
      icon: Users,
      title: "Social Interactions",
      description: "Meet other users, agents, and property owners in virtual spaces"
    },
    {
      icon: Building,
      title: "Virtual Showrooms",
      description: "Showcase properties with interactive 3D models and customization"
    },
    {
      icon: Gamepad2,
      title: "Gamified Experience",
      description: "Earn rewards for property visits and engagement activities"
    },
    {
      icon: Globe,
      title: "Cross-Platform Access",
      description: "Access from VR headsets, computers, or mobile devices"
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Instant property updates and market changes in virtual world"
    }
  ];

  const virtualEvents = [
    {
      name: "Sustainable Living Summit 2024",
      date: "March 15, 2024",
      time: "10:00 AM IST",
      attendees: 1250,
      type: "Conference"
    },
    {
      name: "VR Property Auction",
      date: "March 20, 2024",
      time: "7:00 PM IST",
      attendees: 890,
      type: "Auction"
    },
    {
      name: "Eco Architecture Workshop",
      date: "March 25, 2024",
      time: "2:00 PM IST",
      attendees: 456,
      type: "Workshop"
    }
  ];

  const avatarOptions = [
    { id: 'professional', name: 'Professional', price: 'Free' },
    { id: 'casual', name: 'Casual', price: 'Free' },
    { id: 'traditional', name: 'Traditional Indian', price: '₹199' },
    { id: 'futuristic', name: 'Futuristic', price: '₹299' },
    { id: 'nature', name: 'Nature-inspired', price: '₹149' }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-[#f5f5f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20">
          <div className="max-w-3xl min-w-0 space-y-6">
            <p className="text-sm font-medium text-emerald-600">Virtual property experience</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1d1d1f] leading-[1.05]">
              Step into the <span className="text-emerald-600">metaverse</span>
            </h1>
            <p className="text-base sm:text-lg text-[#6e6e73] leading-relaxed max-w-xl">
              Explore immersive virtual worlds where you can tour and interact with
              sustainable properties in photorealistic 3D environments.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-[#1d1d1f] hover:bg-black px-6 py-3 rounded-full font-medium text-white transition-colors text-sm inline-flex items-center gap-2">
                <Gamepad2 className="w-4 h-4" />
                Enter metaverse
              </button>
              <button
                onClick={() => setVrMode(!vrMode)}
                className={`px-6 py-3 rounded-full font-medium transition-colors text-sm inline-flex items-center gap-2 ${
                  vrMode ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : 'border border-black/10 hover:bg-black/5 text-[#1d1d1f]'
                }`}
              >
                <Headphones className="w-4 h-4" />
                {vrMode ? 'VR mode active' : 'Enable VR mode'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* VR Status Bar */}
      {vrMode && (
        <section className="py-3 bg-emerald-50 border-b border-emerald-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></div>
              <span className="text-emerald-700 font-medium text-sm">
                VR mode active — put on your headset for full immersion
              </span>
              <button
                onClick={() => setVrMode(false)}
                className="text-emerald-700 text-xs font-medium border border-emerald-200 hover:bg-emerald-100 rounded-full px-3 py-1 transition-colors"
              >
                Disable VR
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Virtual Worlds */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-sm font-medium text-emerald-600 mb-3">Explore</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
              Virtual worlds
            </h2>
            <p className="text-lg text-[#6e6e73] leading-relaxed">
              Explore different virtual environments, each designed for unique property experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {virtualWorlds.map((world) => (
              <div key={world.id} className="bg-white rounded-2xl overflow-hidden border border-black/5 min-w-0">
                <div className="relative h-56 sm:h-64">
                  <img
                    src={world.thumbnail}
                    alt={world.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                      world.status === 'Live' ? 'bg-emerald-600 text-white' :
                      world.status === 'Beta' ? 'bg-white/90 text-[#1d1d1f]' : 'bg-white/90 text-[#1d1d1f]'
                    }`}>
                      {world.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-xs font-medium text-[#1d1d1f] px-3 py-1 rounded-full">
                      {world.theme}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      <Users className="w-3.5 h-3.5 text-white" />
                      <span className="text-white text-xs">{world.users}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      <Building className="w-3.5 h-3.5 text-white" />
                      <span className="text-white text-xs">{world.properties}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full">
                    <span className="text-[#1d1d1f] font-semibold text-xs">{world.landSize}</span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 min-w-0">
                  <h3 className="text-lg font-semibold text-[#1d1d1f] mb-1.5">{world.name}</h3>
                  <p className="text-[#6e6e73] text-sm mb-4 leading-relaxed">{world.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {world.features.map((feature, idx) => (
                      <span key={idx} className="text-xs text-[#6e6e73] border border-black/10 rounded-full px-2.5 py-1">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedWorld(world)}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 px-4 py-2.5 rounded-full font-medium text-white transition-colors text-sm inline-flex items-center justify-center gap-2"
                    >
                      <Play className="w-4 h-4" />
                      Enter world
                    </button>
                    <button className="text-[#1d1d1f] hover:text-emerald-600 text-sm font-medium transition-colors inline-flex items-center gap-1.5 whitespace-nowrap">
                      <Map className="w-4 h-4" />
                      Map
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metaverse Features */}
      <section className="py-16 sm:py-24 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-sm font-medium text-emerald-600 mb-3">Capabilities</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
              Metaverse features
            </h2>
            <p className="text-lg text-[#6e6e73] leading-relaxed">
              Revolutionary features that transform how you experience and interact with properties.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/5 rounded-2xl overflow-hidden border border-black/5">
            {metaverseFeatures.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div key={idx} className="bg-white hover:bg-[#f5f5f7] transition-colors p-6 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">{feature.title}</h3>
                  <p className="text-sm text-[#6e6e73] leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Avatar Customization */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="min-w-0">
              <p className="text-sm font-medium text-emerald-600 mb-3">Your identity</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4 tracking-tight">Customize your avatar</h2>
              <p className="text-[#6e6e73] mb-6 leading-relaxed">
                Create your unique virtual identity to represent yourself in the metaverse.
                Choose from various styles that reflect your personality and culture.
              </p>

              <div className="space-y-2.5">
                {avatarOptions.map((option) => (
                  <div key={option.id} className="flex items-center justify-between p-3.5 bg-[#f5f5f7] rounded-xl min-w-0">
                    <div className="min-w-0">
                      <h4 className="text-[#1d1d1f] font-medium text-sm truncate">{option.name}</h4>
                      <p className="text-[#86868b] text-xs">Avatar style</p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="text-emerald-600 font-semibold text-sm">{option.price}</span>
                      <button className="border border-black/10 hover:bg-black/5 text-[#1d1d1f] text-xs font-medium rounded-full px-3.5 py-1.5 transition-colors">
                        Select
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="min-w-0 bg-[#f5f5f7] rounded-3xl border border-black/5 p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-[#1d1d1f] mb-4">Avatar preview</h3>

              <div className="h-56 sm:h-64 bg-white rounded-2xl border border-black/5 flex items-center justify-center mb-6">
                <div className="text-center px-4">
                  <Users className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
                  <p className="text-[#86868b] text-sm">Select an avatar style to preview</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 px-4 py-2.5 rounded-full font-medium text-white transition-colors text-sm inline-flex items-center justify-center gap-2">
                  <Settings className="w-4 h-4" />
                  Customize
                </button>
                <button className="flex-1 border border-black/10 hover:bg-black/5 px-4 py-2.5 rounded-full font-medium text-[#1d1d1f] transition-colors text-sm">
                  Save avatar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Events */}
      <section className="py-16 sm:py-24 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-sm font-medium text-emerald-600 mb-3">What's on</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
              Upcoming virtual events
            </h2>
            <p className="text-lg text-[#6e6e73] leading-relaxed">
              Join property exhibitions, auctions, and educational events in immersive virtual environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {virtualEvents.map((event, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-black/5 p-5 sm:p-6 min-w-0">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-[#1d1d1f] font-semibold text-sm leading-snug">{event.name}</h3>
                  <span className="text-xs font-medium text-emerald-600 bg-emerald-50 rounded-full px-2.5 py-1 flex-shrink-0">
                    {event.type}
                  </span>
                </div>

                <div className="space-y-2 text-sm mb-5">
                  <div className="flex justify-between">
                    <span className="text-[#86868b]">Date</span>
                    <span className="text-[#1d1d1f]">{event.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#86868b]">Time</span>
                    <span className="text-[#1d1d1f]">{event.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#86868b]">Attendees</span>
                    <span className="text-[#1d1d1f]">{event.attendees}</span>
                  </div>
                </div>

                <button className="w-full bg-[#1d1d1f] hover:bg-black px-4 py-2.5 rounded-full font-medium text-white transition-colors text-sm">
                  Join event
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual World Modal */}
      {selectedWorld && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-black/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f]">{selectedWorld.name}</h3>
                  <p className="text-[#6e6e73] text-sm">{selectedWorld.description}</p>
                </div>
                <button
                  onClick={() => setSelectedWorld(null)}
                  className="w-9 h-9 bg-black/5 hover:bg-black/10 rounded-full flex items-center justify-center text-[#1d1d1f] transition-colors flex-shrink-0"
                >
                  ✕
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden border border-black/5 mb-6">
                <div className="h-72 sm:h-96 relative overflow-hidden">
                  <img
                    src={selectedWorld.thumbnail}
                    alt={selectedWorld.name}
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="text-center px-4">
                      <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">Entering {selectedWorld.name}</h4>
                      <p className="text-white/80 text-sm">Initializing virtual environment…</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-white text-xs space-y-1">
                      <p>Users online: <span className="text-emerald-400">{selectedWorld.users}</span></p>
                      <p>Properties: <span className="text-emerald-400">{selectedWorld.properties}</span></p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-[#f5f5f7]">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-[#1d1d1f] mb-3 uppercase tracking-wide">World features</h4>
                      <div className="space-y-2">
                        {selectedWorld.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full flex-shrink-0"></div>
                            <span className="text-[#1d1d1f] text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-[#1d1d1f] mb-3 uppercase tracking-wide">Quick actions</h4>
                      <div className="space-y-2">
                        <button className="w-full bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-full font-medium text-white transition-colors text-sm inline-flex items-center justify-center gap-2">
                          <Building className="w-4 h-4" />
                          Browse properties
                        </button>
                        <button className="w-full border border-black/10 hover:bg-black/5 px-4 py-2 rounded-full font-medium text-[#1d1d1f] transition-colors text-sm inline-flex items-center justify-center gap-2">
                          <Users className="w-4 h-4" />
                          Find friends
                        </button>
                        <button className="w-full border border-black/10 hover:bg-black/5 px-4 py-2 rounded-full font-medium text-[#1d1d1f] transition-colors text-sm inline-flex items-center justify-center gap-2">
                          <Eye className="w-4 h-4" />
                          Take tour
                        </button>
                      </div>
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-[#1d1d1f] mb-3 uppercase tracking-wide">World stats</h4>
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs text-[#86868b]">Land size</p>
                          <p className="text-[#1d1d1f] text-sm font-medium">{selectedWorld.landSize}</p>
                        </div>
                        <div>
                          <p className="text-xs text-[#86868b]">Theme</p>
                          <p className="text-emerald-600 text-sm font-medium">{selectedWorld.theme}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button className="bg-[#1d1d1f] hover:bg-black px-6 py-3 rounded-full font-medium text-white transition-colors text-sm inline-flex items-center gap-2">
                  <Gamepad2 className="w-4 h-4" />
                  Enter virtual world
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Closing CTA — the one deliberate dark section */}
      <section className="bg-[#1d1d1f] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-8 sm:mb-10">
            <p className="text-sm font-medium text-emerald-400 mb-3">Get started</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              Ready to explore the metaverse?
            </h2>
            <p className="text-white/60 leading-relaxed">
              Step into the future of property exploration with immersive virtual experiences.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-[#1d1d1f] bg-white hover:bg-white/90 transition-colors text-sm">
              <Gamepad2 className="w-4 h-4" />
              Start your journey
            </button>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white bg-white/10 hover:bg-white/15 transition-colors text-sm">
              <Headphones className="w-4 h-4" />
              Get VR headset
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Metaverse;
