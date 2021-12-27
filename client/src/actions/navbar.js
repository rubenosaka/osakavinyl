import { CONSOLE } from '../constants/actionTypes';

export const navBarConsole = (data)=>async (dispatch) => {

    try{ 

        dispatch({ type: CONSOLE, data })

    }catch(error){

        console.log(error)

    }


}