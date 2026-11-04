import React from 'react';

const FieldTrips = ({ lang }) => {
  return (
    <div>
      <div className={`py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300 ${lang === 'KH' ? 'font-khmer' : 'font-sans'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* ចំណងជើងផ្នែក */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 dark:text-yellow-400 font-semibold uppercase tracking-wider text-sm bg-blue-50 dark:bg-gray-800 px-3 py-1 rounded-full border border-blue-200 dark:border-gray-700 shadow-sm">
              {lang === 'KH' ? 'ទស្សនកិច្ចសិក្សា' : 'Field Trips'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 dark:text-white mt-3">
              {lang === 'KH' ? 'ការរៀនសូត្រតាមរយៈបទពិសោធន៍ផ្ទាល់' : 'Learning Through Real-World Experiences'}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-4 text-base sm:text-lg leading-relaxed">
              {lang === 'KH' 
                ? 'សាលារៀបចំកម្មវិធីទស្សនកិច្ចសិក្សានៅតាមស្ថាប័ន រោងចក្រ និងទីកន្លែងប្រវត្តិសាស្ត្រ ដើម្បីឱ្យសិស្សទទួលបានចំណេះដឹងជាក់ស្តែង។' 
                : 'The school organizes field trips to institutions, factories, and historical sites to provide students with practical knowledge.'}
            </p>
          </div>

          {/* បញ្ជីបង្ហាញទស្សនកិច្ចសិក្សា */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* ទស្សនកិច្ចទី ១ */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-3">
                {lang === 'KH' ? 'ទស្សនកិច្ចសារមន្ទីរជាតិ' : 'National Museum Visit'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {lang === 'KH' 
                  ? 'ស្វែងយល់ពីប្រវត្តិសាស្ត្រ វប្បធម៌ និងបេតិកភណ្ឌដ៏សម្បូរបែបរបស់ព្រះរាជាណាចក្រកម្ពុជា។' 
                  : 'Explore the rich history, culture, and heritage of the Kingdom of Cambodia.'}
              </p>
            </div>

            {/* ទស្សនកិច្ចទី ២ */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-3">
                {lang === 'KH' ? 'ទស្សនកិច្ចរោងចក្របច្ចេកវិទ្យា' : 'Tech Factory Tour'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {lang === 'KH' 
                  ? 'observing ការផលិត និងការអនុវត្តជាក់ស្តែងនៃបច្ចេកវិទ្យាទំនើបក្នុងឧស្សាហកម្ម។' 
                  : 'Observing production and the practical application of modern technology in industry.'}
              </p>
            </div>

            {/* ទស្សនកិច្ចទី ៣ */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-3">
                {lang === 'KH' ? 'ទស្សនកិច្ចកសិដ្ឋានធម្មជាតិ' : 'Eco-Farm Visit'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {lang === 'KH' 
                  ? 'យល់ដឹងពីកសិកម្មបែបទំនើប ការការពារបរិស្ថាន និងការអភិរក្សធនធានធម្មជាតិ។' 
                  : 'Understanding modern agriculture, environmental protection, and natural resource conservation.'}
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default FieldTrips;