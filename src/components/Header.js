import React from 'react';
import './Header.css';

const Header = (props) => {
  return (
    <div>
      <h1>iTunes Chart</h1>
      <p>New content arrives on iTunes all the time. Here you can see what’s new this week <br></br> and browse the top 100 songs, albums, TV programmes, films, books, apps and more.</p>

        <select onChange={props.handleSelectChange}>
          {props.genres.map(genre => {
            return <option key={genre.name} value={genre.url}>{genre.name}</option>
          })}
        </select>
        
      </div>
 )}

export default Header;
