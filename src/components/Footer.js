import React from 'react'
import {Link} from 'react-router-dom'
import '../style/Footer.scss'
import logo from '../images/logo-bookmark-white.svg'

function Footer() {
    return (
        <div id="footer">
            <div className="container">
                <div className="footer">
                    <div className="footer-logo">
                        <img src={logo} alt="Picture not found" />
                    </div>
                    <div className="footer-links">
                        <ul>
                            <li>
                                <a href="#features">FEATURES</a>
                            </li>
                            <li>
                                <Link to="/pricing">PRICING</Link>
                            </li>
                            <li>
                                <a href="#contact">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <ul>
                            <li>
                                <a>
                                    <i className="fab fa-facebook-square"></i>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer