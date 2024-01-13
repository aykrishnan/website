import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Router } from 'react-router-dom';

import './Footer.css';


const Footer = () => {
    const [screenWidth, getScreenWidth] = useState(window.innerWidth);
    const setScreenWidth = () => getScreenWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', setScreenWidth)

        return(() => {
            window.removeEventListener('resize', setScreenWidth)
        })
    }, [screenWidth]);

    return (screenWidth > 960) ? (
        <div className="footer">
            <BrowserRouter>
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
            </BrowserRouter>
        </div>
    ) : (
        <div className="footer">
            <BrowserRouter>
                <div className="buttons-container">
                    <ul className="social-media-buttons">
                        <li className="social-media-button">
                            <Link to="https://linkedin.com/in/krishananish" className="social-media-link"><i className="fa fa-linkedin-square"/></Link>
                        </li>
                        <li className="social-media-button">
                            <Link to="https://aykrishnan.medium.com" className="social-media-link"><i className="fa fa-medium"/></Link>
                        </li>
                        <li className="social-media-button">
                            <Link to="https://twitter.com/aykrishnan" className="social-media-link"><i className="fa fa-twitter"/></Link>
                        </li>
                        <li className="social-media-button">
                            <Link to="https://instagram.com/aykrishnan" className="social-media-link"><i className="fa fa-instagram"/></Link>
                        </li>
                    </ul>
                </div>
            </BrowserRouter>
        </div> 
    );
};

export default Footer;
