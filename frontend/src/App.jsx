import React from "react";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";
import "./App.scss";

const App = () => {
  const {
    isModalOpen,
    selectedPhoto,
    favorites,
    photoData,
    topicData,
    openModal,
    closeModal,
    toggleFavourite,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={topicData}
        photos={photoData}
        openModal={openModal}
        toggleFavourite={toggleFavourite}
        favorites={favorites}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          closeModal={closeModal}
          photo={selectedPhoto}
          toggleFavourite={toggleFavourite}
          isFavorite={favorites.includes(selectedPhoto?.id)}
        />
      )}
    </div>
  );
};

export default App;

// import React, { useState } from "react";
// import HomeRoute from "./routes/HomeRoute";
// import PhotoDetailsModal from "./routes/PhotoDetailsModal";
// import photos from "./mocks/photos";
// import topics from "./mocks/topics";
// import "./App.scss";

// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedPhoto, setSelectedPhoto] = useState(null);
//   const [favorites, setFavorites] = useState([]);

//   const openModal = (photo) => {
//     if (photo) {
//       setSelectedPhoto(photo);
//       setIsModalOpen(true);
//     }
//   };

//   const closeModal = () => {
//     setSelectedPhoto(null);
//     setIsModalOpen(false);
//   };

//   const toggleFavourite = (photoId) => {
//     if (favorites.includes(photoId)) {
//       setFavorites(favorites.filter((favPhotoId) => favPhotoId !== photoId));
//     } else {
//       setFavorites([...favorites, photoId]);
//     }
//   };

//   return (
//     <div className="App">
//       <HomeRoute
//         topics={topics}
//         photos={photos}
//         openModal={openModal}
//         toggleFavourite={toggleFavourite}
//         favorites={favorites}
//       />
//       {isModalOpen && (
//         <PhotoDetailsModal
//           closeModal={closeModal}
//           photo={selectedPhoto}
//           toggleFavourite={toggleFavourite}
//           isFavorite={favorites.includes(selectedPhoto?.id)}
//         />
//       )}
//     </div>
//   );
// };

// export default App;
