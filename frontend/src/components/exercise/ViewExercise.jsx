import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/esm/FormGroup'
import Accordion from '../accordion/Accordion'
import "./Exercises.css"
const ViewExercise = ({ props }) => {
    console.log(props);
    const [inputList, setinputList] = useState(props.exercise.content);
    useEffect(() => {
        setinputList(props.exercise.content)
    }, [props.isShow])
    return (
        <Modal
            show={props.isShow}
            onHide={() => { props.func(props.exercise, props.User) }}
            backdrop="static"
            keyboard={false}
            size="lg"
            scrollable={true}
            dialogClassName="modal-100w"
            id="exercise"
        >
            <ModalHeader closeButton>
                <Modal.Title>View your exercise</Modal.Title>
            </ModalHeader>
            <ModalBody id="exercise-body">
                <div className=' row  '>
                    <div className='col-lg-5 position-relative'>
                        <div className=' left-content overflow-hidden '>
                            <div className="container px-0 d-flex flex-column">
                                <Form>
                                    <fieldset className='border p-3' disabled >
                                        <legend className='float-none w-auto p-1'>Exercise</legend>
                                        {/* <AlertMessage info={alert} /> */}

                                        <Form.Group controlId='1'>
                                            <Form.Label>Title</Form.Label>
                                            <Form.Control
                                                style={{ height: '100px' }}
                                                required
                                                as="textarea"
                                                row={3}
                                                /*   onChange={onChangelessonForm} */
                                                name="name"
                                                defaultValue={props.exercise.name}

                                            />
                                            {/*  <Form.Control.Feedback type="invalid">
                                Please input the title.
                            </Form.Control.Feedback> */}
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Subject</Form.Label>
                                            <Form.Control
                                                name="subjectId"
                                                defaultValue={props.exercise.subjectId.subjectName}
                               /*  onChange={onChangelessonForm}
                                 value={subjectId} */ >
                                                {/*     {props.Subjects.map((subject, index) => {
                                    return (
                                        <option key={index} value={`${subject._id}`}>{`${subject.subjectName}`}</option>
                                    )
                                })} */}
                                            </Form.Control>
                                            {/* <Form.Control.Feedback type="invalid">
                                Please choose a Subject
                            </Form.Control.Feedback> */}
                                        </Form.Group>
                                        <FormGroup>
                                            <Form.Label>Class</Form.Label>
                                            <Form.Control
                                                name="classId"
                                                defaultValue={props.exercise.classId.className}
                               /*  onChange={onChangelessonForm}
                                value={classId} */>
                                                {/*  {props.Classes.map((_class, index) => {
                                    return (
                                        <option key={index} value={`${_class._id}`}>{`${_class.className}`}</option>
                                    )
                                })} */}
                                            </Form.Control>
                                            {/*     <Form.Control.Feedback type="invalid">
                                Please choose a Class
                            </Form.Control.Feedback> */}
                                        </FormGroup>
                                    </fieldset>
                                    <fieldset className='border p-3' disabled >
                                        <legend className='float-none w-auto p-1'>Teacher</legend>
                                        <FormGroup>
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                name="teacherName"
                                                defaultValue={props.exercise.userId.nameAccount}
                                            >
                                            </Form.Control>
                                        </FormGroup>
                                        <FormGroup>
                                            <Form.Label>Code</Form.Label>
                                            <Form.Control
                                                name="teacherCode"
                                                defaultValue={props.exercise.userId.code}
                                            >
                                            </Form.Control>
                                        </FormGroup>
                                    </fieldset>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 right-content">
                        <div className='container px-0 flex-column  '>
                            {
                                (props.User.role === "TEACHER" && props.view == undefined) ?
                                    <></> :
                                    inputList.map((item, index) => {
                                        return (
                                            <div key={index} className='row '>
                                                {/*      <div className=' col-lg-11'> */}
                                                <Accordion
                                                    Title={`Question ${index + 1}: ${item.header}`}
                                                    State={
                                                        (
                                                            <Form.Group >
                                                                <Form.Label>Answer</Form.Label>
                                                                <Form.Control
                                                                    style={{ height: '200px' }}
                                                                    required
                                                                    as="textarea"
                                                                    row={3}
                                                                    name="main"
                                                                    defaultValue={item.main}
                                                                />
                                                                <Form.Control.Feedback type="invalid">
                                                                    Please input the question.
                                                                </Form.Control.Feedback>
                                                            </Form.Group>
                                                        )
                                                    } />
                                                {/*  </div> */}
                                                {/*  <div className=' col-lg-1 px-0 pt-4 align-middle' >
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
                                                </div> */}
                                            </div>
                                        )
                                    })
                            }
                        </div>
                    </div>

                </div>
            </ModalBody>
        </Modal>
    )
}

export default ViewExercise