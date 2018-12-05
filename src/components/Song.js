import React from 'react';

const Song = (props) => {

  return (
      <div>
        <li>
          {props.title} by {props.artist}
        </li>
      </div>
  )

}

export default Song;
