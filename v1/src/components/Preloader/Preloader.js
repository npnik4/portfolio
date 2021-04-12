import React from "react";
import logo from "../../assets/logo2.svg";
import logoDark from "../../assets/logoDark.svg";
import "./Preloader.scss";
import Pulse from "react-reveal/Pulse";
import { Loader } from "../Styled/StyledComponents";
import lightBK from "../../assets/LightBK.jpg";
import darkBK from "../../assets/DarkBK.jpg";

function Preloader(props) {
  const light = props.theme === "light";
  return (
    <Loader style={{ backgroundImage: `url(${light ? lightBK : darkBK})` }}>
      <Pulse forever={true}>
        <img src={light ? logo : logoDark} alt="logo" className="image"></img>
      </Pulse>
    </Loader>
  );
}

export default Preloader;
