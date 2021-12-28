import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5000'});

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).result.token}`;
    }
 
    return req;
});

export const fetchVinylList =  () => API.get('/vinyl');
export const createVinyl = (newVinyl) => API.post('/vinyl', newVinyl);
export const updateVinyl = (id, updatedVinyl) => API.patch(`/vinyl/${id}`, updatedVinyl);
export const deleteVinyl = (id) => API.delete(`/vinyl/${id}`);
export const likeVinyl = (id) => API.patch(`/vinyl/${id}/likeVinyl`);

export const signIn = (form) => API.post('/users/signIn', form);
export const signUp = (form) => API.post('/users/signUp', form);
export const googleUser = (googleData) => API.post('/users/googleUser', googleData);

export const fetchBands = () => API.get('/bands');
export const createBand = (newBand) => API.post('/bands', newBand);
export const updateBand = (id, updateBand) => API.patch(`/bands/${id}`, updateBand);
export const deleteBand = (id) => API.delete(`/bands/${id}`);
export const likeBand = (id) => API.patch(`/bands/${id}/likeBand`);