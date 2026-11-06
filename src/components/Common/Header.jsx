import React, { useState, useEffect, useRef } from 'react';
import { kh } from '../../translate/Khmer';
import { en } from '../../translate/English';

const Header = ({
  activeTab,
  setActiveTab,
  lang,
  setLang,
  toggleLang,
  student,
  onLoginClick,
  onLogout,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme === 'dark';
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);
  const mobileUserMenuRef = useRef(null);

  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isAdmissionsDropdownOpen, setIsAdmissionsDropdownOpen] = useState(false);
  const [isMobileAdmissionsOpen, setIsMobileAdmissionsOpen] = useState(false);
  const [isAcademicsDropdownOpen, setIsAcademicsDropdownOpen] = useState(false);
  const [isMobileAcademicsOpen, setIsMobileAcademicsOpen] = useState(false);
  const [isNewsDropdownOpen, setIsNewsDropdownOpen] = useState(false);
  const [isMobileNewsOpen, setIsMobileNewsOpen] = useState(false);
  const [isActivitiesDropdownOpen, setIsActivitiesDropdownOpen] = useState(false);
  const [isMobileActivitiesOpen, setIsMobileActivitiesOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const [isMobileContactOpen, setIsMobileContactOpen] = useState(false);

  const aboutDropdownRef = useRef(null);
  const admissionsDropdownRef = useRef(null);
  const academicsDropdownRef = useRef(null);
  const newsDropdownRef = useRef(null);
  const activitiesDropdownRef = useRef(null);
  const contactDropdownRef = useRef(null);

  const t = lang === 'KH' ? kh : en;
  const isLoggedIn = !!student;

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target)) setIsAboutDropdownOpen(false);
      if (admissionsDropdownRef.current && !admissionsDropdownRef.current.contains(event.target)) setIsAdmissionsDropdownOpen(false);
      if (academicsDropdownRef.current && !academicsDropdownRef.current.contains(event.target)) setIsAcademicsDropdownOpen(false);
      if (newsDropdownRef.current && !newsDropdownRef.current.contains(event.target)) setIsNewsDropdownOpen(false);
      if (activitiesDropdownRef.current && !activitiesDropdownRef.current.contains(event.target)) setIsActivitiesDropdownOpen(false);
      if (contactDropdownRef.current && !contactDropdownRef.current.contains(event.target)) setIsContactDropdownOpen(false);
      
      if (
        userMenuRef.current && !userMenuRef.current.contains(event.target) &&
        mobileUserMenuRef.current && !mobileUserMenuRef.current.contains(event.target)
      ) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleLanguage = () => {
    const nextLang = lang === 'KH' ? 'EN' : 'KH';
    if (typeof toggleLang === 'function') toggleLang();
    else if (typeof setLang === 'function') setLang(nextLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', nextLang);
      const params = new URLSearchParams(window.location.search);
      params.set('lang', nextLang.toLowerCase());
      window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
    }
  };

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  const handleNavClick = (section) => {
    if (typeof section !== 'string') return;
    if (setActiveTab) setActiveTab(section);
    setIsMobileMenuOpen(false);
    setIsUserMenuOpen(false);
    setIsAboutDropdownOpen(false);
    setIsMobileAboutOpen(false);
    setIsAdmissionsDropdownOpen(false);
    setIsMobileAdmissionsOpen(false);
    setIsAcademicsDropdownOpen(false);
    setIsMobileAcademicsOpen(false);
    setIsNewsDropdownOpen(false);
    setIsMobileNewsOpen(false);
    setIsActivitiesDropdownOpen(false);
    setIsMobileActivitiesOpen(false);
    setIsContactDropdownOpen(false);
    setIsMobileContactOpen(false);

    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (section === 'home' || section === '#home') {
        window.history.replaceState({}, '', window.location.pathname + window.location.search);
      } else {
        const hash = section.startsWith('#') ? section : `#${section}`;
        if (window.location.hash !== hash) window.location.hash = hash;
      }
    }
  };

  const handleLoginClick = () => {
    if (typeof onLoginClick === 'function') onLoginClick();
    else handleNavClick('login');
    setIsMobileMenuOpen(false);
  };

  const handleMyGradesClick = () => handleNavClick('my-grades');
  const handleProfileClick = () => handleNavClick('profile');
  const handleChangePasswordClick = () => handleNavClick('change-password');
  const handleLogoutClick = () => {
    if (typeof onLogout === 'function') onLogout();
    setIsMobileMenuOpen(false);
    setIsUserMenuOpen(false);
  };

  const aboutSubItems = [
    { id: 'about', label: t.aboutSubSchool || 'About School' },
    { id: 'about-us', label: t.aboutSubUs || 'About Us' },
    { id: 'history', label: t.aboutSubHistory || 'School History' },
    { id: 'vision', label: t.aboutSubVision || 'Vision & Mission' },
    { id: 'leadership', label: t.aboutSubLeadership || 'School Leadership' },
    { id: 'mission', label: t.aboutSubMission || 'Mission' },
    { id: 'values', label: t.aboutSubValues || 'Core Values' },
    { id: 'achievements', label: t.aboutSubAchievements || 'Achievements' },
    { id: 'facilities', label: t.aboutSubFacilities || 'Facilities' },
  ];
  const admissionsSubItems = [
    { id: 'admissions', label: t.admissionsSubOverview || 'Admissions Overview' },
    { id: 'apply', label: t.admissionsSubApply || 'Apply Now' },
    { id: 'tuition', label: t.admissionsSubTuition || 'Tuition & Fees' },
    { id: 'scholarships', label: t.admissionsSubScholarships || 'Scholarships' },
    { id: 'requirements', label: t.admissionsSubRequirements || 'Requirements' },
  ];
  const academicsSubItems = [
    { id: 'academics', label: t.academicsSubOverview || 'Academics Overview' },
    { id: 'programs', label: t.academicsSubPrograms || 'Study Programs' },
    { id: 'curriculum', label: t.academicsSubCurriculum || 'Curriculum' },
    { id: 'schedule', label: t.academicsSubSchedule || 'Class Schedule' },
    { id: 'library', label: t.academicsSubLibrary || 'Library & Research' },
    { id: 'results', label: t.academicsSubResults || 'Academic Results' },
  ];
  const newsSubItems = [
    { id: 'news', label: t.newsSubOverview || 'News Overview' },
    { id: 'announcements', label: t.newsSubAnnouncements || 'Announcements' },
    { id: 'events', label: t.newsSubEvents || 'Events' },
    { id: 'gallery', label: t.newsSubGallery || 'Media Gallery' },
    { id: 'newsletter', label: t.newsSubNewsletter || 'Newsletter' },
  ];
  const activitiesSubItems = [
    { id: 'activities', label: t.activitiesSubOverview || 'Activities Overview' },
    { id: 'sports', label: t.activitiesSubSports || 'Sports' },
    { id: 'clubs', label: t.activitiesSubClubs || 'Clubs & Organizations' },
    { id: 'arts', label: t.activitiesSubArts || 'Arts & Culture' },
    { id: 'community', label: t.activitiesSubCommunity || 'Community Service' },
    { id: 'fieldtrips', label: t.activitiesSubFieldTrips || 'Field Trips' },
  ];
  const contactSubItems = [
    { id: 'contact', label: t.contactSubOverview || 'Contact Overview' },
    { id: 'inquiry', label: t.contactSubInquiry || 'Inquiry Form' },
    { id: 'location', label: t.contactSubLocation || 'Location & Map' },
    { id: 'staff', label: t.contactSubStaff || 'Staff Directory' },
    { id: 'support', label: t.contactSubSupport || 'Support / Helpdesk' },
  ];

  const isAboutActive = aboutSubItems.some(sub => activeTab === sub.id);
  const isAdmissionsActive = admissionsSubItems.some(sub => activeTab === sub.id);
  const isAcademicsActive = academicsSubItems.some(sub => activeTab === sub.id);
  const isNewsActive = newsSubItems.some(sub => activeTab === sub.id);
  const isActivitiesActive = activitiesSubItems.some(sub => activeTab === sub.id);
  const isContactActive = contactSubItems.some(sub => activeTab === sub.id);
  const isLoginActive = activeTab === 'login' || activeTab === 'my-grades' || activeTab === 'student-login' || activeTab === 'grades';

  const homeIcon = (isActive) => (
    <svg className={`w-4 h-4 shrink-0 transition-transform duration-300 ${isActive ? 'text-primary scale-110' : 'text-gray-500 dark:text-gray-400'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
    </svg>
  );

  const loginIcon = (isActive, size = 'w-4 h-4') => (
    <svg className={`${size} shrink-0 transition-transform duration-300 ${isActive ? 'scale-110' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665-6.16 3.422z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7m-4-4v2m8-2v2" />
    </svg>
  );

  const studentName = student ? (lang === 'KH' ? (student.nameKh || student.nameEn || '') : (student.nameEn || student.nameKh || '')) : '';
  const studentInitial = studentName?.charAt(0)?.toUpperCase() || 'S';

  const renderUserDropdown = () => (
    <div className="absolute right-0 mt-2 w-56 max-w-[calc(100vw-2rem)] bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 py-2 z-50">
      <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-700">
        <p className="text-sm font-bold text-gray-900 dark:text-white truncate">
          {studentName || 'Student'}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
          {student?.id} {student?.grade ? `• ${student.grade}` : ''}
        </p>
      </div>

      <button type="button" onClick={handleMyGradesClick} className="w-full text-left flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary transition">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6m4 6V7m4 10v-3M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
        {t.myGrades || (lang === 'KH' ? 'ពិន្ទុរបស់ខ្ញុំ' : 'My Grades')}
      </button>

      <button type="button" onClick={handleProfileClick} className="w-full text-left flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary transition">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        {lang === 'KH' ? 'ព័ត៌មានផ្ទាល់ខ្លួន' : 'My Profile'}
      </button>

      <button type="button" onClick={handleChangePasswordClick} className="w-full text-left flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary transition">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        {lang === 'KH' ? 'ផ្លាស់ប្តូរពាក្យសម្ងាត់' : 'Change Password'}
      </button>

      <div className="border-t border-gray-100 dark:border-gray-700 mt-1 pt-1">
        <button type="button" onClick={handleLogoutClick} className="w-full text-left flex items-center gap-2 px-4 py-2.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          {t.logout || (lang === 'KH' ? 'ចាកចេញ' : 'Logout')}
        </button>
      </div>
    </div>
  );

  const renderDesktopDropdown = (label, icon, isActive, isOpen, setIsOpen, closeOthers, ref, subItems, overviewId) => (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => { setIsOpen(!isOpen); closeOthers(); }}
        className={`flex items-center space-x-1 px-2.5 py-2 text-sm transition-colors duration-200 cursor-pointer bg-transparent border-0 shadow-none ${
          isActive ? "text-primary font-semibold" : "text-gray-700 dark:text-gray-300 hover:text-primary"
        }`}
      >
        {icon}
        <span>{label}</span>
        <svg className={`w-3.5 h-3.5 transition-transform duration-300 opacity-70 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 py-2 z-50">
          {subItems.map((sub) => (
            <a
              key={sub.id}
              href={`#${sub.id}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(sub.id); }}
              className={`block px-4 py-2.5 text-sm transition-all duration-150 ${
                sub.id === overviewId ? 'border-b border-gray-100 dark:border-gray-700' : ''
              } ${
                activeTab === sub.id ? 'text-primary font-semibold bg-primary/10 pl-5' : 'text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary hover:pl-5'
              }`}
            >
              {sub.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );

  const renderMobileAccordion = (label, icon, isActive, isOpen, setIsOpen, subItems) => (
    <div className="space-y-1">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-base font-medium border transition-all duration-200 ${
          isActive 
            ? "text-primary bg-primary/10 border-primary font-semibold" 
            : "text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
      >
        <div className="flex items-center space-x-3">
          {icon}
          <span>{label}</span>
        </div>
        <svg className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
        </svg>
      </button>
      
      {isOpen && (
        <div className="pl-6 pr-2 space-y-1 border-l-2 border-primary/30 ml-4 py-1">
          {subItems.map((sub) => (
            <a
              key={sub.id}
              href={`#${sub.id}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(sub.id); }}
              className={`block px-4 py-2.5 rounded-lg text-sm transition-colors duration-150 ${
                activeTab === sub.id 
                  ? 'text-primary font-semibold bg-primary/10' 
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {sub.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );

  const aboutIcon = <svg className={`w-5 h-5 shrink-0 ${isAboutActive ? 'text-primary' : 'text-gray-500 dark:text-gray-400'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>;
  const admissionsIcon = <svg className={`w-5 h-5 shrink-0 ${isAdmissionsActive ? 'text-primary' : 'text-gray-500 dark:text-gray-400'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>;
  const academicsIcon = <svg className={`w-5 h-5 shrink-0 ${isAcademicsActive ? 'text-primary' : 'text-gray-500 dark:text-gray-400'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>;
  const newsIcon = <svg className={`w-5 h-5 shrink-0 ${isNewsActive ? 'text-primary' : 'text-gray-500 dark:text-gray-400'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>;
  const activitiesIcon = <svg className={`w-5 h-5 shrink-0 ${isActivitiesActive ? 'text-primary' : 'text-gray-500 dark:text-gray-400'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>;
  const contactIcon = <svg className={`w-5 h-5 shrink-0 ${isContactActive ? 'text-primary' : 'text-gray-500 dark:text-gray-400'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>;

  return (
    <header className="bg-white/95 dark:bg-gray-900/95 text-gray-900 dark:text-white backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 gap-x-3 sm:gap-x-4">
          
          {/* ✅ កែសម្រួល Logo៖ លុប min-w-0 និង truncate ចេញ ដើម្បីឱ្យអក្សរមិនដាច់ */}
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="flex items-center space-x-2.5 sm:space-x-3 group shrink-0 transition-transform duration-200">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary text-white rounded-xl shadow flex items-center justify-center transition-transform duration-300 group-hover:rotate-6 shrink-0">
              <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665-6.16 3.422z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7m-4-4v2m8-2v2" />
              </svg>
            </div>
            <div>
              <span className="block text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary leading-tight transition-colors whitespace-nowrap">
                {t.schoolName}
              </span>
              <span className="block text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 font-semibold tracking-wide whitespace-nowrap">
                {t.schoolSub}
              </span>
            </div>
          </a>

          {/* DESKTOP NAVIGATION (ប្រើ xl ដើម្បីកុំឱ្យញាត់គ្នាលើ Tablet) */}
          <nav className="hidden xl:flex items-center space-x-1 font-medium text-sm whitespace-nowrap">
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className={`flex items-center space-x-1 px-2 py-2 text-sm transition-colors duration-200 ${activeTab === 'home' ? "text-primary font-semibold" : "text-gray-700 dark:text-gray-300 hover:text-primary"}`}>
              {homeIcon(activeTab === 'home')}
              <span>{t.home}</span>
            </a>

            {renderDesktopDropdown(t.aboutNav, aboutIcon, isAboutActive, isAboutDropdownOpen, setIsAboutDropdownOpen, () => { setIsAdmissionsDropdownOpen(false); setIsAcademicsDropdownOpen(false); setIsNewsDropdownOpen(false); setIsActivitiesDropdownOpen(false); setIsContactDropdownOpen(false); }, aboutDropdownRef, aboutSubItems, 'about')}
            {renderDesktopDropdown(t.admissions, admissionsIcon, isAdmissionsActive, isAdmissionsDropdownOpen, setIsAdmissionsDropdownOpen, () => { setIsAboutDropdownOpen(false); setIsAcademicsDropdownOpen(false); setIsNewsDropdownOpen(false); setIsActivitiesDropdownOpen(false); setIsContactDropdownOpen(false); }, admissionsDropdownRef, admissionsSubItems, 'admissions')}
            {renderDesktopDropdown(t.academicsNav, academicsIcon, isAcademicsActive, isAcademicsDropdownOpen, setIsAcademicsDropdownOpen, () => { setIsAboutDropdownOpen(false); setIsAdmissionsDropdownOpen(false); setIsNewsDropdownOpen(false); setIsActivitiesDropdownOpen(false); setIsContactDropdownOpen(false); }, academicsDropdownRef, academicsSubItems, 'academics')}
            {renderDesktopDropdown(t.news, newsIcon, isNewsActive, isNewsDropdownOpen, setIsNewsDropdownOpen, () => { setIsAboutDropdownOpen(false); setIsAdmissionsDropdownOpen(false); setIsAcademicsDropdownOpen(false); setIsActivitiesDropdownOpen(false); setIsContactDropdownOpen(false); }, newsDropdownRef, newsSubItems, 'news')}
            {renderDesktopDropdown(t.activitiesNav, activitiesIcon, isActivitiesActive, isActivitiesDropdownOpen, setIsActivitiesDropdownOpen, () => { setIsAboutDropdownOpen(false); setIsAdmissionsDropdownOpen(false); setIsAcademicsDropdownOpen(false); setIsNewsDropdownOpen(false); setIsContactDropdownOpen(false); }, activitiesDropdownRef, activitiesSubItems, 'activities')}
            {renderDesktopDropdown(t.contact, contactIcon, isContactActive, isContactDropdownOpen, setIsContactDropdownOpen, () => { setIsAboutDropdownOpen(false); setIsAdmissionsDropdownOpen(false); setIsAcademicsDropdownOpen(false); setIsNewsDropdownOpen(false); setIsActivitiesDropdownOpen(false); }, contactDropdownRef, contactSubItems, 'contact')}
          </nav>

          {/* Right Action Icons (Desktop) */}
          <div className="hidden xl:flex items-center space-x-3 shrink-0">
            <div onClick={toggleLanguage} className="p-1 text-gray-700 dark:text-gray-200 hover:opacity-80 transition-opacity duration-200 cursor-pointer flex items-center justify-center shrink-0 bg-transparent border-none shadow-none" title="Switch Language">
              <img src={lang === 'KH' ? "https://flagcdn.com/w40/kh.png" : "https://flagcdn.com/w40/us.png"} alt="Flag" className="w-6 h-auto object-contain rounded-xs pointer-events-none" />
            </div>

            <div onClick={toggleDarkMode} className="p-1 text-gray-700 dark:text-gray-200 hover:text-primary transition-colors duration-200 cursor-pointer flex items-center justify-center shrink-0 bg-transparent border-none shadow-none" title="Toggle Theme">
              {isDarkMode ? (
                <svg className="w-5 h-5 text-amber-400 transition-transform duration-500 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300 transition-transform duration-500 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
              )}
            </div>

            {!isLoggedIn ? (
              <button type="button" onClick={handleLoginClick} className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer ${isLoginActive ? 'bg-primary/90 text-white ring-2 ring-primary/40' : 'bg-primary text-white hover:bg-primary/90'}`} title={t.loginSubtitle || (lang === 'KH' ? 'ចូលមើលពិន្ទុសិស្ស' : 'View student grades')}>
                {loginIcon(isLoginActive)}
                <span>{t.login || (lang === 'KH' ? 'ចូលប្រើ' : 'Login')}</span>
              </button>
            ) : (
              <div className="relative" ref={userMenuRef}>
                <button type="button" onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} className="flex items-center gap-2 pl-1 pr-3 py-1 rounded-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer">
                  <span className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shrink-0">
                    {studentInitial}
                  </span>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 max-w-[120px] truncate">
                    {studentName?.split(' ')[0] || 'Student'}
                  </span>
                  <svg className={`w-3.5 h-3.5 text-gray-400 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isUserMenuOpen && renderUserDropdown()}
              </div>
            )}
          </div>

          {/* Mobile Action Buttons */}
          <div className="xl:hidden flex items-center space-x-2">
            <div onClick={toggleLanguage} className="p-1 text-gray-700 dark:text-gray-200 flex items-center justify-center shrink-0 cursor-pointer">
              <img src={lang === 'KH' ? "https://flagcdn.com/w40/kh.png" : "https://flagcdn.com/w40/us.png"} alt="Flag" className="w-5 h-auto object-contain rounded-xs pointer-events-none" />
            </div>
            <div onClick={toggleDarkMode} className="p-1 text-gray-700 dark:text-gray-200 flex items-center justify-center shrink-0 cursor-pointer">
              {isDarkMode ? (
                <svg className="w-5 h-5 text-amber-400 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
              )}
            </div>

            {isLoggedIn && (
              <div className="relative" ref={mobileUserMenuRef}>
                <button 
                  onClick={() => {
                    setIsUserMenuOpen(!isUserMenuOpen);
                    setIsMobileMenuOpen(false);
                  }} 
                  className="w-9 h-9 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center cursor-pointer shrink-0"
                >
                  {studentInitial}
                </button>
                {isUserMenuOpen && renderUserDropdown()}
              </div>
            )}

            <button onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setIsUserMenuOpen(false);
            }} className="w-10 h-10 text-gray-700 dark:text-gray-200 hover:text-primary focus:outline-none rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 flex items-center justify-center shrink-0 cursor-pointer">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 pt-4 pb-6 space-y-3 shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto">
          
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 border ${
            activeTab === 'home' 
              ? "text-primary bg-primary/10 border-primary font-semibold" 
              : "text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
          }`}>
            {homeIcon(activeTab === 'home')}
            <span>{t.home}</span>
          </a>

          {renderMobileAccordion(t.aboutNav, aboutIcon, isAboutActive, isMobileAboutOpen, setIsMobileAboutOpen, aboutSubItems)}
          {renderMobileAccordion(t.admissions, admissionsIcon, isAdmissionsActive, isMobileAdmissionsOpen, setIsMobileAdmissionsOpen, admissionsSubItems)}
          {renderMobileAccordion(t.academicsNav, academicsIcon, isAcademicsActive, isMobileAcademicsOpen, setIsMobileAcademicsOpen, academicsSubItems)}
          {renderMobileAccordion(t.news, newsIcon, isNewsActive, isMobileNewsOpen, setIsMobileNewsOpen, newsSubItems)}
          {renderMobileAccordion(t.activitiesNav, activitiesIcon, isActivitiesActive, isMobileActivitiesOpen, setIsMobileActivitiesOpen, activitiesSubItems)}
          {renderMobileAccordion(t.contact, contactIcon, isContactActive, isMobileContactOpen, setIsMobileContactOpen, contactSubItems)}

          {!isLoggedIn && (
            <button type="button" onClick={handleLoginClick} className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-base font-semibold text-white bg-primary hover:bg-primary/90 shadow-sm transition-all duration-200 mt-4">
              {loginIcon(isLoginActive, 'w-5 h-5')}
              <span>{t.login || (lang === 'KH' ? 'ចូលមើលពិន្ទុសិស្ស' : 'Login to View Grades')}</span>
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;