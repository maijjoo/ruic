import { ThemeProvider } from "next-themes";
import DarkModeController from "./DarkModeController";

const DarkModeProvider = ({ children }) => {
  return (
    <ThemeProvider attribute={"class"} defaultTheme="system">
      <DarkModeController />
      {children}
    </ThemeProvider>
  );
};

export default DarkModeProvider;
