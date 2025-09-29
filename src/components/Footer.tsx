import React from 'react';
import { 
  Leaf, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    "Properties": [
      "Buy Properties",
      "Rent Properties", 
      "Earthships",
      "Mandala Homes",
      "Eco Communes",
      "Virtual Tours"
    ],
    "Marketplace": [
      "Sustainable Materials",
      "Renewable Energy",
      "Water Systems", 
      "Smart Home Tech",
      "Urban Gardens",
      "Waste Management"
    ],
    "Technologies": [
      "3D Printed Construction",
      "Bio Pools & Gardens",
      "Carbon Sink Creation",
      "Agroforestry Systems",
      "Smart Climate Control",
      "Asset Tokenization",
      "Sustainable Architecture",
      "Web3 Integration"
    ],
    "Company": [
      "About Us",
      "Our Vision",
      "Careers",
      "Partner With Us",
      "Research & Development",
      "Sustainability Report"
    ]
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", name: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", name: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", name: "LinkedIn" }
  ];

  return (
    <footer className="bg-slate-900 border-t border-white/10">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Sustainable Living
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              Get the latest updates on sustainable properties, new technologies, and eco-friendly solutions delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:bg-white/20 transition-all"
              />
              <button className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/25">
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-teal-400 rounded-full border-2 border-slate-900"></div>
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                  Add On Prop
                </h2>
                <p className="text-xs text-gray-400">Sustainable Living Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Transforming India's real estate landscape by blending ancient architectural wisdom 
              with cutting-edge sustainable technologies. Making eco-friendly living accessible for all.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span className="text-sm">Visakhapatnam, Andhra Pradesh, India</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span className="text-sm">hello@addonprop.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
            </div>
            
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-green-500 border border-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Add On Prop. All rights reserved. Built with Love by <a href="https://studio.sted.space" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors">Studio.sted.space</a>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                Sustainability Commitment
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;