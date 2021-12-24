import mongoose from 'mongoose';

const usersSchema = mongoose.Schema({
    firstName: {
        type: String, 
        required: true
    },
    lastName: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    id: {
        type: String, 
    },
    instagram_user: String,

});

const Users = mongoose.model('Users', usersSchema);

export default Users;