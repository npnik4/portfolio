/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Hero.scss";
import purple from "../../assets/Purple.svg";
import blue from "../../assets/Blue.svg";
import red from "../../assets/Red.svg";
import orange from "../../assets/Orange.svg";
import grey from "../../assets/Grey.svg";
// import HeroImage from '../../components/HeroImage/HeroImage';
import { Button } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import hero from '../../assets/HeroImage.svg';

function Hero() {
  const contact = () => {
    window.location.href = "#work";
  };
  const scroll = () => {
    window.location.href = "#feature";
  };

  return (
    <div className="container">
      <div className="text-container">
        <Fade left>
          <div className="text">
            <h1 className="name">
              Hi, I'm <span className="color">Nikhil</span>.
            </h1>
            <p className="additional">I build things for the web.</p>
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
        <Fade right>
          <img src={hero} alt="hero"/>
        </Fade>
      </div>
      <img src={purple} alt="shape" className="purple " />
      <img src={blue} alt="shape" className="blue " />
      <img src={red} alt="shape" className="red " />
      <img src={orange} alt="shape" className="orange " />
      <img src={grey} alt="shape" className="grey " />
    </div>
  );
}

export default Hero;
