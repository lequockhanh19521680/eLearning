import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logo } from '../../assets/img/'
import './header.css'

const Header = () => {
    const Navigate = useNavigate();
    const handleSignout = () => {
        Navigate('/login')
        /*   */
    }
    return (
        <>
            <nav class="navbar navbar-expand-lg fixed-top sticky-top navbar-light bg-white">
                <div class="container-fluid">
                    <div class="d-flex">

                        <Link to="/main" class="navbar-brand text-uppercase font-weight-bold">
                      
                                <img  src={logo} className="logo" alt='logo'/>
                                <span id="logoTxt">SimpleCode</span>
                           

                        </Link>
                    </div>
                    <span class="d-flex" id="homeTxt">Home</span>
                    <div class="d-flex col-1 ">
                        <Link class="btn  btn-lg btn-floating  avatar-a" to="" type='button' role={'button'}></Link>
                        <a  onClick={handleSignout} role={'button'} style={{ paddingTop: '5px', paddingLeft: '15px' }} id="signout">Sign out </a>
                    </div>

                </div>
            </nav>
        </>
    )
}
export default Header