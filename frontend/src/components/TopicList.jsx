import React from "react";
import TopicListItem from "./TopicListItem";

import "../styles/TopicList.scss";

const TopicList = ({ topics }) => {
  return (
    <ul className="topic-list">
      {topics.map((topic) => (
        <li key={topic.id}>
          <TopicListItem title={topic.title} />
        </li>
      ))}
    </ul>
  );
};

export default TopicList;
