import React from "react";
// import PhotoListItem from "./components/PhotoListItem";
import PhotoList from "./components/PhotoList";
import "./App.scss";

const App = () => {
  // const sampleDataForPhotoListItem = [
  //   {
  //     id: "1",
  //     location: {
  //       city: "Montreal",
  //       country: "Canada",
  //     },
  //     imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  //     username: "Joe Example",
  //     profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  //   },
  //   {
  //     id: "2",
  //     location: {
  //       city: "New York",
  //       country: "USA",
  //     },
  //     imageSource: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
  //     username: "Jane Doe",
  //     profile: `${process.env.PUBLIC_URL}/profile-2.jpg`,
  //   },
  //   {
  //     id: "3",
  //     location: {
  //       city: "London",
  //       country: "UK",
  //     },
  //     imageSource: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
  //     username: "John Smith",
  //     profile: `${process.env.PUBLIC_URL}/profile-3.jpg`,
  //   },
  // ];

  return (
    <div className="App">
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
      <PhotoList />
    </div>
  );
};

export default App;
