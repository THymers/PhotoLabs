import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics, fetchPhotosByTopic }) => {
  return (
    <ul className="topic-list">
      {topics.map((topic) => (
        <li key={topic.id}>
          <TopicListItem
            title={topic.title}
            onClick={() => fetchPhotosByTopic(topic.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default TopicList;
