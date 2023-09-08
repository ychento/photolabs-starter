import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavIcon from './FavIcon';



const TopNavigation = ({ hasFavouritePhotos, topics, onTopicSelect }) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} onTopicSelect={onTopicSelect} />
      <FavIcon selected={hasFavouritePhotos}/>
    </div>
  );
};

export default TopNavigation;