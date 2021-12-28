import mongoose from 'mongoose';

const bandsSchema = mongoose.Schema({
    name: String,
    description: String,
    genres: [String],
    // members: [mongoose.ObjectId],
    // pastMembers: [mongoose.ObjectId],
    uid: mongoose.ObjectId,
    featured_image: String,
    images: [String],
    logo: String,
    old_logo: String,
    nationallity: [String],
    initYear: Number,
    endYear: Number,  
 
    // albums: [mongoose.ObjetId]

}, { collection: 'bands' });

const Bands = mongoose.model('Bands', bandsSchema);

export default Bands;