import React from 'react';
import { useSelector } from 'react-redux';

import Bands from './Bands/Bands'

const List = ({setCurrentId, setConsoleValue, setExtraData}) =>{
    const vinylList = useSelector((state)=>state.vinyl);

    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <section className="ov-sub-section">

            <div className="ov-box">

                {
                    !vinylList.length ? <span>Sorry but there are no results</span> : vinylList.length > 0 ? (
                                    
                        <div className="row">
                            {
                                vinylList.map((vinyl)=>(

                                    <div key={vinyl._id} className={!user ? "col-xl-3 col-lg-6 col-sm-3" : "col-xl-4 col-lg-6 col-sm-4"}>
                                        
                                        <Bands 
                                            vinyl={vinyl} 
                                            setCurrentId={setCurrentId} 
                                            setConsoleValue={setConsoleValue} 
                                            setExtraData={setExtraData}
                                        >

                                        </Bands>
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
    );
}

export default List;