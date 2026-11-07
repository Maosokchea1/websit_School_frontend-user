import React from 'react';

const Achievements = ({ lang }) => {
  // ទិន្នន័យភាសាខ្មែរ
  const kh = {
    badge: 'សមិទ្ធផលរបស់យើង',
    title: 'សមិទ្ធផល និងរឿងជោគជ័យរបស់យើង',
    subtitle: 'ព្រឹត្តិការណ៍សំខាន់ៗ និងរឿងជោគជ័យដែលស្ថាប័នរបស់យើងសម្រេចបានរហូតមកដល់បច្ចុប្បន្ន។',
    achievementsList: [
      {
        year: '២០២៥',
        title: 'ស្តង់ដារអប់រំឌីជីថល',
        description: 'ទទួលបានពានរង្វាន់ជាតិសម្រាប់ការរួមចំណែកឆ្នើមក្នុងការអភិវឌ្ឍន៍ហេដ្ឋារចនាសម្ព័ន្ធអប់រំឌីជីថល។',
      },
      {
        year: '២០២៤',
        title: 'ការទទួលស្គាល់គុណភាពអប់រំ',
        description: 'ទទួលបានវិញ្ញាបនបត្របញ្ជាក់គុណភាពអប់រំពីក្រសួងពាក់ព័ន្ធពេញលេញ។',
      },
      {
        year: '២០២៣',
        title: 'អត្រាការងារនិស្សិតបញ្ចប់ការសិក្សា ៩៥%',
        description: 'និស្សិតបញ្ចប់ការសិក្សាជាង ៩៥% ទទួលបានការងារធ្វើ ឬបានបើកអាជីវកម្មផ្ទាល់ខ្លួនភ្លាមៗបន្ទាប់ពីបញ្ចប់ការសិក្សា។',
      },
      {
        year: '២០២២',
        title: 'ការពង្រីកភាពជាដៃគូអន្តរជាតិ',
        description: 'ចុះហត្ថលេខាលើអនុស្សរណៈនៃការយោគយល់ (MoU) ជាមួយសាកលវិទ្យាល័យដៃគូសកលជាង ២០។',
      },
    ],
    footerNote: 'យើងបន្តខិតខំប្រឹងប្រែងដើម្បីកសាងឧត្តមភាព និងសមិទ្ធផលបន្ថែមទៀត។',
  };

  const en = {
    badge: 'Our Milestones',
    title: 'Achievements & Success Stories',
    subtitle: 'Key milestones and successes our institution has achieved up to the present day.',
    achievementsList: [
      {
        year: '2025',
        title: 'Excellence in Digital Education',
        description: 'Received a national award for outstanding contributions to digital education infrastructure.',
      },
      {
        year: '2024',
        title: 'National Accreditation',
        description: 'Achieved full higher education accreditation quality certification from relevant ministries.',
      },
      {
        year: '2023',
        title: '95% Graduate Employment Rate',
        description: 'Over 95% of graduates secured employment or launched their own businesses immediately after graduation.',
      },
      {
        year: '2022',
        title: 'International Partnerships Expansion',
        description: 'Signed Memorandums of Understanding (MoUs) with over 20 global partner universities.',
      },
    ],
    footerNote: 'We continue striving to build further excellence and achievements.',
  };

  const t = lang === 'KH' ? kh : en;

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gray-50/50 dark:bg-gray-900 transition-colors duration-300 font-khmer relative overflow-hidden">
      
      {/* Decorative Background Elements (Optional) */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none"></div>

      {/* ✅ កែទៅជា max-w-[1400px] ដើម្បីឱ្យស៊ីគ្នាជាមួយ Header */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <span className="text-primary font-semibold uppercase tracking-wider text-xs sm:text-sm bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 inline-block shadow-sm">
            {t.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mt-3 sm:mt-4 tracking-tight leading-snug">
            {t.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-14">
          {t.achievementsList.map((item, index) => (
            <div 
              key={index} 
              className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800/60 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="inline-block px-3.5 py-1.5 bg-primary/10 text-primary dark:text-primary rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold mb-4 sm:mb-5 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {item.year}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-primary transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center text-sm sm:text-base text-gray-500 dark:text-gray-400 italic max-w-2xl mx-auto px-4">
          {t.footerNote}
        </div>

      </div>
    </section>
  );
};

export default Achievements;