/* eslint-disable array-callback-return */
import { Container } from "@material-ui/core";
import React, { useState } from "react";
import "./Projects.scss";
import Card from "../../components/Grid/Card";

function Projects() {
  const [active, setActive] = useState([false, false, false, false, false, false]);

  const toggle = (index) => {
    setActive(Object.assign([], [false, false, false, false, false, false]));
    const newActive = Object.assign([], active);
    newActive[index] = !newActive[index];
    if(newActive[index]) {
      var offset = 50;
      var el = document.getElementById('gridStart');
      window.scroll({ top: (el.offsetTop - offset), left: 0, behavior: 'smooth' });
    } 
    else {
      document.getElementById(index + '').scrollIntoView();
    }
    setActive(newActive);
  };

  return (
    <Container maxWidth="lg" className="projects" id="work">
      <h1 className="title">My <span>Work</span>.</h1>
      <div className="work-grid" id="gridStart">
        <div className="work1" id="0">
          <Card
            toggle={() => toggle(0)}
            name="RL INC. HOMEPAGE"
            description="Make integrating artificial intelligence into your games easy and simple."
            css="linear-gradient(to top, #a8edea 0%, #fed6e3 100%)"
            active={active[0]}
            link="https://rl-inc.io/"
          />
        </div>
        <div className="work2" id="1">
          <Card
            toggle={() => toggle(1)}
            name="MOTIVATION"
            description="Experiment with parallax effect using React.js."
            css="linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
            active={active[1]}
            link="https://npnik4.github.io/Animated-React-Webpage/"
          />
        </div>
        <div className="work3" id="2">
          <Card
            toggle={() => toggle(2)}
            name="INSTACOOK"
            description="Wasting your food cause you don't know what/how to cook? Use our app! Our proprietary AI algorithm will take your unused ingredients and generate new recipes for you to whip-up!"
            css="linear-gradient(to top, #d299c2 0%, #fef9d7 100%)"
            active={active[2]}
            link="https://devpost.com/software/funcooker"
          />
        </div>
        <div className="work4" id="3">
          <Card
            toggle={() => toggle(3)}
            name="CHUGG"
            description="Chugg and plug your homework with our homework solution platform!"
            css="linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)"
            active={active[3]}
            link="https://devpost.com/software/chugg"
          />
        </div>
        <div className="work5" id="4">
          <Card
            toggle={() => toggle(4)}
            name="TELL ME THE DRINK"
            description="Have you ever wondered what kind of cocktail is that? With our mobile web app you can take a picture and find out."
            css="linear-gradient(120deg, #f093fb 0%, #f5576c 100%)"
            active={active[4]}
            link="https://devpost.com/software/tell-me-the-drink"
          />
        </div>
        <div className="work6" id="5">
          <Card
            toggle={() => toggle(5)}
            name="RISE"
            description="Simplify your morning routine, from the minute you wake up, to second you start work."
            css="linear-gradient(-20deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%)"
            active={active[5]}
            link="https://npnik4.github.io/images/RiseScreens.svg"
          />
        </div>
      </div>
    </Container>
  );
}

export default Projects;
