import React from 'react';
import { Users, Target, Award, Globe, Leaf, Heart } from 'lucide-react';

const AboutUs = () => {
  const team = [
    {
      name: "Arjun Sharma",
      role: "Founder & CEO",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Visionary leader with 15+ years in sustainable architecture and real estate development."
    },
    {
      name: "Priya Patel",
      role: "Chief Technology Officer",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Tech innovator specializing in IoT, blockchain, and sustainable building technologies."
    },
    {
      name: "Rajesh Kumar",
      role: "Head of Sustainability",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Environmental scientist with expertise in carbon footprint reduction and green building certification."
    },
    {
      name: "Meera Singh",
      role: "Chief Design Officer",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Award-winning architect specializing in Vastu-compliant and bioclimatic design principles."
    }
  ];

  const values = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Environmental Stewardship",
      description: "We are committed to protecting and restoring our planet through sustainable building practices and carbon-negative properties."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Community First",
      description: "Building stronger communities through shared resources, collaborative living, and inclusive development practices."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation Excellence",
      description: "Continuously pushing boundaries with cutting-edge technologies while honoring traditional wisdom and practices."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description: "Creating scalable solutions that can transform communities across India and inspire sustainable development worldwide."
    }
  ];

  const milestones = [
    { year: "2019", event: "Founded Add On Prop with vision of sustainable living" },
    { year: "2020", event: "Completed first earthship community in Visakhapatnam" },
    { year: "2021", event: "Launched sustainable materials marketplace" },
    { year: "2022", event: "Achieved carbon-negative status across all projects" },
    { year: "2023", event: "Expanded to 15 cities across India" },
    { year: "2024", event: "Launched blockchain-based property tokenization" },
    { year: "2025", event: "50,000+ sustainable homes built, 2M+ tons CO2 offset" }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                About Add On Prop
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are pioneers in sustainable real estate, blending ancient Indian architectural wisdom 
              with cutting-edge technology to create homes that honor our heritage while protecting our future.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Add On Prop was born from a simple yet powerful vision: to make sustainable living 
                  accessible to every family in Bharat. Founded in 2019, we recognized that the future 
                  of housing lies in harmonizing ancient architectural wisdom with modern sustainable technologies.
                </p>
                <p>
                  Our journey began in Visakhapatnam, where we built our first earthship community using 
                  recycled materials and renewable energy systems. The success of this project demonstrated 
                  that sustainable living could be both affordable and desirable.
                </p>
                <p>
                  Today, we've expanded across 15 cities, built over 50,000 sustainable homes, and offset 
                  more than 2 million tons of CO2. But our mission remains the same: democratizing 
                  sustainable living through innovation, community, and respect for our environment.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Our first sustainable community"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              These principles guide every decision we make and every project we undertake
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Passionate experts dedicated to transforming the future of sustainable living
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-emerald-400 text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Key milestones in our mission to transform sustainable living in India
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 to-teal-500"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4">
                      <div className="text-emerald-400 font-bold text-lg mb-1">{milestone.year}</div>
                      <div className="text-white text-sm">{milestone.event}</div>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full border-4 border-slate-800"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-md border border-emerald-500/30 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Mission</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Be part of the sustainable living revolution. Whether you're looking for your dream home 
              or want to partner with us, let's build a better future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300">
                Explore Properties
              </button>
              <button className="bg-white/10 hover:bg-white/20 border border-white/20 px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;