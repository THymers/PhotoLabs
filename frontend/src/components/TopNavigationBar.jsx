import React from "react";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

import "../styles/TopNavigationBar.scss";
import "../styles/HomeRoute.scss";

const TopNavigation = ({ topics, isFavPhotoExist }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <ul className="top-nav-bar__topics">
        <TopicList topics={topics} />
      </ul>
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;
