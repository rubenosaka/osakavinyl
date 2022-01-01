import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Grow } from '@material-ui/core';
import Bands from './Bands/Bands'

const List = ({setCurrentId, setConsoleValue, setExtraData}) =>{
    
    const [loading, setLoading] = useState(false);
    const bandList = useSelector((state)=>state.bands);

    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        console.log(loading)

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
                                                    <div key={band._id} className={!user ?  "col-xl-2 col-lg-4 col-sm-3" : "col-xl-3 col-lg-6 col-sm-4"}>
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