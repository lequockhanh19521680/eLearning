import React, { Component, useState } from 'react'
import Question from './question/Question'
import Answer from './answer/Answer'
const Quiz = (props) => {
    console.log(props);
    const form = {
        ...props.exam.exam,
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }
  /*   const form = {
        quiestions: {
            1: 'What US city is known as the "birthplace of jazz"?',
            2: 'What is the capital of Greece?',
            3: 'What planet gave birth to Superman?'
        },
        answers: {
            1: {
                1: 'Chicago',
                2: 'New Orleans',
                3: 'New York'
            },
            2: {
                1: 'Athens',
                2: 'Patras',
                3: 'Kalamata'
            },
            3: {
                1: 'Krypton',
                2: 'Mars',
                3: 'Saturn'
            }
        },
        correctAnswers: {
            1: '2',
            2: '1',
            3: '1'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    } */
    const [state, setState] = useState(form)
    // the method that checks the correct answer
    const checkAnswer = answer => {
        const { correctAnswers, step, score } = state;
        if (answer === correctAnswers[step]) {
            setState({
                ...state,
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        } else {
            setState({
                ...state,
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    // method to move to the next question
    const nextStep = (step) => {
        setState({
            ...state,
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }
    const { questions, answers, correctAnswer, clickedAnswer, step, score } = state;
    return (
        <div className='App'>
            <div className="Content">
                {step <= Object.keys(questions).length ?
                    (<>
                        <Question
                            question={questions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                            className="NextStep btn btn-info"
                            disabled={
                                clickedAnswer && Object.keys(questions).length >= step
                                    ? false : true
                            }
                            onClick={() => { nextStep(step) }}>Next</button>
                    </>) : (
                        <div className="finalPage">
                            <h1>You have completed the quiz!</h1>
                            <p>Your score is: {score} of {Object.keys(questions).length}</p>
                            <p>Thank you!</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Quiz