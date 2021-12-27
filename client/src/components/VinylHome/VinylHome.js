import React, { useState, useEffect } from 'react';
import { Grow } from '@material-ui/core';
import { useDispatch } from 'react-redux';

// import useStyles from './styles';

import { getVinylList } from '../../actions/vinyl';

import List from '../Vinyl/List';
import Form from '../Vinyl/Form/Form'; 


const VinylList = () => {

    const [currentId, setCurrentId] = useState(null);
    // const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(()=>{
        dispatch(getVinylList()); 
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
                        <List setCurrentId={setCurrentId} />
                    </div>
                </div>
            </section>
        </Grow> 
    );
   
};

export default VinylList;

