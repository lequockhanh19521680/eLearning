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
    const initialList = [<Accordion key={1} State={<Content key={1} />} Title={"Câu 1"} />]
    const [validated, setValidated] = useState(false);
    const [exerciseForm, setexerciseForm] = useState(initialForm)
    const { name, subjectId, classId } = exerciseForm
    const [inputList, setInputList] = useState([]);
    const [content, setContent] = useState(true)
    const onChangeexerciseForm = e => {

        setexerciseForm({
            ...exerciseForm,
            [e.target.name]: e.target.value,

        })
    }
    const onAddBtnClick = event => {
        setContent(false)
        setInputList(inputList.concat(<Accordion key={inputList.length + 1} State={<Content key={inputList.length + 1} />} Title={`Câu ${inputList.length + 1}`} />));
    };
    const handleSubmit = async () => {
        const form = document.getElementById('formExercise')
        if (form.checkValidity() === false) {
            setValidated(true)
            console.log('fail')
            /*       console.log(document.getElementsByClassName("ques")[0][0].value); */

        }
        else {
            let headers = document.getElementsByName('header')
            let mains = document.getElementsByName('main')
            //headers = mains in length

            let rs = []
            for (let i = 0; i < headers.length; i++) {
                let tmp = {
                    header: headers[i].value,
                    main: mains[i].value
                }
                rs.push(tmp)
            }
            let exerciseform = { ...exerciseForm, 'content': rs }
            console.log(exerciseform);
            try {
                const response = await axios.post(`${apiUrl}/lesson/`, exerciseform)
                console.log(response.data)
                if (response.data !== undefined) {
                    console.log('success', response);
                    /* setAlert({ type: 'success', message: "Your lesson created successfully!" }) */
                    setexerciseForm(initialForm)
                    setInputList(null)
                    setValidated(false)
                    console.log(exerciseForm);
                }
            }
            catch (error) {
                if (error.response.data) {
                    console.log(error);
                    return error.response.data;
                }
                console.log(error);
                return { success: false, message: error.message }
            }
        }
    }
    useEffect(() => {
        setexerciseForm(initialForm)
        setValidated(false)
        setInputList([])
        setContent(true)
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
                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className={`col-lg-7 ${content ? '' : 'right-content'}  `} >
                        <div className='container flex-column  overflow-auto'>
                            {content ? <h1>Create your Question here</h1> : inputList}

                        </div>

                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <button className='btn btn-primary px-4 ' onClick={onAddBtnClick} >Add Question</button>
                <button className='btn btn-primary px-4' onClick={handleSubmit} >Create</button>
            </ModalFooter>
        </Modal >
    )
}
const Content = (props) => {
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
        <Form className='ques'>
            <Form.Group controlId='1'>
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
                <Form.Label>Anser</Form.Label>
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