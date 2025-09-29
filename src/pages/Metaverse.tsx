import React, { useState } from 'react';
import { Gamepad2, Headphones, Users, Globe, Zap, Eye, Building, Map, Settings, Play } from 'lucide-react';

const Metaverse = () => {
  const [selectedWorld, setSelectedWorld] = useState(null);
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
    <div className="min-h-screen bg-base-100 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-base-200 to-base-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              <span className="gradient-text">Metaverse</span>
              <br />
              <span className="text-white">Property Experience</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Step into immersive virtual worlds where you can explore, tour, and interact with 
              sustainable properties in photorealistic 3D environments.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary btn-lg">
              <Gamepad2 className="w-5 h-5 mr-2" />
              Enter Metaverse
            </button>
            <button 
              onClick={() => setVrMode(!vrMode)}
              className={`btn btn-lg ${vrMode ? 'btn-success' : 'btn-outline'}`}
            >
              <Headphones className="w-5 h-5 mr-2" />
              {vrMode ? 'VR Mode Active' : 'Enable VR Mode'}
            </button>
          </div>
        </div>
      </section>

      {/* VR Status Bar */}
      {vrMode && (
        <section className="py-4 bg-success/10 border-b border-success/20">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
              <span className="text-success font-medium">
                VR Mode Active - Put on your headset for full immersion
              </span>
              <button 
                onClick={() => setVrMode(false)}
                className="btn btn-xs btn-outline btn-success"
              >
                Disable VR
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Virtual Worlds */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Virtual Worlds</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore different virtual environments, each designed for unique property experiences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {virtualWorlds.map((world) => (
              <div key={world.id} className="card bg-base-200 shadow-xl card-hover">
                <figure className="relative h-64">
                  <img 
                    src={world.thumbnail} 
                    alt={world.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 left-4 badge ${
                    world.status === 'Live' ? 'badge-success' :
                    world.status === 'Beta' ? 'badge-warning' : 'badge-info'
                  }`}>
                    {world.status}
                  </div>

                  {/* Theme Badge */}
                  <div className="absolute top-4 right-4 badge badge-primary">
                    {world.theme}
                  </div>

                  {/* Stats */}
                  <div className="absolute bottom-4 left-4 flex space-x-3">
                    <div className="flex items-center space-x-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Users className="w-4 h-4 text-white" />
                      <span className="text-white text-sm">{world.users}</span>
                    </div>
                    <div className="flex items-center space-x-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Building className="w-4 h-4 text-white" />
                      <span className="text-white text-sm">{world.properties}</span>
                    </div>
                  </div>

                  {/* Land Size */}
                  <div className="absolute bottom-4 right-4 bg-primary px-3 py-1 rounded-xl">
                    <span className="text-white font-bold text-sm">{world.landSize}</span>
                  </div>
                </figure>

                <div className="card-body">
                  <h3 className="card-title text-white">{world.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{world.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {world.features.map((feature, idx) => (
                      <span key={idx} className="badge badge-outline badge-sm">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="card-actions justify-between">
                    <button 
                      onClick={() => setSelectedWorld(world)}
                      className="btn btn-primary"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Enter World
                    </button>
                    <button className="btn btn-ghost btn-sm">
                      <Map className="w-4 h-4 mr-2" />
                      View Map
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metaverse Features */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Metaverse Features</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Revolutionary features that transform how you experience and interact with properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {metaverseFeatures.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div key={idx} className="card bg-base-100 shadow-lg">
                  <div className="card-body text-center">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="card-title text-white text-lg justify-center">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Avatar Customization */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Customize Your Avatar</h2>
              <p className="text-gray-300 mb-6">
                Create your unique virtual identity to represent yourself in the metaverse. 
                Choose from various styles that reflect your personality and culture.
              </p>
              
              <div className="space-y-3">
                {avatarOptions.map((option) => (
                  <div key={option.id} className="flex items-center justify-between p-3 bg-base-200 rounded-lg">
                    <div>
                      <h4 className="text-white font-medium">{option.name}</h4>
                      <p className="text-gray-400 text-sm">Professional avatar style</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-success font-bold">{option.price}</span>
                      <button className="btn btn-primary btn-sm">Select</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body text-center">
                <h3 className="card-title text-white justify-center mb-4">Avatar Preview</h3>
                
                {/* Avatar Preview Area */}
                <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <Users className="w-16 h-16 text-primary mx-auto mb-2" />
                    <p className="text-gray-400">Select an avatar style to preview</p>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="btn btn-primary flex-1">
                    <Settings className="w-4 h-4 mr-2" />
                    Customize
                  </button>
                  <button className="btn btn-outline flex-1">Save Avatar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Events */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Upcoming Virtual Events</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Join property exhibitions, auctions, and educational events in immersive virtual environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {virtualEvents.map((event, idx) => (
              <div key={idx} className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="card-title text-white text-sm">{event.name}</h3>
                    <div className="badge badge-primary">{event.type}</div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Date:</span>
                      <span className="text-white">{event.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Time:</span>
                      <span className="text-white">{event.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Attendees:</span>
                      <span className="text-success">{event.attendees}</span>
                    </div>
                  </div>

                  <div className="card-actions justify-center mt-4">
                    <button className="btn btn-primary btn-sm btn-block">
                      Join Event
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual World Modal */}
      {selectedWorld && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-base-200 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedWorld.name}</h3>
                  <p className="text-gray-400">{selectedWorld.description}</p>
                </div>
                <button 
                  onClick={() => setSelectedWorld(null)}
                  className="btn btn-circle btn-ghost"
                >
                  ✕
                </button>
              </div>

              {/* Virtual World Interface */}
              <div className="card bg-base-100 mb-6">
                <div className="card-body p-0">
                  {/* World View */}
                  <div className="h-96 bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden rounded-t-2xl">
                    <img 
                      src={selectedWorld.thumbnail} 
                      alt={selectedWorld.name}
                      className="w-full h-full object-cover opacity-60"
                    />
                    
                    {/* Virtual Controls Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <h4 className="text-2xl font-bold text-white mb-4">Entering {selectedWorld.name}</h4>
                        <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
                        <p className="text-gray-300">Initializing virtual environment...</p>
                      </div>
                    </div>

                    {/* HUD Elements */}
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg p-3">
                      <div className="text-white text-sm">
                        <p>Users Online: <span className="text-success">{selectedWorld.users}</span></p>
                        <p>Properties: <span className="text-primary">{selectedWorld.properties}</span></p>
                      </div>
                    </div>

                    <div className="absolute top-4 right-4 flex space-x-2">
                      <button className="btn btn-circle btn-sm bg-black/60 border-white/20 text-white">
                        <Map className="w-4 h-4" />
                      </button>
                      <button className="btn btn-circle btn-sm bg-black/60 border-white/20 text-white">
                        <Settings className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Controls Panel */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">World Features</h4>
                        <div className="space-y-2">
                          {selectedWorld.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-success rounded-full"></div>
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Quick Actions</h4>
                        <div className="space-y-2">
                          <button className="btn btn-primary btn-sm btn-block">
                            <Building className="w-4 h-4 mr-2" />
                            Browse Properties
                          </button>
                          <button className="btn btn-secondary btn-sm btn-block">
                            <Users className="w-4 h-4 mr-2" />
                            Find Friends
                          </button>
                          <button className="btn btn-accent btn-sm btn-block">
                            <Eye className="w-4 h-4 mr-2" />
                            Take Tour
                          </button>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">World Stats</h4>
                        <div className="stats stats-vertical w-full">
                          <div className="stat p-2">
                            <div className="stat-title text-gray-400 text-xs">Land Size</div>
                            <div className="stat-value text-white text-sm">{selectedWorld.landSize}</div>
                          </div>
                          <div className="stat p-2">
                            <div className="stat-title text-gray-400 text-xs">Theme</div>
                            <div className="stat-value text-primary text-sm">{selectedWorld.theme}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enter Button */}
              <div className="text-center">
                <button className="btn btn-primary btn-lg">
                  <Gamepad2 className="w-5 h-5 mr-2" />
                  Enter Virtual World
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Explore the Metaverse?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Step into the future of property exploration with immersive virtual experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-white btn-lg">
              <Gamepad2 className="w-5 h-5 mr-2" />
              Start Your Journey
            </button>
            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-primary btn-lg">
              <Headphones className="w-5 h-5 mr-2" />
              Get VR Headset
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Metaverse;
