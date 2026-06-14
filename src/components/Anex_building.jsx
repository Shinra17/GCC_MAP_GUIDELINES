import React, { useState } from 'react'

export const Anex_building = () => {
  // State to filter between Major Rooms and the 25 Slots
  const [activeTab, setActiveTab] = useState('all')

  // Major Rooms inside the Annex Building
  const majorRooms = [
    { id: 'am3', name: 'Anex', category: 'The Annex Building provides additional classrooms and facilities that support academic programs and student activities in a comfortable learning environment.', img: '/images/rooms/annex_cr.png' },
    { id: 'am1', name: 'Supreme Student Council (SSC) Extension Office', category: 'The Supreme Student Council Office serves as the center of student leadership, organizing activities, representing the student body, and promoting student engagement.', img: '/images/rooms/annex_ssc.png' },
    { id: 'am2', name: 'Annex Faculty Room', category: 'The Annex Faculty Room accommodates faculty members assigned to the Annex Building and serves as a space for academic preparation and student consultation.', img: '/images/rooms/annex_faculty.png' }
    
  ]

  // 25 Classroom / Laboratory Slots
  const annexClassrooms = [
    { id: 'ac1', name: 'Annex Room 101', category: 'First Floor', img: '/images/rooms/ax101.png' },
    { id: 'ac2', name: 'Annex Room 102', category: 'First Floor', img: '/images/rooms/ax102.png' },
    { id: 'ac3', name: 'Annex Room 103', category: 'First Floor', img: '/images/rooms/ax103.png' },
    { id: 'ac4', name: 'Annex Room 104', category: 'First Floor', img: '/images/rooms/ax104.png' },
    { id: 'ac5', name: 'Annex Room 105', category: 'First Floor', img: '/images/rooms/ax105.png' },
    { id: 'ac6', name: 'Annex Room 106', category: 'First Floor', img: '/images/rooms/ax106.png' },
    { id: 'ac7', name: 'Annex Room 107', category: 'First Floor', img: '/images/rooms/ax107.png' },
    { id: 'ac8', name: 'Annex Room 108', category: 'First Floor', img: '/images/rooms/ax108.png' }
  ]

  return (
    <div className="w-full min-h-screen text-slate-100 p-4 sm:p-6 md:p-8 lg:p-12">
      
      {/* Top Breadcrumb Navigation Header */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-6 gap-4">
        <div>
          <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase">Campus Extension Area</span>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">ANNEX BUILDING DIRECTORY</h1>
        </div>
        
        {/* Simple Filter Tabs */}
        <div className="flex bg-white/5 border border-white/10 p-1 rounded-xl w-fit text-xs font-semibold backdrop-blur-md">
          <button onClick={() => setActiveTab('all')} className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'all' ? 'bg-white text-emerald-950 font-bold' : 'text-slate-300 hover:text-white'}`}>All Areas</button>
          <button onClick={() => setActiveTab('major')} className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'major' ? 'bg-white text-emerald-950 font-bold' : 'text-slate-300 hover:text-white'}`}>Major Rooms</button>
          <button onClick={() => setActiveTab('classrooms')} className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'classrooms' ? 'bg-white text-emerald-950 font-bold' : 'text-slate-300 hover:text-white'}`}>Classrooms</button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* ================= SECTION 1: MAJOR ROOMS ================= */}
        {(activeTab === 'all' || activeTab === 'major') && (
          <div>
            <h2 className="text-lg font-bold tracking-wide text-emerald-300 uppercase mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Primary Facilities
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {majorRooms.map((room) => (
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

        {/* ================= SECTION 2: 25 SLOTS ================= */}
        {(activeTab === 'all' || activeTab === 'classrooms') && (
          <div>
            <h2 className="text-lg font-bold tracking-wide text-emerald-300 uppercase mb-6 flex items-center gap-2 pt-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Academic Classrooms 
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {annexClassrooms.map((slot) => (
                <div key={slot.id} className="group bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden hover:border-emerald-400/30 transition-all duration-300 shadow-lg flex flex-col">
                  {/* Space for the PNG Image */}
                  <div className="aspect-video w-full bg-neutral-900/60 relative overflow-hidden flex items-center justify-center text-slate-500 border-b border-white/5">
                    <img 
                      src={slot.img} 
                      alt={slot.name}
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
                    <h3 className="font-bold text-white tracking-wide text-base leading-snug group-hover:text-emerald-300 transition-colors">{slot.name}</h3>
                    <span className="text-xs text-slate-400 font-medium mt-2 block">{slot.category}</span>
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