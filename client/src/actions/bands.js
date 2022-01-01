import * as api from '../api';
import { LIST, CREATE, DELETE, UPDATE } from '../constants/actionTypes';
// Action Creators

export const getBands = () => async (dispatch) => {

    try{

        const { data } = await api.fetchBands();



        dispatch({ type: LIST, payload: data })

    }catch(error){

        console.log(error)

    }


}

export const createBand = (band) => async (dispatch) =>{
    try{

        console.log(band);

        const { data } = await api.createBand(band);

        dispatch({ type: CREATE, payload: data })

    }catch(error){

        console.log(error)

    }
}

export const updateBand = (id, band) => async (dispatch) =>{
    try{       

        const { data } = await api.updateBand(id, band);

        dispatch({ type: UPDATE, payload: data })

    }catch(error){

        console.log(error)

    }
}

export const deleteBand = (id) => async (dispatch) =>{
    try{       

        await api.deleteBand(id);

        dispatch({ type: DELETE, payload: id });

    }catch(error){

        console.log(error)

    }
}

export const likeBand = (id) => async (dispatch) =>{
    try{       

        const { data } = await api.likeBand(id);

        dispatch({ type: UPDATE, payload: data })

    }catch(error){

        console.log(error)

    }
}
