/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Container } from "@material-ui/core";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import "./About.scss";
import Fade from "react-reveal/Fade";
import {
  Title,
  TextHighlight,
  P3,
  A3,
  ListItem,
  AboutText,
  List,
  Card,
} from "../../components/Styled/StyledComponents";
import { isMobile } from "react-device-detect";

function About(props) {
  return (
    <div>
      <Container maxWidth="lg" className="about" id="about">
        <Title>
          <TextHighlight>About</TextHighlight> me.
        </Title>
        <Fade left duration={500}>
          <Card>
            <AboutText>
              <P3>I'm Nikhil, a software engineer based in NJ.</P3>
              <P3>
                BS in Computer Science & Engineering Technology from{" "}
                <A3 target="_blank" href="https://www.njit.edu/">
                  New Jersey Institute of Technology
                </A3>
                . Currently working at{" "}
                <A3
                  target="_blank"
                  href="https://am.jpmorgan.com/us/en/asset-management/adv/"
                >
                  JPMorgan Chase
                </A3>{" "}
                as a Software Engineer.
              </P3>
              <P3>
                Here are a few technologies I've been working with recently:
              </P3>
              <List>
                <ListItem>JavaScript (ES6+)</ListItem>
                <ListItem>TypeScript </ListItem>
                <ListItem>React & Redux</ListItem>
                <ListItem>HTML & CSS / SCSS</ListItem>
                <ListItem>Java</ListItem>
                <ListItem>Node.js</ListItem>
              </List>
            </AboutText>
            {!isMobile ? (
              <div className="about-image">
                <PhotoCard theme={props.theme} />
              </div>
            ) : null}
          </Card>
        </Fade>
      </Container>
    </div>
  );
}

export default About;
