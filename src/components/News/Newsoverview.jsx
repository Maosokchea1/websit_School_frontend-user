import React from 'react';
import { kh } from '../../translate/Khmer';
import { en } from '../../translate/English';

const News = ({ lang, setActiveTab }) => {
  const t = lang === 'KH' ? kh : en;

  // ទិន្នន័យគំរូសម្រាប់ព័ត៌មានសាលា
  const newsList = [
    {
      id: 1,
      title: lang === 'KH' ? 'កិច្ចប្រជុំបូកសរុបលទ្ធផលការសិក្សាឆមាសទី១ និងទិសដៅឆមាសទី២' : 'First Semester Summary Meeting and Second Semester Directions',
      category: lang === 'KH' ? 'សេចក្តីជូនដំណឹង' : 'Announcement',
      date: lang === 'KH' ? '២៥ កុម្ភៈ ២០២៦' : 'Feb 25, 2026',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop',
      excerpt: lang === 'KH' 
        ? 'សាលាបានរៀបចំកិច្ចប្រជុំបូកសរុបការងារសិក្សារបស់លោកគ្រូ-អ្នកគ្រូ និងមាតាបិតាសិស្ស ដើម្បីលើកកម្ពស់គុណភាពអប់រំទ្វេដង।'
        : 'The school organized a summary meeting of teachers and parents\' academic work to double the quality of education.',
    },
    {
      id: 2,
      title: lang === 'KH' ? 'កម្មវិធីប្រកួតកីឡាស្ដីពី "កីឡា សុខភាព និងសាមគ្គីភាពប្រចាំឆ្នាំ"' : 'Annual Sports Competition on "Sports, Health and Solidarity"',
      category: lang === 'KH' ? 'ព្រឹត្តិការណ៍សាលា' : 'School Event',
      date: lang === 'KH' ? '២០ កុម្ភៈ ២០២៦' : 'Feb 20, 2026',
      image: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=800&auto=format&fit=crop',
      excerpt: lang === 'KH'
        ? 'សិស្សានុសិស្សថ្នាក់អនុវិទ្យាល័យ និងវិទ្យាល័យ បានចូលរួមយ៉ាងសកម្មក្នុងការប្រកួតកីឡាបាល់ទាត់ បាល់បោះ និងអត្តពលកម្ម।'
        : 'Middle and high school students actively participated in football, basketball, and athletics competitions.',
    },
    {
      id: 3,
      title: lang === 'KH' ? 'ដំណឹងជ្រើសរើសសិស្សចូលរួមប្រកួតប្រជែងគណិតវិទ្យាថ្នាក់ខេត្ត/រាជធានី' : 'Selection Notice for Provincial/Municipal Mathematics Competition',
      category: lang === 'KH' ? 'ការសិក្សា' : 'Academics',
      date: lang === 'KH' ? '១៥ កុម្ភៈ ២០២៦' : 'Feb 15, 2026',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop',
      excerpt: lang === 'KH'
        ? 'គណៈកម្មការទ្រទ្រង់ការសិក្សាបានជ្រើសរើសសិស្សពូកែថ្នាក់ទី១២ ដើម្បីត្រៀមខ្លួនប្រកួតប្រជែងកម្រិតអន្តរស្ថាប័ន।'
        : 'The academic support committee has selected grade 12 outstanding students to prepare for inter-institutional competitions.',
    },
  ];

  // មុខងារសម្រាប់គ្រប់គ្រងការចុចអានព័ត៌មានលម្អិត
  const handleReadMore = (e) => {
    e.preventDefault();
    if (setActiveTab) {
      setActiveTab('news-overview'); // ប្តូរទៅកាន់ទំព័រព័ត៌មានសរុប
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="news" className={`py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300 ${lang === 'KH' ? 'font-khmer' : 'font-sans'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ចំណងជើងផ្នែក (Section Header) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 dark:text-yellow-400 font-semibold uppercase tracking-wider text-sm bg-blue-50 dark:bg-gray-800 px-3 py-1 rounded-full border border-blue-200 dark:border-gray-700 shadow-sm">
            {t?.newsBadge || "ព័ត៌មាន និងព្រឹត្តិការណ៍"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 dark:text-white mt-3">
            {t?.newsTitle || "សកម្មភាពថ្មីៗ និងសេចក្តីប្រកាសពីសាលា"}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4 text-base sm:text-lg leading-relaxed">
            {t?.newsSubtitle || "តាមដានព័ត៌មានចុងក្រោយ សេចក្តីជូនដំណឹង និងសកម្មភាពនានារបស់សិស្សានុសិស្ស និងលោកគ្រូ-អ្នកគ្រូនៅទីនេះ។"}
          </p>
        </div>

        {/* បញ្ជីកាតព័ត៌មាន (News Cards Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsList.map((item) => (
            <div 
              key={item.id} 
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* រូបភាពព័ត៌មាន */}
                <div className="relative h-48 overflow-hidden cursor-pointer" onClick={handleReadMore}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-blue-600/95 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {item.category}
                  </span>
                </div>

                {/* មាតិកាកាត */}
                <div className="p-6">
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-2">📅 {item.date}</p>
                  <h3 
                    onClick={handleReadMore}
                    className="text-lg font-bold text-blue-950 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-yellow-400 transition cursor-pointer leading-snug"
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              {/* ប៊ូតុងអានបន្ត */}
              <div className="px-6 pb-6 pt-2">
                <a 
                  href="#news" 
                  onClick={handleReadMore}
                  className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors group/link"
                >
                  <span>{t?.readMoreBtn || "អានបន្ថែម"}</span> 
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