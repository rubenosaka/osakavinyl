import React, {useState} from 'react';

import Navbar from './components/Navbar/Navbar';
import VinylHome from './components/VinylHome/VinylHome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';

import "./App.scss";

const App = () => {  

    const [consoleValue, setConsoleValue] = useState('_No activity');
    const [extraData, setExtraData] = useState(false);

    return (
        
        <BrowserRouter>

            <div className="osaka-vinyl">
                
                <div className="ov-sidebar">
                    <Navbar 
                        consoleValue={consoleValue} 
                        setConsoleValue={setConsoleValue}
                        extraData={extraData}
                        setExtraData={setExtraData}
                    />
                </div>
                <div className="ov-content">

                    <div className="container-fluid">
                            
                        <Routes> 

                            <Route path="/" exact element={<VinylHome setConsoleValue={setConsoleValue}  setExtraData={setExtraData} />}/>
                            <Route path="/auth" element={<Auth/>}/>
                            
                        </Routes>
                                    
                    </div>

                </div>   
                             
            </div>

        </BrowserRouter>   

    );
};

export default App;

