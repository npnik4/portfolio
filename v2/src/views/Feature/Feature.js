import React, { useState } from "react";
import { Container } from "@material-ui/core";
import homeScreen from "../../assets/urRecalls/home_screen.png";
import recall from "../../assets/urRecalls/recall.png";
import logo from "../../assets/urRecalls/logo.png";
import ScanAvert from "../../assets/scanavert/X_frame.png";
import gif from "../../assets/scanavert/bCode_Fav.gif";
import Card from "../../components/Grid/Card";
import "./Feature.scss";
import Carousel from "../../components/Carousel/Carousel";
import { urRecalls, scanavert } from "./data";
import { Title } from "../../components/Styled/StyledComponents";

function Feature(props) {
  const [active, setActive] = useState([false, false]);

  const toggle = (index) => {
    setActive(Object.assign([], [false, false]));
    const newActive = Object.assign([], active);
    newActive[index] = !newActive[index];
    if (newActive[index]) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.overflowX = "hidden";
    }
    setActive(newActive);
  };

  const light = props.theme === "light";

  const lightCardColor =
    "linear-gradient(120deg, rgb(245 183 208) 0%, rgb(245 130 135) 100%)";

  const darkCardColor =
    "linear-gradient(120deg, rgb(0 71 106) 0%, rgb(204 72 98) 100%)";

  return (
    <div className="parent">
      <Container maxWidth="lg" className="feature" id="feature">
        <Title>Featured Projects.</Title>
        <div className="item-container" id="featureWork">
          <div className="item">
            <Card
              toggle={() => toggle(0)}
              name="UrRecalls"
              description={urRecalls.headline}
              css={light ? lightCardColor : darkCardColor} //linear-gradient(to top, rgb(228 178 156) 0%, rgb(97 183 224) 100%)
              active={active[0]}
              link="https://npnik4.github.io/assets/docs/UrRecalls.pdf"
              textColor={light ? "#000" : "#fff"}
              tags={urRecalls.tags}
            >
              <Carousel
                images={[logo, homeScreen, recall]}
                description={urRecalls.description}
              />
            </Card>
          </div>
          <div className="item">
            <Card
              toggle={() => toggle(1)}
              name="SCANAVERT"
              description={scanavert.headline}
              css={light ? lightCardColor : darkCardColor}
              active={active[1]}
              link="https://npnik4.github.io/assets/docs/Scan%20Avert.pdf"
              textColor={light ? "#000" : "#fff"}
              tags={scanavert.tags}
            >
              <Carousel
                images={[ScanAvert, gif]}
                styles={[
                  { objectFit: "contain", maxWidth: "20%", maxHeight: "100%" },
                  { objectFit: "contain", maxWidth: "15%", maxHeight: "100%" },
                ]}
                description={scanavert.description}
              />
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Feature;
