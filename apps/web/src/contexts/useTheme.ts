import { useContext } from "react";
import { ThemeContext } from "./themeContext";

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme deve ser usado dentro do ThemeProvider");
  return context;
}