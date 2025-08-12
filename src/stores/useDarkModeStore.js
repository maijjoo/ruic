"use client";

import { create } from "zustand";

const getInitialDarkMode = () => {
  const saved = localStorage.getItem("isDarkMode");
  if (saved !== null) return JSON.parse(saved);
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
};

const useDarkModeStore = create((set) => ({
  isDarkMode: getInitialDarkMode(),
  toggleDarkMode: () =>
    set((state) => {
      const newValue = !state.isDarkMode;
      localStorage.setItem("isDarkMode", newValue);
      return { isDarkMode: newValue };
    }),
  setDarkMode: (value) => {
    localStorage.setItem("isDarkMode", value);
    set({ isDarkMode: value });
  },
}));

export default useDarkModeStore;
