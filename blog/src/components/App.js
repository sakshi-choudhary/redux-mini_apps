import React from "react";
import PostList from "./PostList";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-indigo-200 ">
      <h1 className="text-7xl my-10 font-extrabold text-indigo-800 opacity-80">
        Blog
      </h1>
      <PostList />
    </div>
  );
};

export default App;
