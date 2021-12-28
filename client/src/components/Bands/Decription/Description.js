import React from 'react'
import moment from 'moment';
import Typist from 'react-typist';

const Description = ({band}) => {

    return (

        <div className="ov-description">

            <img src={band.featured_image} alt={band.name} />

            <div className="ov-description__content">

                <h2><Typist startDelay={500} key={band._id}>Band Name: _{band.name}</Typist></h2>
                <h3><Typist startDelay={1200}key={band._id}>Nationallity: _{band.nationallity.map((nationallity) => nationallity)}</Typist></h3>         
                
                <p>{band.genres.map((genre) => genre)}</p>
                <p>{moment(band.createdAt).fromNow()}</p>
                <p>{band.description}</p>

            </div>

        </div>
    )

}

export default Description;