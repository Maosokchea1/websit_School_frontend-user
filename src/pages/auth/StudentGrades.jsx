import React from 'react';

const StudentGrades = ({ lang, student, onLogout }) => {
  const txt = {
    welcome: lang === 'KH' ? 'សូមស្វាគមន៍' : 'Welcome',
    grades: lang === 'KH' ? 'ពិន្ទុរបស់អ្នក' : 'Your Grades',
    subject: lang === 'KH' ? 'មុខវិជ្ជា' : 'Subject',
    teacher: lang === 'KH' ? 'គ្រូបង្រៀន' : 'Teacher',
    midterm: lang === 'KH' ? 'ពាក់កណ្តាល' : 'Midterm',
    final: lang === 'KH' ? 'ចុងក្រោយ' : 'Final',
    average: lang === 'KH' ? 'មធ្យមភាគ' : 'Average',
    grade: lang === 'KH' ? 'និទ្ទេស' : 'Grade',
    gpa: lang === 'KH' ? 'មធ្យមភាគសរុប' : 'Overall GPA',
    classLabel: lang === 'KH' ? 'ថ្នាក់' : 'Class',
    studentId: lang === 'KH' ? 'លេខសម្គាល់' : 'ID',
    logout: lang === 'KH' ? 'ចាកចេញ' : 'Logout',
    print: lang === 'KH' ? 'បោះពុម្ព' : 'Print',
    rank: lang === 'KH' ? 'ចំណាត់ថ្នាក់' : 'Rank',
  };

  const grades = [
    { subjectKh: 'គណិតវិទ្យា', subjectEn: 'Mathematics', teacherKh: 'គ្រូ សុខា', teacherEn: 'Mr. Sokha', midterm: 85, final: 88 },
    { subjectKh: 'អក្សរសាស្ត្រខ្មែរ', subjectEn: 'Khmer Literature', teacherKh: 'គ្រូ ស្រីមុំ', teacherEn: 'Mrs. Srey Mom', midterm: 78, final: 82 },
    { subjectKh: 'រូបវិទ្យា', subjectEn: 'Physics', teacherKh: 'គ្រូ ដារា', teacherEn: 'Mr. Dara', midterm: 72, final: 75 },
    { subjectKh: 'គីមីវិទ្យា', subjectEn: 'Chemistry', teacherKh: 'គ្រូ សុភា', teacherEn: 'Mrs. Sophea', midterm: 80, final: 83 },
    { subjectKh: 'ជីវវិទ្យា', subjectEn: 'Biology', teacherKh: 'គ្រូ វិចិត្រ', teacherEn: 'Mr. Vichet', midterm: 88, final: 90 },
    { subjectKh: 'ភាសាអង់គ្លេស', subjectEn: 'English', teacherKh: 'គ្រូ ចន', teacherEn: 'Mr. John', midterm: 75, final: 80 },
    { subjectKh: 'ប្រវត្តិវិទ្យា', subjectEn: 'History', teacherKh: 'គ្រូ សុខុម', teacherEn: 'Mr. Sokhom', midterm: 82, final: 85 },
    { subjectKh: 'ភូមិវិទ្យា', subjectEn: 'Geography', teacherKh: 'គ្រូ ចន្ថា', teacherEn: 'Mrs. Chantha', midterm: 76, final: 79 },
  ];

  const getAverage = (g) => ((g.midterm + g.final) / 2).toFixed(1);
  const getGrade = (avg) => {
    const a = parseFloat(avg);
    if (a >= 90) return { letter: 'A', color: 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20' };
    if (a >= 80) return { letter: 'B', color: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' };
    if (a >= 70) return { letter: 'C', color: 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20' };
    if (a >= 60) return { letter: 'D', color: 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20' };
    return { letter: 'F', color: 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20' };
  };

  const overallAvg = (grades.reduce((sum, g) => sum + parseFloat(getAverage(g)), 0) / grades.length).toFixed(1);
  const overallGrade = getGrade(overallAvg);
  const studentName = student ? (lang === 'KH' ? (student.nameKh || student.nameEn) : (student.nameEn || student.nameKh)) : '';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold shadow-md">
                {studentName?.charAt(0) || 'S'}
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{txt.welcome}</p>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{studentName}</h1>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-xs text-gray-500 dark:text-gray-400">
                  <span><strong>{txt.studentId}:</strong> {student?.id}</span>
                  <span><strong>{txt.classLabel}:</strong> {student?.grade}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition flex items-center gap-1.5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                {txt.print}
              </button>
              <button
                onClick={onLogout}
                className="px-4 py-2 text-sm font-medium bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition flex items-center gap-1.5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                {txt.logout}
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-5">
            <p className="text-sm text-gray-500 dark:text-gray-400">{txt.gpa}</p>
            <p className="text-3xl font-bold text-primary mt-1">{overallAvg}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-5">
            <p className="text-sm text-gray-500 dark:text-gray-400">{txt.grade}</p>
            <span className={`inline-block mt-2 px-3 py-1 rounded-lg font-bold text-lg ${overallGrade.color}`}>
              {overallGrade.letter}
            </span>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-5">
            <p className="text-sm text-gray-500 dark:text-gray-400">{txt.rank}</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">#3</p>
            <p className="text-xs text-gray-400 mt-1">/ 42 {lang === 'KH' ? 'នាក់' : 'students'}</p>
          </div>
        </div>

        {/* Grades table */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">{txt.grades}</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold">{txt.subject}</th>
                  <th className="px-6 py-3 text-left font-semibold hidden sm:table-cell">{txt.teacher}</th>
                  <th className="px-6 py-3 text-center font-semibold">{txt.midterm}</th>
                  <th className="px-6 py-3 text-center font-semibold">{txt.final}</th>
                  <th className="px-6 py-3 text-center font-semibold">{txt.average}</th>
                  <th className="px-6 py-3 text-center font-semibold">{txt.grade}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {grades.map((g, idx) => {
                  const avg = getAverage(g);
                  const gradeInfo = getGrade(avg);
                  return (
                    <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-900/30 transition">
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                        {lang === 'KH' ? g.subjectKh : g.subjectEn}
                      </td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-400 hidden sm:table-cell">
                        {lang === 'KH' ? g.teacherKh : g.teacherEn}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-700 dark:text-gray-300">{g.midterm}</td>
                      <td className="px-6 py-4 text-center text-gray-700 dark:text-gray-300">{g.final}</td>
                      <td className="px-6 py-4 text-center font-bold text-gray-900 dark:text-white">{avg}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-bold ${gradeInfo.color}`}>
                          {gradeInfo.letter}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentGrades;