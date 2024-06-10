import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, toggleFavourite, favorites, openModal }) => {
  return (
    <ul className="photo-list">
      {photos && Array.isArray(photos) ? (
        photos.map((photo) => (
          <PhotoListItem key={photo.id}
            photo={photo}
            toggleFavourite={toggleFavourite}
            favorites={favorites}
            openModal={openModal}
          />
        ))
      ) : (
        <p>No photos available</p>
      )}
    </ul>
  );
};

export default PhotoList;