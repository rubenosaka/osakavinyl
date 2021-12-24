import mongoose from 'mongoose';

const vinylSchema = mongoose.Schema({
    name: String,
    album_name: String,
    artist: String,
    description: String,
    genres: [String],
    discography: String,
    copies: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
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
    instagram_link: String
});

const Vinyl = mongoose.model('Vinyl', vinylSchema);

export default Vinyl;