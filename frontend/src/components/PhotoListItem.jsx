import React from "react";

import "../styles/PhotoListItem.scss";

function PhotoListItem({ username, imageSource, id, location, profile }) {
  return (
    <div className="photo-list-item">
      <img
        src={profile}
        alt={`${username}'s profile`}
        className="profile-picture"
      />
      <div className="photo-details">
        <h4>{username}</h4>
        <img src={imageSource} alt={`Photo ${id}`} className="photo" />
        <p>{location}</p>
      </div>
    </div>
  );
}
export default PhotoListItem;
