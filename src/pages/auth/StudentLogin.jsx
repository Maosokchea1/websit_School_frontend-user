import React, { useState } from 'react';

const StudentLogin = ({ lang, onLoginSuccess, onCancel }) => {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const txt = {
    title: lang === 'KH' ? 'ចូលមើលពិន្ទុសិស្ស' : 'Student Login',
    subtitle: lang === 'KH' ? 'សូមបញ្ចូលលេខសម្គាល់សិស្ស និងពាក្យសម្ងាត់' : 'Enter your student ID and password',
    studentId: lang === 'KH' ? 'លេខសម្គាល់សិស្ស' : 'Student ID',
    password: lang === 'KH' ? 'ពាក្យសម្ងាត់' : 'Password',
    login: lang === 'KH' ? 'ចូល' : 'Login',
    cancel: lang === 'KH' ? 'ត្រឡប់ក្រោយ' : 'Back',
    errorEmpty: lang === 'KH' ? 'សូមបញ្ចូលព័ត៌មានទាំងអស់' : 'Please fill in all fields',
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
        nameEn: 'Sok Dara',
        class: '10A',
        grade: lang === 'KH' ? 'ថ្នាក់ទី ១០' : 'Grade 10',
      });
    }, 600);
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 py-12 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg">
            <svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665-6.16 3.422z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7m-4-4v2m8-2v2" />
            </svg>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">
          {txt.title}
        </h1>
        <p className="text-sm text-center text-gray-500 dark:text-gray-400 mb-6">
          {txt.subtitle}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              {txt.studentId}
            </label>
            <input
              type="text"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              placeholder={lang === 'KH' ? 'ឧ. STU001' : 'e.g. STU001'}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
              autoComplete="username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              {txt.password}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
              autoComplete="current-password"
            />
          </div>

          {error && (
            <div className="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-3 py-2 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90 transition-all shadow-sm hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading && (
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
            )}
            {isLoading ? txt.loading : txt.login}
          </button>

          <button
            type="button"
            onClick={onCancel}
            className="w-full text-gray-600 dark:text-gray-400 hover:text-primary text-sm py-2 transition"
          >
            {txt.cancel}
          </button>
        </form>

        <p className="text-xs text-center text-gray-400 dark:text-gray-500 mt-4">
          💡 {txt.demo}
        </p>
      </div>
    </div>
  );
};

export default StudentLogin;