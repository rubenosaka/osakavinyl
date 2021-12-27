import Mongoose from 'mongoose';
import Vinyl from '../models/vinyl.js'

export const getVinyl = async (req, res) => {
    try {
        const allVinyl = await Vinyl.find();

        res.status(200).json(allVinyl);

    }catch(error){

        res.status(404).json({ message: error });

    }
};

export const createVinyl = async (req, res) => {

    const vinyl = req.body;  
      
    try {
          
        if(!req.userId)  return res.status(500).send('Unauthenticated');
        
        const newVinyl = new Vinyl( {... vinyl, uid: Mongoose.Types.ObjectId(req.userId), createdAt: new Date().toISOString()});
       
        await newVinyl.save();
      
        res.status(201).json(newVinyl);
        

    }catch(error){
        console.group(error);
        res.status(409).json({ message: error });

    }
};


export const updateVinyl = async (req, res) => {

    const { id: _id } = req.params;
    const vinyl = req.body;

    try {

        if(!Mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No vinyl with that ID');
        
        if(!req.userId)  return res.status(500).send('Unauthenticated');

        const updatedVinyl = await Vinyl.findByIdAndUpdate(_id, {...vinyl, _id}, { new:true });
    
        res.json(updatedVinyl);
        

    }catch(error){

        res.status(409).json({ message: error });

    }

};

export const deleteVinyl = async (req, res) => {

    const { id } = req.params;

    try {
       

        if(!Mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No vinyl with that ID');

        await Vinyl.findByIdAndRemove(id);
    
        res.json({message: 'Vinyl deleted succesfully'});
        

    }catch(error){

        res.status(409).json({ message: error });

    }

};




export const likeVinyl = async (req, res) => {

    const { id } = req.params;

    try {

        if(!Mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No vinyl with that ID');

        if(!req.userId)  return res.status(500).send('Unauthenticated');

        const vinyl = await Vinyl.findById(id);

        const index = vinyl.findIndex((id) => id = String(req.userId));

        if(index === -1){
            vinyl.likes.push(req.userId);
        }else{
            vinyl.likes = vinyl.likes.filter((id) => id !== String(req.userId));
        }

        const updatedVinyl = await Vinyl.findByIdAndUpdate(id, vinyl, { new : true });

    
        res.json(updatedVinyl);
        

    }catch(error){

        res.status(409).json({ message: error });

    }

};