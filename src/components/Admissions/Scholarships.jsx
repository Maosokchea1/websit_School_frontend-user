import React from 'react';

const Scholarships = ({ lang }) => {
  // វចនានុក្រមសម្រាប់ភាសាខ្មែរ និងអង់គ្លេស
  const kh = {
    title: 'កម្មវិធីអាហារូបករណ៍ (Scholarships)',
    subtitle: 'ស្វែងយល់ពីឱកាសអាហារូបករណ៍ផ្សេងៗដើម្បីជួយសម្រួលដល់ការសិក្សារបស់អ្នក។',
    scholarshipsList: [
      {
        title: 'អាហារូបករណ៍ ១០០% (Full Scholarship)',
        description: 'សម្រាប់សិស្សានុសិស្សដែលទទួលបានពិន្ទុនិទ្ទេស A ក្នុងការប្រឡងបាក់ឌុប ឬប្រឡងជាប់ ១០០% តាមកម្រិតកំណត់របស់សាលា។',
        coverage: 'បង់ថ្លៃសិក្សា ១០០% រយៈពេល ៤ ឆ្នាំពេញ។',
      },
      {
        title: 'អាហារូបករណ៍ ៥០% (Partial Scholarship)',
        description: 'សម្រាប់សិស្សានុសិស្សដែលមានសក្តានុពល និងមានជីវភាពខ្វះខាត ប៉ុន្តែមានការតាំងចិត្តខ្ពស់ក្នុងការសិក្សា។',
        coverage: 'បញ្ចុះតម្លៃ ៥០% លើថ្លៃសិក្សាសរុប។',
      },
      {
        title: 'អាហារូបករណ៍សហការ (Partner Scholarship)',
        description: 'ផ្តល់ជូនតាមរយៈកិច្ចសហការជាមួយស្ថាប័នរដ្ឋ ក្រុមហ៊ុនឯកជន និងអង្គការដៃគូផ្សេងៗ។',
        coverage: 'បញ្ចុះតម្លៃពី ២០% ដល់ ៤០% អាស្រ័យលើកិច្ចព្រមព្រៀង។',
      },
    ],
    applyBtn: 'ដាក់ពាក្យស្នើសុំអាហារូបករណ៍',
  };

  const en = {
    title: 'Scholarships',
    subtitle: 'Explore various scholarship opportunities to support your academic journey.',
    scholarshipsList: [
      {
        title: 'Full Scholarship (100%)',
        description: 'Available for students who achieved Grade A on their high school graduation exam or passed top entrance tests.',
        coverage: 'Covers 100% of tuition fees for the full 4 years.',
      },
      {
        title: 'Partial Scholarship (50%)',
        description: 'Designed for talented students with financial needs who show high academic commitment.',
        coverage: 'Provides a 50% tuition fee reduction.',
      },
      {
        title: 'Partner Scholarship',
        description: 'Offered through collaborations with government institutions, private companies, and partner organizations.',
        coverage: 'Provides a 20% to 40% reduction based on specific agreements.',
      },
    ],
    applyBtn: 'Apply for Scholarship',
  };

  const t = lang === 'KH' ? kh : en;

  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 mt-6 transition-colors duration-300">
      
      {/* Title & Subtitle */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
        {t.title}
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm sm:text-base">
        {t.subtitle}
      </p>

      {/* Scholarships Cards Grid */}
      <div className="grid grid-cols-1 gap-6">
        {t.scholarshipsList.map((item, index) => (
          <div 
            key={index} 
            className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 hover:border-cyan-500/50 transition"
          >
            <h3 className="text-lg font-bold text-cyan-600 dark:text-cyan-400 mb-2">
              {item.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
              {item.description}
            </p>
            <div className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 rounded-lg text-xs font-semibold">
              {item.coverage}
            </div>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <div className="mt-8">
        <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition duration-300">
          {t.applyBtn}
        </button>
      </div>

    </div>
  );
};

export default Scholarships;