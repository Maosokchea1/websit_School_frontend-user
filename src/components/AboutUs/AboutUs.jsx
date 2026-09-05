import React from 'react';
import { kh } from '../../translate/Khmer';
import { en } from '../../translate/English';

const AboutUs = ({ lang }) => {
  // ទាញយកទិន្នន័យភាសាផ្អែកលើ prop lang (ប្រសិនបើមិនមានបញ្ជូនមក យក 'KH ទុកជាមូលដ្ឋាន')
  const t = (lang === 'EN' ? en : kh).aboutUs || {
    badge: "អំពីរឿងយើងខ្ញុំ",
    title: "ការប្តេជ្ញាចិត្តក្នុងការផ្តល់ការអប់រំប្រកបដោយគុណភាពខ្ពស់",
    description: "វិទ្យាល័យរបស់យើងបានបង្កើតឡើងដើម្បីបណ្តុះបណ្តាលទំពាំងស្នងឫស្សីឱ្យមានទាំងចំណេះដឹង សីលធម៌ និងជំនាញរស់នៅប្រាកដប្រជា។",
    experienceNum: "២៥+",
    experienceText: "ឆ្នាំនៃបទពិសោធន៍អប់រំ",
    visionTitle: "ចក្ខុវិស័យ (Vision)",
    visionDesc: "ជាគ្រឹះស្ថានអប់រំសាធារណៈ/ឯកជនឈានមុខគេ ដែលផលិតបានធនធានមនុស្សមានសមត្ថភាពខ្ពស់ ស្មារតីស្នេហាជាតិ និងប្រកួតប្រជែងបានក្នុងកម្រិតជាតិ និងអន្តរជាតិ។",
    missionTitle: "បេសកកម្ម (Mission)",
    missionDesc: "ផ្តល់ការបង្រៀនស្របតាមស្តង់ដារក្រសួងអប់រំ ពង្រឹងវិន័យ សីលធម៌ និងជំរុញការប្រើប្រាស់បច្ចេកវិទ្យាទំនើបក្នុងការសិក្សាស្រាវជ្រាវ។",
    coreValuesTitle: "តម្លៃស្នូល (Core Values)",
    coreValuesDesc: "ភាពស្មោះត្រង់ ឧស្សាហព្យាយាម ភាពជាអ្នកដឹកនាំ និងការគោរពគ្នាទៅវិញទៅមក。"
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-khmer transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ចំណងជើងផ្នែក (Section Header) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm bg-primary/10 px-3 py-1 rounded-full border border-primary/25">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-3">
            {t.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-base sm:text-lg">
            {t.description}
          </p>
        </div>

        {/* ខ្លឹមសារបែងចែកជា ២ ផ្នែក (Grid Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* ផ្នែកខាងឆ្វេង៖ រូបភាព ឬកាតបង្ហាញពីសកម្មភាពសាលា */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
              <img 
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1000&auto=format&fit=crop" 
                alt="School building" 
                className="w-full h-[400px] object-cover"
              />
            </div>
            {/* កាតអូសបញ្ជាក់បទពិសោធន៍ */}
            <div className="absolute -bottom-6 -right-6 bg-gray-900 dark:bg-gray-800 text-white p-6 rounded-xl shadow-xl hidden sm:block border-2 border-white dark:border-gray-700">
              <p className="text-3xl font-extrabold text-primary">{t.experienceNum}</p>
              <p className="text-sm font-medium">{t.experienceText}</p>
            </div>
          </div>

          {/* ផ្នែកខាងស្តាំ៖ ចក្ខុវិស័យ បេសកកម្ម និងតម្លៃស្នូល */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* ចក្ខុវិស័យ (Vision) */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-start space-x-4 transition-colors">
              <div className="bg-primary/10 text-primary p-3 rounded-xl shrink-0 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{t.visionTitle}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {t.visionDesc}
                </p>
              </div>
            </div>

            {/* បេសកកម្ម (Mission) */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-start space-x-4 transition-colors">
              <div className="bg-amber-100 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 p-3 rounded-xl shrink-0 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{t.missionTitle}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {t.missionDesc}
                </p>
              </div>
            </div>

            {/* តម្លៃស្នូល (Core Values) */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-start space-x-4 transition-colors">
              <div className="bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 p-3 rounded-xl shrink-0 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{t.coreValuesTitle}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
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