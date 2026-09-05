import React from 'react';

const ClubsOrganizations = ({ lang }) => {
  return (
    <div className={`py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300 ${lang === 'KH' ? 'font-khmer' : 'font-sans'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ចំណងជើងផ្នែក */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 dark:text-yellow-400 font-semibold uppercase tracking-wider text-sm bg-blue-50 dark:bg-gray-800 px-3 py-1 rounded-full border border-blue-200 dark:border-gray-700 shadow-sm">
            {lang === 'KH' ? 'ក្លឹប និងអង្គភាពសិស្ស' : 'Clubs & Student Organizations'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 dark:text-white mt-3">
            {lang === 'KH' ? 'សកម្មភាពក្រៅម៉ោងសិក្សា និងក្លឹបសិស្ស' : 'Extracurricular Activities & Student Clubs'}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4 text-base sm:text-lg leading-relaxed">
            {lang === 'KH' 
              ? 'ស្វែងយល់ពីក្លឹបផ្សេងៗដែលជួយអភិវឌ្ឍន៍ជំនាញ ភាពជាអ្នកដឹកនាំ និងទេពកោសល្យរបស់សិស្សានុសិស្ស។' 
              : 'Explore various clubs that help develop students\' skills, leadership, and talents.'}
          </p>
        </div>

        {/* បញ្ជីបង្ហាញក្លឹបផ្សេងៗ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* ក្លឹបទី ១ */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-3">
              {lang === 'KH' ? 'ក្លឹបវិទ្យាសាស្ត្រ និងបច្ចេកវិទ្យា' : 'Science & Tech Club'}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {lang === 'KH' 
                ? 'សម្រាប់សិស្សដែលស្រឡាញ់ការពិសោធន៍ ការបង្កើតថ្មី និងការសរសេរកូដកម្មវិធីកុំព្យូទ័រ។' 
                : 'For students who love experiments, innovation, and computer programming.'}
            </p>
          </div>

          {/* ក្លឹបទី ២ */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-3">
              {lang === 'KH' ? 'ក្លឹបតន្ត្រី និងសិល្បៈ' : 'Music & Arts Club'}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {lang === 'KH' 
                ? 'កន្លែងបញ្ចេញសមត្ថភាពផ្នែកតន្ត្រី ការច្រៀង គូរគំនូរ និងការសម្ដែងសិល្បៈផ្សេងៗ។' 
                : 'A place to showcase musical, vocal, painting, and various artistic performance talents.'}
            </p>
          </div>

          {/* ក្លឹបទី ៣ */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-3">
              {lang === 'KH' ? 'ក្លឹបកីឡា និងសុខភាព' : 'Sports & Fitness Club'}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {lang === 'KH' 
                ? 'ថែរក្សាសុខភាព ពង្រឹងកម្លាំងកាយ និងស្មារតីសាមគ្គីភាពតាមរយៈប្រភេទកីឡាជាច្រើន។' 
                : 'Maintain health, physical strength, and solidarity spirit through various sports.'}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ClubsOrganizations;