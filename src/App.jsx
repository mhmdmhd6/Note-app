import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/Themes.js";
import { GlobalStyles } from "./components/GlobalStyles.jsx";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage.jsx";
import "./App.css";

function App() {
  const detectTheme = () => {
    const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
    const theme = systemSettingDark.matches ? "dark" : "light";

    return theme;
  };

  const [theme, setTheme] = useLocalStorage("Theme", detectTheme);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="container">
        <Header toggleTheme={toggleTheme} theme={theme}></Header>
        <Main></Main>
      </div>
    </ThemeProvider>
  );
}

export default App;
