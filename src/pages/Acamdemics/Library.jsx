import React from 'react';
import { Globe, Laptop, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

const Library = () => {
  return (
    <section id="library" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300 font-khmer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950/50 rounded-full border border-emerald-100 dark:border-emerald-900">
            មជ្ឈមណ្ឌលចំណេះដឹង
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            បណ្ណាល័យ និងមជ្ឈមណ្ឌលស្រាវជ្រាវ
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            កន្លែងប្រមូលផ្តុំសៀវភៅ ឯកសារយោង និងមធ្យោបាយស្រាវជ្រាវឌីជីថលសម្រាប់សិស្សានុសិស្សក្នុងការអភិវឌ្ឍខ្លួន។
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Left Column: Detailed Descriptions & Features */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg shadow-gray-100 dark:shadow-none border border-gray-100 dark:border-gray-700/60">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-lg">📚</span>
                ធនធានសម្បូរបែប និងទំនើប
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6">
                បណ្ណាល័យរបស់យើងត្រូវបានរៀបចំឡើងយ៉ាងមានសណ្តាប់ធ្នាប់ ផ្តល់នូវបរិយាកាសស្ងប់ស្ងាត់សាកសមបំផុតសម្រាប់ការអាន និងការសិក្សាស្រាវជ្រាវជាក្រុម ឬបុគ្គល។
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700/40">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">សៀវភៅសិក្សាគោល និងអាន</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">មានគ្រប់កម្រិតថ្នាក់</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700/40">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">ឯកសារប្រវត្តិសាស្ត្រ</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">ឯកសារកម្រ និងបុរាណវិទ្យា</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Stats / Features Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg shadow-gray-100 dark:shadow-none border border-gray-100 dark:border-gray-700/60 flex items-center gap-5 group hover:border-emerald-500/50 transition-all">
              <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-950/60 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
                <Laptop className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">មជ្ឈមណ្ឌលព័ត៌មានវិទ្យា</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">កុំព្យូទ័រតភ្ជាប់ប្រព័ន្ធអ៊ីនធឺណិតល្បឿនលឿនសម្រាប់ស្រាវជ្រាវ។</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg shadow-gray-100 dark:shadow-none border border-gray-100 dark:border-gray-700/60 flex items-center gap-5 group hover:border-blue-500/50 transition-all">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-950/60 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 group-hover:scale-110 transition-transform">
                <Globe className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">បណ្ណាល័យឌីជីថល</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">អាចអាន E-Books និងឯកសារអនឡាញពីចម្ងាយបាន។</p>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Schedule & Action Banner */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-8 sm:p-10 text-white shadow-xl shadow-emerald-900/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5 text-center md:text-left flex-col md:flex-row">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white shrink-0">
              <Clock className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-1">ម៉ោងដំណើរការបណ្ណាល័យ</h4>
              <p className="text-emerald-100 text-sm sm:text-base">
                បើកទ្វាររៀងរាល់ថ្ងៃចន្ទ ដល់ សុក្រ (ម៉ោង ៧:៣០ព្រឹក - ៤:៣០ល្ងាច) | បិទថ្ងៃបុណ្យជាតិ
              </p>
            </div>
          </div>
          <button 
            onClick={() => alert('មុខងារចូលមើលបណ្ណាល័យឌីជីថលនឹងមកដល់เร็วៗនេះ!')}
            className="px-6 py-3.5 bg-white text-emerald-700 font-semibold rounded-2xl shadow-lg hover:bg-emerald-50 transition-all duration-300 shrink-0 flex items-center gap-2 text-sm sm:text-base"
          >
            ចូលមើលបណ្ណាល័យអនឡាញ
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Library;