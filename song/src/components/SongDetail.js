import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  return (
    <div className="flex flex-col justify-center text-3xl text-gray-800">
      <p className="text-5xl mb-7 font-bold ">Selected</p>
      {!song && <p>Select a song</p>}
      <h1>{song?.title}</h1>
      <h2>{song?.duration}</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
