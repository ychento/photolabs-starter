import React, { useState } from "react";
import TopNavigation from "./TopNavigationBar";
import "../styles/HomeRoute.scss";
import PhotoList from "./PhotoList";
import TopicList from "./TopicList";

const HomeRoute = ({
  openModal,
  topics,
  photos,
  favouritePhotos,
  toggleFavourite,
  onTopicSelect,
}) => {
  return (
    <div className="home-route">
      <div className="top-nav-bar">
        <TopNavigation
          hasFavouritePhotos={favouritePhotos.length > 0}
          topics={topics}
          onTopicSelect={onTopicSelect}
        />
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
