import React from 'react';
import { Heart, Trees, Users, BookOpen, ShieldCheck, Sparkles } from 'lucide-react';

function CommunityService({ lang }) {
  // ទិន្នន័យសម្រាប់បង្ហាញសកម្មភាពសង្គម
  const services = [
    {
      icon: <Trees className="w-8 h-8 text-green-600 dark:text-green-400" />,
      titleKH: 'យុទ្ធនាការปลูกដើមឈើ និងថែរក្សាបរិស្ថាន',
      titleEN: 'Tree Planting & Environmental Care',
      descKH: 'សិស្សានុសិស្សចូលរួមปลูกកូនឈើ ថែទាំសួនច្បារ និងសម្អាតបរិស្ថានជុំវិញសាលារៀននិងសហគមន៍។',
      descEN: 'Students participate in planting trees, maintaining gardens, and cleaning the environment around the school and community.'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600 dark:text-red-400" />,
      titleKH: 'កម្មវិធីសប្បុរសធម៌ និងជួយជនក្រីក្រ',
      titleEN: 'Charity & Supporting the Needy',
      descKH: 'ប្រមូលថវិកា សម្លៀកបំពាក់ និងសម្ភារសិក្សាដើម្បីជួយដល់គ្រួសារខ្វះខាត និងកុមារកំព្រា។',
      descEN: 'Collecting funds, clothes, and study materials to help disadvantaged families and orphans.'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      titleKH: 'បង្រៀនអក្សរ និងចំណេះដឹងដល់ក្មេងៗ',
      titleEN: 'Volunteer Tutoring for Kids',
      descKH: 'កម្មវិធីសិស្សស្ម័គ្រចិត្តចុះជួយបង្រៀនបន្ថែមដល់កុមារនៅតាមមូលដ្ឋានក្រីក្រក្នុងសហគមន៍។',
      descEN: 'Student volunteer programs to provide extra tutoring for children in local underserved communities.'
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
      titleKH: 'យុទ្ធនាការបរិច្ចាគឈាម',
      titleEN: 'Blood Donation Drives',
      descKH: 'សហការជាមួយមជ្ឈមណ្ឌលជាតិផ្តល់ឈាម ដើម្បីលើកកម្ពស់ស្មារតីជួយសង្គ្រោះជីវិតមនុស្ស។',
      descEN: 'Collaborating with the National Blood Center to promote the spirit of saving human lives.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
      titleKH: 'ការយល់ដឹងពីសុខភាព និងអនាម័យ',
      titleEN: 'Health & Hygiene Awareness',
      descKH: 'ចុះផ្សព្វផ្សាយពីរបៀបរស់នៅស្អាត ហូបស្អាត និងការថែទាំសុខភាពដល់ប្រជាពលរដ្ឋក្នុងសហគមន៍។',
      descEN: 'Spreading awareness on clean living, proper hygiene, and health care to community members.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
      titleKH: 'សកម្មភាពសេវាសហគមន៍ផ្សេងៗ',
      titleEN: 'Other Community Services',
      descKH: 'ចូលរួមជួយការងារសាធារណៈ កម្មវិធីបុណ្យប្រពៃណី និងសកម្មភាពមនុស្សធម៌ផ្សេងទៀត។',
      descEN: 'Participating in public works, traditional festivals, and other humanitarian activities.'
    }
  ];

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 dark:text-white mb-4">
            {lang === 'KH' ? 'សកម្មភាពសង្គម និងសប្បុរសធម៌' : 'Community Service'}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {lang === 'KH' 
              ? 'សាលារៀនរបស់យើងលើកទឹកចិត្តយ៉ាងខ្លាំងដល់សិស្សានុសិស្សឱ្យមានស្មារតីជួយយកអាសាគ្នា ការទទួលខុសត្រូវចំពោះសង្គម និងការកសាងសហគមន៍ដ៏ល្អប្រសើរ។' 
              : 'Our school strongly encourages students to cultivate a spirit of helpfulness, social responsibility, and building a better community.'}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col justify-between"
            >
              <div>
                <div className="p-3 bg-blue-50 dark:bg-gray-700 w-fit rounded-xl mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-950 dark:text-white">
                  {lang === 'KH' ? item.titleKH : item.titleEN}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {lang === 'KH' ? item.descKH : item.descEN}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action or footer note */}
        <div className="mt-16 bg-blue-900 text-white rounded-2xl p-8 sm:p-12 text-center shadow-lg">
          <h3 className="text-2xl font-bold mb-4">
            {lang === 'KH' ? 'រួមគ្នាដើម្បីសង្គមយើង!' : 'Together for Our Community!'}
          </h3>
          <p className="max-w-2xl mx-auto text-blue-100 mb-6 text-sm sm:text-base">
            {lang === 'KH'
              ? 'រាល់សកម្មភាពសង្គមទាំងអស់ គឺផ្តល់ឱកាសឱ្យសិស្សបានស្វែងយល់ពីតម្លៃនៃការចែករំលែក និងការសហការគ្នា។'
              : 'All community service activities provide students with opportunities to understand the value of sharing and collaboration.'}
          </p>
        </div>

      </div>
    </div>
  );
}

export default CommunityService;