/* eslint-disable array-callback-return */
import { Container } from "@material-ui/core";
import React, { useState } from "react";
import "./Projects.scss";
import Card from "../../components/Grid/Card";

function Projects() {
  const [active, setActive] = useState([false, false]);

  const toggle = (index) => {
    const newActive = Object.assign([], active);
    newActive[index] = !newActive[index];
    setActive(newActive);
  };

  return (
    <Container maxWidth="lg" className="projects" id="work">
      <h1 className="title">My Work</h1>
      <div className="work-grid">
        <div className="work1">
          <Card
            toggle={() => toggle(0)}
            name="RL INC. HOMEPAGE"
            description="Make integrating artificial intelligence into your games easy and simple."
            css="linear-gradient(to top, #a8edea 0%, #fed6e3 100%)"
            active={active[0]}
          />
        </div>
        <div className="work2">
          <Card
            toggle={() => toggle(1)}
            name="MOTIVATION"
            description="Experiment with parallax effect using React.js."
            css="linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
            active={active[1]}
          />
        </div>
      </div>
    </Container>
  );
}

export default Projects;
