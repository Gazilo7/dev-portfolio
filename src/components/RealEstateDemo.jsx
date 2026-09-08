import React, { useState } from 'react';
import { Building2, MapPin, Bed, Bath, MessageSquare, Filter } from 'lucide-react';

const propertiesList = [
  {
    id: 1,
    title: "Maitama Heights Executive Suite",
    location: "Maitama, Abuja",
    type: "Apartment",
    beds: 3,
    baths: 3,
    priceNGN: 185000000,
    priceUSD: 125000,
    tag: "Featured"
  },
  {
    id: 2,
    title: "Victoria Island Waterfront Villa",
    location: "Victoria Island, Lagos",
    type: "Villa",
    beds: 5,
    baths: 6,
    priceNGN: 450000000,
    priceUSD: 300000,
    tag: "Luxury"
  },
  {
    id: 3,
    title: "Lekki Phase 1 Commercial Hub",
    location: "Lekki, Lagos",
    type: "Commercial",
    beds: 0,
    baths: 4,
    priceNGN: 280000000,
    priceUSD: 185000,
    tag: "High ROI"
  },
  {
    id: 4,
    title: "Eko Atlantic City Sky Penthouse",
    location: "Eko Atlantic, Lagos",
    type: "Penthouse",
    beds: 4,
    baths: 5,
    priceNGN: 720000000,
    priceUSD: 480000,
    tag: "Prime"
  }
];

export default function RealEstateDemo() {
  const [currency, setCurrency] = useState("NGN");
  const [selectedType, setSelectedType] = useState("All");

  const filteredProperties = selectedType === "All"
    ? propertiesList
    : propertiesList.filter(p => p.type === selectedType);

  const handleWhatsAppBooking = (property) => {
    const priceText = currency === "NGN" 
      ? "₦" + property.priceNGN.toLocaleString() 
      : "$" + property.priceUSD.toLocaleString();
    const text = "Hello, I am interested in booking an inspection for *" + property.title + "* (" + priceText + ") located at " + property.location + ".";
    window.open("https://wa.me/?text=" + encodeURIComponent(text), "_blank");
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 max-w-5xl mx-auto my-4 text-white shadow-2xl font-sans">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <h3 className="text-xl font-bold font-mono text-amber-400 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-amber-400" /> PropTech Realty Portal
          </h3>
          <p className="text-xs text-slate-400 mt-1">Live PoC Demo — Multi-currency listings, instant WhatsApp lead conversion & asset portal</p>
        </div>

        {/* Currency Switcher */}
        <div className="bg-slate-950 p-1 rounded-lg border border-slate-800 flex items-center gap-1">
          <button
            onClick={() => setCurrency("NGN")}
            className={
              currency === "NGN" 
                ? "px-3 py-1 rounded text-xs font-mono transition-all bg-amber-500/20 text-amber-400 border border-amber-500/40 font-semibold" 
                : "px-3 py-1 rounded text-xs font-mono transition-all text-slate-400 hover:text-white"
            }
          >
            NGN (₦)
          </button>
          <button
            onClick={() => setCurrency("USD")}
            className={
              currency === "USD" 
                ? "px-3 py-1 rounded text-xs font-mono transition-all bg-amber-500/20 text-amber-400 border border-amber-500/40 font-semibold" 
                : "px-3 py-1 rounded text-xs font-mono transition-all text-slate-400 hover:text-white"
            }
          >
            USD ($)
          </button>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1">
          <Filter className="w-3.5 h-3.5" /> Type:
        </span>
        {["All", "Apartment", "Villa", "Commercial", "Penthouse"].map(type => (
          <button
          key={type}
            onClick={() => setSelectedType(type)}
            className={
              selectedType === type
                ? "px-3 py-1 rounded-lg text-xs font-mono transition-all bg-amber-500 text-slate-950 font-bold"
                : "px-3 py-1 rounded-lg text-xs font-mono transition-all bg-slate-950 text-slate-400 border border-slate-800 hover:text-white"
            }
          >
            {type}
          </button>
        ))}
      </div>

      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProperties.map(property => (
          <div 
            key={property.id}
            className="bg-slate-950 border border-slate-800 hover:border-amber-500/50 rounded-xl p-5 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  {property.tag}
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-400" /> {property.location}
                </span>
              </div>

              <h4 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                {property.title}
              </h4>

              {/* Specs */}
              <div className="flex items-center gap-4 my-4 text-xs font-mono text-slate-400 border-y border-slate-900 py-2">
                {property.beds > 0 && (
                  <span className="flex items-center gap-1.5">
                    <Bed className="w-3.5 h-3.5 text-slate-300" /> {property.beds} Beds
                  </span>
                )}
                <span className="flex items-center gap-1.5">
                  <Bath className="w-3.5 h-3.5 text-slate-300" /> {property.baths} Baths
                </span>
                <span className="ml-auto text-amber-400/80 font-semibold">{property.type}</span>
              </div>
            </div>

            {/* Price & Action */}
            <div className="flex items-center justify-between pt-2">
              <div>
                <p className="text-[10px] font-mono text-slate-500 uppercase">Listing Price</p>
                <p className="text-base font-bold font-mono text-amber-400">
                  {currency === "NGN" 
                    ? "₦" + property.priceNGN.toLocaleString() 
                    : "$" + property.priceUSD.toLocaleString()}
                </p>
              </div>

              <button
                onClick={() => handleWhatsAppBooking(property)}
                className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono text-xs font-bold py-2 px-3 rounded-lg transition-all shadow-lg shadow-amber-500/10"
              >
                <MessageSquare className="w-3.5 h-3.5" /> Schedule Tour
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}