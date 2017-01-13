import React, { Component } from 'react';
import { Alert, Button } from 'react-bootstrap';
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
        this.nextQuestion = this.nextQuestion.bind(this);
        this.state = {
            isAnswerCorrect: undefined,
            correctIndex: Math.floor(Math.random() * 3),
            pandaIndex: Math.floor(Math.random() * 3)
        };
    }

    render() {
        const panda = [panda1, panda2, panda3][this.state.pandaIndex];
        const otherItems = [
            { name: 'urs koala', image: koala },
            { name: 'urs panda', image: panda },
            { name: 'banană', image: banana },
        ];
        let result = null;
        if (this.state.isAnswerCorrect) {
            result = (
                <Alert bsStyle='success'>
                    Bravo!&nbsp;
                    <Button onClick={this.nextQuestion}>Mai departe &gt;</Button>
                </Alert>
            );
        } else if (this.state.isAnswerCorrect === false) {
            result = <Alert bsStyle='warning'>Mai încearcă...</Alert>;
        }
        return (
            <div>
                <Question correctAnswerIndex={this.state.correctIndex}
                        allItems={otherItems}
                        handleWrongAnswer={this.handleWrongAnswer}
                        handleCorrectAnswer={this.handleCorrectAnswer} />
                {result}
            </div>
        );
    }

    handleWrongAnswer() {
        this.setState({ isAnswerCorrect: false });
    }

    handleCorrectAnswer() {
        this.setState({ isAnswerCorrect: true });
    }

    nextQuestion() {
        this.setState({
            isAnswerCorrect: undefined,
            correctIndex: Math.floor(Math.random() * 3),
            pandaIndex: Math.floor(Math.random() * 3)
        });
    }
}

export default Game;