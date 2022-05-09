import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { apiUrl } from '../../contexts/constants'
import './listitem.css'

import ReactPlayer from "react-player";
import Modal from 'react-bootstrap/Modal'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalFooter from 'react-bootstrap/ModalFooter'



const ListItem = (props) => {
    const [Lessons, setLessons] = useState([]);
    const onUpdate = props.funcUpdate;
    const [Id, setId] = useState('')
    const [Show, setShow] = useState(false);

    /*Load Lessons by teacher id or code and sutdent lessons*/
    useEffect(async () => {

        const loadLessons = async () => {
            //load Teacher
            if (props.User.role === "TEACHER") {
                try {
                    if (props.Code != undefined) {
                        const result = await axios.get(`${apiUrl}/lesson/fromTeacher/getAll?code=${props.Code}`)
                        return result.data;
                    }
                    else {
                        const result = await axios.get(`${apiUrl}/lesson/fromTeacher/${props.User._id}`)
                        return result.data
                    }
                }
                catch (error) {
                    return error;
                }
            }
            //Load Student
            else if (props.User.role === "STUDENT") {
                try {
                    const result = await axios.get(`${apiUrl}/lesson/save/${props.User._id}`)
                    return result.data
                }
                catch (error) {
                    return error;
                }
            }
        }

        // the result is up to the code previous
        loadLessons().then((response) => {
            setLessons(response)
        })
    }, [props.Change, props.User])
    /*deleteLesson*/
    const handleDelete = async () => {
        try {
            const result = await axios.delete(`${apiUrl}/lesson/${Id}`);
            onUpdate(props.Title);
            handleClose();
        }
        catch (error) {
            console.log(error)
        }
    }
    const handleClose = () => setShow(false)
    const handleShow = (id) => {
        setShow(true);
        setId(id);
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
                    <Modal.Title>Confirm to delete?</Modal.Title>
                </ModalHeader>
                <ModalBody>
                    Do you sure to do this ?
                </ModalBody>
                <ModalFooter>
                    <button className='btn btn-primary ' style={{ paddingLeft: '30px', paddingRight: '30px', paddingTop: '10px', paddingBottom: '10px' }} onClick={handleDelete}>Yes</button>
                    <button className='btn btn-secondary ' style={{ paddingLeft: '30px', paddingRight: '30px', paddingTop: '10px', paddingBottom: '10px' }} onClick={handleClose}>
                        No
                    </button>
                </ModalFooter>

            </Modal>
        </div>)


    return (
        <>
            <div className="container list-box" >
                <div className='row'>
                    <div className="col-md-12">
                        <table id="example" className="table table-striped table-bordered" cellSpacing="0" width="100%">
                            <thead>
                                {(props.User.role === "TEACHER") ?
                                    (
                                        <tr>
                                            <th>Id</th>
                                            <th></th>
                                            <th>Title</th>
                                            <th>Subject</th>
                                            <th>Class</th>
                                            <th></th>
                                        </tr>
                                    )
                                    :
                                    (
                                        <tr>
                                            <th>Id</th>
                                            <th></th>
                                            <th>Title</th>
                                            <th>Subject</th>
                                            <th>Class</th>
                                            <th>Teacher</th>
                                            <th></th>
                                        </tr>
                                    )
                                }
                            </thead>
                            <tbody>
                                {(props.User.role === "TEACHER") ?
                                    (
                                        (Lessons.length === 0) ?
                                            (<tr><td>No lessons found</td></tr>) :
                                            (
                                                Lessons.map((lesson, index) => (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td className='videoTd'>
                                                            <ReactPlayer controls width="100%" height="100%" className="video" url={`${lesson.header}`}  ></ReactPlayer>
                                                        </td>
                                                        <td>{lesson.name}</td>
                                                        <td>{lesson.subjectId.subjectName}</td>
                                                        <td>{lesson.classId.className}</td>
                                                        <td>
                                                            {(props.Check) ?
                                                                <button type="button" className="btn btn-danger" onClick={() => handleShow(lesson._id)} >
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
                                                                :
                                                                <></>
                                                            }
                                                            <a role={'button'} className="btn btn-info" href={`${lesson.header}`} target={'blank'}>
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                    width="16" height="16"
                                                                    fill="currentColor"
                                                                    className="bi bi-eye" viewBox="0 0 16 16">
                                                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                                </svg>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                )
                                                )
                                            )
                                    ) :
                                    (
                                        (Lessons.length === 0) ?
                                            (<tr><td>No lessons found</td></tr>) :
                                            (
                                                Lessons.map((lesson, index) =>
                                                (
                                                    (lesson.lessonId === null) ?
                                                        //temp
                                                        (<tr key={index}><td><div></div></td></tr>) :
                                                        (<tr key={index}>
                                                            <td>{index + 1}</td>
                                                            <td className='videoTd'>
                                                                <ReactPlayer controls width="100%" height="100%" className="video" url={`${lesson.lessonId.header}`}  ></ReactPlayer>
                                                            </td>
                                                            <td>{lesson.lessonId.name}</td>
                                                            <td>{lesson.lessonId.subjectId}</td>
                                                            <td>{lesson.lessonId.classId}</td>
                                                            <td>{lesson.lessonId.userId}</td>
                                                            <td>

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

                                                                <a role={'button'} className="btn btn-info" href={`${lesson.lessonId.header}`} target={'blank'}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        width="16" height="16"
                                                                        fill="currentColor"
                                                                        className="bi bi-eye" viewBox="0 0 16 16">
                                                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                                    </svg>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        )

                                                )
                                                )
                                            )
                                    )
                                }
                            </tbody>
                        </table>
                        {ConfirmModal}
                    </div>

                </div>
            </div>
        </>
    )
}

export default ListItem