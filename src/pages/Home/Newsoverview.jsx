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
    <section id="news" className={`py-16 sm:py-24 lg:py-32 bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300 relative overflow-hidden ${lang === 'KH' ? 'font-khmer' : 'font-sans'}`}>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none"></div>

      {/* ✅ កែទៅជា max-w-[1400px] ដើម្បីឱ្យស៊ីគ្នាជាមួយ Header */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <span className="text-blue-600 dark:text-yellow-400 font-semibold uppercase tracking-wider text-xs sm:text-sm bg-blue-50 dark:bg-gray-800 px-4 py-1.5 rounded-full border border-blue-200 dark:border-gray-700 shadow-sm inline-block">
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
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                <div className="relative h-48 sm:h-52 overflow-hidden cursor-pointer" onClick={handleReadMore}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  <span className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-blue-600/95 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    {item.category}
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-2">📅 {item.date}</p>
                  <h3 
                    onClick={handleReadMore}
                    className="text-base sm:text-lg font-bold text-blue-950 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-yellow-400 transition cursor-pointer leading-snug line-clamp-2"
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