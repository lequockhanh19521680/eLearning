import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/esm/FormGroup'

import "./createExercises.css"
const CreateExercises = ({ props }) => {
    const initialForm = {
        name: '',
        subjectId: props.Subjects[0]._id,
        classId: props.Classes[0]._id,
        userId: props.UserId
    }
    console.log(props);
    const [validated, setValidated] = useState(false);
    const [lessonForm, setlessonForm] = useState(initialForm)
    const { name, subjectId, classId } = lessonForm
    const onChangelessonForm = e => {
        setlessonForm({
            ...lessonForm,
            [e.target.name]: e.target.value,

        })
    }
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
            <ModalBody>
                <div className=' row  '>
                    <div className='col-lg-5 position-relative'>
                        <div className=' left-content overflow-hidden '>
                            <div className="container d-flex flex-column">
                                <Form noValidate validated={validated} >
                                    <Form.Group controlId='1'>
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control
                                            style={{ height: '200px' }}
                                            required
                                            as="textarea"
                                            row={3}
                                            onChange={onChangelessonForm}
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
                                            onChange={onChangelessonForm}
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
                                            onChange={onChangelessonForm}
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
                    <div className='col-lg-7  ' >
                        <div className='container flex-column right-content overflow-auto'>
                            <img src="https://static.wikia.nocookie.net/vsdebating/images/0/0b/Patamon.png/revision/latest?cb=20180728004931"></img>
                            <img src="https://static.wikia.nocookie.net/vsdebating/images/0/0b/Patamon.png/revision/latest?cb=20180728004931"></img>
                            <img src="https://static.wikia.nocookie.net/vsdebating/images/0/0b/Patamon.png/revision/latest?cb=20180728004931"></img>
                            <img src="https://static.wikia.nocookie.net/vsdebating/images/0/0b/Patamon.png/revision/latest?cb=20180728004931"></img>
                            <img src="https://static.wikia.nocookie.net/vsdebating/images/0/0b/Patamon.png/revision/latest?cb=20180728004931"></img>
                            <img src="https://static.wikia.nocookie.net/vsdebating/images/0/0b/Patamon.png/revision/latest?cb=20180728004931"></img>
                            <img src="https://static.wikia.nocookie.net/vsdebating/images/0/0b/Patamon.png/revision/latest?cb=20180728004931"></img>
                            <img src="https://static.wikia.nocookie.net/vsdebating/images/0/0b/Patamon.png/revision/latest?cb=20180728004931"></img>
                            <img src="https://static.wikia.nocookie.net/vsdebating/images/0/0b/Patamon.png/revision/latest?cb=20180728004931"></img>
                            <img src="https://static.wikia.nocookie.net/vsdebating/images/0/0b/Patamon.png/revision/latest?cb=20180728004931"></img>
                            <img src="https://static.wikia.nocookie.net/vsdebating/images/0/0b/Patamon.png/revision/latest?cb=20180728004931"></img>
                            <img src="https://static.wikia.nocookie.net/vsdebating/images/0/0b/Patamon.png/revision/latest?cb=20180728004931"></img>
                        </div>

                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <button className='btn btn-primary px-4' type='submit' >Create</button>
            </ModalFooter>
        </Modal >
    )
}

export default CreateExercises