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
                    <div className={!user ? "col-sm-12" : "col-sm-8"}>
                        <List setCurrentId={setCurrentId} />
                    </div>
                    {
                        user ? (
                   
                            <div className={!user ? "col-sm-12" : "col-sm-4"}>
                                <Form currentId={currentId} setCurrentId={setCurrentId}/>
                            </div>
                        
                        ):(
                            <></>
                        )
                    }
                </div>
            </section>
        </Grow> 
    );
   
};

export default VinylList;

