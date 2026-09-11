import React from 'react';
import { kh } from '../../translate/Khmer';
import { en } from '../../translate/English';

const Academic = ({ lang }) => {
  // ជ្រើសរើសភាសាដោយសុវត្ថិភាព
  const currentLangData = (lang === 'EN') ? en : kh;
  const t = currentLangData?.academics || {};

  // ទិន្នន័យសម្រាប់កាតនីមួយៗ ដើម្បីកាត់បន្ថយការសរសេរកូដជាន់គ្នា (DRY)
  const academicCards = [
    {
      title: t.middleSchoolTitle,
      grades: t.middleSchoolGrades,
      desc: t.middleSchoolDesc,
      points: t.middleSchoolPoints,
      isFeatured: false,
      iconBg: 'bg-primary/10 text-primary',
      badgeColor: '',
      checkColor: 'text-primary font-bold',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: t.scienceTitle,
      grades: t.scienceGrades,
      desc: t.scienceDesc,
      points: t.sciencePoints,
      isFeatured: true, // កាតពិសេស (Highlight)
      iconBg: 'bg-white/10 text-amber-300 border border-white/20',
      badgeColor: 'bg-amber-400 text-gray-900',
      checkColor: 'text-amber-300 font-bold',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: t.socialTitle,
      grades: t.socialGrades,
      desc: t.socialDesc,
      points: t.socialPoints,
      isFeatured: false,
      iconBg: 'bg-amber-100 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400',
      badgeColor: '',
      checkColor: 'text-amber-600 dark:text-amber-400 font-bold',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  return (
    <section id="academics" className="py-20 bg-gray-50/50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-khmer transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ចំណងជើងផ្នែក (Section Header) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-xs sm:text-sm bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 inline-block shadow-sm">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-4 tracking-tight">
            {t.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-base sm:text-lg leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* កាតបង្ហាញកម្រិតសិក្សា (Grid Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {academicCards.map((card, index) => (
            <div 
              key={index}
              className={`rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group ${
                card.isFeatured 
                  ? 'bg-primary text-white shadow-xl shadow-primary/20 hover:scale-[1.02]' 
                  : 'bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700/80 shadow-sm hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              {/* បដាពិសេស (Popular Badge) */}
              {card.isFeatured && t.popularBadge && (
                <div className={`absolute top-0 right-0 text-xs font-bold px-4 py-1.5 rounded-bl-2xl shadow-sm ${card.badgeColor}`}>
                  {t.popularBadge}
                </div>
              )}

              <div>
                {/* រូបតំណាង Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform duration-300 group-hover:scale-110 ${card.iconBg}`}>
                  {card.icon}
                </div>

                {/* ចំណងជើង និងកម្រិតថ្នាក់ */}
                <h3 className={`text-xl font-bold mb-1 ${card.isFeatured ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                  {card.title}
                </h3>
                <p className={`text-sm font-semibold mb-4 ${card.isFeatured ? 'text-amber-300' : 'text-primary dark:text-primary'}`}>
                  {card.grades}
                </p>

                {/* ការពិពណ៌នា */}
                <p className={`text-sm leading-relaxed mb-6 ${card.isFeatured ? 'text-gray-100' : 'text-gray-600 dark:text-gray-300'}`}>
                  {card.desc}
                </p>
              </div>

              {/* បញ្ជីចំណុចសំខាន់ៗ (Points List) */}
              <ul className={`space-y-2.5 text-sm pt-4 border-t ${card.isFeatured ? 'text-gray-100 border-white/20' : 'text-gray-700 dark:text-gray-300 border-gray-100 dark:border-gray-700/80'}`}>
                {Array.isArray(card.points) && card.points.map((point, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5">
                    <span className={`mt-0.5 ${card.checkColor}`}>✓</span>
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Academic;