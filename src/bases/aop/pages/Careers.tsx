import React from 'react';
import { Briefcase, Users, Globe, Heart, ArrowRight, MapPin, Clock, DollarSign } from 'lucide-react';

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Sustainability Engineer",
      department: "Engineering",
      location: "Visakhapatnam, India",
      type: "Full-time",
      salary: "₹15-25 LPA",
      description: "Lead the development of sustainable building systems and renewable energy solutions.",
      requirements: ["5+ years in sustainable engineering", "Experience with solar/wind systems", "Green building certifications"]
    },
    {
      id: 2,
      title: "Blockchain Developer",
      department: "Technology",
      location: "Remote",
      type: "Full-time",
      salary: "₹12-20 LPA",
      description: "Develop blockchain solutions for property tokenization and carbon credit trading.",
      requirements: ["3+ years blockchain development", "Smart contract experience", "Web3 knowledge"]
    },
    {
      id: 3,
      title: "Community Manager",
      department: "Operations",
      location: "Araku Valley, India",
      type: "Full-time",
      salary: "₹8-12 LPA",
      description: "Manage eco-commune communities and facilitate sustainable living programs.",
      requirements: ["Community management experience", "Sustainability knowledge", "Local language skills"]
    },
    {
      id: 4,
      title: "UX/UI Designer",
      department: "Design",
      location: "Hybrid",
      type: "Full-time",
      salary: "₹10-18 LPA",
      description: "Design intuitive interfaces for our sustainable living platform and mobile apps.",
      requirements: ["3+ years UX/UI design", "Figma/Sketch proficiency", "Mobile design experience"]
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Remote Work",
      description: "Flexible remote work options with co-working space allowances"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Learning & Growth",
      description: "Professional development budget, conferences, and skill-building programs"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Equity & Impact",
      description: "Stock options and the opportunity to create meaningful environmental impact"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Join Our Mission
              </span>
              <br />
              <span className="text-white">Build a Sustainable Future</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be part of a team that's transforming how humanity lives on Earth. 
              Work on cutting-edge sustainable technologies while making a real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Work With Us?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Join a company where your work directly contributes to solving climate change 
              and creating sustainable communities worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore exciting opportunities to work on sustainable technologies and make a global impact.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                    <p className="text-emerald-400 font-medium">{job.department}</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm mb-2">
                      {job.type}
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{job.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{job.type}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm">{job.salary}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start space-x-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Culture & Values</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-emerald-400 mb-2">Environmental First</h3>
                  <p className="text-gray-300">Every decision we make considers environmental impact first. We're not just building a business, we're healing the planet.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-emerald-400 mb-2">Innovation & Learning</h3>
                  <p className="text-gray-300">We encourage experimentation, learning from failures, and pushing the boundaries of what's possible in sustainable technology.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-emerald-400 mb-2">Community Impact</h3>
                  <p className="text-gray-300">We believe in creating solutions that benefit entire communities, not just individuals. Collective impact drives our mission.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-emerald-400 mb-2">Work-Life Harmony</h3>
                  <p className="text-gray-300">We practice what we preach about sustainable living, including maintaining healthy work-life balance for our team.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-md border border-emerald-500/30 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Don't See Your Role?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals who want to make a difference. 
              Send us your resume and tell us how you'd like to contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300">
                Send Your Resume
              </button>
              <button className="bg-white/10 hover:bg-white/20 border border-white/20 px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300">
                Learn About Our Culture
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;