import React, { useState } from "react";
import "./Carousel.scss";

function Carousel(props) {
  const [currentImg, setImg] = useState(0);
  const multiImage = props.images.length > 1;

  const imageStyles = {
    objectFit: "contain",
    maxWidth: "25%",
    maxHeight: "100%",
  };

  const moveRight = () => {
    if (currentImg !== props.images.length - 1) {
      setImg(currentImg + 1);
    } else {
      setImg(0);
    }
  };

  const moveLeft = () => {
    if (currentImg !== 0) {
      setImg(currentImg - 1);
    } else {
      setImg(props.images.length - 1);
    }
  };

  return (
    <div className="carousel">
      {multiImage ? (
        <div className="button" onClick={() => moveLeft()}>
          {"<"}
        </div>
      ) : null}
      <div className="content">
        <img
          src={props.images[currentImg]}
          alt="urrecalls"
          style={props.styles ? props.styles[currentImg] : imageStyles}
          className="photo"
        />
        {props.description ? (
          <p className="description">{props.description[currentImg]}</p>
        ) : null}
      </div>
      {multiImage ? (
        <div className="button" onClick={() => moveRight()}>
          {">"}
        </div>
      ) : null}
    </div>
  );
}

export default Carousel;
