import React from 'react';
import { Calendar, ArrowRight, Megaphone } from 'lucide-react';
import { kh } from '../../translate/Khmer';
import { en } from '../../translate/English';

const Announcements = ({ lang }) => {
  // ជ្រើសរើសហ្វាល់បកប្រែតាមភាសាដែលបានជ្រើសរើស
  const t = lang === 'KH' ? kh : en;

  return (
    <section id="announcements" className={`py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300 ${lang === 'KH' ? 'font-khmer' : 'font-sans'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-rose-600 dark:text-rose-400 uppercase bg-rose-50 dark:bg-rose-950/50 rounded-full border border-rose-100 dark:border-rose-900">
            {t.announcementsBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            {t.announcementsTitle}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            {t.announcementsSubtitle}
          </p>
        </div>

        {/* Announcements List / Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {t.schoolAnnouncements.map((item) => (
            <div 
              key={item.id}
              className="group bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl shadow-gray-100 dark:shadow-none border border-gray-100 dark:border-gray-700/60 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-rose-500/50"
            >
              <div>
                {/* Announcement Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Category & Urgent Badges over Image */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="px-3 py-1 text-xs font-semibold bg-white/90 dark:bg-gray-900/90 backdrop-blur-md text-rose-600 dark:text-rose-400 rounded-xl shadow-sm">
                      {item.category}
                    </span>
                    {item.urgent && (
                      <span className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold bg-amber-500 text-white rounded-xl shadow-sm">
                        <Megaphone className="w-3.5 h-3.5" /> {t.urgentBadge || "សំខាន់"}
                      </span>
                    )}
                  </div>
                </div>

                {/* Announcement Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 text-rose-500" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Read More Button */}
              <div className="px-6 pb-6 pt-0">
                <button 
                  onClick={() => alert(t.announcementAlertMsg(item.title))}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-600 hover:text-white dark:hover:bg-rose-600 text-rose-600 dark:text-rose-400 font-semibold rounded-2xl transition-all duration-300 text-sm group/link"
                >
                  {t.readMoreBtn}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Announcements;