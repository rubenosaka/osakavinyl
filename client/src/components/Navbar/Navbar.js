import React, {useEffect, useState} from 'react';
import { AppBar, Avatar, Typography, Toolbar, Button} from '@material-ui/core';
import { Link, useNavigate, useLocation, Navigate } from 'react-router-dom';
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

        <AppBar className={classes.appBar} position="static" color="inherit">

            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Vinyl Collection</Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.firstName} src={user.result.imageUrl}>
                            {user.result.firstName.charAt(0)}{user.result.lastName.charAt(0)}
                        </Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={()=>logOut()}>LogOut</Button>
                    </div>
                ): (
                    <div className={classes.profile}>
                          <Button component={Link} to="/auth" variant="contained" color="primary" >LogIn</Button>
                    </div>
                )}
            </Toolbar>
           
        </AppBar>
    )
}

export default Navbar;