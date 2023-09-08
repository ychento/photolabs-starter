import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map(topicData => (
        <TopicListItem
          key={topicData.id}
          label={topicData.title} // Pass the label prop
          topicId={topicData.id} // add this
          onTopicSelect={props.onTopicSelect}
        />
      ))}
    </div>
  );
};


export default TopicList;
