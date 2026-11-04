import React from 'react';

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

const PartnerMarquee = ({ lang = 'KH' }) => {
  return (
    <section className="w-full bg-[#f8fafc] dark:bg-gray-900/95 py-9 border-t border-b border-slate-200 dark:border-gray-800 overflow-hidden relative transition-colors duration-300 font-khmer">
      
      {/* ស្រមោលរលាយសងខាង (Fade Effect) */}
      <div className="absolute top-0 left-0 w-16 sm:w-28 h-full bg-gradient-to-r from-[#f8fafc] dark:from-gray-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-16 sm:w-28 h-full bg-gradient-to-l from-[#f8fafc] dark:from-gray-900 to-transparent z-10 pointer-events-none" />

      {/* ចំណងជើងផ្នែក */}
      <div className="text-center mb-6 px-4">
        <span className="inline-block text-xs uppercase tracking-widest font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800/80 px-3.5 py-1.5 rounded-full border border-gray-200 dark:border-gray-700">
          {lang === 'KH' ? 'ដៃគូសហការ និងស្ថាប័នអប់រំ' : 'Our Educational Partners & Collaborations'}
        </span>
      </div>

      {/* ប្រអប់ដែលមាន Animation រត់ស្វ័យប្រវត្តិ (Auto Marquee Loop) */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] cursor-pointer select-none">
        {[1, 2].map((groupIndex) => (
          <div key={`group-${groupIndex}`} className="flex items-center gap-6 sm:gap-8 px-3 sm:px-4 shrink-0">
            {partnerLogos.map((logo, index) => (
              <div
                key={`logo-${groupIndex}-${index}`}
                className="flex-shrink-0 flex items-center justify-center px-4 py-2.5 rounded-2xl bg-white dark:bg-gray-800 border border-slate-200/80 dark:border-gray-700/80 shadow-xs hover:shadow-md hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 group"
                title={logo.name}
              >
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="h-9 sm:h-11 w-auto max-w-[170px] object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    // បើខកខាន មិនបាច់បង្ហាញរូបបែក
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextSibling) {
                      e.currentTarget.nextSibling.style.display = 'inline-flex';
                    }
                  }}
                />
                <div className="hidden items-center justify-center text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-200 whitespace-nowrap">
                  🏛️ {logo.name}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnerMarquee;
