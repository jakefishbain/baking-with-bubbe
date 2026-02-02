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
      {/* Main header - bold blue */}
      <div className="relative overflow-hidden bg-bubbe-blue">
        <div className="flex items-center justify-between px-4 py-3 md:px-8 md:py-4">
          {/* Left side - Back button or spacer */}
          <div className="w-10 md:w-12">
            {showBackButton && (
              <button
                onClick={onBack}
                className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/20 text-white transition-all hover:bg-white/30 active:scale-95"
                aria-label="Go back"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
          <div className="flex items-center gap-3">
            <BubbeLogo size={50} className="md:w-16 md:h-16" />
            <div className="flex flex-col">
              <h1 className="graffiti-text text-2xl md:text-4xl text-white drop-shadow-md">
                Baking With Bubbe
              </h1>
            </div>
          </div>

          {/* Right side - Custom element or spacer */}
          <div className="w-10 md:w-12 flex justify-end">
            {rightElement}
          </div>
        </div>

        {/* Yellow accent bar */}
        <div className="h-2 bg-bubbe-yellow" />
      </div>
    </header>
  );
}
