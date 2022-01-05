import { LIST, CREATE, DELETE, UPDATE, LIST_PAGINATION } from '../constants/actionTypes';

const vinyl = (values = [], action) =>{

    switch(action.type) {

        case LIST:

            console.log(action);

            return action.payload;

        case LIST_PAGINATION:
               
            return {list: action.payload, pages: action.pages};
        
        case CREATE:

            // return [...values.list, action.payload];

        case UPDATE:

            return values.map((vinylItem) => vinylItem.values._id === action.payload._id ? action.payload : vinylItem);

        case DELETE:  
                
                console.log();

                return values.list.filter((vinylItem) => vinylItem._id !== action.payload);
        
        default:

            return values;

    }

}

export default vinyl;