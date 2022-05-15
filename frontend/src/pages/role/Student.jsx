import React, { useEffect, useState } from 'react'
import { book, exercise } from '../../assets/img'
import ListLessonItem from '../../components/table/ListLessonItem'
import Accordion from '../../components/accordion/Accordion';
import NavbarItem from '../../components/navbar/NavbarItem';
import EModal from '../../components/modal/EModal';
import { Routes, useLocation, Route } from 'react-router-dom';
import axios from 'axios';
import { apiUrl } from '../../contexts/constants';
import "./student.css"


const Student = ({ User }) => {

    <Routes>
        <Route path='/lectures' element={<></>}></Route>
        <Route path='/exercises' element={<></>}></Route>
        <Route path='/exams' element={<></>}></Route>
    </Routes>
    const location = useLocation();
    const [State, setState] = useState(<ListLessonItem Title={"Lectures"} User={User} Check />)
    const [StateUp, setStateUp] = useState(<></>)
    const [Find, setFind] = useState(false)
    const [Accor, setAccor] = useState(<></>)
    const [Modal, setModal] = useState(<></>)
    const [NameTeacher, setNameTeacher] = useState('')
    const [Type, setType] = useState("Lectures")

    // Modal Find
    const handleClose = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setModal(<EModal props={{ isShow: false, func: handleClose }} />)
    }
    const handleFind = async (code, e, handleSubmit) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            handleSubmit(true);
            console.log('fail')
        }
        else {
            try {
                const result = await axios.get(`${apiUrl}/lesson/fromTeacher/getAll?code=${code}`)
                const data = result.data;
                if (result.data !== undefined) {
                    console.log('success', result);
                    handleSubmit(false, "success");
                    setFind(true);
                    setStateUp(<ListLessonItem Title={Type} Code={code} User={data[0].userId} Change={Type}></ListLessonItem>)
                    setNameTeacher("Teacher: " + data[0].userId.nameAccount);
                }

            }
            catch (error) {
                if (error.response.data) {
                    console.log(error);
                    return error.response.data;
                }
                console.log(error);
                return { success: false, message: error.message }
            }
        }


    }
    const handleFindTeacher = () => {
        setModal(<EModal props={{ isShow: true, funcClose: handleClose, funcFind: handleFind }} />)
    }
    //
    const handleExams = () => {

        setState(<ListLessonItem User={User} Check />)
        setType("Exams")

    }
    const handleExercises = () => {
        setState(<ListLessonItem User={User} Check />)
        setType("Exercises")


    }
    const handleLectures = () => {
        setState(<ListLessonItem User={User} Check />)
        setType("Lectures")


    }
    useEffect(() => {
        setAccor((<Accordion State={State} Title={`Your ${Type}`} Change={Type} />))
    }, [State])

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
                        <Accordion State={StateUp} Title={NameTeacher} isCheck />
                        :
                        (<div><h5>You have not find Teacher yet! </h5></div>)
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
