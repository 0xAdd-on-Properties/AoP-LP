import React from 'react';
import { Eye, Target, Globe, Users, Leaf, Heart, ArrowRight, Lightbulb, Building, Recycle } from 'lucide-react';

const Vision = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
              <Eye className="w-7 h-7" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-6 leading-[1.05]">
            Our <span className="text-emerald-600">Vision</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#6e6e73] leading-relaxed max-w-3xl mx-auto">
            Creating a sustainable future where technology, nature, and humanity coexist in perfect harmony.
          </p>
        </div>
      </section>

      {/* Main Vision Statement */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mx-auto mb-6 text-emerald-600">
            <Target className="w-5 h-5" />
          </div>
          <p className="text-sm font-medium text-emerald-600 mb-3">Our Vision for 2030</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-6 tracking-tight">
            The world's leading platform for sustainable living
          </h2>
          <p className="text-lg sm:text-xl text-[#6e6e73] leading-relaxed max-w-4xl mx-auto">
            Where every home is a beacon of environmental responsibility, every community thrives in
            harmony with nature, and every individual has access to technologies that heal our planet.
          </p>
        </div>
      </section>

      {/* Vision Pillars */}
      <section className="py-16 sm:py-24 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-sm font-medium text-emerald-600 mb-3">What We Stand For</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] tracking-tight">
              The pillars of our vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Environmental Pillar */}
            <div className="min-w-0 bg-white border border-black/5 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-[#1d1d1f] mb-3">Environmental Harmony</h3>
              <p className="text-[#6e6e73] text-sm leading-relaxed mb-6">
                A world where every building generates more energy than it consumes, where waste
                becomes a resource, and where human habitats enhance rather than degrade natural ecosystems.
              </p>
              <ul className="space-y-2.5">
                <li className="flex items-center text-sm text-[#6e6e73]">
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                  Carbon-negative communities by 2028
                </li>
                <li className="flex items-center text-sm text-[#6e6e73]">
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                  100% renewable energy integration
                </li>
                <li className="flex items-center text-sm text-[#6e6e73]">
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                  Zero-waste circular economies
                </li>
              </ul>
            </div>

            {/* Social Pillar */}
            <div className="min-w-0 bg-white border border-black/5 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-[#1d1d1f] mb-3">Social Equity</h3>
              <p className="text-[#6e6e73] text-sm leading-relaxed mb-6">
                Ensuring that sustainable living is accessible to all, creating inclusive communities
                where diversity is celebrated and everyone has the opportunity to thrive.
              </p>
              <ul className="space-y-2.5">
                <li className="flex items-center text-sm text-[#6e6e73]">
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                  Affordable sustainable housing for all
                </li>
                <li className="flex items-center text-sm text-[#6e6e73]">
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                  Community-owned renewable energy
                </li>
                <li className="flex items-center text-sm text-[#6e6e73]">
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                  Education and skill development programs
                </li>
              </ul>
            </div>

            {/* Innovation Pillar */}
            <div className="min-w-0 bg-white border border-black/5 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-[#1d1d1f] mb-3">Technological Innovation</h3>
              <p className="text-[#6e6e73] text-sm leading-relaxed mb-6">
                Harnessing cutting-edge technology to create intelligent, adaptive living spaces that
                learn, evolve, and optimize for both human wellbeing and environmental health.
              </p>
              <ul className="space-y-2.5">
                <li className="flex items-center text-sm text-[#6e6e73]">
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                  AI-powered sustainability optimization
                </li>
                <li className="flex items-center text-sm text-[#6e6e73]">
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                  Blockchain-verified carbon credits
                </li>
                <li className="flex items-center text-sm text-[#6e6e73]">
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                  Metaverse sustainable living experiences
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact Vision */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="min-w-0">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                <Globe className="w-5 h-5" />
              </div>
              <p className="text-sm font-medium text-emerald-600 mb-3">Looking Ahead</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-6 tracking-tight">
                Global impact by 2030
              </h2>
              <p className="text-lg text-[#6e6e73] mb-8 leading-relaxed">
                Our vision extends beyond individual homes to transform entire cities, regions, and
                ultimately, the way humanity interacts with our planet.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Building className="w-5 h-5 text-emerald-600 mr-3 shrink-0" />
                  <span className="text-[#6e6e73]">1 Million sustainable homes worldwide</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-emerald-600 mr-3 shrink-0" />
                  <span className="text-[#6e6e73]">10 Million people living sustainably</span>
                </div>
                <div className="flex items-center">
                  <Recycle className="w-5 h-5 text-emerald-600 mr-3 shrink-0" />
                  <span className="text-[#6e6e73]">100 Million tons of CO2 offset annually</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#f5f5f7] rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-[#1d1d1f] mb-1">50+</div>
                <div className="text-[#6e6e73] text-sm">Countries</div>
              </div>
              <div className="bg-[#f5f5f7] rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-[#1d1d1f] mb-1">500+</div>
                <div className="text-[#6e6e73] text-sm">Cities</div>
              </div>
              <div className="bg-[#f5f5f7] rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-[#1d1d1f] mb-1">1000+</div>
                <div className="text-[#6e6e73] text-sm">Communities</div>
              </div>
              <div className="bg-[#f5f5f7] rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-[#1d1d1f] mb-1">∞</div>
                <div className="text-[#6e6e73] text-sm">Possibilities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action — deliberate dark section */}
      <section className="py-16 sm:py-24 bg-[#1d1d1f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Heart className="w-8 h-8 text-emerald-500 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Join our vision</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            This vision isn't just ours — it's humanity's. Together, we can create a world where
            sustainability isn't a choice, but a way of life that benefits everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-full font-medium text-white transition-colors text-sm">
              Explore Our Solutions
            </button>
            <button className="border border-white/20 hover:bg-white/10 px-6 py-3 rounded-full font-medium text-white transition-colors text-sm">
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
