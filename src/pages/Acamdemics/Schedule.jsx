import React from 'react';
import { Calendar, Clock, Download, ArrowRight } from 'lucide-react';

const Schedule = () => {
  return (
    <section id="schedule" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-300 font-khmer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-purple-600 dark:text-purple-400 uppercase bg-purple-50 dark:bg-purple-950/50 rounded-full border border-purple-100 dark:border-purple-900">
            ពេលវេលា និងកាលវិភាគ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            កាលវិភាគសិក្សាប្រចាំសប្តាហ៍
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            ម៉ោងសិក្សាផ្លូវការ និងកាលវិភាគសម្រាប់ថ្នាក់នីមួយៗក្នុងសាលា។
          </p>
        </div>

        {/* Schedule Card Box */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-xl shadow-gray-100 dark:shadow-none border border-gray-100 dark:border-gray-700/60 relative overflow-hidden group">
          
          {/* Decorative background glow */}
          <div className="absolute -right-16 -top-16 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-500"></div>

          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-50 dark:bg-purple-950/60 rounded-2xl sm:rounded-3xl flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Calendar className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  ឆមាសថ្មី ឆ្នាំសិក្សា ២០២៦-២០២៧
                </h3>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 rounded-full border border-amber-200/60 dark:border-amber-900/50">
                  <Clock className="w-3.5 h-3.5" /> ឆាប់ៗនេះ
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                កាលវិភាគលម្អិតសម្រាប់ថ្នាក់នីមួយៗនឹងត្រូវបង្ហាញជូនឆាប់ៗនេះ។ លោកអ្នកអាចទាញយកឯកសារយោងតាមរយៈវិបផតសិស្សានុសិស្សផ្ទាល់។
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <button 
                  onClick={() => alert('មុខងារទាញយកនឹងដាក់ឱ្យដំណើរការឆាប់ៗ!')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-2xl shadow-lg shadow-purple-600/20 hover:shadow-purple-600/30 transition-all duration-300 text-sm sm:text-base"
                >
                  <Download className="w-4 h-4" />
                  ទាញយកកាលវិភាគគំរូ
                </button>
                <a 
                  href="#portal" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700/60 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium rounded-2xl transition-all duration-300 text-sm sm:text-base"
                >
                  ចូលទៅវិបផតសិស្ស
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Schedule;