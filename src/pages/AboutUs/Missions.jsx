import React from 'react';

const Missions = ({ lang }) => {
  // វចនានុក្រមសម្រាប់ភាសាខ្មែរ និងអង់គ្លេស
  const kh = {
    title: 'បេសកកម្មរបស់យើង (Our Missions)',
    subtitle: 'ការប្តេជ្ញាចិត្ត និងទិសដៅស្នូលក្នុងការផ្តល់នូវការអប់រំដែលមានគុណភាពខ្ពស់ និងស្តង់ដារអន្តរជាតិ។',
    missionsList: [
      {
        id: '01',
        title: 'បណ្តុះបណ្តាលធនធានមនុស្សប្រកបដោយគុណភាព',
        description: 'ផ្តល់ជូននូវចំណេះដឹងជំនាញបច្ចេកទេស និងវិទ្យាសាស្ត្រទំនើប ស្របតាមតម្រូវការទីផ្សារការងារជាតិ និងអន្តរជាតិ។',
      },
      {
        id: '02',
        title: 'លើកកម្ពស់ការស្រាវជ្រាវ និងនវានុវត្តន៍',
        description: 'ជំរុញនិស្សិត និងសាស្រ្តាចារ្យឱ្យចូលរួមយ៉ាងសកម្មក្នុងការស្រាវជ្រាវបែបវិទ្យាសាស្ត្រ និងការបង្កើតថ្មី (Innovation)។',
      },
      {
        id: '03',
        title: 'អភិវឌ្ឍក្រមសីលធម៌ និងភាពជាអ្នកដឹកនាំ',
        description: 'កសាងយុវជនជំនាន់ក្រោយឱ្យមានក្រមសីលធម៌វិជ្ជាជីវៈខ្ពស់ ស្មារតីទទួលខុសត្រូវ និងសមត្ថភាពដឹកនាំដ៏រឹងមាំ។',
      },
      {
        id: '04',
        title: 'ពង្រីកកិច្ចសហប្រតិបត្តិការអន្តរជាតិ',
        description: 'បង្កើតភាពជាដៃគូយុទ្ធសាស្ត្រជាមួយសាកលវិទ្យាល័យបរទេស និងស្ថាប័នធំៗ ដើម្បីឱកាសផ្លាស់ប្តូរបទពិសោធន៍សិក្សា។',
      },
    ],
    highlightTitle: 'ចក្ខុវិស័យរយៈពេលវែង',
    highlightText: 'ក្លាយជាស្ថាប័នអប់រំជាន់ខ្ពស់ឈានមុខគេមួយក្នុងតំបន់ ដែលទទួលស្គាល់លើគុណភាពបណ្តុះបណ្តាល និងនវានុវត្តន៍ឌីជីថល។',
  };

  const en = {
    title: 'Our Missions',
    subtitle: 'Our core commitments and strategic directions to provide high-quality, international-standard education.',
    missionsList: [
      {
        id: '01',
        title: 'Train Quality Human Resources',
        description: 'Deliver modern technical and scientific knowledge aligned with national and international labor market demands.',
      },
      {
        id: '02',
        title: 'Promote Research and Innovation',
        description: 'Encourage students and faculty to actively engage in scientific research and digital innovation.',
      },
      {
        id: '03',
        title: 'Develop Ethics and Leadership',
        description: 'Build future generations with high professional ethics, a strong sense of responsibility, and robust leadership skills.',
      },
      {
        id: '04',
        title: 'Expand International Cooperation',
        description: 'Establish strategic partnerships with global universities and institutions for academic exchange opportunities.',
      },
    ],
    highlightTitle: 'Long-Term Vision',
    highlightText: 'To become one of the leading higher education institutions in the region, recognized for academic excellence and digital innovation.',
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

        {/* Missions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {t.missionsList.map((item, index) => (
            <div 
              key={index} 
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 hover:border-cyan-500/50 transition shadow-sm flex items-start space-x-4"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-xl font-bold text-lg shrink-0">
                {item.id}
              </div>
              <div>
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

        {/* Highlight Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 border border-cyan-500/30 text-center">
          <h4 className="text-lg font-bold text-cyan-600 dark:text-cyan-400 mb-2">
            {t.highlightTitle}
          </h4>
          <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base max-w-2xl mx-auto">
            {t.highlightText}
          </p>
        </div>

      </div>
    </section>
  );
};

export default Missions;