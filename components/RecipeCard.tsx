'use client';

import { Heart } from 'lucide-react';
import { Recipe } from '@/lib/recipes';

interface RecipeCardProps {
  recipe: Recipe;
  isFavorite: boolean;
  onFavoriteToggle: () => void;
  onClick: () => void;
  animationDelay?: number;
}

// Rotating accent colors - primary focused
const accentColors = [
  { border: 'border-bubbe-blue', tag: 'bg-bubbe-blue' },
  { border: 'border-bubbe-red', tag: 'bg-bubbe-red' },
  { border: 'border-bubbe-yellow', tag: 'bg-bubbe-yellow text-bubbe-dark' },
  { border: 'border-bubbe-orange', tag: 'bg-bubbe-orange' },
  { border: 'border-bubbe-green', tag: 'bg-bubbe-green' },
  { border: 'border-bubbe-navy', tag: 'bg-bubbe-navy' },
];

export default function RecipeCard({
  recipe,
  isFavorite,
  onFavoriteToggle,
  onClick,
  animationDelay = 0,
}: RecipeCardProps) {
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onFavoriteToggle();
  };

  const colorScheme = accentColors[recipe.id % accentColors.length];

  return (
    <article
      className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-white border-2 ${colorScheme.border} comic-shadow transition-all duration-200 hover:-translate-y-1 hover:translate-x-[-2px] active:translate-y-0 active:translate-x-0`}
      style={{
        animation: `fadeIn 0.5s ease-out ${animationDelay}ms both`,
      }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`View ${recipe.title} recipe`}
    >
      {/* Blue top bar */}
      <div className="h-2 bg-bubbe-blue" />

      {/* Card content */}
      <div className="p-4 md:p-5">
        {/* Emoji and favorite button row */}
        <div className="flex items-start justify-between">
          <span className="text-5xl md:text-6xl" role="img" aria-label={recipe.title}>
            {recipe.emoji}
          </span>
          <button
            onClick={handleFavoriteClick}
            className={`flex h-11 w-11 items-center justify-center rounded-full border-2 transition-all active:scale-95 ${
              isFavorite
                ? 'bg-bubbe-red border-bubbe-red text-white'
                : 'bg-white border-bubbe-gray/30 text-bubbe-red hover:border-bubbe-red'
            }`}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            aria-pressed={isFavorite}
          >
            <Heart
              className={`h-6 w-6 transition-transform ${
                isFavorite ? 'fill-current animate-heart-pop' : ''
              }`}
            />
          </button>
        </div>

        {/* Title */}
        <h3 className="mt-3 text-xl md:text-2xl font-bold text-bubbe-dark font-display tracking-wide">
          {recipe.title}
        </h3>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm md:text-base text-bubbe-gray font-body">
          {recipe.description}
        </p>

        {/* Tag */}
        <div className="mt-4">
          <span className={`inline-block rounded-full ${colorScheme.tag} px-4 py-1.5 text-xs md:text-sm font-bold text-white`}>
            {recipe.tag}
          </span>
        </div>
      </div>
    </article>
  );
}
