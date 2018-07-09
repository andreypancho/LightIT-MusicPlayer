import React, { Component } from 'react';
import './TrackList.css';
import Track from './Track';

class TrackList extends Component {



    render() {
        return (
            <div>

                {
                    this.props.tracks.map(track => <Track track={track} key={track.id} />)
                }

            </div>
        );
    }
}

export default TrackList;
