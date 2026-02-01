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
          <stop offset="0%" stopColor="#FFF8E7" />
          <stop offset="100%" stopColor="#FFE4D4" />
        </radialGradient>
        <radialGradient id="cheekGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF9999" />
          <stop offset="100%" stopColor="#FFB4B4" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="50" cy="50" r="48" fill="url(#bgGradient)" stroke="#FFB4B4" strokeWidth="3" />

      {/* Sparkles around */}
      <text x="15" y="25" fontSize="8" fill="#FFD700">✨</text>
      <text x="78" y="20" fontSize="6" fill="#FFB4B4">✨</text>
      <text x="82" y="75" fontSize="7" fill="#FFD700">✨</text>

      {/* Fluffy puffy hair - silver/lavender tint */}
      <ellipse cx="50" cy="22" rx="28" ry="16" fill="#C4B8D4" />
      <circle cx="30" cy="24" r="10" fill="#D4C8E4" />
      <circle cx="70" cy="24" r="10" fill="#D4C8E4" />
      <circle cx="50" cy="16" r="12" fill="#D4C8E4" />
      <ellipse cx="40" cy="18" rx="8" ry="7" fill="#E0D4F0" />
      <ellipse cx="60" cy="18" rx="8" ry="7" fill="#E0D4F0" />

      {/* Cute hair bun with bow */}
      <circle cx="50" cy="10" r="8" fill="#C4B8D4" />
      <circle cx="50" cy="8" r="5" fill="#D4C8E4" />

      {/* Pink bow on bun */}
      <ellipse cx="44" cy="6" rx="5" ry="3" fill="#FFB4B4" />
      <ellipse cx="56" cy="6" rx="5" ry="3" fill="#FFB4B4" />
      <circle cx="50" cy="6" r="3" fill="#FF9999" />

      {/* Round happy face */}
      <ellipse cx="50" cy="50" rx="26" ry="28" fill="#FFE4C9" />

      {/* Big rosy cheeks */}
      <circle cx="30" cy="54" r="9" fill="url(#cheekGradient)" />
      <circle cx="70" cy="54" r="9" fill="url(#cheekGradient)" />

      {/* Big sparkly eyes */}
      <ellipse cx="38" cy="46" rx="7" ry="8" fill="#4A3728" />
      <ellipse cx="62" cy="46" rx="7" ry="8" fill="#4A3728" />

      {/* Eye shine - big sparkles */}
      <circle cx="40" cy="44" r="3" fill="white" />
      <circle cx="64" cy="44" r="3" fill="white" />
      <circle cx="36" cy="48" r="1.5" fill="white" opacity="0.7" />
      <circle cx="60" cy="48" r="1.5" fill="white" opacity="0.7" />

      {/* Cute eyelashes */}
      <path d="M30 42 L32 40" stroke="#4A3728" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M32 40 L35 39" stroke="#4A3728" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M68 40 L70 42" stroke="#4A3728" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M65 39 L68 40" stroke="#4A3728" strokeWidth="1.5" strokeLinecap="round" />

      {/* Happy arched eyebrows */}
      <path d="M30 38 Q38 34 46 38" fill="none" stroke="#B8A8C8" strokeWidth="2" strokeLinecap="round" />
      <path d="M54 38 Q62 34 70 38" fill="none" stroke="#B8A8C8" strokeWidth="2" strokeLinecap="round" />

      {/* Little button nose */}
      <ellipse cx="50" cy="56" rx="4" ry="3" fill="#F5D4B8" />
      <ellipse cx="50" cy="55" rx="2" ry="1.5" fill="#FFE4D4" opacity="0.5" />

      {/* Big happy smile */}
      <path d="M36 64 Q50 78 64 64" fill="#FF9999" stroke="#D4707A" strokeWidth="1.5" strokeLinecap="round" />

      {/* Tongue peeking out */}
      <ellipse cx="50" cy="70" rx="5" ry="3" fill="#FF8888" />

      {/* Cookie being held at bottom */}
      <circle cx="50" cy="88" r="11" fill="#D2691E" />
      <circle cx="50" cy="88" r="9" fill="#E07020" />
      <circle cx="45" cy="86" r="2.5" fill="#4A3728" />
      <circle cx="53" cy="84" r="2" fill="#4A3728" />
      <circle cx="49" cy="91" r="2" fill="#4A3728" />
      <circle cx="56" cy="89" r="1.5" fill="#4A3728" />

      {/* Little hands holding cookie */}
      <ellipse cx="36" cy="86" rx="7" ry="5" fill="#FFE4C9" />
      <ellipse cx="64" cy="86" rx="7" ry="5" fill="#FFE4C9" />

      {/* Tiny finger bumps */}
      <circle cx="32" cy="84" r="2" fill="#FFE4C9" />
      <circle cx="68" cy="84" r="2" fill="#FFE4C9" />
    </svg>
  );
}
