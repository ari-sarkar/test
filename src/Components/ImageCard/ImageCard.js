import React from "react";
import "./ImageCard.css";

const ImageCard = props => {
  return (
    <div className="image_container">
      <p>This is Carousel {props.name}</p>
      <img src={`${props.url}.jpg`} alt={props.name}></img>
    </div>
  );
};

export default ImageCard;
