/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Hero.scss";
import purple from "../../assets/Purple2.svg";
import blue from "../../assets/Blue2.svg";
import red from "../../assets/Red2.svg";
import orange from "../../assets/Orange2.svg";
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
      <img src={purple} alt="shape" className={"purple " + props.theme} />
      <img src={blue} alt="shape" className={"blue " + props.theme} />
      <img src={red} alt="shape" className={"red " + props.theme} />
      <img src={orange} alt="shape" className={"orange " + props.theme} />
    </div>
  );
}

export default Hero;
