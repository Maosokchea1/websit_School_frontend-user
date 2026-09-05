import React from 'react';

const Requirements = ({ lang }) => {
  const kh = {
    title: 'លក្ខខណ្ឌតម្រូវក្នុងការចុះឈ្មោះ (Admission Requirements)',
    subtitle: 'ឯកសារ និងលក្ខខណ្ឌតម្រូវផ្សេងៗសម្រាប់សិស្សានុសិស្សដែលចង់ស្នើសុំចូលសិក្សា។',
    requirementsList: [
      {
        title: 'សញ្ញាបត្រ ឬវិញ្ញាបនបត្រ (Certificates)',
        details: 'សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ (បាក់ឌុប) ឬវិញ្ញាបនបត្របណ្តោះអាសន្ន ឬលិខិតបញ្ជាក់ការសិក្សាថ្នាក់ទី១២។',
      },
      {
        title: 'អត្តសញ្ញាណប័ណ្ណ ឬសំបុត្រកំណើត (Identity Documents)',
        details: 'ច្បាប់ចម្លងអត្តសញ្ញាណប័ណ្ណសញ្ជាតិខ្មែរ លិខិតឆ្លងដែន ឬសំបុត្រកំណើតដែលមានការបញ្ជាក់ត្រឹមត្រូវ។',
      },
      {
        title: 'រូបថត ១ ភាគរយ (Photos)',
        details: 'រូបថតទំហំ 4x6  nền ពណ៌ស ចំនួន ៣ សន្លឹក (ថតថ្មីៗមិនលើសពី ៦ ខែ)។',
      },
      {
        title: 'ពាក្យស្នើសុំចូលសិក្សា (Application Form)',
        details: 'បំពេញពាក្យស្នើសុំចូលសិក្សាដែលចេញដោយសាលា ឬបំពេញតាមប្រព័ន្ធអនឡាញឱ្យបានត្រឹមត្រូវ។',
      },
    ],
    noteTitle: 'ចំណាំសំខាន់:',
    noteText: 'ឯកសារទាំងអស់ត្រូវមានការផ្ទៀងផ្ទាត់ត្រឹមត្រូវពីអាជ្ញាធរដែនដី ឬស្ថាប័នមានសមត្ថកិច្ច មុនពេលដាក់ស្នើមកកាន់ការិយាល័យចុះឈ្មោះ។',
  };

  const en = {
    title: 'Admission Requirements',
    subtitle: 'Required documents and qualifications for students applying for enrollment.',
    requirementsList: [
      {
        title: 'Educational Certificates',
        details: 'High School Diploma (BacII), provisional certificate, or an official grade 12 completion letter.',
      },
      {
        title: 'Identity Documents',
        details: 'A certified copy of your Cambodian National ID card, passport, or birth certificate.',
      },
      {
        title: 'Passport Photos',
        details: '3 recent passport-sized photos (4x6 cm with a white background, taken within the last 6 months).',
      },
      {
        title: 'Application Form',
        details: 'A fully completed application form issued by the university or filled out online.',
      },
    ],
    noteTitle: 'Important Note:',
    noteText: 'All documents must be properly verified by local authorities or relevant institutions before submission to the admissions office.',
  };

  const t = lang === 'KH' ? kh : en;

  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 mt-6 transition-colors duration-300">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
        {t.title}
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm sm:text-base">
        {t.subtitle}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {t.requirementsList.map((item, index) => (
          <div 
            key={index} 
            className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 hover:border-cyan-500/50 transition"
          >
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-7 h-7 flex items-center justify-center bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-lg font-bold text-sm">
                {index + 1}
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm pl-10">
              {item.details}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-200 text-sm">
        <span className="font-semibold">{t.noteTitle}</span> {t.noteText}
      </div>
    </div>
  );
};

export default Requirements;