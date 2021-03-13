import React from "react";
import logo from "../../assets/logo2.svg";
import { AnimateSharedLayout, motion } from "framer-motion";
import "./Preloader.scss";
import Pulse from 'react-reveal/Pulse';

function Preloader(props) {
  return (
    <AnimateSharedLayout>
        <motion.div className="loader">
        <Pulse forever={true}>
          <img src={logo} alt="logo" className="image"></img>
        </Pulse>
        </motion.div>
    </AnimateSharedLayout>
  );
}

export default Preloader;
