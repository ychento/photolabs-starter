import { useState } from "react";
import photos from "mocks/photos";

const useApplicationData = () => {
  const [state, setState] = useState({
    isModalOpen: false,
    modalPhoto: null,
    favouritePhotos: [],
  });

  const onClosePhotoDetailsModal = () => {
    console.log("onClosePhotoDetailsModal");
    setState({
      ...state,
      isModalOpen: false,
    });
  };

  const updateToFavPhotoIds = (photoId) => {
    console.log("updateToFavPhotoIds");
    if (state.favouritePhotos.includes(photoId)) {
      setState((prev) => {
        const filteredPhotos = prev.favouritePhotos.filter((item) => item !== photoId);
        return {
          ...prev,
          favouritePhotos: filteredPhotos,
        };
      });
    } else {
      setState((prev) => {
        return {
          ...prev,
          favouritePhotos: [...prev.favouritePhotos, photoId],
        };
      });
    }
  };

  const setPhotoSelected = (id) => {
    console.log("setPhotoSelected");
    setState({
      ...state,
      isModalOpen: true,
      modalPhoto: photos[id],
    });
  };

  return {
    state,
    onClosePhotoDetailsModal,
    updateToFavPhotoIds,
    setPhotoSelected,
  };
};

export default useApplicationData;
