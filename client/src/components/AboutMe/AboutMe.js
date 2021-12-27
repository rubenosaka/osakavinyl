import React from 'react'
import osakaAvatar from '../../assets/img/osaka_vinyl_avatar.jpg';

const AboutMe = () => {
    return (
        <div className="ov-description">
            <img src={osakaAvatar} />
            <div className="ov-description__content">
              
                <h2>Ruben González Aranda</h2>
                <h3>FullStack Developer</h3>

                <p>_Please click to access additional information</p>
            </div>

        </div>
    )
}

export default AboutMe;
