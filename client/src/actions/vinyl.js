import * as api from '../api';
import { LIST, CREATE, DELETE, UPDATE, LIST_PAGINATION } from '../constants/actionTypes';
import { PAGINATION } from '../constants/globalVars';
// Action Creators

export const getVinylList = () => async (dispatch) => {

    try{

        const { data } = await api.fetchVinylList();

        dispatch({ type: LIST, payload: data })

    }catch(error){

        console.log(error)

    }


}

export const getVinylPaginate = (page = 0) => async (dispatch) => {

    
    try{

        const { data } = await api.getVinylPaginate(page);
        const dataAll = await api.fetchVinylList();

        console.log(dataAll.data.length/PAGINATION);

        dispatch({ type: LIST_PAGINATION, payload: data, pages: dataAll.data.length >= page ? Math.ceil(dataAll.data.length/PAGINATION) : 1 })

    }catch(error){

        console.log(error)

    }


}


export const createVinyl = (vinyl, navigate) => async (dispatch) =>{
    try{        

        const { data } = await api.createVinyl(vinyl);

        navigate(0);

        dispatch({ type: CREATE, payload: data })

    }catch(error){

        console.log(error)

    }
}

export const updateVinyl = (id, vinyl, navigate) => async (dispatch) =>{
    try{       

        const { data } = await api.updateVinyl(id, vinyl);

        navigate(0);

        dispatch({ type: UPDATE, payload: data });



    }catch(error){

        console.log(error)

    }
}

export const deleteVinyl = (id, navigate) => async (dispatch) =>{
    try{       

        await api.deleteVinyl(id);

        navigate(0);

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
