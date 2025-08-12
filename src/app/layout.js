import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.scss";
import DarkModeProvider from "@/components/common/DarkModeProvider";

export const metadata = {
  title: "Next.js 연습 프로젝트",
  description: "Next.js 연습하는 프로젝트입니다.",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const RootLayout = ({ children }) => {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <DarkModeProvider>{children}</DarkModeProvider>
      </body>
    </html>
  );
};
export default RootLayout;
