import React, { useState } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      // បើមាន API អាចដាក់បញ្ចូលទីនេះ
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-300 font-khmer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 sm:p-14 overflow-hidden shadow-2xl shadow-indigo-600/20 text-white">
          
          {/* Decorative background shapes */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-black/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
              <Mail className="w-8 h-8" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              ទទួលបានព័ត៌មាន និងសេចក្តីប្រកាសថ្មីៗ
            </h2>
            <p className="text-blue-100 text-base sm:text-lg mb-8 leading-relaxed">
              ចុះឈ្មោះបញ្ចូលអ៊ីមែលរបស់អ្នកទីនេះ ដើម្បីមិនខកខានរាល់សេចក្តីជូនដំណឹង កាលវិភាគប្រឡង និងព្រឹត្តិការណ៍សំខាន់ៗពីសាលារៀន។
            </p>

            {submitted ? (
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white flex items-center justify-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                <span className="text-base font-semibold">អបអរសាទរ! លោកអ្នកបានចុះឈ្មោះទទួលព័ត៌មានជោគជ័យហើយ។</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="relative flex-1">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <Mail className="w-5 h-5" />
                  </span>
                  <input
                    type="email"
                    required
                    placeholder="បញ្ចូលអ៊ីមែលរបស់អ្នក..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-white text-blue-600 font-bold rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 text-sm shrink-0"
                >
                  <Send className="w-4 h-4" />
                  ចុះឈ្មោះ
                </button>
              </form>
            )}

            <p className="text-xs text-blue-200 mt-4">
              យើងធានាថាមិនយកអ៊ីមែលរបស់អ្នកទៅប្រើប្រាស់ខុសគោលដៅ ឬផ្ញើសាររំខាន (Spam) ឡើយ។
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Newsletter;