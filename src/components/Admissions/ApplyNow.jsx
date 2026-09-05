import React from 'react';

const ApplyNow = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 mt-6 transition-colors duration-300">
      
      {/* Header Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Apply Now
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm sm:text-base">
        សូមបំពេញព័ត៌មានខាងក្រោមដើម្បីដាក់ពាក្យស្នើសុំចូលសិក្សាជាមួយស្ថាប័នរបស់យើង។
      </p>

      {/* Application Form */}
      <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">
                ឈ្មោះពេញ (Full Name)
              </label>
              <input
                type="text"
                placeholder="បញ្ចូលឈ្មោះរបស់អ្នក"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">
                អ៊ីមែល (Email Address)
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              />
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">
                លេខទូរស័ព្ទ (Phone Number)
              </label>
              <input
                type="tel"
                placeholder="012 345 678"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              />
            </div>

            {/* Major Selection */}
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">
                ជំនាញដែលចង់សិក្សា (Major)
              </label>
              <select
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              >
                <option value="">ជ្រើសរើសជំនាញ</option>
                <option value="it">វិទ្យាសាស្ត្រកុំព្យូទ័រ (Information Technology)</option>
                <option value="business">អភិបាលកិច្ច និងធុរកិច្ច (Business Administration)</option>
                <option value="english">អក្សរសាស្ត្រអង់គ្លេស (English Literature)</option>
                <option value="finance">ហិរញ្ញវត្ថុ និងធនាគារ (Finance & Banking)</option>
              </select>
            </div>
        </div>

        {/* Additional Comments */}
        <div>
          <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">
            មតិយោបល់ ឬសំណួរន្ថែម (Additional Notes)
          </label>
          <textarea
            rows="4"
            placeholder="សរសេរព័ត៌មានលម្អិតបន្ថែមនៅទីនេះ..."
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition duration-300"
        >
          ដាក់ពាក្យស្នើសុំឥឡូវនេះ (Submit Application)
        </button>
      </form>
    </div>
  );
};

export default ApplyNow;