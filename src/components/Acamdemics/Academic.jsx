import React from 'react';
import { kh } from '../../translate/Khmer';
import { en } from '../../translate/English';

const Academic = ({ lang }) => {
  // ជ្រើសរើសភាសាដោយសុវត្ថិភាព (ប្រសិនបើ lang ស្មើ 'EN' យក en បើមិនចឹងទេយក kh)
  const currentLangData = (lang === 'EN') ? en : kh;
  
  // ទាញយកเฉพาะ object academics (ការពារការធ្លាក់ជា undefined ឬ object ខុស)
  const t = currentLangData?.academics || {};

  return (
    <section id="academics" className="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-khmer transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ចំណងជើងផ្នែក (Section Header) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-3">
            {t.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-base sm:text-lg">
            {t.description}
          </p>
        </div>

        {/* កាតបង្ហាញកម្រិតសិក្សា (Grid Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* ១. កម្រិតអនុវិទ្យាល័យ */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t.middleSchoolTitle}</h3>
              <p className="text-sm font-semibold text-primary mb-4">{t.middleSchoolGrades}</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                {t.middleSchoolDesc}
              </p>
            </div>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 pt-4">
              {Array.isArray(t.middleSchoolPoints) && t.middleSchoolPoints.map((point, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ២. កម្រិតវិទ្យាល័យ (វិទ្យាសាស្ត្រ) */}
          <div className="bg-primary text-white rounded-2xl p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 bg-amber-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-bl-lg">
              {t.popularBadge}
            </div>
            <div>
              <div className="w-14 h-14 bg-white/10 text-amber-300 rounded-xl flex items-center justify-center mb-6 border border-white/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t.scienceTitle}</h3>
              <p className="text-sm font-semibold text-amber-300 mb-4">{t.scienceGrades}</p>
              <p className="text-gray-100 text-sm leading-relaxed mb-6">
                {t.scienceDesc}
              </p>
            </div>
            <ul className="space-y-2 text-sm text-gray-100 border-t border-white/20 pt-4">
              {Array.isArray(t.sciencePoints) && t.sciencePoints.map((point, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-amber-300 font-bold">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ៣. កម្រិតវិទ្យាល័យ (សង្គមសាស្ត្រ) */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-amber-100 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t.socialTitle}</h3>
              <p className="text-sm font-semibold text-amber-600 dark:text-amber-400 mb-4">{t.socialGrades}</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                {t.socialDesc}
              </p>
            </div>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 pt-4">
              {Array.isArray(t.socialPoints) && t.socialPoints.map((point, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-amber-600 dark:text-amber-400 font-bold">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Academic;