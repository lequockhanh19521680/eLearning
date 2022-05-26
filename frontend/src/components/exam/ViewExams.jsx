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
import AlertMessage from '../../pages/layout/AlertMessage'
import Quiz from '../quiz/Quiz'
const ViewExams = ({ props }) => {
    console.log(props);
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
                id="exam"
            >
                <ModalHeader closeButton>
                    <Modal.Title>Do the Exam</Modal.Title>
                </ModalHeader>
                <ModalBody id="exam-body">
                    {
                        props.User.role === "TEACHER" ?
                            <></>
                            :
                            <Quiz exam={props.exam} User={props.User} />
                    }
                </ModalBody>
            </Modal>
        </React.Fragment>
    )
}

export default ViewExams