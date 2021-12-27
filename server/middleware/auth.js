import jwt from 'jsonwebtoken';
import Users from '../models/user.js';

const auth = async (req, res, next) => {
    try{       

        const token = req.headers.authorization?.split(" ")[1];
        const isCustomAuth = token?.length < 500;

        let decodedData;

        if(token && isCustomAuth){

            decodedData = jwt.verify(token, process.env.SECRET);

            req.userId = decodedData?._id;

        }else{

            decodedData = jwt.decode(token);
         
            const user = await Users.findOne({email:decodedData.email});

            req.userId = user._id ? user._id : decodedData?.sub;
        }

        next();

    }catch (error){
        console.log(error);
    }
};

export default auth;