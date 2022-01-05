import React from 'react';
import { useSelector } from 'react-redux';
import { Grow } from '@material-ui/core';
import { useParams } from "react-router-dom";

import Vinyl from './Vinyl/Vinyl'
import {ITEM_SIZE, PAGINATION} from '../../constants/globalVars';


const List = ({setCurrentId, setConsoleValue, setExtraData}) =>{

    const vinylList = useSelector((state)=> (state.vinyl) && state.vinyl.pages ? state.vinyl.list : state.vinyl);
    const pagination = useSelector((state)=> (state.vinyl) && state.vinyl.pages ? state.vinyl.pages : null);
    const { page } = useParams();

    return (
        <Grow in>
            <section className="ov-sub-section">

                <div className="ov-box">

                    {
                        !vinylList ? <span>Sorry but there are no results</span> : vinylList.length > 0 ? (
                                        
                            <div className="row">

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
                     
                {
                    pagination && PAGINATION > pagination ? 
                        
                        <div className="ov-box ov-pagination">
                            <ul>
                            {
                                [...Array(pagination)].map((e, i) => {
                                    let itin = i +1;
                                    return(<li key={i}><a className={(page) && page === itin ? 'active' : ''} href={'/vinyl/page/'+itin}>{itin}</a></li>)
                                })
                            }
                            </ul>
                        </div>                        

                    :

                        <></> 

                }
            </section>
        </Grow>
    );
}

export default List;