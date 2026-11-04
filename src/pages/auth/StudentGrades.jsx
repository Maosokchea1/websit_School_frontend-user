import React, { useState } from 'react';

const StudentGrades = ({ lang, student, onLogout }) => {
  const [viewMode, setViewMode] = useState('semester');
  const [selectedSemester, setSelectedSemester] = useState(1);
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
    progress: lang === 'KH' ? 'កម្រិត' : 'Progress',
  };

  // ============ SEMESTER DATA ============
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

  // ============ MONTHLY DATA ============
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

  // 🎨 Grade palette & Professional SVG Icons
  const getGrade = (avg) => {
    const a = parseFloat(avg);
    if (a >= 90) return {
      letter: 'A',
      badge: 'bg-gradient-to-br from-emerald-400 to-emerald-600',
      text: 'text-emerald-600 dark:text-emerald-400',
      softBg: 'bg-emerald-50 dark:bg-emerald-900/20',
      border: 'border-emerald-200 dark:border-emerald-800',
      bar: 'bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600',
      tint: 'from-emerald-500/15 via-emerald-500/5 to-transparent',
      icon: (
        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
        </svg>
      ),
    };
    if (a >= 80) return {
      letter: 'B',
      badge: 'bg-gradient-to-br from-blue-400 to-blue-600',
      text: 'text-blue-600 dark:text-blue-400',
      softBg: 'bg-blue-50 dark:bg-blue-900/20',
      border: 'border-blue-200 dark:border-blue-800',
      bar: 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600',
      tint: 'from-blue-500/15 via-blue-500/5 to-transparent',
      icon: (
        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ),
    };
    if (a >= 70) return {
      letter: 'C',
      badge: 'bg-gradient-to-br from-amber-400 to-amber-600',
      text: 'text-amber-600 dark:text-amber-400',
      softBg: 'bg-amber-50 dark:bg-amber-900/20',
      border: 'border-amber-200 dark:border-amber-800',
      bar: 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600',
      tint: 'from-amber-500/15 via-amber-500/5 to-transparent',
      icon: (
        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
    };
    if (a >= 60) return {
      letter: 'D',
      badge: 'bg-gradient-to-br from-orange-400 to-orange-600',
      text: 'text-orange-600 dark:text-orange-400',
      softBg: 'bg-orange-50 dark:bg-orange-900/20',
      border: 'border-orange-200 dark:border-orange-800',
      bar: 'bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600',
      tint: 'from-orange-500/15 via-orange-500/5 to-transparent',
      icon: (
        <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    };
    return {
      letter: 'F',
      badge: 'bg-gradient-to-br from-red-400 to-red-600',
      text: 'text-red-600 dark:text-red-400',
      softBg: 'bg-red-50 dark:bg-red-900/20',
      border: 'border-red-200 dark:border-red-800',
      bar: 'bg-gradient-to-r from-red-400 via-red-500 to-red-600',
      tint: 'from-red-500/15 via-red-500/5 to-transparent',
      icon: (
        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
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
    ? (lang === 'KH'
        ? (student.nameKh || student.nameEn)
        : (student.nameEn || student.nameKh))
    : '';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* ============ HEADER CARD ============ */}
        <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-black/30 border border-gray-100 dark:border-gray-700 p-6 mb-6">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-primary/5 to-transparent rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 text-white flex items-center justify-center text-2xl font-bold shadow-lg shadow-primary/30">
                  {studentName?.charAt(0) || 'S'}
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white dark:border-gray-800" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-gray-400 dark:text-gray-500">
                  {txt.welcome}
                </p>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-0.5">
                  {studentName}
                </h1>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1.5 text-xs text-gray-500 dark:text-gray-400">
                  <span><strong className="text-gray-700 dark:text-gray-300">{txt.studentId}:</strong> {student?.id}</span>
                  <span><strong className="text-gray-700 dark:text-gray-300">{txt.classLabel}:</strong> {student?.grade}</span>
                  <span className="inline-flex items-center gap-1.5 text-primary font-semibold">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {txt.year}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-xl flex items-center gap-1.5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                {txt.print}
              </button>
              <button
                onClick={onLogout}
                className="px-4 py-2 text-sm font-medium bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl flex items-center gap-1.5"
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
        <div className="flex gap-2 mb-5 p-1.5 bg-white/70 dark:bg-gray-800/70 backdrop-blur rounded-2xl w-fit mx-auto sm:mx-0 shadow-sm border border-gray-100 dark:border-gray-700">
          <button
            type="button"
            onClick={() => setViewMode('semester')}
            className={`flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl ${
              viewMode === 'semester'
                ? 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-md shadow-primary/30'
                : 'text-gray-600 dark:text-gray-400'
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
            className={`flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl ${
              viewMode === 'monthly'
                ? 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-md shadow-primary/30'
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            {txt.monthly}
          </button>
        </div>

        {/* =================== SEMESTER VIEW =================== */}
        {viewMode === 'semester' && (
          <>
            {/* Semester sub-tabs */}
            <div className="flex flex-wrap gap-2 mb-5">
              {[1, 2].map((sem) => {
                const semAvg = getSemesterAverage(semesterGrades[sem]);
                const semGrade = getGrade(semAvg);
                const isActive = selectedSemester === sem;
                return (
                  <button
                    key={sem}
                    type="button"
                    onClick={() => setSelectedSemester(sem)}
                    className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl border-2 ${
                      isActive
                        ? `bg-gradient-to-r ${semGrade.badge.split(' ').slice(0,2).join(' ')} text-white border-transparent shadow-md`
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                      isActive ? 'bg-white/25' : 'bg-gray-100 dark:bg-gray-700'
                    }`}>{sem}</span>
                    {sem === 1 ? txt.semester1 : txt.semester2}
                    <span className={`text-xs px-1.5 py-0.5 rounded-md font-bold ${
                      isActive ? 'bg-white/20 text-white' : `${semGrade.softBg} ${semGrade.text}`
                    }`}>{semAvg}</span>
                  </button>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className={`relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-sm border ${semesterGrade.border} p-5`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${semesterGrade.tint} pointer-events-none`} />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{txt.gpa}</p>
                    <span className="text-xl">{semesterGrade.icon}</span>
                  </div>
                  <p className={`text-4xl font-extrabold mt-2 ${semesterGrade.text}`}>{semesterAvg}</p>
                  <p className="text-xs text-gray-400 mt-1">{selectedSemester === 1 ? txt.semester1 : txt.semester2}</p>
                </div>
              </div>

              <div className={`relative overflow-hidden rounded-2xl shadow-md ${semesterGrade.badge} p-5`}>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/15 rounded-full pointer-events-none" />
                <div className="absolute -bottom-8 -right-2 w-20 h-20 bg-white/10 rounded-full pointer-events-none" />
                <div className="relative">
                  <p className="text-sm font-medium text-white/80">{txt.grade}</p>
                  <p className="text-5xl font-black text-white mt-1">{semesterGrade.letter}</p>
                  <p className="text-xs text-white/70 mt-1">{semesterAvg} / 100</p>
                </div>
              </div>

              <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-100 dark:from-amber-900/20 to-transparent rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{txt.rank}</p>
                    <span className="text-primary">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </span>
                  </div>
                  <p className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2">
                    #{selectedSemester === 1 ? 3 : 2}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">/ 42 {txt.students}</p>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="px-4 sm:px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between bg-gradient-to-r from-gray-50/80 to-transparent dark:from-gray-900/40">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                  {txt.grades} — {selectedSemester === 1 ? txt.semester1 : txt.semester2}
                </h2>
                <span className="text-xs text-primary font-medium sm:hidden">{txt.scrollHint}</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[580px] text-sm">
                  <thead className="bg-gray-50 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">{txt.subject}</th>
                      <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">{txt.teacher}</th>
                      <th className="px-3 py-3 text-center font-semibold whitespace-nowrap">{txt.midterm}</th>
                      <th className="px-3 py-3 text-center font-semibold whitespace-nowrap">{txt.final}</th>
                      <th className="px-3 py-3 text-center font-semibold whitespace-nowrap">{txt.average}</th>
                      <th className="px-4 py-3 text-left font-semibold whitespace-nowrap min-w-[150px]">{txt.progress}</th>
                      <th className="px-3 py-3 text-center font-semibold whitespace-nowrap">{txt.grade}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                    {currentSemesterList.map((g, idx) => {
                      const avg = getAverage(g);
                      const gradeInfo = getGrade(avg);
                      return (
                        <tr key={idx}>
                          <td className="px-4 py-3.5 font-semibold text-gray-900 dark:text-white whitespace-nowrap">
                            {lang === 'KH' ? g.subjectKh : g.subjectEn}
                          </td>
                          <td className="px-4 py-3.5 text-gray-600 dark:text-gray-400 whitespace-nowrap">
                            {lang === 'KH' ? g.teacherKh : g.teacherEn}
                          </td>
                          <td className="px-3 py-3.5 text-center text-gray-700 dark:text-gray-300 whitespace-nowrap">{g.midterm}</td>
                          <td className="px-3 py-3.5 text-center text-gray-700 dark:text-gray-300 whitespace-nowrap">{g.final}</td>
                          <td className={`px-3 py-3.5 text-center font-bold whitespace-nowrap ${gradeInfo.text}`}>{avg}</td>
                          <td className="px-4 py-3.5 min-w-[150px]">
                            <div className="flex items-center gap-2.5">
                              <div className="flex-1 h-2.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden min-w-[70px]">
                                <div
                                  className={`h-full ${gradeInfo.bar} rounded-full`}
                                  style={{ width: `${Math.min(100, Math.max(0, avg))}%` }}
                                />
                              </div>
                              <span className={`px-2 py-0.5 rounded-md text-xs font-bold whitespace-nowrap ${gradeInfo.softBg} ${gradeInfo.text}`}>
                                {avg}%
                              </span>
                            </div>
                          </td>
                          <td className="px-3 py-3.5 text-center whitespace-nowrap">
                            <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg text-xs font-extrabold text-white ${gradeInfo.badge}`}>
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
            <div className={`mt-5 relative overflow-hidden rounded-2xl border-2 ${yearGrade.border} p-5`}>
              <div className={`absolute inset-0 bg-gradient-to-r ${yearGrade.tint} pointer-events-none`} />
              <div className="relative flex items-center justify-center gap-4 flex-wrap">
                <span className="text-3xl">{yearGrade.icon}</span>
                <div className="text-center">
                  <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
                    {lang === 'KH' ? 'មធ្យមភាគពេញមួយឆ្នាំ' : 'Yearly Overall GPA'}
                  </p>
                  <p className={`text-3xl font-extrabold mt-0.5 ${yearGrade.text}`}>{yearGPA}</p>
                </div>
                <span className={`inline-flex items-center justify-center px-3 py-1.5 rounded-lg text-sm font-extrabold text-white ${yearGrade.badge}`}>
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
            <div className="flex flex-wrap gap-2 mb-5">
              {months.map((m) => {
                const mAvg = getMonthlyAverage(monthlyGrades[m.key]);
                const mGrade = getGrade(mAvg);
                const isActive = selectedMonth === m.key;
                return (
                  <button
                    key={m.key}
                    type="button"
                    onClick={() => setSelectedMonth(m.key)}
                    className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl border-2 ${
                      isActive
                        ? `bg-gradient-to-r ${mGrade.badge.split(' ').slice(0,2).join(' ')} text-white border-transparent shadow-md`
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    {lang === 'KH' ? m.kh : m.en}
                    <span className={`text-xs px-1.5 py-0.5 rounded-md font-bold ${
                      isActive ? 'bg-white/20 text-white' : `${mGrade.softBg} ${mGrade.text}`
                    }`}>{mAvg}</span>
                  </button>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className={`relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-sm border ${monthGrade.border} p-5`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${monthGrade.tint} pointer-events-none`} />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {txt.average} ({lang === 'KH'
                        ? months.find(m => m.key === selectedMonth)?.kh
                        : months.find(m => m.key === selectedMonth)?.en})
                    </p>
                    <span className="text-xl">{monthGrade.icon}</span>
                  </div>
                  <p className={`text-4xl font-extrabold mt-2 ${monthGrade.text}`}>{monthAvg}</p>
                </div>
              </div>

              <div className={`relative overflow-hidden rounded-2xl shadow-md ${monthGrade.badge} p-5`}>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/15 rounded-full pointer-events-none" />
                <div className="absolute -bottom-8 -right-2 w-20 h-20 bg-white/10 rounded-full pointer-events-none" />
                <div className="relative">
                  <p className="text-sm font-medium text-white/80">{txt.grade}</p>
                  <p className="text-5xl font-black text-white mt-1">{monthGrade.letter}</p>
                  <p className="text-xs text-white/70 mt-1">{monthAvg} / 100</p>
                </div>
              </div>

              <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-100 dark:from-amber-900/20 to-transparent rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />
                <div className="relative">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    {txt.bestSubject}
                  </p>
                  <p className="text-base font-bold text-gray-900 dark:text-white mt-2 truncate">
                    {bestSubject ? (lang === 'KH' ? bestSubject.subjectKh : bestSubject.subjectEn) : '—'}
                  </p>
                  {bestSubject && (
                    <p className={`text-xs mt-1 font-semibold ${getGrade(bestSubject.score).text}`}>
                      {bestSubject.score} {lang === 'KH' ? 'ពិន្ទុ' : 'pts'}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="px-4 sm:px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between bg-gradient-to-r from-gray-50/80 to-transparent dark:from-gray-900/40">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                  {txt.grades} — {txt.monthTitle}{' '}
                  {lang === 'KH'
                    ? months.find(m => m.key === selectedMonth)?.kh
                    : months.find(m => m.key === selectedMonth)?.en}
                </h2>
                <span className="text-xs text-primary font-medium sm:hidden">{txt.scrollHint}</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[580px] text-sm">
                  <thead className="bg-gray-50 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">{txt.subject}</th>
                      <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">{txt.teacher}</th>
                      <th className="px-3 py-3 text-center font-semibold whitespace-nowrap">{txt.score}</th>
                      <th className="px-4 py-3 text-left font-semibold whitespace-nowrap min-w-[130px]">{txt.progress}</th>
                      <th className="px-3 py-3 text-center font-semibold whitespace-nowrap">{txt.grade}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                    {currentMonthList.map((g, idx) => {
                      const gradeInfo = getGrade(g.score);
                      return (
                        <tr key={idx}>
                          <td className="px-4 py-3.5 font-semibold text-gray-900 dark:text-white whitespace-nowrap">
                            {lang === 'KH' ? g.subjectKh : g.subjectEn}
                          </td>
                          <td className="px-4 py-3.5 text-gray-600 dark:text-gray-400 whitespace-nowrap">
                            {lang === 'KH' ? g.teacherKh : g.teacherEn}
                          </td>
                          <td className={`px-3 py-3.5 text-center font-bold whitespace-nowrap ${gradeInfo.text}`}>
                            {g.score}
                          </td>
                          <td className="px-4 py-3.5 min-w-[150px]">
                            <div className="flex items-center gap-2.5">
                              <div className="flex-1 h-2.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden min-w-[70px]">
                                <div
                                  className={`h-full ${gradeInfo.bar} rounded-full`}
                                  style={{ width: `${g.score}%` }}
                                />
                              </div>
                              <span className={`px-2 py-0.5 rounded-md text-xs font-bold whitespace-nowrap ${gradeInfo.softBg} ${gradeInfo.text}`}>
                                {g.score}%
                              </span>
                            </div>
                          </td>
                          <td className="px-3 py-3.5 text-center whitespace-nowrap">
                            <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg text-xs font-extrabold text-white ${gradeInfo.badge}`}>
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