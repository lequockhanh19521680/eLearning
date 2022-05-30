import React, { Component, useEffect, useRef, useState } from 'react'
import Question from './question/Question'
import Answer from './answer/Answer'
import Countdown from 'react-countdown'
import Title from './title/Title'
import { apiUrl } from '../../contexts/constants'
import Modal from 'react-bootstrap/Modal'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalFooter from 'react-bootstrap/ModalFooter'
import './quiz.css'
import axios from 'axios'
const Quiz = (props) => {

    const [Show, setShow] = useState(false)
    const form = {
        ...props.exam.exam,
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }
    const clockRef = useRef(null)
    const [state, setState] = useState(form)
    const { questions, answers, correctAnswer, clickedAnswer, step, score } = state;
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {

            return <span> 0:0:0</span>
        } else {
            // Render a countdown
            return <span>{hours}:{minutes}:{seconds}</span>;
        }
    }
    const [clock, setClock] = useState(<Countdown ref={clockRef} date={Date.now() + props.exam.time * 60000} renderer={renderer} onComplete={() => { nextStep(Object.keys(questions).length) }} />)

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
    //done event
    const handleDone = async () => {
        try {
            let result = {
                lessonId: props.exam._id,
                userId: props.User._id,
                scoreTotal: score
            }
            const rs = await axios.post(`${apiUrl}/score/`, result)
            console.log(rs.data, rs.status);
        }
        catch (error) {
            console.log(error);
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
    const handleClose = () => setShow(false)
    const handleShow = async (id, type) => {
        setShow(true);

    }
    const ConfirmModal =
        (<div>
            <Modal
                show={Show}
                onHide={handleClose}
                keyboard={false}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <ModalHeader>
                    <Modal.Title>Confirm to complete the Exam?</Modal.Title>
                </ModalHeader>
                <ModalBody>
                    <span>
                        Yes and your result will be Saved<br />
                        No to continue!
                    </span>
                </ModalBody>
                <ModalFooter>
                    <button className='btn btn-primary ' style={{ paddingLeft: '30px', paddingRight: '30px', paddingTop: '10px', paddingBottom: '10px' }} onClick={handleDone}>Yes</button>
                    <button className='btn btn-secondary ' style={{ paddingLeft: '30px', paddingRight: '30px', paddingTop: '10px', paddingBottom: '10px' }} onClick={handleClose}>
                        No
                    </button>
                </ModalFooter>

            </Modal>
        </div >)
    useEffect(() => {
        const fetchData = async () => {
            let f = {
                lessonId: props.exam._id,
                userId: props.User._id
            }
            console.log(f);
            const rs = await axios.get(`${apiUrl}/score/exam`, f )
            console.log(rs.then((res) => res))


        }
        fetchData();

    }, [])
    return (
        <React.Fragment>
            <div className='Time text-center my-4'>
                {clock}
            </div>
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
            <div className='text-end mt-4'>
                <button className='btn btn-primary px-4' onClick={handleShow}>Done</button>
            </div>
            {ConfirmModal}
        </React.Fragment>
    )
}

export default Quiz