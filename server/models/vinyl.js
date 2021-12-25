import mongoose from 'mongoose';

const vinylSchema = mongoose.Schema({
    name: String,
    album_name: String,
    artist: String,
    description: String,
    genres: [String],
    discography: String,
    uid: mongoose.ObjectId,
    copies: {
        type: Number,
        default: 0
    },
    image_osaka: String,
    image_beer: String,
    image_vinyl: String,
    likes: {
        type: [String],
        default: []
    },
    year: {
        type: Number,
    },
    instagram_link: String,
    deletedAt: {
        type: Date,
        default: null,
    }
}, { collection: 'vinyl' });

const Vinyl = mongoose.model('Vinyl', vinylSchema);

export default Vinyl;