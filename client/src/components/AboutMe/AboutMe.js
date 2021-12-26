import React from 'react'
import osakaAvatar from '../../assets/img/osaka_vinyl_avatar.jpg';
import "./AboutMe.scss";

const AboutMe = () => {
    return (
        <div className="ov-about-me">
            <img src={osakaAvatar} />
            <div className="ov-about-me__content">
              
                <h2>Ruben González Aranda</h2>
                <h3>FullStack Developer</h3>

                <p>_Please click to access additional information</p>
            </div>

        </div>
    )
}

export default AboutMe;
