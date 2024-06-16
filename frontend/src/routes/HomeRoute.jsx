import React from "react";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({
  topics,
  photos,
  openModal,
  toggleFavourite,
  favorites,
  fetchPhotosByTopic,
}) => {
  const isFavPhotoExist = favorites.length > 0;

  if (!Array.isArray(photos)) {
    console.error(
      "Expected 'photos' to be an array, but received:",
      typeof photos
    );
    return null;
  }

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        isFavPhotoExist={isFavPhotoExist}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
      <PhotoList
        photos={photos}
        favorites={favorites}
        toggleFavourite={toggleFavourite}
        openModal={openModal}
      />
    </div>
  );
};

export default HomeRoute;

