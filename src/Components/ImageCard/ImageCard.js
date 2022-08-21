import React, { useState, useEffect } from "react";
import "./ImageCard.css";
import { useLocation } from "react-router-dom";

const ImageCard = ({ name, url }) => {
  const [loading, setLoading] = useState(true);

  let location = useLocation();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [location]);

  const imageLoaded = e => {
    console.log("i work");
    setLoading(false);
    //console.log(loading);
  };

  return (
    <div>
      <div id="loader" style={{ display: loading ? "block" : "none" }}>
        <div className="spinner">
          <img src="loader2.gif" alt="loading..."></img>
        </div>
      </div>

      <div style={{ display: loading ? "none" : "block" }}>
        <div className="image_container">
          <p>This is Carousel {name}</p>
          <img onLoad={e => imageLoaded(e)} alt={name} src={`${url}.jpg`} />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
