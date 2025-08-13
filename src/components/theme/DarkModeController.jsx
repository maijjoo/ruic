"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  MdDarkMode,
  MdLightMode,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";

const DarkModeController = () => {
  const { theme, setTheme } = useTheme();
  const [isRendering, setIsRendering] = useState(false);

  useEffect(() => {
    setIsRendering(true);
  }, []);
  const getIcons = {
    light: [
      <MdOutlineDarkMode size={30} onClick={() => setTheme("dark")} />,
      <MdLightMode size={30} key={"active"} />,
    ],
    dark: [
      <MdDarkMode size={30} key={"active"} />,
      <MdOutlineLightMode size={30} onClick={() => setTheme("light")} />,
    ],
  };

  return (
    <nav>
      <div className="darkModeToggle">
        {!isRendering ? (
          <>
            <span className={`toggleIcon`}>
              <MdDarkMode size={30} />
            </span>
            <span className={`toggleIcon`}>
              <MdLightMode size={30} />
            </span>
          </>
        ) : (
          getIcons[
            theme !== "system"
              ? theme
              : window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light"
          ]?.map((icon, idx) => (
            <span className={`toggleIcon ${icon.key}`} key={idx}>
              {icon}
            </span>
          ))
        )}
      </div>
    </nav>
  );
};

export default DarkModeController;
