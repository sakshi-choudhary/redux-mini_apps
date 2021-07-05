import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "mood", duration: "3:10" },
    { title: "without me", duration: "4:05" },
    { title: "mad at disney", duration: "2:15" },
    { title: "starboy", duration: "4:35" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
