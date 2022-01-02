import React, {useState, useEffect} from 'react';
import Filebase from 'react-file-base64';
import { TextField, Button} from '@material-ui/core'
import {useDispatch} from 'react-redux';
import {createBand, updateBand} from '../../../actions/bands'; 
import { useSelector } from 'react-redux';

const Form = ({currentId, setCurrentId}) =>{

    const bandItem = useSelector((state)=> currentId ? state.bands.find(p => p._id === currentId ) : null);

    const [bandData, setBandData] = useState({
        name: '',
        nationallity: '',
        initYear: '',
        endYear: '',
        genres: '',
        logo: '',
        old_logo: '',
        featured_image:''
    })
 
    const dispatch = useDispatch()

    const handelSubmit = (e) =>{
        e.preventDefault();

        if(currentId){
            dispatch(updateBand(currentId, bandData));
        }else{
            dispatch(createBand(bandData))
        }
        clear();
    }

    useEffect(() =>{ 

        if(bandItem) setBandData(bandItem);    

    }, [bandItem]);


    const clear = () =>{
        setCurrentId(null);
        setBandData({
            name: '',
            nationallity: '',
            initYear: '',
            endYear: '',
            genres: '',
            logo: '',
            old_logo:'',
            featured_image:''
        })
     
    }
    


    return (
        <div className="ov-box">
            <form autoComplete="off" noValidate onSubmit={handelSubmit}>

                <div className="row mb-3">
                    <div className="col-sm-12">
                        <h4>{currentId ? 'Update' : 'Add'} Bands</h4>
                    </div>
                </div>                

                <div className="row mb-3">
                    <div className="col-sm-12">
                        <TextField 
                            name="name"
                            variant="outlined"
                            label="Name"
                            value={bandData.name}
                            onChange={(e)=>setBandData({...bandData, name: e.target.value})} 
                            fullWidth
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-12">
                        <TextField 
                            name="nationallity"
                            variant="outlined"
                            label="Nationallity (Comma separated)"
                            value={bandData.artist}
                            onChange={(e)=>setBandData({...bandData, nationallity: e.target.value.split(',')})} 
                            fullWidth
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-12">
                        <TextField 
                            name="cities"
                            variant="outlined"
                            label="Cities"
                            value={bandData.city}
                            onChange={(e)=>setBandData({...bandData, Cities:  e.target.value.split(',')})} 
                            fullWidth
                        />
                    </div>
                </div>   

                <div className="row mb-3">
                    <div className="col-sm-12">
                        <TextField 
                            name="genres"
                            variant="outlined"
                            label="Genres (Comma separated)"
                            value={bandData.genres}
                            onChange={(e)=>setBandData({...bandData, genres: e.target.value.split(',')})} 
                            fullWidth
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-12">
                        <TextField 
                            name="initYear"
                            variant="outlined"
                            label="Init Year"
                            value={bandData.initYear}
                            onChange={(e)=>setBandData({...bandData, initYear: e.target.value})} 
                            fullWidth
                        />
                    </div>
                </div>
                
                <div className="row mb-3">
                    <div className="col-sm-12">
                        <TextField 
                            name="endYear"
                            variant="outlined"
                            label="End Year"
                            value={bandData.endYear}
                            onChange={(e)=>setBandData({...bandData, endYear: e.target.value})} 
                            fullWidth
                        />
                    </div>
                </div>

                 <div className="row mb-3">
                    <div className="col-sm-12">
                        <TextField 
                            name="web"
                            variant="outlined"
                            label="Webpage"
                            value={bandData.web}
                            onChange={(e)=>setBandData({...bandData, web: e.target.value})} 
                            fullWidth
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-12">
                        <label>Featured Image</label><br/>
                        <Filebase type="file" multiple={false} onDone={({base64})=>setBandData({...bandData, featured_image: base64})} />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-12">
                        <label>Logo</label><br/>
                        <Filebase type="file" multiple={false} onDone={({base64})=>setBandData({...bandData, logo: base64})} />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-12">
                        <label>Old Logo</label><br/>
                        <Filebase type="file" multiple={false} onDone={({base64})=>setBandData({...bandData, old_logo: base64})} />
                    </div>
                </div>

                <Button variant="contained" color="primary" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      
            </form>
        </div>
    );
}

export default Form;