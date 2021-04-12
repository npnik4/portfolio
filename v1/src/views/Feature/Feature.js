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
import { Title, TextHighlight } from "../../components/Styled/StyledComponents";

function Feature(props) {
  const [active, setActive] = useState([false, false]);

  const toggle = (index) => {
    setActive(Object.assign([], [false, false]));
    const newActive = Object.assign([], active);
    newActive[index] = !newActive[index];
    if (newActive[index]) {
      // var offset = window.innerWidth < 500 ? 20 : 50;
      // var el = document.getElementById("featureWork");
      document.body.style.overflow = "hidden";
      // window.scroll({
      //   top: el.offsetTop - offset,
      //   left: 0,
      //   behavior: "smooth",
      // });
    } else {
      document.body.style.overflow = "unset";
    }
    setActive(newActive);
  };

  const light = props.theme === "light";

  return (
    <Container maxWidth="lg" className="feature" id="feature">
      <Title>
        Featured <TextHighlight>Projects</TextHighlight>.
      </Title>
      <div className="item-container" id="featureWork">
        <div className="item">
          <Card
            toggle={() => toggle(0)}
            name="UrRecalls"
            description={urRecalls.headline}
            css={
              light
                ? "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)"
                : "linear-gradient(to top, rgb(228 178 156) 0%, rgb(97 183 224) 100%)"
            } //linear-gradient(to top, rgb(228 178 156) 0%, rgb(97 183 224) 100%)
            active={active[0]}
            link="https://npnik4.github.io/assets/docs/UrRecalls.pdf"
            textColor={light ? "#727272" : "#313131"}
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
            css={
              light
                ? "linear-gradient(120deg, #f6d365 0%, #fda085 100%)"
                : "linear-gradient(120deg, rgb(212 178 74) 0%, rgb(197 114 89) 100%)"
            } //linear-gradient(120deg, rgb(212 178 74) 0%, rgb(197 114 89) 100%)
            active={active[1]}
            link="https://npnik4.github.io/assets/docs/Scan%20Avert.pdf"
            textColor={light ? "#727272" : "#313131"}
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
  );
}

export default Feature;
