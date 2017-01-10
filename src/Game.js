import React, { Component } from 'react';
import banana from './images/banana.jpg';

class Game extends Component {
    render() {
        return (
            <div>
                <img src={banana} alt='banană' />
                <div onClick={() => alert('balon')}>BALON</div>
                <div onClick={() => alert('barză')}>BARZĂ</div>
                <div onClick={() => alert('banană')}>BANANĂ</div>
            </div>
        );
    }
}

export default Game;