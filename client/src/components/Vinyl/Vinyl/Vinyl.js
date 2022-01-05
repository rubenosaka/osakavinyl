import React from 'react';
import { Button, Grow } from '@material-ui/core';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './vinyl.scss';
import { likeVinyl, deleteVinyl } from '../../../actions/vinyl';
import SingleVinyl from '../Decription/Description';

const Vinyl = ({vinyl, setCurrentId, setConsoleValue, setExtraData}) =>{

    const user = JSON.parse(localStorage.getItem('profile'));
    const uid = user.result._doc._id ? user.result._doc._id : null;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleHover = (value)=>{

        setConsoleValue(value ? '_'+value : 'no_activity');     

    }

    const handleExtra = (component)=>{

        setExtraData(component ? component : false);     

    }
   
    return (
        <Grow in>
            <div className="ov-card ov-card--vinyl ov-box"  onMouseEnter={()=>{handleHover("vinyl_collection_item"); handleExtra(<SingleVinyl vinyl={vinyl}/>)}} onMouseLeave={()=>{handleHover("No Activity"); handleExtra(false)}}>

                <div className="ov-card__image ov-card--vinyl__image">
                    <img src={vinyl.featured_image} alt={vinyl.name} />
                </div> 
                
                <div className="ov-card__content d-none">
                    <div className="ov-card__date">
                        {moment(vinyl.createdAt).fromNow()}
                    </div>

                    <div className="ov-card__tags">
                        {vinyl.genres.map((genre) => genre)}
                    </div>
                    <div className="ov-card__year">
                        {vinyl.name}{vinyl.year ? ` (${vinyl.year})` : ''}
                    </div>
                    {vinyl.artist}
                    <p>{vinyl.description}</p>
                </div>
                <div className="ov-card__actions">

                    <ul>

                        <li><Button size="small" onClick={()=> setCurrentId(vinyl._id)}><i className="fa-solid fa-eye"></i></Button></li>                        

                        {
                          
                            (uid === vinyl.uid || user.role === "admin") ? (
                                
                                <>                                    
                                    <li><Button size="small" onClick={()=>{dispatch(likeVinyl(vinyl._id))}}><i className="fas fa-heart"></i>{vinyl.likeCount}</Button></li>
                                    <li><Button size="small" onClick={()=> setCurrentId(vinyl._id)}><i className="fa-solid fa-ellipsis"></i></Button></li>                        
                                    <li><Button size="small" onClick={()=>{dispatch(deleteVinyl(vinyl._id, navigate))}}><i className="fas fa-trash-can"></i></Button></li>
                                    
                                </>

                            ) : (
                                <></>
                            )        

                        }

                    </ul>
                
                    
                </div>

            </div>
        </Grow>
    );
}

export default Vinyl;