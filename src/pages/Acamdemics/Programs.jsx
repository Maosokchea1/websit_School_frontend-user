import React from 'react';

const Programs = ({ lang }) => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300 font-khmer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {lang === 'KH' ? 'កម្មវិធីសិក្សា (Study Programs)' : 'Study Programs'}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            {lang === 'KH' 
              ? 'កម្មវិធីសិក្សាViolអភិវឌ្ឍន៍ចំណេះដឹងទូទៅ និងជំនាញបច្ចេកទេសទំនើបស្របតាមស្តង់ដារជាតិ និងអន្តរជាតិ។' 
              : 'Comprehensive study programs designed to foster academic excellence and modern technical skills.'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Programs;