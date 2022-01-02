import { LIST_BANDS, CREATE_BANDS, UPDATE_BANDS, DELETE_BANDS } from '../constants/actionTypes';

const bands = (band = [], action) =>{

    switch(action.type) {

        case LIST_BANDS:

            console.log(action)

            return action.payload;
        
        case CREATE_BANDS:

            return [...band, action.payload];

        case UPDATE_BANDS:

            return band.map((bandItem) => bandItem._id === action.payload._id ? action.payload : bandItem);

        case DELETE_BANDS:
    
                return band.filter((bandItem) => bandItem._id !== action.payload);
        
        default:

            return band;

    }

}

export default bands;