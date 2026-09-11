import React from 'react';

const Achievements = ({ lang }) => {
  // វចនានុក្រមសម្រាប់ភាសាខ្មែរ និងអង់គ្លេស
  const kh = {
    title: 'សមិទ្ធផលរបស់យើង (Our Achievements)',
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
        description: 'និស្សិតជាង ៩៥% ទទួលបានការងារធ្វើភ្លាមៗ ឬបង្កើតអាជីវកម្មផ្ទាល់ខ្លួនក្រោយបញ្ចប់การសិក្សា។',
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
    title: 'Our Achievements',
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
    <section className="py-12 bg-white dark:bg-gray-900 transition-colors duration-300 font-khmer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            {t.subtitle}
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {t.achievementsList.map((item, index) => (
            <div 
              key={index} 
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 hover:border-cyan-500/50 transition shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-lg text-xs font-bold mb-3">
                  {item.year}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center text-xs sm:text-sm text-slate-500 dark:text-slate-400 italic">
          {t.footerNote}
        </div>

      </div>
    </section>
  );
};

export default Achievements;