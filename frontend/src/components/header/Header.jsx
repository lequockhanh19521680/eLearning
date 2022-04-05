import React from 'react'
import './header.css'

const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg fixed-top sticky-top navbar-light bg-white">
                <div class="container-fluid">
                    <div class="d-flex">
                        <a href="" class="navbar-brand text-uppercase font-weight-bold"><span>SimpleCode</span></a>
                    </div>
                    <span class="d-flex" id="homeTxt">Màn hình chính</span>
                    <div class="d-flex ">

                        <a class="btn  btn-lg btn-floating  avatar-a"  href =""type='button' role={'button'}></a>
                        
                    </div>

                </div>
            </nav>
        </>
    )
}
export default Header