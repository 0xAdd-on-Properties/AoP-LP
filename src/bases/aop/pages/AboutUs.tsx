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
      icon: <Leaf className="w-5 h-5" />,
      title: "Environmental Stewardship",
      description: "We are committed to protecting and restoring our planet through sustainable building practices and carbon-negative properties."
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Community First",
      description: "Building stronger communities through shared resources, collaborative living, and inclusive development practices."
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Innovation Excellence",
      description: "Continuously pushing boundaries with cutting-edge technologies while honoring traditional wisdom and practices."
    },
    {
      icon: <Globe className="w-5 h-5" />,
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
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-6 leading-[1.05]">
            About <span className="text-emerald-600">Add On Prop</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#6e6e73] leading-relaxed max-w-3xl mx-auto">
            We are pioneers in sustainable real estate, blending ancient Indian architectural wisdom
            with cutting-edge technology to create homes that honor our heritage while protecting our future.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="min-w-0">
              <p className="text-sm font-medium text-emerald-600 mb-3">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-6 tracking-tight">
                Building sustainably, from the ground up
              </h2>
              <div className="space-y-4 text-[#6e6e73] leading-relaxed">
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
            <div className="min-w-0">
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                <img
                  src="/images/homes/earthship-eco-home.png"
                  alt="Our first sustainable earthship community in Visakhapatnam"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 sm:py-24 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-sm font-medium text-emerald-600 mb-3">What Drives Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
              Our core values
            </h2>
            <p className="text-lg text-[#6e6e73] leading-relaxed">
              These principles guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/5 rounded-2xl overflow-hidden border border-black/5">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                  {value.icon}
                </div>
                <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">{value.title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-sm font-medium text-emerald-600 mb-3">The People</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
              Meet our team
            </h2>
            <p className="text-lg text-[#6e6e73] leading-relaxed">
              Passionate experts dedicated to transforming the future of sustainable living.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="min-w-0 bg-white border border-black/5 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-[#1d1d1f] mb-1">{member.name}</h3>
                  <p className="text-emerald-600 text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-[#6e6e73] text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-24 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-sm font-medium text-emerald-600 mb-3">Milestones</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
              Our journey
            </h2>
            <p className="text-lg text-[#6e6e73] leading-relaxed">
              Key milestones in our mission to transform sustainable living in India.
            </p>
          </div>

          <div className="max-w-3xl">
            <div className="relative pl-8 sm:pl-10">
              <div className="absolute left-[7px] sm:left-[9px] top-1 bottom-1 w-px bg-black/10"></div>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative min-w-0">
                    <div className="absolute -left-8 sm:-left-10 top-1 w-3.5 h-3.5 rounded-full bg-emerald-600 ring-4 ring-[#f5f5f7]"></div>
                    <div className="text-emerald-600 font-semibold text-sm mb-1">{milestone.year}</div>
                    <div className="text-[#1d1d1f] text-base">{milestone.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action — deliberate dark section */}
      <section className="py-16 sm:py-24 bg-[#1d1d1f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Join our mission</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Be part of the sustainable living revolution. Whether you're looking for your dream home
            or want to partner with us, let's build a better future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-full font-medium text-white transition-colors text-sm">
              Explore Properties
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

export default AboutUs;
