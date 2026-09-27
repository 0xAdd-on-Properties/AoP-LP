'use client';

import React, { useState } from 'react';
import { Box, Upload, Download, Rotate3D, ZoomIn, Grid, Move, Eye, Share2, Save } from 'lucide-react';

const Simple3DModelling = () => {
  const [selectedTool, setSelectedTool] = useState('move');
  const [viewMode, setViewMode] = useState('3d');

  const tools = [
    { id: 'move', name: 'Move', icon: Move },
    { id: 'rotate', name: 'Rotate', icon: Rotate3D },
    { id: 'scale', name: 'Scale', icon: ZoomIn },
    { id: 'grid', name: 'Grid', icon: Grid },
  ];

  const templates = [
    {
      id: 1,
      name: "Modern Villa Template",
      thumbnail: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=300",
      complexity: "Intermediate",
      rooms: 4,
      area: "2,400 sq ft"
    },
    {
      id: 2,
      name: "Earthship House Template",
      thumbnail: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
      complexity: "Advanced",
      rooms: 3,
      area: "1,800 sq ft"
    },
    {
      id: 3,
      name: "Mandala Home Template",
      thumbnail: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=300",
      complexity: "Expert",
      rooms: 5,
      area: "3,200 sq ft"
    },
    {
      id: 4,
      name: "Eco Apartment Template",
      thumbnail: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=300",
      complexity: "Beginner",
      rooms: 2,
      area: "1,200 sq ft"
    }
  ];

  const complexityStyle = {
    Beginner: 'text-emerald-600 bg-emerald-50',
    Intermediate: 'text-[#1d1d1f] bg-black/5',
    Advanced: 'text-[#1d1d1f] bg-black/5',
    Expert: 'text-[#1d1d1f] bg-black/5'
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-[#f5f5f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20">
          <div className="max-w-3xl min-w-0 space-y-6">
            <p className="text-sm font-medium text-emerald-600">Property design</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1d1d1f] leading-[1.05]">
              Simple <span className="text-emerald-600">3D modelling</span>
            </h1>
            <p className="text-base sm:text-lg text-[#6e6e73] leading-relaxed max-w-xl">
              Create stunning 3D models of sustainable properties with our intuitive drag-and-drop
              interface. No technical expertise required.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-[#1d1d1f] hover:bg-black px-6 py-3 rounded-full font-medium text-white transition-colors text-sm inline-flex items-center gap-2">
                <Upload className="w-4 h-4" />
                Start new project
              </button>
              <button className="px-6 py-3 rounded-full font-medium text-[#1d1d1f] border border-black/10 hover:bg-black/5 transition-colors text-sm inline-flex items-center gap-2">
                <Box className="w-4 h-4" />
                Browse templates
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Editor Interface */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Tool Panel */}
            <div className="lg:col-span-1 min-w-0">
              <div className="bg-[#f5f5f7] rounded-2xl border border-black/5 p-5 sm:p-6">
                <h3 className="text-sm font-semibold text-[#1d1d1f] mb-4 uppercase tracking-wide">Tools</h3>
                <div className="space-y-1.5">
                  {tools.map((tool) => {
                    const IconComponent = tool.icon;
                    return (
                      <button
                        key={tool.id}
                        onClick={() => setSelectedTool(tool.id)}
                        className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                          selectedTool === tool.id ? 'bg-emerald-600 text-white' : 'text-[#1d1d1f] hover:bg-black/5'
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                        {tool.name}
                      </button>
                    );
                  })}
                </div>

                <div className="h-px bg-black/10 my-5"></div>

                <h4 className="text-sm font-semibold text-[#1d1d1f] mb-3 uppercase tracking-wide">View mode</h4>
                <div className="flex flex-col gap-1.5">
                  {['3d', 'top', 'front'].map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setViewMode(mode)}
                      className={`px-3.5 py-2 rounded-xl text-sm font-medium text-left transition-colors ${
                        viewMode === mode ? 'bg-emerald-600 text-white' : 'text-[#1d1d1f] hover:bg-black/5'
                      }`}
                    >
                      {mode === '3d' ? '3D view' : mode === 'top' ? 'Top view' : 'Front view'}
                    </button>
                  ))}
                </div>

                <div className="h-px bg-black/10 my-5"></div>

                <div className="space-y-2">
                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 px-3.5 py-2.5 rounded-full font-medium text-white transition-colors text-sm inline-flex items-center justify-center gap-2">
                    <Save className="w-4 h-4" />
                    Save project
                  </button>
                  <button className="w-full border border-black/10 hover:bg-black/5 px-3.5 py-2.5 rounded-full font-medium text-[#1d1d1f] transition-colors text-sm inline-flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Export model
                  </button>
                  <button className="w-full border border-black/10 hover:bg-black/5 px-3.5 py-2.5 rounded-full font-medium text-[#1d1d1f] transition-colors text-sm inline-flex items-center justify-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Share design
                  </button>
                </div>
              </div>
            </div>

            {/* 3D Viewport */}
            <div className="lg:col-span-3 min-w-0">
              <div className="bg-[#f5f5f7] rounded-2xl border border-black/5 overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b border-black/10">
                  <div className="flex items-center gap-3">
                    <h3 className="text-sm font-semibold text-[#1d1d1f]">3D viewport</h3>
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 rounded-full px-2.5 py-1">
                      {viewMode.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="w-8 h-8 rounded-lg hover:bg-black/5 flex items-center justify-center text-[#1d1d1f] transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded-lg hover:bg-black/5 flex items-center justify-center text-[#1d1d1f] transition-colors">
                      <Grid className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="h-72 sm:h-96 lg:h-[520px] relative overflow-hidden bg-white">
                  <div className="absolute inset-0 opacity-[0.07]">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </pattern>
                      </defs>
                      <rect width="100" height="100" fill="url(#grid)" />
                    </svg>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-4">
                      <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center mx-auto mb-4 text-emerald-600">
                        <Box className="w-7 h-7" />
                      </div>
                      <h4 className="text-lg font-semibold text-[#1d1d1f] mb-1.5">3D modelling canvas</h4>
                      <p className="text-[#6e6e73] text-sm max-w-sm mx-auto">
                        Drag and drop elements to start building your property model
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 bg-white border border-black/10 rounded-lg overflow-hidden">
                    <button className="block w-8 h-8 text-[#1d1d1f] hover:bg-black/5 transition-colors">+</button>
                    <div className="h-px bg-black/10"></div>
                    <button className="block w-8 h-8 text-[#1d1d1f] hover:bg-black/5 transition-colors">–</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-16 sm:py-24 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-sm font-medium text-emerald-600 mb-3">Start faster</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
              Property templates
            </h2>
            <p className="text-lg text-[#6e6e73] leading-relaxed">
              Start with pre-designed templates and customize them to create your perfect sustainable property.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((template) => (
              <div key={template.id} className="bg-white rounded-2xl overflow-hidden border border-black/5 min-w-0">
                <div className="h-40">
                  <img
                    src={template.thumbnail}
                    alt={template.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 min-w-0">
                  <h3 className="text-[#1d1d1f] font-semibold text-sm mb-3 truncate">{template.name}</h3>

                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[#86868b]">Complexity</span>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${complexityStyle[template.complexity]}`}>
                        {template.complexity}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#86868b]">Rooms</span>
                      <span className="text-[#1d1d1f]">{template.rooms}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#86868b]">Area</span>
                      <span className="text-[#1d1d1f]">{template.area}</span>
                    </div>
                  </div>

                  <button className="w-full border border-black/10 hover:bg-black/5 text-[#1d1d1f] text-sm font-medium rounded-full py-2 transition-colors">
                    Use template
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-sm font-medium text-emerald-600 mb-3">Everything included</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
              Powerful features
            </h2>
            <p className="text-lg text-[#6e6e73] leading-relaxed">
              Everything you need to create stunning 3D property models.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-black/5 rounded-2xl overflow-hidden border border-black/5">
            <div className="bg-white p-6 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                <Box className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">Drag & drop interface</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">Intuitive drag-and-drop tools make 3D modeling accessible to everyone</p>
            </div>

            <div className="bg-white p-6 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">Real-time preview</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">See your changes instantly with our real-time 3D rendering engine</p>
            </div>

            <div className="bg-white p-6 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                <Download className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">Multiple export formats</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">Export your models in various formats for VR, AR, and web viewing</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Simple3DModelling;
