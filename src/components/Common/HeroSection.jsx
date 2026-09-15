import React from 'react';
import { kh } from '../../translate/Khmer';
import { en } from '../../translate/English';

const HeroSection = ({ lang }) => {
  const t = lang === 'KH' ? kh : en;

  return (
    <section className={`relative text-white overflow-hidden ${lang === 'KH' ? 'font-khmer' : 'font-sans'}`}>
      
      {/* ផ្ទៃខាងក្រោយទិដ្ឋភាពសាលា (Hero Background) */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105"
        style={{ 
          backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3qBLUK7gGnCRTWNYbOBaUbYZP-JXb3jVucY71Eh5_JhYjnBWhKoj2-XcA&s=10')` 
        }}
      >
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* ផ្នែកអត្ថបទខាងឆ្វេង (Text Content) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-blue-100 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md border border-blue-400/35">
              <svg className="w-4 h-4 text-yellow-300 animate-spin" style={{ animationDuration: '3s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              <span>{t?.heroBadge}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug lg:leading-tight">
              {t?.heroTitlePart1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400">{t?.heroTitleHighlight}</span> {t?.heroTitlePart2}
            </h1>
            
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t?.heroDescription}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <a 
                href="#admissions" 
                className="group relative bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-blue-950 font-bold px-8 py-4 rounded-xl shadow-xl shadow-yellow-500/10 transition-all duration-300 transform hover:-translate-y-0.5 text-center flex items-center justify-center space-x-2"
              >
                <span>{t?.heroBtnRegister}</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a 
                href="#about" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 text-center hover:border-white/40"
              >
                <span>{t?.heroBtnLearnMore}</span>
              </a>
            </div>
          </div>

          {/* ផ្នែករូបភាពខាងស្តាំ (បង្ហាញបែប Full Cover ពេញប្រអប់ ស្អាតដាច់គេដូចក្នុងគំរូ) */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative w-full h-[380px] rounded-2xl overflow-hidden shadow-2xl border border-white/15">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRdIYVkeyMVu-9Y5_a1AplTsGZxEJFLUHVxlYXitA7PSikGAHXUiy8bMc&s=10" 
                alt="School Campus" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient Overlay បន្ថែមសោភ័ណភាពឱ្យរូបភាពរលូនស៊ីគ្នា */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Quick Feature Badges ខាងក្រោមស្ទីលពណ៌ត្នោត */}
      <div className="bg-[#5c3a21] text-white border-t border-amber-900/50 shadow-2xl relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            
            {/* Feature 1 */}
            <div className="flex items-center justify-center md:justify-start space-x-4 p-3 rounded-2xl transition-colors hover:bg-white/5">
              <div className="bg-white/10 text-amber-300 p-3.5 rounded-full shadow-sm shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-white">{t?.feature1Title}</h4>
                <p className="text-sm text-amber-100/80">{t?.feature1Desc}</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center justify-center md:justify-start space-x-4 p-3 rounded-2xl transition-colors hover:bg-white/5 border-t md:border-t-0 md:border-l border-amber-900/40 pt-4 md:pt-0 md:pl-6">
              <div className="bg-white/10 text-amber-300 p-3.5 rounded-full shadow-sm shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-white">{t?.feature2Title}</h4>
                <p className="text-sm text-amber-100/80">{t?.feature2Desc}</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center justify-center md:justify-start space-x-4 p-3 rounded-2xl transition-colors hover:bg-white/5 border-t md:border-t-0 md:border-l border-amber-900/40 pt-4 md:pt-0 md:pl-6">
              <div className="bg-white/10 text-amber-300 p-3.5 rounded-full shadow-sm shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-white">{t?.feature3Title}</h4>
                <p className="text-sm text-amber-100/80">{t?.feature3Desc}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;