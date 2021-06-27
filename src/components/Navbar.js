import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import '../style/Navbar.scss'
import logo from '../images/logo-bookmark.svg'
import logoWhite from '../images/logo-bookmark-white.svg'
import {Context} from '../NavContext'
import Button from './Button'

function Navbar() {
    const {navShown, toggleNav} = useContext(Context)
    const burgerClass = navShown ? "fa-times" : "fa-bars"

    return (
        <nav>
            <div className="container">
                <div className="navbar">
                    <div className={navShown ? "navbar-brand invisible" : "navbar-brand"}>
                        <div className="navbar-brand-logo">
                            <Link to="/">
                                <img src={logo} alt="Picture not found" />
                            </Link>
                        </div>
                        <div className="navbar-brand-burger">
                            <div className="navbar-brand-burger-split">
                                <i onClick={toggleNav} className={`fas ${burgerClass}`}></i>
                                <ul>
                                    <li>
                                        <a href="#features">Features</a>
                                    </li>
                                    <li>
                                        <Link to="/pricing">Pricing</Link>
                                    </li>
                                    <li>
                                        <a href="#contact">Contact</a>
                                    </li>
                                    <li>
                                        <Button type="red">Login</Button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={navShown ? "navbar-menu" : "navbar-menu hidden"}>
                        <div onClick={toggleNav}
                            className="navbar-menu-bg"
                        ></div>
                        <div className="navbar-menu-inner">
                            <div className="navbar-menu-inner-header">
                                <div className="navbar-menu-inner-header-logo">
                                    <Link to="/" onClick={toggleNav}>
                                        <img src={logoWhite} alt="Picture not found" />
                                    </Link>
                                </div>
                                <div className="navbar-menu-inner-header-close">
                                    <i onClick={toggleNav} className={`fas fa-times`}></i>
                                </div>
                            </div>
                            <div className="navbar-menu-inner-body">
                                <a href="#features"
                                onClick={toggleNav}>Features</a>
                                <Link to="/pricing">Pricing</Link>
                                <a href="#contact"
                                onClick={toggleNav}>Contact</a>
                                <Button type="shallow">Login</Button>
                            </div>
                            <div className="navbar-menu-inner-footer">
                                <i className="fab fa-facebook-square"></i>
                                <i className="fab fa-twitter"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar