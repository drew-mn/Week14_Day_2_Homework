import React from 'react';
import './Song.css';
import ReactAudioPlayer from 'react-audio-player';

const Song = (props) => {

  return (
      <div className = "chart-div">
        <li>
        <img src={props.image}alt='Album Art'/>
        {props.title}<br></br>
        {props.artist}
        <audio
          src={props.sample}
          controls
        />

        </li>
      </div>
  )

}

export default Song;
