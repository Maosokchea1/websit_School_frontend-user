import React from 'react';

const Achievements = ({ lang }) => {
  // វចនានុក្រមសម្រាប់ភាសាខ្មែរ និងអង់គ្លេស
  const kh = {
    badge: 'សមិទ្ធផលការងារ',
    title: 'សមិទ្ធផល និងភាពជោគជ័យរបស់យើង',
    subtitle: 'ព្រឹត្តិការណ៍សំខាន់ៗ និងភាពជោគជ័យដែលស្ថាប័នយើងខ្ញុំបានសម្រេចរហូតមកដល់បច្ចុប្បន្ន។',
    achievementsList: [
      {
        year: '២០២៥',
        title: 'ស្ថាប័នអប់រំឌីជីថលឆ្នើម',
        description: 'ទទួលបានពានរង្វាន់កម្រិតជាតិសម្រាប់ការរួមចំណែកក្នុងការអភិវឌ្ឍប្រព័ន្ធអប់រំឌីជីថល។',
      },
      {
        year: '២០២៤',
        title: 'ការទទួលស្គាល់គុណភាពអប់រំ',
        description: 'ទទួលបានវិញ្ញាបនបត្របញ្ជាក់គុណភាពអប់រំជាន់ខ្ពស់ពីក្រសួងស្ថាប័នពាក់ព័ន្ធ។',
      },
      {
        year: '២០២៣',
        title: 'អត្រាការងារនិស្សិតបញ្ចប់ការសិក្សា ៩៥%',
        description: 'និស្សិតជាង ៩៥% ទទួលបានការងារធ្វើភ្លាមៗ ឬបង្កើតអាជីវកម្មផ្ទាល់ខ្លួនក្រោយបញ្ចប់ការសិក្សា។',
      },
      {
        year: '២០២២',
        title: 'ការពង្រីកកិច្ចសហប្រតិបត្តិការអន្តរជាតិ',
        description: 'ចុះអនុស្សរណៈយោគយល់គ្នា (MoU) ជាមួយសាកលវិទ្យាល័យដៃគូអន្តរជាតិជាង ២០។',
      },
    ],
    footerNote: 'យើងបន្តខិតខំប្រឹងប្រែងដើម្បីកសាងឧត្តមភាព និងភាពជោគជ័យថ្មីៗបន្ថែមទៀត។',
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
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50/50 dark:bg-gray-900 transition-colors duration-300 font-khmer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 mb-8 sm:mb-12">
          {t.achievementsList.map((item, index) => (
            <div 
              key={index} 
              className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800/60 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary dark:text-primary rounded-lg sm:rounded-xl text-xs font-bold mb-3 sm:mb-4 shadow-sm">
                  {item.year}
                </div>
                <h3 className="text-base sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-2.5 group-hover:text-primary transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic max-w-xl mx-auto px-4">
          {t.footerNote}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
