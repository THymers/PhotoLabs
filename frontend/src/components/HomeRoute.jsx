import React, { useState } from "react";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavourite = (photoId) => {
    if (favorites.includes(photoId)) {
      setFavorites(favorites.filter((favPhotoId) => favPhotoId !== photoId));
    } else {
      setFavorites([...favorites, photoId]);
    }
  };
  const isFavPhotoExist = favorites.length > 0;

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} isFavPhotoExist={isFavPhotoExist} />
      <PhotoList
        photos={props.photos}
        favorites={favorites}
        toggleFavourite={toggleFavourite}
      />
    </div>
  );
};

export default HomeRoute;
