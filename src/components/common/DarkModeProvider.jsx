"use client";

import { useHydratedDarkMode } from "@/stores/useDarkModeStore";
import { useEffect } from "react";
import DarkModeController from "./DarkModeController";

const DarkModeProvider = ({ children }) => {
  const { isDarkMode, hasHydrated } = useHydratedDarkMode();

  useEffect(() => {
    if (hasHydrated) {
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [isDarkMode, hasHydrated]);

  return (
    <>
      <DarkModeController />
      {children}
    </>
  );
};

export default DarkModeProvider;
