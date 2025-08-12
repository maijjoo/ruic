"use client";

import useDarkModeStore from "@/stores/useDarkModeStore";
import {
  MdDarkMode,
  MdLightMode,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";

const DarkModeController = () => {
  const isDarkMode = useDarkModeStore((state) => state.isDarkMode);
  const toggleDarkMode = useDarkModeStore((state) => state.toggleDarkMode);

  const getIcons = () => {
    let icons = [];
    if (isDarkMode)
      icons = [
        <MdDarkMode className="active" size={30} />,
        <MdOutlineLightMode size={30} onClick={() => toggleDarkMode()} />,
      ];
    else
      icons = [
        <MdOutlineDarkMode size={30} onClick={() => toggleDarkMode()} />,
        <MdLightMode className="active" size={30} />,
      ];
    return icons;
  };

  return (
    <nav>
      <div className="darkModeToggle">
        {getIcons().map((icon, idx) => (
          <span className="toggleIcon" key={idx}>
            {icon}
          </span>
        ))}
      </div>
    </nav>
  );
};

export default DarkModeController;
