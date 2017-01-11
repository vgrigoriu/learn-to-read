import React, { Component } from 'react';
import banana from './images/banana.jpg';
import Question from './Question';

class Game extends Component {
    render() {
        const item = {
            image: banana,
            name: 'banană'
        };
        const otherItems = [
            { name: 'barză' },
            { name: 'balon' }
        ];
        return (
            <Question item={item}
                      otherItems={otherItems} />
        );
    }
}

export default Game;