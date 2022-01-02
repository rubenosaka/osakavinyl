const user = JSON.parse(localStorage.getItem('profile'));


export const PAGINATION = 2;
export const ITEM_SIZE =!user ? 'col-xl-2 col-lg-4 col-sm-3' : 'col-xxl-3 col-xl-4 col-md-6 col-sm-6';
