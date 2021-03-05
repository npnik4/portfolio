import { Container } from "@material-ui/core";
import React from "react";
import "./Skills.scss";
import redux from "../../assets/Redux.svg";
import jenkins from "../../assets/Jenkins.svg";
import figma from "../../assets/Figma.svg";

function Skills() {
  return (
    <Container maxWidth="lg" className="skillContainer" id="skills">
      <div className="row">
        <div className="heading">Skills I've picked up along the way.</div>
      </div>
      <div className="row">
        <i class="devicon-javascript-plain"></i>
        <i class="devicon-typescript-plain"></i>
        <i class="devicon-java-plain-wordmark"></i>
        <i class="devicon-python-plain-wordmark"></i>
        <i class="devicon-html5-plain-wordmark"></i>
        <i class="devicon-css3-plain-wordmark"></i>
      </div>
      <div className="row">
        <i class="devicon-sass-original"></i>
        <i class="devicon-react-original-wordmark"></i>
        {/* <i class="devicon-redux-original"></i> */}
        <img src={redux} alt="redux" className="img"/>
        <i class="devicon-django-plain"></i>
        <i class="devicon-nodejs-plain-wordmark"></i>
        <i class="devicon-github-original-wordmark"></i>
      </div>
      <div className="row">
        <i class="devicon-bitbucket-original-wordmark"></i>
        {/* <i class="devicon-jenkins-line"></i> */}
        <img src={jenkins} alt="jenkins" className="img"/>
        <i class="devicon-confluence-original-wordmark"></i>
        <i class="devicon-amazonwebservices-plain-wordmark"></i>
        <i class="devicon-firebase-plain-wordmark"></i>
        {/* <i class="devicon-sketch-line-wordmark"></i> */}
        <img src={figma} alt="figma" className="img"/>
      </div>
    </Container>
  );
}

export default Skills;
