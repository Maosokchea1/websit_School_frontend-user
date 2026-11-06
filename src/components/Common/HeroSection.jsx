import React, { memo, useEffect, useMemo, useState } from 'react';
import { kh } from '../../translate/Khmer';
import { en } from '../../translate/English';

/* ───────────────────────────  Constants  ─────────────────────────── */

const TRANSLATIONS = Object.freeze({ KH: kh, EN: en });

const HERO_BACKGROUND_IMAGE =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3qBLUK7gGnCRTWNYbOBaUbYZP-JXb3jVucY71Eh5_JhYjnBWhKoj2-XcA&s=10';

const CAMPUS_IMAGE =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRdIYVkeyMVu-9Y5_a1AplTsGZxEJFLUHVxlYXitA7PSikGAHXUiy8bMc&s=10';

/* ───────────────────────────  Grapheme Splitter (Khmer-safe)  ─────────────────────────── */

const SEGMENTER =
  typeof Intl !== 'undefined' && Intl.Segmenter
    ? new Intl.Segmenter('km', { granularity: 'grapheme' })
    : null;

const splitGraphemes = (text = '') =>
  SEGMENTER
    ? Array.from(SEGMENTER.segment(text), (s) => s.segment)
    : Array.from(text);

/* ───────────────────────────  Icons  ─────────────────────────── */

const Icon = ({ path, className = 'w-5 h-5 sm:w-6 sm:h-6' }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={path} />
  </svg>
);

const GraduationCapIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 14l9-5-9-5-9 5 9 5z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
    />
  </svg>
);

const ArrowRightIcon = ({ className }) => (
  <Icon path="M14 5l7 7m0 0l-7 7m7-7H3" className={className} />
);

const FEATURE_ICONS = {
  book: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  users:
    'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  monitor:
    'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
};

/* ───────────────────────────  Sub-Components  ─────────────────────────── */

const Badge = ({ label }) => (
  <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-1.5 sm:py-2 rounded-full uppercase tracking-wider shadow-[0_0_20px_rgba(255,255,255,0.15)] border border-white/20 hover:bg-white/20 transition-all duration-300">
    <GraduationCapIcon className="w-4 h-4 text-yellow-300 animate-spin [animation-duration:4s]" />
    <span className="drop-shadow-sm">{label}</span>
  </div>
);

const FeatureItem = ({ iconPath, title, description, className = '' }) => (
  <div
    className={`group flex items-center justify-center md:justify-start gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 ${className}`}
  >
    <div className="bg-white/10 text-amber-300 p-2.5 sm:p-3.5 rounded-xl shadow-inner shrink-0 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-amber-950 transition-all duration-300">
      <Icon path={iconPath} />
    </div>
    <div className="text-left">
      <h4 className="font-bold text-white text-base sm:text-lg group-hover:text-amber-300 transition-colors">{title}</h4>
      <p className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors">{description}</p>
    </div>
  </div>
);

/* ───────────────────────────  Typewriter Title  ─────────────────────────── */

const TypewriterTitle = ({
  segments,
  typingSpeed = 150,
  deletingSpeed = 60,
  pauseMs = 3000,
  restartDelay = 800,
  cursorClassName = 'bg-amber-300',
  className = '',
}) => {
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
      if (count < total) {
        timer = setTimeout(() => setCount((c) => c + 1), typingSpeed);
      } else {
        timer = setTimeout(() => setPhase('deleting'), pauseMs);
      }
    } else {
      if (count > 0) {
        timer = setTimeout(() => setCount((c) => c - 1), deletingSpeed);
      } else {
        timer = setTimeout(() => setPhase('typing'), restartDelay);
      }
    }

    return () => clearTimeout(timer);
  }, [count, phase, total, typingSpeed, deletingSpeed, pauseMs, restartDelay]);

  const visibleGraphemes = flatGraphemes.slice(0, count);
  const grouped = [];
  visibleGraphemes.forEach((item) => {
    const last = grouped[grouped.length - 1];
    if (last && last.className === item.className) {
      last.text += item.char;
    } else {
      grouped.push({ className: item.className, text: item.char });
    }
  });

  return (
    <span className={className}>
      {grouped.map((g, i) => (
        <span key={i} className={g.className}>
          {g.text}
        </span>
      ))}
      <span
        aria-hidden="true"
        className={`inline-block align-middle w-[3px] h-[0.9em] ml-1.5 animate-blink rounded-full ${cursorClassName}`}
      />
    </span>
  );
};

