import React, { useEffect, useState } from 'react'

import './Header.css';


const Header = () => {
    const [screenWidth, getScreenWidth] = useState(window.innerWidth);
    const setScreenWidth = () => getScreenWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', setScreenWidth)

        return(() => {
            window.removeEventListener('resize', setScreenWidth)
        })
    }, [screenWidth]);

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

                    {screenWidth > 960 && 
                    <div>
                        <img className="header-image" src="/headshot.jpg"/>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;
