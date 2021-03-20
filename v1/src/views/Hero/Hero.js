/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Hero.scss";
import purple from "../../assets/Purple.svg";
import blue from "../../assets/Blue.svg";
import red from "../../assets/Red.svg";
import orange from "../../assets/Orange.svg";
import { Button, Container } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import hero from "../../assets/HeroImage.svg";
import heroDark from "../../assets/HeroImageDark.svg";
import {
  HeroHeading,
  TextHighlight,
  HeroSubText,
} from "../../components/Styled/StyledComponents";
import { isSafari, isMobileSafari } from "react-device-detect";

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
      {!isSafari && !isMobileSafari ? (
        <>
          <img
            src={purple}
            alt="shape"
            className={"purple " + (props.theme === "light" ? "light" : "dark")}
          />
          <img
            src={blue}
            alt="shape"
            className={"blue " + (props.theme === "light" ? "light" : "dark")}
          />
          <img
            src={red}
            alt="shape"
            className={"red " + (props.theme === "light" ? "light" : "dark")}
          />
          <img
            src={orange}
            alt="shape"
            className={"orange " + (props.theme === "light" ? "light" : "dark")}
          />{" "}
        </>
      ) : null}
    </div>
  );
}

export default Hero;
