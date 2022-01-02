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


export const updateBand = async (req, res) => {

    const { id: _id } = req.params;
    const band = req.body;

    try {

        if(!Mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No band with that ID');
        
        if(!req.userId)  return res.status(500).send('Unauthenticated');

        const updatedBand = await Bands.findByIdAndUpdate(_id, {...band, _id}, { new:true });
    
        res.json(updatedBand);
        

    }catch(error){

        res.status(409).json({ message: error });

    }

};
