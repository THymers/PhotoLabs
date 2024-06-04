// PhotoListItem.jsx
import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo }) => {
  const {
    id,
    urls: { regular: imageSource },
    user: { profile, username, name },
    location: { city, country },
  } = photo;

  return (
    <div className="photo-list__item">
      <img
        src={imageSource}
        alt={`Photo ${id}`}
        className="photo-list__image"
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
        <p className="photo-list__user-location">{`${location.city}, ${location.country}`}</p>
      </div>
      <PhotoFavButton />
    </div>
  );
};

export default PhotoListItem;
