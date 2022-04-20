import React, { useState } from 'react'
import { book, exercise } from '../../assets/img'
import ListItem from '../../components/table/ListItem'

import './student.css'
import Accordion from '../../components/accordion/Accordion';
import NavbarItem from '../../components/navbar/NavbarItem';
import EModal from '../../components/modal/EModal';
import { useLocation } from 'react-router-dom';


const Student = (props) => {

    const location = useLocation();
    console.log(location)
    const [State, setState] = useState(<ListItem Title={"Lectures"} />)
    const [Find, setFind] = useState(false)
    const [Accor, setAccor] = useState(<Accordion State={State} Title="Your Lectures" ></Accordion>)
    const [Modal, setModal] = useState()

    const updateFind = Find => {
        if (Find)
            setFind(false)
        else
            setFind(true)
    }
    const handleClose = () => {
        setModal(<EModal props={{ isShow: false, func: handleClose }} />)
    }
    const handleFind = () => {
        handleClose();
        updateFind(Find)
    }
    const handleFindTeacher = () => {

        setModal(<EModal props={{ isShow: true, funcClose: handleClose,funcFind: handleFind}} />)      

    }
    const handleExams = () => {
        setState(<ListItem Title="Exams" />)
        setAccor(<Accordion State={<ListItem Role="Exams" />} Title="Your Exams" />)
    }
    const handleExercises = () => {
        setState(<ListItem Title="Exercises" />)
        setAccor(<Accordion State={<ListItem Role="Exercises" />} Title="Your Lectures" ></Accordion>)
    }
    const handleLectures = () => {
        setState(<ListItem Title={"Lectures"} />)
        setAccor(<Accordion State={<ListItem Role="Lectures" />} Title="Your Lectures" />)
    }
    const navItem = [{ name: 'Lectures', func: handleLectures, src: book },
    { name: 'Exercises', func: handleExercises, src: exercise },
    { name: 'Exams', func: handleExams, src: exercise }]

    return (
        <React.Fragment>
            <div className='container-fluid page'>
                <div className='row  ' style={{ paddingLeft: '200px' }}>
                    {navItem.map((Item, index) => {
                        return (
                            <NavbarItem key={index} props={Item}></NavbarItem>
                        )
                    }
                    )}
                </div>
                <div className="container">
                    {(Find) ?
                        <Accordion State={State} Title="Teacher Lectures" isCheck />
                        :
                        (<div><h1>No loading</h1></div>)
                    }
                    {Accor}
                </div>
                <div className='container btn-box'>
                    <button className='btn btn-primary create-btn'
                        onClick={handleFindTeacher}
                    >Find teacher
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="18" height="18"
                            fill="currentColor"
                            className='bi bi-plus-circle create-btn-svg'
                            viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </button>
                </div>

            </div>
            {Modal}

        </React.Fragment>
    )
}

export default Student
