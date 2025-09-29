import React from 'react';
import { Eye, Target, Globe, Users, Leaf, Heart, ArrowRight, Lightbulb, Building, Recycle } from 'lucide-react';

const Vision = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-500/20 rounded-full">
                <Eye className="w-16 h-16 text-blue-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Vision</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Creating a sustainable future where technology, nature, and humanity coexist in perfect harmony
            </p>
          </div>
        </div>
      </div>

      {/* Main Vision Statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-slate-800/50 to-blue-900/50 backdrop-blur-sm rounded-3xl p-12 border border-blue-500/20">
          <div className="text-center mb-12">
            <Target className="w-12 h-12 text-blue-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-8">Our Vision for 2030</h2>
            <p className="text-2xl text-gray-300 leading-relaxed max-w-5xl mx-auto">
              To become the world's leading platform for sustainable living, where every home is a beacon of environmental responsibility, 
              every community thrives in harmony with nature, and every individual has access to technologies that heal our planet.
            </p>
          </div>
        </div>
      </div>

      {/* Vision Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-16">The Pillars of Our Vision</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Environmental Pillar */}
          <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-green-500/20 rounded-full mr-4">
                <Leaf className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Environmental Harmony</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A world where every building generates more energy than it consumes, where waste becomes a resource, 
              and where human habitats enhance rather than degrade natural ecosystems.
            </p>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <ArrowRight className="w-4 h-4 text-green-400 mr-2" />
                Carbon-negative communities by 2028
              </li>
              <li className="flex items-center">
                <ArrowRight className="w-4 h-4 text-green-400 mr-2" />
                100% renewable energy integration
              </li>
              <li className="flex items-center">
                <ArrowRight className="w-4 h-4 text-green-400 mr-2" />
                Zero-waste circular economies
              </li>
            </ul>
          </div>

          {/* Social Pillar */}
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-500/20 rounded-full mr-4">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Social Equity</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Ensuring that sustainable living is accessible to all, creating inclusive communities where 
              diversity is celebrated and everyone has the opportunity to thrive.
            </p>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <ArrowRight className="w-4 h-4 text-blue-400 mr-2" />
                Affordable sustainable housing for all
              </li>
              <li className="flex items-center">
                <ArrowRight className="w-4 h-4 text-blue-400 mr-2" />
                Community-owned renewable energy
              </li>
              <li className="flex items-center">
                <ArrowRight className="w-4 h-4 text-blue-400 mr-2" />
                Education and skill development programs
              </li>
            </ul>
          </div>

          {/* Innovation Pillar */}
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-500/20 rounded-full mr-4">
                <Lightbulb className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Technological Innovation</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Harnessing cutting-edge technology to create intelligent, adaptive living spaces that learn, 
              evolve, and optimize for both human wellbeing and environmental health.
            </p>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <ArrowRight className="w-4 h-4 text-purple-400 mr-2" />
                AI-powered sustainability optimization
              </li>
              <li className="flex items-center">
                <ArrowRight className="w-4 h-4 text-purple-400 mr-2" />
                Blockchain-verified carbon credits
              </li>
              <li className="flex items-center">
                <ArrowRight className="w-4 h-4 text-purple-400 mr-2" />
                Metaverse sustainable living experiences
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Global Impact Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Globe className="w-16 h-16 text-purple-400 mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">Global Impact by 2030</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our vision extends beyond individual homes to transform entire cities, regions, and ultimately, 
                the way humanity interacts with our planet.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Building className="w-6 h-6 text-purple-400 mr-3" />
                  <span className="text-gray-300">1 Million sustainable homes worldwide</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-purple-400 mr-3" />
                  <span className="text-gray-300">10 Million people living sustainably</span>
                </div>
                <div className="flex items-center">
                  <Recycle className="w-6 h-6 text-purple-400 mr-3" />
                  <span className="text-gray-300">100 Million tons of CO2 offset annually</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
                <div className="text-gray-300">Countries</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-300">Cities</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">1000+</div>
                <div className="text-gray-300">Communities</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">∞</div>
                <div className="text-gray-300">Possibilities</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <Heart className="w-16 h-16 text-red-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Vision</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            This vision isn't just ours—it's humanity's. Together, we can create a world where sustainability 
            isn't a choice, but a way of life that benefits everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105">
              Explore Our Solutions
            </button>
            <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;