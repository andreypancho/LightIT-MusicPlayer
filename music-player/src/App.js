import React, { Component } from 'react';
import TrackList from './components/TrackList/TrackList';
import Player from './components/Player/Player';
import './App.css';
import axios from 'axios';

class App extends Component {

    state = {
        tracks: []
    };

    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=eminem`)
            .then(res => {
                const tracks = res.data.data;
                this.setState({ tracks });
            })
    }

  render(){
    return (
      <div className='container'>
        <Player></Player>
        <TrackList tracks={this.state.tracks}></TrackList>
      </div>
    );
  }
}

export default App;
