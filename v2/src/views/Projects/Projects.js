/* eslint-disable array-callback-return */
import { Container } from "@material-ui/core";
import React, { useState } from "react";
import "./Projects.scss";
import Card from "../../components/Grid/Card";
import { Title, TextHighlight } from "../../components/Styled/StyledComponents";
import rl from "../../assets/rl.svg";
import Parallax from "../../assets/parallax/motivation";
import Carousel from "../../components/Carousel/Carousel";
import instaHome from "../../assets/instaCook/instacook_home.png";
import instaSelect from "../../assets/instaCook/instacook_select.png";
import instaCam from "../../assets/instaCook/instacook_cam.png";
import riseLogin from "../../assets/rise/rise_login.png";
import riseHome from "../../assets/rise/rise_home.png";
import riseTasks from "../../assets/rise/rise_tasks.png";
import riseProfile from "../../assets/rise/rise_profile.png";
import riseAddress from "../../assets/rise/rise_address.png";
// import drink from "../../assets/drink.jpg";
import drinkHome from "../../assets/Home.png";
import drinkAbout from "../../assets/About.png";
import drinkBrowse from "../../assets/Browse.png";
import escape from "../../assets/escape-orphan.jpg";
import { rlInc, rise, instaCook, tellMeTheDrink, orphanage } from "./data";

function Projects(props) {
  const [active, setActive] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggle = (index) => {
    setActive(Object.assign([], [false, false, false, false, false, false]));
    const newActive = Object.assign([], active);
    newActive[index] = !newActive[index];
    if (newActive[index]) {
      document.body.style.overflow = "hidden";
      // var offset = window.innerWidth < 500 ? 20 : 50;
      // var el = document.getElementById("gridStart");
      // window.scroll({
      //   top: el.offsetTop - offset,
      //   left: 0,
      //   behavior: "smooth",
      // });
    } else {
      // document.getElementById(index + "").scrollIntoView();
      document.body.style.overflow = "unset";
      document.body.style.overflowX = "hidden";
    }
    setActive(newActive);
  };

  const imageStyles = {
    objectFit: "contain",
    maxWidth: "100%",
    maxHeight: "100%",
  };

  const lightCardColor =
    "linear-gradient(120deg, rgb(245 183 208) 0%, rgb(245 130 135) 100%)";

  const darkCardColor =
    "linear-gradient(120deg, rgb(0 71 106) 0%, rgb(204 72 98) 100%)";

  const light = props.theme === "light";

  return (
    <Container maxWidth="lg" className="projects" id="work">
      <Title>
        My <TextHighlight>Work</TextHighlight>.
      </Title>
      <div className="work-grid" id="gridStart">
        <div className="work1" id="0">
          <Card
            toggle={() => toggle(0)}
            name="RISE"
            description={rise.headline}
            css={light ? lightCardColor : darkCardColor}
            active={active[0]}
            link="https://npnik4.github.io/images/RiseScreens.svg"
            textColor={light ? "#727272" : "#313131"}
            tags={rise.tags}
          >
            <Carousel
              images={[
                riseLogin,
                riseHome,
                riseTasks,
                riseProfile,
                riseAddress,
              ]}
              description={rise.description}
            />
          </Card>
        </div>
        <div className="work2" id="1">
          <Card
            toggle={() => toggle(1)}
            name="INSTACOOK"
            description={instaCook.headline}
            css={light ? lightCardColor : darkCardColor}
            active={active[1]}
            link="https://devpost.com/software/funcooker"
            textColor={light ? "#727272" : "#313131"}
            tags={instaCook.tags}
          >
            <Carousel
              images={[instaHome, instaSelect, instaCam]}
              description={instaCook.description}
            />
          </Card>
        </div>
        <div className="work3" id="2">
          <Card
            toggle={() => toggle(2)}
            name="MOTIVATION"
            description="Experiment with parallax effect using React.js. Try it out above."
            css={light ? lightCardColor : darkCardColor}
            active={active[2]}
            link="https://npnik4.github.io/Animated-React-Webpage/"
            textColor={light ? "#727272" : "#313131"}
            tags={rlInc.tags}
          >
            <Parallax />
          </Card>
        </div>
        <div className="work4" id="3">
          <Card
            toggle={() => toggle(3)}
            name="TELL ME THE DRINK"
            description="Have you ever wondered what kind of cocktail is that? With our mobile web app you can take a picture and find out."
            css={light ? lightCardColor : darkCardColor}
            active={active[3]}
            link="https://devpost.com/software/tell-me-the-drink"
            textColor={light ? "#727272" : "#313131"}
            tags={tellMeTheDrink.tags}
          >
            <Carousel
              images={[drinkHome, drinkAbout, drinkBrowse]}
              styles={[
                { objectFit: "contain", maxWidth: "70%", maxHeight: "70%" },
                { objectFit: "contain", maxWidth: "70%", maxHeight: "70%" },
                { objectFit: "contain", maxWidth: "70%", maxHeight: "70%" },
              ]}
            />
          </Card>
        </div>
        <div className="work5" id="4">
          <Card
            toggle={() => toggle(4)}
            name="ESCAPE THE ORPHANAGE"
            description="Fed up with life at the orphanage, orphan #0087 decides to escape only to be hindered by the orphanage's many traps."
            css={light ? lightCardColor : darkCardColor}
            active={active[4]}
            link="https://globalgamejam.org/2019/games/escape-orphanage"
            textColor={light ? "#727272" : "#313131"}
            tags={orphanage.tags}
          >
            <img src={escape} alt="ESCAPE THE ORPHANAGE" style={imageStyles} />
          </Card>
        </div>
        <div className="work6" id="5">
          <Card
            toggle={() => toggle(5)}
            name="RL INC. HOMEPAGE"
            description={rlInc.headline}
            css={light ? lightCardColor : darkCardColor}
            active={active[5]}
            link="https://rl-inc.io/"
            textColor={light ? "#727272" : "#313131"}
            tags={rlInc.tags}
          >
            <img
              src={rl}
              alt="rl"
              style={{ ...imageStyles, maxWidth: "50%" }}
            />
          </Card>
        </div>
      </div>
    </Container>
  );
}

export default Projects;
