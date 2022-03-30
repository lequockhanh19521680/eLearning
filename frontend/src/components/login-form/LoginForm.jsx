import React, { useContext , useState} from 'react'
import { logo } from '../../assets/img'
import './login-form.css'
import { AuthContext } from '../../contexts/AuthContext'

const LoginForm = () => {     
    
    //  // Data trong form
    //  const [loginForm, setLoginForm] = useState({
    //     username: '',
    //     password: '',
    // })
    // const { username, password } = loginForm

    // // cập nhật dữ liệu khi mà nhập trong input
    // const onChangeLoginForm = e => setLoginForm({
    //     ...loginForm,
    //     [e.target.name]: e.target.value
    // })


    // // Xử lý đoạn submit form
    // const { loginUser } = useContext(AuthContext)
    // const [alert, setAlert] = useState(null)


    // // khi ấn submit form   
    // const handleLogin = async (e) => {
    //     e.preventDefault()
    //     try {
    //         const loginData = await loginUser(loginForm)
    //         if(loginData.success){
    //             setAlert(null)
    //         }else{
    //             setAlert({type: 'info', message: loginData.message})
    //             setTimeout(() => setAlert(null), 5000)
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }


    return (
        <>
            <section className="login-clean">
                <div className="container">
                    <div className="row align-items-center padding-mobile">
                        <div className="col-md-6 col-align-left"><img id="logo" src={logo} /></div>
                        <div className="col-md-6 col-align-right padding-top-18" style={{ marginTop: '50px' }}>
                            <form  >
                                <h2 className="visually-hidden">Login Form</h2>
                                <div className="illustration"><i className="icon ion-ios-navigate" style={{ color: '#5595f0' }}></i></div>
                                <div className="mb-3"><input className="form-control" type="email" name="email" placeholder="Email" /></div>
                                <div className="mb-3"><input className="form-control" type="password" name="password" placeholder="Password" /></div>
                                <div className="mb-3"><button className="btn btn-primary d-block w-100" type="submit" style={{ opacity: 0.92, background: '#468bef' }}>Log In</button>
                                </div><a className="forgot" href="#">Forgot your email or password?</a>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

           
        </>
    )
}

export default LoginForm