import { useState } from "react";

const useApplicationData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const openModal = (photo) => {
    if (photo) {
      setSelectedPhoto(photo);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  const toggleFavourite = (photoId) => {
    if (favorites.includes(photoId)) {
      setFavorites(favorites.filter((favPhotoId) => favPhotoId !== photoId));
    } else {
      setFavorites([...favorites, photoId]);
    }
  };

  return {
    isModalOpen,
    selectedPhoto,
    favorites,
    openModal,
    closeModal,
    toggleFavourite,
  };
};

export default useApplicationData;
