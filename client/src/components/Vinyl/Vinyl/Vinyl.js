import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { likeVinyl, deleteVinyl } from '../../../actions/vinyl';

const Vinyl = ({vinyl, setCurrentId}) =>{

    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Card className={classes.card} >
            <CardMedia className={classes.media} image={vinyl.image_vinyl} title={vinyl.name}/>
            <div className={classes.overlay}>
                <Typography variant="body2">{moment(vinyl.createdAt).fromNow()}</Typography>

            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: 'white'}} size="small" onClick={()=> setCurrentId(vinyl._id)}>
                    <MoreHorizIcon fonySize="default"></MoreHorizIcon>
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="h2">{vinyl.genres.map((genre) => genre)}</Typography>
                {vinyl.description}
            </div>
            <Typography className={classes.title} variant="h5" gutterButton>{vinyl.name}{vinyl.year ? ` (${vinyl.year})` : ''}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{vinyl.artist}</Typography>

            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" onClick={()=>{dispatch(likeVinyl(vinyl._id))}}><ThumbUpIcon fontSize="small"/> &nbsp; {vinyl.likeCount}</Button>
                <Button size="small" onClick={()=>{dispatch(deleteVinyl(vinyl._id))}}><DeleteIcon fontSize="small"/> &nbsp;Delete</Button>
            </CardActions>    
        </Card>
    );
}

export default Vinyl;