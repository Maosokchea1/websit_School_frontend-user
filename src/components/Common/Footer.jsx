import React from 'react';
import { kh } from '../../translate/Khmer';
import { en } from '../../translate/English';
import { School, Send, MapPin, Phone, Mail } from 'lucide-react';

const FacebookIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13.5 22v-9h3l.45-3.5H13.5V7.26c0-1.01.28-1.7 1.73-1.7H17V2.44A23.9 23.9 0 0 0 14.39 2C11.8 2 10 3.58 10 6.48V9.5H7V13h3v9h3.5Z" />
  </svg>
);

const YoutubeIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z" />
  </svg>
);

const Footer = ({ lang, setActiveTab }) => {
  // កំណត់ទិន្នន័យភាសាផ្អែកលើ prop lang
  const t = (lang === 'EN') ? en : kh;

  return (
    <footer className={`bg-blue-950 text-white pt-16 pb-8 border-t border-blue-900 ${lang === 'KH' ? 'font-khmer' : 'font-sans'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ផ្នែកមាតិកាចម្បងរបស់ Footer (Grid Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-blue-900">
          
          {/* ជួរទី១៖ ព័ត៌មានសាលា */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-yellow-500 text-blue-950 p-2.5 rounded-xl flex items-center justify-center shadow-md">
                <School className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">{t?.footerSchoolName}</h3>
                <p className="text-xs text-gray-400">{t?.footerSchoolSub}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t?.footerDescription}
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="#facebook" aria-label="Facebook" className="w-9 h-9 bg-blue-900 hover:bg-blue-800 rounded-lg flex items-center justify-center transition shadow-sm">
                <FacebookIcon className="w-4 h-4 text-white" />
              </a>
              <a href="#telegram" aria-label="Telegram" className="w-9 h-9 bg-blue-900 hover:bg-blue-800 rounded-lg flex items-center justify-center transition shadow-sm">
                <Send className="w-4 h-4 text-white" />
              </a>
              <a href="#youtube" aria-label="YouTube" className="w-9 h-9 bg-blue-900 hover:bg-blue-800 rounded-lg flex items-center justify-center transition shadow-sm">
                <YoutubeIcon className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* ជួរទី២៖ តំណភ្ជាប់រហ័ស */}
          <div>
            <h4 className="text-base font-bold text-yellow-400 mb-4 uppercase tracking-wider">{t?.footerQuickLinksTitle}</h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><button onClick={() => { setActiveTab('home'); window.scrollTo(0, 0); }} className="hover:text-yellow-400 transition text-left">{t?.footerHome}</button></li>
              <li><button onClick={() => { setActiveTab('about'); window.scrollTo(0, 0); }} className="hover:text-yellow-400 transition text-left">{t?.footerAbout}</button></li>
              <li><button onClick={() => { setActiveTab('academics'); window.scrollTo(0, 0); }} className="hover:text-yellow-400 transition text-left">{t?.footerAcademics}</button></li>
              <li><button onClick={() => { setActiveTab('admissions'); window.scrollTo(0, 0); }} className="hover:text-yellow-400 transition text-left">{t?.footerAdmissions}</button></li>
              <li><button onClick={() => { setActiveTab('news'); window.scrollTo(0, 0); }} className="hover:text-yellow-400 transition text-left">{t?.footerNews}</button></li>
            </ul>
          </div>

          {/* ជួរទី៣៖ កម្រិតសិក្សា */}
          <div>
            <h4 className="text-base font-bold text-yellow-400 mb-4 uppercase tracking-wider">{t?.footerAcademicsTitle}</h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><span onClick={() => { setActiveTab('academics'); window.scrollTo(0, 0); }} className="hover:text-yellow-400 transition cursor-pointer">{t?.footerLevel1}</span></li>
              <li><span onClick={() => { setActiveTab('academics'); window.scrollTo(0, 0); }} className="hover:text-yellow-400 transition cursor-pointer">{t?.footerLevel2}</span></li>
              <li><span onClick={() => { setActiveTab('academics'); window.scrollTo(0, 0); }} className="hover:text-yellow-400 transition cursor-pointer">{t?.footerLevel3}</span></li>
              <li><span onClick={() => { setActiveTab('academics'); window.scrollTo(0, 0); }} className="hover:text-yellow-400 transition cursor-pointer">{t?.footerLevel4}</span></li>
            </ul>
          </div>

          {/* ជួរទី៤៖ ព័ត៌មានទំនាក់ទំនង */}
          <div className="space-y-3 text-sm">
            <h4 className="text-base font-bold text-yellow-400 mb-4 uppercase tracking-wider">{t?.footerContactTitle}</h4>
            <div className="flex items-start space-x-2.5 text-gray-300">
              <MapPin className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
              <span>{t?.footerAddress}</span>
            </div>
            <div className="flex items-center space-x-2.5 text-gray-300">
              <Phone className="w-4 h-4 text-yellow-400 flex-shrink-0" />
              <span>{t?.footerPhone}</span>
            </div>
            <div className="flex items-center space-x-2.5 text-gray-300">
              <Mail className="w-4 h-4 text-yellow-400 flex-shrink-0" />
              <span>{t?.footerEmail}</span>
            </div>
          </div>

        </div>

        {/* ផ្នែករក្សាសិទ្ធិបាតក្រោមបំផុត */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 space-y-4 sm:space-y-0">
          <p>{t?.footerCopyright}</p>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-white transition">{t?.footerPrivacy}</a>
            <a href="#terms" className="hover:text-white transition">{t?.footerTerms}</a>
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