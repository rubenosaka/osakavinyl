import React from 'react';
import { Container} from '@material-ui/core';

import Navbar from './components/Navbar/Navbar';
import VinylHome from './components/VinylHome/VinylHome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth } from './components/Auth/Auth';


const App = () => {

    return (
        
        <BrowserRouter>
            <Container maxidth="lg">
                <Navbar/>
                <Routes> 
                    <Route path="/" exact element={<VinylHome />}/>
                    <Route path="/auth" element={<Auth/>}/> 
                </Routes>
            </Container>
        </BrowserRouter>

    );
};

export default App;