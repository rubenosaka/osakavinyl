import { LIST, CREATE, DELETE, UPDATE } from '../constants/actionTypes';

const bands = (band = [], action) =>{

    switch(action.type) {

        case LIST:

            return action.payload;
        
        case CREATE:

            return [...band, action.payload];

        case UPDATE:

            return band.map((bandItem) => bandItem._id === action.payload._id ? action.payload : bandItem);

        case DELETE:
    
                return band.filter((bandItem) => bandItem._id !== action.payload);
        
        default:

            return band;

    }

}

export default bands;