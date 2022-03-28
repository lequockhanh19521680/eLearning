import React from 'react'
import { logo } from '../../assets/img'

import './login-form.css'

const LoginForm = () => {
    return (

        <section className="login-clean">
            <div className="container">
                <div className="row align-items-center padding-mobile">
                    <div className="col-md-6 col-align-left"><img id="logo" src={logo} /></div>
                    <div className="col-md-6 col-align-right padding-top-18" style={{ marginTop: '115px' }}>
                        <form method="post">
                            <h2 className="visually-hidden">Login Form</h2>
                            <div className="illustration"><i className="icon ion-ios-navigate" style={{ color: '#5595f0' }}></i></div>
                            <div className="mb-3"><input className="form-control" type="email" name="email" placeholder="Email" /></div>
                            <div className="mb-3"><input className="form-control" type="password" name="password" placeholder="Password" /></div>
                            <div className="mb-3"><button className="btn btn-primary d-block w-100" type="submit" style={{ opacity: 0.92, background: '#468bef' }}>Log In</button></div><a className="forgot" href="#">Forgot your email or password?</a>
                        </form>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default LoginForm