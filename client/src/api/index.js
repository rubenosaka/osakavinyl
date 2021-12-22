import axios from 'axios';

const url = 'http://localhost:5000/vinyl';

export const fetchVinylList =  () => axios.get(url);
export const createVinyl = (newVinyl) => axios.post(url, newVinyl);
export const updateVinyl = (id, updatedVinyl) => axios.patch(`${url}/${id}`, updatedVinyl);
export const deleteVinyl = (id) => axios.delete(`${url}/${id}`);
export const likeVinyl = (id) => axios.patch(`${url}/${id}/likeVinyl`);