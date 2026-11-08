import React, { useState } from 'react';

const StudentGrades = ({ lang, student, onLogout }) => {
  const [viewMode, setViewMode] = useState('semester');
  const [selectedSemester, setSelectedSemester] = useState(1);
  const [selectedMonth, setSelectedMonth] = useState('oct');

  // ============ ការបកប្រែភាសា (Translation) ============
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
    progress: lang === 'KH' ? 'កម្រិត' : 'Progress',
  };

  // ============ DATA (ទិន្នន័យគំរូ) ============
  const semesterGrades = {
    1: [
      { subjectKh: 'គណិតវិទ្យា', subjectEn: 'Mathematics', teacherKh: 'គ្រូ សុខា', teacherEn: 'Mr. Sokha', midterm: 85, final: 88 },
      { subjectKh: 'អក្សរសាស្ត្រខ្មែរ', subjectEn: 'Khmer Literature', teacherKh: 'គ្រូ ស្រីមុំ', teacherEn: 'Mrs. Srey Mom', midterm: 78, final: 82 },
      { subjectKh: 'រូបវិទ្យា', subjectEn: 'Physics', teacherKh: 'គ្រូ ដារា', teacherEn: 'Mr. Dara', midterm: 42, final: 48 }, // ❌ F
      { subjectKh: 'គីមីវិទ្យា', subjectEn: 'Chemistry', teacherKh: 'គ្រូ សុភា', teacherEn: 'Mrs. Sophea', midterm: 80, final: 83 },
      { subjectKh: 'ជីវវិទ្យា', subjectEn: 'Biology', teacherKh: 'គ្រូ វិចិត្រ', teacherEn: 'Mr. Vichet', midterm: 88, final: 90 },
      { subjectKh: 'ភាសាអង់គ្លេស', subjectEn: 'English', teacherKh: 'គ្រូ ចន', teacherEn: 'Mr. John', midterm: 75, final: 80 },
      { subjectKh: 'ប្រវត្តិវិទ្យា', subjectEn: 'History', teacherKh: 'គ្រូ សុខុម', teacherEn: 'Mr. Sokhom', midterm: 62, final: 65 }, // D
      { subjectKh: 'ភូមិវិទ្យា', subjectEn: 'Geography', teacherKh: 'គ្រូ ចន្ថា', teacherEn: 'Mrs. Chantha', midterm: 55, final: 58 }, // E
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

  const monthlyGrades = {
    oct: [
      { subjectKh: 'គណិតវិទ្យា', subjectEn: 'Mathematics', teacherKh: 'គ្រូ សុខា', teacherEn: 'Mr. Sokha', score: 85 },
      { subjectKh: 'អក្សរសាស្ត្រខ្មែរ', subjectEn: 'Khmer Literature', teacherKh: 'គ្រូ ស្រីមុំ', teacherEn: 'Mrs. Srey Mom', score: 78 },
      { subjectKh: 'រូបវិទ្យា', subjectEn: 'Physics', teacherKh: 'គ្រូ ដារា', teacherEn: 'Mr. Dara', score: 45 }, // ❌ F
      { subjectKh: 'គីមីវិទ្យា', subjectEn: 'Chemistry', teacherKh: 'គ្រូ សុភា', teacherEn: 'Mrs. Sophea', score: 80 },
      { subjectKh: 'ជីវវិទ្យា', subjectEn: 'Biology', teacherKh: 'គ្រូ វិចិត្រ', teacherEn: 'Mr. Vichet', score: 88 },
      { subjectKh: 'ភាសាអង់គ្លេស', subjectEn: 'English', teacherKh: 'គ្រូ ចន', teacherEn: 'Mr. John', score: 75 },
      { subjectKh: 'ប្រវត្តិវិទ្យា', subjectEn: 'History', teacherKh: 'គ្រូ សុខុម', teacherEn: 'Mr. Sokhom', score: 63 }, // D
      { subjectKh: 'ភូមិវិទ្យា', subjectEn: 'Geography', teacherKh: 'គ្រូ ចន្ថា', teacherEn: 'Mrs. Chantha', score: 56 }, // E
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

  // 🎨 និទ្ទេស A–F + ស្លាក
  const getGrade = (avg) => {
    const a = parseFloat(avg);
    if (a >= 90) return {
      letter: 'A', labelKh: 'ល្អណាស់', labelEn: 'Excellent',
      badge: 'bg-emerald-600 text-white', text: 'text-emerald-700 dark:text-emerald-400',
      softBg: 'bg-emerald-50 dark:bg-emerald-900/30',
      border: 'border-emerald-200 dark:border-emerald-800', bar: 'bg-emerald-500',
    };
    if (a >= 80) return {
      letter: 'B', labelKh: 'ល្អ', labelEn: 'Good',
      badge: 'bg-blue-600 text-white', text: 'text-blue-700 dark:text-blue-400',
      softBg: 'bg-blue-50 dark:bg-blue-900/30',
      border: 'border-blue-200 dark:border-blue-800', bar: 'bg-blue-500',
    };
    if (a >= 70) return {
      letter: 'C', labelKh: 'ល្អបង្គួរ', labelEn: 'Fairly Good',
      badge: 'bg-amber-500 text-white', text: 'text-amber-700 dark:text-amber-400',
      softBg: 'bg-amber-50 dark:bg-amber-900/30',
      border: 'border-amber-200 dark:border-amber-800', bar: 'bg-amber-500',
    };
    if (a >= 60) return {
      letter: 'D', labelKh: 'មធ្យម', labelEn: 'Average',
      badge: 'bg-orange-600 text-white', text: 'text-orange-700 dark:text-orange-400',
      softBg: 'bg-orange-50 dark:bg-orange-900/30',
      border: 'border-orange-200 dark:border-orange-800', bar: 'bg-orange-500',
    };
    if (a >= 50) return {
      letter: 'E', labelKh: 'មធ្យម', labelEn: 'Average',
      badge: 'bg-yellow-700 text-white', text: 'text-yellow-800 dark:text-yellow-500',
      softBg: 'bg-yellow-50 dark:bg-yellow-900/30',
      border: 'border-yellow-200 dark:border-yellow-800', bar: 'bg-yellow-700',
    };
    return {
      letter: 'F', labelKh: 'ធ្លាក់', labelEn: 'Fail',
      badge: 'bg-red-600 text-white', text: 'text-red-700 dark:text-red-400',
      softBg: 'bg-red-50 dark:bg-red-900/30',
      border: 'border-red-200 dark:border-red-800', bar: 'bg-red-500',
    };
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

  const yearGPA = (
    (parseFloat(getSemesterAverage(semesterGrades[1])) +
      parseFloat(getSemesterAverage(semesterGrades[2]))) / 2
  ).toFixed(1);
  const yearGrade = getGrade(yearGPA);

  const studentName = student
    ? (lang === 'KH' ? (student.nameKh || student.nameEn) : (student.nameEn || student.nameKh))
    : '';

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-900 py-8 px-4 sm:px-6 lg:px-8 ${lang === 'KH' ? 'font-khmer' : 'font-sans'}`}>
      <div className="max-w-6xl mx-auto">

        {/* ============ HEADER CARD ============ */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-2xl font-bold text-primary">
                {studentName?.charAt(0) || 'S'}
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{txt.welcome},</p>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white mt-0.5">{studentName}</h1>
                <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2 text-sm text-slate-600 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{txt.studentId}:</span> {student?.id}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{txt.classLabel}:</span> {student?.grade}
                  </span>
                  <span className="flex items-center gap-1.5 bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-semibold">
                    {txt.year}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap gap-2.5 sm:gap-3 w-full sm:w-auto">
              <button
                onClick={() => window.print()}
                className="flex-1 sm:flex-initial px-4 py-2 text-sm font-medium bg-white dark:bg-slate-700 border border-primary/30 text-primary rounded-lg hover:bg-primary/5 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                {txt.print}
              </button>
              <button
                onClick={onLogout}
                className="flex-1 sm:flex-initial px-4 py-2 text-sm font-medium bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                {txt.logout}
              </button>
            </div>
          </div>
        </div>

        {/* ============ MAIN VIEW TOGGLE ============ */}
        <div className="flex bg-slate-200/60 dark:bg-slate-800 p-1 rounded-lg w-fit mb-6 border border-slate-200 dark:border-slate-700">
          <button
            type="button"
            onClick={() => setViewMode('semester')}
            className={`px-6 py-2 text-sm font-semibold rounded-md transition-all ${
              viewMode === 'semester'
                ? 'bg-primary text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary'
            }`}
          >
            {txt.semester}
          </button>
          <button
            type="button"
            onClick={() => setViewMode('monthly')}
            className={`px-6 py-2 text-sm font-semibold rounded-md transition-all ${
              viewMode === 'monthly'
                ? 'bg-primary text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary'
            }`}
          >
            {txt.monthly}
          </button>
        </div>

        {/* =================== SEMESTER VIEW =================== */}
        {viewMode === 'semester' && (
          <>
            {/* Semester sub-tabs */}
            <div className="flex flex-wrap gap-3 mb-6">
              {[1, 2].map((sem) => {
                const semAvg = getSemesterAverage(semesterGrades[sem]);
                const semGrade = getGrade(semAvg);
                const isActive = selectedSemester === sem;
                return (
                  <button
                    key={sem}
                    type="button"
                    onClick={() => setSelectedSemester(sem)}
                    className={`flex items-center gap-3 px-5 py-3 text-sm font-semibold rounded-lg border transition-all ${
                      isActive
                        ? 'bg-primary text-white border-primary shadow-sm'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-primary/50'
                    }`}
                  >
                    <span>{sem === 1 ? txt.semester1 : txt.semester2}</span>
                    <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                      isActive ? 'bg-white/20 text-white' : `${semGrade.softBg} ${semGrade.text}`
                    }`}>
                      {semAvg}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
              {/* GPA Card */}
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 flex flex-col justify-between">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{txt.gpa}</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <p className={`text-4xl font-bold ${parseFloat(semesterAvg) >= 80 ? 'text-primary' : semesterGrade.text}`}>{semesterAvg}</p>
                  <span className="text-sm text-slate-400">/ 100</span>
                </div>
                <p className="text-xs font-medium text-slate-400 mt-2">{selectedSemester === 1 ? txt.semester1 : txt.semester2}</p>
              </div>

              {/* Grade Card */}
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 flex flex-col justify-between">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{txt.grade}</p>
                <div className="mt-2 flex items-center gap-3">
                  <span className={`inline-flex items-center justify-center w-14 h-14 rounded-lg text-2xl font-black ${semesterGrade.badge}`}>
                    {semesterGrade.letter}
                  </span>
                  <p className={`text-base font-bold ${semesterGrade.text}`}>
                    {lang === 'KH' ? semesterGrade.labelKh : semesterGrade.labelEn}
                  </p>
                </div>
              </div>

              {/* Rank Card */}
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 flex flex-col justify-between">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{txt.rank}</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <p className="text-4xl font-bold text-slate-800 dark:text-slate-100">
                    {selectedSemester === 1 ? 3 : 2}
                  </p>
                  <span className="text-sm font-medium text-slate-500">/ 42 {txt.students}</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full mt-3 overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden mb-6">
              <div className="px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-200 dark:border-slate-700 bg-primary/5 flex items-center justify-between">
                <h2 className="text-sm sm:text-base font-bold text-primary">
                  {txt.grades} — {selectedSemester === 1 ? txt.semester1 : txt.semester2}
                </h2>
                <span className="text-xs font-normal text-primary/70 sm:hidden flex items-center gap-1">
                  {txt.scrollHint}
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    <tr>
                      <th className="px-6 py-3 font-semibold">{txt.subject}</th>
                      <th className="px-6 py-3 font-semibold">{txt.teacher}</th>
                      <th className="px-4 py-3 font-semibold text-center">{txt.midterm}</th>
                      <th className="px-4 py-3 font-semibold text-center">{txt.final}</th>
                      <th className="px-4 py-3 font-semibold text-center">{txt.average}</th>
                      <th className="px-6 py-3 font-semibold min-w-[160px]">{txt.progress}</th>
                      <th className="px-6 py-3 font-semibold text-center">{txt.grade}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
                    {currentSemesterList.map((g, idx) => {
                      const avg = getAverage(g);
                      const gradeInfo = getGrade(avg);
                      return (
                        <tr key={idx} className="hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors">
                          <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100 whitespace-nowrap">
                            {lang === 'KH' ? g.subjectKh : g.subjectEn}
                          </td>
                          <td className="px-6 py-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">
                            {lang === 'KH' ? g.teacherKh : g.teacherEn}
                          </td>
                          <td className="px-4 py-4 text-center text-slate-600 dark:text-slate-300">{g.midterm}</td>
                          <td className="px-4 py-4 text-center text-slate-600 dark:text-slate-300">{g.final}</td>
                          <td className={`px-4 py-4 text-center font-bold ${gradeInfo.text}`}>{avg}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                <div className={`h-full ${gradeInfo.bar} rounded-full`} style={{ width: `${Math.min(100, Math.max(0, avg))}%` }} />
                              </div>
                              <span className="text-xs font-semibold text-slate-500 w-8 text-right">{avg}%</span>
                            </div>
                          </td>
                          {/* ✅ កែសម្រួល៖ បន្ថែម min-w និង justify-center ដើម្បីឱ្យប្រអប់ស្មើគ្នា */}
                          <td className="px-6 py-4 text-center whitespace-nowrap">
                            <div className={`inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg border min-w-[100px] ${gradeInfo.border} ${gradeInfo.softBg}`}>
                              <span className={`inline-flex items-center justify-center w-6 h-6 rounded-md text-xs font-black ${gradeInfo.badge}`}>
                                {gradeInfo.letter}
                              </span>
                              <span className={`text-sm font-bold ${gradeInfo.text}`}>
                                {lang === 'KH' ? gradeInfo.labelKh : gradeInfo.labelEn}
                              </span>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Year Summary */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-primary/30 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-primary">
                  {lang === 'KH' ? 'មធ្យមភាគពេញមួយឆ្នាំ' : 'Yearly Overall GPA'}
                </p>
                <p className="text-sm text-slate-500 mt-1">{lang === 'KH' ? 'ផ្អែកលើឆមាសទី១ និង ឆមាសទី២' : 'Based on Semester 1 & 2'}</p>
              </div>
              <div className="flex items-center gap-4 self-end sm:self-auto">
                <div className="text-right">
                  <p className={`text-sm font-bold ${yearGrade.text}`}>
                    {lang === 'KH' ? yearGrade.labelKh : yearGrade.labelEn}
                  </p>
                  <p className={`text-3xl font-extrabold ${yearGrade.text}`}>{yearGPA}</p>
                </div>
                <span className={`inline-flex items-center justify-center w-12 h-12 rounded-lg text-xl font-black ${yearGrade.badge}`}>
                  {yearGrade.letter}
                </span>
              </div>
            </div>
          </>
        )}

        {/* =================== MONTHLY VIEW =================== */}
        {viewMode === 'monthly' && (
          <>
            {/* Month selector */}
            <div className="flex flex-wrap gap-2 mb-6">
              {months.map((m) => {
                const isActive = selectedMonth === m.key;
                return (
                  <button
                    key={m.key}
                    type="button"
                    onClick={() => setSelectedMonth(m.key)}
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border transition-all ${
                      isActive
                        ? 'bg-primary text-white border-primary shadow-sm'
                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-primary/50'
                    }`}
                  >
                    {lang === 'KH' ? m.kh : m.en}
                  </button>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {txt.average} ({lang === 'KH' ? months.find(m => m.key === selectedMonth)?.kh : months.find(m => m.key === selectedMonth)?.en})
                </p>
                <p className={`text-4xl font-bold mt-2 ${parseFloat(monthAvg) >= 80 ? 'text-primary' : monthGrade.text}`}>{monthAvg}</p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{txt.grade}</p>
                <div className="mt-2 flex items-center gap-3">
                  <span className={`inline-flex items-center justify-center w-14 h-14 rounded-lg text-2xl font-black ${monthGrade.badge}`}>
                    {monthGrade.letter}
                  </span>
                  <p className={`text-base font-bold ${monthGrade.text}`}>
                    {lang === 'KH' ? monthGrade.labelKh : monthGrade.labelEn}
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{txt.bestSubject}</p>
                <p className="text-lg font-bold text-slate-800 dark:text-slate-100 mt-2 truncate">
                  {bestSubject ? (lang === 'KH' ? bestSubject.subjectKh : bestSubject.subjectEn) : '—'}
                </p>
                {bestSubject && (
                  <p className={`text-sm mt-1 font-semibold ${getGrade(bestSubject.score).text}`}>
                    {bestSubject.score} {lang === 'KH' ? 'ពិន្ទុ' : 'pts'}
                  </p>
                )}
              </div>
            </div>

            {/* Table */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-200 dark:border-slate-700 bg-primary/5 flex items-center justify-between">
                <h2 className="text-sm sm:text-base font-bold text-primary">
                  {txt.grades} — {lang === 'KH' ? months.find(m => m.key === selectedMonth)?.kh : months.find(m => m.key === selectedMonth)?.en}
                </h2>
                <span className="text-xs font-normal text-primary/70 sm:hidden flex items-center gap-1">
                  {txt.scrollHint}
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                    <tr>
                      <th className="px-6 py-3 font-semibold">{txt.subject}</th>
                      <th className="px-6 py-3 font-semibold">{txt.teacher}</th>
                      <th className="px-4 py-3 font-semibold text-center">{txt.score}</th>
                      <th className="px-6 py-3 font-semibold min-w-[160px]">{txt.progress}</th>
                      <th className="px-6 py-3 font-semibold text-center">{txt.grade}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
                    {currentMonthList.map((g, idx) => {
                      const gradeInfo = getGrade(g.score);
                      return (
                        <tr key={idx} className="hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors">
                          <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100 whitespace-nowrap">
                            {lang === 'KH' ? g.subjectKh : g.subjectEn}
                          </td>
                          <td className="px-6 py-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">
                            {lang === 'KH' ? g.teacherKh : g.teacherEn}
                          </td>
                          <td className={`px-4 py-4 text-center font-bold ${gradeInfo.text}`}>{g.score}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                <div className={`h-full ${gradeInfo.bar} rounded-full`} style={{ width: `${g.score}%` }} />
                              </div>
                              <span className="text-xs font-semibold text-slate-500 w-8 text-right">{g.score}%</span>
                            </div>
                          </td>
                          {/* ✅ កែសម្រួល៖ បន្ថែម min-w និង justify-center ដើម្បីឱ្យប្រអប់ស្មើគ្នា */}
                          <td className="px-6 py-4 text-center whitespace-nowrap">
                            <div className={`inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg border min-w-[100px] ${gradeInfo.border} ${gradeInfo.softBg}`}>
                              <span className={`inline-flex items-center justify-center w-6 h-6 rounded-md text-xs font-black ${gradeInfo.badge}`}>
                                {gradeInfo.letter}
                              </span>
                              <span className={`text-sm font-bold ${gradeInfo.text}`}>
                                {lang === 'KH' ? gradeInfo.labelKh : gradeInfo.labelEn}
                              </span>
                            </div>
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