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
    <div className="relative mx-4 my-4">
      <div className="relative flex items-center">
        <Search
          className="absolute left-4 h-5 w-5 text-cinnamon"
          aria-hidden="true"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-full border-2 border-warm-pink bg-white py-3 pl-12 pr-10 font-serif text-chocolate placeholder:text-cinnamon/60 focus:border-cinnamon focus:outline-none focus:ring-2 focus:ring-cinnamon/20 transition-all"
          aria-label="Search recipes"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute right-3 flex h-7 w-7 items-center justify-center rounded-full bg-warm-pink/50 text-chocolate transition-transform hover:bg-warm-pink active:scale-95"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
