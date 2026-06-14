import { useState } from 'react';
import { Main_building } from './components/Main_building';
import { Anex_building } from './components/Anex_building';
import './App.css';

const coreOfficers = [
  { name: "Rolando E. Jacalan", role: "President", img: "/press.png" },
  { name: "Noel Tacum", role: "Vice President", img: "/vp.png" },
  { name: "Jia B. Rugay", role: "Secretary", img: "/sec.png" },
  { name: "Rowena C. Margate", role: "Treasurer", img: "/tres.png" },
  { name: "Mi Flearch C. Baguio", role: "Auditor", img: "/aud.png" },
  { name: "Mary Jane C. Mata", role: "P.I.O.", img: "/pio.png" },
];

const senators = [
  { name: "Edward B. Gaddi", role: "Senate President", img: "/7.png", isSenateHead: true },
  { name: "Chiezel Joy Galgao", role: "Senator", img: "/8.png" },
  { name: "Mariane Nicole A. Visto", role: "Senator", img: "/9.png" },
  { name: "Michael Andrew Surat", role: "Senator", img: "/10.png" },
  { name: "Christian B. Sombrio", role: "Senator", img: "/11.png" },
  { name: "Kate Chelou S. Bautista", role: "Senator", img: "/12.png" },
  { name: "Kianen Tutor", role: "Senator", img: "/13.png" },
  { name: "Kent Daryl Galario", role: "Senator", img: "/14.png" },
  { name: "Jude Rowell Quojial", role: "Senator", img: "/15.png" },
  { name: "Vernal Billy Joe E. Moninio", role: "Senator", img: "/18.png" },
  { name: "Thiza Kim E. Signar", role: "Senator", img: "/16.png" },
  { name: "Marchine Angga ", role: "Senator", img: "/17.png" },
];

