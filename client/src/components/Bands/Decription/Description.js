import React from 'react'
import moment from 'moment';
import Typist from 'react-typist';

const Description = ({vinyl}) => {

    return (

        <div className="ov-description">

            <img src={vinyl.image_vinyl} alt={vinyl.name} />

            <div className="ov-description__content">

                <h2><Typist startDelay={500} key={vinyl.name}>Album Name: _{vinyl.name}</Typist></h2>
                <h3><Typist startDelay={1200}key={vinyl.artist}>Artist: _{vinyl.artist}</Typist></h3>         
                
                <p>{vinyl.genres.map((genre) => genre)}</p>
                <p>{moment(vinyl.createdAt).fromNow()}</p>
                <p>{vinyl.description}</p>

            </div>

        </div>
    )

}

export default Description;