/* ───────────────────────────  Main Component  ─────────────────────────── */

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
      { text: `${t?.heroTitlePart1 || ''} ` },
      {
        text: t?.heroTitleHighlight || '',
        className:
          'text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 drop-shadow-sm',
      },
      { text: ` ${t?.heroTitlePart2 || ''}` },
    ],
    [t]
  );

  // Responsive font scaling: starts at text-2xl on 360px phones, scaling up smoothly
  const titleBaseClass =
    'text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-snug lg:leading-tight drop-shadow-2xl';

  const handleRegisterClick = (e) => {
    e.preventDefault();
    if (setActiveTab) {
      setActiveTab('admissions');
    } else {
      const el = document.getElementById('admissions');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMoreClick = (e) => {
    e.preventDefault();
    if (setActiveTab) {
      setActiveTab('about');
    } else {
      const el = document.getElementById('about');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className={`relative text-white overflow-hidden ${
        isKhmer ? 'font-khmer' : 'font-sans'
      }`}
    >
      <style>
        {`
          @keyframes blink {
            0%, 49% { opacity: 1; }
            50%, 100% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s step-end infinite;
          }
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>

      {/* ── Background ជាមួយ Gradient និងពន្លឺស្រាលៗ ── */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 scale-105"
        style={{ backgroundImage: `url('${HERO_BACKGROUND_IMAGE}')` }}
        role="img"
        aria-label="School campus background"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/60 to-primary/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      {/* ពន្លឺ Blur ពណ៌ (Decor) */}
      <div className="absolute top-0 right-0 w-64 sm:w-[500px] h-64 sm:h-[500px] bg-primary/30 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none z-0 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-52 sm:w-[400px] h-52 sm:h-[400px] bg-amber-500/20 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none z-0 -translate-x-1/3 translate-y-1/3"></div>

      {/* ── Main Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <Badge label={t?.heroBadge} />

            <div className="grid">
              {/* Invisible Layer ដើម្បីរក្សា Layout */}
              <h1 className={`col-start-1 row-start-1 invisible ${titleBaseClass}`} aria-hidden="true">
                {t?.heroTitlePart1}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400">
                  {t?.heroTitleHighlight}
                </span>{' '}
                {t?.heroTitlePart2}
              </h1>

              {/* Visible Layer ជាមួយ Typewriter */}
              <h1 className={`col-start-1 row-start-1 ${titleBaseClass}`} aria-live="polite">
                <TypewriterTitle
                  segments={titleSegments}
                  typingSpeed={150}
                  deletingSpeed={60}
                  pauseMs={3000}
                  restartDelay={800}
                />
              </h1>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed drop-shadow-md">
              {t?.heroDescription}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 pt-4 sm:pt-6">
              <a
                href="#admissions"
                onClick={handleRegisterClick}
                className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-blue-950 font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-[0_8px_30px_rgb(245,158,11,0.3)] hover:shadow-[0_8px_30px_rgb(245,158,11,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden w-full sm:w-auto text-sm sm:text-base"
              >
                {/* Shimmer Effect ពេល Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-0"></div>
                <span className="relative z-10">{t?.heroBtnRegister}</span>
                <ArrowRightIcon className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
              
              <a
                href="#about"
                onClick={handleLearnMoreClick}
                className="inline-flex items-center justify-center bg-white/5 hover:bg-white/15 backdrop-blur-md border border-white/20 hover:border-white/40 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto text-sm sm:text-base"
              >
                {t?.heroBtnLearnMore}
              </a>
            </div>
          </div>

          {/* Campus Image ជាមួយ Glassmorphism Frame */}
          <div className="lg:col-span-5 hidden lg:block relative">
            <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-white/20 group animate-float">
              <img
                src={CAMPUS_IMAGE}
                alt="School campus building"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating Badge លើរូបភាព */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-white/80 uppercase tracking-wider font-semibold">
                    {lang === 'KH' ? 'សិស្សកំពុងសិក្សា' : 'Active Students'}
                  </p>
                  <p className="text-2xl font-bold text-white mt-1">1,000+</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Feature Badges (ផ្ទៃខាងក្រោយថ្មី) ── */}
      <div className="bg-white/5 backdrop-blur-xl border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-white/10">
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                {...feature}
                className={index > 0 ? 'md:pl-6 pt-3 md:pt-0' : ''}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
