import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Icon from './icon';
import { signIn, signUp } from '../../actions/auth';
import { AUTH } from '../../constants/actionTypes';
import Input from './Input';


const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {

    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(true);
    const [showPassword, setShowPassword] = useState(false); 
  
    const dispatch = useDispatch();
    const navigate = useNavigate();

   
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(form);
        if (isSignup) {
            dispatch(signUp(form, navigate));
        } else {
            dispatch(signIn(form, navigate));
        }
    };

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const googleSuccess = async (res) => {
        console.log(res);

        const result = res?.profileObj;
        const token = res?.tokenId;
    
        try {
            dispatch({ type: AUTH, data: { result: {...result, firstName: result?.givenName, lastName: result?.familyName}, token  }});
    
            navigate('/');

        } catch (error) {

          console.log(error);

        }

      };
    
      const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

 

    const switchMode = () =>{
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    }

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

    return (

        <section className="ov-section">

            <div className="row justify-content-md-center">

                <div className="col-lg-3 col-md-4 col-sm-5">

                    <div className="ov-box--form">

                        <Avatar>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <h5>
                            {isSignup ? "Sign Up" : "Sign In"}
                        </h5>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                {
                                    isSignup && (
                                        <>
                                            <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                            <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                        </>
                                    )
                                }
                                <Input name="email" label="Email Address"  type="email" handleChange={handleChange} />
                                <Input name="password" label="Password" type={showPassword ? "text" : "password"} handleChange={handleChange} handleShowPassword={handleShowPassword} />
                                {
                                    isSignup && <Input name="confirmPassword" label="Repeat Password" type="password" handleChange={handleChange} />
                                }
                            </Grid>
                            <Button type="submit" fullWidth variant="contained" color="primary" className="ov-btn ov-btn--submit">
                                { isSignup ? 'Sign Up' : 'Sign In' }
                            </Button>
                            <GoogleLogin
                                clientId="485507829728-0jsqb3itl5pvqq0pnhlfkr6lck6mhc29.apps.googleusercontent.com"
                                render={(renderProps) => (
                                <Button 
                                    className="googleButton" 
                                    color="primary" 
                                    fullWidth 
                                    onClick={renderProps.onClick} 
                                    disabled={renderProps.disabled} 
                                    startIcon={<Icon />} 
                                    variant="contained">
                                    Google Sign In
                                </Button>
                                )}
                                onSuccess={googleSuccess}
                                onFailure={googleError}
                                cookiePolicy="single_host_origin"
                            />
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Button onClick={switchMode}>
                                        { isSignup ? 'Already have an account? Sign In!' : "Don't have and account? Sing Up!" }
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>

                    </div> 

                </div>

            </div>     
            
        </section>
       
            
        
    );
};

export default Auth;