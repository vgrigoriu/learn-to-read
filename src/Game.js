import React, { Component } from 'react';
import banana from './images/banana.jpg';
import koala from './images/koala.jpg';
import panda1 from './images/panda1.jpg';
import panda2 from './images/panda2.jpg';
import panda3 from './images/panda3.jpg';
import Question from './Question';

class Game extends Component {
    constructor() {
        super();
        this.handleWrongAnswer = this.handleWrongAnswer.bind(this);
        this.handleCorrectAnswer = this.handleCorrectAnswer.bind(this);
    }

    render() {
        const panda = [panda1, panda2, panda3][Math.floor(Math.random() * 3)];
        const otherItems = [
            { name: 'urs koala', image: koala },
            { name: 'urs panda', image: panda },
            { name: 'banană', image: banana },
        ];
        const correctIndex = Math.floor(Math.random() * 3);
        return (
            <Question correctAnswerIndex={correctIndex}
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