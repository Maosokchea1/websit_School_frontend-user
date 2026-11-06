import React, { useState } from 'react';

// ដាក់ឈ្មោះ និង Link រូបភាព Logo ដៃគូសហការ
const partnerLogos = [
  { name: 'AmCam', src: '/logos/amcam.svg' },
  { name: 'CSC', src: '/logos/csc.svg' },
  { name: 'Southern Cross University', src: '/logos/southern-cross.svg' },
  { name: 'Kyung Hee University', src: '/logos/kyung-hee.svg' },
  { name: 'Konkuk University', src: '/logos/konkuk.svg' },
  { name: 'Daffodil University', src: '/logos/daffodil.svg' },
  { name: 'Mahachulalongkorn', src: '/logos/mahachula.svg' },
  { name: 'Asian College', src: '/logos/asian-college.svg' },
  { name: 'RUPP', src: '/logos/rupp.svg' },
];

// បង្កើត Component ដាច់ដោយឡែកសម្រាប់កាត Logo ដើម្បីគ្រប់គ្រង Error បានស្អាត
const LogoItem = ({ logo }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="flex-shrink-0 flex items-center justify-center px-3.5 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 border border-slate-200/80 dark:border-gray-700/80 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-0.5 hover:border-primary/40 dark:hover:border-primary/40 transition-all duration-300 group cursor-pointer min-w-[110px] sm:min-w-[140px] h-13 sm:h-16"
      title={logo.name}
    >
      {!imgError ? (
        <img
          src={logo.src}
          alt={logo.name}
          className="h-7 sm:h-9 md:h-10 w-auto max-w-[110px] sm:max-w-[150px] object-contain transition-transform duration-300 group-hover:scale-105"
          onError={() => setImgError(true)}
          loading="lazy"
        />
      ) : (
        // បើរូបភាព Error បង្ហាញជាអក្សរជំនួសវិញ
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold text-gray-600 dark:text-gray-300 whitespace-nowrap transition-transform duration-300 group-hover:scale-105">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          {logo.name}
        </div>
      )}
    </div>
  );
};

const PartnerMarquee = ({ lang = 'KH' }) => {
  return (
    <section className="w-full bg-[#f8fafc] dark:bg-gray-900 py-8 sm:py-12 border-t border-b border-slate-200 dark:border-gray-800 overflow-hidden relative transition-colors duration-300 font-khmer">
      
      {/* CSS Keyframes សម្រាប់ Animation រត់ */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-custom {
            animation: marquee 35s linear infinite;
          }
        `}
      </style>

      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }}>
      </div>

      {/* ស្រមោលរលាយសងខាង (Fade Effect) - បន្ថយទំហំលើ Mobile ដើម្បីកុំឱ្យបាំង Logo */}
      <div className="absolute top-0 left-0 w-10 sm:w-28 h-full bg-gradient-to-r from-[#f8fafc] dark:from-gray-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-10 sm:w-28 h-full bg-gradient-to-l from-[#f8fafc] dark:from-gray-900 to-transparent z-10 pointer-events-none" />

      {/* ចំណងជើងផ្នែក */}
      <div className="text-center mb-6 sm:mb-8 px-4 relative z-20">
        <span className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest font-bold text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          {lang === 'KH' ? 'ដៃគូសហការ និងស្ថាប័នអប់រំ' : 'Our Educational Partners'}
        </span>
      </div>

      {/* ប្រអប់ដែលមាន Animation រត់ស្វ័យប្រវត្តិ (Auto Marquee Loop) */}
      <div className="flex w-max animate-marquee-custom hover:[animation-play-state:paused] cursor-pointer select-none relative z-20">
        {[1, 2].map((groupIndex) => (
          <div 
            key={`group-${groupIndex}`} 
            className="flex items-center gap-3 sm:gap-6 px-2 sm:px-3 shrink-0"
            aria-hidden={groupIndex === 2 ? "true" : "false"}
          >
            {partnerLogos.map((logo, index) => (
              <LogoItem key={`logo-${groupIndex}-${index}`} logo={logo} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnerMarquee;
