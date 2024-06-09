import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({ closeModal, photo }) => {
  console.log("Selected Photo:", photo);

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={closeModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__content">
        {photo ? (
          <>
            <img
              src={photo.url}
              alt={photo.description}
              className="photo-details-modal__image"
            />
            <p>{photo.description}</p>
            <p> profile picture username location </p>
          </>
        ) : (
          <p>No photo available</p>
        )}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
