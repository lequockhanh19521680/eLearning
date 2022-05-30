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
import Title from '../quiz/title/Title'
const ViewExams = ({ props }) => {
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
                            <React.Fragment>
                                <Title exam={props.exam} user={props.User} />
                                <Quiz exam={props.exam} User={props.User} />
                            </React.Fragment>

                    }
                </ModalBody>
            </Modal>
        </React.Fragment>
    )
}

export default ViewExams