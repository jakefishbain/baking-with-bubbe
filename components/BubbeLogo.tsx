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
      aria-label="Bubbe logo - a bubbly, fun grandmother holding a cookie"
    >
      {/* Background circle with gradient */}
      <defs>
        <radialGradient id="bgGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#F97316" />
        </radialGradient>
        <radialGradient id="cheekGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#DC2626" />
          <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background circle - blue border */}
      <circle cx="50" cy="50" r="48" fill="url(#bgGradient)" stroke="#2563EB" strokeWidth="4" />

      {/* Sparkles around */}
      <text x="15" y="25" fontSize="8" fill="#FBBF24">✨</text>
      <text x="78" y="20" fontSize="6" fill="#2563EB">✨</text>
      <text x="82" y="75" fontSize="7" fill="#16A34A">✨</text>
      <text x="12" y="70" fontSize="6" fill="#DC2626">✨</text>

      {/* Fluffy puffy hair - blue tones */}
      <ellipse cx="50" cy="22" rx="28" ry="16" fill="#2563EB" />
      <circle cx="30" cy="24" r="10" fill="#60A5FA" />
      <circle cx="70" cy="24" r="10" fill="#60A5FA" />
      <circle cx="50" cy="16" r="12" fill="#1E40AF" />
      <ellipse cx="40" cy="18" rx="8" ry="7" fill="#60A5FA" opacity="0.8" />
      <ellipse cx="60" cy="18" rx="8" ry="7" fill="#2563EB" opacity="0.8" />

      {/* Cute hair bun */}
      <circle cx="50" cy="10" r="8" fill="#2563EB" />
      <circle cx="50" cy="8" r="5" fill="#60A5FA" />

      {/* Bow on bun - red and yellow */}
      <ellipse cx="44" cy="6" rx="5" ry="3" fill="#DC2626" />
      <ellipse cx="56" cy="6" rx="5" ry="3" fill="#DC2626" />
      <circle cx="50" cy="6" r="3" fill="#FBBF24" />

      {/* Round happy face */}
      <ellipse cx="50" cy="50" rx="26" ry="28" fill="#FFE4C9" />

      {/* Big rosy cheeks */}
      <circle cx="30" cy="54" r="9" fill="url(#cheekGradient)" />
      <circle cx="70" cy="54" r="9" fill="url(#cheekGradient)" />

      {/* Big sparkly eyes */}
      <ellipse cx="38" cy="46" rx="7" ry="8" fill="#1E293B" />
      <ellipse cx="62" cy="46" rx="7" ry="8" fill="#1E293B" />

      {/* Eye shine */}
      <circle cx="40" cy="44" r="3" fill="white" />
      <circle cx="64" cy="44" r="3" fill="white" />
      <circle cx="36" cy="48" r="1.5" fill="white" opacity="0.7" />
      <circle cx="60" cy="48" r="1.5" fill="white" opacity="0.7" />

      {/* Cute eyelashes */}
      <path d="M30 42 L32 40" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M32 40 L35 39" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M68 40 L70 42" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M65 39 L68 40" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />

      {/* Happy arched eyebrows - blue */}
      <path d="M30 38 Q38 34 46 38" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
      <path d="M54 38 Q62 34 70 38" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />

      {/* Little button nose */}
      <ellipse cx="50" cy="56" rx="4" ry="3" fill="#F5D4B8" />
      <ellipse cx="50" cy="55" rx="2" ry="1.5" fill="#FFE4D4" opacity="0.5" />

      {/* Big happy smile - red */}
      <path d="M36 64 Q50 78 64 64" fill="#DC2626" stroke="#B91C1C" strokeWidth="1.5" strokeLinecap="round" />

      {/* Tongue */}
      <ellipse cx="50" cy="70" rx="5" ry="3" fill="#F87171" />

      {/* Cookie being held - yellow/orange */}
      <circle cx="50" cy="88" r="11" fill="#F97316" />
      <circle cx="50" cy="88" r="9" fill="#FBBF24" />
      <circle cx="45" cy="86" r="2.5" fill="#2563EB" />
      <circle cx="53" cy="84" r="2" fill="#DC2626" />
      <circle cx="49" cy="91" r="2" fill="#16A34A" />
      <circle cx="56" cy="89" r="1.5" fill="#1E40AF" />

      {/* Little hands holding cookie */}
      <ellipse cx="36" cy="86" rx="7" ry="5" fill="#FFE4C9" />
      <ellipse cx="64" cy="86" rx="7" ry="5" fill="#FFE4C9" />

      {/* Tiny finger bumps */}
      <circle cx="32" cy="84" r="2" fill="#FFE4C9" />
      <circle cx="68" cy="84" r="2" fill="#FFE4C9" />
    </svg>
  );
}
