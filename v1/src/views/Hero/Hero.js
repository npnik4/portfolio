/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './Hero.scss';
import purple from '../../assets/Purple.svg';
import blue from '../../assets/Blue.svg';
import red from '../../assets/Red.svg';
// import deepRed from '../../assets/DeepRed.svg';
import orange from '../../assets/Orange.svg';
import grey from '../../assets/Grey.svg';

function Hero() {
    return (
        <div className="container">
            <div className="text-container">
                <div className="text">
                    <p>Hi, I'm</p>
                    <p className="name">Nikhil Patel.</p>
                    <p>I build things for the web.</p>
                </div>
                <div className="button">
                    <p>Get In Touch</p>
                </div>
            </div>
            <img src={purple} alt="shape" className="purple "/>
            <img src={blue} alt="shape" className="blue "/>
            <img src={red} alt="shape" className="red "/>
            <img src={orange} alt="shape" className="orange "/>
            <img src={grey} alt="shape" className="grey "/>
        </div>
    )
}

export default Hero
