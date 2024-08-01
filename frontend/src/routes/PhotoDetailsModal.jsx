// import React from "react";
// import "../styles/PhotoDetailsModal.scss";
// import closeSymbol from "../assets/closeSymbol.svg";
// import PhotoList from "../components/PhotoList";
// import PhotoFavButton from "../components/PhotoFavButton";

// const PhotoDetailsModal = ({
//   closeModal,
//   photo,
//   toggleFavourite,
//   isFavorite,
//   similarPhotos,
//   favorites,
// }) => {
//   if (!photo) {
//     return (
//       <div className="photo-details-modal">
//         <button
//           className="photo-details-modal__close-button"
//           onClick={closeModal}
//         >
//           <img src={closeSymbol} alt="close symbol" />
//         </button>
//         <div className="photo-details-modal__content">
//           <p>No photo available</p>
//         </div>
//       </div>
//     );
//   }

//   const {
//     urls: { full: url } = {},
//     description,
//     user: {
//       profile: profileImageUrl,
//       name,
//       location: { city = "", country = "" } = {},
//     } = {},
//   } = photo;

//   return (
//     <div className="photo-details-modal">
//       <button
//         className="photo-details-modal__close-button"
//         onClick={closeModal}
//       >
//         <img src={closeSymbol} alt="close symbol" />
//       </button>
//       <div className="photo-details-modal__content">
//         {url && (
//           <div style={{ position: "relative" }}>
//             <img
//               src={url}
//               alt={description}
//               className="photo-details-modal__image"
//             />
//             <div className="photo-details-modal__fav-icon">
//               <PhotoFavButton
//                 photoId={photo.id}
//                 toggleFavourite={toggleFavourite}
//                 isFavorite={isFavorite}
//               />
//             </div>
//           </div>
//         )}
//         <div className="photo-details-modal__photographer-details">
//           {profileImageUrl && name && (
//             <>
//               <img
//                 src={profileImageUrl}
//                 alt={name}
//                 className="photo-details-modal__photographer-profile"
//               />
//               <div>
//                 <p className="photo-details-modal__photographer-info">{name}</p>
//                 <p className="photo-details-modal__photographer-location">
//                   {`${city}, ${country}`}
//                 </p>
//               </div>
//             </>
//           )}
//         </div>
//         <p className="photo-details-modal__header">{description}</p>
//         {similarPhotos.length > 0 && (
//           <div>
//             <h2 className="photo-details-modal__header">Similar Photos</h2>
//             <div className="photo-details-modal__images">
//               <PhotoList
//                 photos={similarPhotos}
//                 toggleFavourite={toggleFavourite}
//                 favorites={favorites}
//                 openModal={closeModal}
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PhotoDetailsModal;

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
  favorites,
}) => {
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

  console.log("Photo object:", photo); // Add this line to log the photo object

  const {
    urls: { full: url } = {},
    description,
    user: { profile: profileImageUrl, name } = {},
    location: { city, country } = {}, // Adjust this destructuring
  } = photo;

  console.log("City:", city); // Add this line to log the city
  console.log("Country:", country); // Add this line to log the country

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
          </div>
        )}
        <div className="photo-details-modal__photographer-details">
          {profileImageUrl && name && (
            <>
              <img
                src={profileImageUrl}
                alt={name}
                className="photo-details-modal__photographer-profile"
              />
              <div>
                <p className="photo-details-modal__photographer-info">{name}</p>
                {city || country ? (
                  <p className="photo-details-modal__photographer-location">
                    {`${city}, ${country}`}
                  </p>
                ) : (
                  <p className="photo-details-modal__photographer-location">
                    Location not available
                  </p>
                )}
              </div>
            </>
          )}
        </div>
        <p className="photo-details-modal__header">{description}</p>
        {similarPhotos.length > 0 && (
          <div>
            <h2 className="photo-details-modal__header">Similar Photos</h2>
            <div className="photo-details-modal__images">
              <PhotoList
                photos={similarPhotos}
                toggleFavourite={toggleFavourite}
                favorites={favorites}
                openModal={closeModal}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;