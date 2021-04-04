import React from "react";
import Player from "./components/Player";
import Songs from "./components/Songs";
import './styles/app.scss';


function App() {
  return (
    <div className="App">
      <Songs />
      <Player />
    </div>
  );
}

export default App;
