'use client';

import BubbeLogo from './BubbeLogo';

interface HeaderProps {
  showBackButton?: boolean;
  onBack?: () => void;
  rightElement?: React.ReactNode;
}

export default function Header({ showBackButton, onBack, rightElement }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Gradient background with shimmer */}
      <div
        className="relative overflow-hidden bg-gradient-to-r from-warm-pink via-soft-peach to-warm-pink"
        style={{
          backgroundSize: '200% 100%',
          animation: 'shimmer 3s linear infinite',
        }}
      >
        <div className="flex items-center justify-between px-4 py-3">
          {/* Left side - Back button or spacer */}
          <div className="w-10">
            {showBackButton && (
              <button
                onClick={onBack}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/30 text-chocolate transition-transform active:scale-95"
                aria-label="Go back"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
            )}
          </div>

          {/* Center - Logo and Title */}
          <div className="flex items-center gap-2">
            <BubbeLogo size={50} />
            <div className="flex flex-col">
              <h1
                className="text-2xl text-chocolate"
                style={{ fontFamily: "'Brush Script MT', cursive" }}
              >
                Baking With Bubbe
              </h1>
            </div>
          </div>

          {/* Right side - Custom element or spacer */}
          <div className="w-10 flex justify-end">
            {rightElement}
          </div>
        </div>

        {/* Decorative bottom border */}
        <div className="h-1 bg-gradient-to-r from-warm-pink via-lavender to-sage-green" />
      </div>
    </header>
  );
}
