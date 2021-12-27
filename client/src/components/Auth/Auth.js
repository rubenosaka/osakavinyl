import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

import Icon from './icon';
import { signIn, signUp, googleUser } from '../../actions/auth';
import Input from './Input';

import "./Auth.scss";


const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {

    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(true);
    const [showPassword, setShowPassword] = useState(false); 
  
    const dispatch = useDispatch();
    const navigate = useNavigate();

   
    const handleSubmit = (e) => {
        e.preventDefault();

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
        

        const result = res?.profileObj;
        const token = res?.tokenId;

    
        try {

            dispatch(googleUser({...result, firstName: result?.givenName, lastName: result?.familyName, tokenId: token}, navigate));
  
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

        <section className="ov-section ov-auth">

            <div className="row">

                <div className="col-xl-4 col-lg-7 col-md-9 col-sm-12">

                    <div className="ov-box ov-box--form">

                        <div className="row no-gutter mb-4">

                            <div className="col-sm-12 ">

                                <div class="ov-border--bottom">
                                    <span className="ov-avatar ov-avatar--inline">

                                        <i class="fa-solid fa-lock"></i>

                                    </span>
                                    {isSignup ? "Sign Up" : "Sign In"}

                                </div>                             
                                
                            </div>

                        </div>

                        <div className="row">

                            <form className="col-sm-12" onSubmit={handleSubmit}>                                
                                   
                                {
                                    isSignup && (
                                        <>
                                            <div className="row mb-3">
                                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus />
                                            </div>
                                            <div className="row mb-3">
                                                <Input name="lastName" label="Last Name" handleChange={handleChange} />
                                            </div>
                                        </>
                                    )
                                }
                                

                                <div className="row mb-3">

                                    <Input name="email" label="Email Address"  type="email" handleChange={handleChange} />

                                </div>

                                <div className="row mb-3">

                                    <Input name="password" label="Password" type={showPassword ? "text" : "password"} handleChange={handleChange} handleShowPassword={handleShowPassword} />                                   
                                    
                                </div>

                                {

                                    isSignup && (
                                        
                                        <div className="row mb-3">

                                            <Input name="confirmPassword" label="Repeat Password" type="password" handleChange={handleChange} />                                   
                                        
                                        </div>
                                    )
                                }
                                
                                <input type="submit" className="ov-btn ov-btn--submit mb-3" value={ isSignup ? 'Sign Up' : 'Sign In' } />
                                    
                         
                                <GoogleLogin
                                    clientId="485507829728-0jsqb3itl5pvqq0pnhlfkr6lck6mhc29.apps.googleusercontent.com"
                                    render={(renderProps) => (
                                    <Button 
                                        className="googleButton ov-btn mb-3" 
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

            </div>     
            
        </section>
       
            
        
    );
};

export default Auth;