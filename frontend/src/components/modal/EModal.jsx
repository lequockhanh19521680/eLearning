import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import ModalFooter from 'react-bootstrap/ModalFooter'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalHeader from 'react-bootstrap/ModalHeader'
import Form from 'react-bootstrap/Form'

import './modal.css'


const EModal = ({ props }) => {
    console.log(props.funcClose)

    return (
        <Modal
            show={props.isShow}
            onHide={props.func}
            backdrop="static"
            keyboard={false}
        >
            <ModalHeader  >
                <Modal.Title>Find your teacher through ID</Modal.Title>
            </ModalHeader>
            <ModalBody>
                <Form>
                    <div className="container">
                        <Form.Control
                            type="text"
                            id="idTeacher"
                            aria-describedby="passwordHelpBlock"
                            placeholder="Teacher id here"
                        />
                        <div className='px-1'>
                            <Form.Text className='idTeacherHelpBlock' id="idTeacherHelpBlock" muted>
                                Your Teacher id must be 8-10 numbers, and
                                must not contain spaces, special characters, or emoji.
                            </Form.Text>
                        </div>
                    </div>
                </Form>
            </ModalBody>
            <ModalFooter>
                <button className='btn btn-secondary' onClick={props.funcClose}>
                    Close
                </button>
                <button className='btn btn-primary px-4' onClick={props.funcFind}>Find  </button>
            </ModalFooter>
        </Modal>
    )
}

export default EModal