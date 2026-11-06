import React, { useState } from 'react';
import { Search, Award, Users, CheckCircle } from 'lucide-react';

const Results = ({ lang }) => {
  // State សម្រាប់គ្រប់គ្រងការស្វែងរក និងជ្រើសរើសថ្នាក់ទី ៧ ដល់ ១២
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGradeLevel, setSelectedGradeLevel] = useState('all');

  // វចនានុក្រមភាសា
  const kh = {
    title: 'លទ្ធផលសិក្សាសិស្សានុសិស្ស ថ្នាក់ទី៧ ដល់ ទី១២',
    subtitle: 'របាយការណ៍ និងលទ្ធផលប្រឡងប្រចាំឆមាស និងប្រចាំឆ្នាំរបស់សិស្សានុសិស្សគ្រប់កម្រិតថ្នាក់។',
    searchPlaceholder: 'ស្វែងរកតាមឈ្មោះ ឬអត្តលេខសិស្ស...',
    allLevels: 'គ្រប់ថ្នាក់ទាំងអស់',
    tableHeaders: ['អត្តលេខ', 'ឈ្មោះសិស្ស', 'កម្រិតថ្នាក់', 'និទ្ទេសសរុប', 'មធ្យមភាគពិន្ទុ', 'ស្ថានភាព'],
    stats: [
      { label: 'សិស្សជាប់និទ្ទេស A', value: '៤៥ នាក់', icon: Award },
      { label: 'អត្រាជាប់សរុប', value: '៩៨.៥%', icon: CheckCircle },
      { label: 'សិស្សានុសិស្សសរុប', value: '១,២៥០ នាក់', icon: Users }
    ],
    statusPass: 'ជាប់ (Pass)',
    statusHonors: 'និទ្ទេសល្អប្រសើរ (Honors)'
  };

  const en = {
    title: 'Academic Results (Grade 7 - Grade 12)',
    subtitle: 'Student performance reports, semester, and annual exam outcomes across all grade levels.',
    searchPlaceholder: 'Search by student name or ID...',
    allLevels: 'All Grades',
    tableHeaders: ['Student ID', 'Full Name', 'Grade Level', 'Overall Grade', 'Average Score', 'Status'],
    stats: [
      { label: 'Grade A Students', value: '45 Students', icon: Award },
      { label: 'Overall Pass Rate', value: '98.5%', icon: CheckCircle },
      { label: 'Total Students', value: '1,250 Students', icon: Users }
    ],
    statusPass: 'Pass',
    statusHonors: 'Honors'
  };

  const t = lang === 'KH' ? kh : en;

  // ទិន្នន័យគំរូសិស្សពីថ្នាក់ទី ៧ ដល់ ១២
  const studentsResults = [
    { id: 'HS-701', name: 'សុខ ចាន់ឌី (Sok Chandy)', level: 'ថ្នាក់ទី៧', grade: 'A', avg: '91.0', status: t.statusHonors },
    { id: 'HS-801', name: 'ហេង វិសាល (Heng Visal)', level: 'ថ្នាក់ទី៨', grade: 'B+', avg: '84.5', status: t.statusPass },
    { id: 'HS-901', name: 'តេង សុវណ្ណ (Teng Sovann)', level: 'ថ្នាក់ទី៩', grade: 'A', avg: '93.2', status: t.statusHonors },
    { id: 'HS-101', name: 'ម៉ៅ សុខជា (Mao Sokchea)', level: 'ថ្នាក់ទី១០', grade: 'A', avg: '92.5', status: t.statusHonors },
    { id: 'HS-111', name: 'សេង វុទ្ធី (Seng Vuthy)', level: 'ថ្នាក់ទី១១', grade: 'B', avg: '79.0', status: t.statusPass },
    { id: 'HS-121', name: 'កែវ ពិសិដ្ឋ (Keo Piseth)', level: 'ថ្នាក់ទី១២', grade: 'A-', avg: '88.4', status: t.statusHonors },
  ];

  // បញ្ជីប៊ូតុងសម្រាប់តម្រៀបថ្នាក់នីមួយៗ (ទី ៧ ដល់ ទី ១២)
  const gradeLevels = [
    { id: 'all', label: t.allLevels },
    { id: 'ថ្នាក់ទី៧', label: 'ថ្នាក់ទី ៧' },
    { id: 'ថ្នាក់ទី៨', label: 'ថ្នាក់ទី ៨' },
    { id: 'ថ្នាក់ទី៩', label: 'ថ្នាក់ទី ៩' },
    { id: 'ថ្នាក់ទី១០', label: 'ថ្នាក់ទី ១០' },
    { id: 'ថ្នាក់ទី១១', label: 'ថ្នាក់ទី ១១' },
    { id: 'ថ្នាក់ទី១២', label: 'ថ្នាក់ទី ១២' },
  ];

  // មុខងារហ្វុ៍លត្រទិន្នន័យ
  const filteredResults = studentsResults.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          student.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedGradeLevel === 'all' || student.level === selectedGradeLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-300 font-khmer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase bg-cyan-50 dark:bg-cyan-950/50 rounded-full border border-cyan-100 dark:border-cyan-900">
            តម្លាភាព និងលទ្ធផលសិក្សា
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {t.stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div key={idx} className="p-6 rounded-3xl bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700/60 shadow-lg shadow-gray-100 dark:shadow-none flex items-center gap-5">
                <div className="w-14 h-14 bg-cyan-50 dark:bg-cyan-950/60 rounded-2xl flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                  <IconComponent className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-gray-900 dark:text-white mb-0.5">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Search & Filter Bar (Grade 7 to 12) */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8 justify-between items-center">
          <div className="relative w-full lg:w-80">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm shadow-sm"
            />
          </div>
          
          <div className="flex gap-2 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
            {gradeLevels.map((lvl) => (
              <button
                key={lvl.id}
                onClick={() => setSelectedGradeLevel(lvl.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all shadow-sm ${
                  selectedGradeLevel === lvl.id 
                    ? 'bg-cyan-600 text-white shadow-cyan-600/20 shadow-lg' 
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {lvl.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Table */}
        <div className="overflow-x-auto rounded-2xl sm:rounded-3xl border border-gray-200 dark:border-gray-700/60 shadow-xl bg-white dark:bg-gray-800/80 backdrop-blur-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/80 dark:bg-gray-900/60 text-gray-700 dark:text-gray-300 text-xs sm:text-sm uppercase tracking-wider border-b border-gray-200 dark:border-gray-700/60">
                {t.tableHeaders.map((header, index) => (
                  <th key={index} className="p-3.5 sm:p-4 font-semibold whitespace-nowrap">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700/40 text-sm">
              {filteredResults.length > 0 ? (
                filteredResults.map((student, index) => (
                  <tr key={index} className="hover:bg-gray-50/60 dark:hover:bg-gray-700/30 transition-colors whitespace-nowrap">
                    <td className="p-3.5 sm:p-4 font-mono text-cyan-600 dark:text-cyan-400 font-semibold">{student.id}</td>
                    <td className="p-3.5 sm:p-4 font-medium text-gray-900 dark:text-white">{student.name}</td>
                    <td className="p-3.5 sm:p-4 text-gray-600 dark:text-gray-300">
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700/60 rounded-xl text-xs font-medium">
                        {student.level}
                      </span>
                    </td>
                    <td className="p-3.5 sm:p-4 font-bold text-indigo-600 dark:text-indigo-400">{student.grade}</td>
                    <td className="p-3.5 sm:p-4 text-gray-700 dark:text-gray-300 font-semibold">{student.avg} ពិន្ទុ</td>
                    <td className="p-3.5 sm:p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        student.status === t.statusHonors 
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20' 
                          : 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20'
                      }`}>
                        {student.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-12 text-gray-500 dark:text-gray-400">
                    រកមិនឃើញទិន្នន័យសម្រាប់កម្រិតថ្នាក់នេះទេ។ (No results found.)
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default Results;