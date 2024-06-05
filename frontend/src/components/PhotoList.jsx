import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, toggleFavourite, favorites, openModal }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          toggleFavourite={toggleFavourite}
          favorites={favorites}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
