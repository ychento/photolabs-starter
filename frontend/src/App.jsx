import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "components/HomeRoute";
// import topics from "mocks/topics";
// import photos from "mocks/photos";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

const App = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [modalPhoto, setModalPhoto] = useState(null);
  // const [favouritePhotos, setFavouritePhotos] = useState([]);

  // const toggleFavourite = (photoId) => {
  //   if (favouritePhotos.includes(photoId)) {
  //     setFavouritePhotos((prev) => {
  //       const filteredPhotos = prev.filter((item) => item !== photoId);
  //       return filteredPhotos;
  //     });
  //   } else {
  //     setFavouritePhotos((prev) => [...prev, photoId]);
  //   }
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  // const openModal = (id) => {
  //   setIsModalOpen(true);
  //   setModalPhoto(photos[id]);
  //   console.log(photos[id]);
  // };

  const {
    state,
    setPhotoSelected,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    onTopicSelect,
  } = useApplicationData();

  console.log(state);

  return (
    <div className="App">
      <HomeRoute
        topics={state.topicData}
        photos={state.photoData}
        openModal={setPhotoSelected}
        favouritePhotos={state.favouritePhotos}
        toggleFavourite={updateToFavPhotoIds}
        onTopicSelect={onTopicSelect}
      />

      {state.isModalOpen ? (
        <PhotoDetailsModal
          closeModal={onClosePhotoDetailsModal}
          modalPhoto={state.modalPhoto}
          toggleFavourite={updateToFavPhotoIds}
          favouritePhotos={state.favouritePhotos}
        />
      ) : null}
    </div>
  );
};
export default App;
