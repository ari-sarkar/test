import React from "react";
import "./ImageCard.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ImageCard = ({ name, url }) => {
  return (
    <div className="image_container">
      <p>This is Carousel {name}</p>
      <LazyLoadImage alt={name} src={`${url}.jpg`} />
    </div>
  );
};

export default ImageCard;
