'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Heart, Share2, MapPin, Bed, Bath, Square, Mail, Home, ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';
import StandardNavbar from '../components/StandardNavbar';
import Footer from '../components/Footer';

type Property = {
  id: number;
  title: string;
  description: string | null;
  property_type: string;
  listing_type: string;
  status: string;
  price: string | number;
  city: string;
  locality: string | null;
  bedrooms: number | null;
  bathrooms: number | null;
  area_sqft: number | null;
  images: string[] | null;
  features: string[] | null;
  owner_name: string | null;
  owner_email: string | null;
};

const PropertyDetail = () => {
  const params = useParams();
  const id = params?.id as string;
  const router = useRouter();
  const [property, setProperty] = useState<Property | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    if (!id) return;
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`/api/properties/${id}`);
        if (res.status === 404) {
          if (!cancelled) setNotFound(true);
          return;
        }
        if (!res.ok) throw new Error('Failed to load');
        const data = await res.json();
        if (!cancelled) setProperty(data.property);
      } catch {
        if (!cancelled) setNotFound(true);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  if (notFound) {
    return (
      <div className="min-h-screen bg-[#f5f5f7]">
        <StandardNavbar />
        <div className="flex flex-col items-center justify-center pt-40 pb-24 px-4 text-center">
          <h1 className="text-2xl font-bold text-[#1d1d1f] mb-2">Listing not found</h1>
          <p className="text-[#6e6e73] mb-6">This property may have been removed or the link is incorrect.</p>
          <button
            onClick={() => router.push('/property-marketplace')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full font-semibold transition-colors"
          >
            Browse Properties
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-[#6e6e73]">Loading property details...</p>
        </div>
      </div>
    );
  }

  const images = property.images && property.images.length > 0 ? property.images : [];
  const features = property.features && property.features.length > 0 ? property.features : [];
  const priceNumber = Number(property.price);
  const formattedPrice = Number.isFinite(priceNumber)
    ? `₹${priceNumber.toLocaleString('en-IN')}`
    : property.price;

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen bg-white">
      <StandardNavbar />

      <div className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-28">
        <button
          onClick={() => router.back()}
          className="flex items-center space-x-2 text-[#6e6e73] hover:text-emerald-600 transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
      </div>

      <div className="container mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative mb-8">
              <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden bg-[#f5f5f7]">
                {images.length > 0 ? (
                  <>
                    <img
                      src={images[currentImageIndex]}
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />
                    {images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md rounded-full p-2 text-white hover:bg-white/30 transition-colors"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md rounded-full p-2 text-white hover:bg-white/30 transition-colors"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                          {currentImageIndex + 1} / {images.length}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-[#86868b]">
                    <ImageOff className="w-10 h-10 mb-2" />
                    <span className="text-sm">No photos yet</span>
                  </div>
                )}
              </div>

              {images.length > 1 && (
                <div className="flex space-x-2 mt-4 overflow-x-auto">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        index === currentImageIndex ? 'border-emerald-600' : 'border-black/10'
                      }`}
                    >
                      <img src={image} alt={`${property.title} ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 capitalize">
                        {property.listing_type}
                      </span>
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-black/5 text-[#6e6e73] capitalize">
                        {property.property_type.replace('_', ' ')}
                      </span>
                    </div>
                    <h1 className="text-3xl font-bold text-[#1d1d1f] mb-2">{property.title}</h1>
                    <div className="flex items-center text-[#6e6e73]">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{property.locality ? `${property.locality}, ` : ''}{property.city}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2 shrink-0">
                    <button
                      onClick={() => setIsFavorited(!isFavorited)}
                      className={`p-2 rounded-full transition-colors ${
                        isFavorited ? 'text-red-500 bg-red-50' : 'text-[#86868b] hover:text-red-500 hover:bg-red-50'
                      }`}
                    >
                      <Heart className={`w-6 h-6 ${isFavorited ? 'fill-current' : ''}`} />
                    </button>
                    <button className="p-2 rounded-full text-[#86868b] hover:text-[#1d1d1f] hover:bg-black/5 transition-colors">
                      <Share2 className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                <div className="text-3xl font-bold text-emerald-600 mb-4">{formattedPrice}</div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-6 border-t border-b border-black/10">
                <div className="min-w-0 text-center">
                  <Bed className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-[#1d1d1f]">{property.bedrooms ?? '—'}</div>
                  <div className="text-sm text-[#6e6e73]">Bedrooms</div>
                </div>
                <div className="min-w-0 text-center">
                  <Bath className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-[#1d1d1f]">{property.bathrooms ?? '—'}</div>
                  <div className="text-sm text-[#6e6e73]">Bathrooms</div>
                </div>
                <div className="min-w-0 text-center">
                  <Square className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-[#1d1d1f]">{property.area_sqft ?? '—'}</div>
                  <div className="text-sm text-[#6e6e73]">Sq ft</div>
                </div>
              </div>

              {property.description && (
                <div>
                  <h3 className="text-xl font-semibold text-[#1d1d1f] mb-4">Description</h3>
                  <p className="text-[#6e6e73] leading-relaxed">{property.description}</p>
                </div>
              )}

              {features.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-[#1d1d1f] mb-4">Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {features.map((feature, index) => (
                      <div key={index} className="min-w-0 flex items-center space-x-3">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full shrink-0"></div>
                        <span className="text-[#1d1d1f]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white border border-black/5 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-4">Contact Owner</h3>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Home className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-[#1d1d1f] truncate">{property.owner_name || 'Listed owner'}</h4>
                    <p className="text-sm text-[#6e6e73]">Property Owner</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {property.owner_email && (
                    <a
                      href={`mailto:${property.owner_email}?subject=${encodeURIComponent(`Inquiry: ${property.title}`)}`}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-full font-semibold transition-colors flex items-center justify-center"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Email Owner
                    </a>
                  )}
                  <a
                    href="/get-a-quote"
                    className="w-full bg-white border border-black/10 hover:bg-black/5 text-[#1d1d1f] py-3 rounded-full font-semibold transition-colors flex items-center justify-center"
                  >
                    Request a Quote
                  </a>
                </div>
              </div>

              <div className="bg-[#f5f5f7] rounded-2xl p-6">
                <h4 className="font-semibold text-[#1d1d1f] mb-2">Status</h4>
                <p className="text-sm text-[#6e6e73] capitalize">{property.status.replace('_', ' ')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
