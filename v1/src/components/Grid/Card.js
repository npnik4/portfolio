/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Slug, Fade } from "./Primitives";
import { AnimateSharedLayout, motion } from "framer-motion";
import "./Card.scss";

function Card(props) {
  const {
    toggle,
    name,
    description,
    css,
    textColor,
    active,
    link,
    children,
  } = props;

  return (
    <AnimateSharedLayout>
      <div
        className={active ? "expandedCell" : "cell"}
        style={{ backgroundImage: css, cursor: !active ? "pointer" : "auto" }}
        onClick={!active ? toggle : undefined}
      >
        <Fade show={active} delay={active ? 500 : 0}>
          <motion.div className="details">
            <Slug delay={600}>
              <div className="close">
                <i
                  className="fas fa-times"
                  style={{
                    cursor: "pointer",
                    fontSize: "32px",
                    color: "#777777",
                  }}
                  onClick={toggle}
                />
              </div>
              <div className="info-container">{children}</div>
              <h1>{name}</h1>
              <p>{description}</p>
              <a href={link} target="_blank" className="button">
                More information
              </a>
            </Slug>
          </motion.div>
        </Fade>

        <Fade
          show={!active}
          from={{ opacity: 0, transform: "translate3d(0,140px,0)" }}
          enter={{ opacity: 1, transform: "translate3d(0,0px,0)" }}
          leave={{ opacity: 0, transform: "translate3d(0,-50px,0)" }}
          delay={active ? 0 : 400}
        >
          <motion.div className="default">
            <div className="default-content">
              <div className="default-container">
                <div className="name">{name}</div>
                <div className="description" style={{ color: textColor }}>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </Fade>
      </div>
    </AnimateSharedLayout>
  );
}

export default Card;
