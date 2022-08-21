import React, { useState } from "react";
import "./ImageCard.css";

const ImageCard = ({ name, url }) => {
  const [loading, setLoading] = useState(true);

  const imageLoaded = () => {
    setLoading(false);
  };
  return (
    <>
      <div id="loader" style={{ display: loading ? "block" : "none" }}>
        <div className="spinner">
          <div className="nb-spinner"></div>
        </div>
      </div>

      <div style={{ display: loading ? "none" : "block" }}>
        <div className="image_container">
          <p>This is Carousel {name}</p>
          <img onLoad={imageLoaded} alt={name} src={`${url}.jpg`} />
        </div>
      </div>
    </>
  );
};

export default ImageCard;
