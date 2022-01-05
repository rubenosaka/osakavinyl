const user = JSON.parse(localStorage.getItem('profile'));


export const PAGINATION = 8;
export const ITEM_SIZE = !user ? 'col-xl-2 col-lg-4 col-sm-3' : 'col-xxl-3 col-xl-4 col-md-6 col-sm-6';

export const QUOTES = [
    {
        author: "Band: The Gathering, Album: If_Then_Else, Song: Saturnine",
        quote: "You don't need to preach, You don't have to love me, all the time"
    },
    {
        author: "Band: ULVER Album: Flowers of Evil, Song: Machine Guns and Peacock Feathers",
        quote: "Great Art will be destroyed"
    },
    {
        author: "Band: Dorian, Album: Diez años y un día, Song: Los amigos que perdí",
        quote: "Abrí una puerta, que se cerró tras de mi, y no me duele, los amigos que perdí"
    }
]
