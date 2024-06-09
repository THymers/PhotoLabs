import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({ closeModal, photo }) => {
  if (!photo) {
    return null;
  }
  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={closeModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__content">
        <img
          src={photo.url}
          alt={photo.description}
          className="photo-details-modal__image"
        />
        <p>{photo.description}</p>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
