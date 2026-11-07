import React, { useState, useEffect } from 'react';
import { kh } from '../../translate/Khmer';
import { en } from '../../translate/English';
import { School, MapPin, Phone, Mail } from 'lucide-react';

// ✅ Custom Hook សម្រាប់ Animation នៅពេល Scroll មកដល់
const useInView = (options) => {
  const [ref, setRef] = useState(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(ref); // លេង Animation តែម្តងគត់
      }
    }, options);

    observer.observe(ref);
    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, options]);

  return [setRef, inView];
};

// ✅ ពពួក Icon ផ្លូវការ
const FacebookIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#1877F2" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TelegramIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#26A5E4" aria-hidden="true">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const YoutubeIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#FF0000" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const Footer = ({ lang, setActiveTab }) => {
  const t = (lang === 'EN') ? en : kh;

  // ✅ ហៅ Custom Hook មកប្រើ
  const [footerRef, isInView] = useInView({ threshold: 0.1 });

  return (
    <footer 
      ref={footerRef} 
      className={`relative bg-blue-950 text-blue-100 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 border-t border-blue-900/60 overflow-hidden ${lang === 'KH' ? 'font-khmer' : 'font-sans'}`}
    >
      {/* ✨ CSS Keyframes សម្រាប់ចលនារលករបស់ Logo */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ប្រើ transition តែមួយ ដើម្បីឱ្យវាលេចឡើងព្រមៗគ្នាទាំងអស់ */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 pb-10 sm:pb-16 border-b border-blue-900/60 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* ជួរទី១៖ ព័ត៌មានសាលា */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-3">
              {/* Logo មានចលនារលក */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white p-1 shadow-lg shadow-black/20 flex items-center justify-center shrink-0 border border-white/20 animate-float">
                <img
                  src="/Logo.png"
                  alt={t?.footerSchoolName || "School Logo"}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-primary text-white hidden items-center justify-center rounded-xl">
                  <School className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">{t?.footerSchoolName}</h3>
                <p className="text-xs text-blue-300/80 mt-0.5">{t?.footerSchoolSub}</p>
              </div>
            </div>
            <p className="text-blue-200/80 text-xs sm:text-sm leading-relaxed text-justify">
              {t?.footerDescription}
            </p>
            
            {/* Social Icons (ចលនាដូចគ្នា) */}
            <div className="flex space-x-3 pt-1 sm:pt-2">
              <a href="#facebook" aria-label="Facebook" className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center transition-all duration-300 group hover:-translate-y-1 hover:shadow-md">
                <FacebookIcon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
              <a href="#telegram" aria-label="Telegram" className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center transition-all duration-300 group hover:-translate-y-1 hover:shadow-md">
                <TelegramIcon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
              <a href="#youtube" aria-label="YouTube" className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center transition-all duration-300 group hover:-translate-y-1 hover:shadow-md">
                <YoutubeIcon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* ជួរទី២៖ តំណភ្ជាប់រហ័ស */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white mb-4 sm:mb-6 uppercase tracking-widest">{t?.footerQuickLinksTitle}</h4>
            <ul className="space-y-2.5 sm:space-y-3.5 text-xs sm:text-sm">
              {[
                { label: t?.footerHome, tab: 'home' },
                { label: t?.footerAbout, tab: 'about' },
                { label: t?.footerAcademics, tab: 'academics' },
                { label: t?.footerAdmissions, tab: 'admissions' },
                { label: t?.footerNews, tab: 'news' }
              ].map((item, idx) => (
                <li key={idx}>
                  <button onClick={() => { setActiveTab(item.tab); window.scrollTo(0, 0); }} className="group flex items-center text-blue-200/80 hover:text-white transition-all duration-300">
                    <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ជួរទី៣៖ កម្រិតសិក្សា */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white mb-4 sm:mb-6 uppercase tracking-widest">{t?.footerAcademicsTitle}</h4>
            <ul className="space-y-2.5 sm:space-y-3.5 text-xs sm:text-sm">
              {[t?.footerLevel1, t?.footerLevel2, t?.footerLevel3, t?.footerLevel4].map((level, idx) => (
                <li key={idx}>
                  <span onClick={() => { setActiveTab('academics'); window.scrollTo(0, 0); }} className="group flex items-center text-blue-200/80 hover:text-white transition-all duration-300 cursor-pointer">
                    <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{level}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ជួរទី៤៖ ព័ត៌មានទំនាក់ទំនង */}
          <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
            <h4 className="text-xs sm:text-sm font-bold text-white mb-4 sm:mb-6 uppercase tracking-widest">{t?.footerContactTitle}</h4>
            
            {/* ទីតាំង (MapPin) */}
            <div className="flex items-start space-x-3 text-blue-200/80 group">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                <MapPin className="w-5 h-5 text-blue-500 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <span className="mt-2.5 leading-relaxed group-hover:text-white transition-colors">{t?.footerAddress}</span>
            </div>

            {/* ទូរស័ព្ទ (Phone) */}
            <div className="flex items-center space-x-3 text-blue-200/80 group">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                <Phone className="w-5 h-5 text-emerald-500 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <span className="group-hover:text-white transition-colors">{t?.footerPhone}</span>
            </div>

            {/* អ៊ីមែល (Mail) */}
            <div className="flex items-center space-x-3 text-blue-200/80 group">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                <Mail className="w-5 h-5 text-orange-500 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <span className="truncate group-hover:text-white transition-colors">{t?.footerEmail}</span>
            </div>
            
          </div>

        </div>

        {/* ផ្នែករក្សាសិទ្ធិបាតក្រោមបំផុត */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-blue-300/60 space-y-3 sm:space-y-0 text-center sm:text-left">
          <p>{t?.footerCopyright}</p>
          <div className="flex space-x-5 sm:space-x-6">
            <a href="#privacy" className="hover:text-primary hover:underline underline-offset-4 transition-all duration-300">{t?.footerPrivacy}</a>
            <a href="#terms" className="hover:text-primary hover:underline underline-offset-4 transition-all duration-300">{t?.footerTerms}</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

Footer.defaultProps = {
  setActiveTab: () => {},
};

export default Footer;