import { Container } from "@material-ui/core";
import React from "react";
import "./Skills.scss";
// import redux from "../../assets/Redux.svg";
// import jenkins from "../../assets/Jenkins.svg";
// import figma from "../../assets/Figma.svg";
import Flip from "react-reveal/Flip";
import Pulse from "react-reveal/Pulse";
import deepRed from "../../assets/DeepRed.svg";
import barney from "../../assets/barney.svg";

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
      <Flip bottom>
        <div className="row">
          <div className="skillCell">
            <i className="devicon-javascript-plain"></i>
            <span className="name">JavaScript</span>
          </div>
          <div className="skillCell">
            <i className="devicon-typescript-plain"></i>
            <span className="name">TypeScript</span>
          </div>
          <div className="skillCell">
            <i className="devicon-java-plain"></i>
            <span className="name">Java</span>
          </div>
          <div className="skillCell">
            <i className="devicon-python-plain"></i>
            <span className="name">Python</span>
          </div>
          <div className="skillCell">
            <i className="devicon-html5-plain"></i>
            <span className="name">HTML5</span>
          </div>
          <div className="skillCell">
            <i className="devicon-css3-plain"></i>
            <span className="name">CSS3</span>
          </div>
        </div>
      </Flip>
      <Flip bottom delay={300}>
        <div className="row">
          <div className="skillCell">
            <i className="devicon-sass-original"></i>
            <span className="name">SASS</span>
          </div>
          <div className="skillCell">
            <i className="devicon-react-original"></i>
            <span className="name">React.js</span>
          </div>
          <div className="skillCell">
          <i className="devicon-redux-original"></i>
          <span className="name">Redux</span>
          </div>
          <div className="skillCell">
            <i className="devicon-django-plain"></i>
            <span className="name">Django Rest</span>
          </div>
          <div className="skillCell">
            <i className="devicon-nodejs-plain"></i>
            <span className="name">Node.js</span>
          </div>
          <div className="skillCell">
            <i className="devicon-github-original"></i>
            <span className="name">Github</span>
          </div>
        </div>
      </Flip>
      <Flip bottom delay={600}>
        <div className="row">
          <div className="skillCell">
            <i className="devicon-bitbucket-original"></i>
            <span className="name">BitBucket</span>
          </div>
          <div className="skillCell">
          <i className="devicon-jenkins-line"></i>
          <span className="name">Jenkins</span>
          </div>
          <div className="skillCell">
            <i className="devicon-confluence-original"></i>
            <span className="name">Confluence</span>
          </div>
          <div className="skillCell">
            <i className="devicon-amazonwebservices-plain"></i>
            <span className="name">AWS</span>
          </div>
          <div className="skillCell">
            <i className="devicon-firebase-plain"></i>
            <span className="name">FireBase</span>
          </div>
          <div className="skillCell">
            {/* <img src={figma} alt="figma" className="img" /> */}
            <i className="devicon-figma-plain"></i>
            <span className="name">Figma</span>
          </div>
        </div>
      </Flip>
      <img src={deepRed} alt="shape" className="deepRed" />
      <img src={barney} alt="shape" className="barney" />
    </Container>
  );
}

export default Skills;
