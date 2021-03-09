import "./App.scss";
import Navbar from "./components/NavBar/NavBar";
import Hero from "./views/Hero/Hero";
import About from "./views/About/About";
import Skills from "./views/Skills/Skills";
import Projects from './views/Projects/Projects';
import Feature from './views/Feature/Feature';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: "#000",
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
        contrastText: "#fff",
      },
      secondary: {
        light: "#fff",
        main: "#fff",
        // dark: will be calculated from palette.secondary.main,
        contrastText: "#000",
      },
      success: {
        main: "#000",
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Hero />
      <Feature/>
      <About />
      <Skills />
      <Projects />
    </ThemeProvider>
  );
}

export default App;
