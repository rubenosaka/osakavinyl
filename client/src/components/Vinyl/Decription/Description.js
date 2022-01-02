import React from 'react'
import moment from 'moment';
import Typist from 'react-typist';

const Description = ({vinyl}) => {

    return (

        <div key={vinyl._id} className="ov-description">

            <img src={vinyl.featured_image} alt={vinyl.name} />

            <div className="ov-description__content">

                <h2><Typist startDelay={500} key={vinyl.name}>Album: _{vinyl.name}</Typist></h2>
                {

                    (vinyl.band) && vinyl.band.name ? 
                        <h3><Typist startDelay={1200} key={vinyl.band.name}>Artist: _{vinyl.band.name}</Typist></h3>
                    :
                        <></>               

                }                    
                
                <p>{vinyl.genres.map((genre) => genre)}</p>
                <p>{moment(vinyl.createdAt).fromNow()}</p>
                <p>{vinyl.description}</p>

            </div>

        </div>
    )

}

export default Description;