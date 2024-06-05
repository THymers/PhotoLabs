import React from "react";
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ topics, photos }) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} />{" "}
      {/* Passing topics to TopNavigationBar */}
      <PhotoList photos={photos} /> {/* Passing photos to PhotoList */}
    </div>
  );
};

export default HomeRoute;
