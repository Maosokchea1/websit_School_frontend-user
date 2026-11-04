import React from 'react';
import { Palette, Music, Theater, Camera, BookOpen, Award } from 'lucide-react';

const ArtsAndCulture = ({ lang }) => {
  // ទិន្នន័យសម្រាប់បង្ហាញផ្នែកសិល្បៈ និងវប្បធម៌
  const activities = [
    {
      icon: <Music className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      titleKH: 'តន្ត្រី និងការច្រៀង',
      titleEN: 'Music & Choir',
      descKH: 'បណ្តុះបណ្តាលជំនាញលេងឧបករណ៍ភ្លេងបុរាណ-សម័យ និងការច្រៀងជាក្រុមប្រកបដោយទេពកោសល្យ។',
      descEN: 'Training in traditional and modern instruments as well as talented choir performances.'
    },
    {
      icon: <Theater className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      titleKH: 'របាំ និងក្បាច់រាំបុរាណ',
      titleEN: 'Traditional & Modern Dance',
      descKH: 'ថែរក្សា និងអភិរក្សវប្បធម៌ជាតិ តាមរយៈការហាត់រាំរបាំព្រះរាជទ្រព្យ និងរបាំប្រជាប្រិយផ្សេងៗ។',
      descEN: 'Preserving national culture through classical royal ballet and various folk dances.'
    },
    {
      icon: <Palette className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      titleKH: 'គំនូរ និងសិល្បៈហត្ថកម្ម',
      titleEN: 'Painting & Crafts',
      descKH: 'លើកទឹកចិត្តដល់ការច្នៃប្រឌិតគំនិតថ្មីៗ តាមរយៈសិល្បៈគំនូរ ការចម្លាក់ និងការតុបតែងផ្សេងៗ។',
      descEN: 'Encouraging creative thinking through painting, sculpture, and decorative arts.'
    },
    {
      icon: <Camera className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      titleKH: 'ថតរូប និងមេឌៀឌីជីថល',
      titleEN: 'Photography & Digital Media',
      descKH: 'សិក្សាពីបច្ចេកទេសថតរូប ការកែច្នៃវីដេអូ និងការផលិតមាតិកាអប់រំបែបសម័យថ្មី។',
      descEN: 'Learning photography techniques, video editing, and modern educational content creation.'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      titleKH: 'កវីនិពន្ធ និងការនិយាយជាសាធារណៈ',
      titleEN: 'Literature & Public Speaking',
      descKH: 'បង្កើនសមត្ថភាពแต่งអត្ថបទ កំណាព្យ និងការនិយាយក្នុងទីសាធារណៈដើម្បីភាពក្លាហាន។',
      descEN: 'Enhancing skills in writing, poetry, and public speaking to build confidence.'
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      titleKH: 'មហោស្រពសិល្បៈប្រចាំឆ្នាំ',
      titleEN: 'Annual Arts Festival',
      descKH: 'កម្មវិធីតាំងពិព័រណ៍ និងការប្រកួតប្រជែងសម្តែងសិល្បៈធំប្រចាំឆ្នាំរបស់សាលា។',
      descEN: 'The school’s signature annual exhibition and performing arts competition event.'
    }
  ];

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 dark:text-white mb-4">
            {lang === 'KH' ? 'សិល្បៈ និងវប្បធម៌' : 'Arts & Culture'}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {lang === 'KH' 
              ? 'សាលារៀនរបស់យើងផ្តល់សារៈសំខាន់យ៉ាងខ្លាំងដល់ការអភិវឌ្ឍស្មារតី ការច្នៃប្រឌិត និងការថែរក្សាអត្តសញ្ញាណវប្បធម៌ជាតិតាមរយៈកម្មវិធីសិល្បៈសម្បូរបែប។' 
              : 'Our school places great importance on mental development, creativity, and preserving national cultural identity through rich arts programs.'}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((item, index) => (
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
            {lang === 'KH' ? 'ចូលរួមជាមួយក្លឹបសិល្បៈរបស់យើងថ្ងៃនេះ!' : 'Join Our Arts Club Today!'}
          </h3>
          <p className="max-w-2xl mx-auto text-blue-100 mb-6 text-sm sm:text-base">
            {lang === 'KH'
              ? 'សិស្សានុសិស្សដែលមានចំណាប់អារម្មណ៍អាចចុះឈ្មោះចូលរួមក្នុងក្រុមសិល្បៈ និងវប្បធម៌របស់សាលាដោយសេរី។'
              : 'Students interested are welcome to sign up and join the school’s arts and culture groups.'}
          </p>
        </div>

      </div>
    </div>
  );
};

export default ArtsAndCulture;