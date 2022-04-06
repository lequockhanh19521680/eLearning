import React from 'react'
import { book, exercise } from '../../assets/img'
import './teacher.css'


const Teacher = () => {
    return (
        <React.Fragment>
            <div className='container-fluid page'>
                <div className='row px-4'>
                    <div className='col-sm-5 col-md-3 col-lg-2 col-5 py-3'>
                        <div className='  box '>
                            <div className='col-mda-auto'>
                                <img src={book} className="icon" />
                            </div>
                            <div className='col-md-auto alt-text'  >
                                <span >Lectures</span>
                            </div>

                        </div>
                    </div>
                    <div className='col-sm-5 col-md-3 col-lg-2 col-5 py-3'>
                        <div className='  box '>
                            <div className='col-mda-auto'>
                                <img src={exercise} className="icon" />
                            </div>
                            <div className='col-md-auto alt-text'  >
                                <span >Exercise</span>
                            </div>

                        </div>
                    </div>
                    <div className='col-sm-5 col-md-3 col-lg-2 col-5 py-3'>
                        <div className='  box '>
                            <div className='col-mda-auto'>
                                <img src={exercise} className="icon" />
                            </div>
                            <div className='col-md-auto alt-text'  >
                                <span >Exams</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Teacher