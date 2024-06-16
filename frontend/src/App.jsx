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
    similarPhotos,
    fetchPhotosByTopic,
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
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          closeModal={closeModal}
          photo={selectedPhoto}
          toggleFavourite={toggleFavourite}
          isFavorite={favorites.includes(selectedPhoto?.id)}
          similarPhotos={similarPhotos}
        />
      )}
    </div>
  );
};

export default App;
