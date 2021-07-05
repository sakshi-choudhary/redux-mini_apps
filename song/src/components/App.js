import React from "react";
import SongList from "./SongList";

function App() {
  return (
    <div className="App flex justify-items-center items-center flex-col bg-pink-50 min-h-screen">
      <h1 className="text-9xl text-pink-900 opacity-60 my-10 font-extrabold">
        Songs
      </h1>
      <SongList />
    </div>
  );
}

export default App;
