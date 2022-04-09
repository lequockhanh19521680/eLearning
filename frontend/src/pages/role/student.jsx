import React from 'react'
import { book, exercise ,teacher} from '../../assets/img'
import './student.css'


const Student = () => {
    return (
        <React.Fragment>
            <div className='container-fluid page'>
                <div className='row px-4'>
                    <div className='col-sm-5 col-md-3 col-lg-2 col-5 py-3'>
                        <div className='  box ' >
                            <div className='col-mda-auto'>
                                <img src={teacher} className="icon" />
                            </div>
                            <div className='col-md-auto alt-text'  >
                                <span >Teacher</span>
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

export default Student