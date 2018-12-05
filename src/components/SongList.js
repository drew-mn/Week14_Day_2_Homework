import React from 'react';
import Song from './Song';

const SongList = ({songs}) => {

  const chart = songs.map((song, index) => {
    return (
      <Song key={index}
            title={song["im:name"].label}
            artist={song["im:artist"].label}/>
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
