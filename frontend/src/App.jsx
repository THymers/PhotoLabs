import React from "react";
import PhotoList from "./components/PhotoList";
import TopicList from "./components/TopicList";
import "./App.scss";
const sampleTopics = [
  { id: "1", slug: "topic-1", title: "Nature" },
  { id: "2", slug: "topic-2", title: "Travel" },
  { id: "3", slug: "topic-3", title: "People" },
];
const App = () => {
  return (
    <div className="App">
      {/* Render the TopicList component with the sample topics */}
      <TopicList topics={sampleTopics} />
      {/* Render the PhotoList component */}
      <PhotoList />
    </div>
  );
};
export default App;
