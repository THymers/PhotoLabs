import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo }) => {
  return (
    <div className="photo-list__item">
      <img
        src={photo.imageSource}
        alt={`Photo ${photo.id}`}
        className="photo-list__image"
      />
      <div className="photo-list__user-details">
        <div className="firstLine">
          <img
            src={photo.profile}
            alt={`${photo.username}'s profile`}
            className="photo-list__user-profile"
          />
          <h4 className="photo-list__user-info">{photo.username}</h4>
        </div>
        <p className="photo-list__user-location">{`${photo.location.city}, ${photo.location.country}`}</p>
      </div>
      <PhotoFavButton />
    </div>
  );
};

export default PhotoListItem;
