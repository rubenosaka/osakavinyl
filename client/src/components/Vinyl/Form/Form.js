import React, {useState, useEffect} from 'react';
import Filebase from 'react-file-base64';
import { TextField, Button} from '@material-ui/core'
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createVinyl, updateVinyl } from '../../../actions/vinyl';
import { useSelector } from 'react-redux';
import Loader from '../../../assets/img/loader_blocks.svg';

const Form = ({currentId, setCurrentId}) =>{
   
    const vinylItem = useSelector((state)=> currentId ? state.vinyl.list.find(p => p._id === currentId ) : null);
    const bandsList = useSelector((state)=> state.bands);
    const state = useSelector((state)=> state);
    const navigate = useNavigate();

    const [vinylData, setVinylData] = useState({
        name: '',
        band: {
            _id: ''
        },
        year: '',
        genres: '',
    })
 
    const dispatch = useDispatch();

    const handelSubmit = (e) =>{
        e.preventDefault();

        if(currentId){
            dispatch(updateVinyl(currentId, vinylData, navigate));
        }else{
            dispatch(createVinyl(vinylData, navigate))
        }
        clear();
    }

    useEffect(() =>{ 

        if(vinylItem) setVinylData(vinylItem);    

    }, [vinylItem]);

    const clear = () =>{
        setCurrentId(null);
        setVinylData({
            name: '',
            band: {
                _id: ''
            },
            year: '',
            genres: '',
        })
     
    }
    


    return (
        <div className="ov-box">
            <form autoComplete="off" noValidate onSubmit={handelSubmit}>
                <h4>{currentId ? 'Update' : 'Add'} Vinyl</h4>
                    <div className="row mb-3">
                        <div className="col-sm-12">
                            <TextField 
                                name="name"
                                variant="outlined"
                                label="Name"
                                value={vinylData.name}
                                onChange={(e)=>setVinylData({...vinylData, name: e.target.value})} 
                                fullWidth
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-12">
                            {
                                bandsList && bandsList.length && bandsList.length > 0 ?  (
                                    <select name="band" className="ov-select" onChange={(e)=>setVinylData({...vinylData, band: e.target.value})} >
                                    {
                                        bandsList.map((band)=>(
                                            <option key={band._id} value={band._id} selected={ band._id === vinylData.band._id ? true : false }>{band.name}</option>
                                            
                                        ))
                                    }
                                    </select>
                                ) : (
                                    <div className="ov-box p-5 text-center ov-box--loader ov-box--loader--sm">
                                        <h2>_LOADING...</h2>
                                        <img src={Loader} />
                                    </div>
                                    )
                            }
                        </div>
                    </div>
 
                        
                
                <div className="row mb-3">
                    <div className="col-sm-12">
                        <TextField 
                            name="genres"
                            variant="outlined"
                            label="Genres (Comma separated)"
                            value={vinylData.genres}
                            onChange={(e)=>setVinylData({...vinylData, genres: e.target.value.split(',')})} 
                            fullWidth
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-12">
                        <TextField 
                            name="year"
                            variant="outlined"
                            label="Year"
                            value={vinylData.year}
                            onChange={(e)=>setVinylData({...vinylData, year: e.target.value})} 
                            fullWidth
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-12">
                        <label>Featured Image</label><br/>
                        <Filebase type="file" multiple={false} onDone={({base64})=>setVinylData({...vinylData, featured_image: base64})}></Filebase>
                    </div>
                </div>    
              
                <Button variant="contained" color="primary" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      
            </form>
        </div>
    );
}

export default Form;