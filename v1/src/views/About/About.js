/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Container } from "@material-ui/core";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import "./About.scss";
import Fade from "react-reveal/Fade";
import orange from "../../assets/DarkOrange.svg";
import aqua from "../../assets/Aqua.svg";
import blue from "../../assets/BabyBlue.svg";
import {Title, TextHighlight, P3, A3, ListItem, AboutText, List, Card} from '../../components/Styled/StyledComponents';

function About(props) {
  return (
    <Container maxWidth="lg" className="about" id="about">
      <Title>
        <TextHighlight>About</TextHighlight> me.
      </Title>
      <Fade left duration={500}>
        <Card>
          <AboutText>
            <P3>I'm Nikhil, a software developer based in NJ.</P3>
            {/* <P3>
              My mission is to create life enhancing tools that actually make a
              great impact, whether that be websites, applications, or anything
              in between.
            </P3> */}
            <P3>
              BS in Computer Science & Engineering Technology from{" "}
              <A3 target="_blank" href="https://www.njit.edu/">
                New Jersey Institute of Technology
              </A3>
              . Currently working at{" "}
              <A3 target="_blank" href="https://www.adp.com/">
                ADP
              </A3>{" "}
              as an Application Developer, building out next-gen payroll
              solutions.
            </P3>
            <P3>Here are a few technologies I've been working with recently:</P3>
            <List>
              <ListItem>JavaScript (ES6+)</ListItem>
              <ListItem>TypeScript </ListItem>
              <ListItem>React & Redux</ListItem>
              <ListItem>HTML & CSS / SCSS</ListItem>
              <ListItem>Java</ListItem>
              <ListItem>Node.js</ListItem>
            </List>
          </AboutText>
          <div className="about-image">
            <PhotoCard theme={props.theme}/>
          </div>
        </Card>
      </Fade>
      <img src={orange} alt="shape" className="orange" />
      <img src={aqua} alt="shape" className="aqua" />
      <img src={blue} alt="shape" className="blue" />
    </Container>
  );
}

export default About;
