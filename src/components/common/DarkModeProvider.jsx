"use client";

import useDarkModeStore from "@/stores/useDarkModeStore";
import DarkModeController from "./DarkModeController";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const DarkModeProvider = ({ children }) => {
  const isDarkMode = useDarkModeStore((state) => state.isDarkMode);
  return (
    <body
      className={`${geistSans.variable} ${geistMono.variable} ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <DarkModeController />
      {children}
    </body>
  );
};

export default DarkModeProvider;
