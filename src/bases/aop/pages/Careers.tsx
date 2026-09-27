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
      icon: <Heart className="w-5 h-5" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Remote Work",
      description: "Flexible remote work options with co-working space allowances"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Learning & Growth",
      description: "Professional development budget, conferences, and skill-building programs"
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Equity & Impact",
      description: "Stock options and the opportunity to create meaningful environmental impact"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-6 leading-[1.05]">
            Join our mission. <span className="text-emerald-600">Build a sustainable future.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#6e6e73] leading-relaxed max-w-3xl mx-auto">
            Be part of a team that's transforming how humanity lives on Earth. Work on cutting-edge
            sustainable technologies while making a real impact.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-sm font-medium text-emerald-600 mb-3">Why Join Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
              Why work with us?
            </h2>
            <p className="text-lg text-[#6e6e73] leading-relaxed">
              Join a company where your work directly contributes to solving climate change and
              creating sustainable communities worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/5 rounded-2xl overflow-hidden border border-black/5">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                  {benefit.icon}
                </div>
                <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">{benefit.title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 sm:py-24 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-sm font-medium text-emerald-600 mb-3">Careers</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
              Open positions
            </h2>
            <p className="text-lg text-[#6e6e73] leading-relaxed">
              Explore exciting opportunities to work on sustainable technologies and make a global impact.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="min-w-0 bg-white border border-black/5 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold text-[#1d1d1f] mb-1">{job.title}</h3>
                    <p className="text-emerald-600 font-medium text-sm">{job.department}</p>
                  </div>
                  <div className="shrink-0 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
                    {job.type}
                  </div>
                </div>

                <p className="text-[#6e6e73] mb-6 leading-relaxed">{job.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  <div className="flex items-center space-x-2 text-[#6e6e73]">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[#6e6e73]">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{job.type}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[#6e6e73]">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm">{job.salary}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-[#1d1d1f] font-semibold text-sm mb-3">Requirements</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="text-[#6e6e73] text-sm flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-full font-medium text-white transition-colors text-sm flex items-center justify-center space-x-2">
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="min-w-0">
              <p className="text-sm font-medium text-emerald-600 mb-3">Culture</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-6 tracking-tight">
                Our culture &amp; values
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">Environmental First</h3>
                  <p className="text-[#6e6e73] leading-relaxed">Every decision we make considers environmental impact first. We're not just building a business, we're healing the planet.</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">Innovation &amp; Learning</h3>
                  <p className="text-[#6e6e73] leading-relaxed">We encourage experimentation, learning from failures, and pushing the boundaries of what's possible in sustainable technology.</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">Community Impact</h3>
                  <p className="text-[#6e6e73] leading-relaxed">We believe in creating solutions that benefit entire communities, not just individuals. Collective impact drives our mission.</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">Work-Life Harmony</h3>
                  <p className="text-[#6e6e73] leading-relaxed">We practice what we preach about sustainable living, including maintaining healthy work-life balance for our team.</p>
                </div>
              </div>
            </div>
            <div className="min-w-0">
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                <img
                  src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action — deliberate dark section */}
      <section className="py-16 sm:py-24 bg-[#1d1d1f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Don't see your role?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            We're always looking for passionate individuals who want to make a difference. Send us
            your resume and tell us how you'd like to contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-full font-medium text-white transition-colors text-sm">
              Send Your Resume
            </button>
            <button className="border border-white/20 hover:bg-white/10 px-6 py-3 rounded-full font-medium text-white transition-colors text-sm">
              Learn About Our Culture
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
