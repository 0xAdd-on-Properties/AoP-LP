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

  return (
    <div className="min-h-screen bg-base-100 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-base-200 to-base-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              <span className="gradient-text">Simple 3D Modelling</span>
              <br />
              <span className="text-white">for Property Design</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create stunning 3D models of sustainable properties with our intuitive drag-and-drop interface. 
              No technical expertise required.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary btn-lg">
              <Upload className="w-5 h-5 mr-2" />
              Start New Project
            </button>
            <button className="btn btn-outline btn-lg">
              <Box className="w-5 h-5 mr-2" />
              Browse Templates
            </button>
          </div>
        </div>
      </section>

      {/* Main Editor Interface */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Tool Panel */}
            <div className="lg:col-span-1">
              <div className="card bg-base-200 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-white mb-4">Tools</h3>
                  <div className="space-y-2">
                    {tools.map((tool) => {
                      const IconComponent = tool.icon;
                      return (
                        <button
                          key={tool.id}
                          onClick={() => setSelectedTool(tool.id)}
                          className={`btn btn-block justify-start ${
                            selectedTool === tool.id ? 'btn-primary' : 'btn-ghost'
                          }`}
                        >
                          <IconComponent className="w-4 h-4 mr-2" />
                          {tool.name}
                        </button>
                      );
                    })}
                  </div>

                  <div className="divider"></div>

                  <h4 className="font-semibold text-white mb-2">View Mode</h4>
                  <div className="flex flex-col gap-2">
                    <button 
                      onClick={() => setViewMode('3d')}
                      className={`btn btn-sm ${viewMode === '3d' ? 'btn-primary' : 'btn-ghost'}`}
                    >
                      3D View
                    </button>
                    <button 
                      onClick={() => setViewMode('top')}
                      className={`btn btn-sm ${viewMode === 'top' ? 'btn-primary' : 'btn-ghost'}`}
                    >
                      Top View
                    </button>
                    <button 
                      onClick={() => setViewMode('front')}
                      className={`btn btn-sm ${viewMode === 'front' ? 'btn-primary' : 'btn-ghost'}`}
                    >
                      Front View
                    </button>
                  </div>

                  <div className="divider"></div>

                  <div className="space-y-2">
                    <button className="btn btn-success btn-sm btn-block">
                      <Save className="w-4 h-4 mr-2" />
                      Save Project
                    </button>
                    <button className="btn btn-info btn-sm btn-block">
                      <Download className="w-4 h-4 mr-2" />
                      Export Model
                    </button>
                    <button className="btn btn-secondary btn-sm btn-block">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share Design
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 3D Viewport */}
            <div className="lg:col-span-3">
              <div className="card bg-base-200 shadow-xl">
                <div className="card-body p-0">
                  {/* Viewport Header */}
                  <div className="flex items-center justify-between p-4 border-b border-base-300">
                    <div className="flex items-center space-x-4">
                      <h3 className="text-lg font-semibold text-white">3D Viewport</h3>
                      <div className="badge badge-primary">{viewMode.toUpperCase()}</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="btn btn-sm btn-ghost">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="btn btn-sm btn-ghost">
                        <Grid className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* 3D Canvas Area */}
                  <div className="h-96 lg:h-[600px] bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden">
                    {/* Placeholder 3D Scene */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Box className="w-16 h-16 text-primary mx-auto mb-4 animate-spin" />
                        <h4 className="text-xl font-semibold text-white mb-2">3D Modelling Canvas</h4>
                        <p className="text-gray-400">Drag and drop elements to start building your property model</p>
                      </div>
                    </div>

                    {/* Grid Background */}
                    <div className="absolute inset-0 opacity-20">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                          </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#grid)" />
                      </svg>
                    </div>

                    {/* Controls Overlay */}
                    <div className="absolute top-4 right-4 flex flex-col space-y-2">
                      <div className="bg-base-100/80 backdrop-blur-sm rounded-lg p-2">
                        <button className="btn btn-xs btn-ghost mb-1">+</button>
                        <button className="btn btn-xs btn-ghost">-</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Property Templates</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Start with pre-designed templates and customize them to create your perfect sustainable property
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((template) => (
              <div key={template.id} className="card bg-base-100 shadow-xl card-hover">
                <figure className="h-48">
                  <img 
                    src={template.thumbnail} 
                    alt={template.name}
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-white text-sm">{template.name}</h3>
                  
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex justify-between">
                      <span>Complexity:</span>
                      <span className={`badge badge-sm ${
                        template.complexity === 'Beginner' ? 'badge-success' :
                        template.complexity === 'Intermediate' ? 'badge-warning' :
                        template.complexity === 'Advanced' ? 'badge-error' : 'badge-secondary'
                      }`}>
                        {template.complexity}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rooms:</span>
                      <span className="text-white">{template.rooms}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Area:</span>
                      <span className="text-white">{template.area}</span>
                    </div>
                  </div>

                  <div className="card-actions justify-end mt-4">
                    <button className="btn btn-primary btn-sm">Use Template</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Everything you need to create stunning 3D property models
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Box className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Drag & Drop Interface</h3>
              <p className="text-gray-300">Intuitive drag-and-drop tools make 3D modeling accessible to everyone</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Real-time Preview</h3>
              <p className="text-gray-300">See your changes instantly with our real-time 3D rendering engine</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Multiple Export Formats</h3>
              <p className="text-gray-300">Export your models in various formats for VR, AR, and web viewing</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Simple3DModelling;
