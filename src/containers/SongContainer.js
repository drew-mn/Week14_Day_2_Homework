import React from 'react';
import SongList from '../components/SongList';
import './SongContainer.css';
import Header from '../components/Header';

class SongContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: []
    }
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  componentDidMount(){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(response => response.json())
    .then(data => this.setState({songs: data.feed.entry}));
  }

  handleSelectChange(event) {
  this.songs.loadSongs(event.target.value);
}

  render(){
    return (
      <div>
        <Header
          handleSelectChange={this.handleSelectChange}
          genres={this.props.genres}/>
        <SongList songs={this.state.songs}/>

      </div>
    )
  }



}

export default SongContainer;
