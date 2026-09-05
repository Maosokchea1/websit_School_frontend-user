import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const InquiryForm = ({ lang }) => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Form Container */}
                <div className="bg-white dark:bg-gray-800 p-8 sm:p-12 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700">
                    
                    <div className="text-center mb-8">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950 dark:text-white mb-2">
                            {lang === 'KH' ? 'ទម្រង់ស្នើសុំ ឬសាកសួរព័ត៌មាន' : 'Inquiry Form'}
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                            {lang === 'KH' 
                                ? 'សូមបំពេញព័ត៌មានខាងក្រោម ដើម្បីផ្ញើសំណួរ ឬសំណូមពរមកកាន់សាលារៀនយើងខ្ញុំ។' 
                                : 'Please fill out the form below to send your questions or requests to our school.'}
                        </p>
                    </div>

                    {submitted ? (
                        <div className="p-6 bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-xl text-center flex flex-col items-center">
                            <CheckCircle2 className="w-12 h-12 mb-3 text-green-600 dark:text-green-400" />
                            <h3 className="font-bold text-lg mb-1">
                                {lang === 'KH' ? 'បញ្ជូនដោយជោគជ័យ!' : 'Successfully Submitted!'}
                            </h3>
                            <p className="text-sm">
                                {lang === 'KH' 
                                    ? 'អរគុណ! សាររបស់អ្នកត្រូវបានបញ្ជូនរួចរាល់ យើងខ្ញុំនឹងទាក់ទងអ្នកវិញឆាប់ៗ។' 
                                    : 'Thank you! Your message has been sent successfully. We will get back to you soon.'}
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                        {lang === 'KH' ? 'ឈ្មោះរបស់អ្នក *' : 'Your Name *'}
                                    </label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        required 
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder={lang === 'KH' ? 'បញ្ចូលឈ្មោះពេញ' : 'Enter full name'}
                                        className="w-full p-3 border rounded-xl dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                        {lang === 'KH' ? 'លេខទូរស័ព្ទ *' : 'Phone Number *'}
                                    </label>
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        required 
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder={lang === 'KH' ? 'បញ្ចូលលេខទូរស័ព្ទ' : 'Enter phone number'}
                                        className="w-full p-3 border rounded-xl dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                    {lang === 'KH' ? 'សារអេឡិចត្រូនិក (Email) *' : 'Email Address *'}
                                </label>
                                <input 
                                    type="email" 
                                    name="email"
                                    required 
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={lang === 'KH' ? 'example@email.com' : 'example@email.com'}
                                    className="w-full p-3 border rounded-xl dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                    {lang === 'KH' ? 'ប្រធានបទ *' : 'Subject *'}
                                </label>
                                <input 
                                    type="text" 
                                    name="subject"
                                    required 
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder={lang === 'KH' ? 'ឧ. សាកសួរពីកម្រិតសិក្សា' : 'e.g. Inquiry about study programs'}
                                    className="w-full p-3 border rounded-xl dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                    {lang === 'KH' ? 'អត្ថបទសាររបស់អ្នក *' : 'Your Message *'}
                                </label>
                                <textarea 
                                    rows="4" 
                                    name="message"
                                    required 
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder={lang === 'KH' ? 'សរសេរសាររបស់អ្នកនៅទីនេះ...' : 'Write your message here...'}
                                    className="w-full p-3 border rounded-xl dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button 
                                type="submit" 
                                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition duration-300 flex items-center justify-center space-x-2 shadow-md"
                            >
                                <Send className="w-5 h-5 mr-2" />
                                <span>{lang === 'KH' ? 'បញ្ជូនសំណើ' : 'Submit Inquiry'}</span>
                            </button>

                        </form>
                    )}

                </div>

            </div>
        </div>
    );
};

export default InquiryForm;