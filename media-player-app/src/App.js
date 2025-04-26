import React from 'react';
import { MediaPlayer } from 'win95-media-player';
import './App.css';

const playlist = [
  {
    url: 'https://archive.org/download/CC1301_windows_95/CC1301_windows_95_512kb.mp4',
    title: 'Windows 95 Intro',
  }
];

function App() {
  return (
    <div style={{ padding: '40px', maxWidth: '400px', margin: 'auto' }}>
      <MediaPlayer
        playlist={playlist}
        showVideo
        fullscreenEnabled
      />
    </div>
  );
}

export default App;
