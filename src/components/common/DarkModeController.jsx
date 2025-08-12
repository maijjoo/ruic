"use client";

import { useHydratedDarkMode } from "@/stores/useDarkModeStore";
import {
  MdDarkMode,
  MdLightMode,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";

const DarkModeController = () => {
  const { isDarkMode, toggleDarkMode, hasHydrated } = useHydratedDarkMode();

  if (!hasHydrated) return null;

  const getIcons = () => {
    let icons = [];
    if (isDarkMode)
      icons = [
        <MdDarkMode size={30} key={"active"} />,
        <MdOutlineLightMode size={30} onClick={() => toggleDarkMode()} />,
      ];
    else
      icons = [
        <MdOutlineDarkMode size={30} onClick={() => toggleDarkMode()} />,
        <MdLightMode size={30} key={"active"} />,
      ];
    return icons;
  };

  return (
    <nav>
      <div className="darkModeToggle">
        {getIcons().map((icon, idx) => (
          <span className={`toggleIcon ${icon.key}`} key={idx}>
            {icon}
          </span>
        ))}
      </div>
    </nav>
  );
};

export default DarkModeController;
