import React, {useEffect, useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useStyles from './styles';
import {LOGOUT} from '../../constants/actionTypes';

import {useDispatch} from 'react-redux';

const Navbar = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    console.log(user);


    const logOut = ()=>{
        dispatch({type:LOGOUT});

        navigate('/');

        setUser(null);
    }

    useEffect(()=>{
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('profile')));
    },[location]);

    return(

        <header className="ov-header">

            <nav class="ov-header__nav">

                <div class="container-fluid">
                
                    <div class="row">

                        <div class="col-sm-3">

                            <h1><a href="/">Osaka Vinyl</a></h1>

                        </div>

                        {
                            user ? (

                                <div class="col-sm-9 ov-header__nav__profile ov-header__nav__profile--login text-end">

                                    <div class="ov-avatar">

                                        {
                                            user.result.imageUr ? (                                        
                                                <span class="ov-avatar__image"><img src={user.result.imageUr} alt={user.result.firstName} /></span>
                                            ):(
                                            <span>{user.result.firstName.charAt(0)+user.result.lastName.charAt(0)}</span>
                                            )

                                        }

                                    </div>

                                    <span class="ov-button ov-button--logout" onClick={()=>logOut()}>LogOut</span>     
                                
                                </div>                         
                            
                            
                            ): (

                                <div class="col-sm-9 ov-nav__profile ov-nav__profile--login text-end">

                                    <a class="ov-button ov-button--login" href="/auth">LogIn</a>                   

                                </div> 

                            )
                        }            

                    </div>

                 </div>                

            </nav>
           
        </header>
    )
}

export default Navbar;