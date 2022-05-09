import React, { useEffect, useState } from 'react'
import { book, exercise } from '../../assets/img'
import './teacher.css'

import NavbarItem from '../../components/navbar/NavbarItem'
import ListItem from '../../components/table/ListItem'
import { useNavigate } from 'react-router-dom'
import CreateLesson from '../../components/createLesson/CreateLesson'
import axios from 'axios'
import { apiUrl } from '../../contexts/constants'
import CreateExercises from '../../components/createExercise/CreateExercises'



const Teacher = ({ User }) => {
    const [State, setState] = useState(<ListItem Title={"Lectures"} User={User} Check />)
    const [Modal, setModal] = useState(<></>)
    const [onUpdateList, setUpdateList] = useState("Lectures")
    const [Type, setType] = useState("Lectures")

    //getclass
    const [Classes, setClasses] = useState([])
    useEffect(async () => {
        try {
            const result = await axios.get(`${apiUrl}/lesson/class`);
            setClasses(result.data);
            return result;
        } catch (error) {
            return error;
        }
    }, [])
    //getSubject
    const [Subjects, setSubjects] = useState([])
    useEffect(async () => {
        try {
            const result = await axios.get(`${apiUrl}/lesson/subject`);
            setSubjects(result.data);
            return result;
        } catch (error) {
            return error;
        }
    }, [])
    //create button to open Modal
    const handleCreate = () => {
        if (Type === "Lectures") {
            setModal(<CreateLesson props={{ isShow: true, func: handleClose, Classes: Classes, Subjects: Subjects, UserId: User._id, funcUpdate: Update }}></CreateLesson>)

        }
        else if (Type === "Exercises") {
            setModal(<CreateExercises props={{ isShow: true, func: handleClose }} />)
        }
    }
    const handleClose = () => {
        if (Type === "Lectures") {
            setModal(<CreateLesson props={{ isShow: false, func: handleClose, Classes: Classes, Subjects: Subjects, UserId: User._id, funcUpdate: Update }}></CreateLesson>)
        }
        else if (Type === "Exercises") {
            setModal(<CreateExercises props={{ isShow: false, func: handleClose }} />)
        }
    }
    //Nav click
    const handleExams = () => {
        setState(<ListItem Title={"Exams"} User={User} Check Change={Type} funcUpdate={Update} />)
        setType("Exams")
    }
    const handleExercises = () => {
        /* setState(<ListItem Title={"Exercises"} User={User} Check Change={Type} funcUpdate={Update} />) */
        setState(<div>hello</div>)
        setType("Exercises")
        setUpdateList("Exercises")
    }
    const handleLectures = () => {
        setState(<ListItem Title={"Lectures"} User={User} Check Change={onUpdateList} funcUpdate={Update} />)
        setType("Lectures")
        setUpdateList("Lectures")
    }

    //Update for create lesson and delete lesson
    const Update = () => {
        setUpdateList(null)
    }
    useEffect(() => {

        if (Type == "Lectures")
            handleLectures()
        if (Type == "Exercises")
            handleExercises();
    }, [onUpdateList])
    //
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
                <div className='spacing'>
                    {State}
                </div>
                <div className='container btn-box'>
                    <button className='btn btn-primary create-btn'
                        onClick={handleCreate}
                    >Create
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
        </React.Fragment >
    )
}

export default Teacher