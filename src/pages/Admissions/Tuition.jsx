import React from 'react';

const Tuition = ({ lang }) => {
  // វចនានុក្រមសម្រាប់ភាសាខ្មែរ និងអង់គ្លេស
  const kh = {
    title: 'តម្លៃសិក្សា និងកម្រៃសេវា (Tuition & Fees)',
    subtitle: 'ព័ត៌មានលម្អិតអំពីតម្លៃសិក្សាសម្រាប់កម្មវិធីថ្នាក់បរិញ្ញាបត្រ និងជំនាញផ្សេងៗ។',
    tableHeaders: ['កម្មវិធីសិក្សា (Program)', 'តម្លៃក្នុងមួយឆមាស (Per Semester)', 'តម្លៃក្នុងមួយឆ្នាំ (Per Year)'],
    programs: [
      { name: 'វិទ្យាសាស្ត្រកុំព្យូទ័រ (Information Technology)', semester: '$450', year: '$850' },
      { name: 'ធុរកិច្ច និងអភិបាលកិច្ច (Business Administration)', semester: '$400', year: '$750' },
      { name: 'អក្សរសាស្ត្រអង់គ្លេស (English Literature)', semester: '$350', year: '$650' },
      { name: 'ហិរញ្ញវត្ថុ និងធនាគារ (Finance & Banking)', semester: '$400', year: '$750' },
    ],
    note: '*បញ្ជាក់៖ តម្លៃនេះអាចផ្លាស់ប្តូរអាស្រ័យលើការសម្រេចចិត្តរបស់សាលា និងមានអាហារូបករណ៍ជូនដំណាក់កាលនីមួយៗ។',
  };

  const en = {
    title: 'Tuition & Fees',
    subtitle: 'Detailed information about tuition fees for undergraduate and various major programs.',
    tableHeaders: ['Program', 'Price Per Semester', 'Price Per Year'],
    programs: [
      { name: 'Information Technology', semester: '$450', year: '$850' },
      { name: 'Business Administration', semester: '$400', year: '$750' },
      { name: 'English Literature', semester: '$350', year: '$650' },
      { name: 'Finance & Banking', semester: '$400', year: '$750' },
    ],
    note: '*Note: Fees are subject to change based on university policy, and scholarships are available for eligible students.',
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

      {/* Table Section */}
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm">
              {t.tableHeaders.map((header, index) => (
                <th key={index} className="p-4 font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700 text-sm">
            {t.programs.map((prog, index) => (
              <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                <td className="p-4 font-medium text-slate-900 dark:text-white">{prog.name}</td>
                <td className="p-4 text-cyan-600 dark:text-cyan-400 font-semibold">{prog.semester}</td>
                <td className="p-4 text-indigo-600 dark:text-indigo-400 font-semibold">{prog.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Note */}
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 italic">
        {t.note}
      </p>
    </div>
  );
};

export default Tuition;