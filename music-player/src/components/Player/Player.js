import React, { Component } from 'react';
import './Player.css';

class Player extends Component {
    render() {
        return (
            <div className='player-container'>
                <div className='player-img-container'>
                    <img src='http://via.placeholder.com/250x250' alt={''}/>
                </div>
                <div className='player-buttons-container'>
                    <button className='btn'>Prev</button>
                    <button className='btn'>Play</button>
                    <button className='btn'>Stop</button>
                    <button className='btn'>Next</button>
                </div>
            </div>
        );
    }
}

export default Player;
