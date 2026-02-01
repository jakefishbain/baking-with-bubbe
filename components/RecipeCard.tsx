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

  return (
    <article
      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl active:scale-[0.98]"
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
      {/* Rainbow top border */}
      <div className="h-1.5 bg-gradient-to-r from-warm-pink via-lavender to-sage-green" />

      {/* Card content */}
      <div className="p-4">
        {/* Emoji and favorite button row */}
        <div className="flex items-start justify-between">
          <span className="text-5xl" role="img" aria-label={recipe.title}>
            {recipe.emoji}
          </span>
          <button
            onClick={handleFavoriteClick}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-all ${
              isFavorite
                ? 'bg-warm-pink text-white'
                : 'bg-cream text-warm-pink hover:bg-warm-pink/20'
            }`}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            aria-pressed={isFavorite}
          >
            <Heart
              className={`h-5 w-5 transition-transform ${
                isFavorite ? 'fill-current animate-heart-pop' : ''
              }`}
            />
          </button>
        </div>

        {/* Title */}
        <h3
          className="mt-3 text-xl text-chocolate"
          style={{ fontFamily: "'Brush Script MT', cursive" }}
        >
          {recipe.title}
        </h3>

        {/* Description */}
        <p className="mt-2 line-clamp-2 font-serif text-sm text-chocolate/70">
          {recipe.description}
        </p>

        {/* Tag */}
        <div className="mt-3">
          <span className="inline-block rounded-full bg-gradient-to-r from-soft-peach to-lavender px-3 py-1 text-xs font-medium text-chocolate">
            {recipe.tag}
          </span>
        </div>
      </div>

      {/* Decorative border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-warm-pink/30 pointer-events-none" />
    </article>
  );
}
