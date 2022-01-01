import React from 'react';
import { Button } from '@material-ui/core';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import './Bands.scss';
import { likeBand, deleteBand } from '../../../actions/bands';
import SingleBand from '../Decription/Description';

const Vinyl = ({band, setCurrentId, setConsoleValue, setExtraData}) =>{

    const dispatch = useDispatch();

    const handleHover = (value)=>{

        setConsoleValue(value ? '_'+value : 'no_activity');     

    }

    const handleExtra = (component)=>{

        setExtraData(component ? component : false);     

    }

    return (
        <div className="ov-card ov-card--vinyl ov-box"  onMouseEnter={()=>{handleHover("band"); handleExtra(<SingleBand band={band}/>)}} onMouseLeave={()=>{handleHover("No Activity"); handleExtra(false)}}>

            <div className="ov-card__image ov-card--vinyl__image">
                <img src={band.featured_image} alt={band.name} />
            </div> 
            
            <div className="ov-card__content">
                <div className="ov-card__date">
                    {moment(band.createdAt).fromNow()}
                </div>

                <div className="ov-card__tags">
                    {band.genres.map((genre) => genre)}
                </div>
                <div className="ov-card__year">
                    {band.name}{band.initYear ? ` (${band.initYear})` : ''}
                </div>
                {band.artist}
                <p>{band.description}</p>
            </div>
            <div className="ov-card__actions">

                <ul>
                    <li><Button size="small" onClick={()=> setCurrentId(band._id)}><i className="fa-solid fa-eye"></i></Button></li>
                    <li><Button size="small" onClick={()=> setCurrentId(band._id)}><i className="fa-solid fa-ellipsis"></i></Button></li>
                    <li><Button size="small" onClick={()=>{dispatch(likeBand(band._id))}}><i className="fas fa-heart"></i>{band.likeCount}</Button></li>
                    <li><Button size="small" onClick={()=>{dispatch(deleteBand(band._id))}}><i className="fas fa-trash-can"></i></Button></li>
                </ul>
               
                
            </div>

        </div>
    );
}

export default Vinyl;