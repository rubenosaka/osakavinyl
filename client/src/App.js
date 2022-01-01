import React, {useState} from 'react';

import Navbar from './components/Navbar/Navbar';
import VinylHome from './components/Vinyl/Home/Home';
import BandsHome from './components/Bands/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';

import "./App.scss";


const App = () => {  

    const [consoleValue, setConsoleValue] = useState('_No activity');
    const [extraData, setExtraData] = useState(null);

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
                            <Route path="/bands" exact element={<BandsHome setConsoleValue={setConsoleValue}  setExtraData={setExtraData} />}/>
                            <Route path="/auth" element={<Auth/>}/>
                            
                        </Routes>
                                                            
                    </div>

                </div>   
                             
            </div>

        </BrowserRouter>   

    );
};

export default App;

