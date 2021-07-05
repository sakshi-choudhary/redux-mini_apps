import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";
import SongDetail from "./SongDetail";

const SongList = ({ songs, selectSong }) => {
  const _renderList = () => {
    return songs.map((song) => (
      <div key={song.title} className="flex border-b-2 my-3">
        <p className="m-5 text-3xl text-gray-700 font-bold">{song.title}</p>
        <button
          onClick={() => {
            selectSong(song);
          }}
          className="text-white  rounded-2xl shadow-xl font-extrabold p-5 m-5 hover:bg-pink-400 bg-pink-300 focus:border-2 focus:border-pink-200"
        >
          select
        </button>
      </div>
    ));
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <h2 className="text-gray-500 text-2xl my-10 font-semibold"> song list</h2>
      <div className="flex">
        <div>{_renderList()}</div>
        <div className="p-20 bg-pink-100 mx-20 rounded-2xl shadow-xl">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    songs: state.songs,
    selectSong: state.selectSong,
  };
};

export default connect(mapStateToProps, {
  selectSong,
})(SongList);
