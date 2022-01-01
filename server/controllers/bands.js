import Mongoose from 'mongoose';
import Bands from '../models/bands.js'

export const getBands = async (req, res) => {
    try {

        console.log("gettin' bands");

        const allBands = await Bands.find();

        console.log(allBands);

        res.status(200).json(allBands);

    }catch(error){

        res.status(404).json({ message: error });

    }
};

export const createBand = async (req, res) => {

    const vinyl = req.body;  
      
    try {
          
        if(!req.userId)  return res.status(500).send('Unauthenticated');
        
        const newBand = new Bands( {... vinyl, uid: Mongoose.Types.ObjectId(req.userId), createdAt: new Date().toISOString()});
       
        await newBand.save();
      
        res.status(201).json(newBand);
        

    }catch(error){
        console.group(error);
        res.status(409).json({ message: error });

    }
};
