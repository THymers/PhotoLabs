import React, { useState } from "react";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import photos from "./mocks/photos";
import topics from "./mocks/topics";
import "./App.scss";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };
  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} openModal={openModal} />
      {isModalOpen && (
        <PhotoDetailsModal closeModal={closeModal} photo={selectedPhoto} />
      )}
    </div>
  );
};

export default App;
