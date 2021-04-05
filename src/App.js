import React, { useState } from "react";
import Player from "./components/Player";
import Songs from "./components/Songs";
import './styles/app.scss';
import data from './util'


function App() {

  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong]= useState(songs[12])
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div className="App">
      <Songs currentSong={currentSong} />
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} />
    </div>
  );
}

export default App;
 