// src/store/useUIStore.ts
import { FilterCategory } from "@/types/task";
import { create } from "zustand";

interface UIState {
  selectedCategory: FilterCategory;
  setSelectedCategory: (category: FilterCategory) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const useUIStore = create<UIState>((set) => ({
  selectedCategory: "Todas",
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
}));
