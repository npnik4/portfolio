import { Container } from "@material-ui/core";
import React from "react";
import "./Skills.scss";
import redux from "../../assets/Redux.svg";
import jenkins from "../../assets/Jenkins.svg";
import figma from "../../assets/Figma.svg";
import Flip from 'react-reveal/Flip';
import Pulse from 'react-reveal/Pulse';

function Skills() {
  return (
    <Container maxWidth="lg" className="skillContainer" id="skills">
      <div className="row">
      <Pulse>
        <div className="heading">
          <span>Skills</span> I've picked up along the way.
        </div>
      </Pulse>
      </div>
      <Flip bottom >
        <div className="row">
          <div className="skillCell">
            <i className="devicon-javascript-plain"></i>
          </div>
          <div className="skillCell">
            <i className="devicon-typescript-plain"></i>
          </div>
          <div className="skillCell">
            <i className="devicon-java-plain-wordmark"></i>
          </div>
          <div className="skillCell">
            <i className="devicon-python-plain-wordmark"></i>
          </div>
          <div className="skillCell">
            <i className="devicon-html5-plain-wordmark"></i>
          </div>
          <div className="skillCell">
            <i className="devicon-css3-plain-wordmark"></i>
          </div>
        </div>
      </Flip>
      <Flip bottom delay={300}>
        <div className="row">
          <div className="skillCell">
            <i className="devicon-sass-original"></i>
          </div>
          <div className="skillCell">
            <i className="devicon-react-original-wordmark"></i>
          </div>
          {/* <i className="devicon-redux-original"></i> */}
          <div className="skillCell">
            <img src={redux} alt="redux" className="img" />
          </div>
          <div className="skillCell">
            <i className="devicon-django-plain"></i>
          </div>
          <div className="skillCell">
            <i className="devicon-nodejs-plain-wordmark"></i>
          </div>
          <div className="skillCell">
            <i className="devicon-github-original-wordmark"></i>
          </div>
        </div>
      </Flip>
      <Flip bottom delay={600}>
        <div className="row">
          <div className="skillCell">
            <i className="devicon-bitbucket-original-wordmark"></i>
          </div>
          {/* <i className="devicon-jenkins-line"></i> */}
          <div className="skillCell">
            <img src={jenkins} alt="jenkins" className="img" />
          </div>
          <div className="skillCell">
            <i className="devicon-confluence-original-wordmark"></i>
          </div>
          <div className="skillCell">
            <i className="devicon-amazonwebservices-plain-wordmark"></i>
          </div>
          <div className="skillCell">
            <i className="devicon-firebase-plain-wordmark"></i>
          </div>
          {/* <i className="devicon-sketch-line-wordmark"></i> */}
          <div className="skillCell">
            <img src={figma} alt="figma" className="img" />
          </div>
        </div>
      </Flip>
    </Container>
  );
}

export default Skills;
