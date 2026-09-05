import React from 'react';
import { kh } from '../../translate/Khmer';
import { en } from '../../translate/English';
import { School, MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = ({ lang }) => {
  // កំណត់ទិន្នន័យភាសាផ្អែកលើ prop lang
  const t = (lang === 'EN') ? en : kh;

  return (
    <section id="contact" className={`bg-white dark:bg-gray-900 text-gray-800 dark:text-white pt-20 pb-10 transition-colors duration-300 ${lang === 'KH' ? 'font-khmer' : 'font-sans'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ចំណងជើងផ្នែកទំនាក់ទំនង */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 dark:text-yellow-400 font-semibold uppercase tracking-wider text-sm bg-blue-50 dark:bg-gray-800 px-3 py-1 rounded-full border border-blue-200 dark:border-gray-700">
            {t?.contactBadge || "ទំនាក់ទំនងយើងខ្ញុំ (Contact Us)"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">
            {t?.contactTitle || "មានសំណួរ ឬចង់ស្វែងយល់បន្ថែម?"}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4 text-base sm:text-lg">
            {t?.contactSubtitle || "លោកអ្នកអាចទាក់ទងមកកាន់សាលាយើងខ្ញុំផ្ទាល់ ឬផ្ញើសារតាមរយៈប្រព័ន្ធអនឡាញខាងក្រោមនេះ។"}
          </p>
        </div>

        {/* ព័ត៌មានទំនាក់ទំនង និងទម្រង់ផ្ញើសារ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-200 dark:border-gray-800">
          
          {/* ផ្នែកខាងឆ្វេង៖ ព័ត៌មានសាលា និងទីតាំង */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 text-white dark:bg-yellow-500 dark:text-blue-950 p-3 rounded-xl flex items-center justify-center shadow-md">
                <School className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{t?.schoolName}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{t?.schoolSub}</p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {t?.contactDesc || "សាលាយើងខ្ញុំបើកស្វាគមន៍ជានិច្ចចំពោះមាតាបិតា សិស្សានុសិស្ស និងសាធារណជន ដែលចង់មកពិនិត្យមើលបរិយាកាសសិក្សា ឬសាកសួរព័ត៌មានលម្អិត។"}
            </p>

            <div className="space-y-4 pt-2 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600 dark:text-gray-300">
                  {t?.footerAddress}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600 dark:text-yellow-400 flex-shrink-0" />
                <p className="text-gray-600 dark:text-gray-300">{t?.footerPhone}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600 dark:text-yellow-400 flex-shrink-0" />
                <p className="text-gray-600 dark:text-gray-300">{t?.footerEmail}</p>
              </div>
            </div>

            {/* បណ្តាញសង្គម */}
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                {t?.socialTitle || "បណ្តាញសង្គមផ្លូវការ"}
              </p>
              <div className="flex space-x-3">
                {/* Facebook Icon SVG */}
                <a href="#facebook" aria-label="Facebook" className="w-10 h-10 bg-gray-100 hover:bg-blue-600 hover:text-white dark:bg-gray-800 dark:hover:bg-blue-600 rounded-lg flex items-center justify-center transition shadow-sm group">
                  <svg className="w-5 h-5 fill-current text-gray-700 dark:text-gray-300 group-hover:text-white" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                {/* Telegram Icon */}
                <a href="#telegram" aria-label="Telegram" className="w-10 h-10 bg-gray-100 hover:bg-blue-500 hover:text-white dark:bg-gray-800 dark:hover:bg-blue-500 rounded-lg flex items-center justify-center transition shadow-sm group">
                  <Send className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white" />
                </a>
                {/* YouTube Icon SVG */}
                <a href="#youtube" aria-label="YouTube" className="w-10 h-10 bg-gray-100 hover:bg-red-600 hover:text-white dark:bg-gray-800 dark:hover:bg-red-600 rounded-lg flex items-center justify-center transition shadow-sm group">
                  <svg className="w-5 h-5 fill-current text-gray-700 dark:text-gray-300 group-hover:text-white" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* ផ្នែកខាងស្តាំ៖ ទម្រង់ផ្ញើសារសួរសំណួរ */}
          <div className="lg:col-span-7 bg-gray-50 dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 className="text-xl font-bold mb-6">
              {t?.formTitle || "ផ្ញើសារមកកាន់យើងខ្ញុំ"}
            </h3>
            
            <form onSubmit={(e) => { e.preventDefault(); alert(t?.formAlert || 'ផ្ញើសារបានជោគជ័យ!'); }} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t?.formNameLabel || "ឈ្មោះរបស់អ្នក"}
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder={t?.formNamePlaceholder || "ឧ. សុខ មករា"} 
                    className="w-full px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t?.formContactLabel || "លេខទូរស័ព្ទ ឬ អ៊ីមែល"}
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder={t?.formContactPlaceholder || "ឧ. 012 345 678"} 
                    className="w-full px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t?.formMessageLabel || "ខ្លឹមសារសារ"}
                </label>
                <textarea 
                  rows="4" 
                  required 
                  placeholder={t?.formMessagePlaceholder || "សរសេរសំណួរ ឬព័ត៌មានដែលអ្នកចង់សួរ..."} 
                  className="w-full px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-md transition duration-300"
              >
                {t?.formSubmitBtn || "ផ្ញើសារឥឡូវនេះ"}
              </button>
            </form>
          </div>

        </div>

        {/* ផ្នែកបាតទំព័ររក្សាសិទ្ធិ (Copyright Footer) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 dark:text-gray-400 space-y-4 sm:space-y-0">
          <p>{t?.footerCopyright}</p>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-blue-600 dark:hover:text-white transition">គោលការណ៍ឯកជនភាព</a>
            <a href="#terms" className="hover:text-blue-600 dark:hover:text-white transition">លក្ខខណ្ឌប្រើប្រាស់</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;