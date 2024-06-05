import React, { useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({ photoId, toggleFavourite, isFavorite }) => {
  const handleClick = () => {
    toggleFavourite(photoId);
  };

  return (
    <div
      className={`photo-list__fav-icon ${isFavorite ? "active" : ""}`}
      onClick={handleClick}
    >
      <div className="photo-list__fav-icon-svg">
        <FavIcon />
      </div>
    </div>
  );
};

export default PhotoFavButton;
