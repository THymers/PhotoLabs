import React from "react";
import TopNavigation from "./TopNavigation";
import PhotoList from "./PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ topics, photos }) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} />{" "}
      {/* Render the TopNavigation component */}
      <PhotoList photos={photos} /> {/* Render the PhotoList component */}
    </div>
  );
};

export default HomeRoute;
