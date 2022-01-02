import * as api from '../api';
import { LIST_BANDS, CREATE_BANDS, DELETE_BANDS, UPDATE_BANDS } from '../constants/actionTypes';
// Action Creators

export const getBands = () => async (dispatch) => {

    try{

        const { data } = await api.fetchBands();



        dispatch({ type: LIST_BANDS, payload: data })

    }catch(error){

        console.log(error)

    }


}

export const createBand = (band) => async (dispatch) =>{
    try{

        const { data } = await api.createBand(band);

        dispatch({ type: CREATE_BANDS, payload: data })

    }catch(error){

        console.log(error)

    }
}

export const updateBand = (id, band) => async (dispatch) =>{
    try{       

        const { data } = await api.updateBand(id, band);

        dispatch({ type: UPDATE_BANDS, payload: data })

    }catch(error){

        console.log(error)

    }
}

export const deleteBand = (id) => async (dispatch) =>{
    try{       

        await api.deleteBand(id);

        dispatch({ type: DELETE_BANDS, payload: id });

    }catch(error){

        console.log(error)

    }
}

export const likeBand = (id) => async (dispatch) =>{
    try{       

        const { data } = await api.likeBand(id);

        dispatch({ type: UPDATE_BANDS, payload: data })

    }catch(error){

        console.log(error)

    }
}
