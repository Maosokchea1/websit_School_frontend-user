import React from 'react';

const Sports = ({ lang }) => {
  return (
    <div>
      <div className={`py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300 ${lang === 'KH' ? 'font-khmer' : 'font-sans'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* ចំណងជើងផ្នែក */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 dark:text-yellow-400 font-semibold uppercase tracking-wider text-sm bg-blue-50 dark:bg-gray-800 px-3 py-1 rounded-full border border-blue-200 dark:border-gray-700 shadow-sm">
              {lang === 'KH' ? 'កីឡា និងសុខភាព' : 'Sports & Athletics'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 dark:text-white mt-3">
              {lang === 'KH' ? 'ការអភិវឌ្ឍរាងកាយ និងស្មារតីកីឡា' : 'Physical Development & Sportsmanship'}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-4 text-base sm:text-lg leading-relaxed">
              {lang === 'KH' 
                ? 'សាលារបស់យើងផ្តល់សារៈសំខាន់យ៉ាងខ្លាំងដល់សុខភាពផ្លូវកាយ និងផ្លូវចិត្តរបស់សិស្សានុសិស្ស តាមរយៈកម្មវិធីកីឡាផ្សេងៗ។' 
                : 'Our school places great importance on the physical and mental health of students through various sports programs.'}
            </p>
          </div>

          {/* បញ្ជីបង្ហាញប្រភេទកីឡា */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* កីឡាទី ១ */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-3">
                {lang === 'KH' ? 'បាល់ទាត់' : 'Football'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {lang === 'KH' 
                  ? 'ពង្រឹងស្មារតីសហការជាក្រុម កម្លាំងកាយ និងភាពរហ័សរហួននៅលើទីលានបាល់ទាត់។' 
                  : 'Strengthen teamwork spirit, physical strength, and agility on the football field.'}
              </p>
            </div>

            {/* កីឡាទី ២ */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-3">
                {lang === 'KH' ? 'បាល់បោះ' : 'Basketball'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {lang === 'KH' 
                  ? 'អភិវឌ្ឍការសម្របសម្រួលចលនារាងកាយ ការគិតឆាប់រហ័ស និងបច្ចេកទេសលេងជាក្រុម។' 
                  : 'Develop physical coordination, quick thinking, and teamwork techniques.'}
              </p>
            </div>

            {/* កីឡាទី ៣ */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-3">
                {lang === 'KH' ? 'អត្តពលកម្ម និងរត់ប្រណាំង' : 'Athletics & Track'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {lang === 'KH' 
                  ? 'បង្កើនភាពអត់ធ្មត់ កម្លាំងស៊ូ និងសុខភាពរាងកាយឱ្យបានមាំមួនប្រចាំថ្ងៃ។' 
                  : 'Increase endurance, stamina, and maintain a robust daily physical health.'}
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Sports;