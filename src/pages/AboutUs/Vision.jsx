import React from 'react';

const Vision = ({ lang }) => {
  // អត្ថបទសម្រាប់ភាសាខ្មែរ និងអង់គ្លេស
  const content = {
    KH: {
      title: 'ចក្ខុវិស័យ និងបេសកកម្ម',
      subtitle: 'គោលដៅ ទិសដៅ និងតម្លៃស្នូលក្នុងការអភិវឌ្ឍវិស័យអប់រំនៅវិទ្យាល័យ ហ៊ុន សែន ស្នួល',
      visionTitle: 'ចក្ខុវិស័យ (Vision)',
      visionText: 'អភិវឌ្ឍវិទ្យាល័យ ហ៊ុន សែន ស្នួល ឱ្យក្លាយជាគ្រឹះស្ថានសិក្សាគំរូដែលមានគុណភាពអប់រំខ្ពស់ វិន័យល្អ និងជាទីកន្លែងបណ្តុះបណ្តាលធនធានមនុស្សប្រកបដោយចំណេះដឹង ជំនាញ និងគុណធម៌ ដើម្បីឆ្លើយតបទៅនឹងការអភិវឌ្ឍសង្គមជាតិ និងសម័យកាលឌីជីថល។',
      missionTitle: 'បេសកកម្ម (Mission)',
      missionPoints: [
        'លើកកម្ពស់គុណភាពនៃការបង្រៀន និងរៀនស្របតាមស្តង់ដារជាតិ និងអន្តរជាតិ។',
        'ពង្រឹងវិន័យ សីលធម៌ និងគុណធម៌ដល់សិស្សានុសិស្សឱ្យក្លាយជាពលរដ្ឋល្អ។',
        'ពង្រីកកិច្ចសហការជាមួយអាជ្ញាធร មាតាបិតា និងសហគមន៍ក្នុងការគាំទ្រវិស័យអប់រំ។',
        'បណ្តុះបណ្តាលជំនាញបច្ចេកវិទ្យា និងការគិតបែបទសវត្សរ៍ទី២១ ដល់យុវជនជំនាន់ក្រោយ។'
      ],
      valuesTitle: 'តម្លៃស្នូល (Core Values)',
      values: [
        { title: 'គុណភាព (Quality)', desc: 'ការផ្តល់ការអប់រំដែលមានគុណភាព និងស្តង់ដារប្រកួតប្រជែង។' },
        { title: 'សីលធម៌ (Morality)', desc: 'ការរក្សានូវវិន័យ ភាពស្មោះត្រង់ និងសេចក្ដីថ្លៃថ្នូរ។' },
        { title: 'នវានុវត្តន៍ (Innovation)', desc: 'ការជំរុញការគិតច្នៃប្រឌិត និងការប្រើប្រាស់បច្ចេកវិទ្យាទំនើប។' }
      ]
    },
    EN: {
      title: 'Vision & Mission',
      subtitle: 'Goals, directions, and core values in educational development at Hun Sen Snuol High School',
      visionTitle: 'Our Vision',
      visionText: 'To develop Hun Sen Snuol High School into a model educational institution with high academic quality, strict discipline, and a hub for nurturing human resources equipped with knowledge, skills, and morality to meet national development and the digital era.',
      missionTitle: 'Our Mission',
      missionPoints: [
        'Enhance the quality of teaching and learning in line with national and international standards.',
        'Strengthen discipline, ethics, and morality among students to become good citizens.',
        'Expand cooperation with local authorities, parents, and communities to support education.',
        'Train students in technology skills and 21st-century thinking for the younger generation.'
      ],
      valuesTitle: 'Core Values',
      values: [
        { title: 'Quality', desc: 'Providing high-standard and competitive education.' },
        { title: 'Morality', desc: 'Upholding discipline, honesty, and personal integrity.' },
        { title: 'Innovation', desc: 'Encouraging creative thinking and modern technology adoption.' }
      ]
    }
  };

  const t = lang === 'EN' ? content.EN : content.KH;

  return (
    <section id="vision" className="py-20 bg-white dark:bg-gray-950 font-khmer transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
            {t.title}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-3">
            {t.title}
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            {t.subtitle}
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Vision Box */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {t.visionTitle}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                {t.visionText}
              </p>
            </div>
          </div>

          {/* Mission Box */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {t.missionTitle}
              </h3>
              <ul className="space-y-3">
                {t.missionPoints.map((point, index) => (
                  <li key={index} className="flex items-start text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    <svg className="w-5 h-5 text-primary mr-2.5 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Core Values Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t.valuesTitle}
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {t.values.map((val, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm text-center">
                <h4 className="font-bold text-primary text-lg mb-2">{val.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Vision;