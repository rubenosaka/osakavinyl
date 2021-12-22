import mongoose from 'mongoose';

const vinylSchema = mongoose.Schema({
    name: String,
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
    likeCount: {
        type: Number,
        default: 0
    },
    year: {
        type: Number,
    },
});

const Vinyl = mongoose.model('Vinyl', vinylSchema);

export default Vinyl;