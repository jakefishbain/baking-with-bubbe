'use client';

import { useState, useMemo, useEffect } from 'react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import RecipeGrid from '@/components/RecipeGrid';
import RecipeDetail from '@/components/RecipeDetail';
import { recipes, getRecipeById, getAllTags } from '@/lib/recipes';
import { useFavorites } from '@/lib/hooks/useFavorites';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(null);
  const { favorites, toggleFavorite, isFavorite, isLoaded } = useFavorites();

  // Get all unique categories
  const categories = useMemo(() => getAllTags(), []);

  // Toggle a category selection
  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // Clear all category selections
  const handleClearCategories = () => {
    setSelectedCategories([]);
  };

  // Filter recipes based on search and categories
  const filteredRecipes = useMemo(() => {
    let filtered = recipes;

    // Filter by categories (show recipes matching ANY selected category)
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((recipe) => selectedCategories.includes(recipe.tag));
    }

    // Filter by search query
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
  }, [searchQuery, selectedCategories]);

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
    if (searchQuery) {
      return `No recipes found for "${searchQuery}". Try a different search!`;
    }
    if (selectedCategories.length > 0) {
      return `No recipes found in selected categories.`;
    }
    return "No recipes found.";
  };

  return (
    <main className="min-h-screen pb-20">
      <Header />

      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Search Bubbe's recipes..."
      />

      <CategoryFilter
        categories={categories}
        selected={selectedCategories}
        onToggle={handleCategoryToggle}
        onClearAll={handleClearCategories}
      />

      {/* Show loading state while favorites are being loaded */}
      {!isLoaded ? (
        <div className="flex items-center justify-center py-16">
          <div className="text-5xl animate-float">🍪</div>
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
