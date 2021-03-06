/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Hero.scss";
import purple from "../../assets/Purple.svg";
import blue from "../../assets/Blue.svg";
import red from "../../assets/Red.svg";
import orange from "../../assets/Orange.svg";
import grey from "../../assets/Grey.svg";
import { Button } from "@material-ui/core";

function Hero() {
  const contact = () => {
    window.location.href = "#work";
  };

  return (
    <div className="container">
      <div className="text-container">
        <div className="text">
          <p>Hi,</p>
          <h1 className="name">I'm <span className="color">Nikhil</span>.</h1>
          <p className="additional">I build things for the web.</p>
        </div>
        <div className="button">
          <Button
            variant="outlined"
            size="large"
            onClick={() => contact()}
          >
            See my work
          </Button>
          <div className="scroll"></div>
        </div>
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
