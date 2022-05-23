import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/esm/FormGroup'
import Accordion from '../accordion/Accordion'
import axios from 'axios'
import { apiUrl } from '../../contexts/constants'
import { v4 as uuidv4 } from 'uuid';
import "./Exercises.css"
const ViewExercises = ({ props }) => {

    const initialForm = {
        name: props.exercise.name,
        subjectId: props.exercise.subjectId._id,
        classId: props.exercise.classId._id,
        userId: props.User._id,
        content: props.exercise.content,
        type: "EXERCISE"
    }

    const [exerciseForm, setexerciseForm] = useState(initialForm)
    const { name, subjectId, classId } = exerciseForm
    const [inputList, setInputList] = useState(props.exercise.content);
    const [add, setAdd] = useState(<></>);
    const [confirm, setConfirm] = useState(<></>)

    const onChangeexerciseForm = e => {
        setexerciseForm({
            ...exerciseForm,
            [e.target.name]: e.target.value,
        })
    }
    //
    const onAddBtnClick = event => {
        const close = () => {
            setAdd(null)
        }
        setAdd(<AddModal isShow func={close} exercise={props.exercise} />)
    };
    const AddModal = (props) => {

        const [validated, setValidated] = useState(false);
        const [contentForm, setContentForm] = useState({
            header: " ",
            main: " "
        })
        const onChange = (e) => {
            setContentForm({
                ...contentForm,
                [e.target.name]: e.target.value
            })
        }
        const { header, main } = contentForm
        console.log(contentForm, props);

        const handleSubmit = async () => {
            const form = document.getElementById('view-create-question')
            if (form.checkValidity() === false) {
                setValidated(true)
                console.log('fail')
            }
            else {
                try {
                    const response = await axios.post(`${apiUrl}/lesson/content/${props.exercise._id}`, contentForm)
                    console.log(response.data)
                    if (response.data !== undefined) {
                        console.log('success', response);
                    }
                    props.func();
                }
                catch (error) {

                    console.log(error);
                    return { success: false, message: error.message }
                }
            }
        }
        return (
            <Modal
                show={props.isShow}
                onHide={() => { props.func() }}
                backdrop="static"
                keyboard={false}
                size="lg"
                centered
            >
                <ModalHeader closeButton>
                    <Modal.Title>Add Question</Modal.Title>
                </ModalHeader>
                <ModalBody>
                    <Form noValidate validated={validated} id="view-create-question">
                        <Form.Group >
                            <Form.Label>Question</Form.Label>
                            <Form.Control
                                style={{ height: '100px' }}
                                required
                                as="textarea"
                                row={3}
                                name="header"
                                value={header}
                                onChange={onChange}

                            />
                            <Form.Control.Feedback type="invalid">
                                Please input the question.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Answer</Form.Label>
                            <Form.Control
                                style={{ height: '100px' }}
                                required
                                as="textarea"
                                row={3}
                                name="main"
                                value={main}
                                onChange={onChange}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please input the question.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <button className='btn btn-primary px-4' onClick={handleSubmit}>Create</button>
                </ModalFooter>
            </Modal>
        )
    }
    // delete
    const handleDelete = (id) => {
        const close = () => {
            setConfirm(null)
        }
        console.log(id);
        const ConfirmModal = (props) => {
            const handleDelete = async () => {
                console.log(props.id,props.exercise._id,"hello")
                try {
                    const response = await axios.delete(`${apiUrl}/lesson/content/${props.exercise._id}`,{ contentId: props.id })
                    console.log(response.data)
                    if (response.data !== undefined) {
                        console.log('success', response);
                    }
                    props.func();
                }
                catch (error) {

                    console.log(error);
                    return { success: false, message: error.message }
                }

            }
            return (
                <Modal
                    show={props.isShow}
                    onHide={() => { props.func() }}
                    keyboard={false}
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <ModalHeader>
                        <Modal.Title>Confirm to delete?</Modal.Title>
                    </ModalHeader>
                    <ModalBody>
                        Do you sure to do this?
                        <br></br>
                        This will delete the question and can't undo
                    </ModalBody>
                    <ModalFooter>
                        <button className='btn btn-primary ' style={{ paddingLeft: '30px', paddingRight: '30px', paddingTop: '10px', paddingBottom: '10px' }} onClick={handleDelete}>Yes</button>
                        :
                        <button className='btn btn-secondary ' style={{ paddingLeft: '30px', paddingRight: '30px', paddingTop: '10px', paddingBottom: '10px' }} onClick={() => { props.func() }}>
                            No
                        </button>
                    </ModalFooter>
                </Modal>
            )
        }
        setConfirm(<ConfirmModal isShow func={close} id={id} exercise={props.exercise} />)
        try {
            /*      const response = await axios.post(`${apiUrl}/lesson/content/${props.exercise._id}`)
                 console.log(response.data)
                 if (response.data !== undefined) {
                     console.log('success', response);
                 } */
        }
        catch (error) {

            console.log(error);
            return { success: false, message: error.message }
        }
    }
    //
    const handleSubmit = async () => {


        try {
            const response = await axios.patch(`${apiUrl}/lesson/`)
            console.log(response.data)
            /*  if (response.data !== undefined) {
                 console.log('success', response);
                 setAlert({ type: 'success', message: "Your lesson created successfully!" })
                 setexerciseForm(initialForm)
                 setInputList([])
                 setValidated(false);
                 onUpdate();
 
             } */
        }
        catch (error) {
            console.log(error);
            return { success: false, message: error.message }
        }

    }
    console.log(initialForm, props, exerciseForm, inputList);
    useEffect(async () => {
        const response = await axios.get(`${apiUrl}/lesson/${props.exercise._id}`);
        setInputList(response.data.content)
    }, [props.isShow, add, confirm])
    return (
        <React.Fragment>
            <Modal
                show={props.isShow}
                onHide={() => { props.func() }}
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
                                        <fieldset className='border p-3' disabled={props.User.role == "STUDENT" || props.view} >
                                            <legend className='float-none w-auto p-1'>Exercise</legend>
                                            {/* <AlertMessage info={alert} /> */}
                                            <Form.Group controlId='1'>
                                                <Form.Label>Title</Form.Label>
                                                <Form.Control
                                                    style={{ height: '100px' }}
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
                                                {(props.User.role == "STUDENT" || props.view) ?
                                                    <>
                                                        <Form.Control
                                                            defaultValue={props.exercise.subjectId.subjectName}
                                                        >
                                                        </Form.Control>
                                                    </> :
                                                    <React.Fragment>
                                                        <Form.Select
                                                            name="subjectId"
                                                            value={subjectId}
                                                            onChange={onChangeexerciseForm}
                                                        >
                                                            {props.Subjects.map((subject, index) => {
                                                                return (
                                                                    <option key={index} value={`${subject._id}`}>{`${subject.subjectName}`}</option>
                                                                )
                                                            })}
                                                        </Form.Select>
                                                        <Form.Control.Feedback type="invalid">
                                                            Please choose a Subject
                                                        </Form.Control.Feedback>
                                                    </React.Fragment>}
                                            </Form.Group>
                                            <FormGroup>
                                                <Form.Label>Class</Form.Label>
                                                {(props.User.role == "STUDENT" || props.view) ?
                                                    <>
                                                        <Form.Control
                                                            defaultValue={props.exercise.classId.className}
                                                        >
                                                        </Form.Control>
                                                    </> :
                                                    <React.Fragment>
                                                        <Form.Select
                                                            name="classId"
                                                            value={classId}
                                                            onChange={onChangeexerciseForm}
                                                        >
                                                            {props.Classes.map((_class, index) => {
                                                                return (
                                                                    <option key={index} value={`${_class._id}`}>{`${_class.className}`}</option>
                                                                )
                                                            })}
                                                        </Form.Select>
                                                        <Form.Control.Feedback type="invalid">
                                                            Please choose a Class
                                                        </Form.Control.Feedback>
                                                    </React.Fragment>
                                                }
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
                                        inputList.map((item, index) => {
                                            return (
                                                <div key={index} className='row '>
                                                    <div className=' col-lg-11'>
                                                        <Accordion Title={`Question ${index + 1}`}
                                                            State={<React.Fragment>
                                                                <Form.Group >
                                                                    <Form.Label>Question</Form.Label>
                                                                    <Form.Control
                                                                        style={{ height: "100px" }}
                                                                        required
                                                                        as="textarea"
                                                                        row={3}
                                                                        name="main"
                                                                        defaultValue={item.header}
                                                                    />
                                                                </Form.Group>
                                                                <Form.Group >
                                                                    <Form.Label>Answer</Form.Label>
                                                                    <Form.Control
                                                                        style={{ height: "150px" }}
                                                                        required
                                                                        as="textarea"
                                                                        row={3}
                                                                        name="main"
                                                                        defaultValue={item.main}
                                                                    />
                                                                </Form.Group>
                                                            </React.Fragment>
                                                            } />
                                                    </div>
                                                    <div className=' col-lg-1 px-0 pt-2 align-middle' /* onClick={() => { handleDelete(index) }} */>
                                                        <button type="button" className="btn btn-danger" onClick={() => { handleDelete(item._id) }}  >
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
                                        :
                                        inputList.map((item, index) => {
                                            return (
                                                <div key={index} className='row '>
                                                    <Accordion
                                                        Title={`Question ${index + 1}: ${item.header}`}
                                                        State={
                                                            (
                                                                <fieldset disabled>
                                                                    <Form.Group >
                                                                        <Form.Label>Answer</Form.Label>
                                                                        <Form.Control
                                                                            style={{ height: "200px" }}
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
                                                                </fieldset>
                                                            )
                                                        } />

                                                </div>
                                            )
                                        })
                                }
                            </div>
                        </div>

                    </div>
                </ModalBody>
                {
                    (props.User.role === "TEACHER" && props.view == undefined) ?

                        <ModalFooter>
                            <button className='btn btn-primary px-4 add-btn' onClick={onAddBtnClick} >Add Question</button>
                            <button className='btn btn-primary px-4' disabled >Save Edit</button>
                        </ModalFooter>
                        :
                        <></>
                }

            </Modal >
            {add}
            {confirm}
        </React.Fragment>

    )
}


export default ViewExercises