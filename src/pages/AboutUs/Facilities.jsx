import React from 'react';

const Facilities = ({ lang }) => {
  // វចនានុក្រមសម្រាប់ភាសាខ្មែរ និងអង់គ្លេស
  const kh = {
    title: 'សម្ភារៈបរិក្ខារ និងហេដ្ឋារចនាសម្ព័ន្ធ (Facilities)',
    subtitle: 'បរិយាកាស និងបន្ទប់ពិសោធន៍ទំនើបៗ ដើម្បីគាំទ្រដល់ការសិក្សាស្រាវជ្រាវរបស់សិស្សានុសិស្ស។',
    facilitiesList: [
      {
        title: 'មន្ទីរពិសោធន៍កុំព្យូទ័រ (Computer Lab)',
        description: 'បំពាក់ដោយកុំព្យូទ័រទំនើបៗ និងប្រព័ន្ធអ៊ីនធឺណិតល្បឿនលឿនសម្រាប់អនុវត្តផ្នែកសរសេរកូដ និងបច្ចេកវិទ្យា។',
      },
      {
        title: 'បណ្ណាល័យឌីជីថល (Digital Library)',
        description: 'កន្លែងអានសៀវភៅដ៏ស្ងប់ស្ងាត់ ព្រមទាំងមានប្រព័ន្ធបណ្ណាល័យអេឡិចត្រូនិចសម្រាប់ស្រាវជ្រាវឯកសារនានា។',
      },
      {
        title: 'បន្ទប់សិក្សាទំនើប (Modern Classrooms)',
        description: 'បំពាក់ដោយម៉ាស៊ីនត្រជាក់ ក្ដារខៀនឆ្លាតវៃ (Smart Board) និងបរិក្ខារស្តង់ដារសម្រាប់ការសិក្សា។',
      },
      {
        title: 'ទីធ្លាកម្សាន្ត និងកីឡា (Sports & Recreation)',
        description: 'ទីធ្លាធំទូលាយសម្រាប់លេងកីឡា បាល់ទាត់ បាល់បោះ និងសកម្មភាពកម្សាន្តផ្សេងៗរបស់និស្សិត។',
      },
    ],
    footerNote: 'យើងផ្ដល់ជូននូវបរិយាកាសសិក្សាដ៏ល្អប្រសើរ ដើម្បីធានាបាននូវផាសុកភាព និងប្រសិទ្ធភាពខ្ពស់។',
  };

  const en = {
    title: 'Facilities & Infrastructure',
    subtitle: 'Modern environments and laboratories designed to support student learning and research.',
    facilitiesList: [
      {
        title: 'Computer Laboratory',
        description: 'Equipped with high-performance computers and high-speed internet for coding and technology practices.',
      },
      {
        title: 'Digital Library',
        description: 'A quiet reading space featuring electronic library systems for comprehensive research.',
      },
      {
        title: 'Modern Classrooms',
        description: 'Air-conditioned rooms equipped with smart boards and standard learning equipment.',
      },
      {
        title: 'Sports & Recreation',
        description: 'Spacious areas for football, basketball, and various student recreational activities.',
      },
    ],
    footerNote: 'We provide an optimal learning environment to ensure comfort and high effectiveness.',
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

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {t.facilitiesList.map((item, index) => (
            <div 
              key={index} 
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 hover:border-cyan-500/50 transition shadow-sm"
            >
              <div className="flex items-center space-x-3 mb-3">
                <span className="w-8 h-8 flex items-center justify-center bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-xl font-bold text-sm">
                  {index + 1}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm pl-11">
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

export default Facilities;