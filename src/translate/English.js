export const en = {
  // --- Header & Navigation ---
  schoolName: "Hun Sen Snoul High School",
  schoolSub: "Secondary & High School",
  home: "Home",
  about: "About Us",
  academicsNav: "Academics",
  admissions: "Admissions",
  news: "News",
  contact: "Contact",
  portal: "School Portal",
  switchLang: "KH", 
  
  // Header Navigation Dropdown Titles
  aboutNav: "About Us",
  activitiesNav: "Activities",

  // About Us Sub-items
  aboutSubSchool: "About School",
  aboutSubUs: "About Us",
  aboutSubHistory: "School History",
  aboutSubVision: "Vision & Mission",
  aboutSubLeadership: "School Leadership",
  aboutSubMission: "Mission",
  aboutSubValues: "Core Values",
  aboutSubAchievements: "Achievements",
  aboutSubFacilities: "Facilities",

  // Admissions Sub-items
  admissionsSubOverview: "Admissions Overview",
  admissionsSubApply: "Apply Now",
  admissionsSubTuition: "Tuition & Fees",
  admissionsSubScholarships: "Scholarships",
  admissionsSubRequirements: "Requirements",

  // Academics Sub-items
  academicsSubOverview: "Academics Overview",
  academicsSubPrograms: "Study Programs",
  academicsSubCurriculum: "Curriculum",
  academicsSubSchedule: "Class Schedule",
  academicsSubLibrary: "Library & Research",
  academicsSubResults: "Academic Results",

  // News Sub-items
  newsSubOverview: "News Overview",
  newsSubAnnouncements: "Announcements",
  newsSubEvents: "Events",
  newsSubGallery: "Media Gallery",
  newsSubNewsletter: "Newsletter",

  // Activities Sub-items
  activitiesSubOverview: "Activities Overview",
  activitiesSubSports: "Sports",
  activitiesSubClubs: "Clubs & Organizations",
  activitiesSubArts: "Arts & Culture",
  activitiesSubCommunity: "Community Service",
  activitiesSubFieldTrips: "Field Trips",

  // Contact Sub-items
  contactSubOverview: "Contact Overview",
  contactSubInquiry: "Inquiry Form",
  contactSubLocation: "Location & Map",
  contactSubStaff: "Staff Directory",
  contactSubSupport: "Support / Helpdesk",

  // --- Hero Section ---
  heroBadge: "Welcome to the New Academic Year 🎓",
  heroTitlePart1: "Fostering Knowledge and",
  heroTitleHighlight: "Ethics",
  heroTitlePart2: "for a Brighter Future",
  heroDescription: "Our school provides standardized curriculum for both secondary and high school levels, along with a favorable learning environment for every student's development.",
  heroBtnRegister: "Enroll Now",
  heroBtnLearnMore: "Learn More",
  heroCardTitle: "Trusted Educational Quality",
  heroCardSub: "High graduation rates every year",
  heroClassroomLabel: "Classrooms equipped with:",
  heroClassroomValue: "A/C & Smart Whiteboard",
  heroLabLabel: "Laboratories:",
  heroLabValue: "Modern Science & Computer Labs",
  feature1Title: "Clear Curriculum",
  feature1Desc: "Aligned with Ministry Standards",
  feature2Title: "Experienced Teachers",
  feature2Desc: "Skilled and dedicated teaching",
  feature3Title: "Digital Environment",
  feature3Desc: "Online student management system",
  
  // --- News Section Translations ---
  newsBadge: "News & Events",
  newsTitle: "Latest Activities & School Announcements",
  newsSubtitle: "Follow the latest news, announcements, and activities of students and teachers here.",
  readMoreBtn: "Read More",

  news1Title: "First Semester Summary Meeting and Second Semester Directions",
  news1Category: "Announcement",
  news1Date: "Feb 25, 2026",
  news1Excerpt: "The school organized a summary meeting of teachers and parents' academic work to double the quality of education.",
  
  news2Title: "Annual Sports Competition on \"Sports, Health and Solidarity\"",
  news2Category: "School Event",
  news2Date: "Feb 20, 2026",
  news2Excerpt: "Middle and high school students actively participated in football, basketball, and athletics competitions.",

  news3Title: "Selection Notice for Provincial/Municipal Mathematics Competition",
  news3Category: "Academics",
  news3Date: "Feb 15, 2026",
  news3Excerpt: "The academic support committee has selected grade 12 outstanding students to prepare for inter-institutional competitions.",

  // --- Announcements Section Translations ---
  announcementsBadge: "Announcements & News",
  announcementsTitle: "Official School Announcements",
  announcementsSubtitle: "Stay updated with the latest news, notices, and important announcements from the school administration.",
  urgentBadge: "Urgent",
  readMoreAlert: "Read announcement details",
  announcementAlertMsg: (title) => `Read full announcement: ${title}`,

  schoolAnnouncements: [
    {
      id: 1,
      title: 'Announcement on Semester 2 Registration',
      date: 'Sep 01, 2026',
      category: 'Admin Info',
      description: 'Please be informed that tuition payment and registration for the second semester will start from September 10 to 20, 2026.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
      urgent: true
    },
    {
      id: 2,
      title: 'September 2026 Examination Schedule',
      date: 'Aug 28, 2026',
      category: 'Academics',
      description: 'Monthly assessment exams for grades 7 to 12 will take place from September 25 to 27.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
      urgent: false
    },
    {
      id: 3,
      title: 'Grade 12 Study Tour to Siem Reap',
      date: 'Aug 20, 2026',
      category: 'Student Activity',
      description: 'The school is organizing a full-day study tour at the Angkor Historical Park to foster national heritage awareness.',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
      urgent: false
    }
  ],

  // --- Events Section Translations ---
  eventsBadge: "Upcoming Events",
  eventsTitle: "School Events & Activities Schedule",
  eventsSubtitle: "Stay updated with the dates and information of important events taking place in our school.",
  joinEventBtn: "Join This Event",
  eventAlertMsg: (title) => `Registered for event: ${title}`,

  schoolEvents: [
    {
      id: 1,
      title: 'School-Wide Mathematics Competition',
      date: 'Oct 15, 2026',
      time: '08:00 AM',
      location: 'Main Hall (Hall A)',
      category: 'Academics',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3qBLUK7gGnCRTWNYbOBaUbYZP-JXb3jVucY71Eh5_JhYjnBWhKoj2-XcA&s=10',
      description: 'Annual academic mathematics competition to select outstanding students for provincial and municipal contests.'
    },
    {
      id: 2,
      title: 'Environment & Community Service Day',
      date: 'Oct 22, 2026',
      time: '07:30 AM',
      location: 'School Campus',
      category: 'Community',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
      description: 'Students and teachers join hands to clean the environment and foster school pride and responsibility.'
    },
    {
      id: 3,
      title: 'Science & Technology Exhibition',
      date: 'Nov 05, 2026',
      time: '08:30 AM',
      location: 'Laboratory & Front Yard',
      category: 'Technology',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRdIYVkeyMVu-9Y5_a1AplTsGZxEJFLUHVxlYXitA7PSikGAHXUiy8bMc&s=10',
      description: 'Display of science projects and experiments by students from grades 10 to 12.'
    }
  ],

  // --- About Section Content ---
  aboutUs: {
    badge: "About Us",
    title: "Commitment to Providing High-Quality Education",
    description: "Our high school is established to nurture the younger generation with knowledge, morality, and practical life skills.",
    experienceNum: "25+",
    experienceText: "Years of Educational Experience",
    visionTitle: "Vision",
    visionDesc: "To be a leading educational institution producing highly capable human resources with national pride and competitive skills at national and international levels.",
    missionTitle: "Mission",
    missionDesc: "To provide education meeting ministry standards, strengthen discipline and morality, and promote modern technology in research and learning.",
    coreValuesTitle: "Core Values",
    coreValuesDesc: "Integrity, diligence, leadership, and mutual respect."
  },
  
  // --- Academics Section Content ---
  academics: {
    badge: "Academics",
    title: "Educational Levels & Training Programs",
    description: "We offer robust academic programs adhering to the Ministry of Education, Youth and Sport, with additional focus on technology and foreign languages.",
    popularBadge: "Popular",
    middleSchoolTitle: "Middle School",
    middleSchoolGrades: "Grades 7, 8 & 9",
    middleSchoolDesc: "Focusing on strengthening foundational learning in literature, mathematics, science, and personal discipline.",
    middleSchoolPoints: [
      "Standard Ministry Curriculum",
      "Supplementary English & Computer Classes"
    ],
    scienceTitle: "High School (Science Track)",
    scienceGrades: "Grades 10, 11 & 12",
    scienceDesc: "Preparing students for higher education in medicine, engineering, and technology with modern laboratories.",
    sciencePoints: [
      "Physics, Chemistry & Biology Labs",
      "Grade A Preparation for BacII Exam"
    ],
    socialTitle: "High School (Social Science Track)",
    socialGrades: "Grades 10, 11 & 12",
    socialDesc: "Enhancing knowledge in literature, history, geography, and civic education for law, administration, and international relations.",
    socialPoints: [
      "Critical Thinking Enhancement",
      "Discussion & Reading Clubs"
    ]
  },
  
  // --- Footer Content ---
  footerSchoolName: "Hun Sen Snoul High School",
  footerSchoolSub: "Secondary & High School",
  footerDescription: "Fostering knowledge, morality, and skills for a bright future for Cambodia's young generation.",
  footerQuickLinksTitle: "Quick Links",
  footerHome: "Home",
  footerAbout: "About Us",
  footerAcademics: "Academics",
  footerAdmissions: "Admissions",
  footerNews: "News & Events",
  footerAcademicsTitle: "Academics Level",
  footerLevel1: "Middle School (Grades 7-9)",
  footerLevel2: "Science Track High School",
  footerLevel3: "Social Science Track High School",
  footerLevel4: "Languages & Computer Classes",
  footerContactTitle: "Contact Us",
  footerAddress: "Snoul District, Kratie Province, Cambodia",
  footerPhone: "012 345 678 / 098 765 432",
  footerEmail: "info@hunsensnoul.edu.kh",
  footerCopyright: "© 2026 Hun Sen Snoul High School. All rights reserved.",
  footerPrivacy: "Privacy Policy",
  footerTerms: "Terms of Use"
};