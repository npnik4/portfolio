import React from "react";
import { useSpring, animated } from "react-spring";
import "./motivation.scss";
import cloud1 from "./cloud1.svg";
import cloud2 from "./cloud2.svg";
import cloud3 from "./cloud3.svg";
import person from "./person.svg";
import planet from "./planet.svg";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
// const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
// const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 5}px,${y / 5}px,0)`;

function Parallax() {
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
        style={{  transform: props.xy.interpolate(trans1), backgroundImage: `url(${cloud1})` }}
      />
      <animated.div
        class="card2"
        style={{ transform: props.xy.interpolate(trans1), backgroundImage: `url(${cloud2})` }}
      />
      <animated.div
        class="card3"
        style={{  transform: props.xy.interpolate(trans1), backgroundImage: `url(${cloud3})` }}
      />
      <animated.div
        class="card4"
        style={{  transform: props.xy.interpolate(trans4), backgroundImage: `url(${planet})` }}
      />
      <animated.div
        class="card5"
        style={{ transform: props.xy.interpolate(trans4), backgroundImage: `url(${person})` }}
      />
    </div>
  );
}

export default Parallax;
