import React, {useEffect, useState} from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import {LOGOUT} from '../../constants/actionTypes';
import { Button } from '@material-ui/core';
import {useDispatch} from 'react-redux';
import osakaAvatar from '../../assets/img/osaka_vinyl_avatar.jpg';
import AboutMe from '../AboutMe/AboutMe';
import Typist from 'react-typist';

const Navbar = ({consoleValue, setConsoleValue, extraData, setExtraData}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const logOut = ()=>{
        dispatch({type:LOGOUT});

        navigate('/');

        setUser(null);
    }

    
    const handleHover = (value)=>{
        setConsoleValue(value ? '_'+value : 'No activity');
    }

    const handleExtra = (component)=>{
        setExtraData(component ? component : false);
    }

    useEffect(()=>{
        const token = user?.token;
        
        setUser(JSON.parse(localStorage.getItem('profile')));
    },[location, consoleValue]);

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
                                        <span className="ov-avatar ov-avatar--no-margin">

                                            {
                                                user.result.imageUrl ? (                                        
                                                    <span className="ov-avatar__image"><img src={user.result.imageUrl} alt={user.result.firstName ? user.result.firstName : "User profile avatar"} /></span>
                                                ):(
                                                <span className="ov-avatar__letters">{user.result.firstName.charAt(0)+user.result.lastName.charAt(0)}</span>
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
                                        <Button component={Link} className="ov-button ov-button--register" to="/auth"><i class="fa-solid fa-user-plus"></i></Button>
                                    </li>
                                    <li onMouseEnter={()=>handleHover("LogIn")} onMouseLeave={()=>handleHover("No Activity")}>
                                        <Button component={Link} className="ov-button ov-button--login" to="/auth"><i class="fa-solid fa-arrow-right-to-bracket"></i></Button>
                                    </li>
                                </ul>                                                   

                            </div> 

                        )
                    }                        

                </div>

                <div className="ov-header__nav__secondary">
                    <ul>
                        <li onMouseEnter={()=>handleHover("Vinyl Collection")} onMouseLeave={()=>handleHover("No Activity")}>
                            <Button 
                                component={Link} 
                                to={{
                                    pathname: "/",                   
                                    state: { bands: [], vinyls: false }
                                }}
                            >
                                <i className="fas fa-record-vinyl"></i>
                            </Button>
                            
                        </li>
                        <li onMouseEnter={()=>handleHover("Bands Section")} onMouseLeave={()=>handleHover("No Activity")}><Button component={Link} to="/bands"><i className="fas fa-guitar"></i></Button></li>
                        <li className="disabled" onMouseEnter={()=>handleHover("Spotify Panel")} onMouseLeave={()=>handleHover("No Activity")}><i className="fab fa-spotify"></i></li>
                        <li className="disabled" onMouseEnter={()=>handleHover("Horror Movies")} onMouseLeave={()=>handleHover("No Activity")}><i className="fas fa-film"></i></li>
                        <li className="disabled" onMouseEnter={()=>handleHover("Musician Section")} onMouseLeave={()=>handleHover("No Activity")}><i class="fa-solid fa-microphone-lines"></i></li>
                        <li className="ov-list--image" onMouseEnter={()=>{handleHover("About Me"); handleExtra(<AboutMe/>)}} onMouseLeave={()=>{handleHover("No Activity"); handleExtra(false)}}> 
                            <img src={osakaAvatar}/>
                        </li>
                    </ul>    
                </div>                

            </nav>
            <div class="ov-header__console">   
    
              <Typist key={consoleValue.toLowerCase().replace(/\s/g, '_')} loop={0}>{consoleValue.toLowerCase().replace(/\s/g, '_')}</Typist>

               
            </div>
            {
                extraData ?? (
                    <div className="ov-header__data">
                        {extraData}
                    </div>
                )   
            }

           
        </header>
    )
}

export default Navbar;