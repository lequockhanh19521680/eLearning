import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <>
            <footer className="footer-basic">
                <h2 style={{textAlign:'center',marginBottom: '20px'}}>Contact Us</h2>
                <div className="social">
                    <a href="#"><i className="icon ion-social-instagram"></i></a>
                    <a href="#"><i className="icon ion-social-twitter"></i></a>
                    <a href="https://www.facebook.com/thaiduong.0205" target={'_blank'}><i className="icon ion-social-facebook"></i></a>
                </div>
                <div>

                </div>
                
                <p className="copyright">Simple Code © 2022</p>
            </footer>
        </>
    )
}

export default Footer