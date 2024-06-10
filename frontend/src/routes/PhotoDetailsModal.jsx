import React from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "../components/PhotoList";

const PhotoDetailsModal = ({ closeModal, photo }) => {
  if (!photo) {
    return (
      <div className="photo-details-modal">
        <button
          className="photo-details-modal__close-button"
          onClick={closeModal}
        >
          <img src={closeSymbol} alt="close symbol" />
        </button>
        <div className="photo-details-modal__content">
          <p>No photo available</p>
        </div>
      </div>
    );
  }

  const { url, description, photographer = {}, similarPhotos = [] } = photo;

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={closeModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__content">
        {url && (
          <img
            src={url}
            alt={description}
            className="photo-details-modal__image"
          />
        )}
        <p className="photo-details-modal__header">{description}</p>
        {photographer.profileImageUrl &&
        photographer.name &&
        photographer.location ? (
            <div className="photo-details-modal__photographer-details">
              <img
                src={photographer.profileImageUrl}
                alt={photographer.name}
                className="photo-details-modal__photographer-profile"
              />
              <div>
                <p className="photo-details-modal__photographer-info">
                  {photographer.name}
                </p>
                <p className="photo-details-modal__photographer-location">
                  {photographer.location}
                </p>
              </div>
            </div>
          ) : (
            <p>Photographer information not available</p>
          )}
        <h2 className="photo-details-modal__header">Similar Photos</h2>
        <div className="photo-details-modal__images">
          <PhotoList photos={similarPhotos} />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
