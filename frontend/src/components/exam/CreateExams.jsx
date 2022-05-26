import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/esm/FormGroup'
import axios from 'axios'
import { apiUrl } from '../../contexts/constants'
import Accordion from '../accordion/Accordion';
import AlertMessage from '../../pages/layout/AlertMessage'
import { v4 as uuidv4 } from 'uuid';

import './Exams.css'
const CreateExams = ({ props }) => {
    const initialForm = {
        name: '',
        subjectId: props.Subjects[0]._id,
        classId: props.Classes[0]._id,
        userId: props.UserId,
        content: [],
        exam: {},
        type: "EXAM"
    }
    const [validated, setValidated] = useState(false);
    const [examForm, setexamForm] = useState(initialForm)
    const { name, subjectId, classId } = examForm
    const [inputList, setInputList] = useState([]);
    const [content, setContent] = useState(true)
    const onUpdate = props.funcUpdate
    const [alert, setAlert] = useState(null)
    const onChangexamForm = e => {
        setexamForm({
            ...examForm,
            [e.target.name]: e.target.value,

        })
        setAlert(null)
    }
    const onAddBtnClick = event => {
        setInputList(inputList.concat(<Content key={uuidv4()} />))
        setContent(false)

    }
    const handleDelete = (pos) => {
        console.log(pos);
        let rs = []
        for (let i = 0; i < inputList.length; i++) {
            if (i !== pos) {
                console.log(inputList[i], inputList[pos]);
                rs = rs.concat(inputList[i])
            }
        }
        setInputList(rs)
    }
    //
    const handleSubmit = async () => {
        const form = document.getElementById('formExam')
        if (form.checkValidity() === false) {
            setValidated(true)

            console.log('fail')
        }
        else {
            let ques = document.getElementsByName('ques')
            let tmp = {
                questions: new Object(),
                answers: new Object(),
                correctAnswers: new Object()
            }
            for (let i = 0; i < ques.length; i++) {
                tmp.questions[i + 1] = ques[i][0].value // question
                tmp.answers[i + 1] = {
                    1: ques[i][1].value,
                    2: ques[i][2].value,
                    3: ques[i][3].value,
                    4: ques[i][4].value
                }
                for (let j = 0; j < 4; j++) {
                    if (ques[i][j + 5].checked === true) {
                        tmp.correctAnswers[i + 1] = ques[i][j + 5].value
                    }
                }
            }
            let examform = { ...examForm, exam: tmp }

            try {
                const response = await axios.post(`${apiUrl}/lesson/`, examform)
                console.log(response.data)
                if (response.data !== undefined) {
                    console.log('success', response);
                    setAlert({ type: 'success', message: "Your exam created successfully!" })
                    setexamForm(initialForm)
                    setInputList([])
                    setValidated(false);
                    onUpdate();

                }
            }
            catch (error) {
                console.log(error);
                return { success: false, message: error.message }
            }
        }
    }
    useEffect(() => {
        if (inputList.length === 0)
            setContent(true)
    }, [inputList])
    useEffect(() => {
        setTimeout(() => {
            setAlert(null)
        }, [5000])
    }, [alert])
    return (
        <Modal
            show={props.isShow}
            onHide={props.func}
            backdrop="static"
            keyboard={false}
            size="lg"
            scrollable={true}
            dialogClassName="modal-100w"
            id="exam"
        >
            <ModalHeader closeButton>
                <Modal.Title>Create your exam</Modal.Title>
            </ModalHeader>
            <ModalBody id="exam-body">
                <div className=' row  '>
                    <div className='col-lg-5 position-relative'>
                        <div className=' left-content overflow-hidden '>
                            <div className="container d-flex flex-column">
                                <Form noValidate validated={validated} id="formExam" >
                                    <Form.Group controlId='1'>
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control
                                            style={{ height: '200px' }}
                                            required
                                            as="textarea"
                                            row={3}
                                            onChange={onChangexamForm}
                                            name="name"
                                            value={name}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please input the title.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Select aria-label="Default select example"
                                            name="subjectId"
                                            required
                                            onChange={onChangexamForm}
                                            value={subjectId}>
                                            {props.Subjects.map((subject, index) => {
                                                return (
                                                    <option key={index} value={`${subject._id}`}>{`${subject.subjectName}`}</option>
                                                )
                                            })}
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            Please choose a Subject
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <FormGroup>
                                        <Form.Label>Class</Form.Label>
                                        <Form.Select aria-label="Default select example"
                                            name="classId"
                                            required
                                            onChange={onChangexamForm}
                                            value={classId}>
                                            {props.Classes.map((_class, index) => {
                                                return (
                                                    <option key={index} value={`${_class._id}`}>{`${_class.className}`}</option>
                                                )
                                            })}
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            Please choose a Class
                                        </Form.Control.Feedback>
                                    </FormGroup>
                                    <FormGroup>
                                        <Form.Label>Time</Form.Label>
                                        <div className='d-flex  justify-content-start align-items-center'>
                                            <Form.Control
                                                className='w-25'
                                                type='number'
                                                min={1}
                                                name="time"

                                            >
                                            </Form.Control>
                                            <Form.Label className='mb-0 mx-3'>Minutes</Form.Label>
                                        </div>
                                        <Form.Control.Feedback type="invalid">
                                            Please put the time
                                        </Form.Control.Feedback>
                                    </FormGroup>
                                    <div className='mt-5'>
                                        <AlertMessage info={alert} />
                                    </div>

                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className={`col-lg-7 ${content ? '' : 'right-content'}  `} >
                        <div className='container px-0 flex-column  '  >
                            {content ?
                                <div id="quescreate" className='  align-middle h-100 text-center fs-2 text-secondary ' style={{ marginTop: "250px" }} onClick={onAddBtnClick} >
                                    <svg xmlns="http://www.w3.org/2000/svg"

                                        width="35"
                                        height="35"
                                        fill="currentColor"
                                        className="bi bi-plus-square"
                                        viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>
                                    {"  "}Create your Question here  {' '}
                                </div> :
                                inputList.map((item, index) => {
                                    return (
                                        <div key={item.key} className='row '>
                                            <div className=' col-lg-11'>
                                                <Accordion State={item} Title={`Question ${index + 1}`} />
                                            </div>
                                            <div className=' col-lg-1 px-0 pt-2 align-middle' onClick={() => { handleDelete(index) }} >
                                                <button type="button" className="btn btn-danger"  >
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        className="bi bi-trash"
                                                        viewBox="0 0 16 16">
                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <button className='btn btn-primary px-4 add-btn' onClick={onAddBtnClick}  >Add Question</button>
                <button className='btn btn-primary px-4' onClick={handleSubmit} >Create</button>
            </ModalFooter>
        </Modal >
    )

}
const Content = () => {
    const initialForm = {
        question: "",
        answer: {
            1: "",
            2: "",
            3: "",
            4: ""
        },
    }
    const [radio, setRadio] = useState("1")
    const [contentForm, setcontentForm] = useState(initialForm)
    const { question, answer } = contentForm
    const onChangecontentForm = (e) => {
        setcontentForm({
            ...contentForm,
            [e.target.name]: e.target.value,

        })
    }
    const onChangeanswerForm = e => {
        setcontentForm({
            ...contentForm,
            answer: {
                [e.target.name]: e.target.value
            }
        })
    }
    return (
        <Form id='ques' className='ques' name='ques' >
            <Form.Group >
                <Form.Label>Question</Form.Label>
                <Form.Control
                    style={{ height: '100px' }}
                    required
                    as="textarea"
                    row={3}
                    name="question"
                    value={question}
                    onChange={onChangecontentForm}

                />
                <Form.Control.Feedback type="invalid">
                    Please input the question.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group >
                <Form.Label>Answer</Form.Label>
                <div className='flex-column justify-content-start align-items-center'>
                    <div className='d-flex flex-row justify-content-start align-items-center'>
                        <Form.Label className='me-2'>1</Form.Label>
                        <Form.Control
                            style={{ height: '50px' }}
                            as="textarea"
                            required
                            row={3}
                            name="1"
                            value={answer[1]}
                            onChange={onChangeanswerForm}
                        />
                    </div>
                    <div className='d-flex flex-row justify-content-start align-items-center'>
                        <Form.Label className='me-2'>2</Form.Label>
                        <Form.Control
                            style={{ height: '50px' }}
                            as="textarea"
                            required
                            row={3}
                            name="2"
                            value={answer[2]}
                            onChange={onChangeanswerForm}
                        />
                    </div>
                    <div className='d-flex flex-row justify-content-start align-items-center'>
                        <Form.Label className='me-2'>3</Form.Label>
                        <Form.Control
                            style={{ height: '50px' }}
                            as="textarea"
                            required
                            row={3}
                            name="3"
                            value={answer[3]}
                            onChange={onChangeanswerForm}
                        />
                    </div>
                    <div className='d-flex flex-row justify-content-start align-items-center'>
                        <Form.Label className='me-2'>4</Form.Label>
                        <Form.Control
                            style={{ height: '50px' }}
                            as="textarea"
                            required
                            row={3}
                            name="4"
                            value={answer[4]}
                            onChange={onChangeanswerForm}
                        />
                    </div>
                </div>
                <Form.Control.Feedback type="invalid">
                    Please input the answer.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label>Correct Answer</Form.Label>
                <div className='d-flex flex-row justify-content-center align-items-center'>
                    <Form.Check className='me-3' type="radio">
                        <Form.Check.Input type="radio"
                            name='correctAnswer' value={"1"} id={`check-api-radio`}
                            onChange={(e) => setRadio(e.target.value)} checked={radio === "1"}
                        />
                        <Form.Check.Label>1</Form.Check.Label>
                    </Form.Check>
                    <Form.Check className='me-3' type="radio" >
                        <Form.Check.Input type="radio"
                            name='correctAnswer' value={"2"} id={`check-api-radio`}
                            onChange={(e) => setRadio(e.target.value)} checked={radio === "2"}
                        />
                        <Form.Check.Label>2</Form.Check.Label>
                    </Form.Check>
                    <Form.Check className='me-3' type="radio">
                        <Form.Check.Input type="radio"
                            name='correctAnswer' value={"3"} id={`check-api-radio`}
                            onChange={(e) => setRadio(e.target.value)} checked={radio === "3"}
                        />
                        <Form.Check.Label>3</Form.Check.Label>
                    </Form.Check>
                    <Form.Check className='me-3' type="radio"  >
                        <Form.Check.Input type="radio"
                            name='correctAnswer' value={"4"} id={`check-api-radio`}
                            onChange={(e) => setRadio(e.target.value)} checked={radio === "4"}
                        />
                        <Form.Check.Label>4</Form.Check.Label>
                    </Form.Check>
                </div>

            </Form.Group>

        </Form>
    )
}


export default CreateExams