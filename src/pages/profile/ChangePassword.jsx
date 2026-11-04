import React, { useState } from 'react';

const ChangePassword = ({ lang, student, setActiveTab }) => {
  const isKh = lang === 'KH';

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const txt = {
    title: isKh ? 'ផ្លាស់ប្តូរពាក្យសម្ងាត់' : 'Change Password',
    subtitle: isKh ? 'សូមបញ្ចូលពាក្យសម្ងាត់ចាស់ និងកំណត់ពាក្យសម្ងាត់ថ្មី' : 'Enter your current password and set a new one',
    currentPass: isKh ? 'ពាក្យសម្ងាត់បច្ចុប្បន្ន' : 'Current Password',
    newPass: isKh ? 'ពាក្យសម្ងាត់ថ្មី' : 'New Password',
    confirmPass: isKh ? 'បញ្ជាក់ពាក្យសម្ងាត់ថ្មី' : 'Confirm New Password',
    saveBtn: isKh ? 'រក្សាទុកការផ្លាស់ប្តូរ' : 'Update Password',
    saving: isKh ? 'កំពុងរក្សាទុក...' : 'Updating...',
    cancel: isKh ? 'ត្រឡប់ក្រោយ' : 'Cancel',
    backGrades: isKh ? 'មើលពិន្ទុ' : 'Back to Grades',
    errEmpty: isKh ? 'សូមបំពេញគ្រប់ប្រអប់ទាំងអស់' : 'Please fill in all fields',
    errShort: isKh ? 'ពាក្យសម្ងាត់ថ្មីត្រូវមានយ៉ាងតិច ៦ តួអក្សរ' : 'New password must be at least 6 characters',
    errMismatch: isKh ? 'ពាក្យសម្ងាត់បញ្ជាក់មិនត្រូវគ្នាទេ' : 'Confirm password does not match',
    successMsg: isKh ? 'ពាក្យសម្ងាត់របស់អ្នកត្រូវបានផ្លាស់ប្តូរដោយជោគជ័យ!' : 'Your password has been updated successfully!',
    securityTip: isKh ? 'ព័ត៌មានជំនួយ៖ ប្រើប្រាស់ពាក្យសម្ងាត់ដែលមានអក្សរធំ អក្សរតូច និងលេខដើម្បីសុវត្ថិភាពខ្ពស់។' : 'Tip: Use a mix of uppercase, lowercase letters and numbers for higher security.',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!currentPassword || !newPassword || !confirmPassword) {
      setError(txt.errEmpty);
      return;
    }
    if (newPassword.length < 6) {
      setError(txt.errShort);
      return;
    }
    if (newPassword !== confirmPassword) {
      setError(txt.errMismatch);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }, 600);
  };

  const EyeIcon = ({ show, onToggle }) => (
    <button
      type="button"
      onClick={onToggle}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition p-1"
      tabIndex={-1}
    >
      {show ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4 sm:px-6 lg:px-8 transition-colors duration-300 font-khmer flex items-center justify-center">
      <div className="w-full max-w-lg">
        
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 sm:p-8">
          {/* Header Icon */}
          <div className="flex justify-center mb-5">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shadow-inner">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>

          <h1 className="text-xl sm:text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">
            {txt.title}
          </h1>
          <p className="text-xs sm:text-sm text-center text-gray-500 dark:text-gray-400 mb-6">
            {txt.subtitle}
          </p>

          {/* Success Banner */}
          {success && (
            <div className="mb-5 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-sm flex items-start gap-3">
              <svg className="w-5 h-5 shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="font-semibold">{txt.successMsg}</p>
              </div>
            </div>
          )}

          {/* Error Banner */}
          {error && (
            <div className="mb-5 p-3.5 rounded-2xl bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-xs sm:text-sm flex items-center gap-2.5">
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Current Password */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                {txt.currentPass}
              </label>
              <div className="relative">
                <input
                  type={showCurrent ? 'text' : 'password'}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 pr-11 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  autoComplete="current-password"
                />
                <EyeIcon show={showCurrent} onToggle={() => setShowCurrent(!showCurrent)} />
              </div>
            </div>

            {/* New Password */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                {txt.newPass}
              </label>
              <div className="relative">
                <input
                  type={showNew ? 'text' : 'password'}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 pr-11 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  autoComplete="new-password"
                />
                <EyeIcon show={showNew} onToggle={() => setShowNew(!showNew)} />
              </div>
            </div>

            {/* Confirm New Password */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                {txt.confirmPass}
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 pr-11 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  autoComplete="new-password"
                />
                <EyeIcon show={showConfirm} onToggle={() => setShowConfirm(!showConfirm)} />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-xl transition shadow-md hover:shadow-lg disabled:opacity-60 flex items-center justify-center gap-2 mt-2 text-sm sm:text-base cursor-pointer"
            >
              {isLoading && (
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
              )}
              {isLoading ? txt.saving : txt.saveBtn}
            </button>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => setActiveTab('my-grades')}
                className="text-xs sm:text-sm text-primary hover:underline font-semibold"
              >
                ← {txt.backGrades}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('profile')}
                className="text-xs sm:text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                {isKh ? 'ព័ត៌មានផ្ទាល់ខ្លួន' : 'Profile'}
              </button>
            </div>
          </form>

          {/* Security Tip */}
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-6 text-center leading-relaxed">
            {txt.securityTip}
          </p>
        </div>

      </div>
    </div>
  );
};

export default ChangePassword;
