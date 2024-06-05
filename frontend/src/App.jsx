import React from "react";
import PhotoList from "./components/PhotoList";
import TopNavigationBar from "./components/TopNavigationBar";
import "./App.scss";

const sampleTopics = [
  { id: "1", slug: "topic-1", title: "Nature" },
  { id: "2", slug: "topic-2", title: "Travel" },
  { id: "3", slug: "topic-3", title: "People" },
];

const App = () => {
  const isFavPhotoExist = true;
  return (
    <div className="App">
      <TopNavigationBar
        topics={sampleTopics}
        isFavPhotoExist={isFavPhotoExist}
      />
      <PhotoList />
    </div>
  );
};

export default App;
