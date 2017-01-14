import React, { Component } from 'react';
import { Alert, Button } from 'react-bootstrap';
import banana from './images/banana.jpg';
import koala from './images/koala.jpg';
import panda1 from './images/panda1.jpg';
import panda2 from './images/panda2.jpg';
import panda3 from './images/panda3.jpg';
import popândău1 from './images/popândău1.jpg';
import popândău2 from './images/popândău2.jpg';
import popice1 from './images/popice1.jpg';
import popice2 from './images/popice1.jpg';
import păpădie1 from './images/păpădie1.jpg';
import păpădie2 from './images/păpădie2.jpg';
import Question from './Question';

const questions = [
    [
        { name: 'urs koala', images: [koala] },
        { name: 'urs panda', images: [panda1, panda2, panda3] },
        { name: 'banană', images: [banana] }
    ],
    [
        { name: 'popândău', images: [popândău1, popândău2] },
        { name: 'popice', images: [popice1, popice2] },
        { name: 'păpădie', images: [păpădie1, păpădie2] }
    ]
];

function chooseQuestion() {
    const questionIndex = Math.floor(Math.random() * questions.length);
    const question = questions[questionIndex];
    return question.map(option => ({
        name: option.name,
        image: option.images[Math.floor(Math.random() * option.images.length)]
    }));
}

class Game extends Component {
    constructor() {
        super();
        this.handleWrongAnswer = this.handleWrongAnswer.bind(this);
        this.handleCorrectAnswer = this.handleCorrectAnswer.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.state = {
            isAnswerCorrect: undefined,
            question: chooseQuestion(),
            correctIndex: Math.floor(Math.random() * 3),
        };
    }

    render() {
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
                        allItems={this.state.question}
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
            question: chooseQuestion(),
            correctIndex: Math.floor(Math.random() * 3),
        });
    }
}

export default Game;