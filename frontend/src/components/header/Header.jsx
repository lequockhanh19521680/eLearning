import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { logo } from '../../assets/img/'
import './header.css'

const Header = (user) => {
    const Navigate = useNavigate();
    const handleSignout = () => {
        Navigate('/login')
        /*   */
    }
 
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top sticky-top navbar-light bg-white">
                <div className="container-fluid">
                    <div className="d-flex">

                        <Link to="/main" className="navbar-brand text-uppercase font-weight-bold">
                      
                                <img  src={logo} className="logo" alt='logo'/>
                                <span id="logoTxt">SimpleCode</span>
                           

                        </Link>
                    </div>
                    <span className="d-flex" id="homeTxt">Home</span>
                    <div className="d-flex col-1 ">
                        <Link className="btn  btn-lg btn-floating  avatar-a" to="" type='button' role={'button'}></Link>
                        <a  onClick={handleSignout} role={'button'}  id="signout">Sign out </a>
                    </div>

                </div>
            </nav>
        </>
    )
}
export default Header