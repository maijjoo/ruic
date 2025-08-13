"use client";

import { useTheme } from "next-themes";
import {
  MdDarkMode,
  MdLightMode,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";

const DarkModeController = () => {
  const { theme, setTheme } = useTheme();

  const getIcons = {
    light: [
      <MdOutlineDarkMode size={25} onClick={() => setTheme("dark")} />,
      <MdLightMode size={25} key={"active"} />,
    ],
    dark: [
      <MdDarkMode size={25} key={"active"} />,
      <MdOutlineLightMode size={25} onClick={() => setTheme("light")} />,
    ],
  };

  return (
    <div className="darkModeToggle">
      {getIcons[
        theme !== "system"
          ? theme
          : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      ]?.map((icon, idx) => (
        <span className={`toggleIcon ${icon.key}`} key={idx}>
          {icon}
        </span>
      ))}
    </div>
  );
};

export default DarkModeController;
