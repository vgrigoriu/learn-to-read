import React, { Component } from 'react';
import banana from './images/banana.jpg';
import Question from './Question';

class Game extends Component {
    constructor() {
        super();
        this.handleWrongAnswer = this.handleWrongAnswer.bind(this);
        this.handleCorrectAnswer = this.handleCorrectAnswer.bind(this);
    }

    render() {
        const otherItems = [
            { name: 'barză' },
            { name: 'balon' },
            {
                image: banana,
                name: 'banană'
            }
        ];
        return (
            <Question correctAnswerIndex={2}
                      allItems={otherItems}
                      handleWrongAnswer={this.handleWrongAnswer}
                      handleCorrectAnswer={this.handleCorrectAnswer} />
        );
    }

    handleWrongAnswer() {
        alert('NU');
    }

    handleCorrectAnswer() {
        alert('DA');
    }
}

export default Game;