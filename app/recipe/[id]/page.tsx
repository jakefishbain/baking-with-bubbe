'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Heart } from 'lucide-react';
import { getRecipeById, Recipe } from '@/lib/recipes';
import { useFavorites } from '@/lib/hooks/useFavorites';
import Header from '@/components/Header';

export default function RecipePage() {
  const params = useParams();
  const router = useRouter();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const { toggleFavorite, isFavorite, isLoaded } = useFavorites();

  useEffect(() => {
    const id = parseInt(params.id as string, 10);
    if (!isNaN(id)) {
      const foundRecipe = getRecipeById(id);
      if (foundRecipe) {
        setRecipe(foundRecipe);
      } else {
        // Recipe not found, redirect to home
        router.push('/');
      }
    }
  }, [params.id, router]);

  const handleBack = () => {
    router.back();
  };

  if (!recipe) {
    return (
      <main className="min-h-screen">
        <Header showBackButton onBack={handleBack} />
        <div className="flex items-center justify-center py-16">
          <div className="text-4xl animate-pulse">🍪</div>
        </div>
      </main>
    );
  }

  const favorite = isLoaded && isFavorite(recipe.id);

  return (
    <main className="min-h-screen">
      <Header
        showBackButton
        onBack={handleBack}
        rightElement={
          <button
            onClick={() => toggleFavorite(recipe.id)}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-all active:scale-95 ${
              favorite
                ? 'bg-white text-warm-pink'
                : 'bg-white/30 text-white'
            }`}
            aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
            aria-pressed={favorite}
          >
            <Heart
              className={`h-5 w-5 ${favorite ? 'fill-current' : ''}`}
            />
          </button>
        }
      />

      {/* Recipe content - storybook style */}
      <div
        className="min-h-screen animate-fade-in"
        style={{
          backgroundImage: `
            linear-gradient(to right, transparent 30px, #FFB4B4 30px, #FFB4B4 32px, transparent 32px),
            repeating-linear-gradient(transparent 0px, transparent 28px, #FFD4B4 28px, #FFD4B4 29px)
          `,
          backgroundColor: '#FFF8E7',
        }}
      >
        <div className="px-8 pb-12 pt-4">
          {/* Emoji */}
          <div className="flex justify-center py-4">
            <span className="text-7xl drop-shadow-lg" role="img" aria-hidden="true">
              {recipe.emoji}
            </span>
          </div>

          {/* Title */}
          <h1
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

          {/* Bottom padding */}
          <div className="h-8" />
        </div>
      </div>
    </main>
  );
}
