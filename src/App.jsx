import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/Themes.js";
import { GlobalStyles } from "./components/GlobalStyles.jsx";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import { useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="container">
        <Header toggleTheme={toggleTheme} theme={theme}></Header>
        <Main></Main>
      </div>
    </ThemeProvider>
  );
}

export default App;
