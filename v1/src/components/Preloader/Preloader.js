import React from "react";
import logo from "../../assets/logo2.svg";
import logoDark from "../../assets/logoDark.svg";
import "./Preloader.scss";
import Pulse from "react-reveal/Pulse";
import { Loader } from "../Styled/StyledComponents";

function Preloader(props) {
  const light = props.theme === "light";
  return (
    <Loader>
      <Pulse forever={true}>
        <img src={light ? logo : logoDark} alt="logo" className="image"></img>
      </Pulse>
    </Loader>
  );
}

export default Preloader;
