import React from 'react';
import Song from './Song';
import './SongList.css';


const SongList = ({songs}) => {

  const chart = songs.map((song, index) => {
    return (
      <Song key={index}
            title={song["im:name" ].label}
            artist={song["im:artist"].label}
            image={song["im:image"][2].label}
            sample={song.link[1].attributes.href}/>
    )
  });

  return (
    <div className="song-list">
      <ol>
        {chart}
      </ol>
    </div>

  )

}

export default SongList;
