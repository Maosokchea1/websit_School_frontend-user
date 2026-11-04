import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const LocationMap = ({ lang }) => {
    return (
        <div className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 dark:text-white mb-4">
                        {lang === 'KH' ? 'ទីតាំង និងផែនទីសាលារៀន' : 'Location & Map'}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        {lang === 'KH' 
                            ? 'ស្វែងរកទីតាំងពិតប្រាកដរបស់សាលារៀន ហ៊ុន សែន ស្នួល នៅលើផែនទី ដើម្បីងាយស្រួលក្នុងការធ្វើដំណើរមកផ្ទាល់។' 
                            : 'Find the exact location of Hun Sen Snoul High School on the map for easy navigation.'}
                    </p>
                </div>

                {/* Map Container */}
                <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700">
                    <div className="w-full h-96 sm:h-[450px] rounded-xl overflow-hidden shadow-inner">
                        <iframe
                            title="Hun Sen Snoul School Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.777!2d106.123!3d11.945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDU2JzQyLjAiTiAxMDbCsDA3JzIyLjAiRQ!5e0!3m2!1sen!2skh!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>

                    {/* Address Detail Info Box */}
                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-between bg-blue-50 dark:bg-gray-700 p-6 rounded-xl">
                        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                            <div className="p-3 bg-blue-600 text-white rounded-xl">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-blue-950 dark:text-white">
                                    {lang === 'KH' ? 'វិទ្យាល័យ ហ៊ុន សែន ស្នួល' : 'Hun Sen Snoul High School'}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    {lang === 'KH' ? 'ស្រុកស្នួល ខេត្តក្រចេះ ប្រទេសកម្ពុជា' : 'Snoul District, Kratie Province, Cambodia'}
                                </p>
                            </div>
                        </div>
                        
                        <a 
                            href="https://maps.google.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition duration-300 flex items-center space-x-2 text-sm shadow-md"
                        >
                            <Navigation className="w-4 h-4 mr-2" />
                            <span>{lang === 'KH' ? 'បើកមើលទិសដៅ' : 'Get Directions'}</span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LocationMap;