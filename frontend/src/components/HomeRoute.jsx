import React, { useState } from "react";
import TopNavigation from "./TopNavigationBar";
import "../styles/HomeRoute.scss";
import PhotoList from "./PhotoList";
import TopicList from "./TopicList";
import photos from "mocks/photos";

const HomeRoute = ({
  openModal,
  topics,
  photos,
  favouritePhotos,
  toggleFavourite,
}) => {
  return (
    <div className="home-route">
      <div className="top-nav-bar">
        <TopNavigation hasFavouritePhotos={favouritePhotos.length > 0} />
      </div>

      <div className="photo-list">
        <PhotoList
          favouritePhotos={favouritePhotos}
          toggleFavourite={toggleFavourite}
          openModal={openModal}
          photos={photos}
        />
      </div>
    </div>
  );
};

export default HomeRoute;
