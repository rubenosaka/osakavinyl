import { LIST, CREATE, DELETE, UPDATE } from '../constants/actionTypes';

const vinyl = (vinyl = [], action) =>{

    switch(action.type) {

        case LIST:

            return action.payload;
        
        case CREATE:

            return [...vinyl, action.payload];

        case UPDATE:

            return vinyl.map((vinylItem) => vinylItem._id === action.payload._id ? action.payload : vinylItem);

        case DELETE:
    
                return vinyl.filter((vinylItem) => vinylItem._id !== action.payload);
        
        default:

            return vinyl;

    }

}

export default vinyl;