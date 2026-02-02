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
      {/* Main header - bold blue with rounded bottom */}
      <div className="relative overflow-hidden bg-bubbe-blue rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-3">
          {/* Left side - Back button or spacer */}
          <div className="w-8 md:w-10">
            {showBackButton && (
              <button
                onClick={onBack}
                className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-white/20 text-white transition-all hover:bg-white/30 active:scale-95"
                aria-label="Go back"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
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
            <BubbeLogo size={40} className="md:w-12 md:h-12" />
            <div className="flex flex-col">
              <h1 className="graffiti-text text-xl md:text-2xl text-white drop-shadow-md">
                Baking With Bubbe
              </h1>
            </div>
          </div>

          {/* Right side - Custom element or spacer */}
          <div className="w-8 md:w-10 flex justify-end">
            {rightElement}
          </div>
        </div>

        {/* Yellow accent bar - also rounded */}
        <div className="h-1.5 bg-bubbe-yellow rounded-b-3xl" />
      </div>
    </header>
  );
}
