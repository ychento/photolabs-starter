import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";



const PhotoList = ({ favouritePhotos = [], toggleFavourite, openModal, photos }) => {

  return (
    <ul className="photo-list">
      {photos.map((photoData) => (
        <PhotoListItem
          key={photoData.id}
          id={photoData.id}
          location={photoData.location}
          imageSource={photoData.urls.regular}
          username={photoData.user.username}
          profile={photoData.user.profile}
          toggleFavourite={toggleFavourite}
          isFavourite={favouritePhotos.includes(photoData.id)}
          onClick={() => openModal(photoData)}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
