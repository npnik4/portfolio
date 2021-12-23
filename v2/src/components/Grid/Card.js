/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Slug, Fade } from "./Primitives";
import { AnimateSharedLayout, motion } from "framer-motion";
import "./Card.scss";
import Modal from "react-modal";
import { useDarkMode } from "../../useDarkMode";

function Tag(props) {
  const { color, skill, icon } = props;
  return (
    <div className="tag" style={{ background: color }}>
      <i className={icon} />
      <span>{skill}</span>
    </div>
  );
}

function Card(props) {
  const {
    toggle,
    name,
    description,
    css,
    active,
    link,
    children,
    tags,
    textColor,
  } = props;

  const [theme] = useDarkMode();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "90%",
      height: "80vh",
      backgroundSize: "cover",
      boxShadow: "0px 10px 55px 30px rgba(0, 0, 0, 0.25)",
      transition: "all 0.5s",
      borderRadius: "15px",
      backgroundImage: css,
      border: "none",
    },
    overlay: {
      background:
        theme === "light" ? "rgb(255 255 255 / 50%)" : "rgb(0 0 0 / 50%)",
    },
  };
  Modal.setAppElement("#root");

  return (
    <AnimateSharedLayout>
      <div
        className={theme === "light" ? "cellLight" : "cellDark"}
        style={{
          backgroundImage: css,
          cursor: !active ? "pointer" : "auto",
        }}
        onClick={!active ? toggle : undefined}
      >
        <Modal
          isOpen={active}
          onRequestClose={toggle}
          style={customStyles}
          contentLabel="Modal"
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
                      color: "#000",
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
        </Modal>

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
                <div className="name" style={{ color: textColor }}>
                  {name}
                </div>
                <div className="description">
                  {tags &&
                    tags.map((tag, i) => {
                      return (
                        <Tag
                          color={tag.color}
                          icon={tag.icon}
                          skill={tag.skill}
                        />
                      );
                    })}
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
