import React from "react";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ topics, photos }) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} />{" "}
      {/* Render TopNavigationBar component */}
      <PhotoList photos={photos} /> {/* Render PhotoList component */}
    </div>
  );
};

export default HomeRoute;
