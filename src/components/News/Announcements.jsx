import React from 'react';
import { Bell, Calendar, ArrowRight, Megaphone } from 'lucide-react';

const Announcements = () => {
  // ទិន្នន័យសេចក្តីប្រកាសគំរូរបស់សាលា
  const schoolAnnouncements = [
    {
      id: 1,
      title: 'សេចក្តីប្រកាសស្តីពីការកត់ឈ្មោះចូលរៀនឆមាសទី២',
      date: '០១ កញ្ញា ២០២៦',
      category: 'ព័ត៌មានរដ្ឋបាល',
      description: 'សូមជូនដំណឹងដល់សិស្សានុសិស្សទាំងអស់ឱ្យបានជ្រាបថា ការបង់ប្រាក់ និងចុះឈ្មោះចូលរៀនឆមាសទី២ នឹងត្រូវចាប់ផ្តើមពីថ្ងៃទី១០ ដល់ទី២០ កញ្ញា ២០២៦។',
      urgent: true
    },
    {
      id: 2,
      title: 'កាលវិភាគប្រឡងប្រចាំខែកញ្ញា ឆ្នាំសិក្សា២០២៦',
      date: '២៨ សីហា ២០២៦',
      category: 'ការសិក្សា',
      description: 'ការប្រឡងពិនិត្យសមត្ថភាពប្រចាំខែកញ្ញាសម្រាប់ថ្នាក់ទី៧ ដល់ទី១២ នឹងប្រព្រឹត្តទៅចាប់ពីថ្ងៃទី២៥ ដល់ថ្ងៃទី២៧ កញ្ញា ខាងមុខនេះ។',
      urgent: false
    },
    {
      id: 3,
      title: 'ដំណើរទស្សនកិច្ចសិក្សាថ្នាក់ទី១២ ទៅកាន់ខេត្តសៀមរាប',
      date: '២០ សីហា ២០២៦',
      category: 'សកម្មភាពសិស្ស',
      description: 'សាលារៀបចំកម្មវិធីទស្សនកិច្ចសិក្សាមួយថ្ងៃពេញនៅឧទ្យានប្រវត្តិសាស្ត្រអង្គរ ដើម្បីបណ្តុះស្មារតីស្រឡាញ់បេតិកភណ្ឌជាតិ។',
      urgent: false
    }
  ];

  return (
    <section id="announcements" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300 font-khmer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-rose-600 dark:text-rose-400 uppercase bg-rose-50 dark:bg-rose-950/50 rounded-full border border-rose-100 dark:border-rose-900">
            ដំណឹង និងសេចក្តីប្រកាស
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            សេចក្តីប្រកាសផ្លូវការរបស់សាលា
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            ទទួលបានព័ត៌មានថ្មីៗ សេចក្តីជូនដំណឹង និងសេចក្តីប្រកាសសំខាន់ៗពីគណៈគ្រប់គ្រងសាលារៀន។
          </p>
        </div>

        {/* Announcements List / Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {schoolAnnouncements.map((item) => (
            <div 
              key={item.id}
              className="group bg-white dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl shadow-gray-100 dark:shadow-none border border-gray-100 dark:border-gray-700/60 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-rose-500/50"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="px-3.5 py-1.5 text-xs font-semibold bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 rounded-xl">
                    {item.category}
                  </span>
                  {item.urgent && (
                    <span className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 rounded-xl border border-amber-200/60 dark:border-amber-900/50">
                      <Megaphone className="w-3.5 h-3.5" /> សំខាន់
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 text-rose-500" />
                  <span>{item.date}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <button 
                onClick={() => alert(`អានសេចក្តីប្រកាសលម្អិត: ${item.title}`)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 transition-colors group/link pt-4 border-t border-gray-100 dark:border-gray-700/60"
              >
                អានសេចក្តីលម្អិត
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Announcements;