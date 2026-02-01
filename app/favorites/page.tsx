'use client';

import { useState, useMemo, useEffect } from 'react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import RecipeGrid from '@/components/RecipeGrid';
import RecipeDetail from '@/components/RecipeDetail';
import { recipes, getRecipeById } from '@/lib/recipes';
import { useFavorites } from '@/lib/hooks/useFavorites';

export default function FavoritesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(null);
  const { favorites, toggleFavorite, isFavorite, isLoaded } = useFavorites();

  // Filter favorite recipes based on search
  const filteredRecipes = useMemo(() => {
    let filtered = recipes.filter((recipe) => favorites.includes(recipe.id));

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(query) ||
          recipe.description.toLowerCase().includes(query) ||
          recipe.tag.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, favorites]);

  const selectedRecipe = selectedRecipeId ? getRecipeById(selectedRecipeId) : null;

  // Handle body scroll lock when modal is open
  useEffect(() => {
    if (selectedRecipe) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [selectedRecipe]);

  const handleRecipeClick = (id: number) => {
    setSelectedRecipeId(id);
  };

  const handleCloseRecipe = () => {
    setSelectedRecipeId(null);
  };

  const getEmptyMessage = () => {
    if (favorites.length === 0) {
      return "No favorites yet! Start exploring Bubbe's recipes and tap the heart to save your favorites. 💝";
    }
    if (searchQuery) {
      return `No favorite recipes found for "${searchQuery}".`;
    }
    return "No favorites found.";
  };

  return (
    <main className="min-h-screen pb-20">
      <Header />

      {/* Page title */}
      <div className="px-4 pt-4 pb-2">
        <h1
          className="text-2xl text-chocolate text-center"
          style={{ fontFamily: "'Brush Script MT', cursive" }}
        >
          My Favorite Recipes 💝
        </h1>
        <p className="text-center font-serif text-sm text-chocolate/60 mt-1">
          {favorites.length} {favorites.length === 1 ? 'recipe' : 'recipes'} saved
        </p>
      </div>

      {favorites.length > 0 && (
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search favorites..."
        />
      )}

      {/* Show loading state while favorites are being loaded */}
      {!isLoaded ? (
        <div className="flex items-center justify-center py-16">
          <div className="text-4xl animate-pulse">💝</div>
        </div>
      ) : (
        <RecipeGrid
          recipes={filteredRecipes}
          favorites={favorites}
          onFavoriteToggle={toggleFavorite}
          onRecipeClick={handleRecipeClick}
          emptyMessage={getEmptyMessage()}
        />
      )}

      {/* Recipe detail modal */}
      {selectedRecipe && (
        <RecipeDetail
          recipe={selectedRecipe}
          isFavorite={isFavorite(selectedRecipe.id)}
          onFavoriteToggle={() => toggleFavorite(selectedRecipe.id)}
          onClose={handleCloseRecipe}
        />
      )}
    </main>
  );
}
