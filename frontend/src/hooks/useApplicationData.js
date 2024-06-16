import { useReducer, useEffect } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
  CLOSE_PHOTO_DETAILS: "CLOSE_PHOTO_DETAILS",
};

const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  favorites: [],
  photoData: [],
  topicData: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favorites: [...state.favorites, action.payload.id] };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favorites: state.favorites.filter(
          (favPhotoId) => favPhotoId !== action.payload.id
        ),
      };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload.photos };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload.topics };
    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload.photo };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, isModalOpen: true };
    case ACTIONS.CLOSE_PHOTO_DETAILS:
      return { ...state, isModalOpen: false, selectedPhoto: null };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch("/api/photos");
        const photos = await response.json();
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos } });
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    const fetchTopics = async () => {
      try {
        const response = await fetch("/api/topics");
        const topics = await response.json();
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topics } });
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    };

    fetchPhotos();
    fetchTopics();
  }, []);

  const openModal = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS });
  };

  const toggleFavourite = (photoId) => {
    if (state.favorites.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: photoId } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: photoId } });
    }
  };

  return {
    isModalOpen: state.isModalOpen,
    selectedPhoto: state.selectedPhoto,
    favorites: state.favorites,
    photoData: state.photoData,
    topicData: state.topicData,
    openModal,
    closeModal,
    toggleFavourite,
  };
};

export default useApplicationData;

// import { useState } from "react";

// const useApplicationData = () => {
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
//     setFavorites((prevFavorites) => {
//       if (prevFavorites.includes(photoId)) {
//         return prevFavorites.filter((favPhotoId) => favPhotoId !== photoId);
//       } else {
//         return [...prevFavorites, photoId];
//       }
//     });
//   };

//   return {
//     isModalOpen,
//     selectedPhoto,
//     favorites,
//     openModal,
//     closeModal,
//     toggleFavourite,
//   };
// };

// export default useApplicationData;
