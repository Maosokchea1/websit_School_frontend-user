import React from 'react';
import { User, Phone, Mail, Award } from 'lucide-react';

const StaffDirectory = ({ lang }) => {
    const staffList = [
        {
            nameKH: 'លោក ...',
            nameEN: 'Mr. ...',
            roleKH: 'នាយកសាលា',
            roleEN: 'School Principal',
            phone: '+855 12 345 678',
            email: 'principal@hunsensnoul.edu.kh'
        },
        {
            nameKH: 'លោកគ្រូ / អ្នកគ្រូ ...',
            nameEN: 'Mr. / Ms. ...',
            roleKH: 'នាយករងរដ្ឋបាល',
            roleEN: 'Deputy Principal',
            phone: '+855 12 987 654',
            email: 'admin@hunsensnoul.edu.kh'
        },
        {
            nameKH: 'លោកគ្រូ / អ្នកគ្រូ ...',
            nameEN: 'Mr. / Ms. ...',
            roleKH: 'ប្រធានការិយាល័យសិក្សាធិការ',
            roleEN: 'Head of Academic Office',
            phone: '+855 11 222 333',
            email: 'academic@hunsensnoul.edu.kh'
        },
        {
            nameKH: 'លោកគ្រូ / អ្នកគ្រូ ...',
            nameEN: 'Mr. / Ms. ...',
            roleKH: 'គ្រូបង្រៀនមុខវិជ្ជាខ្មែរ / គណិតវិទ្យា',
            roleEN: 'Teacher of Khmer / Math',
            phone: '+855 10 444 555',
            email: 'teacher@hunsensnoul.edu.kh'
        }
    ];

    return (
        <div className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 dark:text-white mb-4">
                        {lang === 'KH' ? 'បញ្ជីឈ្មោះបុគ្គលិក និងគណៈគ្រប់គ្រង' : 'Staff Directory'}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        {lang === 'KH' 
                            ? 'ស្វែងយល់ពីថ្នាក់ដឹកនាំ លោកគ្រូ អ្នកគ្រូ និងបុគ្គលិកបម្រើការងារនៅវិទ្យាល័យ ហ៊ុន សែន ស្នួល។' 
                            : 'Meet our leadership, teachers, and staff members at Hun Sen Snoul High School.'}
                    </p>
                </div>

                {/* Staff Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {staffList.map((staff, index) => (
                        <div 
                            key={index} 
                            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center"
                        >
                            <div className="w-20 h-20 bg-blue-50 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                                <User className="w-10 h-10" />
                            </div>
                            
                            <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-1">
                                {lang === 'KH' ? staff.nameKH : staff.nameEN}
                            </h3>
                            
                            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4 flex items-center justify-center">
                                <Award className="w-4 h-4 mr-1" />
                                {lang === 'KH' ? staff.roleKH : staff.roleEN}
                            </p>

                            <div className="w-full border-t border-gray-100 dark:border-gray-700 pt-4 space-y-2 text-left">
                                <div className="flex items-center text-xs text-gray-600 dark:text-gray-300">
                                    <Phone className="w-3.5 h-3.5 mr-2 text-gray-400" />
                                    <span>{staff.phone}</span>
                                </div>
                                <div className="flex items-center text-xs text-gray-600 dark:text-gray-300 truncate">
                                    <Mail className="w-3.5 h-3.5 mr-2 text-gray-400 flex-shrink-0" />
                                    <span className="truncate">{staff.email}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default StaffDirectory;