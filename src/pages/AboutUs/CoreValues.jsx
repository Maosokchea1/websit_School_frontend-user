import React from 'react';

const CoreValues = ({ lang }) => {
  // វចនានុក្រមសម្រាប់ភាសាខ្មែរ និងអង់គ្លេស
  const kh = {
    title: 'តម្លៃស្នូលរបស់យើង (Core Values)',
    subtitle: 'គោលការណ៍គ្រឹះ និងស្មារតីដែលដឹកនាំសកម្មភាព វប្បធម៌ និងការអភិវឌ្ឍរបស់ស្ថាប័នយើងខ្ញុំ។',
    valuesList: [
      {
        icon: '💡',
        title: 'ភាពច្នៃប្រឌិត (Innovation)',
        description: 'ការលើកទឹកចិត្តឱ្យមានការគິດគូរថ្មីៗ ការប្រើប្រាស់បច្ចេកវិទ្យាទំនើប និងការស្វែងរកដំណោះស្រាយប្រកបដោយគំនិតច្នៃប្រឌិត។',
      },
      {
        icon: 'integrity', // ឬកូដតំណាងផ្សេងទៀត
        title: 'ភាពស្មោះត្រង់ និងក្រមសីលធម៌ (Integrity)',
        description: 'ការរក្សាភាពស្មោះត្រង់ តម្លាភាព និងការគោរពខ្ពស់ចំពោះក្រមសីលធម៌វិជ្ជាជីវៈក្នុងគ្រប់សកម្មភាពទាំងអស់។',
      },
      {
        icon: '🤝',
        title: 'សហការ និងសាមគ្គីភាព (Collaboration)',
        description: 'ការជឿជាក់លើកម្លាំងសហការ ការធ្វើការងារជាក្រុម និងភាពជាដៃគូដើម្បីឈានទៅរកភាពជោគជ័យរួមគ្នា។',
      },
      {
        icon: '⭐',
        title: 'គុណភាព និងឧត្តមភាព (Excellence)',
        description: 'ការតាំងចិត្តខ្ពស់ក្នុងការផ្តល់នូវលទ្ធផល និងសេវាកម្មអប់រំដែលមានស្តង់ដារ និងគុណភាពខ្ពស់បំផុត។',
      },
    ],
    footerNote: 'តម្លៃទាំងនេះគឺជាមូលដ្ឋានគ្រឹះក្នុងការបណ្តុះបណ្តាល និងសាងសង់អនាគតជូនដល់សិស្សានុសិស្សគ្រប់រូប។',
  };

  const en = {
    title: 'Our Core Values',
    subtitle: 'The fundamental principles and spirit that guide our organization’s culture, actions, and development.',
    valuesList: [
      {
        icon: '💡',
        title: 'Innovation',
        description: 'Encouraging fresh thinking, the adoption of modern technology, and creative problem-solving.',
      },
      {
        icon: '🛡️',
        title: 'Integrity',
        description: 'Upholding honesty, transparency, and high professional ethics in all our endeavors.',
      },
      {
        icon: '🤝',
        title: 'Collaboration',
        description: 'Believing in the power of teamwork, cooperation, and partnerships to achieve shared success.',
      },
      {
        icon: '⭐',
        title: 'Excellence',
        description: 'Commitment to delivering the highest standards and quality in education and services.',
      },
    ],
    footerNote: 'These values serve as the foundation for training and shaping the future of every student.',
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

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {t.valuesList.map((item, index) => (
            <div 
              key={index} 
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 hover:border-cyan-500/50 transition shadow-sm text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-2xl text-2xl mb-4">
                {item.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                {item.description}
              </p>
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

export default CoreValues;