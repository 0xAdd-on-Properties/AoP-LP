'use client';

import React, { useState } from 'react';
import { Camera, Play, Pause, VolumeX, Volume2, Maximize, RotateCcw, MapPin, Clock, Users, Star } from 'lucide-react';

const VirtualTours = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedTour, setSelectedTour] = useState<any>(null);

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
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-[#f5f5f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20">
          <div className="max-w-3xl min-w-0 space-y-6">
            <p className="text-sm font-medium text-emerald-600">Experience before you buy</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1d1d1f] leading-[1.05]">
              Virtual property <span className="text-emerald-600">tours</span>
            </h1>
            <p className="text-base sm:text-lg text-[#6e6e73] leading-relaxed max-w-xl">
              Explore sustainable properties from anywhere in the world with immersive 360°
              tours, VR experiences, and interactive walkthroughs.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-[#1d1d1f] hover:bg-black px-6 py-3 rounded-full font-medium text-white transition-colors text-sm inline-flex items-center gap-2">
                <Camera className="w-4 h-4" />
                Start virtual tour
              </button>
              <button className="px-6 py-3 rounded-full font-medium text-[#1d1d1f] border border-black/10 hover:bg-black/5 transition-colors text-sm inline-flex items-center gap-2">
                <Maximize className="w-4 h-4" />
                VR experience
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Categories */}
      <section className="py-10 sm:py-12 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-black/5 rounded-2xl overflow-hidden border border-black/5">
            {tourTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <div key={type.id} className="bg-white hover:bg-[#f5f5f7] transition-colors p-5 sm:p-6 cursor-pointer min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-3 text-emerald-600">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-[#1d1d1f] font-semibold text-sm truncate">{type.name}</h3>
                  <p className="text-[#86868b] text-xs">{type.count} available</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight">Featured virtual tours</h2>
            <button className="px-5 py-2.5 rounded-full font-medium text-[#1d1d1f] border border-black/10 hover:bg-black/5 transition-colors text-sm w-fit">
              View all tours
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {featuredTours.map((tour) => (
              <div key={tour.id} className="bg-white rounded-2xl overflow-hidden border border-black/5 min-w-0">
                <div className="relative h-56 sm:h-64">
                  <img
                    src={tour.thumbnail}
                    alt={tour.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10"></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedTour(tour)}
                      className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
                    >
                      <Play className="w-6 h-6 text-emerald-600" />
                    </button>
                  </div>

                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-xs font-medium text-[#1d1d1f] px-3 py-1 rounded-full">
                      {tour.type}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    <Clock className="w-3.5 h-3.5 text-white" />
                    <span className="text-white text-xs">{tour.duration}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-current" />
                      <span className="text-white text-xs">{tour.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      <Users className="w-3.5 h-3.5 text-white" />
                      <span className="text-white text-xs">{tour.views}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 min-w-0">
                  <h3 className="text-lg font-semibold text-[#1d1d1f] mb-1.5 truncate">{tour.title}</h3>
                  <div className="flex items-center gap-1.5 text-[#6e6e73] mb-3">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="text-sm truncate">{tour.location}</span>
                  </div>

                  <p className="text-[#6e6e73] text-sm mb-4 leading-relaxed">{tour.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {tour.highlights.slice(0, 3).map((highlight, idx) => (
                      <span key={idx} className="text-xs text-[#6e6e73] border border-black/10 rounded-full px-2.5 py-1">
                        {highlight}
                      </span>
                    ))}
                    {tour.highlights.length > 3 && (
                      <span className="text-xs text-[#6e6e73] border border-black/10 rounded-full px-2.5 py-1">
                        +{tour.highlights.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedTour(tour)}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 px-4 py-2.5 rounded-full font-medium text-white transition-colors text-sm"
                    >
                      Start tour
                    </button>
                    <button className="text-[#1d1d1f] hover:text-emerald-600 text-sm font-medium transition-colors whitespace-nowrap">
                      Learn more
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
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-black/10 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-black/5 gap-4">
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-[#1d1d1f] truncate">{selectedTour.title}</h3>
                <p className="text-[#6e6e73] text-sm truncate">{selectedTour.location}</p>
              </div>
              <button
                onClick={() => setSelectedTour(null)}
                className="w-9 h-9 bg-black/5 hover:bg-black/10 rounded-full flex items-center justify-center text-[#1d1d1f] transition-colors flex-shrink-0"
              >
                ✕
              </button>
            </div>

            <div className="relative bg-black aspect-video">
              <img
                src={selectedTour.thumbnail}
                alt={selectedTour.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="w-full bg-white/20 rounded-full h-1 mb-4">
                    <div className="bg-emerald-500 h-1 rounded-full w-1/3"></div>
                  </div>

                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center transition-colors"
                      >
                        {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
                      </button>
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                      >
                        {isMuted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
                      </button>
                      <span className="text-white text-sm">2:45 / {selectedTour.duration}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                        <RotateCcw className="w-4 h-4 text-white" />
                      </button>
                      <button className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                        <Maximize className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 min-w-0">
                  <h4 className="text-sm font-semibold text-[#1d1d1f] mb-2 uppercase tracking-wide">About this property</h4>
                  <p className="text-[#6e6e73] text-sm mb-5 leading-relaxed">{selectedTour.description}</p>

                  <h4 className="text-sm font-semibold text-[#1d1d1f] mb-3 uppercase tracking-wide">Key features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedTour.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 min-w-0">
                        <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full flex-shrink-0"></div>
                        <span className="text-[#1d1d1f] text-sm truncate">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="min-w-0 bg-[#f5f5f7] rounded-2xl p-5">
                  <h4 className="text-[#1d1d1f] font-semibold text-sm mb-4">Tour statistics</h4>
                  <div className="space-y-3 mb-5">
                    <div className="flex justify-between items-center">
                      <span className="text-[#86868b] text-sm">Rating</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-current" />
                        <span className="text-[#1d1d1f] text-sm">{selectedTour.rating}</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#86868b] text-sm">Views</span>
                      <span className="text-[#1d1d1f] text-sm">{selectedTour.views}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#86868b] text-sm">Duration</span>
                      <span className="text-[#1d1d1f] text-sm">{selectedTour.duration}</span>
                    </div>
                  </div>

                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 px-4 py-2.5 rounded-full font-medium text-white transition-colors text-sm">
                    Schedule site visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Technology Features */}
      <section className="py-16 sm:py-24 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-sm font-medium text-emerald-600 mb-3">How it works</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
              Cutting-edge tour technology
            </h2>
            <p className="text-lg text-[#6e6e73] leading-relaxed">
              Experience properties like never before with our advanced virtual tour technology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-black/5 rounded-2xl overflow-hidden border border-black/5">
            <div className="bg-white p-6 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                <Camera className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">360° photography</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">High-resolution 360° images captured with professional equipment</p>
            </div>

            <div className="bg-white p-6 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                <Maximize className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">VR compatible</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">Full VR headset support for immersive property exploration</p>
            </div>

            <div className="bg-white p-6 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                <Play className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">Interactive elements</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">Click on hotspots to learn about sustainability features</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VirtualTours;
