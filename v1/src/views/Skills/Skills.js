import { Button, Container } from "@material-ui/core";
import React from "react";
import "./Skills.scss";
import Flip from "react-reveal/Flip";
import Pulse from "react-reveal/Pulse";
import deepRed from "../../assets/DeepRed2.svg";
import barney from "../../assets/Barney2.svg";
import {
  Title,
  TextHighlight,
  SkillIcon,
  SkillName,
} from "../../components/Styled/StyledComponents";
import { Link } from "react-router-dom";

function Skills(props) {
  return (
    <Container maxWidth="lg" className="skillContainer" id="skills">
      <div className="row">
        <Pulse>
          <Title>
            <TextHighlight>Skills</TextHighlight> I've picked up along the way.
          </Title>
        </Pulse>
      </div>
      <Flip bottom>
        <div className="row">
          <div className="skillCell">
            <SkillIcon className="devicon-javascript-plain"></SkillIcon>
            <SkillName>JavaScript</SkillName>
          </div>
          <div className="skillCell">
            <SkillIcon className="devicon-typescript-plain"></SkillIcon>
            <SkillName>TypeScript</SkillName>
          </div>
          <div className="skillCell">
            <SkillIcon className="devicon-java-plain"></SkillIcon>
            <SkillName>Java</SkillName>
          </div>
          <div className="skillCell">
            <SkillIcon className="devicon-python-plain"></SkillIcon>
            <SkillName>Python</SkillName>
          </div>
          <div className="skillCell">
            <SkillIcon className="devicon-html5-plain"></SkillIcon>
            <SkillName>HTML5</SkillName>
          </div>
          <div className="skillCell">
            <SkillIcon className="devicon-css3-plain"></SkillIcon>
            <SkillName>CSS3</SkillName>
          </div>
        </div>
      </Flip>
      <Flip bottom delay={300}>
        <div className="row">
          <div className="skillCell">
            <SkillIcon className="devicon-sass-original"></SkillIcon>
            <SkillName>SASS</SkillName>
          </div>
          <div className="skillCell">
            <SkillIcon className="devicon-react-original"></SkillIcon>
            <SkillName>React.js</SkillName>
          </div>
          <div className="skillCell">
            <SkillIcon className="devicon-redux-original"></SkillIcon>
            <SkillName>Redux</SkillName>
          </div>
          <div className="skillCell">
            <SkillIcon className="devicon-django-plain"></SkillIcon>
            <SkillName>Django Rest</SkillName>
          </div>
          <div className="skillCell">
            <SkillIcon className="devicon-nodejs-plain"></SkillIcon>
            <SkillName>Node.js</SkillName>
          </div>
          <div className="skillCell">
            <SkillIcon className="devicon-github-original"></SkillIcon>
            <SkillName>Github</SkillName>
          </div>
        </div>
      </Flip>
      <Flip bottom delay={600}>
        <div className="row">
          <div className="skillCell">
            <SkillIcon className="devicon-bitbucket-original"></SkillIcon>
            <SkillName>BitBucket</SkillName>
          </div>
          <div className="skillCell">
            <SkillIcon className="devicon-jenkins-line"></SkillIcon>
            <SkillName>Jenkins</SkillName>
          </div>
          <div className="skillCell">
            <SkillIcon className="devicon-confluence-original"></SkillIcon>
            <SkillName>Confluence</SkillName>
          </div>
          <div className="skillCell">
            <SkillIcon className="devicon-amazonwebservices-plain"></SkillIcon>
            <SkillName>AWS</SkillName>
          </div>
          <div className="skillCell">
            <SkillIcon className="devicon-firebase-plain"></SkillIcon>
            <SkillName>FireBase</SkillName>
          </div>
          <div className="skillCell">
            <SkillIcon className="devicon-sketch-line"></SkillIcon>
            <SkillName>Figma</SkillName>
          </div>
        </div>
      </Flip>
      <Flip bottom delay={600}>
        <div className="row-button">
          <Link to="/details" style={{ textDecoration: "none" }}>
            <Button variant="outlined" size="large" color="secondary">
              View Details
            </Button>
          </Link>
        </div>
      </Flip>

      <img src={deepRed} alt="shape" className={"deepRed " + props.theme} />
      <img src={barney} alt="shape" className={"barney " + props.theme} />
    </Container>
  );
}

export default Skills;
