import React, { useState } from 'react'

export const Main_building = () => {
  // State to filter between Major Offices and Classrooms (Optional utility for clean UX)
  const [activeTab, setActiveTab] = useState('all')

  // 10 Major Offices Data
  const majorOffices = [
    { id: 'm1', name: 'Main Building', category: 'The Main Building serves as the center of campus operations, housing classrooms, offices, and essential student services. It is where most academic and administrative activities take place.', img: '/images/rooms/pres_office.png' },
    { id: 'm2', name: 'Registrar Office', category: 'The Registrars Office manages student records, enrollment documentation, grades, transcripts, and other academic records services.', img: '/images/rooms/registrar.png' },
    { id: 'm3', name: 'Cashier', category: 'The Cashiers Office handles tuition payments, fees, and other financial transactions in a secure and efficient manner.', img: '/images/rooms/cashier.png' },
    { id: 'm4', name: 'Guidance Office', category: 'The Guidance Office provides counseling services, personal support, career guidance, and programs that promote student well-being.', img: '/images/rooms/faculty.png' },
    { id: 'm5', name: 'Bookstore', category: 'The Bookstore offers school supplies, learning materials, uniforms, and other essential items needed by students throughout the academic year.', img: '/images/rooms/it_office.png' },
    { id: 'm6', name: 'Program Heads Offices', category: 'The Program Heads Offices serve as centers for academic leadership, where students can seek guidance regarding curriculum, policies, and program-related concerns.', img: '/images/rooms/vpaa.png' },
    { id: 'm7', name: 'Prayer Room', category: 'The Prayer Room is a peaceful sanctuary for prayer, reflection, and spiritual growth, offering students and staff a quiet place for contemplation and devotion.', img: '/images/rooms/ssc_office.png' },
    { id: 'm8', name: 'Campus Canteens', category: 'The campus canteens provide affordable meals and refreshments, while nearby benches offer comfortable spaces for dining, studying, and socializing.', img: '/images/rooms/library.png' },
    { id: 'm9', name: 'Benches and Waiting Areas', category: 'Located throughout the campus, these spaces provide students and visitors with convenient areas for relaxation, study, and interaction between classes.', img: '/images/rooms/guidance.png' },
    { id: 'm10', name: 'Clinic / Medical Office', category: 'The Clinic provides basic healthcare, first aid, and medical assistance to students, faculty, and staff, promoting wellness and supporting the campus community s well-being.', img: '/images/rooms/clinic.png' },
  ]

  // 20 Standard Classrooms / Lab Rooms Data
  const classrooms = [
    { id: 'c1', name: 'Lab 1', category: 'First Floor', img: '/images/rooms/r101.png' },
    { id: 'c2', name: 'lab 2', category: 'First Floor', img: '/images/rooms/r102.png' },
    { id: 'c3', name: 'lab 3', category: 'First Floor', img: '/images/rooms/r103.png' },
    { id: 'c4', name: 'Audio-Visual-Room(AVR)', category: 'First Floor', img: '/images/rooms/r104.png' },
    { id: 'c5', name: 'Multi-Purpose hall(MP Hall) ', category: 'First Floor', img: '/images/rooms/r105.png' },
    { id: 'c6', name: 'Speach Laboratory ', category: 'Second Floor', img: '/images/rooms/r201.png' },
    { id: 'c7', name: 'Elementary Faculty Room ', category: 'Second Floor', img: '/images/rooms/r202.png' },
    { id: 'c8', name: 'Senior High School Faculty', category: 'First Floor', img: '/images/rooms/r103.png' },
    { id: 'c9', name: 'IT Faculty Room', category: 'Second Floor', img: '/images/rooms/r104.png' },
    { id: 'c10', name: 'Multi-Purpose hall(MP Hall) ', category: 'Third Floor', img: '/images/rooms/r105.png' },
    { id: 'c11', name: 'Speach Laboratory ', category: 'Second Floor', img: '/images/rooms/r201.png' },
    { id: 'c12', name: 'Elementary Faculty Room ', category: 'Second Floor', img: '/images/rooms/r202.png' },
  ]

  return (
    <div className="w-full min-h-screen text-slate-100 p-4 sm:p-6 md:p-8 lg:p-12">
      
      {/* Top Breadcrumb Navigation Header */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-6 gap-4">
        <div>
          <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase">Main Campus Building</span>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">ROOM DIRECTORY & MAPS</h1>
        </div>
        
        {/* Simple Filter Tabs for easier browsing */}
        <div className="flex bg-white/5 border border-white/10 p-1 rounded-xl w-fit text-xs font-semibold">
          <button onClick={() => setActiveTab('all')} className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'all' ? 'bg-white text-emerald-950 font-bold' : 'text-slate-300 hover:text-white'}`}>All Areas</button>
          <button onClick={() => setActiveTab('major')} className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'major' ? 'bg-white text-emerald-950 font-bold' : 'text-slate-300 hover:text-white'}`}>Major Offices</button>
          <button onClick={() => setActiveTab('classrooms')} className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'classrooms' ? 'bg-white text-emerald-950 font-bold' : 'text-slate-300 hover:text-white'}`}>Laboratories</button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* ================= NEW SECTION: MAIN CAMPUS BLUEPRINT (PORTRAIT) ================= */}
        {activeTab === 'all' && (
          <div className="w-full flex flex-col items-center">
            <div className="w-full max-w-md bg-white/[0.02] border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-2 mb-3 px-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <h2 className="text-xs font-extrabold tracking-widest text-emerald-300 uppercase">
                  Main Campus Blueprint Structure
                </h2>
              </div>
              
              {/* Portrait Structural Frame Container */}
              <div className="aspect-[3/4] w-full bg-neutral-900/80 rounded-xl relative overflow-hidden border border-white/5 flex items-center justify-center text-slate-500 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px]">
                <img 
                  src="/blueprint main.jpg" 
                  alt="Main Campus Structural Blueprint" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback Screen Layout */}
                <div className="hidden absolute inset-0 flex-col items-center justify-center gap-3 text-xs font-semibold px-6 text-center">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10 text-emerald-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 opacity-80">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-slate-300 tracking-wide">Portrait Layout Active</span>
                  <p className="text-[10px] text-slate-500 font-medium max-w-xs leading-relaxed">
                    Place your portrait blueprint asset file inside <br /> 
                    <code className="text-emerald-300/80 font-mono bg-neutral-950/40 px-1 py-0.5 rounded">public/images/blueprints/main_campus_portrait.png</code>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= SECTION 1: MAJOR OFFICES ================= */}
        {(activeTab === 'all' || activeTab === 'major') && (
          <div>
            <h2 className="text-lg font-bold tracking-wide text-emerald-300 uppercase mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Major Offices
            </h2>
            
            {/* Highly Responsive Grid: 1 column on mobile, 2 on tablet, 3 on desktop, 4 on large screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {majorOffices.map((office) => (
                <div key={office.id} className="group bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden hover:border-emerald-400/30 transition-all duration-300 shadow-lg flex flex-col">
                  {/* Space for the PNG Image */}
                  <div className="aspect-video w-full bg-neutral-900/60 relative overflow-hidden flex items-center justify-center text-slate-500 border-b border-white/5">
                    <img 
                      src={office.img} 
                      alt={office.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden absolute inset-0 flex-col items-center justify-center gap-2 text-xs font-medium bg-white/5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 opacity-40">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3A1.5 1.5 0 001.5 6v12.75a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                      <span>[ Room Map PNG Image ]</span>
                    </div>
                  </div>
                  {/* Label Layout */}
                  <div className="p-4 flex-1 flex flex-col justify-between bg-gradient-to-b from-transparent to-neutral-900/20">
                    <h3 className="font-bold text-white tracking-wide text-base leading-snug group-hover:text-emerald-300 transition-colors">{office.name}</h3>
                    <span className="text-xs text-slate-400 font-medium mt-2 block">{office.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= SECTION 2: 20 CLASSROOMS ================= */}
        {(activeTab === 'all' || activeTab === 'classrooms') && (
          <div>
            <h2 className="text-lg font-bold tracking-wide text-emerald-300 uppercase mb-6 flex items-center gap-2 pt-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Laboratories
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {classrooms.map((room) => (
                <div key={room.id} className="group bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden hover:border-emerald-400/30 transition-all duration-300 shadow-lg flex flex-col">
                  {/* Space for the PNG Image */}
                  <div className="aspect-video w-full bg-neutral-900/60 relative overflow-hidden flex items-center justify-center text-slate-500 border-b border-white/5">
                    <img 
                      src={room.img} 
                      alt={room.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden absolute inset-0 flex-col items-center justify-center gap-2 text-xs font-medium bg-white/5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 opacity-40">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3A1.5 1.5 0 001.5 6v12.75a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                      <span>[ Room Map PNG Image ]</span>
                    </div>
                  </div>
                  {/* Label Layout */}
                  <div className="p-4 flex-1 flex flex-col justify-between bg-gradient-to-b from-transparent to-neutral-900/20">
                    <h3 className="font-bold text-white tracking-wide text-base leading-snug group-hover:text-emerald-300 transition-colors">{room.name}</h3>
                    <span className="text-xs text-slate-400 font-medium mt-2 block">{room.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}