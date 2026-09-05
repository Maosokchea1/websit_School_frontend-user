import React from 'react';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

const Events = () => {
  // ទិន្នន័យព្រឹត្តិការណ៍គំរូរបស់សាលា
  const schoolEvents = [
    {
      id: 1,
      title: 'ពិធីប្រកួតប្រជែងគណិតវិទ្យាទូទាំងសាលា',
      date: '១៥ តុលា ២០២៦',
      time: 'ម៉ោង ០៨:០០ ព្រឹក',
      location: 'សាលប្រជុំធំ (Hall A)',
      category: 'ការសិក្សា',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
      description: 'ការប្រកួតប្រជែងជ្រើសរើសសិស្សពូកែផ្នែកគណិតវិទ្យាប្រចាំឆ្នាំសិក្សា ដើម្បីត្រៀមប្រកួតថ្នាក់ខេត្ត និងក្រុង។'
    },
    {
      id: 2,
      title: 'ទិវាបរិស្ថាន និងកិច្ចការសហគមន៍',
      date: '២២ តុលា ២០២៦',
      time: 'ម៉ោង ០៧:៣០ ព្រឹក',
      location: 'បរិវេណសាលារៀន',
      category: 'សកម្មភាពសង្គម',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
      description: 'សិស្សានុសិស្ស និងលោកគ្រូអ្នកគ្រូនឹងរួមគ្នាសម្អាតបរិស្ថាន និងปลูกដើមឈើលម្អជុំវិញសាលា។'
    },
    {
      id: 3,
      title: 'កម្មវិធីតាំងពិព័រណ៍វិទ្យាសាស្ត្រ និងបច្ចេកវិទ្យា',
      date: '០៥ វិច្ឆិកា ២០២៦',
      time: 'ម៉ោង ០៨:៣០ ព្រឹក',
      location: 'មន្ទីរពិសោធន៍ និងទីធ្លាខាងមុខ',
      category: 'បច្ចេកវិទ្យា',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
      description: 'ការដាក់បង្ហាញស្នាដៃ និងគម្រោងពិសោធន៍វិទ្យាសាស្ត្ររបស់សិស្សានុសិស្សថ្នាក់ទី១០ ដល់ទី១២។'
    }
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-300 font-khmer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-amber-600 dark:text-amber-400 uppercase bg-amber-50 dark:bg-amber-950/50 rounded-full border border-amber-100 dark:border-amber-900">
            ព្រឹត្តិការណ៍នាពេលខាងមុខ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            កាលវិភាគព្រឹត្តិការណ៍ និងសកម្មភាពសាលា
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            តាមដានព័ត៌មាន និងកាលបរិច្ឆេទនៃព្រឹត្តិការណ៍សំខាន់ៗដែលនឹងប្រព្រឹត្តទៅក្នុងសាលារៀនរបស់យើង។
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schoolEvents.map((event) => (
            <div 
              key={event.id}
              className="group bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl shadow-gray-100 dark:shadow-none border border-gray-100 dark:border-gray-700/60 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2"
            >
              <div>
                {/* Event Image */}
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3.5 py-1.5 text-xs font-semibold bg-white/90 dark:bg-gray-900/90 backdrop-blur-md text-amber-600 dark:text-amber-400 rounded-xl shadow-sm">
                    {event.category}
                  </span>
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-amber-500" /> {event.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-amber-500" /> {event.time}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {event.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 font-medium pt-3 border-t border-gray-100 dark:border-gray-700/60">
                    <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="px-6 pb-6 pt-0">
                <button 
                  onClick={() => alert(`បានចុះឈ្មោះចូលរួមព្រឹត្តិការណ៍: ${event.title}`)}
                  className="w-full py-3 bg-gray-50 dark:bg-gray-700/50 hover:bg-amber-600 hover:text-white dark:hover:bg-amber-600 text-gray-700 dark:text-gray-200 font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 text-sm group/btn"
                >
                  ចូលរួមព្រឹត្តិការណ៍នេះ
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Events;