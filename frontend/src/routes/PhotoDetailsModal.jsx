import React, { useState } from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = ({
  closeModal,
  modalPhoto,
  toggleFavourite,
  isFavourite,
  favouritePhotos,
}) => {
  const similarPhotos = Object.keys(modalPhoto.similar_photos).map((photo) => {
    return modalPhoto.similar_photos[photo];
  });

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={closeModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__images">
        <div className="photo-details-modal__image-container">
          <PhotoFavButton
            photoId={modalPhoto.id}
            toggleFavourite={toggleFavourite}
            isFavourite={favouritePhotos.includes(modalPhoto.id)}
          />
          <img
            className="photo-details-modal__image"
            src={modalPhoto.urls.full}
            alt="Photo"
          />
        </div>
      </div>

      <span className="photo-details-modal__header"> Similar Photos </span>

      <div>
        <PhotoList
          favouritePhotos={favouritePhotos}
          toggleFavourite={toggleFavourite}
          photos={similarPhotos}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
