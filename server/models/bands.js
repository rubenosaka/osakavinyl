import mongoose from 'mongoose';

const bandsSchema = mongoose.Schema({
    name: String,
    description: String,
    genres: [mongoose.ObjectId],
    members: [mongoose.ObjectId],
    pastMembers: [mongoose.ObjectId],
    uid: mongoose.ObjectId,
    images: [String],
    nationallity: String,
    initYear: Number,
    endYear: Number,    
    albums: [mongoose.ObjetId]

}, { collection: 'bands' });

const Bands = mongoose.model('Bands', bandsSchema);

export default Bands;