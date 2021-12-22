import * as api from '../api';
import { LIST, CREATE, DELETE, UPDATE } from '../constants/actionTypes';
// Action Creators

export const getVinylList = () => async (dispatch) => {

    try{

        const { data } = await api.fetchVinylList();

        dispatch({ type: LIST, payload: data })

    }catch(error){

        console.log(error)

    }


}

export const createVinyl = (vinyl) => async (dispatch) =>{
    try{

        const { data } = await api.createVinyl(vinyl);

        dispatch({ type: CREATE, payload: data })

    }catch(error){

        console.log(error)

    }
}

export const updateVinyl = (id, vinyl) => async (dispatch) =>{
    try{       

        const { data } = await api.updateVinyl(id, vinyl);

        dispatch({ type: UPDATE, payload: data })

    }catch(error){

        console.log(error)

    }
}

export const deleteVinyl = (id) => async (dispatch) =>{
    try{       

        await api.deleteVinyl(id);

        dispatch({ type: DELETE, payload: id });

    }catch(error){

        console.log(error)

    }
}

export const likeVinyl = (id) => async (dispatch) =>{
    try{       

        const { data } = await api.likeVinyl(id);

        dispatch({ type: UPDATE, payload: data })

    }catch(error){

        console.log(error)

    }
}
