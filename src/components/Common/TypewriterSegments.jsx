import React, { useEffect, useMemo, useState } from 'react';

const segmenter =
  typeof Intl !== 'undefined' && Intl.Segmenter
    ? new Intl.Segmenter('km', { granularity: 'grapheme' })
    : null;

const splitGraphemes = (text) => {
  if (segmenter) {
    return Array.from(segmenter.segment(text), (s) => s.segment);
  }
  return Array.from(text);
};

const TypewriterSegments = ({
  segments,
  typingSpeed = 90,
  deletingSpeed = 45,
  pause = 1800,
  loop = true,
  className = '',
}) => {
  const fullText = useMemo(
    () => segments.map((s) => s.text).join(''),
    [segments]
  );

  const graphemes = useMemo(() => splitGraphemes(fullText), [fullText]);

  const [visibleCount, setVisibleCount] = useState(0);
  const [phase, setPhase] = useState('typing'); // typing | deleting

  useEffect(() => {
    setVisibleCount(0);
    setPhase('typing');
  }, [fullText]);

  useEffect(() => {
    let timer;

    if (phase === 'typing') {
      if (visibleCount < graphemes.length) {
        timer = setTimeout(() => {
          setVisibleCount((n) => n + 1);
        }, typingSpeed);
      } else if (loop) {
        timer = setTimeout(() => {
          setPhase('deleting');
        }, pause);
      }
    }

    if (phase === 'deleting') {
      if (visibleCount > 0) {
        timer = setTimeout(() => {
          setVisibleCount((n) => n - 1);
        }, deletingSpeed);
      } else if (loop) {
        timer = setTimeout(() => {
          setPhase('typing');
        }, 400);
      }
    }

    return () => clearTimeout(timer);
  }, [
    visibleCount,
    phase,
    graphemes.length,
    typingSpeed,
    deletingSpeed,
    pause,
    loop,
  ]);

  let remaining = visibleCount;

  return (
    <span className={className}>
      {segments.map((seg, index) => {
        const segGraphemes = splitGraphemes(seg.text);
        const take = Math.max(0, Math.min(segGraphemes.length, remaining));
        remaining -= take;

        return (
          <span key={index} className={seg.className || ''}>
            {segGraphemes.slice(0, take).join('')}
          </span>
        );
      })}

      {/* Cursor blinking */}
      <span
        aria-hidden="true"
        className="inline-block w-[2px] h-[1em] bg-current align-middle ml-1 animate-pulse"
      />
    </span>
  );
};

export default TypewriterSegments;