import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo, toggleFavourite, favorites, openModal }) => {
  const {
    id,
    urls: { regular: imageSource },
    user: { profile, name },
    location: { city, country },
  } = photo;

  const handlePhotoClick = () => {
    openModal(photo);
  };

  return (
    <div className="photo-list__item">
      <img
        src={imageSource}
        alt={`Photo ${id}`}
        className="photo-list__image"
        onClick={handlePhotoClick}
      />
      <PhotoFavButton
        photoId={id}
        toggleFavourite={toggleFavourite}
        isFavorite={favorites.includes(id)}
      />
      <div className="photo-list__user-details">
        <div className="firstLine">
          <img
            src={profile}
            alt={`${name}'s profile`}
            className="photo-list__user-profile"
          />
          <h4 className="photo-list__user-info">{name}</h4>
        </div>
        <p className="photo-list__user-location">{`${city}, ${country}`}</p>
      </div>
    </div>
  );
};

export default PhotoListItem;
