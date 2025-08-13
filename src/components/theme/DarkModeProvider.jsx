import { ThemeProvider } from "next-themes";
import TopBarWrapper from "../wrapper/TopBarWrapper";

const DarkModeProvider = ({ children }) => {
  return (
    <ThemeProvider attribute={"class"} defaultTheme="system">
      <TopBarWrapper />
      {children}
    </ThemeProvider>
  );
};

export default DarkModeProvider;
