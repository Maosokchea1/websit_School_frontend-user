import React, { useState } from 'react';

const StudentGrades = ({ lang, student, onLogout }) => {
  // ✅ NEW: View toggle states
  const [viewMode, setViewMode] = useState('semester'); // 'semester' | 'monthly'
  const [selectedSemester, setSelectedSemester] = useState(1); // 1 | 2
  const [selectedMonth, setSelectedMonth] = useState('oct');

  const txt = {
    welcome: lang === 'KH' ? 'សូមស្វាគមន៍' : 'Welcome',
    grades: lang === 'KH' ? 'ពិន្ទុរបស់អ្នក' : 'Your Grades',
    subject: lang === 'KH' ? 'មុខវិជ្ជា' : 'Subject',
    teacher: lang === 'KH' ? 'គ្រូបង្រៀន' : 'Teacher',
    midterm: lang === 'KH' ? 'ពាក់កណ្តាល' : 'Midterm',
    final: lang === 'KH' ? 'ចុងក្រោយ' : 'Final',
    monthly: lang === 'KH' ? 'ប្រចាំខែ' : 'Monthly',
    semester: lang === 'KH' ? 'ឆមាស' : 'Semester',
    semester1: lang === 'KH' ? 'ឆមាសទី១' : 'Semester 1',
    semester2: lang === 'KH' ? 'ឆមាសទី២' : 'Semester 2',
    score: lang === 'KH' ? 'ពិន្ទុ' : 'Score',
    average: lang === 'KH' ? 'មធ្យមភាគ' : 'Average',
    grade: lang === 'KH' ? 'និទ្ទេស' : 'Grade',
    gpa: lang === 'KH' ? 'មធ្យមភាគ' : 'GPA',
    classLabel: lang === 'KH' ? 'ថ្នាក់' : 'Class',
    studentId: lang === 'KH' ? 'លេខសម្គាល់' : 'ID',
    logout: lang === 'KH' ? 'ចាកចេញ' : 'Logout',
    print: lang === 'KH' ? 'បោះពុម្ព' : 'Print',
    rank: lang === 'KH' ? 'ចំណាត់ថ្នាក់' : 'Rank',
    bestSubject: lang === 'KH' ? 'មុខវិជ្ជាខ្ពស់បំផុត' : 'Best Subject',
    students: lang === 'KH' ? 'នាក់' : 'students',
    monthTitle: lang === 'KH' ? 'ខែ' : 'Month',
    year: lang === 'KH' ? 'ឆ្នាំសិក្សា ២០២៥-២០២៦' : 'Academic Year 2025-2026',
    scrollHint: lang === 'KH' ? 'អូសតារាង ↔' : 'Scroll ↔',
  };

  // ============ SEMESTER DATA (2 semesters) ============
  const semesterGrades = {
    1: [
      { subjectKh: 'គណិតវិទ្យា', subjectEn: 'Mathematics', teacherKh: 'គ្រូ សុខា', teacherEn: 'Mr. Sokha', midterm: 85, final: 88 },
      { subjectKh: 'អក្សរសាស្ត្រខ្មែរ', subjectEn: 'Khmer Literature', teacherKh: 'គ្រូ ស្រីមុំ', teacherEn: 'Mrs. Srey Mom', midterm: 78, final: 82 },
      { subjectKh: 'រូបវិទ្យា', subjectEn: 'Physics', teacherKh: 'គ្រូ ដារា', teacherEn: 'Mr. Dara', midterm: 72, final: 75 },
      { subjectKh: 'គីមីវិទ្យា', subjectEn: 'Chemistry', teacherKh: 'គ្រូ សុភា', teacherEn: 'Mrs. Sophea', midterm: 80, final: 83 },
      { subjectKh: 'ជីវវិទ្យា', subjectEn: 'Biology', teacherKh: 'គ្រូ វិចិត្រ', teacherEn: 'Mr. Vichet', midterm: 88, final: 90 },
      { subjectKh: 'ភាសាអង់គ្លេស', subjectEn: 'English', teacherKh: 'គ្រូ ចន', teacherEn: 'Mr. John', midterm: 75, final: 80 },
      { subjectKh: 'ប្រវត្តិវិទ្យា', subjectEn: 'History', teacherKh: 'គ្រូ សុខុម', teacherEn: 'Mr. Sokhom', midterm: 82, final: 85 },
      { subjectKh: 'ភូមិវិទ្យា', subjectEn: 'Geography', teacherKh: 'គ្រូ ចន្ថា', teacherEn: 'Mrs. Chantha', midterm: 76, final: 79 },
    ],
    2: [
      { subjectKh: 'គណិតវិទ្យា', subjectEn: 'Mathematics', teacherKh: 'គ្រូ សុខា', teacherEn: 'Mr. Sokha', midterm: 88, final: 92 },
      { subjectKh: 'អក្សរសាស្ត្រខ្មែរ', subjectEn: 'Khmer Literature', teacherKh: 'គ្រូ ស្រីមុំ', teacherEn: 'Mrs. Srey Mom', midterm: 85, final: 86 },
      { subjectKh: 'រូបវិទ្យា', subjectEn: 'Physics', teacherKh: 'គ្រូ ដារា', teacherEn: 'Mr. Dara', midterm: 78, final: 80 },
      { subjectKh: 'គីមីវិទ្យា', subjectEn: 'Chemistry', teacherKh: 'គ្រូ សុភា', teacherEn: 'Mrs. Sophea', midterm: 84, final: 87 },
      { subjectKh: 'ជីវវិទ្យា', subjectEn: 'Biology', teacherKh: 'គ្រូ វិចិត្រ', teacherEn: 'Mr. Vichet', midterm: 90, final: 93 },
      { subjectKh: 'ភាសាអង់គ្លេស', subjectEn: 'English', teacherKh: 'គ្រូ ចន', teacherEn: 'Mr. John', midterm: 82, final: 85 },
      { subjectKh: 'ប្រវត្តិវិទ្យា', subjectEn: 'History', teacherKh: 'គ្រូ សុខុម', teacherEn: 'Mr. Sokhom', midterm: 86, final: 88 },
      { subjectKh: 'ភូមិវិទ្យា', subjectEn: 'Geography', teacherKh: 'គ្រូ ចន្ថា', teacherEn: 'Mrs. Chantha', midterm: 80, final: 82 },
    ],
  };

  // ============ MONTHLY DATA (6 months) ============
  const monthlyGrades = {
    oct: [
      { subjectKh: 'គណិតវិទ្យា', subjectEn: 'Mathematics', teacherKh: 'គ្រូ សុខា', teacherEn: 'Mr. Sokha', score: 85 },
      { subjectKh: 'អក្សរសាស្ត្រខ្មែរ', subjectEn: 'Khmer Literature', teacherKh: 'គ្រូ ស្រីមុំ', teacherEn: 'Mrs. Srey Mom', score: 78 },
      { subjectKh: 'រូបវិទ្យា', subjectEn: 'Physics', teacherKh: 'គ្រូ ដារា', teacherEn: 'Mr. Dara', score: 72 },
      { subjectKh: 'គីមីវិទ្យា', subjectEn: 'Chemistry', teacherKh: 'គ្រូ សុភា', teacherEn: 'Mrs. Sophea', score: 80 },
      { subjectKh: 'ជីវវិទ្យា', subjectEn: 'Biology', teacherKh: 'គ្រូ វិចិត្រ', teacherEn: 'Mr. Vichet', score: 88 },
      { subjectKh: 'ភាសាអង់គ្លេស', subjectEn: 'English', teacherKh: 'គ្រូ ចន', teacherEn: 'Mr. John', score: 75 },
      { subjectKh: 'ប្រវត្តិវិទ្យា', subjectEn: 'History', teacherKh: 'គ្រូ សុខុម', teacherEn: 'Mr. Sokhom', score: 82 },
      { subjectKh: 'ភូមិវិទ្យា', subjectEn: 'Geography', teacherKh: 'គ្រូ ចន្ថា', teacherEn: 'Mrs. Chantha', score: 76 },
    ],
    nov: [
      { subjectKh: 'គណិតវិទ្យា', subjectEn: 'Mathematics', teacherKh: 'គ្រូ សុខា', teacherEn: 'Mr. Sokha', score: 87 },
      { subjectKh: 'អក្សរសាស្ត្រខ្មែរ', subjectEn: 'Khmer Literature', teacherKh: 'គ្រូ ស្រីមុំ', teacherEn: 'Mrs. Srey Mom', score: 80 },
      { subjectKh: 'រូបវិទ្យា', subjectEn: 'Physics', teacherKh: 'គ្រូ ដារា', teacherEn: 'Mr. Dara', score: 74 },
      { subjectKh: 'គីមីវិទ្យា', subjectEn: 'Chemistry', teacherKh: 'គ្រូ សុភា', teacherEn: 'Mrs. Sophea', score: 82 },
      { subjectKh: 'ជីវវិទ្យា', subjectEn: 'Biology', teacherKh: 'គ្រូ វិចិត្រ', teacherEn: 'Mr. Vichet', score: 90 },
      { subjectKh: 'ភាសាអង់គ្លេស', subjectEn: 'English', teacherKh: 'គ្រូ ចន', teacherEn: 'Mr. John', score: 78 },
      { subjectKh: 'ប្រវត្តិវិទ្យា', subjectEn: 'History', teacherKh: 'គ្រូ សុខុម', teacherEn: 'Mr. Sokhom', score: 84 },
      { subjectKh: 'ភូមិវិទ្យា', subjectEn: 'Geography', teacherKh: 'គ្រូ ចន្ថា', teacherEn: 'Mrs. Chantha', score: 78 },
    ],
    dec: [
      { subjectKh: 'គណិតវិទ្យា', subjectEn: 'Mathematics', teacherKh: 'គ្រូ សុខា', teacherEn: 'Mr. Sokha', score: 82 },
      { subjectKh: 'អក្សរសាស្ត្រខ្មែរ', subjectEn: 'Khmer Literature', teacherKh: 'គ្រូ ស្រីមុំ', teacherEn: 'Mrs. Srey Mom', score: 75 },
      { subjectKh: 'រូបវិទ្យា', subjectEn: 'Physics', teacherKh: 'គ្រូ ដារា', teacherEn: 'Mr. Dara', score: 70 },
      { subjectKh: 'គីមីវិទ្យា', subjectEn: 'Chemistry', teacherKh: 'គ្រូ សុភា', teacherEn: 'Mrs. Sophea', score: 79 },
      { subjectKh: 'ជីវវិទ្យា', subjectEn: 'Biology', teacherKh: 'គ្រូ វិចិត្រ', teacherEn: 'Mr. Vichet', score: 85 },
      { subjectKh: 'ភាសាអង់គ្លេស', subjectEn: 'English', teacherKh: 'គ្រូ ចន', teacherEn: 'Mr. John', score: 73 },
      { subjectKh: 'ប្រវត្តិវិទ្យា', subjectEn: 'History', teacherKh: 'គ្រូ សុខុម', teacherEn: 'Mr. Sokhom', score: 80 },
      { subjectKh: 'ភូមិវិទ្យា', subjectEn: 'Geography', teacherKh: 'គ្រូ ចន្ថា', teacherEn: 'Mrs. Chantha', score: 74 },
    ],
    jan: [
      { subjectKh: 'គណិតវិទ្យា', subjectEn: 'Mathematics', teacherKh: 'គ្រូ សុខា', teacherEn: 'Mr. Sokha', score: 88 },
      { subjectKh: 'អក្សរសាស្ត្រខ្មែរ', subjectEn: 'Khmer Literature', teacherKh: 'គ្រូ ស្រីមុំ', teacherEn: 'Mrs. Srey Mom', score: 84 },
      { subjectKh: 'រូបវិទ្យា', subjectEn: 'Physics', teacherKh: 'គ្រូ ដារា', teacherEn: 'Mr. Dara', score: 76 },
      { subjectKh: 'គីមីវិទ្យា', subjectEn: 'Chemistry', teacherKh: 'គ្រូ សុភា', teacherEn: 'Mrs. Sophea', score: 83 },
      { subjectKh: 'ជីវវិទ្យា', subjectEn: 'Biology', teacherKh: 'គ្រូ វិចិត្រ', teacherEn: 'Mr. Vichet', score: 91 },
      { subjectKh: 'ភាសាអង់គ្លេស', subjectEn: 'English', teacherKh: 'គ្រូ ចន', teacherEn: 'Mr. John', score: 81 },
      { subjectKh: 'ប្រវត្តិវិទ្យា', subjectEn: 'History', teacherKh: 'គ្រូ សុខុម', teacherEn: 'Mr. Sokhom', score: 86 },
      { subjectKh: 'ភូមិវិទ្យា', subjectEn: 'Geography', teacherKh: 'គ្រូ ចន្ថា', teacherEn: 'Mrs. Chantha', score: 80 },
    ],
    feb: [
      { subjectKh: 'គណិតវិទ្យា', subjectEn: 'Mathematics', teacherKh: 'គ្រូ សុខា', teacherEn: 'Mr. Sokha', score: 90 },
      { subjectKh: 'អក្សរសាស្ត្រខ្មែរ', subjectEn: 'Khmer Literature', teacherKh: 'គ្រូ ស្រីមុំ', teacherEn: 'Mrs. Srey Mom', score: 86 },
      { subjectKh: 'រូបវិទ្យា', subjectEn: 'Physics', teacherKh: 'គ្រូ ដារា', teacherEn: 'Mr. Dara', score: 79 },
      { subjectKh: 'គីមីវិទ្យា', subjectEn: 'Chemistry', teacherKh: 'គ្រូ សុភា', teacherEn: 'Mrs. Sophea', score: 85 },
      { subjectKh: 'ជីវវិទ្យា', subjectEn: 'Biology', teacherKh: 'គ្រូ វិចិត្រ', teacherEn: 'Mr. Vichet', score: 92 },
      { subjectKh: 'ភាសាអង់គ្លេស', subjectEn: 'English', teacherKh: 'គ្រូ ចន', teacherEn: 'Mr. John', score: 84 },
      { subjectKh: 'ប្រវត្តិវិទ្យា', subjectEn: 'History', teacherKh: 'គ្រូ សុខុម', teacherEn: 'Mr. Sokhom', score: 87 },
      { subjectKh: 'ភូមិវិទ្យា', subjectEn: 'Geography', teacherKh: 'គ្រូ ចន្ថា', teacherEn: 'Mrs. Chantha', score: 82 },
    ],
    mar: [
      { subjectKh: 'គណិតវិទ្យា', subjectEn: 'Mathematics', teacherKh: 'គ្រូ សុខា', teacherEn: 'Mr. Sokha', score: 92 },
      { subjectKh: 'អក្សរសាស្ត្រខ្មែរ', subjectEn: 'Khmer Literature', teacherKh: 'គ្រូ ស្រីមុំ', teacherEn: 'Mrs. Srey Mom', score: 88 },
      { subjectKh: 'រូបវិទ្យា', subjectEn: 'Physics', teacherKh: 'គ្រូ ដារា', teacherEn: 'Mr. Dara', score: 82 },
      { subjectKh: 'គីមីវិទ្យា', subjectEn: 'Chemistry', teacherKh: 'គ្រូ សុភា', teacherEn: 'Mrs. Sophea', score: 88 },
      { subjectKh: 'ជីវវិទ្យា', subjectEn: 'Biology', teacherKh: 'គ្រូ វិចិត្រ', teacherEn: 'Mr. Vichet', score: 94 },
      { subjectKh: 'ភាសាអង់គ្លេស', subjectEn: 'English', teacherKh: 'គ្រូ ចន', teacherEn: 'Mr. John', score: 87 },
      { subjectKh: 'ប្រវត្តិវិទ្យា', subjectEn: 'History', teacherKh: 'គ្រូ សុខុម', teacherEn: 'Mr. Sokhom', score: 90 },
      { subjectKh: 'ភូមិវិទ្យា', subjectEn: 'Geography', teacherKh: 'គ្រូ ចន្ថា', teacherEn: 'Mrs. Chantha', score: 85 },
    ],
  };

  // ============ MONTHS ARRAY ============
  const months = [
    { key: 'oct', kh: 'តុលា', en: 'October' },
    { key: 'nov', kh: 'វិច្ឆិកា', en: 'November' },
    { key: 'dec', kh: 'ធ្នូ', en: 'December' },
    { key: 'jan', kh: 'មករា', en: 'January' },
    { key: 'feb', kh: 'កុម្ភៈ', en: 'February' },
    { key: 'mar', kh: 'មីនា', en: 'March' },
  ];

  // ============ HELPERS ============
  const getAverage = (g) => ((g.midterm + g.final) / 2).toFixed(1);

  const getSemesterAverage = (list) => {
    if (!list || list.length === 0) return '0.0';
    return (list.reduce((sum, g) => sum + parseFloat(getAverage(g)), 0) / list.length).toFixed(1);
  };

  const getMonthlyAverage = (list) => {
    if (!list || list.length === 0) return '0.0';
    return (list.reduce((sum, g) => sum + g.score, 0) / list.length).toFixed(1);
  };

  const getGrade = (avg) => {
    const a = parseFloat(avg);
    if (a >= 90) return { letter: 'A', color: 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20' };
    if (a >= 80) return { letter: 'B', color: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' };
    if (a >= 70) return { letter: 'C', color: 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20' };
    if (a >= 60) return { letter: 'D', color: 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20' };
    return { letter: 'F', color: 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20' };
  };

  const getProgressColor = (score) => {
    if (score >= 90) return 'bg-green-500';
    if (score >= 80) return 'bg-blue-500';
    if (score >= 70) return 'bg-yellow-500';
    if (score >= 60) return 'bg-orange-500';
    return 'bg-red-500';
  };

  // ============ COMPUTED VALUES ============
  const currentSemesterList = semesterGrades[selectedSemester] || [];
  const currentMonthList = monthlyGrades[selectedMonth] || [];

  const semesterAvg = getSemesterAverage(currentSemesterList);
  const semesterGrade = getGrade(semesterAvg);

  const monthAvg = getMonthlyAverage(currentMonthList);
  const monthGrade = getGrade(monthAvg);

  const bestSubject = currentMonthList.length > 0
    ? currentMonthList.reduce((best, g) => (g.score > best.score ? g : best), currentMonthList[0])
    : null;

  // Yearly overall GPA (average of both semesters)
  const yearGPA = (
    (parseFloat(getSemesterAverage(semesterGrades[1])) +
      parseFloat(getSemesterAverage(semesterGrades[2]))) / 2
  ).toFixed(1);

  const studentName = student
    ? (lang === 'KH'
        ? (student.nameKh || student.nameEn)
        : (student.nameEn || student.nameKh))
    : '';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* ============ HEADER CARD ============ */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold shadow-md">
                {studentName?.charAt(0) || 'S'}
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{txt.welcome}</p>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {studentName}
                </h1>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-xs text-gray-500 dark:text-gray-400">
                  <span><strong>{txt.studentId}:</strong> {student?.id}</span>
                  <span><strong>{txt.classLabel}:</strong> {student?.grade}</span>
                  <span className="text-primary font-semibold">🏆 {txt.year}</span>
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

        {/* ============ MAIN VIEW TOGGLE: SEMESTER vs MONTHLY ============ */}
        <div className="flex gap-2 mb-5 p-1.5 bg-gray-100 dark:bg-gray-800 rounded-xl w-fit mx-auto sm:mx-0">
          <button
            type="button"
            onClick={() => setViewMode('semester')}
            className={`flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
              viewMode === 'semester'
                ? 'bg-white dark:bg-gray-700 text-primary shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-primary'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {txt.semester}
          </button>
          <button
            type="button"
            onClick={() => setViewMode('monthly')}
            className={`flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
              viewMode === 'monthly'
                ? 'bg-white dark:bg-gray-700 text-primary shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-primary'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            {txt.monthly}
          </button>
        </div>

        {/* ============================================================ */}
        {/* =================== SEMESTER VIEW =========================== */}
        {/* ============================================================ */}
        {viewMode === 'semester' && (
          <>
            {/* Semester sub-tabs */}
            <div className="flex flex-wrap gap-2 mb-5">
              {[1, 2].map((sem) => (
                <button
                  key={sem}
                  type="button"
                  onClick={() => setSelectedSemester(sem)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200 ${
                    selectedSemester === sem
                      ? 'bg-primary text-white border-primary shadow-sm'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-primary hover:text-primary'
                  }`}
                >
                  {sem === 1 ? txt.semester1 : txt.semester2}
                </button>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-5">
                <p className="text-sm text-gray-500 dark:text-gray-400">{txt.gpa}</p>
                <p className="text-3xl font-bold text-primary mt-1">{semesterAvg}</p>
                <p className="text-xs text-gray-400 mt-1">{selectedSemester === 1 ? txt.semester1 : txt.semester2}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-5">
                <p className="text-sm text-gray-500 dark:text-gray-400">{txt.grade}</p>
                <span className={`inline-block mt-2 px-3 py-1 rounded-lg font-bold text-lg ${semesterGrade.color}`}>
                  {semesterGrade.letter}
                </span>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-5">
                <p className="text-sm text-gray-500 dark:text-gray-400">{txt.rank}</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                  #{selectedSemester === 1 ? 3 : 2}
                </p>
                <p className="text-xs text-gray-400 mt-1">/ 42 {txt.students}</p>
              </div>
            </div>

            {/* Table */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="px-4 sm:px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                  {txt.grades} — {selectedSemester === 1 ? txt.semester1 : txt.semester2}
                </h2>
                <span className="text-xs text-primary font-medium sm:hidden">
                  {txt.scrollHint}
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[540px] text-sm">
                  <thead className="bg-gray-50 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">{txt.subject}</th>
                      <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">{txt.teacher}</th>
                      <th className="px-3 py-3 text-center font-semibold whitespace-nowrap">{txt.midterm}</th>
                      <th className="px-3 py-3 text-center font-semibold whitespace-nowrap">{txt.final}</th>
                      <th className="px-3 py-3 text-center font-semibold whitespace-nowrap">{txt.average}</th>
                      <th className="px-3 py-3 text-center font-semibold whitespace-nowrap">{txt.grade}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                    {currentSemesterList.map((g, idx) => {
                      const avg = getAverage(g);
                      const gradeInfo = getGrade(avg);
                      return (
                        <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-900/30 transition">
                          <td className="px-4 py-3.5 font-semibold text-gray-900 dark:text-white whitespace-nowrap">
                            {lang === 'KH' ? g.subjectKh : g.subjectEn}
                          </td>
                          <td className="px-4 py-3.5 text-gray-600 dark:text-gray-400 whitespace-nowrap">
                            {lang === 'KH' ? g.teacherKh : g.teacherEn}
                          </td>
                          <td className="px-3 py-3.5 text-center text-gray-700 dark:text-gray-300 whitespace-nowrap">{g.midterm}</td>
                          <td className="px-3 py-3.5 text-center text-gray-700 dark:text-gray-300 whitespace-nowrap">{g.final}</td>
                          <td className="px-3 py-3.5 text-center font-bold text-gray-900 dark:text-white whitespace-nowrap">{avg}</td>
                          <td className="px-3 py-3.5 text-center whitespace-nowrap">
                            <span className={`inline-block px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-xs font-bold ${gradeInfo.color}`}>
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

            {/* Year summary */}
            <div className="mt-5 bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-xl p-4 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {lang === 'KH' ? 'មធ្យមភាគពេញមួយឆ្នាំ' : 'Yearly Overall GPA'}:{' '}
                <span className="font-bold text-primary text-lg ml-1">{yearGPA}</span>
              </p>
            </div>
          </>
        )}

        {/* ============================================================ */}
        {/* =================== MONTHLY VIEW ============================ */}
        {/* ============================================================ */}
        {viewMode === 'monthly' && (
          <>
            {/* Month selector */}
            <div className="flex flex-wrap gap-2 mb-5">
              {months.map((m) => (
                <button
                  key={m.key}
                  type="button"
                  onClick={() => setSelectedMonth(m.key)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200 ${
                    selectedMonth === m.key
                      ? 'bg-primary text-white border-primary shadow-sm'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-primary hover:text-primary'
                  }`}
                >
                  {lang === 'KH' ? m.kh : m.en}
                </button>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-5">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {txt.average} ({txt.monthTitle} {lang === 'KH' ? months.find(m => m.key === selectedMonth)?.kh : months.find(m => m.key === selectedMonth)?.en})
                </p>
                <p className="text-3xl font-bold text-primary mt-1">{monthAvg}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-5">
                <p className="text-sm text-gray-500 dark:text-gray-400">{txt.grade}</p>
                <span className={`inline-block mt-2 px-3 py-1 rounded-lg font-bold text-lg ${monthGrade.color}`}>
                  {monthGrade.letter}
                </span>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-5">
                <p className="text-sm text-gray-500 dark:text-gray-400">⭐ {txt.bestSubject}</p>
                <p className="text-base font-bold text-gray-900 dark:text-white mt-2 truncate">
                  {bestSubject ? (lang === 'KH' ? bestSubject.subjectKh : bestSubject.subjectEn) : '—'}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {bestSubject ? `${bestSubject.score} ${lang === 'KH' ? 'ពិន្ទុ' : 'pts'}` : ''}
                </p>
              </div>
            </div>

            {/* Table with progress bar */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="px-4 sm:px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                  {txt.grades} — {txt.monthTitle} {lang === 'KH' ? months.find(m => m.key === selectedMonth)?.kh : months.find(m => m.key === selectedMonth)?.en}
                </h2>
                <span className="text-xs text-primary font-medium sm:hidden">
                  {txt.scrollHint}
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[540px] text-sm">
                  <thead className="bg-gray-50 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">{txt.subject}</th>
                      <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">{txt.teacher}</th>
                      <th className="px-3 py-3 text-center font-semibold whitespace-nowrap">{txt.score}</th>
                      <th className="px-4 py-3 text-left font-semibold whitespace-nowrap w-40 hidden sm:table-cell">
                        {lang === 'KH' ? 'កម្រិត' : 'Progress'}
                      </th>
                      <th className="px-3 py-3 text-center font-semibold whitespace-nowrap">{txt.grade}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                    {currentMonthList.map((g, idx) => {
                      const gradeInfo = getGrade(g.score);
                      return (
                        <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-900/30 transition">
                          <td className="px-4 py-3.5 font-semibold text-gray-900 dark:text-white whitespace-nowrap">
                            {lang === 'KH' ? g.subjectKh : g.subjectEn}
                          </td>
                          <td className="px-4 py-3.5 text-gray-600 dark:text-gray-400 whitespace-nowrap">
                            {lang === 'KH' ? g.teacherKh : g.teacherEn}
                          </td>
                          <td className="px-3 py-3.5 text-center font-bold text-gray-900 dark:text-white whitespace-nowrap">
                            {g.score}
                          </td>
                          <td className="px-4 py-3.5 hidden sm:table-cell">
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden min-w-[80px]">
                                <div
                                  className={`h-full ${getProgressColor(g.score)} rounded-full transition-all duration-500`}
                                  style={{ width: `${g.score}%` }}
                                />
                              </div>
                              <span className="text-xs text-gray-500 dark:text-gray-400 w-9 text-right">
                                {g.score}%
                              </span>
                            </div>
                          </td>
                          <td className="px-3 py-3.5 text-center whitespace-nowrap">
                            <span className={`inline-block px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-xs font-bold ${gradeInfo.color}`}>
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
          </>
        )}
      </div>
    </div>
  );
};

export default StudentGrades;