function App() {
  const [currentPage, setCurrentPage] = useState('welcome');
  const [showRoster, setShowRoster] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  const guideItems = [
    { 
      label: 'P', 
      title: 'Preamble', 
      desc: 'We, the students of Gingoog City Colleges, Inc., with the help of Almighty God, believing in the need for a better organized student government and in the development of the youth as future leaders of the nation, do hereby promulgate and adopt this Revised Constitution and By-Laws of the Supreme Student Council to advance, implement, and maintain our goals and aspirations, embody the principles of freedom, equality, justice, and democracy, and promote the welfare of all students and the academic standards of our Alma Mater.', 
      border: 'hover:border-amber-500/30 text-amber-400 bg-amber-400/10' 
    },
    { 
      label: 'M', 
      title: 'Mission', 
      desc: 'To serve the student body through responsible leadership, active participation, meaningful initiatives, and collaboration with the administration, guided by the values of Humility, Accountability, Integrity, and Loyalty.', 
      border: 'hover:border-emerald-500/30 text-emerald-400 bg-emerald-400/10' 
    },
    { 
      label: 'V', 
      title: 'Vision', 
      desc: 'To be a responsible, service-oriented, and student-centered organization that promotes student participation, leadership development, and unity while supporting the vision and mission of Gingoog City Colleges, Inc.', 
      border: 'hover:border-blue-500/30 text-blue-400 bg-blue-400/10' 
    },
    { 
      label: 'O', 
      title: 'Objectives', 
      desc: `1. To represent the interests, concerns, and aspirations of the students.\n2. To promote student welfare and development.\n3. To strengthen unity and cooperation among students and student organizations.\n4. To develop responsible and effective student leaders.\n5. To support the programs, policies, and activities of the institution.\n6. To encourage active participation in academic, cultural, social, and community activities.\n7. To uphold the core values of Humility, Accountability, Integrity, and Loyalty.`, 
      border: 'hover:border-purple-500/30 text-purple-400 bg-purple-400/10' 
    }
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#004a26] text-slate-200 font-sans antialiased overflow-x-hidden flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-12 select-none">
      
      {/* Background Decorative Mesh */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full bg-emerald-400/10 blur-[120px] pointer-events-none"></div>

      {/* Global Header */}
      <header className="relative z-20 w-full max-w-7xl mx-auto flex flex-row items-center justify-between border-b border-white/10 pb-4 mb-6 gap-2 sm:gap-4 flex-nowrap">
        <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">
          <img src="/GCC_LOGO.png" alt="GCC Logo" className="w-8 h-8 sm:w-12 sm:h-12 object-contain rounded-full bg-white/5 p-1 border border-white/20 shadow-inner flex-shrink-0" />
          <div className="h-5 sm:h-6 w-[1px] bg-white/20 flex-shrink-0"></div>
          <img src="/SSC_LOGO.png" alt="SSC Logo" className="w-8 h-8 sm:w-12 sm:h-12 object-contain rounded-full bg-white/5 p-1 border border-white/20 shadow-inner flex-shrink-0" />
          <div className="h-5 sm:h-6 w-[1px] bg-white/20 flex-shrink-0"></div>  
          <div className="ml-0.5 min-w-0">
            <h2 className="text-[9px] sm:text-xs font-black tracking-wider sm:tracking-widest text-emerald-400 uppercase leading-tight truncate">
              Supreme Student Council
            </h2>
            <p className="text-[8px] sm:text-[10px] text-slate-400 font-medium tracking-wide sm:tracking-wider mt-0.5 leading-none truncate">
              Gingoog City Colleges
            </p>
          </div>
        </div>

        {currentPage === 'welcome' && (
          <button 
            onClick={() => setShowRoster(true)}
            className="text-[9px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all flex-shrink-0 whitespace-nowrap"
          >
            Council Officials
          </button>
        )}
      </header>

      {/* Main Content Render Area */}
      <main className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex items-center justify-center my-auto">
        
        {/* ================= PAGE 1: WELCOME SCREEN ================= */}
        {currentPage === 'welcome' && (
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Hero Block */}
            <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left items-center lg:items-start space-y-6 py-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-emerald-300 bg-emerald-400/10 border border-emerald-400/20 uppercase">
                Interactive Directory Map
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none text-balance">
                DISCOVER YOUR <br />
                <span className="bg-gradient-to-r from-white via-slate-200 to-emerald-300 bg-clip-text text-transparent">CAMPUS WAY</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl font-medium leading-relaxed text-pretty">
                View floor plans, locate specific rooms, trace pathways, and find campus event grounds ease.
              </p>
              <button 
                onClick={() => setCurrentPage('select-building')}
                className="group w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-[#004a26] font-bold text-sm shadow-xl hover:bg-emerald-50 active:scale-[0.99] transition-all tracking-wide flex items-center justify-center gap-2"
              >
                <span>Explore Campus Map</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6m0 0l-6 6m6-6H3" /></svg>
              </button>
            </div>

            {/* Right Guide Info Block */}
            <div className="lg:col-span-7 w-full min-h-[340px] flex items-center">
              {activeCard === null ? (
                /* Grid Grid Selection Mode */
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full transition-all duration-300 animate-fade-in">
                  {guideItems.map((item, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setActiveCard(idx)}
                      className={`p-5 rounded-xl bg-white/[0.02] border border-white/5 ${item.border.split(' ')[0]} hover:bg-white/[0.04] transition-all duration-300 text-left flex flex-col justify-between group active:scale-[0.98] min-h-[160px]`}
                    >
                      <div className="w-full">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2.5">
                            <span className={`text-xs font-extrabold w-6 h-6 rounded flex items-center justify-center ${item.border.split(' ').slice(1).join(' ')}`}>
                              {item.label}
                            </span>
                            <h3 className="text-xs font-bold uppercase tracking-wider text-white">{item.title}</h3>
                          </div>
                          <span className="text-[10px] uppercase font-bold text-emerald-400/50 group-hover:text-emerald-400 transition-colors">View Details &rarr;</span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed font-medium line-clamp-3">
                          {item.desc}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                /* Focused Single Card View Mode */
                <div className="w-full p-6 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-2xl transition-all duration-300 animate-fade-in flex flex-col justify-between min-h-[340px]">
                  <div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                      <div className="flex items-center gap-2.5">
                        <span className={`text-xs font-extrabold w-6 h-6 rounded flex items-center justify-center ${guideItems[activeCard].border.split(' ').slice(1).join(' ')}`}>
                          {guideItems[activeCard].label}
                        </span>
                        <h3 className="text-sm font-black uppercase tracking-wider text-white">
                          {guideItems[activeCard].title}
                        </h3>
                      </div>
                      <button 
                        onClick={() => setActiveCard(null)}
                        className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 transition-all flex items-center gap-1"
                      >
                        &larr; Back
                      </button>
                    </div>
                    <div className="max-h-[220px] overflow-y-auto pr-2 custom-scrollbar">
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium whitespace-pre-line">
                        {guideItems[activeCard].desc}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        )}

        {/* ================= PAGE 2: BUILDING SELECTION SCREEN ================= */}
        {currentPage === 'select-building' && (
          <div className="w-full max-w-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-2xl p-6 sm:p-10 shadow-2xl flex flex-col items-center">
            <button onClick={() => setCurrentPage('welcome')} className="self-start text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
              <span>Main Menu</span>
            </button>

            <div className="text-center space-y-2 mb-8">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase">Select Campus Structure</h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">Pick a destination block to map custom room networks, active halls, and floor wings.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {/* Main Building Card */}
              <button 
                onClick={() => setCurrentPage('main-building')}
                className="group p-6 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/30 hover:bg-white/[0.08] transition-all duration-300 text-left flex flex-col justify-between h-36 active:scale-[0.99] shadow-lg"
              >
                <div className="bg-emerald-500/10 text-emerald-400 p-2.5 rounded-xl w-fit group-hover:bg-emerald-500 group-hover:text-neutral-950 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A4.86 4.86 0 0012 8c-2.55 0-4.63 1.677-4.5 3.997V21M3 21h18" /></svg>
                </div>
                <div>
                  <span className="block font-bold text-white text-base tracking-wide">Main Corporate Building</span>
                  <span className="block text-[11px] text-slate-400 font-medium mt-1">Admin offices, Laboratories & Core Rooms</span>
                </div>
              </button>

              {/* Annex Building Card */}
              <button 
                onClick={() => setCurrentPage('annex-building')} 
                className="group p-6 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/30 hover:bg-white/[0.08] transition-all duration-300 text-left flex flex-col justify-between h-36 active:scale-[0.99] shadow-lg"
              >
                <div className="bg-emerald-500/10 text-emerald-400 p-2.5 rounded-xl w-fit group-hover:bg-emerald-500 group-hover:text-neutral-950 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/xl" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>
                </div>
                <div>
                  <span className="block font-bold text-white text-base tracking-wide">Annex Complex</span>
                  <span className="block text-[11px] text-slate-400 font-medium mt-1">Extended Classrooms</span>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* ================= PAGE 3 & 4: COMPONENT DIRECTORIES ================= */}
        {(currentPage === 'main-building' || currentPage === 'annex-building') && (
          <div className="w-full flex flex-col items-center animate-fade-in">
            <button 
              onClick={() => setCurrentPage('select-building')} 
              className="mb-4 text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider self-start bg-white/5 px-4 py-2.5 rounded-xl border border-white/10 backdrop-blur-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
              <span>Structure Index</span>
            </button>
            
            <div className="w-full h-[65vh] md:h-[70vh] overflow-y-auto rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-sm custom-scrollbar">
              {currentPage === 'main-building' ? <Main_building /> : <Anex_building />}
            </div>
          </div>
        )}

      </main>

      {/* Footer Branding Area */}
      <footer className="relative z-20 w-full max-w-7xl mx-auto border-t border-white/10 pt-4 mt-6 text-center lg:flex lg:justify-between lg:items-center">
        <p className="text-[11px] text-slate-400 font-medium tracking-wide">
          &copy; 2026 Gingoog City Colleges &bull; Supreme Student Council
        </p>
        <p className="text-[10px] text-emerald-400/70 mt-1 lg:mt-0 font-semibold tracking-widest uppercase">
          2026-2027
        </p>
      </footer>

      {/* ================= MODAL/OVERLAY PANEL: ROSTER OFFICIALS ================= */}
      {showRoster && (
        <div className="fixed inset-0 z-50 flex justify-end bg-neutral-950/60 backdrop-blur-md transition-all">
          <div className="w-full max-w-xl bg-[#00381c] h-full border-l border-white/10 p-6 sm:p-8 overflow-y-auto custom-scrollbar flex flex-col justify-between shadow-2xl">
            
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <h2 className="text-sm font-black uppercase tracking-widest text-emerald-300">SSC Council Directory</h2>
                <button 
                  onClick={() => setShowRoster(false)}
                  className="p-1 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              {/* Roster Layout - Executive Board */}
              <section className="space-y-6">
                <h3 className="text-[10px] font-extrabold tracking-widest uppercase text-center text-slate-400">Executive Board</h3>
                
                {/* President */}
                <div className="flex flex-col items-center">
                  <div className="w-36 h-36 rounded-full border-2 border-emerald-400 bg-white/5 overflow-hidden shadow-md">
                    <img src={coreOfficers[0]?.img} alt={coreOfficers[0]?.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-sm font-bold text-white mt-2">{coreOfficers[0]?.name}</h4>
                  <p className="text-xs text-emerald-400 font-medium">{coreOfficers[0]?.role}</p>
                </div>

                {/* Remaining Officers */}
                <div className="flex flex-wrap justify-center gap-4">
                  {coreOfficers.slice(1).map((officer, i) => (
                    <div key={i} className="flex flex-col items-center bg-white/[0.02] border border-white/5 p-3 rounded-xl text-center shadow-sm hover:border-white/10 transition-colors w-[calc(50%-8px)] sm:w-[calc(33.333%-12px)] md:w-[150px] flex-shrink-0">
                      <div className="w-24 h-24 rounded-full border border-white/10 bg-white/5 overflow-hidden">
                        <img src={officer.img} alt={officer.name} className="w-full h-full object-cover" />
                      </div>
                      <h4 className="text-xs font-bold text-white mt-2.5 truncate w-full px-0.5">{officer.name}</h4>
                      <p className="text-[10px] text-emerald-400/90 font-medium mt-0.5">{officer.role}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Roster Layout - Senate */}
              <section className="space-y-4 mt-8 pt-6 border-t border-white/10">
                <h3 className="text-[10px] font-extrabold tracking-widest uppercase text-center text-slate-400">Student Senate</h3>
                
                {/* Senate Head */}
                <div className="flex flex-col items-center">
                  <div className="w-28 h-28 rounded-full border border-emerald-400/60 bg-white/5 overflow-hidden">
                    <img src={senators[0]?.img} alt={senators[0]?.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-xs font-bold text-white mt-2">{senators[0]?.name}</h4>
                  <p className="text-[10px] text-emerald-300 font-medium">{senators[0]?.role}</p>
                </div>

                {/* General Senators Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {senators.slice(1).map((senator, i) => (
                    <div key={i} className="flex flex-col items-center p-3 rounded-xl bg-white/[0.01] border border-white/5">
                      <div className="w-20 h-20 rounded-full border border-white/10 bg-white/5 overflow-hidden">
                        <img src={senator.img} alt={senator.name} className="w-full h-full object-cover" />
                      </div>
                      <h4 className="text-[10px] font-semibold text-white text-center mt-2 truncate w-full">{senator.name}</h4>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <button 
              onClick={() => setShowRoster(false)}
              className="mt-8 w-full py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-bold uppercase tracking-wider text-white transition-all"
            >
              back
            </button>
            
          </div>
        </div>
      )}

    </div>
  );
}

export default App;