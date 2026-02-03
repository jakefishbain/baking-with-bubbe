'use client';

import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search Bubbe's recipes...",
}: SearchBarProps) {
  return (
    <div className="sticky top-[65px] md:top-[73px] z-30 bg-bubbe-cream px-3 md:px-4 lg:px-6 py-2 md:py-3">
      <div className="relative flex items-center">
        <Search
          className="absolute left-3 h-4 w-4 md:h-5 md:w-5 text-bubbe-blue"
          aria-hidden="true"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-full border-2 border-bubbe-blue bg-white py-2 md:py-2.5 pl-9 md:pl-11 pr-10 font-body font-semibold text-bubbe-dark placeholder:text-bubbe-gray/60 focus:border-bubbe-blue-dark focus:outline-none focus:ring-4 focus:ring-bubbe-blue/20 comic-shadow-sm transition-all text-sm md:text-base"
          aria-label="Search recipes"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute right-2 flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full bg-bubbe-red text-white transition-all hover:bg-bubbe-red/80 active:scale-95"
            aria-label="Clear search"
          >
            <X className="h-3.5 w-3.5 md:h-4 md:w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
