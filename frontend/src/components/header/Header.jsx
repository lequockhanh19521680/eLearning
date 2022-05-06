import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { logo } from '../../assets/img/'
import './header.css'
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
    const [show, setShow] = React.useState(false);
    const [showKs, setShowKs] = React.useState(true);
    const [showNh, setShowNg] = React.useState(true);
  
    const [isSignUp, setIsSignUp] = React.useState(false);
    const handleShow = () => {
      if (typeof window !== "undefined") {
        if (window.pageYOffset > 120) {
          if (!show) {
            setShow(true);
          }
        }
        if (window.pageYOffset < 120) {
          setShow(false);
        }
      }
    };
    const onHangleState = (setParam) => {
      setTimeout(() => {
        return setParam(true);
      },300 );
    };
  
    const [data, setData] = useState(true);
    const onChangeSidebar = () => {
      setData(false);
    };
    const changeSidebar = (e) => {
      setData(e);
    };
    useEffect(() => {
      if (typeof window !== "undefined") {
        window.addEventListener("scroll", handleShow);
      }
      return () => {
        if (typeof window !== "undefined") {
          window.removeEventListener("scroll", handleShow);
        }
      };
    }, []);
    return (
    <>
      <div className="home-main header-component">
        <div className="home-main home-component-down">
          <div className="">
            <div
              className={
                show
                  ? "home-main home-navbar scroll-down"
                  : "home-main home-navbar"
              }
            >
              <div className="home-main home-navbar-inside">
                <div className="home-main home-navbar-left">
                  <a
                    href="/Main"
                    className="main-element link-event link-event-delay active color-main"
                    style={{ cursor: "pointer" }}
                  >
                      {/* Chèn logo vao day*/}
                    <img
                      src="http://localhost:3000/static/media/logo_chu.03d47cf3ac2a0290e887.png"
                      className="logo"
                      alt="logo"
                      style={{ marginRight: "56px" }}
                    />
                  </a>
                  <a
                    className="main-element link-event link-event-delay single-navbar color-main"
                    target="_blank"
                    href="/Main"
                    style={{
                      marginRight: "24px",
                      textDecoration: "none",
                      position: "relative",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      gap: "0 4px",
                    }}
                    
                  >
                    Home
                  </a>
                  <a
                    className="main-element link-event link-event-delay single-navbar color-main"
                    target="_blank"
                    style={{
                      marginRight: "24px",
                      textDecoration: "none",
                      position: "relative",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      gap: "0 4px",
                    }}
                    // href="/"
                    onMouseEnter={() => setShowKs(false)}
                    onMouseLeave={() => onHangleState(setShowKs)}
                  >
                    Teacher <i class="fa-solid fa-angle-down"></i>
                    <div
                      className={
                        showKs ? "ks-position isShowKS" : "ks-position "
                      }
                    >
                      <div class="home-main ks-drop-down">
                        <div class="home-main  ks-drop-down-main">
                          <div class="home-main header-btn"></div>
                          <div class="home-main btn-ks">
                            <div class="home-main btn-ks-lable">
                              <a
                                exact="true"
                                class="btn-ks-lable log-btn"
                                href="/Lectures"
                              >
                                Lectures
                              </a>
                            </div>
                          </div>
                          <div class="home-main btn-ks">
                            <div class="home-main btn-ks-label">
                              <a
                                exact="true"
                                class="btn-ks-label log-btn"
                                href="/Exercises"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                Exercises
                              </a>
                            </div>
                          </div>
                          <div class="home-main btn-ks">
                            <div class="home-main btn-ks-label">
                              <a
                                exact="true"
                                class="btn-ks-label log-btn"
                                href="/Exams"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                               Exams
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    className="main-element link-event link-event-delay single-navbar color-main"
                    target="_blank"
                    style={{
                      marginRight: "24px",
                      textDecoration: "none",
                      // color: "rgb(255, 255, 255)",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      gap: "0 4px",
                    }}
                    onMouseLeave={() => onHangleState(setShowNg)}
                    onMouseEnter={() => setShowNg(false)}
                    // href="/"
                  >
                    Class <i class="fa-solid fa-angle-down"></i>
                    <div
                      className={
                        showNh ? "ks-position isShowKS" : "ks-position "
                      }
                    >
                      <div class="home-main ks-drop-down">
                        <div class="home-main ks-drop-down-main">
                          <div class="home-main header-btn"></div>
                          <div class="home-main btn-ks">
                            <div class="home-main btn-ks-lable">
                              <a
                                exact="true"
                                class="btn-ks-lable log-btn"
                                href="/Cấp 1"
                              >
                               Cấp 1
                              </a>
                            </div>
                          </div>
                          <div class="home-main btn-ks">
                            <div class="home-main btn-ks-label">
                              <a
                                exact="true"
                                class="btn-ks-label log-btn"
                                href="/Cấp 2"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                               Cấp 2
                              </a>
                            </div>
                          </div>
                          <div class="home-main btn-ks">
                            <div class="home-main btn-ks-label">
                              <a
                                exact="true"
                                class="btn-ks-label log-btn"
                                href="/restaurant"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                              Cấp 3
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                 
                </div>
                <div className="home main home-navbar-right">
                  <a
                    className="main-element link-event link-event-delay home-header-gift  color-main"
                    target="_blank"
                    style={{ textDecoration: "none", display: "none" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      className="svgFillAll"
                      style={{
                        stroke: "rgb(255, 255, 255)",
                        marginRight: "8px",
                      }}
                    >
                      <g clipPath="url(#icon_gif_box_svg__clip0)" fill="#fff">
                        <path d="M8.666 8A.333.333 0 009 8.333h5.666a1.169 1.169 0 001.167-1.166V5.833a1.168 1.168 0 00-1.167-1.166H9A.333.333 0 008.666 5v3zM2.5 8.333h4.833A.333.333 0 007.666 8V5a.333.333 0 00-.333-.333h-6A1.168 1.168 0 00.167 5.833v1.334a1.169 1.169 0 001.166 1.166H2.5zM7.667 9.667a.333.333 0 00-.334-.334h-5.5a.333.333 0 00-.333.334v5.166A1.169 1.169 0 002.667 16h4.666a.333.333 0 00.334-.333v-6zM9 9.333a.333.333 0 00-.334.334v6A.333.333 0 009 16h4.333a1.168 1.168 0 001.167-1.167V9.667a.333.333 0 00-.334-.334H9z"></path>
                        <path d="M8.695 4.471a.667.667 0 00.63.176c.788-.193 2.686-.703 3.266-1.283A1.972 1.972 0 109.8.577c-.505.504-.986 2.051-1.283 3.266a.694.694 0 00.178.628zm2.05-2.952a.638.638 0 11.902.902 5.99 5.99 0 01-1.523.622 5.948 5.948 0 01.62-1.524zM7.814 3.84c-.296-1.21-.777-2.758-1.28-3.263a1.972 1.972 0 10-2.79 2.787c.578.58 2.476 1.09 3.266 1.283a.667.667 0 00.63-.176.694.694 0 00.174-.63zM4.687 2.422a.638.638 0 01.901-.902c.277.477.486.99.62 1.524a5.93 5.93 0 01-1.521-.622z"></path>
                      </g>
                      <defs>
                        <clipPath id="icon_gif_box_svg__clip0">
                          <path fill="#fff" d="M0 0h16v16H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                    
                  </a>
                  <a
                    className="main-element link-event link-event-delay home-header-gift color-main"
                    style={{ textDecoration: "none" }}
                    href="/contact"
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      className="svgFillAll"
                      style={{
                        stroke: "rgb(255, 255, 255)",
                        marginRight: "8px",
                      }}
                    >
                      <path
                        d="M11.545 6.364L9.867 8.042a3.09 3.09 0 01-4.37 0l-.133-.133L9.172 4.1a5.465 5.465 0 017.727 0v0a5.467 5.467 0 01.828 6.668"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12.523 8.887l2.792 2.792a2.318 2.318 0 010 3.278l-1.264 1.264a4.635 4.635 0 01-6.557 0L3.1 11.827a5.464 5.464 0 010-7.727v0a5.446 5.446 0 013.809-1.6M14.938 15.334l-3.007-3.006M12.714 17.154L9.91 14.35"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    Liên Hệ
                  </a>
                  <span
                    className="home-main main-element home-header-gift
                    number-contact"
                  >
                    <svg
                      width="17"
                      height="17"
                      fill="none"
                      className="svgFillAll"
                      style={{ stroke: "rgb(26, 32, 44)", marginRight: "8px" }}
                    >
                      <path
                        d="M3.167 1.333H6.5L8.167 5.5 6.083 6.75a9.167 9.167 0 004.167 4.167l1.25-2.084 4.167 1.667v3.333A1.666 1.666 0 0114 15.5 13.333 13.333 0 011.5 3a1.667 1.667 0 011.667-1.667"
                        stroke="rgb(255, 255, 255)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    1900 2083
                  </span>
                 
                  <div className="home-main main-element">
                    <div
                      className="home-main jss1759 home-header-ring"
                      style={{ color: "black" }}
                    >
                      <div
                        className="home-main home-header-ring-content"
                        onClick={() => setIsSignUp(!isSignUp)}
                      >
                        <svg
                          width="20"
                          height="20"
                          fill="none"
                          className="svgFillAll"
                          style={{ stroke: "rgb(255, 255, 255)" }}
                        >
                          <path
                            d="M3.63 15.374a12.905 12.905 0 016.37-1.67 12.9 12.9 0 016.37 1.67m-3.592-7.226a2.778 2.778 0 11-5.556 0 2.778 2.778 0 015.556 0zM18.333 10a8.333 8.333 0 11-16.665 0 8.333 8.333 0 0116.665 0z"
                            stroke="rgb(255, 255, 255)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <svg
                          width="10"
                          height="6"
                          fill="none"
                          className="svgFillAll"
                          style={{
                            stroke: "rgb(26, 32, 44)",
                            marginLeft: "6px",
                          }}
                        >
                          <path
                            d="M1.667 1.333L5 4.667l3.333-3.334"
                            stroke="rgb(255, 255, 255)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <div
                        className={
                          isSignUp
                            ? "home-main btn-dn-dk"
                            : "home-main btn-dn-dk isdisplay"
                        }
                        style={{ right: "-26px" }}
                      >
                        <div className="home-main btn-dn-dk-main">
                          <div className="home-main header-btn"></div>
                          <div className="home-main btn-dangnhap">
                            <div className="home-main btn-dangnhap-lable">
                              <NavLink
                                className="btn-dangnhap-lable log-btn"
                                to="/login"
                                exact="true"
                              >
                                 Đăng nhập
                              </NavLink>
                            </div>
                          </div>
                          <div className="home-main btn-dangki">
                            <div className="home-main btn-dangki-label">
                              <NavLink
                                className="btn-dangki-label log-btn"
                                to="/register"
                                exact="true"
                              >
                                 Đăng ký
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div onClick={() => onChangeSidebar()}>
                  </div>
                </div>
              </div>
            </div>
     </div>
        </div>
      </div>
    </>
  );
};
export default Header;
