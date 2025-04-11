"use client"; // Este componente será renderizado no lado do cliente

import { useEffect } from "react";
import * as styles from "../styles/theme.css";
import { useThemeStore } from "@/store/themeStore";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    // Aplica o tema após a renderização no cliente
    document.body.className = theme === "light" ? styles.lightTheme : styles.darkTheme;
  }, [theme]);

  return (
    <button onClick={toggleTheme}>Mudar Tema</button>
  );
}