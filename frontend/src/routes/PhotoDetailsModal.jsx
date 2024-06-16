import React from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "../components/PhotoList";
import PhotoFavButton from "../components/PhotoFavButton";

const PhotoDetailsModal = ({
  closeModal,
  photo,
  toggleFavourite,
  isFavorite,
  similarPhotos,
}) => {
  // Handle case when no photo is provided
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

  const {
    urls: { full: url } = {},
    description,
    user: {
      profile: profileImageUrl,
      name,
      location: { city = "", country = "" } = {},
    } = {},
  } = photo;

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
          <div style={{ position: "relative" }}>
            <img
              src={url}
              alt={description}
              className="photo-details-modal__image"
            />
            <div className="photo-details-modal__fav-icon">
              <PhotoFavButton
                photoId={photo.id}
                toggleFavourite={toggleFavourite}
                isFavorite={isFavorite}
              />
            </div>
            <p className="photo-details-modal__header">{description}</p>
            {profileImageUrl && name && (
              <div className="photo-details-modal__photographer-details">
                <img
                  src={profileImageUrl}
                  alt={name}
                  className="photo-details-modal__photographer-profile"
                />
                <div>
                  <p className="photo-details-modal__photographer-info">
                    {name}
                  </p>
                  {(city || country) && (
                    <p className="photo-details-modal__photographer-location">
                      {city}, {country}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
        {similarPhotos.length > 0 && (
          <div>
            <h2 className="photo-details-modal__header">Similar Photos</h2>
            <div className="photo-details-modal__images">
              <PhotoList
                photos={similarPhotos}
                toggleFavourite={toggleFavourite}
                favorites={[]}
                openModal={() => {}}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
