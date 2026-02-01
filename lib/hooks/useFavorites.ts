'use client';

import { useState, useEffect, useCallback } from 'react';

const FAVORITES_KEY = 'bubbe-favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load favorites from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setFavorites(parsed);
        }
      }
    } catch (error) {
      console.error('Error loading favorites from localStorage:', error);
    }
    setIsLoaded(true);
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
      } catch (error) {
        console.error('Error saving favorites to localStorage:', error);
      }
    }
  }, [favorites, isLoaded]);

  const toggleFavorite = useCallback((recipeId: number) => {
    setFavorites(prev => {
      if (prev.includes(recipeId)) {
        return prev.filter(id => id !== recipeId);
      } else {
        return [...prev, recipeId];
      }
    });
  }, []);

  const isFavorite = useCallback((recipeId: number) => {
    return favorites.includes(recipeId);
  }, [favorites]);

  const addFavorite = useCallback((recipeId: number) => {
    setFavorites(prev => {
      if (!prev.includes(recipeId)) {
        return [...prev, recipeId];
      }
      return prev;
    });
  }, []);

  const removeFavorite = useCallback((recipeId: number) => {
    setFavorites(prev => prev.filter(id => id !== recipeId));
  }, []);

  return {
    favorites,
    isLoaded,
    toggleFavorite,
    isFavorite,
    addFavorite,
    removeFavorite,
  };
}
