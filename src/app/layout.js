import "./globals.scss";
import DarkModeProvider from "@/components/common/DarkModeProvider";

export const metadata = {
  title: "Next.js 연습 프로젝트",
  description: "Next.js 연습하는 프로젝트입니다.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="ko">
      <DarkModeProvider>{children}</DarkModeProvider>
    </html>
  );
};
export default RootLayout;
