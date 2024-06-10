// import React, { useState } from "react";
// import TopNavigation from "components/TopNavigationBar";
// import PhotoList from "components/PhotoList";
// import "../styles/HomeRoute.scss";

// const HomeRoute = (props) => {
//   const [favorites, setFavorites] = useState([]);

//   const toggleFavourite = (photoId) => {
//     if (favorites.includes(photoId)) {
//       setFavorites(favorites.filter((favPhotoId) => favPhotoId !== photoId));
//     } else {
//       setFavorites([...favorites, photoId]);
//     }
//   };
//   const isFavPhotoExist = favorites.length > 0;

//   if (!Array.isArray(props.photos)) {
//     console.error(
//       "Expected 'photos' to be an array, but received:",
//       typeof props.photos
//     );
//     return null;
//   }

//   return (
//     <div className="home-route">
//       <TopNavigation topics={props.topics} isFavPhotoExist={isFavPhotoExist} />
//       <PhotoList
//         photos={props.photos}
//         favorites={favorites}
//         toggleFavourite={toggleFavourite}
//         openModal={props.openModal}
//       />
//     </div>
//   );
// };

// export default HomeRoute;

import React, { useState } from "react";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({
  topics,
  photos,
  openModal,
  toggleFavourite,
  favorites,
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
      <TopNavigation topics={topics} isFavPhotoExist={isFavPhotoExist} />
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
