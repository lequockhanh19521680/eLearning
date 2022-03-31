import React from 'react'
import './signup-form.css'
import { register } from '../../assets/img'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext, useState } from 'react'
import AlertMessage from '../../pages/layout/AlertMessage'

export const SignUpForm = () => {

    // Data trong form
    const [registerForm, setRegisterForm] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    })

    const { username, password, confirmPassword } = registerForm

    // cập nhật dữ liệu khi mà nhập trong input
    const onChangeRegisterForm = e => setRegisterForm({
        ...registerForm,
        [e.target.name]: e.target.value,

    })


    // Xử lý đoạn submit form
    const { registerUser } = useContext(AuthContext)
    const [alert, setAlert] = useState(null)


    // khi ấn submit form   
    const handleRegister = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setAlert({ type: 'danger', message: 'Incorrect repeat password!' })
            setTimeout(() => setAlert(null), 5000)
            return
        }

        try {
            const registerData = await registerUser(registerForm)
            if (!registerData.success) {
                setAlert({ type: 'danger', message: registerData.message })
                setTimeout(() => setAlert(null), 5000)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <section className="register-photo" style={{ padding: '80px 0' }}>
                <div className="form-container">
                    <div className="image-holder"></div>
                    <form onSubmit={handleRegister}>
                        <AlertMessage info={alert} />
                        <h2 className="text-center"><strong>Create</strong> an account.</h2>
                        <div className="mb-3"><input className="form-control" value={username} onChange={onChangeRegisterForm} type="email" name="username" placeholder="Email" /></div>
                        <div className="mb-3"><input className="form-control" value={password} onChange={onChangeRegisterForm} type="password" name="password" placeholder="Password" /></div>
                        <div className="mb-3"><input className="form-control" valie={confirmPassword} onChange={onChangeRegisterForm} type="password" name="confirmPassword" placeholder="Password (repeat)" /></div>
                        <div className="mb-3">
                            <div className="form-check"><label className="form-check-label"><input className="form-check-input" type="checkbox" />Is teacher?</label></div>
                        </div>
                        <div className="mb-3"><button className="btn btn-primary d-block w-100" type="submit">Sign Up</button></div>
                        <Link className="already" to='/login' >You already have an account? Login here.</Link>
                    </form>
                </div>
            </section>
        </>
    )
}
