import React from 'react';
import { kh } from '../../translate/Khmer';
import { en } from '../../translate/English';

const AboutUs = ({ lang }) => {
  // ទាញយកទិន្នន័យភាសាផ្អែកលើ prop lang
  const t = (lang === 'EN' ? en : kh).aboutUs || {
    badge: "អំពីរឿងយើងខ្ញុំ",
    title: "ការប្តេជ្ញាចិត្តក្នុងការផ្តល់ការអប់រំប្រកបដោយគុណភាពខ្ពស់",
    description: "វិទ្យាល័យរបស់យើងបានបង្កើតឡើងដើម្បីបណ្តុះបណ្តាលទំពាំងស្នងឫស្សីឱ្យមានទាំងចំណេះដឹង សីលធម៌ និងជំនាញរស់នៅប្រាកដប្រជា។",
    visionTitle: "ចក្ខុវិស័យ (Vision)",
    visionDesc: "ជាគ្រឹះស្ថានអប់រំសាធារណៈ/ឯកជនឈានមុខគេ ដែលផលិតបានធនធានមនុស្សមានសមត្ថភាពខ្ពស់ ស្មារតីស្នេហាជាតិ និងប្រកួតប្រជែងបានក្នុងកម្រិតជាតិ និងអន្តរជាតិ។",
    missionTitle: "បេសកកម្ម (Mission)",
    missionDesc: "ផ្តល់ការបង្រៀនស្របតាមស្តង់ដារក្រសួងអប់រំ ពង្រឹងវិន័យ សីលធម៌ និងជំរុញការប្រើប្រាស់បច្ចេកវិទ្យាទំនើបក្នុងការសិក្សាស្រាវជ្រាវ។",
    coreValuesTitle: "តម្លៃស្នូល (Core Values)",
    coreValuesDesc: "ភាពស្មោះត្រង់ ឧស្សាហព្យាយាម ភាពជាអ្នកដឹកនាំ និងការគោរពគ្នាទៅវិញទៅមក。"
  };

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-gray-800 dark:text-gray-100 font-khmer transition-colors duration-300 relative overflow-hidden">
      
      {/* Decorative Blur Background Elements */}
      <div className="absolute top-1/3 -left-20 w-60 sm:w-80 h-60 sm:h-80 bg-blue-500/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 -right-20 w-60 sm:w-80 h-60 sm:h-80 bg-amber-500/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none"></div>

      {/* ✅ កែទៅជា max-w-[1400px] ដើម្បីឱ្យស៊ីគ្នាជាមួយ Header */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ចំណងជើងផ្នែក (Section Header) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <span className="text-primary font-semibold uppercase tracking-wider text-xs sm:text-sm bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 inline-block shadow-sm">
            {t.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mt-3 sm:mt-4 tracking-tight leading-snug">
            {t.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* ខ្លឹមសារបែងចែកជា ២ ផ្នែក (Grid Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* ផ្នែកខាងឆ្វេង៖ រូបភាពសាលារៀន */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-2 sm:border-4 border-white dark:border-gray-800 group">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3qBLUK7gGnCRTWNYbOBaUbYZP-JXb3jVucY71Eh5_JhYjnBWhKoj2-XcA&s=10" 
                alt="School building real view" 
                className="w-full h-[280px] sm:h-[400px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent opacity-60"></div>
            </div>
          </div>

          {/* ផ្នែកខាងស្តាំ៖ ចក្ខុវិស័យ បេសកកម្ម និងតម្លៃស្នូល */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            
            {/* ចក្ខុវិស័យ (Vision) */}
            <div className="bg-white dark:bg-gray-800/80 p-5 sm:p-7 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700/80 flex items-start space-x-4 sm:space-x-5 transition-all duration-300 hover:shadow-xl hover:border-blue-500/30 dark:hover:border-blue-400/30 group">
              <div className="bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 p-3 sm:p-4 rounded-xl sm:rounded-2xl shrink-0 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">{t.visionTitle}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t.visionDesc}
                </p>
              </div>
            </div>

            {/* បេសកកម្ម (Mission) */}
            <div className="bg-white dark:bg-gray-800/80 p-5 sm:p-7 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700/80 flex items-start space-x-4 sm:space-x-5 transition-all duration-300 hover:shadow-xl hover:border-amber-500/30 dark:hover:border-amber-400/30 group">
              <div className="bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 p-3 sm:p-4 rounded-xl sm:rounded-2xl shrink-0 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">{t.missionTitle}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t.missionDesc}
                </p>
              </div>
            </div>

            {/* តម្លៃស្នូល (Core Values) */}
            <div className="bg-white dark:bg-gray-800/80 p-5 sm:p-7 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700/80 flex items-start space-x-4 sm:space-x-5 transition-all duration-300 hover:shadow-xl hover:border-emerald-500/30 dark:hover:border-emerald-400/30 group">
              <div className="bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 p-3 sm:p-4 rounded-xl sm:rounded-2xl shrink-0 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">{t.coreValuesTitle}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t.coreValuesDesc}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;