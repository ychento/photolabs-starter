import { useState, useReducer, useEffect } from "react";
import photos from "mocks/photos";

const initialState = {
  photoData: [],
  topicData: [],
  isModalOpen: false,
  modalPhoto: null,
  favouritePhotos: [],
};

const actionTypes = {
  CLOSE_MODAL: "CLOSE_MODAL",
  TOGGLE_FAV: "TOGGLE_FAV",
  SET_PHOTO_SELECTED: "SET_PHOTO_SELECTED",
  SET_PHOTOS_DATA: "SET_PHOTOS_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
      };
    case actionTypes.TOGGLE_FAV:
      if (state.favouritePhotos.includes(action.photoId)) {
        const filteredPhotos = state.favouritePhotos.filter(
          (item) => item !== action.photoId
        );
        return {
          ...state,
          favouritePhotos: filteredPhotos,
        };
      } else {
        return {
          ...state,
          favouritePhotos: [...state.favouritePhotos, action.photoId],
        };
      }
    case actionTypes.SET_PHOTO_SELECTED:
      return {
        ...state,
        isModalOpen: true,
        modalPhoto: action.photo,
      };

    case actionTypes.SET_PHOTOS_DATA:
      return {
        ...state,
        photoData: action.payload,
      };
    case actionTypes.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload,
      };
    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: actionTypes.SET_PHOTOS_DATA, payload: data })
      )
      .catch((error) => {
        console.error("Error fetching photos data:", error);
      });

    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => 
        dispatch({ type: actionTypes.SET_TOPIC_DATA, payload: data })
      )
      .catch((error) => {
        console.error("Error fetching topic data:", error);
      });
  }, []);

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: actionTypes.CLOSE_MODAL });
  };

  const updateToFavPhotoIds = (photoId) => {
    dispatch({ type: actionTypes.TOGGLE_FAV, photoId });
  };

  const setPhotoSelected = (photo) => {
    dispatch({ type: actionTypes.SET_PHOTO_SELECTED, photo });
  };

  const onTopicSelect = (id) => {
    fetch(`/api/topics/photos/${id}`)
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: actionTypes.SET_PHOTOS_DATA, payload: data })
      );
  };

  return {
    state,
    onClosePhotoDetailsModal,
    updateToFavPhotoIds,
    setPhotoSelected,
    onTopicSelect,
  };
};

export default useApplicationData;
