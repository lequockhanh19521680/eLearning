import React from 'react'
import './signup-form.css'
import { register } from '../../assets/img'
import {Link} from 'react-router-dom'

export const SignUpForm = () => {
    return (
        <>
            <section className="register-photo" style={{padding: '80px 0'}}>
                <div className="form-container">
                    <div className="image-holder"></div>
                    <form method="post">
                        <h2 className="text-center"><strong>Create</strong> an account.</h2>
                        <div className="mb-3"><input className="form-control" type="email" name="email" placeholder="Email"/></div>
                        <div className="mb-3"><input className="form-control" type="password" name="password" placeholder="Password"/></div>
                        <div className="mb-3"><input className="form-control" type="password" name="password-repeat" placeholder="Password (repeat)"/></div>
                        <div className="mb-3">
                            <div className="form-check"><label className="form-check-label"><input className="form-check-input" type="checkbox"/>I agree to the license terms.</label></div>
                        </div>
                        <div className="mb-3"><button className="btn btn-primary d-block w-100" type="submit">Sign Up</button></div>
                        <Link className="already" to='/login' >You already have an account? Login here.</Link>
                    </form>
                </div>
            </section>
        </>
    )
}
