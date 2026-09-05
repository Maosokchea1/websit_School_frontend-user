import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactOverview = ({ lang }) => {
    return (
        <div className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 dark:text-white mb-4">
                        {lang === 'KH' ? 'ទិដ្ឋភាពទូទៅនៃការទំនាក់ទំនង' : 'Contact Overview'}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        {lang === 'KH' 
                            ? 'ទំនាក់ទំនងមកកាន់សាលារៀនយើងខ្ញុំតាមរយៈអាសយដ្ឋាន លេខទូរស័ព្ទ អ៊ីមែល និងម៉ោងធ្វើការខាងក្រោមនេះ។' 
                            : 'Get in touch with our school through the address, phone number, email, and working hours below.'}
                    </p>
                </div>

                {/* Contact Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* Phone */}
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 text-center flex flex-col items-center">
                        <div className="p-4 bg-blue-50 dark:bg-gray-700 rounded-full mb-6 text-blue-600 dark:text-blue-400">
                            <Phone className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-blue-950 dark:text-white">
                            {lang === 'KH' ? 'លេខទូរស័ព្ទ' : 'Phone Number'}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">+855 12 345 678</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">+855 97 123 4567</p>
                    </div>

                    {/* Email */}
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 text-center flex flex-col items-center">
                        <div className="p-4 bg-blue-50 dark:bg-gray-700 rounded-full mb-6 text-blue-600 dark:text-blue-400">
                            <Mail className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-blue-950 dark:text-white">
                            {lang === 'KH' ? 'សារអេឡិចត្រូនិក (Email)' : 'Email Address'}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">info@hunsensnoul.edu.kh</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">support@hunsensnoul.edu.kh</p>
                    </div>

                    {/* Address */}
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 text-center flex flex-col items-center">
                        <div className="p-4 bg-blue-50 dark:bg-gray-700 rounded-full mb-6 text-blue-600 dark:text-blue-400">
                            <MapPin className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-blue-950 dark:text-white">
                            {lang === 'KH' ? 'អាសយដ្ឋានសាលារៀន' : 'School Address'}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            {lang === 'KH' ? 'ស្រុកស្នួល ខេត្តក្រចេះ' : 'Snoul District, Kratie Province, Cambodia'}
                        </p>
                    </div>

                    {/* Working Hours */}
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 text-center flex flex-col items-center">
                        <div className="p-4 bg-blue-50 dark:bg-gray-700 rounded-full mb-6 text-blue-600 dark:text-blue-400">
                            <Clock className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-blue-950 dark:text-white">
                            {lang === 'KH' ? 'ម៉ោងធ្វើការ' : 'Working Hours'}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            {lang === 'KH' ? 'ច័ន្ទ - សុក្រ: ៧:០០ព្រឹក - ៥:០០ល្ងាច' : 'Mon - Fri: 7:00 AM - 5:00 PM'}
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ContactOverview;