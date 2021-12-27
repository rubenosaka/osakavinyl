import * as api from '../api';
import { AUTH, GOOGLE_USER } from '../constants/actionTypes';

export const signIn = (form, navigate)=>async (dispatch) => {

    try{

        const { data } = await api.signIn(form);

        dispatch({ type: AUTH, data })

        navigate('/');

    }catch(error){

        console.log(error)

    }


}

export const signUp = (form, navigate)=>async (dispatch) => {

    try{

        const { data } = await api.signUp(form);

        dispatch({ type: AUTH, data })

        navigate('/');


    }catch(error){

        console.log(error)

    }
}

export const googleUser = (googleData, navigate)=>async (dispatch) => {

    try{

        const { data } = await api.googleUser(googleData);

        dispatch({ type: GOOGLE_USER, data:{...data, token:data.tokenId} })

        navigate('/');


    }catch(error){

        console.log(error)

    }


}