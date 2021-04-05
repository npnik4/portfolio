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
import drink from "../../assets/drink.jpg";
import escape from "../../assets/escape-orphan.jpg";
import { rlInc, rise, instaCook } from "./data";

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
      var offset = window.innerWidth < 500 ? 20 : 50;
      var el = document.getElementById("gridStart");
      window.scroll({
        top: el.offsetTop - offset,
        left: 0,
        behavior: "smooth",
      });
    } else {
      document.getElementById(index + "").scrollIntoView();
    }
    setActive(newActive);
  };

  const imageStyles = {
    objectFit: "contain",
    maxWidth: "100%",
    maxHeight: "100%",
  };

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
            name="RL INC. HOMEPAGE"
            description={rlInc.headline}
            css={
              light
                ? "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)"
                : "linear-gradient(to top, rgb(27, 138, 133) 0%, rgb(218, 101, 139) 100%)"
            }
            active={active[0]}
            link="https://rl-inc.io/"
            textColor={light ? "#727272" : "#313131"}
          >
            <img
              src={rl}
              alt="rl"
              style={{ ...imageStyles, maxWidth: "50%" }}
            />
          </Card>
        </div>
        <div className="work2" id="1">
          <Card
            toggle={() => toggle(1)}
            name="RISE"
            description={rise.headline}
            css={
              light
                ? "linear-gradient(-20deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%)"
                : "linear-gradient(-20deg, rgb(171 156 216) 0%, rgb(189 96 91) 100%, rgb(191 132 129) 100%)"
            }
            active={active[1]}
            link="https://npnik4.github.io/images/RiseScreens.svg"
            textColor={light ? "#727272" : "#313131"}
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
        <div className="work3" id="2">
          <Card
            toggle={() => toggle(2)}
            name="INSTACOOK"
            description={instaCook.headline}
            css={
              light
                ? "linear-gradient(to top, #d299c2 0%, #fef9d7 100%)"
                : "linear-gradient(to top, rgb(189 93 162) 0%, rgb(222 214 155) 100%)"
            }
            active={active[2]}
            link="https://devpost.com/software/funcooker"
            textColor={light ? "#727272" : "#313131"}
          >
            <Carousel
              images={[instaHome, instaSelect, instaCam]}
              description={instaCook.description}
            />
          </Card>
        </div>
        <div className="work4" id="3">
          <Card
            toggle={() => toggle(3)}
            name="MOTIVATION"
            description="Experiment with parallax effect using React.js. Try it out above."
            css={
              light
                ? "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)"
                : "linear-gradient(120deg, rgb(204 151 255) 0%, rgb(87 144 202) 100%)"
            }
            active={active[3]}
            link="https://npnik4.github.io/Animated-React-Webpage/"
            textColor={light ? "#727272" : "#313131"}
          >
            <Parallax />
          </Card>
        </div>
        <div className="work5" id="4">
          <Card
            toggle={() => toggle(4)}
            name="TELL ME THE DRINK"
            description="Have you ever wondered what kind of cocktail is that? With our mobile web app you can take a picture and find out."
            css={
              light
                ? "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)"
                : "linear-gradient(120deg, rgb(213 85 228) 0%, rgb(177 66 80) 100%)"
            }
            active={active[4]}
            link="https://devpost.com/software/tell-me-the-drink"
            textColor={light ? "#727272" : "#313131"}
          >
            <img src={drink} alt="urrecalls" style={imageStyles} />
          </Card>
        </div>
        <div className="work6" id="5">
          <Card
            toggle={() => toggle(5)}
            name="ESCAPE THE ORPHANAGE"
            description="Fed up with life at the orphanage, orphan #0087 decides to escape only to be hindered by the orphanage's many traps."
            css={
              light
                ? "linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%)"
                : "linear-gradient(to top, rgb(174 101 204) 0%, rgb(173 214 165) 100%)"
            }
            active={active[5]}
            link="https://globalgamejam.org/2019/games/escape-orphanage"
            textColor={light ? "#727272" : "#313131"}
          >
            <img src={escape} alt="ESCAPE THE ORPHANAGE" style={imageStyles} />
          </Card>
        </div>
      </div>
    </Container>
  );
}

export default Projects;
