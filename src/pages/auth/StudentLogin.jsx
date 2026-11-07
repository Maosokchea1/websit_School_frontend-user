import React, { useState } from 'react';

const StudentLogin = ({ lang, onLoginSuccess, onCancel }) => {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // ✅ បន្ថែម State សម្រាប់បិទបើកភ្នែក
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const txt = {
    title: lang === 'KH' ? 'ចូលមើលពិន្ទុសិស្ស' : 'Student Login',
    subtitle: lang === 'KH' ? 'សូមបញ្ចូលលេខសម្គាល់សិស្ស និងពាក្យសម្ងាត់ដើម្បីបន្ត' : 'Enter your student ID and password to continue',
    studentId: lang === 'KH' ? 'លេខសម្គាល់សិស្ស' : 'Student ID',
    password: lang === 'KH' ? 'ពាក្យសម្ងាត់' : 'Password',
    login: lang === 'KH' ? 'ចូលប្រើប្រាស់' : 'Sign In',
    cancel: lang === 'KH' ? 'ត្រឡប់ក្រោយវិញ' : 'Go Back',
    errorEmpty: lang === 'KH' ? 'សូមបញ្ចូលព័ត៌មានទាំងអស់!' : 'Please fill in all fields!',
    demo: lang === 'KH' ? 'សម្រាប់ការសាកល្បង សូមបញ្ចូលអ្វីក៏បាន' : 'Demo: enter any ID and password',
    loading: lang === 'KH' ? 'កំពុងផ្ទៀងផ្ទាត់...' : 'Verifying...',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!studentId.trim() || !password.trim()) {
      setError(txt.errorEmpty);
      return;
    }
    setIsLoading(true);
    // Demo — simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess({
        id: studentId.trim().toUpperCase(),
        nameKh: 'សុខ ដារា',
        nameEn: 'Sok Darara',
        class: '10A',
        grade: lang === 'KH' ? 'ថ្នាក់ទី ១០' : 'Grade 10',
      });
    }, 800);
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 py-12 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="w-full max-w-md bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/50 dark:border-gray-700 p-6 sm:p-10 relative z-10">
        
        {/* Logo ខាងលើ */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-white dark:bg-gray-700 p-1.5 rounded-2xl flex items-center justify-center shadow-xl shadow-primary/20 border border-gray-100 dark:border-gray-600 transition-transform duration-300 hover:scale-105">
            <img
              src="/Logo.png"
              alt="School Logo"
              className="w-full h-full object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div className="w-full h-full bg-primary text-white hidden items-center justify-center rounded-xl">
              <svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665-6.16 3.422z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7m-4-4v2m8-2v2" />
              </svg>
            </div>
          </div>
        </div>

        {/* ចំណងជើង */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-2">
          {txt.title}
        </h1>
        <p className="text-sm text-center text-gray-500 dark:text-gray-400 mb-8">
          {txt.subtitle}
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* ប្រអប់បញ្ចូល Student ID */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              {txt.studentId}
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                placeholder={lang === 'KH' ? 'ឧ. STU001' : 'e.g. STU001'}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all duration-200"
                autoComplete="username"
              />
            </div>
          </div>

          {/* ប្រអប់បញ្ចូល Password (មានភ្នែកបិទបើក) */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              {txt.password}
            </label>
            <div className="relative group">
              {/* Icon ខាងឆ្វេង (សោរ) */}
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              
              <input
                type={showPassword ? 'text' : 'password'} // ✅ ប្តូរ Type តាមការចុច
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-11 pr-12 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all duration-200"
                autoComplete="current-password"
              />

              {/* ✅ ប៊ូតុងភ្នែក (ខាងស្តាំ) */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 focus:outline-none"
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  // រូបភ្នែកបើក (Eye Open)
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ) : (
                  // រូបភ្នែកបិទ (Eye Slash)
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* សារបង្ហាញ Error */}
          {error && (
            <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-4 py-3 rounded-xl border border-red-100 dark:border-red-800/30 animate-in fade-in slide-in-from-top-2">
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">{error}</span>
            </div>
          )}

          {/* ប៊ូតុង Login */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-primary to-blue-600 text-white font-bold py-3.5 rounded-xl hover:shadow-lg hover:shadow-primary/30 active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100 flex items-center justify-center gap-2 mt-2"
          >
            {isLoading ? (
              <>
                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
                {txt.loading}
              </>
            ) : (
              <>
                {txt.login}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>

          {/* ប៊ូតុង Cancel */}
          <button
            type="button"
            onClick={onCancel}
            className="w-full flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium text-sm py-2 transition-colors duration-200 group"
          >
            <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {txt.cancel}
          </button>
        </form>

        {/* Demo Text */}
        <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700/50">
          <p className="text-xs text-center text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/50 py-2 rounded-lg">
            💡 {txt.demo}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;