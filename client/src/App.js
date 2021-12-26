import React from 'react';

import Navbar from './components/Navbar/Navbar';
import VinylHome from './components/VinylHome/VinylHome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';

import "./App.scss";

const App = () => {  

    return (
        
        <BrowserRouter>

            <div className="osaka-vinyl">
                
                <div className="ov-sidebar">
                    <Navbar/>
                </div>
                <div className="ov-content">

                    <div className="container-fluid">
                            
                        <Routes> 

                            <Route path="/" exact element={<VinylHome />}/>
                            <Route path="/auth" element={<Auth/>}/>
                            
                        </Routes>
                                    
                    </div>

                </div>   
                             
            </div>

        </BrowserRouter>   

    );
};

export default App;

