import Mongoose from 'mongoose';
import Bands from '../models/bands.js'

export const getBands = async (req, res) => {
    try {
        const allBands = await Bands.find();

        res.status(200).json(allBands);

    }catch(error){

        res.status(404).json({ message: error });

    }
};
