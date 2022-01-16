import { LIST, CREATE, DELETE, UPDATE, LIST_PAGINATION } from '../constants/actionTypes';

const vinyl = (values = [], action) =>{

    switch(action.type) {

        case LIST:

            console.log(action);

            return action.payload;

        case LIST_PAGINATION:

            console.log(action)
               
            return {list: action.payload, pages: action.pages};
        
        case CREATE:

            // return [...values.list, action.payload];
            return [action.payload];

        case UPDATE:

            values.list = values.list.map((vinylItem) => vinylItem._id === action.payload._id ? action.payload : vinylItem);

            return  values;

        case DELETE:  
                
                console.log();

                return values.list.filter((vinylItem) => vinylItem._id !== action.payload);
        
        default:

            return values;

    }

}

export default vinyl;