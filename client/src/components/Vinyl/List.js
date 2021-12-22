import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import useStyles from './Vinyl/styles';

import Vinyl from './Vinyl/Vinyl'

const List = ({setCurrentId}) =>{
    const vinylList = useSelector((state)=>state.vinyl);

    console.log(vinylList);

    const classes = useStyles();

    return (
        !vinylList.length ? <CircularProgress/> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {
                    vinylList.map((vinyl)=>(

                        <Grid key={vinyl._id} item xs={12} sm={6}>
                            <Vinyl vinyl={vinyl} setCurrentId={setCurrentId}>

                            </Vinyl>
                        </Grid>
                    ))
                }
            </Grid>
        )
    );
}

export default List;