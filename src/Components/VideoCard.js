import React from "react";
import "../CSS/VideoCard.css"

export const VideoCard = () => {
  return (
    <div className="videoCard">
      <img
        src="https://image.shutterstock.com/image-illustration/raster-version-cinematograph-concept-banner-260nw-1697799442.jpg"
        alt=" "
      />
      <p>Description</p>
      <h2>Movie Title</h2>
      <p>Number of likes...</p>
    </div>
  );
};
