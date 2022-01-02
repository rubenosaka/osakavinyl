import React, { useState, useEffect } from 'react';
import { Grow } from '@material-ui/core';
import { useDispatch } from 'react-redux';

// import useStyles from './styles';

import { getVinylList } from '../../../actions/vinyl';
import { getBands } from '../../../actions/bands';

import List from '../List';
import Form from '../Form/Form'; 
import Loader from '../../../assets/img/loader_blocks.svg';

const VinylList = ({setConsoleValue, setExtraData}) => {

    const [currentId, setCurrentId] = useState(null);
    const [loading, setLoading] = useState(null);
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(()=>{
        
        dispatch(getVinylList()).then(()=>{
            setLoading(true);
        }); 
        dispatch(getBands()); 

    }, [currentId, dispatch]);

    return (
        <Grow in>
            <section className="ov-section">

                <div className="row"> 
              
                    {
                        user ? (
                   
                            <div className={!user ? "col-sm-12" : "order-lg-2 col-xl-4 col-lg-6 col-md-12"}>
                                <Form currentId={currentId} setCurrentId={setCurrentId}/>
                            </div>
                        
                        ):(
                            <></>
                        )
                    }
                    <div className={!user ? "col-sm-12" : "order-lg-1 col-xl-8 col-lg-6 col-md-12"}>
                        {
                            loading ? (    
                                <List setCurrentId={setCurrentId} setConsoleValue={setConsoleValue}  setExtraData={setExtraData}/>
                            ):(

                                <div className="ov-box p-5 text-center">
                                    <h2>_LOADING...</h2>
                                    <img src={Loader} />
                                </div>                             

                            )
                        }
                        
                    </div>
                </div>
            </section>
        </Grow> 
    );
   
};

export default VinylList;

