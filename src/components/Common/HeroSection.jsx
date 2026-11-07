import React, { memo, useEffect, useMemo, useState } from 'react';
import { kh } from '../../translate/Khmer';
import { en } from '../../translate/English';

/* ─────────────────────────── Constants ─────────────────────────── */
const TRANSLATIONS = Object.freeze({ KH: kh, EN: en });

const HERO_BACKGROUND_IMAGE =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3qBLUK7gGnCRTWNYbOBaUbYZP-JXb3jVucY71Eh5_JhYjnBWhKoj2-XcA&s=10';

const CAMPUS_IMAGE =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRdIYVkeyMVu-9Y5_a1AplTsGZxEJFLUHVxlYXitA7PSikGAHXUiy8bMc&s=10';

/* ─────────────────────────── Grapheme Splitter ─────────────────────────── */
const SEGMENTER =
  typeof Intl !== 'undefined' && Intl.Segmenter
    ? new Intl.Segmenter('km', { granularity: 'grapheme' })
    : null;

const splitGraphemes = (text = '') =>
  SEGMENTER ? Array.from(SEGMENTER.segment(text), (s) => s.segment) : Array.from(text);

/* ─────────────────────────── Icons ─────────────────────────── */
const Icon = ({ path, className = 'w-5 h-5 sm:w-6 sm:h-6' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={path} />
  </svg>
);

const GraduationCapIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

const ArrowRightIcon = ({ className }) => <Icon path="M14 5l7 7m0 0l-7 7m7-7H3" className={className} />;

const UsersIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const FEATURE_ICONS = {
  book: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  users: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  monitor: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
};

/* ─────────────────────────── Sub-Components ─────────────────────────── */
const Badge = ({ label }) => (
  <div className="inline-flex items-center space-x-2 bg-black/40 backdrop-blur-md text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-1.5 sm:py-2 rounded-full uppercase tracking-wider shadow-sm border border-white/10 hover:bg-black/60 transition-all duration-300">
    <GraduationCapIcon className="w-4 h-4 text-primary" />
    <span className="drop-shadow-sm">{label}</span>
  </div>
);

// ✅ កែសម្រួល FeatureItem ឱ្យតម្រឹមចំហៀងស្មើគ្នា
const FeatureItem = ({ iconPath, title, description, className = '' }) => (
  <div className={`group flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-2 md:gap-4 p-3 sm:p-4 rounded-2xl transition-all duration-300 hover:bg-white/5 hover:-translate-y-1 text-center md:text-left ${className}`}>
    <div className="bg-primary/20 text-primary p-2 sm:p-3 rounded-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
      <Icon path={iconPath} className="w-5 h-5 sm:w-6 sm:h-6" />
    </div>
    <div>
      <h4 className="font-bold text-white text-xs sm:text-sm md:text-base group-hover:text-primary transition-colors leading-tight">{title}</h4>
      <p className="text-[10px] sm:text-xs md:text-sm text-gray-300 group-hover:text-white transition-colors leading-tight mt-1">{description}</p>
    </div>
  </div>
);

/* ─────────────────────────── Typewriter Title ─────────────────────────── */
const TypewriterTitle = ({ segments, typingSpeed = 150, deletingSpeed = 60, pauseMs = 3000, restartDelay = 800, cursorClassName = 'bg-primary', className = '' }) => {
  const flatGraphemes = useMemo(() => {
    const list = [];
    (segments || []).forEach((seg) => {
      if (!seg || !seg.text) return;
      splitGraphemes(seg.text).forEach((g) => {
        list.push({ char: g, className: seg.className || '' });
      });
    });
    return list;
  }, [segments]);

  const total = flatGraphemes.length;
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState('typing');

  useEffect(() => {
    let timer;
    if (phase === 'typing') {
      if (count < total) timer = setTimeout(() => setCount((c) => c + 1), typingSpeed);
      else timer = setTimeout(() => setPhase('deleting'), pauseMs);
    } else {
      if (count > 0) timer = setTimeout(() => setCount((c) => c - 1), deletingSpeed);
      else timer = setTimeout(() => setPhase('typing'), restartDelay);
    }
    return () => clearTimeout(timer);
  }, [count, phase, total, typingSpeed, deletingSpeed, pauseMs, restartDelay]);

  const visibleGraphemes = flatGraphemes.slice(0, count);
  const grouped = [];
  visibleGraphemes.forEach((item) => {
    const last = grouped[grouped.length - 1];
    if (last && last.className === item.className) last.text += item.char;
    else grouped.push({ className: item.className, text: item.char });
  });

  return (
    <span className={className}>
      {grouped.map((g, i) => (
        <span key={i} className={g.className}>{g.text}</span>
      ))}
      <span aria-hidden="true" className={`inline-block align-middle w-[3px] h-[0.9em] ml-1.5 animate-blink rounded-full ${cursorClassName}`} />
    </span>
  );
};

/* ─────────────────────────── Main Component ─────────────────────────── */
const HeroSection = ({ lang = 'EN', setActiveTab }) => {
  const t = TRANSLATIONS[lang] ?? TRANSLATIONS.EN;
  const isKhmer = lang === 'KH';

  const features = [
    { iconPath: FEATURE_ICONS.book, title: t?.feature1Title, description: t?.feature1Desc },
    { iconPath: FEATURE_ICONS.users, title: t?.feature2Title, description: t?.feature2Desc },
    { iconPath: FEATURE_ICONS.monitor, title: t?.feature3Title, description: t?.feature3Desc },
  ];

  const titleSegments = useMemo(
    () => [
      { text: `${t?.heroTitlePart1 || ''} `, className: 'text-white' },
      { text: t?.heroTitleHighlight || '', className: 'text-primary' },
      { text: ` ${t?.heroTitlePart2 || ''}`, className: 'text-white' },
    ],
    [t]
  );

  const titleBaseClass = 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-snug lg:leading-tight drop-shadow-lg';

  const handleRegisterClick = (e) => {
    e.preventDefault();
    if (setActiveTab) setActiveTab('admissions');
    else document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLearnMoreClick = (e) => {
    e.preventDefault();
    if (setActiveTab) setActiveTab('about');
    else document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`relative text-white overflow-hidden bg-gray-900 ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
      <style>
        {`
          @keyframes blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
          .animate-blink { animation: blink 1s step-end infinite; }
        `}
      </style>

      <div className="absolute inset-0 bg-cover bg-center z-0 scale-105" style={{ backgroundImage: `url('${HERO_BACKGROUND_IMAGE}')` }} role="img" aria-label="School campus background">
        <div className="absolute inset-0 bg-gray-900/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      <div className="absolute top-0 right-0 w-64 sm:w-[500px] h-64 sm:h-[500px] bg-primary/30 rounded-full blur-[100px] pointer-events-none z-0 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-52 sm:w-[400px] h-52 sm:h-[400px] bg-primary/20 rounded-full blur-[80px] pointer-events-none z-0 -translate-x-1/3 translate-y-1/3"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <Badge label={t?.heroBadge} />

            <div className="grid">
              <h1 className={`col-start-1 row-start-1 invisible ${titleBaseClass}`} aria-hidden="true">
                {t?.heroTitlePart1} <span className="text-primary">{t?.heroTitleHighlight}</span> {t?.heroTitlePart2}
              </h1>
              <h1 className={`col-start-1 row-start-1 ${titleBaseClass}`} aria-live="polite">
                <TypewriterTitle segments={titleSegments} typingSpeed={100} cursorClassName="bg-primary" />
              </h1>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed drop-shadow-md">
              {t?.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#admissions"
                onClick={handleRegisterClick}
                className="group relative inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-8 py-3.5 sm:py-4 rounded-xl shadow-[0_8px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <span>{t?.heroBtnRegister}</span>
                <ArrowRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
              
              <a
                href="#about"
                onClick={handleLearnMoreClick}
                className="inline-flex items-center justify-center bg-white/5 hover:bg-white/15 backdrop-blur-md border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
              >
                {t?.heroBtnLearnMore}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 block relative group mt-10 lg:mt-0">
            <div className="relative w-full aspect-[4/5] lg:h-[520px] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/80 ring-1 ring-white/10 bg-gray-800">
              
              <img
                src={CAMPUS_IMAGE}
                alt="School campus building"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-5 left-5 right-5">
                <div className="relative overflow-hidden bg-black/40 backdrop-blur-2xl border border-white/20 rounded-2xl p-4 sm:p-5 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 hover:bg-black/50">
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                  <div className="relative z-10 space-y-1">
                    <p className="text-[11px] sm:text-xs text-gray-300 font-semibold tracking-wider drop-shadow-sm">
                      {lang === 'KH' ? 'សិស្សកំពុងសិក្សា' : 'Active Students'}
                    </p>
                    <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
                      1,000<span className="text-primary">+</span>
                    </p>
                  </div>
                  <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.6)] group-hover:scale-110 transition-transform duration-300 shrink-0 border border-primary/40">
                    <UsersIcon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ── Feature Badges ── */}
      <div className="bg-black/20 backdrop-blur-xl border-t border-white/10 relative z-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* ✅ ប្តូរទៅ grid-cols-3 ដើម្បីឱ្យវាតម្រឹមចំហៀងស្មើគ្នាលើទូរស័ព្ទ */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-2 sm:gap-6 text-center md:text-left md:divide-x divide-white/10">
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                {...feature}
                className={index > 0 ? 'md:pl-6' : ''}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);