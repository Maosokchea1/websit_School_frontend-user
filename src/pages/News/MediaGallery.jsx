import React, { useState } from 'react';
import { Eye } from 'lucide-react';

const MediaGallery = () => {
  const [activeTab, setActiveTab] = useState('all');

  // ទិន្នន័យគំរូរូបភាព និងវីដេអូសកម្មភាពសាលា
  const mediaItems = [
    { id: 1, title: 'ពិធីបុណ្យបើកបវេសនកាលថ្មី', type: 'image', category: 'events', url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'សកម្មភាពពិសោធន៍ក្នុងមន្ទីរពិសោធន៍វិទ្យាសាស្ត្រ', type: 'image', category: 'study', url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'ការប្រកួតកីឡាបាល់ទាត់ប្រចាំឆ្នាំ', type: 'image', category: 'sports', url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'ការប្រជុំក្រុមប្រឹក្សាកុមារ និងសិស្សានុសិស្ស', type: 'image', category: 'events', url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80' },
    { id: 5, title: 'ម៉ោងសិក្សាក្នុងបណ្ណាល័យឌីជីថល', type: 'image', category: 'study', url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80' },
    { id: 6, title: 'កម្មវិធីទស្សនកិច្ចសិក្សាគំរូ', type: 'image', category: 'events', url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80' },
  ];

  // ប៊ូតុងត្រងប្រភេទមេឌៀ
  const tabs = [
    { id: 'all', label: 'ទាំងអស់ (All)' },
    { id: 'events', label: 'កម្មវិធីសាលា (Events)' },
    { id: 'study', label: 'ការសិក្សា (Study)' },
    { id: 'sports', label: 'កីឡា (Sports)' },
  ];

  const filteredMedia = activeTab === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeTab);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300 font-khmer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-pink-600 dark:text-pink-400 uppercase bg-pink-50 dark:bg-pink-950/50 rounded-full border border-pink-100 dark:border-pink-900">
            វិចិត្រសាលរូបភាព
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            សកម្មភាព និងមេឌៀសាលា
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            ទិដ្ឋភាពជាក់ស្តែង និងសកម្មភាពនានារបស់សិស្សានុសិស្សក្នុងមជ្ឈដ្ឋានសាលារៀន។
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 flex-wrap mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all shadow-sm ${
                activeTab === tab.id
                  ? 'bg-pink-600 text-white shadow-pink-600/20 shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMedia.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg shadow-gray-100 dark:shadow-none border border-gray-100 dark:border-gray-700/60 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="inline-flex items-center gap-2 text-white text-sm font-medium bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl">
                    <Eye className="w-4 h-4" /> មើលរូបភាពលម្អិត
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MediaGallery;