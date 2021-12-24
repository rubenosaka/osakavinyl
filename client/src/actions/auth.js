import * as api from '../api';
import { AUTH } from '../constants/actionTypes';

export const signIn = (form, navigate)=>async (dispatch) => {

    try{

        // const { data } = await api.fetchVinylList();

        // dispatch({ type: AUTH, payload: data })

        navigate('/');

    }catch(error){

        console.log(error)

    }


}

export const signUp = (form, navigate)=>async (dispatch) => {

    try{

        // const { data } = await api.fetchVinylList();

        // dispatch({ type: AUTH, payload: data })

        navigate('/');

    }catch(error){

        console.log(error)

    }


}