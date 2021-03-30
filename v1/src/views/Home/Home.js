import React from "react";
import Navbar from "../../components/NavBar/NavBar";
import { ThemeToggle } from "../../components/Styled/StyledComponents";
import About from "../About/About";
import Feature from "../Feature/Feature";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

function Home(props) {
  const { theme, toggleTheme } = props;
  return (
    <>
      <Navbar theme={theme}>
        <ThemeToggle onClick={toggleTheme}>
          <i className="fas fa-lightbulb"></i>
        </ThemeToggle>
      </Navbar>
      <Hero theme={theme} />
      <Feature theme={theme} />
      <About theme={theme} />
      <Skills theme={theme} />
      <Projects theme={theme} />
      <Footer theme={theme} />
    </>
  );
}

export default Home;
