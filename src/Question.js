import React from 'react';
import { Button } from 'react-bootstrap';

export default function Question(props) {
    const correctAnswer = props.allItems[props.correctAnswerIndex];
    const options = props.allItems.map(item => {
        const text = item.name.toUpperCase();
        const handler = (item === correctAnswer)
                      ? props.handleCorrectAnswer
                      : props.handleWrongAnswer;
        return (
            <Button onClick={handler} key={text}>
                {text}
            </Button>
        );
    });

    return (
        <div>
            <div>
                <img src={correctAnswer.image}
                    alt={correctAnswer.name}
                    title={correctAnswer.name} />
            </div>
            {options}
        </div>
    );
}