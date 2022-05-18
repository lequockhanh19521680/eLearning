import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { apiUrl } from '../../contexts/constants'
import FormGroup from 'react-bootstrap/esm/FormGroup'
import Accordion from '../accordion/Accordion';
import AlertMessage from '../../pages/layout/AlertMessage'
import "./createExercises.css"
const CreateExercises = ({ props }) => {
    const initialForm = {
        name: '',
        subjectId: props.Subjects[0]._id,
        classId: props.Classes[0]._id,
        userId: props.UserId,
        content: [],
        type: "EXERCISE"
    }
    const [validated, setValidated] = useState(false);
    const [exerciseForm, setexerciseForm] = useState(initialForm)
    const { name, subjectId, classId } = exerciseForm
    const [inputList, setInputList] = useState([]);
    const [length, setLength] = useState(0);
    const [content, setContent] = useState(true)
    const onUpdate = props.funcUpdate
    const [alert, setAlert] = useState(null)
    const onChangeexerciseForm = e => {

        setexerciseForm({
            ...exerciseForm,
            [e.target.name]: e.target.value,

        })
        setAlert(null)
    }
    const onAddBtnClick = event => {
        setContent(false)
        inputList.push(<Content />)
        setLength(length + 1)
    };
    const handleDelete = (pos) => {
        var rs = []
        for (let i = 0; i < inputList.length; i++) {
            if (i != pos)
                rs.push(inputList[i])

        }
        setInputList(rs)
        setLength(length - 1)
    }
    const handleSubmit = async () => {
        const form = document.getElementById('formExercise')
        if (form.checkValidity() === false) {
            setValidated(true)
            console.log('fail')
        }
        else {
            let ques = document.getElementsByName('ques')
            let rs = []
            for (let i = 0; i < ques.length; i++) {
                let tmp = {

                    header: ques[i][0].value, // ques
                    main: ques[i][1].value // answer
                }
                rs.push(tmp)
            }
            let exerciseform = { ...exerciseForm, 'content': rs }
            try {
                const response = await axios.post(`${apiUrl}/lesson/`, exerciseform)
                console.log(response.data)
                if (response.data !== undefined) {
                    console.log('success', response);
                    setAlert({ type: 'success', message: "Your lesson created successfully!" })
                    setexerciseForm(initialForm)
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
        setInputList(inputList)
        if (length == 0)
            setContent(true)
    }, [inputList, length])
    useEffect(() => {
        setexerciseForm(initialForm)
        setValidated(false)
        setInputList([])
        setContent(true)
        setLength(0)
        setAlert(null)
    }, [props.isShow])
    return (
        <Modal
            show={props.isShow}
            onHide={props.func}
            backdrop="static"
            keyboard={false}
            size="lg"
            scrollable={true}
            dialogClassName="modal-100w"
            id="exercise"
        >
            <ModalHeader closeButton>
                <Modal.Title>Create your excercise</Modal.Title>
            </ModalHeader>
            <ModalBody id="exercise-body">
                <div className=' row  '>
                    <div className='col-lg-5 position-relative'>
                        <div className=' left-content overflow-hidden '>
                            <div className="container d-flex flex-column">
                                <Form noValidate validated={validated} id="formExercise" >
                                    <Form.Group controlId='1'>
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control
                                            style={{ height: '200px' }}
                                            required
                                            as="textarea"
                                            row={3}
                                            onChange={onChangeexerciseForm}
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
                                            onChange={onChangeexerciseForm}
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
                                            onChange={onChangeexerciseForm}
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
                                    <div className='mt-5'>
                                        <AlertMessage info={alert} />
                                    </div>

                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className={`col-lg-7 ${content ? '' : 'right-content'}  `} >
                        <div className='container px-0 flex-column  '>
                            {content ? <h1>Create your Question here</h1> :
                                inputList.map((item, index) => {
                                    return (
                                        <div key={index} className='row '>
                                            <div className=' col-lg-11'>
                                                <Accordion State={item} Title={`Question ${index}`} />
                                            </div>
                                            <div className=' col-lg-1 px-0 pt-4 align-middle' onClick={() => { handleDelete(index) }}>
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
                <button className='btn btn-primary px-4 add-btn' onClick={onAddBtnClick} >Add Question</button>
                <button className='btn btn-primary px-4' onClick={handleSubmit} >Create</button>
            </ModalFooter>
        </Modal >
    )
}
const Content = () => {
    const initialForm = {
        header: "",
        main: ""
    }
    const [contentForm, setcontentForm] = useState(initialForm)
    const { header, main } = contentForm
    const onChangecontentForm = e => {
        console.log(e.target.value);
        setcontentForm({
            ...contentForm,
            [e.target.name]: e.target.value,

        })
    }
    return (
        <Form className='ques' name='ques'>
            <Form.Group >
                <Form.Label>Question</Form.Label>
                <Form.Control
                    style={{ height: '100px' }}
                    required
                    as="textarea"
                    row={3}
                    name="header"
                    value={header}
                    onChange={onChangecontentForm}

                />
                <Form.Control.Feedback type="invalid">
                    Please input the question.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group >
                <Form.Label>Answer</Form.Label>
                <Form.Control
                    style={{ height: '200px' }}
                    required
                    as="textarea"
                    row={3}
                    name="main"
                    value={main}
                    onChange={onChangecontentForm}
                />
                <Form.Control.Feedback type="invalid">
                    Please input the question.
                </Form.Control.Feedback>
            </Form.Group>
        </Form>
    )
}


export default CreateExercises