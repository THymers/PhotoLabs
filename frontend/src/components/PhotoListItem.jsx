// PhotoListItem.jsx
import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo, toggleFavourite, favorites, openModal }) => {
  const {
    id,
    urls: { regular: imageSource },
    user: { profile, username, name },
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
      <div className="photo-list__user-details">
        <div className="firstLine">
          <img
            src={profile}
            alt={`${username}'s profile`}
            className="photo-list__user-profile"
          />
          <h4 className="photo-list__user-info">{username}</h4>
        </div>
        <p className="photo-list__user-location">{`${city}, ${country}`}</p>
      </div>
      <PhotoFavButton
        photoId={id}
        toggleFavourite={toggleFavourite}
        isFavorite={favorites.includes(id)}
      />
    </div>
  );
};

export default PhotoListItem;
