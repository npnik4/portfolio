// import "./App.scss";
import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader/Preloader";
import Navbar from "./components/NavBar/NavBar";
import Hero from "./views/Hero/Hero";
import About from "./views/About/About";
import Skills from "./views/Skills/Skills";
import Projects from "./views/Projects/Projects";
import Feature from "./views/Feature/Feature";
import Footer from "./views/Footer/Footer";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { lightTheme, darkTheme } from "./theme";
import { ThemeToggle } from "./components/Styled/StyledComponents";
import { useDarkMode } from './useDarkMode';

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const lightMaterialTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#000",
        contrastText: "#fff",
      },
      secondary: {
        light: "#fff",
        main: "#4F05FF",
        contrastText: "#fff",
      },
      success: {
        main: "#000",
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
  });

  const darkMaterialTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#000",
        contrastText: "#fff",
      },
      secondary: {
        light: "#fff",
        main: "#5e97ff",
        contrastText: "#e8e8e8",
      },
      success: {
        main: "#000",
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
  });

  const [loading, setLoading] = useState(false);
  // const [styledTheme, setTheme] = useState("light");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (!componentMounted) {
    return <div />
  };

  return (
    <>
      <StyledThemeProvider
        theme={themeMode}
      >
        <GlobalStyles />
        {loading ? (
          <Preloader loading={loading} />
        ) : (
          <ThemeProvider theme={theme === "light" ? lightMaterialTheme : darkMaterialTheme}>
            <Navbar theme={theme} toggle={toggleTheme}>
              <ThemeToggle onClick={toggleTheme}>
                <i className="fas fa-lightbulb"></i>
              </ThemeToggle>
            </Navbar>
            <Hero theme={theme} />
            <Feature theme={theme} />
            <About />
            <Skills theme={theme} />
            <Projects theme={theme} />
            <Footer />
          </ThemeProvider>
        )}
      </StyledThemeProvider>
    </>
  );
}

export default App;
