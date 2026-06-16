import React from 'react';

export const Contact = () => {
  const contactLinks = [
    {
      platform: "SSC Official Facebook Page",
      handle: "Supreme Student Council - GCC",
      description: "For student concerns, announcements, constitutional inquiries, and direct student body support.",
      url: "https://www.facebook.com/GCCSSC/", // Replace with real URL
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
        </svg>
      ),
      borderColor: "hover:border-emerald-500/30 text-emerald-400 bg-emerald-400/10",
    },
    {
      platform: "Gingoog City Colleges, Inc.",
      handle: "Official Institutional Page",
      description: "For administrative concerns, enrollment details, registrar inquiries, and official school policies.",
      url: "https://www.facebook.com/GingoogCityCollegesInc/?locale=tl_PH", // Replace with real URL
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A4.86 4.86 0 0012 8c-2.55 0-4.63 1.677-4.5 3.997V21M3 21h18" />
        </svg>
      ),
      borderColor: "hover:border-blue-500/30 text-blue-400 bg-blue-400/10",
    },
    {
      platform: "SSC Multi-Media Sector",
      handle: "Media & Documentation Team",
      description: "For event coverage, publication requests, graphics inquiries, and portal layout designs.",
      url: "https://www.facebook.com/your-multimedia-page", // Replace with real URL
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
        </svg>
      ),
      borderColor: "hover:border-purple-500/30 text-purple-400 bg-purple-400/10",
    },
  ];

  return (
    <div className="w-full max-w-4xl px-4 py-2 sm:py-6 mx-auto animate-fade-in flex flex-col items-center">
      
      {/* Dynamic Header Section */}
      <div className="text-center space-y-2 mb-6 sm:mb-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider text-emerald-300 bg-emerald-400/10 border border-emerald-400/20 uppercase">
          Communication Channels
        </span>
        <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white uppercase">
          Get in Touch
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto px-2">
          Connect with our central divisions or institutional desk handlers through our online community platforms.
        </p>
      </div>

      {/* Grid Layout - 1 Column on Mobile, 3 Columns on Larger Screens */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {contactLinks.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-5 rounded-xl bg-white/[0.02] border border-white/5 ${item.borderColor.split(' ')[0]} hover:bg-white/[0.04] transition-all duration-300 text-left flex flex-col justify-between group active:scale-[0.98] min-h-[170px] sm:min-h-[190px] shadow-lg`}
          >
            <div className="w-full h-full flex flex-col justify-between">
              <div>
                {/* Platform Label & Icon Row */}
                <div className="flex items-center gap-2.5 mb-3">
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${item.borderColor.split(' ').slice(1).join(' ')}`}>
                    {item.icon}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-white truncate">
                      {item.platform}
                    </h3>
                    <p className="text-[10px] text-slate-400 truncate font-medium">
                      {item.handle}
                    </p>
                  </div>
                </div>
                
                {/* Description Text */}
                <p className="text-xs text-slate-300 leading-relaxed font-medium line-clamp-3 sm:line-clamp-4">
                  {item.description}
                </p>
              </div>

              {/* Action Prompt */}
              <span className="text-[10px] uppercase font-bold text-emerald-400/60 group-hover:text-emerald-400 transition-colors mt-4 flex items-center gap-1">
                <span>Visit Page</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6m0 0l-6 6m6-6H3" />
                </svg>
              </span>
            </div>
          </a>
        ))}
      </div>

    </div>
  );
};