'use client';

interface BubbeLogoProps {
  size?: number;
  className?: string;
}

export default function BubbeLogo({ size = 60, className = '' }: BubbeLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-label="Bubbe logo - a warm grandmother with white hair holding a cookie"
    >
      {/* Background circle with gradient */}
      <defs>
        <radialGradient id="bgGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="100%" stopColor="#FBBF24" />
        </radialGradient>
        <radialGradient id="cheekGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FDA4AF" />
          <stop offset="100%" stopColor="#FDA4AF" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hairGradient" cx="50%" cy="70%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E5E7EB" />
        </radialGradient>
      </defs>

      {/* Background circle - warm border */}
      <circle cx="50" cy="50" r="48" fill="url(#bgGradient)" stroke="#D97706" strokeWidth="3" />

      {/* Soft white fluffy hair - styled short like Bubbe's */}
      <ellipse cx="50" cy="28" rx="30" ry="18" fill="url(#hairGradient)" />
      <circle cx="28" cy="30" r="11" fill="#F9FAFB" />
      <circle cx="72" cy="30" r="11" fill="#F9FAFB" />
      <circle cx="50" cy="18" r="14" fill="#FFFFFF" />
      <ellipse cx="38" cy="22" rx="9" ry="8" fill="#F3F4F6" />
      <ellipse cx="62" cy="22" rx="9" ry="8" fill="#F9FAFB" />
      {/* Extra volume on sides like in photo */}
      <circle cx="22" cy="38" r="8" fill="#F3F4F6" />
      <circle cx="78" cy="38" r="8" fill="#F3F4F6" />

      {/* Round happy face */}
      <ellipse cx="50" cy="52" rx="26" ry="28" fill="#FFE4C9" />

      {/* Soft rosy cheeks */}
      <circle cx="32" cy="58" r="8" fill="url(#cheekGradient)" />
      <circle cx="68" cy="58" r="8" fill="url(#cheekGradient)" />

      {/* Warm friendly eyes - smaller, more natural */}
      <ellipse cx="40" cy="48" rx="5" ry="6" fill="#4A3728" />
      <ellipse cx="60" cy="48" rx="5" ry="6" fill="#4A3728" />

      {/* Eye shine - warm sparkle */}
      <circle cx="41" cy="46" r="2" fill="white" />
      <circle cx="61" cy="46" r="2" fill="white" />

      {/* Gentle smile lines around eyes */}
      <path d="M30 52 Q28 50 30 48" fill="none" stroke="#DEB89A" strokeWidth="1" strokeLinecap="round" />
      <path d="M70 52 Q72 50 70 48" fill="none" stroke="#DEB89A" strokeWidth="1" strokeLinecap="round" />

      {/* Thin natural eyebrows */}
      <path d="M34 42 Q40 40 46 42" fill="none" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M54 42 Q60 40 66 42" fill="none" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />

      {/* Little nose */}
      <ellipse cx="50" cy="56" rx="3" ry="2.5" fill="#F5D4B8" />

      {/* Big warm smile showing teeth - like in the photo */}
      <path d="M38 66 Q50 78 62 66" fill="#FFFFFF" stroke="#E8998D" strokeWidth="2" strokeLinecap="round" />
      {/* Upper lip line */}
      <path d="M38 66 Q50 62 62 66" fill="none" stroke="#E8998D" strokeWidth="1.5" strokeLinecap="round" />

      {/* Cookie being held */}
      <circle cx="50" cy="90" r="10" fill="#D97706" />
      <circle cx="50" cy="90" r="8" fill="#FBBF24" />
      <circle cx="46" cy="88" r="2" fill="#92400E" />
      <circle cx="52" cy="86" r="1.5" fill="#92400E" />
      <circle cx="49" cy="92" r="1.5" fill="#92400E" />
      <circle cx="54" cy="91" r="1" fill="#92400E" />

      {/* Little hands holding cookie */}
      <ellipse cx="38" cy="88" rx="6" ry="4" fill="#FFE4C9" />
      <ellipse cx="62" cy="88" rx="6" ry="4" fill="#FFE4C9" />
    </svg>
  );
}
