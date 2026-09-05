import React from 'react';
import { BookOpen, GraduationCap, Users } from 'lucide-react';

const Curriculum = () => {
  return (
    <section id="curriculum" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300 font-khmer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-950/50 rounded-full border border-blue-100 dark:border-blue-900">
            កម្មវិធីសិក្សា និងកម្រិតថ្នាក់
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            កាតព្វកិច្ចកម្រិតថ្នាក់ និងកម្មវិធីសិក្សា
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            ស្វែងយល់ពីកម្រិតសិក្សា និងកាតព្វកិច្ចសិស្សានុសិស្សចាប់ពីកម្រិតមូលដ្ឋានរហូតដល់មធ្យមសិក្សាទុតិយភូមិ។
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="group bg-white dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg shadow-gray-100 dark:shadow-none border border-gray-100 dark:border-gray-700/60 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-blue-50 dark:bg-blue-950/60 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              មធ្យមសិក្សាបឋមភូមិ
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
              ថ្នាក់ទី៧ ដល់ ទី៩ ផ្តោតលើមូលដ្ឋានគ្រឹះវិទ្យាសាស្ត្រ និងអក្សរសាស្ត្រ។
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg shadow-gray-100 dark:shadow-none border border-gray-100 dark:border-gray-700/60 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-950/60 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              មធ្យមសិក្សាទុតិយភូមិ (វិទ្យាសាស្ត្រ)
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
              ថ្នាក់ទី១០ ដល់ ទី១២ ជំនាញវិទ្យាសាស្ត្រពិត (គណិត, រូប, គីមី)។
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg shadow-gray-100 dark:shadow-none border border-gray-100 dark:border-gray-700/60 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-950/60 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              មធ្យមសិក្សាទុតិយភូមិ (សង្គមសាស្រ្ត)
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
              ថ្នាក់ទី១០ ដល់ ទី១២ ជំនាញវិទ្យាសាស្ត្រសង្គម (ប្រវត្តិ, ភូមិ, ពលរដ្ឋ)។
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Curriculum;