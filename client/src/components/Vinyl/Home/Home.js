import React, { useState, useEffect } from 'react';
import { Grow } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
// import useStyles from './styles';

import { getVinylPaginate } from '../../../actions/vinyl';
import { getBands } from '../../../actions/bands';

import List from '../List';
import Form from '../Form/Form'; 

const VinylList = ({setConsoleValue, setExtraData}) => {

    const [currentId, setCurrentId] = useState(null);
    const [loading, setLoading] = useState(null);
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    
    const { page } = useParams();
    useEffect(()=>{                   

        dispatch(getVinylPaginate(page)).then(()=>{
          
            setLoading(true);
            
        });    
             
        dispatch(getBands()); 

  
    }, [currentId, page, dispatch]);

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
                            
                            <List setCurrentId={setCurrentId} setConsoleValue={setConsoleValue}  setExtraData={setExtraData} loading={loading} setLoading={setLoading}/>
                            
                        }
                        
                    </div>
                </div>
            </section>
        </Grow> 
    );
   
};

export default VinylList;

