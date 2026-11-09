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

  const [isScrolled, setIsScrolled] = useState(false);
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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleMyGradesClick = (e) => {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    setIsUserMenuOpen(false);
    handleNavClick('my-grades');
  };

  const handleProfileClick = (e) => {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    setIsUserMenuOpen(false);
    handleNavClick('profile');
  };

  const handleChangePasswordClick = (e) => {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    setIsUserMenuOpen(false);
    handleNavClick('change-password');
  };

  const handleLogoutClick = (e) => {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    setIsUserMenuOpen(false);
    setIsMobileMenuOpen(false);
    if (typeof onLogout === 'function') onLogout();
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
    <svg className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isActive ? 'text-white scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'text-primary-200/80'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
    </svg>
  );

  const loginIcon = (isActive, size = 'w-5 h-5') => (
    <svg className={`${size} shrink-0 transition-transform duration-300 ${isActive ? 'scale-110' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665-6.16 3.422z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7m-4-4v2m8-2v2" />
    </svg>
  );

  const studentName = student ? (lang === 'KH' ? (student.nameKh || student.nameEn || '') : (student.nameEn || student.nameKh || '')) : '';
  const studentInitial = studentName?.charAt(0)?.toUpperCase() || 'S';

  const renderUserDropdown = (isOpen) => (
    <div className={`absolute right-0 mt-3 w-60 max-w-[calc(100vw-2rem)] rounded-2xl py-2 z-[100] origin-top-right transition-all duration-300 ease-out
      bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/95
      backdrop-blur-2xl border border-white/20
      shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.15)]
      ${isOpen ? 'opacity-100 scale-100 translate-y-0 visible pointer-events-auto' : 'opacity-0 scale-95 -translate-y-2 invisible pointer-events-none'}`}>
      <div className="px-4 py-3 border-b border-white/10 bg-gradient-to-r from-primary/15 to-primary/5 rounded-t-2xl">
        <p className="text-sm font-bold text-white truncate">{studentName || 'Student'}</p>
        <p className="text-xs text-primary-200/80 truncate mt-0.5">
          {student?.id} {student?.grade ? `• ${student.grade}` : ''}
        </p>
      </div>

      <div className="p-1.5 space-y-0.5">
        <button type="button" onClick={handleMyGradesClick} className="w-full text-left flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-primary-300 rounded-xl transition-all duration-200 hover:translate-x-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6m4 6V7m4 10v-3M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
          {t.myGrades || (lang === 'KH' ? 'ពិន្ទុរបស់ខ្ញុំ' : 'My Grades')}
        </button>

        <button type="button" onClick={handleProfileClick} className="w-full text-left flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-primary-300 rounded-xl transition-all duration-200 hover:translate-x-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          {lang === 'KH' ? 'ព័ត៌មានផ្ទាល់ខ្លួន' : 'My Profile'}
        </button>

        <button type="button" onClick={handleChangePasswordClick} className="w-full text-left flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-primary-300 rounded-xl transition-all duration-200 hover:translate-x-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          {lang === 'KH' ? 'ផ្លាស់ប្តូរពាក្យសម្ងាត់' : 'Change Password'}
        </button>
      </div>

      <div className="border-t border-white/10 mt-1 pt-1 p-1.5">
        <button type="button" onClick={handleLogoutClick} className="w-full text-left flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-red-300 hover:bg-red-500/20 rounded-xl transition-all duration-200 hover:translate-x-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
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
        className={`group flex items-center space-x-2 px-4 py-2.5 text-[15px] transition-all duration-300 cursor-pointer rounded-xl active:scale-95
          ${isActive
            ? "bg-gradient-to-br from-primary/30 to-primary/20 text-white font-bold border border-primary/40 shadow-[0_0_20px_rgba(59,130,246,0.35),inset_0_1px_0_rgba(255,255,255,0.3)]"
            : "text-primary-50/90 hover:bg-white/10 hover:text-white border border-transparent hover:border-white/20 hover:shadow-[0_4px_20px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.1)]"
          }`}
      >
        {icon}
        <span>{label}</span>
        <svg className={`w-4 h-4 transition-transform duration-300 opacity-80 ml-1 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
        </svg>
      </button>

      <div className={`absolute left-0 mt-3 w-60 rounded-2xl py-2 z-[100] origin-top transition-all duration-300 ease-out
        bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/95
        backdrop-blur-2xl border border-white/20
        shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.15)]
        ${isOpen ? 'opacity-100 scale-y-100 translate-y-0 visible pointer-events-auto' : 'opacity-0 scale-y-95 -translate-y-2 invisible pointer-events-none'}`}>
        {subItems.map((sub) => (
          <a
            key={sub.id}
            href={`#${sub.id}`}
            onClick={(e) => { e.preventDefault(); handleNavClick(sub.id); }}
            className={`block px-4 py-2.5 text-[15px] transition-all duration-200
              ${sub.id === overviewId ? 'border-b border-white/10 font-semibold mb-1 text-primary-200' : ''}
              ${activeTab === sub.id
                ? 'text-primary-300 font-semibold bg-gradient-to-r from-primary/20 to-transparent pl-5 border-l-4 border-primary'
                : 'text-slate-200 hover:bg-white/10 hover:text-primary-300 hover:pl-5 border-l-4 border-transparent'
              }`}
          >
            {sub.label}
          </a>
        ))}
      </div>
    </div>
  );

  const renderMobileAccordion = (label, icon, isActive, isOpen, setIsOpen, subItems) => (
    <div className="space-y-1">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-full px-4 py-3.5 rounded-2xl text-base font-semibold border transition-all duration-300 active:scale-[0.98]
          ${isActive
            ? "text-white bg-gradient-to-br from-primary/40 to-primary/30 border-primary/40 shadow-[0_8px_25px_-5px_rgba(59,130,246,0.4),inset_0_1px_0_rgba(255,255,255,0.3)]"
            : "text-primary-50 border-white/10 bg-white/5 hover:bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
          }`}
      >
        <div className="flex items-center space-x-3">
          {icon}
          <span>{label}</span>
        </div>
        <svg className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
        </svg>
      </button>

      <div className={`pl-6 pr-2 border-l-2 border-primary/30 ml-4 transition-all duration-300 overflow-hidden
        ${isOpen ? 'max-h-[500px] opacity-100 py-2 space-y-1' : 'max-h-0 opacity-0 py-0 space-y-0'}`}>
        {subItems.map((sub) => (
          <a
            key={sub.id}
            href={`#${sub.id}`}
            onClick={(e) => { e.preventDefault(); handleNavClick(sub.id); }}
            className={`block px-4 py-3 rounded-xl text-[15px] font-medium transition-all duration-200
              ${activeTab === sub.id
                ? 'text-white bg-gradient-to-r from-primary/30 to-transparent border border-primary/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]'
                : 'text-primary-100/80 hover:bg-white/10 hover:text-white'
              }`}
          >
            {sub.label}
          </a>
        ))}
      </div>
    </div>
  );

  const aboutIcon = <svg className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isAboutActive ? 'text-white scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'text-primary-200/80'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>;
  const admissionsIcon = <svg className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isAdmissionsActive ? 'text-white scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'text-primary-200/80'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>;
  const academicsIcon = <svg className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isAcademicsActive ? 'text-white scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'text-primary-200/80'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>;
  const newsIcon = <svg className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isNewsActive ? 'text-white scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'text-primary-200/80'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>;
  const activitiesIcon = <svg className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isActivitiesActive ? 'text-white scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'text-primary-200/80'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>;
  const contactIcon = <svg className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isContactActive ? 'text-white scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'text-primary-200/80'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>;

  return (
    <>
      {/* ===== CSS សម្រាប់ពន្លឺពណ៌សរត់ទៅវិញទៅមក ===== */}
      <style>{`
        @keyframes whiteLaserRun {
          0%   { transform: translateX(-150%) skewX(-25deg); opacity: 0; }
          10%  { opacity: 1; }
          45%  { transform: translateX(150%) skewX(-25deg); opacity: 1; }
          50%  { opacity: 0; transform: translateX(150%) skewX(-25deg); }
          
          50.1% { transform: translateX(150%) skewX(25deg); opacity: 0; }
          60%  { opacity: 1; }
          95%  { transform: translateX(-150%) skewX(25deg); opacity: 1; }
          100% { transform: translateX(-150%) skewX(25deg); opacity: 0; }
        }
        
        .laser-beam {
          position: absolute;
          top: 0; bottom: 0;
          left: 0;
          width: 40%;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.8) 40%,
            rgba(255, 255, 255, 1) 50%,
            rgba(255, 255, 255, 0.8) 60%,
            rgba(255, 255, 255, 0) 100%
          );
          filter: blur(8px);
          pointer-events: none;
          animation: whiteLaserRun 8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          z-index: 10; /* ដាក់ពីលើផ្ទៃខាងក្រោយ */
        }

        .laser-core {
          position: absolute;
          top: 0; bottom: 0;
          left: 0;
          width: 15%;
          background: #ffffff; /* ពណ៌សសុទ្ធ */
          filter: blur(4px);
          opacity: 0.9;
          pointer-events: none;
          animation: whiteLaserRun 8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          z-index: 10;
        }

        @media (prefers-reduced-motion: reduce) {
          .laser-beam, .laser-core { animation: none; opacity: 0; }
        }
      `}</style>

      <header className={`sticky top-0 z-50 transition-all duration-500 border-b
        bg-gradient-to-br from-slate-950/95 via-primary-950/95 to-primary-900/95
        backdrop-blur-2xl
        border-white/10
        ${isScrolled
          ? 'shadow-[0_15px_50px_-10px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] py-0'
          : 'shadow-[0_10px_40px_-5px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.1)] py-0'
        }`}>
        
        {/* ពន្លឺរត់ (ដាក់នៅស្រទាប់ខាងក្រោយ Content តែពីលើ Background) */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
          <div className="laser-beam" />
          <div className="laser-core" />
        </div>

        {/* Ambient glow orbs (Primary) */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-20 left-1/4 w-72 h-72 bg-primary/15 rounded-full blur-3xl" />
          <div className="absolute -top-10 right-1/4 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl" />
        </div>

        {/* Content ដាក់ z-20 ដើម្បីឱ្យវានៅពីលើពន្លឺ */}
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className={`flex justify-between items-center gap-x-4 transition-all duration-500 ${isScrolled ? 'h-16' : 'h-20'}`}>

            {/* Logo */}
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="flex items-center space-x-3 group shrink-0">
              <div className="relative w-12 h-12 rounded-2xl overflow-hidden flex items-center justify-center shrink-0
                bg-gradient-to-br from-white via-slate-100 to-slate-300
                shadow-[0_8px_25px_-5px_rgba(59,130,246,0.4),0_2px_8px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.9)]
                border border-white/60
                transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_12px_35px_-5px_rgba(59,130,246,0.6),inset_0_1px_0_rgba(255,255,255,0.9)]">
                <img
                  src="/Logo.png"
                  alt="School Logo"
                  className="w-full h-full object-contain p-1 relative z-10"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-white text-primary-950 hidden items-center justify-center absolute inset-0">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665-6.16 3.422z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7m-4-4v2m8-2v2" />
                  </svg>
                </div>
                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/60 to-transparent pointer-events-none rounded-t-2xl" />
              </div>
              <div>
                <span className="block text-base md:text-lg font-bold leading-tight whitespace-nowrap
                  bg-gradient-to-r from-white via-primary-100 to-white bg-clip-text text-transparent
                  group-hover:from-primary-200 group-hover:via-white group-hover:to-primary-200 transition-all duration-500
                  drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                  {t.schoolName}
                </span>
                <span className="block text-xs font-semibold tracking-wide whitespace-nowrap text-primary-300/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                  {t.schoolSub}
                </span>
              </div>
            </a>

            {/* DESKTOP NAV */}
            <nav className="hidden xl:flex items-center space-x-1 font-medium whitespace-nowrap">
              <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className={`group flex items-center space-x-2 px-4 py-2.5 text-[15px] rounded-xl transition-all duration-300 active:scale-95
                ${activeTab === 'home'
                  ? "bg-gradient-to-br from-primary/30 to-primary/20 text-white font-bold border border-primary/40 shadow-[0_0_20px_rgba(59,130,246,0.35),inset_0_1px_0_rgba(255,255,255,0.3)]"
                  : "text-primary-50/90 hover:bg-white/10 hover:text-white border border-transparent hover:border-white/20 hover:shadow-[0_4px_20px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.1)]"
                }`}>
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

            {/* Right Actions */}
            <div className="hidden xl:flex items-center space-x-2 shrink-0">
              <button
                type="button"
                onClick={toggleLanguage}
                className="p-2 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center shrink-0 active:scale-90
                  bg-white/5 border border-white/10 hover:bg-white/15 hover:border-white/25
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_2px_10px_rgba(0,0,0,0.2)]"
                title="Switch Language (ប្តូរភាសា)"
              >
                <img src={lang === 'KH' ? "https://flagcdn.com/w40/kh.png" : "https://flagcdn.com/w40/us.png"} alt="Flag" className="w-6 h-auto object-contain rounded-sm pointer-events-none shadow-sm" />
              </button>

              <button
                type="button"
                onClick={toggleDarkMode}
                className="p-2 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center shrink-0 active:scale-90
                  bg-white/5 border border-white/10 hover:bg-white/15 hover:border-white/25
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_2px_10px_rgba(0,0,0,0.2)]"
                title="Toggle Theme (ពន្លឺ/ងងឹត)"
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5 text-amber-300 transition-transform duration-500 pointer-events-none drop-shadow-[0_0_6px_rgba(251,191,36,0.5)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                ) : (
                  <svg className="w-5 h-5 text-primary-100 transition-transform duration-500 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
                )}
              </button>

              {!isLoggedIn ? (
                <button type="button" onClick={handleLoginClick} className={`flex items-center gap-2 px-6 py-2.5 text-sm font-bold rounded-xl transition-all duration-300 cursor-pointer ml-2 active:scale-95
                  ${isLoginActive
                    ? 'bg-gradient-to-br from-primary-400 to-primary-600 text-white ring-2 ring-primary-300/50 scale-105 shadow-[0_0_25px_rgba(59,130,246,0.5),inset_0_1px_0_rgba(255,255,255,0.4)]'
                    : 'bg-gradient-to-br from-white to-slate-200 text-primary-950 hover:from-primary-50 hover:to-primary-100 hover:scale-105 shadow-[0_6px_20px_-4px_rgba(255,255,255,0.3),inset_0_1px_0_rgba(255,255,255,0.9)] hover:shadow-[0_8px_25px_-4px_rgba(59,130,246,0.5),inset_0_1px_0_rgba(255,255,255,0.9)]'
                  }`} title={t.loginSubtitle || (lang === 'KH' ? 'ចូលមើលពិន្ទុសិស្ស' : 'View student grades')}>
                  {loginIcon(isLoginActive)}
                  <span>{t.login || (lang === 'KH' ? 'ចូលប្រើ' : 'Login')}</span>
                </button>
              ) : (
                <div className="relative ml-2" ref={userMenuRef}>
                  <button type="button" onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} className="flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 rounded-full transition-all duration-300 cursor-pointer text-white shadow-[0_6px_20px_-4px_rgba(59,130,246,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] active:scale-95
                    bg-gradient-to-br from-white/15 to-white/5 border border-white/20 hover:bg-white/20 hover:border-white/30">
                    <span className="w-9 h-9 rounded-full text-sm font-bold flex items-center justify-center shrink-0
                      bg-gradient-to-br from-white to-slate-200 text-primary-950
                      shadow-[0_2px_8px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.9)]">
                      {studentInitial}
                    </span>
                    <span className="text-sm font-semibold max-w-[120px] truncate drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                      {studentName?.split(' ')[0] || 'Student'}
                    </span>
                    <svg className={`w-4 h-4 text-primary-300 transition-transform duration-300 ${isUserMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {renderUserDropdown(isUserMenuOpen)}
                </div>
              )}
            </div>

            {/* Mobile Actions */}
            <div className="xl:hidden flex items-center space-x-2">
              <button
                type="button"
                onClick={toggleLanguage}
                className="p-2 rounded-xl flex items-center justify-center shrink-0 cursor-pointer active:scale-90 transition-all duration-200
                  bg-white/5 border border-white/10 hover:bg-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                title="Switch Language"
              >
                <img src={lang === 'KH' ? "https://flagcdn.com/w40/kh.png" : "https://flagcdn.com/w40/us.png"} alt="Flag" className="w-5 h-auto object-contain rounded-sm pointer-events-none" />
              </button>
              <button
                type="button"
                onClick={toggleDarkMode}
                className="p-2 rounded-xl flex items-center justify-center shrink-0 cursor-pointer active:scale-90 transition-all duration-200
                  bg-white/5 border border-white/10 hover:bg-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                title="Toggle Theme"
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5 text-amber-300 pointer-events-none drop-shadow-[0_0_6px_rgba(251,191,36,0.5)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                ) : (
                  <svg className="w-5 h-5 text-primary-100 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
                )}
              </button>

              {isLoggedIn && (
                <div className="relative" ref={mobileUserMenuRef}>
                  <button
                    onClick={() => {
                      setIsUserMenuOpen(!isUserMenuOpen);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-9 h-9 rounded-full text-sm font-bold flex items-center justify-center cursor-pointer shrink-0 active:scale-90 transition-transform
                      bg-gradient-to-br from-white to-slate-200 text-primary-950
                      shadow-[0_4px_12px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.9)]"
                  >
                    {studentInitial}
                  </button>
                  {renderUserDropdown(isUserMenuOpen)}
                </div>
              )}

              <button onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                setIsUserMenuOpen(false);
              }} className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 cursor-pointer transition-all duration-200 ml-1 active:scale-90
                text-white bg-white/5 border border-white/10 hover:bg-white/15
                shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_2px_10px_rgba(0,0,0,0.2)]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`xl:hidden absolute w-full left-0 border-b border-white/10 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.8)]
          bg-gradient-to-br from-slate-950/98 via-primary-950/98 to-primary-900/98 backdrop-blur-2xl
          transition-all duration-500 ease-in-out origin-top overflow-hidden z-50
          ${isMobileMenuOpen
            ? 'max-h-[calc(100vh-5rem)] opacity-100 py-4 px-4 pointer-events-auto'
            : 'max-h-0 opacity-0 py-0 px-4 pointer-events-none'
          }`}>
          <div className="space-y-3 relative z-10">
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className={`flex items-center space-x-3 px-4 py-3.5 rounded-2xl transition-all duration-300 border font-semibold
              ${activeTab === 'home'
                ? "text-white bg-gradient-to-br from-primary/40 to-primary/30 border-primary/40 shadow-[0_8px_25px_-5px_rgba(59,130,246,0.4),inset_0_1px_0_rgba(255,255,255,0.3)]"
                : "text-primary-50 border-white/10 bg-white/5 hover:bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
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
              <button type="button" onClick={handleLoginClick} className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl text-base font-bold transition-all duration-300 mt-6 active:scale-95
                text-primary-950 bg-gradient-to-br from-white to-slate-200 hover:from-primary-50 hover:to-primary-100
                shadow-[0_8px_25px_-4px_rgba(255,255,255,0.3),inset_0_1px_0_rgba(255,255,255,0.9)]
                hover:shadow-[0_10px_30px_-4px_rgba(59,130,246,0.5),inset_0_1px_0_rgba(255,255,255,0.9)]">
                {loginIcon(isLoginActive, 'w-5 h-5')}
                <span>{t.login || (lang === 'KH' ? 'ចូលមើលពិន្ទុសិស្ស' : 'Login to View Grades')}</span>
              </button>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;