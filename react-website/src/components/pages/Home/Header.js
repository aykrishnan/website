import React from 'react'
import { Link } from 'react-router-dom';

import './Header.css';


const Header = () => {
    return (
        <div>
            <div className="heading-container">
                <div className="main-heading">
                    Anísh Krishnan
                </div>

                <div className="subtitle">
                    Software engineer, technical lead, and solutions architect
                </div>

                <div className="bio-container">
                    <div className="bio">
                        I'm a software engineer with over 8 years of experience in technology and consulting.
                        As someone with a passion for cloud computing, web application development, and mentorship,
                        as well as experience successfully leading development teams, I can help improve and scale
                        your software and implement strong long-term development practices.
                    </div>

                    <div>
                        <img className="header-image" src="/headshot.jpg"/>
                    </div>
                </div>
                <div className="buttons-container">
                    <ul className="social-media-buttons">
                        <li className="social-media-button">
                            <Link to="https://linkedin.com/in/krishananish" className="social-media-link"><i className="fa fa-linkedin-square"/> LinkedIn</Link>
                        </li>
                        <li className="social-media-button">
                            <Link to="https://aykrishnan.medium.com" className="social-media-link"><i className="fa fa-medium"/> Medium</Link>
                        </li>
                        <li className="social-media-button">
                            <Link to="https://twitter.com/aykrishnan" className="social-media-link"><i className="fa fa-twitter"/> Twitter</Link>
                        </li>
                        <li className="social-media-button">
                            <Link to="https://instagram.com/aykrishnan" className="social-media-link"><i className="fa fa-instagram"/> Instagram</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
