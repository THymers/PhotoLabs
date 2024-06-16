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
//     user: photographer = {},
//     similarPhotos = [],
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
//           <div>
//             <img
//               src={url}
//               alt={description}
//               className="photo-details-modal__image"
//             />
//             <p className="photo-details-modal__header">{description}</p>
//             {photographer.profileImageUrl && photographer.name && (
//               <div className="photo-details-modal__photographer-details">
//                 <img
//                   src={photographer.profileImageUrl}
//                   alt={photographer.name}
//                   className="photo-details-modal__photographer-profile"
//                 />
//                 <div>
//                   <p className="photo-details-modal__photographer-info">
//                     {photographer.name}
//                   </p>
//                   <p className="photo-details-modal__photographer-location">
//                     {photographer.location.city},{" "}
//                     {photographer.location.country}
//                   </p>
//                 </div>
//               </div>
//             )}
//             <PhotoFavButton
//               photoId={photo.id}
//               toggleFavourite={toggleFavourite}
//               isFavorite={isFavorite}
//             />
//           </div>
//         )}
//         {similarPhotos.length > 0 && (
//           <div>
//             <h2 className="photo-details-modal__header">Similar Photos</h2>
//             <div className="photo-details-modal__images">
//               <PhotoList
//                 photos={similarPhotos}
//                 toggleFavourite={toggleFavourite}
//                 favorites={[]}
//                 openModal={() => {}}
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

  const {
    urls: { full: url } = {},
    description,
    user: photographer = {},
    similarPhotos = [],
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
            {" "}
            {/* Add position: relative here */}
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
            {photographer.profileImageUrl && photographer.name && (
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
                    {photographer.location.city},{" "}
                    {photographer.location.country}
                  </p>
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