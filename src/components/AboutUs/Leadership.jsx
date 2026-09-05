import React from 'react';

const Leadership = ({ lang }) => {
  // ព័ត៌មានថ្នាក់ដឹកនាំសាលាសម្រាប់ភាសាខ្មែរ និងអង់គ្លេស
  const content = {
    KH: {
      title: 'គណៈគ្រប់គ្រងសាលា',
      subtitle: 'ថ្នាក់ដឹកនាំ និងក្រុមប្រឹក្សាភិបាលនៃវិទ្យាល័យ ហ៊ុន សែន ស្នួល',
      leaders: [
        {
          name: 'លោក ឈ្មោះ នាយកសាលា',
          role: 'នាយកសាលា',
          desc: 'ដឹកនាំ និងគ្រប់គ្រងទូទៅលើកិច្ចការរដ្ឋបាល បង្រៀន និងអភិវឌ្ឍសាលា។',
          image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400' // Placeholder image
        },
        {
          name: 'លោកស្រី ឈ្មោះ នាយករង',
          role: 'នាយករងទទួលបន្ទុកកិច្ចការទូទៅ',
          desc: 'គ្រប់គ្រងផ្នែកអប់រំ បណ្តុះបណ្តាល និងកិច្ចការរដ្ឋបាលសិស្ស។',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
        },
        {
          name: 'លោក ឈ្មោះ នាយករង',
          role: 'នាយករងទទួលបន្ទុកបច្ចេកវិទ្យា និងហិរញ្ញវត្ថុ',
          desc: 'គ្រប់គ្រងកម្មវិធីសិក្សាថ្មីៗ បច្ចេកវិទ្យា និងកិច្ចការហិរញ្ញវត្ថុសាលា។',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
        }
      ]
    },
    EN: {
      title: 'School Leadership',
      subtitle: 'The administrative team and leadership of Hun Sen Snuol High School',
      leaders: [
        {
          name: 'Mr. School Director Name',
          role: 'School Principal',
          desc: 'Leading and managing overall administration, teaching, and school development.',
          image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400'
        },
        {
          name: 'Mrs. Vice Principal Name',
          role: 'Vice Principal of Academic Affairs',
          desc: 'Managing education, training programs, and student affairs.',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
        },
        {
          name: 'Mr. Vice Principal Name',
          role: 'Vice Principal of IT & Finance',
          desc: 'Overseeing modern learning programs, technology, and school finances.',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
        }
      ]
    }
  };

  const t = lang === 'EN' ? content.EN : content.KH;

  return (
    <section id="leadership" className="py-20 bg-gray-50 dark:bg-gray-900 font-khmer transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
            {t.title}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-3">
            {t.title}
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            {t.subtitle}
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.leaders.map((leader, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center"
            >
              {/* Profile Image */}
              <div className="relative w-28 h-28 mb-5 rounded-full overflow-hidden border-4 border-primary/20 shadow-inner">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & Role */}
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                {leader.name}
              </h3>
              <p className="text-sm text-primary font-semibold mb-3">
                {leader.role}
              </p>
              
              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                {leader.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Leadership;