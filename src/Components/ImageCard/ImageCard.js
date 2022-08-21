import React, { useState, useEffect } from "react";
import "./ImageCard.css";
import { useLocation } from "react-router-dom";

const ImageCard = ({ name, url }) => {
  const [loading, setLoading] = useState(true);
  let location = useLocation();

  useEffect(() => {
    setLoading(true);
  }, [location]);

  const imageLoaded = () => {
    setLoading(false);
    console.log(loading);
  };

  return (
    <>
      <div id="loader" style={{ display: loading ? "block" : "none" }}>
        <div className="spinner">
          <img src="loader2.gif" alt="loading..."></img>
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
