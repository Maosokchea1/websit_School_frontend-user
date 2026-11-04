import React, { useState } from 'react';
import { kh } from '../../translate/Khmer';
import { en } from '../../translate/English';

const Admissions = ({ lang }) => {
  const [submitted, setSubmitted] = useState(false);
  const t = (lang === 'EN') ? en : kh;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="admissions" className={`py-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white ${lang === 'KH' ? 'font-khmer' : 'font-sans'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ចំណងជើងផ្នែក (Section Header) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 dark:text-yellow-400 font-semibold uppercase tracking-wider text-sm bg-blue-100 dark:bg-gray-800 px-3 py-1 rounded-full">
            {t?.admissionsBadge || "ការចុះឈ្មោះចូលរៀន (Admissions)"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 dark:text-white mt-3">
            {t?.admissionsTitle || "ចូលរួមរៀនជាមួយយើងសម្រាប់ឆ្នាំសិក្សាថ្មី"}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4 text-base sm:text-lg">
            {t?.admissionsSubtitle || "យើងកំពុងបើកទទួលសិស្សានុសិស្សថ្មីសម្រាប់កម្រិតអនុវិទ្យាល័យ និងវិទ្យាល័យ។ សូមបំពេញព័ត៌មានខាងក្រោម ឬអញ្ជើញមកកាន់សាលាផ្ទាល់។"}
          </p>
        </div>

        {/* ខ្លឹមសារបែងចែកជា ២ ផ្នែក (Grid Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* ផ្នែកខាងឆ្វេង៖ ជំហាននៃការចុះឈ្មោះ និងលក្ខខណ្ឌ */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-blue-950 dark:text-white">ជំហានងាយៗក្នុងការចុះឈ្មោះ</h3>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-start space-x-4">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  ១
                </div>
                <div>
                  <h4 className="font-bold text-blue-950 dark:text-white">បំពេញពាក្យស្នើសុំ</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">បំពេញទម្រង់តាមអនឡាញខាងស្តាំ ឬមកយកពាក្យផ្ទាល់នៅការិយាល័យសាលា។</p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-start space-x-4">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  ២
                </div>
                <div>
                  <h4 className="font-bold text-blue-950 dark:text-white">ត្រៀមឯកសារពាក់ព័ន្ធ</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">សំបុត្រកំណើត សៀវភៅស្នាក់នៅ និងសញ្ញាបត្រ/វិញ្ញាបនបត្របញ្ជាក់ការសិក្សាចុងក្រោយ។</p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-start space-x-4">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  ៣
                </div>
                <div>
                  <h4 className="font-bold text-blue-950 dark:text-white">សម្ភាសន៍ និងចុះឈ្មោះចូលរៀន</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">ចូលរួមធ្វើតេស្តាយ៉ាងខ្លី និងបង់ប្រាក់សេវាសិក្សា (សម្រាប់សាលាឯកជន) ដើម្បីទទួលបានកាតសិស្ស។</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-gray-800 border-l-4 border-yellow-500 p-4 rounded-r-xl">
              <p className="text-sm text-yellow-800 dark:text-yellow-400 font-medium">
                💡 **បញ្ជាក់៖** ការចុះឈ្មោះសម្រាប់សិស្សានុសិស្សថ្នាក់រដ្ឋគឺអនុវត្តតាមកាលបរិច្ឆេទកំណត់របស់ក្រសួងអប់រំ យុវជន និងកីឡា។
              </p>
            </div>
          </div>

          {/* ផ្នែកខាងស្តាំ៖ ទម្រង់ដាក់ពាក្យអនឡាញ (Online Application Form) */}
          <div className="lg:col-span-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-6">ទម្រង់ចុះឈ្មោះតាមអនឡាញ</h3>
            
            {submitted ? (
              <div className="bg-green-50 dark:bg-gray-900 border border-green-200 dark:border-gray-700 text-green-800 dark:text-green-400 p-6 rounded-xl text-center space-y-3">
                <div className="text-4xl">🎉</div>
                <h4 className="font-bold text-lg">ដាក់ពាក្យបានជោគជ័យ!</h4>
                <p className="text-sm">អរគុណសម្រាប់ការចុះឈ្មោះ។ មន្ត្រីខុទ្ទកាល័យសាលានឹងទាក់ទងត្រឡប់ទៅអ្នកវិញឆាប់ៗនេះ។</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-sm text-blue-600 dark:text-blue-400 font-semibold underline hover:text-blue-800"
                >
                  ចុះឈ្មោះសិស្សផ្សេងទៀត
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">ឈ្មោះ (Name)</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="ឧ. ចាន់ ដារ៉ា" 
                    className="w-full px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>

                {/* Gender and Age */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">ភេទ (Gender)</label>
                    <select className="w-full px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none">
                      <option value="Male">ប្រុស (Male)</option>
                      <option value="Female">ស្រី (Female)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">អាយុ (Age)</label>
                    <input 
                      type="number" 
                      required 
                      placeholder="ឧ. 15" 
                      className="w-full px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Major and Score */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">ជំនាញ/កម្រិតសិក្សា (Major)</label>
                    <select className="w-full px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none">
                      <option>អនុវិទ្យាល័យ (ថ្នាក់ទី ៧-៩)</option>
                      <option>វិទ្យាល័យ វិទ្យាសាស្ត្រ (ថ្នាក់ទី ១០-១២)</option>
                      <option>វិទ្យាល័យ សង្គមសាស្ត្រ (ថ្នាក់ទី ១០-១២)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">ពិន្ទុ ឬលទ្ធផលសสอบ (Score)</label>
                    <input 
                      type="text" 
                      placeholder="ឧ. និទ្ទេស A ឬ ភាគរយ" 
                      className="w-full px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">អាសយដ្ឋាន (Address)</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="ឧ. ភ្នំពេញ" 
                    className="w-full px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-md transition duration-300 mt-2"
                >
                  បញ្ជូនពាក្យចុះឈ្មោះ
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Admissions;