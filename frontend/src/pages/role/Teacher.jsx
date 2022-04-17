import React, { useState } from 'react'
import { book, exercise } from '../../assets/img'
import './teacher.css'

import NavbarItem from '../../components/navbar/NavbarItem'
import ListItem from '../../components/table/ListItem'
import { useNavigate } from 'react-router-dom'


const Teacher = (props) => {
    const navigate = useNavigate();
    const [State, setState] = useState(<ListItem Role={"Lectures"} />);
    const [Type, setType] = useState("Lectures")
    const handleCreate = () => {
        if (Type === "Lectures") {
            navigate("/main/lectures")
        }
        else if (Type === "Exercises") {
            navigate("/main/exercises")
        }
    }
    const handleExams = () => {
        setState(<><div><h1>Exams</h1></div></>)
    }
    const handleExercises = () => {
        setState(<ListItem Role={"Exercises"} />)
        setType("Exercises")
    }
    const handleLectures = () => {
        setState(<ListItem Role={"Lectures"} />)
        setType("Lectures")
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
        </React.Fragment >
    )
}

export default Teacher