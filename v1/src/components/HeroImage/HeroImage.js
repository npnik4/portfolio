import React from "react";
import { useSpring, animated } from "react-spring";
import "./HeroImage.scss";
import bl from "../../assets/btmLeft.svg";
import br from "../../assets/btmRight.svg";
import tl from "../../assets/topLeft.svg";
import tr from "../../assets/topRight.svg";
import me from "../../assets/me2.svg";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
// const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
// const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
// const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 5}px,${y / 5}px,0)`;

function HeroImage() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 120 },
  }));
  return (
    <div
      class="heroImage"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        class="card1"
        style={{  backgroundImage: `url(${bl})` }}
      />
      <animated.div
        class="card2"
        style={{ backgroundImage: `url(${br})` }}
      />
      <animated.div
        class="card3"
        style={{  backgroundImage: `url(${tl})` }}
      />
      <animated.div
        class="card4"
        style={{  backgroundImage: `url(${tr})` }}
      />
      <animated.div
        class="card5"
        style={{ transform: props.xy.interpolate(trans4), backgroundImage: `url(${me})` }}
      />
    </div>
  );
}

export default HeroImage;
