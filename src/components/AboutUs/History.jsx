import React from 'react';

const History = ({ lang }) => {
  // អត្ថបទសម្រាប់ភាសាខ្មែរ និងអង់គ្លេស
  const content = {
    KH: {
      title: 'ប្រវត្តិសាស្ត្រសាលា',
      subtitle: 'ប្រវត្តិសាស្ត្រ និងដំណើរការអភិវឌ្ឍន៍របស់វិទ្យាល័យ ហ៊ុន សែន ស្នួល',
      introTitle: 'ដំណាក់កាលកសាង និងអភិវឌ្ឍន៍',
      introText: 'វិទ្យាល័យ ហ៊ុន សែន ស្នួល ត្រូវបានបង្កើតឡើងក្នុងគោលបំណងឆ្លើយតបទៅនឹងតម្រូវការនៃការអប់រំ និងការបណ្តុះបណ្តាលធនធានមនុស្សក្នុងមូលដ្ឋាន ព្រមទាំងផ្តល់ឱកាសដល់សិស្សានុសិស្សទទួលបានការបណ្តុះបណ្តាលកម្រិតខ្ពស់ស្របតាមស្តង់ដារក្រសួងអប់រំ យុវជន និងកីឡា។',
      milestonesTitle: 'ព្រឹត្តិការណ៍សំខាន់ៗតាមដំណាក់កាល',
      milestones: [
        {
          year: 'ឆ្នាំ ២០០៥ - ២០១០',
          title: 'ដំណាក់កាលកសាងដំបូង',
          desc: 'ចាប់ផ្តើមពីអគារសិក្សាតូចល្មម ជាមួយចំនួនសិស្សានុសិស្ស និងលោកគ្រូ-អ្នកគ្រូក្នុងចំនួនកំណត់ ដើម្បីបំពេញសេចក្តីត្រូវការបន្ទាន់ក្នុងការសិក្សារបស់កូនចៅប្រជាពលរដ្ឋក្នុងស្រុកស្នួល។'
        },
        {
          year: 'ឆ្នាំ ២០១១ - ២០១៨',
          title: 'ការពង្រីកវិសាលភាព និងហេដ្ឋារចនាសម្ព័ន្ធ',
          desc: 'ទទួលបានការគាំទ្រ និងការកសាងបន្ថែមនូវអគារសិក្សាថ្មីៗ បណ្ណាល័យ បន្ទប់ពិសោធន៍ និងទីលានកីឡា ព្រមទាំងការកើនឡើងជាលំដាប់នៃចំនួនសិស្សានុសិស្ស។'
        },
        {
          year: 'ឆ្នាំ ២០១៩ - បច្ចុប្បន្ន',
          title: 'សមិទ្ធផល និងការឈានឆ្ពោះទៅរកឌីជីថល',
          desc: 'សាលាបានបន្តអភិវឌ្ឍខ្លួនយ៉ាងខ្លាំងក្លា ទាំងគុណភាពអប់រំ ការបណ្តុះបណ្តាលផ្នែកបច្ចេកវិទ្យា និងការរៀបចំប្រព័ន្ធគ្រប់គ្រងរដ្ឋបាលសាលាទំនើប ដើម្បីឆ្លើយតបទៅនឹងសម័យកាលឌីជីថល។'
        }
      ],
      missionQuote: '"ការអប់រំគឺជាគន្លឹះក្នុងការកសាងអនាគតដ៏ភ្លឺស្វាង និងការអភិវឌ្ឍសង្គមជាតិឱ្យរីកចម្រើនជឿនលឿន។"'
    },
    EN: {
      title: 'School History',
      subtitle: 'The background and developmental milestones of Hun Sen Snuol High School',
      introTitle: 'Foundation and Development',
      introText: 'Hun Sen Snuol High School was established to meet the educational and human resource development needs in the local community, providing students with advanced training opportunities in accordance with the standards of the Ministry of Education, Youth and Sport.',
      milestonesTitle: 'Key Milestones',
      milestones: [
        {
          year: '2005 - 2010',
          title: 'Initial Establishment',
          desc: 'Started with modest school buildings, a limited number of students, and teachers to fulfill the urgent educational needs of local families in Snuol district.'
        },
        {
          year: '2011 - 2018',
          title: 'Infrastructure and Expansion',
          desc: 'Received support and construction for new school buildings, libraries, laboratories, and sports grounds, alongside a steady growth in student enrollment.'
        },
        {
          year: '2019 - Present',
          title: 'Achievements & Digital Transformation',
          desc: 'The school has continuously evolved in educational quality, technology training, and modern administration systems to meet the demands of the digital era.'
        }
      ],
      missionQuote: '"Education is the key to building a bright future and driving sustainable national development."'
    }
  };

  const t = lang === 'EN' ? content.EN : content.KH;

  return (
    <section id="history" className="py-20 bg-gray-50 dark:bg-gray-900 font-khmer transition-colors duration-300">
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

        {/* Introduction Box */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-10 shadow-sm border border-gray-100 dark:border-gray-700 mb-12">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
            {t.introTitle}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
            {t.introText}
          </p>
        </div>

        {/* Timeline / Milestones Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t.milestonesTitle}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {t.milestones.map((item, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-lg mb-4">
                    {item.year}
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center">
          <p className="text-primary italic font-medium text-base sm:text-lg">
            {t.missionQuote}
          </p>
        </div>

      </div>
    </section>
  );
};

export default History;