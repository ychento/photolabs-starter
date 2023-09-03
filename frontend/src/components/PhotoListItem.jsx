import React, { useState } from "react";
import "../styles/PhotoListItem.scss";
import FavIcon from "./FavIcon";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({
  id,
  location,
  imageSource,
  username,
  profile,
  displayAlert,
  toggleFavourite,
  isFavourite,
  onClick,
}) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton
        photoId={id}
        toggleFavourite={toggleFavourite}
        isFavourite={isFavourite}
      />
      <img
        className="photo-list__image"
        src={imageSource}
        alt={`Photo by ${username}`}
        onClick={onClick}
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={profile}
          alt={`Profile of ${username}`}
        />
        <div className="photo-list__user-info">
          <span>{username}</span>
          <br />
          <span className="photo-list__user-location">
            {location.city} {location.country}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
