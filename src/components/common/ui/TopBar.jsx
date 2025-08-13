"use client";

import DarkModeController from "@/components/theme/DarkModeController";
import { useEffect, useState } from "react";
import TopMenus from "./TopMenus";
import TopLogo from "./TopLogo";

const TopBar = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="topBar">
      <TopLogo />
      <TopMenus />
      <DarkModeController />
    </nav>
  );
};

export default TopBar;
