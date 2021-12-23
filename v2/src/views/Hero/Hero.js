/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Hero.scss";

import { Button, Container } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import hero from "../../assets/HeroImage.svg";
import heroDark from "../../assets/HeroImageDark.svg";
import {
  HeroHeading,
  TextHighlight,
  HeroSubText,
} from "../../components/Styled/StyledComponents";

function Hero(props) {
  const contact = () => {
    window.location.href = "#work";
  };
  const scroll = () => {
    window.location.href = "#feature";
  };

  return (
    <div className="container">
      <Container maxWidth="xl" className="flex">
        <div className="text-container">
          <Fade left delay={700}>
            <div className="text">
              <HeroHeading>
                Hi, I'm <TextHighlight>Nikhil</TextHighlight>.
              </HeroHeading>
              <HeroSubText>I build tools for the web.</HeroSubText>
            </div>
            <div className="button">
              <Button
                variant="contained"
                size="large"
                onClick={() => contact()}
                color="secondary"
              >
                See my work
              </Button>
            </div>
          </Fade>
          <div className="scroll" onClick={() => scroll()}></div>
        </div>
        <div className="image">
          <Fade right delay={700}>
            <img src={props.theme === "light" ? hero : heroDark} alt="hero" />
          </Fade>
        </div>
      </Container>
      <div className="spacer layer"></div>
    </div>
  );
}

export default Hero;
