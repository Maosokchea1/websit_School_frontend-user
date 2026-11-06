import React from 'react';
import { kh } from '../../translate/Khmer';
import { en } from '../../translate/English';

const News = ({ lang, setActiveTab }) => {
  const t = lang === 'KH' ? kh : en;

  // ទាញយកទិន្នន័យទាំងស្រុងពី Object បកប្រែនៅខាងក្រៅ (kh ឬ en)
  const newsList = [
    {
      id: 1,
      title: t?.news1Title,
      category: t?.news1Category,
      date: t?.news1Date,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
      excerpt: t?.news1Excerpt,
    },
    {
      id: 2,
      title: t?.news2Title,
      category: t?.news2Category,
      date: t?.news2Date,
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop',
      excerpt: t?.news2Excerpt,
    },
    {
      id: 3,
      title: t?.news3Title,
      category: t?.news3Category,
      date: t?.news3Date,
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop',
      excerpt: t?.news3Excerpt,
    },
  ];

  const handleReadMore = (e) => {
    e.preventDefault();
    if (setActiveTab) {
      setActiveTab('news-overview');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="news" className={`py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300 ${lang === 'KH' ? 'font-khmer' : 'font-sans'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-blue-600 dark:text-yellow-400 font-semibold uppercase tracking-wider text-xs sm:text-sm bg-blue-50 dark:bg-gray-800 px-3 py-1 rounded-full border border-blue-200 dark:border-gray-700 shadow-sm">
            {t?.newsBadge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-950 dark:text-white mt-3 sm:mt-4 tracking-tight leading-snug">
            {t?.newsTitle}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg leading-relaxed">
            {t?.newsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {newsList.map((item) => (
            <div 
              key={item.id} 
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-44 sm:h-48 overflow-hidden cursor-pointer" onClick={handleReadMore}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-blue-600/95 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full shadow">
                    {item.category}
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-2">📅 {item.date}</p>
                  <h3 
                    onClick={handleReadMore}
                    className="text-base sm:text-lg font-bold text-blue-950 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-yellow-400 transition cursor-pointer leading-snug"
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2">
                <a 
                  href="#news" 
                  onClick={handleReadMore}
                  className="inline-flex items-center text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors group/link"
                >
                  <span>{t?.readMoreBtn}</span> 
                  <span className="ml-1 transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default News;
