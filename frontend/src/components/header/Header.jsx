import React from 'react'
import { logo } from '../../assets/img'

import './header.css'

const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg fixed-top sticky-top navbar-light bg-white">
                <div class="container-fluid">
                    <div class="d-flex">

                        <a href="/main" class="navbar-brand text-uppercase font-weight-bold">
                            
                            <span>SimpleCode</span>
                            </a>
                    </div>
                    <span class="d-flex" id="homeTxt">Home</span>
                    <div class="d-flex col-1 ">
                        <a class="btn  btn-lg btn-floating  avatar-a" href="" type='button' role={'button'}></a>
                        <a href='' style={{paddingTop: '5px',paddingLeft:'15px'} } id="signout">Sign out </a>
                    </div>

                </div>
            </nav>
        </>
    )
}
export default Header