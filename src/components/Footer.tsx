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
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Stay updated with sustainable living
            </h3>
            <p className="text-white/60 text-base sm:text-lg mb-8">
              Get the latest updates on sustainable properties, new technologies, and eco-friendly solutions delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 min-w-0 bg-white/10 border border-white/10 rounded-full px-5 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 transition-all text-sm"
              />
              <button className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-full font-medium text-white transition-colors flex items-center justify-center gap-2 text-sm flex-shrink-0">
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2 min-w-0">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <Leaf className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">
                  AddonProp
                </h2>
                <p className="text-xs text-white/50">Sustainable Living Solutions</p>
              </div>
            </div>

            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Transforming India's real estate landscape by blending ancient architectural wisdom
              with cutting-edge sustainable technologies. Making eco-friendly living accessible for all.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-white/60">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-sm">Visakhapatnam, Andhra Pradesh, India</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-sm">hello@addonprop.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-sm">Naresh Kumar: +91 77023 03223</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-sm">Shiva Karan: +91 73820 47877</span>
              </div>
            </div>

            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center text-white/50 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="min-w-0">
              <h4 className="text-white font-semibold mb-4 text-sm">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-white/50 hover:text-white text-sm transition-colors"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/50 text-sm text-center md:text-left">
              © 2025 AddonProp. All rights reserved. Built with love by <a href="https://studio.sted.space" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors">Studio.sted.space</a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
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