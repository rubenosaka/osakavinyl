import React, {useState, useEffect} from 'react';
import Filebase from 'react-file-base64';
import { TextField, Button} from '@material-ui/core'
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { createVinyl, updateVinyl } from '../../../actions/vinyl';
import { useSelector } from 'react-redux';
// import Loader from '../../../assets/img/loader_blocks.svg';

const Form = () => {

    const [taxonomyData, setTaxonomyData] = useState({
        name: '',

    })


    return (
        <div className="ov-box">

            <div className="row">
                
                <div className="col-sm-12">
                    <TextField 
                        name="name"
                        variant="outlined"
                        label="Name"
                        value={taxonomyData.name}
                        onChange={(e)=>setTaxonomyData({...taxonomyData, name: e.target.value})} 
                        fullWidth
                    />
                </div>

            </div>
           
        </div>
    )
}

export default Form;
