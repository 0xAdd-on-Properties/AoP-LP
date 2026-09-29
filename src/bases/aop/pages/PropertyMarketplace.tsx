'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Heart, MapPin, Bed, Bath, Square, ChevronLeft, ChevronRight, Building } from 'lucide-react';
import StandardNavbar from '../../../components/StandardNavbar';
import Footer from '../../../components/Footer';
import LocationFilter from '../../../components/LocationFilter';
import useClickOutside from '../../../hooks/useClickOutside';

const PropertyMarketplace = () => {
  const [activeTab, setActiveTab] = useState('BUY');
  const [selectedCity, setSelectedCity] = useState('Visakhapatnam');
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
      location: "Yendada, Visakhapatnam",
      price: "₹2.5 Cr",
      beds: 4,
      baths: 4,
      area: "2,400 sq ft",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      title: "Luxury Apartment",
      location: "MVP Colony, Visakhapatnam",
      price: "₹1.8 Cr",
      beds: 3,
      baths: 3,
      area: "1,800 sq ft",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      title: "Smart Home Villa",
      location: "Rushikonda, Visakhapatnam",
      price: "₹1.2 Cr",
      beds: 3,
      baths: 3,
      area: "1,500 sq ft",
      image: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const spotlightProject = {
    title: "Ocean Crest Residences",
    developer: "Seaside Developers",
    location: "Beach Road, Visakhapatnam",
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
    },
    {
      id: 3,
      title: "Kondapalli Garden Residency",
      location: "Vijayawada",
      price: "₹32L - 55L",
      type: "2, 3 BHK",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      title: "Jubilee Hills Sustainable Homes",
      location: "Hyderabad",
      price: "₹60L - 95L",
      type: "3, 4 BHK",
      image: "https://images.pexels.com/photos/32037836/pexels-photo-32037836.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 5,
      title: "Seaside Green Enclave",
      location: "Visakhapatnam",
      price: "₹40L - 68L",
      type: "2, 3 BHK",
      image: "https://images.pexels.com/photos/36392046/pexels-photo-36392046.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 6,
      title: "Araku Hillside Farmstead",
      location: "Araku Valley",
      price: "₹28L - 42L",
      type: "Farmhouse Plots",
      image: "https://images.pexels.com/photos/34953685/pexels-photo-34953685.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const recentlyAdded = [
    { id: 1, title: "Green Valley Affordable...", type: "2 BHK", location: "Visakhapatnam", price: "₹28L", image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { id: 2, title: "Sunrise Apartments", type: "3 BHK", location: "Visakhapatnam", price: "₹45L", image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { id: 3, title: "Ocean View Residency", type: "2 BHK", location: "Visakhapatnam", price: "₹35L", image: "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { id: 4, title: "Mountain Heights", type: "4 BHK", location: "Visakhapatnam", price: "₹65L", image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=300" }
  ];

  const featuredCollections = [
    { id: 1, title: "Studio", subtitle: "For singles/couples", image: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { id: 2, title: "Luxury", subtitle: "Premium housing", image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { id: 3, title: "Builder Floor", subtitle: "Independent dwelling units", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=300" }
  ];

  const trendingProjects = [
    { id: 1, title: "Eco Smart Villas", type: "3 BHK", location: "Visakhapatnam", price: "₹55L", image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { id: 2, title: "Green Heights", type: "2 BHK", location: "Visakhapatnam", price: "₹32L", image: "https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { id: 3, title: "Sustainable Living", type: "4 BHK", location: "Visakhapatnam", price: "₹75L", image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=300" }
  ];

  const recommendedSellers = [
    { name: "Anas Chaudhary", properties: 24, experience: "5 years", image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Raghu Varma", properties: 18, experience: "3 years", image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Priya Sharma", properties: 31, experience: "7 years", image: "https://images.pexels.com/photos/1040882/pexels-photo-1040882.jpeg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Rajesh Kumar", properties: 15, experience: "4 years", image: "https://images.pexels.com/photos/1040883/pexels-photo-1040883.jpeg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Sneha Patel", properties: 22, experience: "6 years", image: "https://images.pexels.com/photos/31302931/pexels-photo-31302931.jpeg?auto=compress&cs=tinysrgb&w=100" },
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

  return (
    <div className="min-h-screen bg-white" style={{ minHeight: '100vh' }}>
      {/* Standard Navbar */}
      <StandardNavbar />

      {/* Header with Search */}
      <header className="bg-[#f5f5f7] pt-24 sm:pt-32 pb-10 sm:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Main Search Section */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-6">
              Properties to buy in {selectedCity}
            </h1>

            {/* Search Tabs */}
            <div className="flex justify-center mb-6">
              <div className="bg-white border border-black/5 rounded-full p-1 flex flex-wrap justify-center gap-1 shadow-sm">
                {['BUY', 'RENT', 'COMMERCIAL', 'PROJECTS', 'PLOTS', 'PG/CO-LIVING'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                      activeTab === tab ? 'bg-emerald-600 text-white' : 'text-[#6e6e73] hover:bg-black/5'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Bar */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white border border-black/5 shadow-lg rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row gap-3">
                <div className="flex-1">
                  <LocationFilter selectedCity={selectedCity} onCityChange={setSelectedCity} />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search by locality, property, project or developer"
                    className="w-full p-2.5 sm:p-3 bg-[#f5f5f7] border border-black/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-[#1d1d1f] placeholder-[#6e6e73] text-sm sm:text-base"
                  />
                </div>
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center text-sm sm:text-base">
                  <Search className="w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2" />
                  Search
                </button>
              </div>
            </div>

            {/* Popular Localities */}
            <div className="mt-6">
              <p className="text-[#6e6e73] mb-3 text-xs sm:text-sm">Popular Localities:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {popularLocalities.map((locality) => (
                  <button
                    key={locality}
                    className="bg-white border border-black/5 hover:border-emerald-600/30 hover:text-emerald-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm text-[#1d1d1f] transition-colors"
                  >
                    {locality}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col lg:flex-row gap-4 justify-center items-center">
              <button className="bg-white border border-black/5 shadow-sm text-[#1d1d1f] px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:border-emerald-600/30 transition-colors text-sm sm:text-base">
                Are you a Property Owner?
              </button>
              <div className="max-w-2xl w-full text-center bg-white border border-black/5 rounded-2xl p-5 sm:p-6">
                <h3 className="font-semibold mb-2 text-[#1d1d1f] text-base sm:text-lg">Property Digitization &amp; Tokenization</h3>
                <p className="text-xs sm:text-sm text-[#6e6e73] mb-3 leading-relaxed">
                  Digitize or tokenize your properties with ease. Experience AR/VR virtual tours, blockchain tokenization, and metaverse integration.
                  Transform properties into digital assets with fractional ownership and NFT-based deeds.
                </p>
                <button className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors text-xs sm:text-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-white">
        {/* Property Categories */}
        <div className="border-b border-black/5 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex overflow-x-auto py-3 sm:py-4 gap-2 sm:gap-3">
              {propertyCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap py-2 px-3 sm:px-4 rounded-full font-medium transition-colors text-sm sm:text-base ${
                    selectedCategory === category
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#f5f5f7] text-[#6e6e73] hover:text-[#1d1d1f]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Properties */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-8 gap-4">
              <div>
                <p className="text-sm font-medium text-emerald-600 mb-2">Handpicked</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight">Featured Properties</h2>
                <p className="text-[#6e6e73] text-sm sm:text-base mt-1">Discover our hand-picked properties with premium amenities</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 border border-black/10 rounded-full hover:bg-black/5">
                  <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5" />
                </button>
                <button className="p-2 border border-black/10 rounded-full hover:bg-black/5">
                  <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {featuredProperties.map((property) => (
                <div key={property.id} className="bg-white border border-black/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer" onClick={() => handlePropertyClick(property)}>
                  <div className="relative h-56">
                    <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
                    <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                      <Heart className="w-5 h-5 text-[#6e6e73]" />
                    </button>
                    <div className="absolute top-4 left-4 bg-emerald-600 px-3 py-1 rounded-full">
                      <span className="text-white text-xs font-medium">Premium</span>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-white text-sm font-medium">4.8</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">{property.title}</h3>
                    <div className="flex items-center text-[#6e6e73] mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    <div className="text-xl font-bold text-[#1d1d1f] mb-4">{property.price}</div>
                    <div className="flex items-center space-x-4 text-sm text-[#6e6e73] mb-4">
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
                    <button
                      onClick={() => window.location.href = `/property/${property.id}`}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-full font-semibold text-white transition-colors text-sm"
                    >
                      View Property
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* In Spotlight */}
        <section className="py-12 sm:py-16 bg-[#f5f5f7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-end mb-8">
              <div>
                <p className="text-sm font-medium text-emerald-600 mb-2">Highlight</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight">In Spotlight</h2>
                <p className="text-[#6e6e73] mt-1">Find exclusive projects in your area</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 border border-black/10 rounded-full bg-white hover:bg-black/5">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-2 border border-black/10 rounded-full bg-white hover:bg-black/5">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img src={spotlightProject.image} alt={spotlightProject.title} className="w-full h-64 md:h-full object-cover" />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mr-4 text-emerald-600">
                      <Building className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#1d1d1f]">{spotlightProject.developer}</h3>
                      <p className="text-[#6e6e73] text-sm">Premium Developer</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2">{spotlightProject.title}</h3>
                  <div className="flex items-center text-[#6e6e73] mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{spotlightProject.location}</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-emerald-600 mb-2">{spotlightProject.price}</div>
                  <p className="text-[#6e6e73] mb-6">{spotlightProject.type}</p>

                  <div className="w-full bg-black/5 rounded-full h-2 mb-4">
                    <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <p className="text-sm text-[#6e6e73] mb-6">75% Sold</p>

                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                    Contact Developer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects in Focus */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-end mb-8">
              <div>
                <p className="text-sm font-medium text-emerald-600 mb-2">Curated</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight">Projects in Focus</h2>
                <p className="text-[#6e6e73] mt-1">View our top projects in your city</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 border border-black/10 rounded-full hover:bg-black/5">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-2 border border-black/10 rounded-full hover:bg-black/5">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {projectsInFocus.map((project) => (
                <div key={project.id} className="bg-white border border-black/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">{project.title}</h3>
                    <div className="flex items-center text-[#6e6e73] mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="text-lg font-bold text-emerald-600 mb-3">{project.price}</div>
                    <p className="text-[#6e6e73] text-sm mb-4">{project.type}</p>
                    <button className="w-full bg-[#1d1d1f] hover:bg-black text-white py-2.5 rounded-full font-semibold transition-colors">
                      View Project
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recently Added */}
        <section className="py-12 sm:py-16 bg-[#f5f5f7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-end mb-8">
              <div>
                <p className="text-sm font-medium text-emerald-600 mb-2">Fresh</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight">Recently Added</h2>
                <p className="text-[#6e6e73] mt-1">Discover new properties added to our portal</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 border border-black/10 rounded-full bg-white hover:bg-black/5">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-2 border border-black/10 rounded-full bg-white hover:bg-black/5">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentlyAdded.map((property) => (
                <div key={property.id} className="bg-white border border-black/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer" onClick={() => handlePropertyClick(property)}>
                  <img src={property.image} alt={property.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-[#1d1d1f] mb-1 text-sm">{property.title}</h3>
                    <p className="text-[#6e6e73] text-sm mb-2">{property.type}</p>
                    <div className="text-base font-bold text-[#1d1d1f] mb-3">{property.price}</div>
                    <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-full text-sm font-semibold transition-colors">
                      Contact
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-end mb-8">
              <div>
                <p className="text-sm font-medium text-emerald-600 mb-2">Browse By Type</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight">Featured Collections</h2>
                <p className="text-[#6e6e73] mt-1">Hand-picked projects for you</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 border border-black/10 rounded-full hover:bg-black/5">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-2 border border-black/10 rounded-full hover:bg-black/5">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {featuredCollections.map((collection) => (
                <div key={collection.id} className="bg-white border border-black/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                  <img src={collection.image} alt={collection.title} className="w-full h-48 object-cover" />
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-[#1d1d1f] mb-1">{collection.title}</h3>
                    <p className="text-[#6e6e73] text-sm">{collection.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Projects */}
        <section className="py-12 sm:py-16 bg-[#f5f5f7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-end mb-8">
              <div>
                <p className="text-sm font-medium text-emerald-600 mb-2">Popular Now</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight">Trending Projects</h2>
                <p className="text-[#6e6e73] mt-1">Explore what's popular in the market</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 border border-black/10 rounded-full bg-white hover:bg-black/5">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-2 border border-black/10 rounded-full bg-white hover:bg-black/5">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {trendingProjects.map((project) => (
                <div key={project.id} className="bg-white border border-black/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                    <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Trending
                    </div>
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-[#1d1d1f] text-sm font-medium">4.8</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-[#1d1d1f]">{project.title}</h3>
                      <span className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium">{project.type}</span>
                    </div>
                    <div className="flex items-center text-[#6e6e73] mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="text-xl font-bold text-[#1d1d1f] mb-4">{project.price}</div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-[#6e6e73]">
                        <span className="font-medium">75% Sold</span>
                      </div>
                      <button
                        onClick={() => window.location.href = `/property/${project.id}`}
                        className="bg-[#1d1d1f] hover:bg-black text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
                      >
                        View Property
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Everything you need in real estate */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-12 sm:mb-16">
              <p className="text-sm font-medium text-emerald-600 mb-3">Full Service</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4 tracking-tight">Everything you need in real estate</h2>
              <p className="text-lg text-[#6e6e73] leading-relaxed">
                From property search to construction, we provide end-to-end solutions for all your real estate needs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/5 rounded-2xl overflow-hidden border border-black/5">
              <div className="bg-white p-6 sm:p-8 min-w-0">
                <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">Property Listings</h3>
                <p className="text-[#6e6e73] text-sm leading-relaxed">Browse through our curated collection of properties with detailed information and high-quality images.</p>
              </div>

              <div className="bg-white p-6 sm:p-8 min-w-0">
                <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">AI-Powered Search</h3>
                <p className="text-[#6e6e73] text-sm leading-relaxed">Let our advanced AI help you find the perfect property based on your preferences and requirements.</p>
              </div>

              <div className="bg-white p-6 sm:p-8 min-w-0">
                <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">3D Virtual Tours</h3>
                <p className="text-[#6e6e73] text-sm leading-relaxed">Experience properties in immersive 3D with our cutting-edge virtual tour technology.</p>
              </div>

              <Link href="/get-a-quote" className="bg-white p-6 sm:p-8 min-w-0 block group hover:bg-emerald-50/50 transition-colors">
                <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2 group-hover:text-emerald-600 transition-colors">Construction Services</h3>
                <p className="text-[#6e6e73] text-sm leading-relaxed">Sustainable construction solutions using local materials and innovative 3D printing technology. <span className="text-emerald-600 font-medium">Get a quote →</span></p>
              </Link>

              <Link href="/get-a-quote" className="bg-white p-6 sm:p-8 min-w-0 block group hover:bg-emerald-50/50 transition-colors">
                <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2 group-hover:text-emerald-600 transition-colors">Interior Design</h3>
                <p className="text-[#6e6e73] text-sm leading-relaxed">Professional interior design services to transform your space into your dream home. <span className="text-emerald-600 font-medium">Get a quote →</span></p>
              </Link>

              <div className="bg-white p-6 sm:p-8 min-w-0">
                <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">Property Tokenization</h3>
                <p className="text-[#6e6e73] text-sm leading-relaxed">Invest in fractional real estate ownership through our RWA tokenization platform.</p>
              </div>

              <Link href="/materials-marketplace?category=fencing" className="bg-white p-6 sm:p-8 min-w-0 block group hover:bg-emerald-50/50 transition-colors">
                <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2 group-hover:text-emerald-600 transition-colors">Fencing</h3>
                <p className="text-[#6e6e73] text-sm leading-relaxed">Compound walls, boundary fencing, and gates sourced from vetted local suppliers. <span className="text-emerald-600 font-medium">Browse suppliers →</span></p>
              </Link>

              <Link href="/get-a-quote" className="bg-white p-6 sm:p-8 min-w-0 block group hover:bg-emerald-50/50 transition-colors">
                <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2 group-hover:text-emerald-600 transition-colors">Safeguard Your Home</h3>
                <p className="text-[#6e6e73] text-sm leading-relaxed">CCTV, smart locks, and alarm systems to keep your property secure. <span className="text-emerald-600 font-medium">Get a quote →</span></p>
              </Link>
            </div>
          </div>
        </section>

        {/* Recommended Sellers */}
        <section className="py-12 sm:py-16 bg-[#f5f5f7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-end mb-8">
              <div>
                <p className="text-sm font-medium text-emerald-600 mb-2">Trusted Partners</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight">Recommended Sellers</h2>
                <p className="text-[#6e6e73] mt-1">Trusted, verified sellers with excellent track records</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 border border-black/10 rounded-full bg-white hover:bg-black/5">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-2 border border-black/10 rounded-full bg-white hover:bg-black/5">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
              {recommendedSellers.map((seller, index) => (
                <div key={index} className="text-center bg-white border border-black/5 rounded-2xl p-5 sm:p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3 ring-2 ring-emerald-100">
                    <img src={seller.image} alt={seller.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-semibold text-[#1d1d1f] text-sm mb-1">{seller.name}</h3>
                  <p className="text-[#6e6e73] text-xs mb-1">{seller.properties} properties</p>
                  <p className="text-[#6e6e73]/80 text-xs">{seller.experience}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* News & Articles */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-end mb-8">
              <div>
                <p className="text-sm font-medium text-emerald-600 mb-2">Insights</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight">News &amp; Articles</h2>
                <p className="text-[#6e6e73] mt-1">Stay updated with the latest real estate trends and news</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 border border-black/10 rounded-full hover:bg-black/5">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-2 border border-black/10 rounded-full hover:bg-black/5">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {newsArticles.map((article, index) => (
                <div key={index} className="bg-white border border-black/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                  <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-base font-semibold text-[#1d1d1f] mb-2">{article.title}</h3>
                    <p className="text-[#6e6e73] text-sm mb-3">{article.description}</p>
                    <p className="text-[#6e6e73]/70 text-xs">{article.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Normalizing Earthships Section */}
        <section className="py-16 sm:py-24 bg-[#f5f5f7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="min-w-0">
                <p className="text-sm font-medium text-emerald-600 mb-3">Sustainability</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4 tracking-tight">Normalizing Earthships and Sustainable Constructions</h2>
                <p className="text-[#6e6e73] mb-8 leading-relaxed">
                  We are committed to promoting sustainable living and eco-friendly construction practices in Vizag.
                  Our platform connects you with properties that prioritize environmental responsibility and modern comfort.
                </p>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">🌱</span>
                    </div>
                    <p className="text-sm text-[#6e6e73]">Sustainable Community</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">🏠</span>
                    </div>
                    <p className="text-sm text-[#6e6e73]">Eco-Friendly Living</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <p className="text-sm text-[#6e6e73]">Green Technology</p>
                  </div>
                </div>
              </div>

              <div className="min-w-0">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <img
                    src="/images/homes/earthship-eco-home.png"
                    alt="A self-sufficient earthship home built from recycled and natural materials"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                    <span className="text-white font-semibold">Earthship Construction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Localities Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight text-center mb-8">Popular Localities</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {popularLocalities.map((locality, index) => (
                <button key={index} className="bg-[#f5f5f7] hover:bg-emerald-50 text-[#1d1d1f] hover:text-emerald-700 px-6 py-3 rounded-full text-sm font-medium transition-colors">
                  {locality}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Browse Top Links */}
        <section className="py-12 sm:py-16 bg-[#f5f5f7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] text-center mb-8">Browse top links to search your home</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-[#1d1d1f] mb-4">City Collections</h3>
                <div className="space-y-2">
                  {['Luxury Homes', 'Affordable Housing', 'Commercial Spaces', 'Plots', 'Rental Properties'].map((collection) => (
                    <a key={collection} href="#" className="block text-[#6e6e73] hover:text-emerald-600 text-sm transition-colors">
                      {collection}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-[#1d1d1f] mb-4">Builder Search</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-[#6e6e73] hover:text-emerald-600 text-sm transition-colors">Top Builders</a>
                  <Link href="/architects" className="block text-[#6e6e73] hover:text-emerald-600 text-sm transition-colors">Top Architects</Link>
                  {['New Projects', 'Under Construction', 'Ready to Move', 'RERA Approved'].map((builder) => (
                    <a key={builder} href="#" className="block text-[#6e6e73] hover:text-emerald-600 text-sm transition-colors">
                      {builder}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-[#1d1d1f] mb-4">Property Types</h3>
                <div className="space-y-2">
                  {['Apartments', 'Villas', 'Houses', 'Plots', 'Commercial'].map((type) => (
                    <a key={type} href="#" className="block text-[#6e6e73] hover:text-emerald-600 text-sm transition-colors">
                      {type}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Property Details Modal */}
      {isModalOpen && selectedProperty && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" ref={propertyModalRef}>
            <div className="relative">
              {/* Header */}
              <div className="bg-[#f5f5f7] p-8 rounded-t-3xl relative">
                <button
                  onClick={() => { setSelectedProperty(null); setIsModalOpen(false); }}
                  className="absolute top-4 right-4 w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-[#1d1d1f] hover:bg-black/5 transition-colors"
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
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight">{selectedProperty?.title || ''}</h3>
                    <p className="text-[#6e6e73] text-lg">{selectedProperty?.type || ''}</p>
                    <p className="text-emerald-600 text-xl font-semibold">{selectedProperty?.price || ''}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-[#1d1d1f] mb-4">Property Details</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-[#6e6e73]">
                        <MapPin className="w-4 h-4 text-emerald-600" />
                        <span>{selectedProperty?.location || 'N/A'}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-[#6e6e73]">
                        <Bed className="w-4 h-4 text-emerald-600" />
                        <span>{selectedProperty?.bedrooms || 'N/A'} Bedrooms</span>
                      </div>
                      <div className="flex items-center space-x-3 text-[#6e6e73]">
                        <Bath className="w-4 h-4 text-emerald-600" />
                        <span>{selectedProperty?.bathrooms || 'N/A'} Bathrooms</span>
                      </div>
                      <div className="flex items-center space-x-3 text-[#6e6e73]">
                        <Square className="w-4 h-4 text-emerald-600" />
                        <span>{selectedProperty?.area || 'N/A'} sq ft</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#1d1d1f] mb-4">Sustainability Features</h4>
                    <div className="space-y-2">
                      {selectedProperty?.features?.map((feature: any, idx: number) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
                          <span className="text-[#6e6e73] text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <button
                    onClick={() => window.location.href = `/property/${selectedProperty?.id}`}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-full font-semibold text-white transition-colors"
                  >
                    View Property
                  </button>
                  <button className="flex-1 bg-[#1d1d1f] hover:bg-black px-6 py-3 rounded-full font-semibold text-white transition-colors">
                    Virtual Tour
                  </button>
                  <button className="flex-1 bg-[#f5f5f7] hover:bg-black/10 border border-black/5 px-6 py-3 rounded-full font-semibold text-[#1d1d1f] transition-colors">
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
