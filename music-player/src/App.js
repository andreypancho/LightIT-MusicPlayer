import React, { Component } from 'react';
import TrackList from './components/TrackList/TrackList';
import Player from './components/Player/Player';
import './App.css';
import axios from 'axios';
import Login from './components/Auth/Login';

import {Provider} from 'react-redux';
import rootReducer from './reducers'
import { applyMiddleware, compose, createStore } from 'redux'
import reduxThunk from 'redux-thunk';

const store = createStore(rootReducer, compose(
    applyMiddleware(reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
));


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
        <Provider store={store}>
          <div className='container'>
              <Login/>
            {/*<Player></Player>*/}
            {/*<TrackList tracks={this.state.tracks}></TrackList>*/}
          </div>
        </Provider>
    );
  }
}

export default App;
