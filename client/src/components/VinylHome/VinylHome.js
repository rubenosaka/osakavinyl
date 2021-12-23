import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';

// import useStyles from './styles';

import { getVinylList } from '../../actions/vinyl';

import List from '../Vinyl/List';
import Form from '../Vinyl/Form/Form'; 


const VinylList = () => {

    const [currentId, setCurrentId] = useState(null);
    // const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getVinylList()); 
    }, [currentId, dispatch]);

    return (
        <Grow in>
            <Container>
                <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}> 
                    <Grid item xs={12} sm={7}>
                        <List setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid>
                </Grid>
            </Container>
        </Grow> 
    );
   
};

export default VinylList;

