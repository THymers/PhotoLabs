import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo }) => {
  return (
    <div className="photo-list__item">
      <div className="photo-list__user-details">
        <img
          src={photo.profile}
          alt={`${photo.username}'s profile`}
          className="photo-list__user-profile"
        />
        <h4 className="photo-list__user-info">{photo.username}</h4>
      </div>
      <img
        src={photo.imageSource}
        alt={`Photo ${photo.id}`}
        className="photo-list__image"
      />
      <p className="photo-list__user-location">{`${photo.location.city}, ${photo.location.country}`}</p>
    </div>
  );
};

export default PhotoListItem;
