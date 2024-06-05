import React from "react";
import FavBadge from "./components/FavBadge";

import "../styles/TopNavigationBar.scss";

const TopNavigation = ({ topics, isFavPhotoExist }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <ul className="top-nav-bar__topics">
        {topics.map((topic) => (
          <li key={topic.id}>{topic.title}</li>
        ))}
      </ul>
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;
