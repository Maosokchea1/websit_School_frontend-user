import React from 'react';

const UserProfile = ({ lang, student, setActiveTab, onLogout }) => {
  const isKh = lang === 'KH';

  const txt = {
    title: isKh ? 'ព័ត៌មានផ្ទាល់ខ្លួន' : 'Student Profile',
    subtitle: isKh ? 'ព័ត៌មានលម្អិតគណនីសិស្ស' : 'Student account details and records',
    generalInfo: isKh ? 'ព័ត៌មានទូទៅ' : 'General Information',
    contactInfo: isKh ? 'ព័ត៌មានទំនាក់ទំនង' : 'Contact Information',
    guardianInfo: isKh ? 'ព័ត៌មានអាណាព្យាបាល' : 'Guardian Information',
    nameKh: isKh ? 'ឈ្មោះភាសាខ្មែរ' : 'Name (Khmer)',
    nameEn: isKh ? 'ឈ្មោះឡាតាំង' : 'Name (English)',
    studentId: isKh ? 'អត្តលេខសិស្ស' : 'Student ID',
    grade: isKh ? 'កម្រិតថ្នាក់' : 'Grade / Class',
    academicYear: isKh ? 'ឆ្នាំសិក្សា' : 'Academic Year',
    gender: isKh ? 'ភេទ' : 'Gender',
    dob: isKh ? 'ថ្ងៃខែឆ្នាំកំណើត' : 'Date of Birth',
    phone: isKh ? 'លេខទូរស័ព្ទ' : 'Phone Number',
    email: isKh ? 'អ៊ីមែល' : 'Email',
    address: isKh ? 'អាសយដ្ឋាន' : 'Address',
    guardianName: isKh ? 'ឈ្មោះអាណាព្យាបាល' : 'Guardian Name',
    relationship: isKh ? 'ទំនាក់ទំនង' : 'Relationship',
    guardianPhone: isKh ? 'លេខទូរស័ព្ទអាណាព្យាបាល' : 'Guardian Phone',
    viewGrades: isKh ? 'មើលពិន្ទុ' : 'View Grades',
    changePassword: isKh ? 'ផ្លាស់ប្តូរពាក្យសម្ងាត់' : 'Change Password',
    backHome: isKh ? 'ទំព័រដើម' : 'Back to Home',
    logout: isKh ? 'ចាកចេញ' : 'Logout',
    male: isKh ? 'ប្រុស' : 'Male',
    father: isKh ? 'ឪពុក' : 'Father',
  };

  const studentName = student
    ? (isKh ? (student.nameKh || student.nameEn || 'សិស្ស') : (student.nameEn || student.nameKh || 'Student'))
    : 'Student';
  const studentInitial = studentName.charAt(0).toUpperCase();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4 sm:px-6 lg:px-8 transition-colors duration-300 font-khmer">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Header Profile Card */}
        <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 sm:p-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            {/* Avatar */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-primary to-blue-500 text-white flex items-center justify-center text-4xl sm:text-5xl font-black shadow-xl shadow-primary/30 shrink-0">
              {studentInitial}
            </div>

            {/* Info summary */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                  {student?.grade || (isKh ? 'ថ្នាក់ទី ១០' : 'Grade 10')}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                  {isKh ? 'កំពុងសិក្សា' : 'Active Student'}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
                {studentName}
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {txt.studentId}: <span className="font-semibold text-gray-700 dark:text-gray-200">{student?.id || 'STU001'}</span>
                {' • '}{student?.class || '10A'}
              </p>

              {/* Quick action buttons */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mt-5">
                <button
                  type="button"
                  onClick={() => setActiveTab('my-grades')}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-primary hover:bg-primary/90 shadow-sm hover:shadow transition"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6m4 6V7m4 10v-3M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  {txt.viewGrades}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('change-password')}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  {txt.changePassword}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('home')}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary transition"
                >
                  {txt.backHome}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 1. General Information Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 sm:p-8">
          <div className="flex items-center gap-3 pb-4 border-b border-gray-100 dark:border-gray-700 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-primary flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">{txt.generalInfo}</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">{txt.subtitle}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="p-4 rounded-2xl bg-gray-50/80 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-700/60">
              <p className="text-xs text-gray-500 dark:text-gray-400">{txt.nameKh}</p>
              <p className="text-base font-bold text-gray-900 dark:text-white mt-1">{student?.nameKh || 'សុខ ដារា'}</p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50/80 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-700/60">
              <p className="text-xs text-gray-500 dark:text-gray-400">{txt.nameEn}</p>
              <p className="text-base font-bold text-gray-900 dark:text-white mt-1">{student?.nameEn || 'Sok Dara'}</p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50/80 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-700/60">
              <p className="text-xs text-gray-500 dark:text-gray-400">{txt.studentId}</p>
              <p className="text-base font-bold text-primary mt-1">{student?.id || 'STU001'}</p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50/80 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-700/60">
              <p className="text-xs text-gray-500 dark:text-gray-400">{txt.grade}</p>
              <p className="text-base font-bold text-gray-900 dark:text-white mt-1">{student?.grade || (isKh ? 'ថ្នាក់ទី ១០' : 'Grade 10')} ({student?.class || '10A'})</p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50/80 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-700/60">
              <p className="text-xs text-gray-500 dark:text-gray-400">{txt.gender}</p>
              <p className="text-base font-bold text-gray-900 dark:text-white mt-1">{txt.male}</p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50/80 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-700/60">
              <p className="text-xs text-gray-500 dark:text-gray-400">{txt.dob}</p>
              <p className="text-base font-bold text-gray-900 dark:text-white mt-1">15/05/2009</p>
            </div>
          </div>
        </div>

        {/* 2. Contact & Guardian Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Contact */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100 dark:border-gray-700 mb-4">
              <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white">{txt.contactInfo}</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">{txt.phone}</p>
                <p className="font-semibold text-gray-900 dark:text-white mt-0.5">012 888 999</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">{txt.email}</p>
                <p className="font-semibold text-gray-900 dark:text-white mt-0.5">sok.dara@student.edu.kh</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">{txt.address}</p>
                <p className="font-semibold text-gray-900 dark:text-white mt-0.5">
                  {isKh ? 'ឃុំស្នួល, ស្រុកស្នួល, ខេត្តក្រចេះ' : 'Snoul Commune, Snoul District, Kratie'}
                </p>
              </div>
            </div>
          </div>

          {/* Guardian */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100 dark:border-gray-700 mb-4">
              <div className="w-9 h-9 rounded-xl bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white">{txt.guardianInfo}</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">{txt.guardianName}</p>
                <p className="font-semibold text-gray-900 dark:text-white mt-0.5">
                  {isKh ? 'សុខ សម្បត្តិ' : 'Sok Sambath'}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">{txt.relationship}</p>
                <p className="font-semibold text-gray-900 dark:text-white mt-0.5">{txt.father}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">{txt.guardianPhone}</p>
                <p className="font-semibold text-gray-900 dark:text-white mt-0.5">098 777 666</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserProfile;
