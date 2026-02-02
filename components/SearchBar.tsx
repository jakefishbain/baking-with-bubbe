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
    <div className="relative mx-4 md:mx-6 lg:mx-8 my-4 md:my-6">
      <div className="relative flex items-center">
        <Search
          className="absolute left-4 h-5 w-5 md:h-6 md:w-6 text-bubbe-blue"
          aria-hidden="true"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-full border-2 border-bubbe-blue bg-white py-3 md:py-4 pl-12 md:pl-14 pr-12 font-body font-semibold text-bubbe-dark placeholder:text-bubbe-gray/60 focus:border-bubbe-blue-dark focus:outline-none focus:ring-4 focus:ring-bubbe-blue/20 comic-shadow-sm transition-all text-base md:text-lg"
          aria-label="Search recipes"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute right-3 flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full bg-bubbe-red text-white transition-all hover:bg-bubbe-red/80 active:scale-95"
            aria-label="Clear search"
          >
            <X className="h-4 w-4 md:h-5 md:w-5" />
          </button>
        )}
      </div>
    </div>
  );
}
