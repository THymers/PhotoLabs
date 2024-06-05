import React from "react";
import HomeRoute from "./components/HomeRoute";
import photos from "./mocks/photos"; // Import mock photos data
import topics from "./mocks/topics";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} />
    </div>
  );
};

export default App;
