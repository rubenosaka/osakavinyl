import React, {useState, useEffect} from 'react';
import Filebase from 'react-file-base64';
import { TextField, Button, Typography, Paper} from '@material-ui/core'
import {useDispatch} from 'react-redux';
import {createVinyl, updateVinyl} from '../../../actions/vinyl'; 
import useStyles from './styles';
import { useSelector } from 'react-redux';

const Form = ({currentId, setCurrentId}) =>{

    const classes = useStyles();
    const vinylItem = useSelector((state)=> currentId ? state.vinyl.find(p => p._id === currentId ) : null);
    const [vinylData, setVinylData] = useState({
        name: '',
        artist: '',
        year: '',
        genres: '',
    })
 
    const dispatch = useDispatch()

    const handelSubmit = (e) =>{
        e.preventDefault();

        if(currentId){
            dispatch(updateVinyl(currentId, vinylData));
        }else{
            dispatch(createVinyl(vinylData))
        }
        clear();
    }

    useEffect(() =>{

        if(vinylItem) setVinylData(vinylItem);

    }, [vinylItem])

    const clear = () =>{
        setCurrentId(null);
        setVinylData({
            name: '',
            artist: '',
            year: '',
            genres: '',
        })
     
    }
    

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handelSubmit}>
                <Typography variant="h6">{currentId ? 'Update' : 'Add'} Vinyl</Typography>
    
                <TextField 
                    name="name"
                    variant="outlined"
                    label="Name"
                    value={vinylData.name}
                    onChange={(e)=>setVinylData({...vinylData, name: e.target.value})} 
                    fullWidth
                />
  

                <TextField 
                    name="artist"
                    variant="outlined"
                    label="Artist"
                    value={vinylData.artist}
                    onChange={(e)=>setVinylData({...vinylData, artist: e.target.value})} 
                    fullWidth
                />
                <TextField 
                    name="genres"
                    variant="outlined"
                    label="Genres (Comma separated)"
                    value={vinylData.genres}
                    onChange={(e)=>setVinylData({...vinylData, genres: e.target.value.split(',')})} 
                    fullWidth
                />
                <TextField 
                    name="year"
                    variant="outlined"
                    label="Year"
                    value={vinylData.year}
                    onChange={(e)=>setVinylData({...vinylData, year: e.target.value})} 
                    fullWidth
                />
                <div className={classes.fileInput}>
                    <Filebase type="file" multiple={false} onDone={({base64})=>setVinylData({...vinylData, image_osaka: base64})}></Filebase>
                </div>
                <div className={classes.fileInput}>
                    <Filebase type="file" multiple={false} onDone={({base64})=>setVinylData({...vinylData, image_beer: base64})}></Filebase>
                </div>
                <div className={classes.fileInput}>
                    <Filebase type="file" multiple={false} onDone={({base64})=>setVinylData({...vinylData, image_vinyl: base64})}></Filebase>
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      
            </form>
        </Paper>
    );
}

export default Form;