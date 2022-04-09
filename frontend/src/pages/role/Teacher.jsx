import React, { useState } from 'react'
import { book, exercise } from '../../assets/img'
import './teacher.css'
import 'font-awesome/css/font-awesome.min.css'
import ListItem from '../../components/table/ListItem'


const Teacher = () => {
    let List;
    const [isLecture, setLecture] = useState();
    const [isExercise, setExercise] = useState();
    if (isLecture) {
        List = <ListItem />
    }
    else if (isExercise) {
        List = (
            <div>
                <h1>Exercise</h1>
            </div>
        )
    }
    else {
        List = (
            <div>
                <h1>khong co gi</h1>
            </div>
        )
    }
    const handleExercise = () => {
        setLecture(false);
        setExercise(true);

    }
    const handleLecture = () => {
        setLecture(true);
        setExercise(false);
    }
    return (
        <React.Fragment>
            <div className='container-fluid page'>
                <div className='row  ' style={{ paddingLeft: '200px' }}>
                    <div className='col-sm-5 col-md-3 col-lg-2 col-5 py-3'>

                        <div className='box' onClick={handleLecture} >
                            <div className='col-mda-auto'>
                                <img src={book} className="icon" alt='lecture.icon' />
                            </div>
                            <div className='col-md-auto alt-text'  >
                                <span >Lectures</span>
                            </div>

                        </div>

                    </div>
                    <div className='col-sm-5 col-md-3 col-lg-2 col-5 py-3'>

                        <div className='  box ' onClick={handleExercise}>

                            <div className='col-mda-auto'>
                                <img src={exercise} className="icon" alt='exercise.icon' />

                            </div>
                            <div className='col-md-auto alt-text'  >
                                <span >Exercise</span>
                            </div>


                        </div>

                    </div>
                    <div className='col-sm-5 col-md-3 col-lg-2 col-5 py-3'>

                        <div className='  box ' onClick={handleExercise}>
                            <div className='col-mda-auto'>
                                <img src={exercise} className="icon" alt='exams.icon' />
                            </div>
                            <div className='col-md-auto alt-text'  >
                                <span >Exams</span>
                            </div>

                        </div>

                    </div>
                </div>
                {List}
                <div className='container btn-box'>
                    <button className='btn btn-primary create-btn'>Create
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