import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader/Preloader";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { lightTheme, darkTheme } from "./theme";
import { useDarkMode } from "./useDarkMode";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Details from "./views/Details/Details";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const lightMaterialTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#000",
        contrastText: "#fff",
      },
      secondary: {
        light: "#fff",
        main: "#D53867",
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
        main: "#D53867",
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

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (!componentMounted) {
    return <div />;
  }

  return (
    <>
      <StyledThemeProvider theme={themeMode}>
        <GlobalStyles />
        {loading ? (
          <Preloader loading={loading} theme={theme} />
        ) : (
          <ThemeProvider
            theme={theme === "light" ? lightMaterialTheme : darkMaterialTheme}
          >
            <Router>
              <Switch>
                <Route path="/details">
                  <Details theme={theme} toggleTheme={toggleTheme} />
                  <ScrollToTop />
                </Route>
                <Route path="/">
                  <Home theme={theme} toggleTheme={toggleTheme} />
                </Route>
              </Switch>
            </Router>
          </ThemeProvider>
        )}
      </StyledThemeProvider>
    </>
  );
}

export default App;
