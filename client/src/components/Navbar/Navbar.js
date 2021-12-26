import React, {useEffect, useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useStyles from './styles';
import {LOGOUT} from '../../constants/actionTypes';

import {useDispatch} from 'react-redux';
import osakaAvatar from '../../assets/img/osaka_vinyl_avatar.jpg';

const Navbar = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [consoleValue, setConsoleValue] = useState('_No activity');

    console.log(user);


    const logOut = ()=>{
        dispatch({type:LOGOUT});

        navigate('/');

        setUser(null);
    }

    
    const handleHover = (value)=>{
        setConsoleValue(value ? '_'+value : 'No activity');
    }

    useEffect(()=>{
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('profile')));
    },[location]);

    return(

        <header className="ov-header">

            <nav className="ov-header__nav">

                <div className="ov-header__nav__primary">
                                   
                    <div className="ov-header__nav__primary__logo">                       

                        <h1><a href="/" onMouseEnter={()=>handleHover("Home")} onMouseLeave={()=>handleHover("No Activity")}>OsakaVinyl</a></h1>

                    </div>

                    {
                        user ? (

                            <div className="ov-header__nav__primary__profile ov-header__nav__primary__profile--login">

                                <ul>
                                    <li onMouseEnter={()=>handleHover("Profile")} onMouseLeave={()=>handleHover("No Activity")}>
                                        <span className="ov-avatar">

                                            {
                                                user.result.imageUr ? (                                        
                                                    <span className="ov-avatar__image"><img src={user.result.imageUr} alt={user.result.firstName} /></span>
                                                ):(
                                                <span>{user.result.firstName.charAt(0)+user.result.lastName.charAt(0)}</span>
                                                )

                                            }

                                        </span>
                                    </li>

                                    <li onMouseEnter={()=>handleHover("LogOut")} onMouseLeave={()=>handleHover("No Activity")}>
                                        <span className="ov-button ov-button--logout" onClick={()=>logOut()}><i class="fa-solid fa-power-off"></i></span>     
                                    </li>

                                </ul>

                                

                                
                            
                            </div>                         
                        
                        
                        ): (

                            <div className="ov-header__nav__primary__profile ov-header__nav__primary__profile--login text-end">

                                <ul>
                                    <li onMouseEnter={()=>handleHover("Register")} onMouseLeave={()=>handleHover("No Activity")}>
                                        <a className="ov-button ov-button--register" href="/auth"><i class="fa-solid fa-user-plus"></i></a>
                                    </li>
                                    <li onMouseEnter={()=>handleHover("LogIn")} onMouseLeave={()=>handleHover("No Activity")}>
                                        <a className="ov-button ov-button--login" href="/auth"><i class="fa-solid fa-arrow-right-to-bracket"></i></a>
                                    </li>
                                </ul>                                                   

                            </div> 

                        )
                    }                        

                </div>

                <div className="ov-header__nav__secondary">
                    <ul>
                        <li onMouseEnter={()=>handleHover("Vinyl Collection")}>
                            <i className="fas fa-record-vinyl"></i>
                        </li>
                        <li onMouseEnter={()=>handleHover("Bands Section")} onMouseLeave={()=>handleHover("No Activity")}><i className="fas fa-guitar"></i></li>
                        <li onMouseEnter={()=>handleHover("Spotify Panel")} onMouseLeave={()=>handleHover("No Activity")}><i className="fab fa-spotify"></i></li>
                        <li onMouseEnter={()=>handleHover("Horror Movies")} onMouseLeave={()=>handleHover("No Activity")}><i className="fas fa-film"></i></li>
                        <li onMouseEnter={()=>handleHover("Musician Section")} onMouseLeave={()=>handleHover("No Activity")}><i class="fa-solid fa-microphone-lines"></i></li>
                        <li className="ov-list--image" onMouseEnter={()=>handleHover("Vinyl Collection")} onMouseLeave={()=>handleHover("No Activity")}> 
                            <img src={osakaAvatar}/>
                        </li>
                    </ul>    
                </div>                

            </nav>
            <div class="ov-header__console">
                {consoleValue}
            </div>
           
        </header>
    )
}

export default Navbar;