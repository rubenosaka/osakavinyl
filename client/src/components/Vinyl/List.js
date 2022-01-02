import React from 'react';
import { useSelector } from 'react-redux';
import { Grow } from '@material-ui/core';
import Vinyl from './Vinyl/Vinyl'
import {ITEM_SIZE} from '../../constants/globalVars';

const List = ({setCurrentId, setConsoleValue, setExtraData}) =>{
    
    const vinylList = useSelector((state)=>state.vinyl);

    return (
        <Grow in>
            <section className="ov-sub-section">

                <div className="ov-box">

                    {
                        !vinylList.length ? <span>Sorry but there are no results</span> : vinylList.length > 0 ? (
                                        
                            <div className="row">
                                {console.log(vinylList)}
                                {
                                    

                                    vinylList.map((vinyl)=>(                                        

                                        <div key={vinyl._id} className={ITEM_SIZE}>

                                            <Vinyl 
                                                vinyl={vinyl} 
                                                setCurrentId={setCurrentId} 
                                                setConsoleValue={setConsoleValue} 
                                                setExtraData={setExtraData}
                                            />
                                            
                                        </div>
                                                          
                                    ))
                                }
                            </div>

                        ) : (
                            <span>
                            Sorry but there are no results
                            </span>
                        )
                    }

                </div>            
                
            </section>
        </Grow>
    );
}

export default List;