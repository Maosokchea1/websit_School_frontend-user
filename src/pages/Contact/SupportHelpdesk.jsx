import React from 'react';
import { Mail, Phone, LifeBuoy, Clock } from 'lucide-react';

const SupportHelpdesk = ({ lang }) => {
    return (
        <div className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="w-16 h-16 bg-blue-50 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 dark:text-blue-400">
                        <LifeBuoy className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 dark:text-white mb-4">
                        {lang === 'KH' ? 'ជំនួយបច្ចេកទេស និងសេវា Helpdesk' : 'Support / Helpdesk'}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        {lang === 'KH' 
                            ? 'មានបញ្ហាក្នុងការប្រើប្រាស់វេបសាយ ឬត្រូវការជំនួយពាក់ព័ន្ធនឹងប្រព័ន្ធសាលារៀន? សូមទាក់ទងមកកាន់ក្រុមការងារបច្ចេកទេសរបស់យើងខ្ញុំ។' 
                            : 'Having trouble using the website or need assistance regarding school systems? Contact our technical team.'}
                    </p>
                </div>

                {/* Support Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    
                    {/* Technical Support */}
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center">
                        <div className="p-4 bg-blue-50 dark:bg-gray-700 rounded-full mb-4 text-blue-600 dark:text-blue-400">
                            <Mail className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-2">
                            {lang === 'KH' ? 'អ៊ីមែលជំនួយបច្ចេកទេស' : 'Technical Support Email'}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">support@hunsensnoul.edu.kh</p>
                        <span className="text-xs text-gray-400">
                            {lang === 'KH' ? 'ឆ្លើយតបក្នុងរយៈពេល ២៤ម៉ោង' : 'Response within 24 hours'}
                        </span>
                    </div>

                    {/* Hotline Helpdesk */}
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center">
                        <div className="p-4 bg-blue-50 dark:bg-gray-700 rounded-full mb-4 text-blue-600 dark:text-blue-400">
                            <Phone className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-2">
                            {lang === 'KH' ? 'លេខទូរស័ព្ទបន្ទាន់ (Hotline)' : 'Helpdesk Hotline'}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">+855 23 456 789</p>
                        <span className="text-xs text-gray-400">
                            {lang === 'KH' ? 'ម៉ោងធ្វើការ: ច័ន្ទ - សុក្រ' : 'Working hours: Mon - Fri'}
                        </span>
                    </div>

                </div>

                {/* FAQ or Help Note */}
                <div className="bg-blue-900 text-white rounded-2xl p-8 shadow-lg flex flex-col sm:flex-row items-center justify-between">
                    <div className="mb-4 sm:mb-0">
                        <h3 className="text-xl font-bold mb-2">
                            {lang === 'KH' ? 'ត្រូវការជំនួយភ្លាមៗមែនទេ?' : 'Need Instant Assistance?'}
                        </h3>
                        <p className="text-blue-100 text-sm">
                            {lang === 'KH' 
                                ? 'យើងខ្ញុំត្រៀមខ្លួនជាស្រេចដើម្បីជួយដោះស្រាយរាល់បញ្ហារបស់លោកអ្នក។' 
                                : 'We are always ready to help resolve any issues you may encounter.'}
                        </p>
                    </div>
                    <div className="flex items-center space-x-2 bg-blue-800 px-5 py-3 rounded-xl border border-blue-700">
                        <Clock className="w-5 h-5 text-blue-300" />
                        <span className="text-sm font-medium">
                            {lang === 'KH' ? 'សេវា ២៤/៧' : '24/7 Available'}
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SupportHelpdesk;