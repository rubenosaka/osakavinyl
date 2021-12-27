import { AUTH, LOGOUT, GOOGLE_USER } from '../constants/actionTypes';

const authReducer = (state = {authData: null}, action) =>{

    switch(action.type) {

        case AUTH:

            console.log(action);
            localStorage.setItem('profile', JSON.stringify({...action?.data}));
            return {...state, authData:action?.data};        

        case LOGOUT: 

            localStorage.clear();
            return {...state, authData:null};       
            
        case GOOGLE_USER: 

            localStorage.setItem('profile', JSON.stringify({...action?.data}));
            return {...state, authData:action?.data};      

        default:

            return state;

    }

}

export default authReducer;