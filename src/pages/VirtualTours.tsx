import React, { useState } from 'react';
import { Camera, Play, Pause, VolumeX, Volume2, Maximize, RotateCcw, MapPin, Clock, Users, Star } from 'lucide-react';

const VirtualTours = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

  const featuredTours = [
    {
      id: 1,
      title: "Luxury Earthship Villa - Araku Valley",
      location: "Araku Valley, Visakhapatnam",
      duration: "12 min",
      views: "15.2k",
      rating: 4.9,
      thumbnail: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "360° Tour",
      highlights: ["Solar Power System", "Rainwater Harvesting", "Natural Cooling", "Organic Gardens"],
      description: "Experience sustainable living in this stunning earthship villa nestled in the hills of Araku Valley."
    },
    {
      id: 2,
      title: "Mandala Sacred Geometry Home",
      location: "Madhurawada, Visakhapatnam",
      duration: "18 min",
      views: "23.1k",
      rating: 4.8,
      thumbnail: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Guided Tour",
      highlights: ["Vastu Compliant", "Sacred Geometry", "Meditation Spaces", "Energy Vortex"],
      description: "Discover the harmony of ancient wisdom and modern comfort in this Vastu-optimized home."
    },
    {
      id: 3,
      title: "Eco-Smart Apartment Complex",
      location: "Gajuwaka, Visakhapatnam",
      duration: "10 min",
      views: "18.7k",
      rating: 4.7,
      thumbnail: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Interactive Tour",
      highlights: ["IoT Integration", "Vertical Gardens", "Energy Positive", "Community Spaces"],
      description: "Explore modern apartment living with integrated renewable energy and urban farming systems."
    },
    {
      id: 4,
      title: "Bio-Dome Sustainable Residence",
      location: "Rushikonda, Visakhapatnam",
      duration: "14 min",
      views: "12.4k",
      rating: 4.9,
      thumbnail: "https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "VR Experience",
      highlights: ["Climate Control", "Air Purification", "Aquaponics", "360° Views"],
      description: "Step into the future with this innovative bio-dome residence featuring cutting-edge sustainability tech."
    }
  ];

  const tourTypes = [
    { id: '360', name: '360° Tours', count: 156, icon: Camera },
    { id: 'guided', name: 'Guided Tours', count: 89, icon: Users },
    { id: 'interactive', name: 'Interactive', count: 234, icon: Play },
    { id: 'vr', name: 'VR Experience', count: 67, icon: Maximize }
  ];

  return (
    <div className="min-h-screen bg-base-100 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-base-200 to-base-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              <span className="gradient-text">Virtual Property Tours</span>
              <br />
              <span className="text-white">Experience Before You Buy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore sustainable properties from anywhere in the world with immersive 360° tours, 
              VR experiences, and interactive walkthroughs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary btn-lg">
              <Camera className="w-5 h-5 mr-2" />
              Start Virtual Tour
            </button>
            <button className="btn btn-outline btn-lg">
              <Maximize className="w-5 h-5 mr-2" />
              VR Experience
            </button>
          </div>
        </div>
      </section>

      {/* Tour Categories */}
      <section className="py-12 border-b border-base-300">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {tourTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <div key={type.id} className="card bg-base-200 shadow-lg card-hover cursor-pointer">
                  <div className="card-body text-center">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="card-title text-white text-sm justify-center">{type.name}</h3>
                    <p className="text-gray-400 text-sm">{type.count} available</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">Featured Virtual Tours</h2>
            <button className="btn btn-outline">View All Tours</button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredTours.map((tour) => (
              <div key={tour.id} className="card bg-base-200 shadow-xl card-hover">
                <figure className="relative h-64">
                  <img 
                    src={tour.thumbnail} 
                    alt={tour.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      onClick={() => setSelectedTour(tour)}
                      className="btn btn-circle btn-primary btn-lg shadow-lg hover:scale-110 transition-transform"
                    >
                      <Play className="w-8 h-8 text-white" />
                    </button>
                  </div>

                  {/* Tour Type Badge */}
                  <div className="absolute top-4 left-4 badge badge-primary">
                    {tour.type}
                  </div>

                  {/* Duration */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                    <Clock className="w-4 h-4 text-white" />
                    <span className="text-white text-sm">{tour.duration}</span>
                  </div>

                  {/* Stats */}
                  <div className="absolute bottom-4 left-4 flex space-x-3">
                    <div className="flex items-center space-x-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm">{tour.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Users className="w-4 h-4 text-white" />
                      <span className="text-white text-sm">{tour.views}</span>
                    </div>
                  </div>
                </figure>

                <div className="card-body">
                  <h3 className="card-title text-white">{tour.title}</h3>
                  <div className="flex items-center space-x-1 text-gray-400 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{tour.location}</span>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">{tour.description}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {tour.highlights.slice(0, 3).map((highlight, idx) => (
                      <span key={idx} className="badge badge-outline badge-sm">
                        {highlight}
                      </span>
                    ))}
                    {tour.highlights.length > 3 && (
                      <span className="badge badge-outline badge-sm">
                        +{tour.highlights.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="card-actions justify-between">
                    <button 
                      onClick={() => setSelectedTour(tour)}
                      className="btn btn-primary"
                    >
                      Start Tour
                    </button>
                    <button className="btn btn-ghost btn-sm">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour Player Modal */}
      {selectedTour && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-base-200 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
            {/* Player Header */}
            <div className="flex items-center justify-between p-4 border-b border-base-300">
              <div>
                <h3 className="text-lg font-semibold text-white">{selectedTour.title}</h3>
                <p className="text-gray-400 text-sm">{selectedTour.location}</p>
              </div>
              <button 
                onClick={() => setSelectedTour(null)}
                className="btn btn-circle btn-ghost"
              >
                ✕
              </button>
            </div>

            {/* Video Player Area */}
            <div className="relative bg-black aspect-video">
              <img 
                src={selectedTour.thumbnail} 
                alt={selectedTour.title}
                className="w-full h-full object-cover"
              />
              
              {/* Player Controls Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40">
                <div className="absolute bottom-4 left-4 right-4">
                  {/* Progress Bar */}
                  <div className="w-full bg-white/20 rounded-full h-1 mb-4">
                    <div className="bg-primary h-1 rounded-full w-1/3"></div>
                  </div>
                  
                  {/* Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button 
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="btn btn-circle btn-primary"
                      >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                      </button>
                      <button 
                        onClick={() => setIsMuted(!isMuted)}
                        className="btn btn-circle btn-ghost"
                      >
                        {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
                      </button>
                      <span className="text-white text-sm">2:45 / {selectedTour.duration}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button className="btn btn-circle btn-ghost">
                        <RotateCcw className="w-5 h-5 text-white" />
                      </button>
                      <button className="btn btn-circle btn-ghost">
                        <Maximize className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tour Info */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <h4 className="text-lg font-semibold text-white mb-2">About This Property</h4>
                  <p className="text-gray-300 mb-4">{selectedTour.description}</p>
                  
                  <h4 className="text-lg font-semibold text-white mb-2">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedTour.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-gray-300 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="card bg-base-300">
                    <div className="card-body">
                      <h4 className="card-title text-white text-lg">Tour Statistics</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Rating</span>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-white">{selectedTour.rating}</span>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Views</span>
                          <span className="text-white">{selectedTour.views}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Duration</span>
                          <span className="text-white">{selectedTour.duration}</span>
                        </div>
                      </div>
                      
                      <div className="card-actions justify-center mt-4">
                        <button className="btn btn-primary btn-block">
                          Schedule Site Visit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Technology Features */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Cutting-Edge Tour Technology</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Experience properties like never before with our advanced virtual tour technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">360° Photography</h3>
              <p className="text-gray-300">High-resolution 360° images captured with professional equipment</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Maximize className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">VR Compatible</h3>
              <p className="text-gray-300">Full VR headset support for immersive property exploration</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Interactive Elements</h3>
              <p className="text-gray-300">Click on hotspots to learn about sustainability features</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VirtualTours;
