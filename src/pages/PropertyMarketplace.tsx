import { useState } from 'react';
import { Search, Heart, MapPin, Bed, Bath, Square, ChevronLeft, ChevronRight, Facebook, Instagram, Linkedin, Youtube, Twitter, Building } from 'lucide-react';
import StandardNavbar from '../components/StandardNavbar';
import useClickOutside from '../hooks/useClickOutside';

const PropertyMarketplace = () => {
  const [activeTab, setActiveTab] = useState('BUY');
  const [selectedCategory, setSelectedCategory] = useState('All Properties');
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const propertyModalRef = useClickOutside(() => {
    setSelectedProperty(null);
    setIsModalOpen(false);
  });

  const handlePropertyClick = (property: any) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const popularLocalities = [
    'Madurawada', 'Maddilapalem', 'MVP Colony', 'Rushikonda', 'Bheemunipatnam'
  ];

  const propertyCategories = [
    'All Properties', 'Houses', 'Apartments', 'Commercial', 'Under 50L', 'Premium'
  ];

  const featuredProperties = [
    {
      id: 1,
      title: "Modern Villa with Pool",
      location: "Warlely, Bengaluru",
      price: "₹2.5 Cr",
      beds: 4,
      baths: 4,
      area: "2,400 sq ft",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      title: "Luxury Apartment",
      location: "Vizag, Bengaluru",
      price: "₹1.8 Cr",
      beds: 3,
      baths: 3,
      area: "1,800 sq ft",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      title: "Smart Home Villa",
      location: "Vizag, Bengaluru",
      price: "₹1.2 Cr",
      beds: 3,
      baths: 3,
      area: "1,500 sq ft",
      image: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const spotlightProject = {
    title: "Marina Bay Towers",
    developer: "Seaside Developers",
    location: "Sector 15, Gurgaon",
    price: "₹5.5 Cr - 8.8 Cr",
    type: "4, 5 BHK Residences",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
  };

  const projectsInFocus = [
    {
      id: 1,
      title: "Chaudhary Affordable Homes",
      location: "Visakhapatnam",
      price: "₹25L - 45L",
      type: "2, 3 BHK",
      image: "https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      title: "Riddhi Siddhi Affordable Homes",
      location: "Visakhapatnam",
      price: "₹30L - 50L",
      type: "2, 3 BHK",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const recentlyAdded = [
    {
      id: 1,
      title: "Green Valley Affordable...",
      type: "2 BHK",
      price: "₹28L",
      image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      id: 2,
      title: "Sunrise Apartments",
      type: "3 BHK",
      price: "₹45L",
      image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      id: 3,
      title: "Ocean View Residency",
      type: "2 BHK",
      price: "₹35L",
      image: "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      id: 4,
      title: "Mountain Heights",
      type: "4 BHK",
      price: "₹65L",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  const featuredCollections = [
    { id: 1, title: "Studio", subtitle: "For singles/couples", image: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { id: 2, title: "Luxury", subtitle: "Premium housing", image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { id: 3, title: "Builder Floor", subtitle: "Independent dwelling units", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=300" }
  ];

  const trendingProjects = [
    { id: 1, title: "Eco Smart Villas", type: "3 BHK", price: "₹55L", image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { id: 2, title: "Green Heights", type: "2 BHK", price: "₹32L", image: "https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { id: 3, title: "Sustainable Living", type: "4 BHK", price: "₹75L", image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=300" }
  ];

  const recommendedSellers = [
    { name: "Anas Chaudhary", properties: 24, experience: "5 years", image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Raghu Varma", properties: 18, experience: "3 years", image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Priya Sharma", properties: 31, experience: "7 years", image: "https://images.pexels.com/photos/1040882/pexels-photo-1040882.jpeg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Rajesh Kumar", properties: 15, experience: "4 years", image: "https://images.pexels.com/photos/1040883/pexels-photo-1040883.jpeg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Sneha Patel", properties: 22, experience: "6 years", image: "https://images.pexels.com/photos/1040884/pexels-photo-1040884.jpeg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Vikram Singh", properties: 19, experience: "5 years", image: "https://images.pexels.com/photos/1040885/pexels-photo-1040885.jpeg?auto=compress&cs=tinysrgb&w=100" }
  ];

  const newsArticles = [
    {
      title: "What is Vastu? How does it impact your home loan EMIs?",
      description: "Understanding the ancient science of Vastu and its modern applications...",
      date: "March 10, 2024",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      title: "Sustainable Construction: The Future of Real Estate",
      description: "Exploring eco-friendly building materials and green construction...",
      date: "March 8, 2024",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      title: "Property Investment Tips for First-Time Buyers",
      description: "Essential guide to making your first property investment...",
      date: "March 5, 2024",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  const services = [
    { icon: "🏠", title: "Property Listings", description: "Browse thousands of verified properties" },
    { icon: "🤖", title: "AI Powered Search", description: "Find your perfect home with smart recommendations" },
    { icon: "👁️", title: "3D Virtual Tours", description: "Experience properties from anywhere" },
    { icon: "🔨", title: "Construction Services", description: "End-to-end construction solutions" },
    { icon: "🎨", title: "Interior Design", description: "Transform your space with expert design" },
    { icon: "🪙", title: "Property Tokenization", description: "Invest in real estate with blockchain technology" }
  ];

  return (
    <div className="min-h-screen bg-white" style={{ minHeight: '100vh' }}>
      {/* Standard Navbar */}
      <StandardNavbar />
      
      {/* Header with Search */}
      <header className="bg-gradient-to-br from-slate-900 via-emerald-900 to-blue-900 text-white py-16 relative overflow-hidden pt-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-4000"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          {/* Main Search Section */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Properties to buy in Vizag</h2>
            
            {/* Search Tabs */}
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 rounded-lg p-1 flex">
                {['BUY', 'RENT', 'COMMERCIAL', 'PROJECTS', 'PLOTS', 'PG/CO-LIVING'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === tab ? 'bg-white text-blue-600' : 'text-white hover:bg-white/20'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
          </div>

            {/* Search Bar */}
            <div className="max-w-4xl mx-auto">
              <div className="glass-card rounded-2xl p-6 flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Vizag"
                    className="w-full p-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-white/70"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search by locality, property, project or developer"
                    className="w-full p-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-white/70"
                  />
                </div>
                <button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </button>
                </div>
              </div>
              
            {/* Popular Localities */}
            <div className="mt-6">
              <p className="text-blue-100 mb-3">Popular Localities:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {popularLocalities.map((locality) => (
                  <button
                    key={locality}
                    className="glass-card hover:bg-white/30 px-4 py-2 rounded-full text-sm transition-all duration-300 hover:scale-105"
                  >
                    {locality}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col lg:flex-row gap-4 justify-center items-center">
              <button className="glass-card text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105">
                Are you a Property Owner?
              </button>
              <div className="max-w-2xl w-full text-center">
                <h3 className="font-semibold mb-2 text-white text-lg">Property Digitization & Tokenization</h3>
                <p className="text-xs text-blue-100 mb-3 leading-relaxed">
                  Digitize or tokenize your properties with ease. Experience AR/VR virtual tours, blockchain tokenization, and metaverse integration. 
                  Transform properties into digital assets with fractional ownership and NFT-based deeds.
                </p>
                <button className="text-white underline hover:text-cyan-200 transition-colors text-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
        {/* Property Categories */}
        <div className="border-b border-white/20">
        <div className="container mx-auto px-6">
            <div className="flex overflow-x-auto py-4 space-x-6">
              {propertyCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                      : 'bg-white/80 text-slate-700 hover:text-cyan-600 hover:bg-white/90 border border-slate-200'
                  }`}
                >
                  {category}
              </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Properties */}
        <section className="py-12 bg-gradient-to-br from-slate-50 to-emerald-50">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Featured Properties</h2>
                <p className="text-slate-600">Discover our hand-picked properties with premium amenities</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
                  </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer" onClick={() => handlePropertyClick(property)}>
                  <div className="relative h-56">
                    <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
                    <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300">
                      <Heart className="w-5 h-5 text-slate-600" />
                    </button>
                    <div className="absolute top-4 left-4 bg-emerald-500/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white text-sm font-medium">Premium</span>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-white text-sm font-medium">4.8</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{property.title}</h3>
                    <div className="flex items-center text-slate-600 mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    <div className="text-2xl font-bold text-slate-800 mb-4">{property.price}</div>
                    <div className="flex items-center space-x-4 text-sm text-slate-600 mb-4">
                      <div className="flex items-center">
                        <Bed className="w-4 h-4 mr-1" />
                        <span>{property.beds} Bed</span>
                      </div>
                      <div className="flex items-center">
                        <Bath className="w-4 h-4 mr-1" />
                        <span>{property.baths} Bath</span>
                      </div>
                      <div className="flex items-center">
                        <Square className="w-4 h-4 mr-1" />
                        <span>{property.area}</span>
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 shadow-lg shadow-blue-500/25">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* In Spotlight */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-emerald-50">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">In Spotlight</h2>
                <p className="text-slate-600">Find exclusive projects in your area</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
                  </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img src={spotlightProject.image} alt={spotlightProject.title} className="w-full h-64 md:h-full object-cover" />
                    </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center mr-4">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">{spotlightProject.developer}</h3>
                      <p className="text-slate-600">Premium Developer</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{spotlightProject.title}</h3>
                  <div className="flex items-center text-slate-600 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{spotlightProject.location}</span>
                  </div>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{spotlightProject.price}</div>
                  <p className="text-slate-600 mb-6">{spotlightProject.type}</p>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div className="bg-gradient-to-r from-emerald-500 to-green-500 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                  <p className="text-sm text-slate-600 mb-6">75% Sold</p>
                  
                  <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25">
                    Contact Developer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects in Focus */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Projects in Focus</h2>
                <p className="text-slate-600">View our top projects in your city</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
                    </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsInFocus.map((project) => (
                <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{project.title}</h3>
                    <div className="flex items-center text-slate-600 mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="text-xl font-bold text-emerald-600 mb-3">{project.price}</div>
                    <p className="text-slate-600 text-sm mb-4">{project.type}</p>
                    <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-teal-500/25">
                      View Project
                    </button>
                  </div>
                      </div>
                    ))}
            </div>
          </div>
        </section>

        {/* Recently Added */}
        <section className="py-12 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Recently Added</h2>
                <p className="text-slate-600">Discover new properties added to our portal</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentlyAdded.map((property) => (
              <div key={property.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer" onClick={() => handlePropertyClick(property)}>
                  <img src={property.image} alt={property.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-slate-800 mb-1 text-sm">{property.title}</h3>
                    <p className="text-slate-600 text-sm mb-2">{property.type}</p>
                    <div className="text-lg font-bold text-slate-800 mb-3">{property.price}</div>
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/25">
                      Contact
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Featured Collections</h2>
                <p className="text-slate-600">Hand-picked projects for you</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredCollections.map((collection) => (
                <div key={collection.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <img src={collection.image} alt={collection.title} className="w-full h-48 object-cover" />
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{collection.title}</h3>
                    <p className="text-slate-600 text-sm">{collection.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Trending Projects */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Trending Projects</h2>
                <p className="text-slate-600">Explore what's popular in the market</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {trendingProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="relative">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Trending
                    </div>
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-slate-800 text-sm font-medium">4.8</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-slate-800">{project.title}</h3>
                      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">{project.type}</span>
                    </div>
                    <div className="flex items-center text-slate-600 mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="text-2xl font-bold text-blue-600 mb-4">{project.price}</div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-slate-500">
                        <span className="font-medium">75% Sold</span>
                      </div>
                      <button className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Everything you need in real estate */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">Everything you need in real estate</h2>
              <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
                From property search to construction, we provide end-to-end solutions for all your real estate needs.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Property Listings</h3>
                  <p className="text-slate-600">Browse through our curated collection of properties with detailed information and high-quality images.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">AI-Powered Search</h3>
                  <p className="text-slate-600">Let our advanced AI help you find the perfect property based on your preferences and requirements.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">3D Virtual Tours</h3>
                  <p className="text-slate-600">Experience properties in immersive 3D with our cutting-edge virtual tour technology.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Construction Services</h3>
                  <p className="text-slate-600">Sustainable construction solutions using local materials and innovative 3D printing technology.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Interior Design</h3>
                  <p className="text-slate-600">Professional interior design services to transform your space into your dream home.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Property Tokenization</h3>
                  <p className="text-slate-600">Invest in fractional real estate ownership through our RWA tokenization platform.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Sellers */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Recommended Sellers</h2>
                <p className="text-slate-600">Trusted, verified sellers with excellent track records</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {recommendedSellers.map((seller, index) => (
                <div key={index} className="text-center bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3 ring-2 ring-blue-200">
                    <img src={seller.image} alt={seller.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-semibold text-slate-800 text-sm mb-1">{seller.name}</h3>
                  <p className="text-slate-600 text-xs mb-1">{seller.properties} properties</p>
                  <p className="text-slate-500 text-xs">{seller.experience}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* News & Articles */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-emerald-50">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">News & Articles</h2>
                <p className="text-slate-600">Stay updated with the latest real estate trends and news</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsArticles.map((article, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{article.title}</h3>
                    <p className="text-slate-600 text-sm mb-3">{article.description}</p>
                    <p className="text-slate-500 text-xs">{article.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Normalizing Earthships Section */}
        <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">Normalizing Earthships and Sustainable Constructions</h2>
                <p className="text-slate-600 mb-6">
                  We are committed to promoting sustainable living and eco-friendly construction practices in Vizag. 
                  Our platform connects you with properties that prioritize environmental responsibility and modern comfort.
                </p>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">🌱</span>
                    </div>
                    <p className="text-sm text-slate-600">Sustainable Community</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">🏠</span>
                    </div>
                    <p className="text-sm text-slate-600">Eco-Friendly Living</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <p className="text-sm text-slate-600">Green Technology</p>
                  </div>
                </div>
              </div>

              <div className="text-center lg:text-right">
                <div className="w-64 h-48 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg mx-auto lg:mx-0 flex items-center justify-center">
                  <span className="text-white font-semibold">Earthship Construction</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Localities Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent text-center mb-8">Popular Localities</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {popularLocalities.map((locality, index) => (
                <button key={index} className="bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-700 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg">
                  {locality}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Browse Top Links */}
        <section className="py-12 bg-gradient-to-r from-blue-100 to-cyan-100">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Browse top links to search your home</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">City Collections</h3>
                <div className="space-y-2">
                  {['Luxury Homes', 'Affordable Housing', 'Commercial Spaces', 'Plots', 'Rental Properties'].map((collection) => (
                    <a key={collection} href="#" className="block text-blue-600 hover:text-blue-800 text-sm">
                      {collection}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Builder Search</h3>
                <div className="space-y-2">
                  {['Top Builders', 'New Projects', 'Under Construction', 'Ready to Move', 'RERA Approved'].map((builder) => (
                    <a key={builder} href="#" className="block text-blue-600 hover:text-blue-800 text-sm">
                      {builder}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Property Types</h3>
                <div className="space-y-2">
                  {['Apartments', 'Villas', 'Houses', 'Plots', 'Commercial'].map((type) => (
                    <a key={type} href="#" className="block text-blue-600 hover:text-blue-800 text-sm">
                      {type}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-cyan-600 via-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">AoP - AddonProp</h2>
            <p className="text-cyan-100 mb-6">
              Your trusted partner in real estate. From property search to sustainable living, we've got you covered.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="bg-black/30">
          <div className="container mx-auto px-6 py-8">

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
              <div>
                <h3 className="font-semibold mb-3">Company</h3>
                <div className="space-y-2 text-sm">
                  {['Careers', 'About Us', 'Our Team', 'Terms', 'Refund Policy', 'Privacy Policy', 'Contact Us'].map((link) => (
                    <a key={link} href="#" className="block text-cyan-100 hover:text-white transition-colors">
                      {link}
                    </a>
                  ))}
                          </div>
                        </div>
              
              <div>
                <h3 className="font-semibold mb-3">Partner With Us</h3>
                <div className="space-y-2 text-sm">
                  {['Developers', 'Individual Space', 'Banks', 'Architects'].map((link) => (
                    <a key={link} href="#" className="block text-cyan-100 hover:text-white transition-colors">
                      {link}
                    </a>
                  ))}
                          </div>
                        </div>
              
              <div>
                <h3 className="font-semibold mb-3">Explore</h3>
                <div className="space-y-2 text-sm">
                  {['News', 'Loans', 'Rental', 'Investment'].map((link) => (
                    <a key={link} href="#" className="block text-cyan-100 hover:text-white transition-colors">
                      {link}
                    </a>
                  ))}
                        </div>
                      </div>
              
              <div>
                <h3 className="font-semibold mb-3">Mobile App</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-green-100">Download our mobile app for better experience</p>
                  <div className="flex space-x-2 mb-4">
                    <div className="w-20 h-8 bg-white/20 rounded flex items-center justify-center">
                      <span className="text-xs">App Store</span>
                    </div>
                    <div className="w-20 h-8 bg-white/20 rounded flex items-center justify-center">
                      <span className="text-xs">Play Store</span>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="hover:text-cyan-200 transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-cyan-200 transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-cyan-200 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-cyan-200 transition-colors">
                      <Youtube className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-cyan-200 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/20 text-center">
              <p className="text-cyan-100 text-sm">
                © 2025 AddonProp. All rights reserved. Built with love by{' '}
                <a href="https://studio.sted.space" className="text-cyan-200 hover:text-white transition-colors underline">
                  studio.sted.space
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Property Details Modal */}
      {isModalOpen && selectedProperty && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" ref={propertyModalRef}>
            <div className="relative">
              {/* Header */}
              <div className="bg-gradient-to-r from-slate-700 to-slate-800 p-8 rounded-t-3xl relative">
                <button 
                  onClick={() => {setSelectedProperty(null); setIsModalOpen(false);}}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
                >
                  ✕
                </button>
                
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={selectedProperty?.image || ''} 
                    alt={selectedProperty?.title || ''}
                    className="w-24 h-24 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="text-3xl font-bold text-white">{selectedProperty?.title || ''}</h3>
                    <p className="text-gray-300 text-lg">{selectedProperty?.type || ''}</p>
                    <p className="text-cyan-300 text-xl font-semibold">{selectedProperty?.price || ''}</p>
                </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Property Details</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-gray-300">
                        <MapPin className="w-4 h-4 text-emerald-400" />
                        <span>{selectedProperty?.location || 'N/A'}</span>
                          </div>
                      <div className="flex items-center space-x-3 text-gray-300">
                        <Bed className="w-4 h-4 text-emerald-400" />
                        <span>{selectedProperty?.bedrooms || 'N/A'} Bedrooms</span>
                        </div>
                      <div className="flex items-center space-x-3 text-gray-300">
                        <Bath className="w-4 h-4 text-emerald-400" />
                        <span>{selectedProperty?.bathrooms || 'N/A'} Bathrooms</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-300">
                        <Square className="w-4 h-4 text-emerald-400" />
                        <span>{selectedProperty?.area || 'N/A'} sq ft</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Sustainability Features</h4>
                    <div className="space-y-2">
                      {selectedProperty?.features?.map((feature: any, idx: number) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                        </div>
                      </div>
                    </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <button className="flex-1 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg shadow-emerald-500/25">
                        Schedule Site Visit
                      </button>
                  <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg shadow-cyan-500/25">
                        Virtual Tour
                      </button>
                  <button className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300">
                    Get Brochure
                      </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyMarketplace;