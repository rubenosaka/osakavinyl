import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Grow } from '@material-ui/core';
import Bands from './Bands/Bands'
import {ITEM_SIZE} from '../../constants/globalVars';

const List = ({setCurrentId, setConsoleValue, setExtraData}) =>{
    
    const [loading, setLoading] = useState(false);
    const bandList = useSelector((state)=>state.bands);
    const estado = useSelector((state)=>state);

    console.log(estado);
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {

        setLoading(true)

    },[bandList])

    return (
        
        loading ? (

            <Grow in>
                <section className="ov-sub-section">
                            <div className="ov-box">
                                {
                            !bandList.length ? <span>Sorry but there are no results</span> : bandList.length > 0 ? (
                                            
                                <div className="row">
                                    {
                                        bandList.map((band)=>(
                                            <div key={band._id} className={ITEM_SIZE}>
                                                <Bands 
                                                    band={band} 
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
            </Grow>
        ):(
            <div>
                MEEEC
            </div>
        )


    );
}

export default List;