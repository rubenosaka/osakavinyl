import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const vinylSchema = mongoose.Schema({
    name: String,
    album_name: String,
    band: { type: Schema.Types.ObjectId, ref: 'Bands' },
    description: String,
    genres: [String],
    discography: String,
    uid: mongoose.ObjectId,
    copies: {
        type: Number,
        default: 0
    },
    featured_image: String,
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