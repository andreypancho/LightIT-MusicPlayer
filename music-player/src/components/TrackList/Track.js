import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
    render() {
        return (
            <div className='track-container'>
                <div className='track-img'>
                    <img src={this.props.track.album.cover_small} alt={this.props.track.title}/>
                </div>
                <div className='track-info'>{this.props.track.artist.name} - {this.props.track.title}</div>
            </div>
        );
    }
}

export default Track;
