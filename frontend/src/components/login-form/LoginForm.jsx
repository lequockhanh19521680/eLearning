import React, { useContext, useState } from 'react'
import { logo } from '../../assets/img'
import './login-form.css'
import { AuthContext } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'
const LoginForm = () => {

    // Data trong form
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: '',
    })

    // cập nhật dữ liệu khi mà nhập trong input
    const onChangeLoginForm = e => setLoginForm({
        ...loginForm,
        [e.target.name]: e.target.value
    })


    // Xử lý đoạn submit form
    const { loginUser } = useContext(AuthContext)

    // khi ấn submit form   
    const handleLogin = async (e) => {
        e.preventDefault()
        const result = await loginUser(loginForm)
        if (result.success) {
            alert("true")
        } else {
            alert("false")

        }
    }


    return (
        <>
            <section className="login-clean">
                <div className="container">
                    <div className="row align-items-center padding-mobile">
                        <div className="col-md-6 col-align-left"><img id="logo" src={logo} /></div>
                        <div className="col-md-6 col-align-right padding-top-18" style={{ marginTop: '50px' }}>
                            <form onSubmit={handleLogin}>
                                <h2 className="visually-hidden">Login Form</h2>
                                <div className="illustration">
                                    <i className="icon ion-ios-navigate" style={{ color: '#5595f0' }}></i>
                                </div>
                                <div className="mb-3">
                                    <input className="form-control" value={loginForm.username} onChange={onChangeLoginForm} type="email" name="username" placeholder="Email" />
                                </div>
                                <div className="mb-3">
                                    <input className="form-control" value={loginForm.password} onChange={onChangeLoginForm} type="password" name="password" placeholder="Password" />
                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-primary d-block w-100" type="submit" style={{ opacity: 0.92, background: '#468bef' }}>
                                        Log In
                                    </button>
                                </div><Link to='/signup' className='link'>Sign-up</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default LoginForm