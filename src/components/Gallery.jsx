import React, { useState } from 'react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  // State to handle full-screen image preview
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Events', 'Projects', 'Meetings', 'Culture'];

  const galleryItems = [
    {
      id: 1,
      title: "SSC Acquaintance Party 2026",
      category: "Events",
      date: "August 2026",
      imgSrc: "/",
    },
    {
      id: 2,
      title: "Campus Clean-Up Drive",
      category: "Projects",
      date: "September 2026",
      imgSrc: "/", 
    },
    {
      id: 3,
      title: "1st Regular Legislative Session",
      category: "Meetings",
      date: "July 2026",
      imgSrc: "/",
    },
    {
      id: 4,
      title: "Higaonon Cultural Day Exhibit",
      category: "Culture",
      date: "October 2026",
      imgSrc: "/",
    },
    {
      id: 5,
      title: "Intramural Games Opening",
      category: "Events",
      date: "November 2026",
      imgSrc: "/",
    },
    {
      id: 6,
      title: "Student Leadership Summit",
      category: "Projects",
      date: "December 2026",
      imgSrc: "/",
    },
  ];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="w-full max-w-5xl px-4 py-2 sm:py-6 mx-auto animate-fade-in flex flex-col items-center">
      
      {/* ================= COVER PHOTO SLOT ================= */}
      {/* FIXED: Paths synchronized to "/ssc-cover.png" so preview and static render match */}
      <div 
        onClick={() => setSelectedImage("/SSC COVER PHOTO.jpg")} 
        className="w-full relative rounded-2xl border border-white/10 bg-neutral-900 overflow-hidden shadow-xl aspect-[21/9] sm:aspect-[3/1] mb-6 sm:mb-8 group cursor-zoom-in"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 via-[#004a26]/10 to-emerald-900/20 z-10 pointer-events-none"></div>
        <img 
          src="/SSC COVER PHOTO.jpg" 
          alt="SSC Official Cover Photo" 
          className="w-full h-full object-cover relative z-0 opacity-100 group-hover:scale-[1.01] transition-transform duration-700 ease-out"
          onError={(e) => { 
            // Fallback back up to a stylized placeholder instead of hiding the whole image block
            e.currentTarget.src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop";
          }}
        />
        <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 z-20 flex items-center gap-2 bg-neutral-950/70 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-white/10">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
          <span className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-white">
            Official Cover Media
          </span>
        </div>
      </div>

      {/* Dynamic Header Titles */}
      <div className="text-center space-y-1 mb-6">
        <h2 className="text-xl sm:text-3xl font-black tracking-tight text-white uppercase">
          Council Archives
        </h2>
        <p className="text-[11px] sm:text-xs text-slate-400 max-w-md mx-auto">
          Visual documentation of student activities, official programs, and milestones across GCC.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-8 w-full max-w-md">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg transition-all border duration-200 ${
              activeFilter === cat
                ? 'bg-emerald-400 text-neutral-950 border-emerald-400 shadow-md font-extrabold'
                : 'bg-white/5 text-slate-400 border-white/5 hover:text-white hover:bg-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ================= INTERACTIVE PHOTO GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item.imgSrc)} 
            className="group relative rounded-xl bg-neutral-900 border border-white/5 overflow-hidden flex flex-col justify-between h-48 sm:h-56 transition-all duration-300 hover:border-emerald-500/30 shadow-md cursor-zoom-in"
          >
            <div className="w-full h-full relative overflow-hidden">
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-100 relative z-0"
                onError={(e) => { 
                  // If localized mock files inside public/gallery/ are missing, show a high-quality campus placeholder placeholder
                  e.currentTarget.src = ""; 
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent opacity-90 z-10"></div>
              <span className="absolute top-3 left-3 text-[9px] font-extrabold uppercase tracking-widest px-2 py-0.5 bg-neutral-950/80 border border-white/10 rounded text-emerald-400 z-20">
                {item.category}
              </span>
            </div>

            <div className="absolute bottom-0 inset-x-0 p-4 z-20">
              <span className="text-[9px] font-medium text-slate-400 block tracking-wide mb-0.5">
                {item.date}
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-white tracking-wide truncate group-hover:text-emerald-300 transition-colors">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12 text-slate-500 text-xs font-medium uppercase tracking-widest">
          No records captured in this gallery tab yet.
        </div>
      )}

      {/* ================= LIGHTBOX MODAL OVERLAY ================= */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950/90 backdrop-blur-lg p-4 animate-fade-in cursor-zoom-out"
          onClick={() => setSelectedImage(null)} 
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 z-[110] bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Large Image Container */}
          <div className="relative max-w-4xl max-h-[85vh] flex items-center justify-center">
            <img 
              src={selectedImage} 
              alt="Enlarged gallery view" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}

    </div>
  );
};

export default Gallery;