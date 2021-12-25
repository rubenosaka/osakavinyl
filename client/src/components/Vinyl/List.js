import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress, Paper } from '@material-ui/core';
import useStyles from './Vinyl/styles';

import Vinyl from './Vinyl/Vinyl'

const List = ({setCurrentId}) =>{
    const vinylList = useSelector((state)=>state.vinyl);

    console.log(vinylList);

    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <section className="ov-section">
            
            {
                !vinylList.length ? <span>Sorry but there are no results</span> : vinylList.length > 0 ? (
                                
                    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                        {
                            vinylList.map((vinyl)=>(

                                <Grid key={vinyl._id} item xs={12} sm={!user ? 3 : 4}>
                                    <Vinyl vinyl={vinyl} setCurrentId={setCurrentId}>

                                    </Vinyl>
                                </Grid>
                            ))
                        }
                    </Grid>
                ) : (
                    <Paper>
                        There are no results
                    </Paper>
                )
            }
            
        </section>
    );
}

export default List;