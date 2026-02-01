'use client';

import { Heart } from 'lucide-react';
import { Recipe } from '@/lib/recipes';

interface RecipeDetailProps {
  recipe: Recipe;
  isFavorite: boolean;
  onFavoriteToggle: () => void;
  onClose: () => void;
}

export default function RecipeDetail({
  recipe,
  isFavorite,
  onFavoriteToggle,
  onClose,
}: RecipeDetailProps) {
  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="recipe-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-chocolate/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Recipe content - slide up animation */}
      <div
        className="absolute bottom-0 left-0 right-0 mx-auto max-h-[90vh] w-full max-w-mobile animate-slide-up overflow-y-auto rounded-t-3xl bg-cream"
        style={{
          backgroundImage: `
            linear-gradient(to right, transparent 30px, #FFB4B4 30px, #FFB4B4 32px, transparent 32px),
            repeating-linear-gradient(transparent 0px, transparent 28px, #FFD4B4 28px, #FFD4B4 29px)
          `,
        }}
      >
        {/* Header with back and favorite buttons */}
        <div className="sticky top-0 z-10 flex items-center justify-between bg-gradient-to-b from-cream via-cream to-cream/80 p-4 pb-2">
          <button
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-warm-pink/30 text-chocolate transition-all active:scale-95"
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

          <button
            onClick={onFavoriteToggle}
            className={`flex h-11 w-11 items-center justify-center rounded-full transition-all active:scale-95 ${
              isFavorite
                ? 'bg-warm-pink text-white'
                : 'bg-warm-pink/30 text-warm-pink'
            }`}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            aria-pressed={isFavorite}
          >
            <Heart
              className={`h-6 w-6 ${isFavorite ? 'fill-current' : ''}`}
            />
          </button>
        </div>

        {/* Recipe content - storybook style */}
        <div className="px-8 pb-12">
          {/* Emoji */}
          <div className="flex justify-center py-4">
            <span className="text-7xl drop-shadow-lg" role="img" aria-hidden="true">
              {recipe.emoji}
            </span>
          </div>

          {/* Title */}
          <h1
            id="recipe-title"
            className="text-center text-3xl text-chocolate leading-tight"
            style={{ fontFamily: "'Brush Script MT', cursive" }}
          >
            {recipe.title}
          </h1>

          {/* Tag */}
          <div className="mt-3 flex justify-center">
            <span className="rounded-full bg-gradient-to-r from-soft-peach to-lavender px-4 py-1 text-sm text-chocolate">
              {recipe.tag}
            </span>
          </div>

          {/* Cooking info badges */}
          {(recipe.cookingTime || recipe.ovenTemp) && (
            <div className="mt-4 flex justify-center gap-3 flex-wrap">
              {recipe.ovenTemp && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-warm-pink/20 px-3 py-1.5 text-sm text-chocolate">
                  <span aria-hidden="true">🌡️</span>
                  {recipe.ovenTemp}
                </span>
              )}
              {recipe.cookingTime && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-sage-green/30 px-3 py-1.5 text-sm text-chocolate">
                  <span aria-hidden="true">⏱️</span>
                  {recipe.cookingTime}
                </span>
              )}
            </div>
          )}

          {/* Description */}
          <p className="mt-6 text-center font-serif text-chocolate/80 italic leading-relaxed">
            {recipe.description}
          </p>

          {/* Decorative divider */}
          <div className="my-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-warm-pink" />
            <span className="text-warm-pink">✿</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-warm-pink" />
          </div>

          {/* Ingredients section */}
          <section aria-labelledby="ingredients-heading">
            <h2
              id="ingredients-heading"
              className="mb-4 text-2xl text-chocolate"
              style={{ fontFamily: "'Brush Script MT', cursive" }}
            >
              Ingredients
            </h2>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 font-serif text-chocolate/90"
                >
                  <span className="text-cinnamon" aria-hidden="true">🥄</span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Decorative divider */}
          <div className="my-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-warm-pink" />
            <span className="text-warm-pink">✿</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-warm-pink" />
          </div>

          {/* Instructions section */}
          <section aria-labelledby="instructions-heading">
            <h2
              id="instructions-heading"
              className="mb-4 text-2xl text-chocolate"
              style={{ fontFamily: "'Brush Script MT', cursive" }}
            >
              Instructions
            </h2>
            <p className="font-serif text-chocolate/90 leading-relaxed whitespace-pre-wrap">
              {recipe.instructions}
            </p>
          </section>

          {/* Bubbe's Tip */}
          <section
            className="mt-8 rounded-2xl border-l-4 border-warm-pink bg-warm-pink/20 p-5"
            aria-labelledby="bubbes-tip-heading"
          >
            <h3
              id="bubbes-tip-heading"
              className="mb-2 text-xl text-chocolate flex items-center gap-2"
              style={{ fontFamily: "'Brush Script MT', cursive" }}
            >
              <span>💝</span> Bubbe&apos;s Tip
            </h3>
            <p className="font-serif text-chocolate/80 italic leading-relaxed">
              {recipe.bubbesTip}
            </p>
          </section>

          {/* Bottom padding for safe area */}
          <div className="h-8" />
        </div>
      </div>
    </div>
  );
}
