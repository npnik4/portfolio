import React, { useState } from "react";
import { Container } from "@material-ui/core";
import homeScreen from "../../assets/urRecalls/home_screen.png";
import recall from "../../assets/urRecalls/recall.jpg";
import logo from "../../assets/urRecalls/logo.png";
import ScanAvert from "../../assets/scanavert/X_frame.png";
import gif from "../../assets/scanavert/bCode_Fav.gif";
import Card from "../../components/Grid/Card";
import "./Feature.scss";
import Carousel from "../../components/Carousel/Carousel";

function Feature() {
  const [active, setActive] = useState([false, false]);

  const toggle = (index) => {
    setActive(Object.assign([], [false, false]));
    const newActive = Object.assign([], active);
    newActive[index] = !newActive[index];
    setActive(newActive);
  };

  return (
    <Container maxWidth="lg" className="feature" id="feature">
      <h1 className="title">
        Featured <span>Projects</span>.
      </h1>
      <div className="item-container">
        <div className="item">
          <Card
            toggle={() => toggle(0)}
            name="UrRecalls"
            description="In the UrRecalls app, you can scan the barcode of your product, or search by product name to get recall information."
            css="linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)"
            active={active[0]}
            link="https://npnik4.github.io/assets/docs/UrRecalls.pdf"
          >
            <Carousel images={[homeScreen, logo, recall]}/>
          </Card>
        </div>
        <div className="item">
          <Card
            toggle={() => toggle(1)}
            name="SCANAVERT"
            description="ScanAvert simplifies the process of making safer, compatible food choices."
            css="linear-gradient(120deg, #f6d365 0%, #fda085 100%)"
            active={active[1]}
            link="https://npnik4.github.io/assets/docs/Scan%20Avert.pdf"
          >
            <Carousel images={[ScanAvert, gif]}/>
          </Card>
        </div>
      </div>
    </Container>
  );
}

export default Feature;
