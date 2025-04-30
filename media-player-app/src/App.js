import React from 'react';
import { MediaPlayer } from 'win95-media-player';

const playlist = [
  {
    url: 'https://archive.org/download/CC1301_windows_95/CC1301_windows_95_512kb.mp4',
    title: 'Computer Chronicles - Windows 95'
  }
];

function App() {
  return (
    <div className="App">
      <MediaPlayer
        className="player"
        playlist={playlist}
        showVideo
        fullscreenEnabled
      />
    </div>
  );
}

export default App;

