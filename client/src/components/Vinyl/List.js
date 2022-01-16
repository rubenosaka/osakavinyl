import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { Grow, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getVinylPaginate } from '../../actions/vinyl';
import Vinyl from './Vinyl/Vinyl'
import {ITEM_SIZE, PAGINATION} from '../../constants/globalVars';
import Loader from '../Loader/Loader';

const List = ({setCurrentId, setConsoleValue, setExtraData, loading, setLoading}) =>{

    const vinylList = useSelector((state)=> (state.vinyl) && state.vinyl.pages ? state.vinyl.list : state.vinyl);
    const pagination = useSelector((state)=> (state.vinyl) && state.vinyl.pages ? state.vinyl.pages : null);
    const [page, setPage] = useState(1);
   
    const dispatch = useDispatch();

    const handlePagination = (itin) =>{
        dispatch(getVinylPaginate( itin )).then(()=>{
            setLoading(true)
        });
        setLoading(false); 
        setPage(itin);
    }

    return (
        <Grow in>
            <section className="ov-sub-section">
                {
                    loading ? (    
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
                    ):(

                       <Loader />                            

                    )
                }
                
                
                     
                {
                    pagination && PAGINATION > pagination ? 
                        
                        <div className="ov-pagination">
                            <ul>
                            {
                                [...Array(pagination)].map((e, i) => {
                                    let itin = i +1;
                                    return(<li className={(page) && page === itin ? 'active' : ''} key={i}><Button className={(page) && page === itin ? 'current' : ''} onClick={()=>handlePagination(itin)}>{itin}</Button></li>)
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