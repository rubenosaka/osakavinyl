import Mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import Users from '../models/user.js';

export const getUsers = async (req, res) => {
    try {
        const allUser = await Users.find();

        res.status(200).json(allUser);

    }catch(error){

        res.status(404).json({ message: error });

    }
};

export const signIn = async (req, res) => {

    const {email, password} = req.body;

    try {

        const existingUser = await Users.findOne({email});

        if(!existingUser) return res.status(404).json({message: "User doesn't exist."});

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        
        if(!isPasswordCorrect) return res.status(400).json({message: "Invalid credentials."});

        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, process.env.SECRET, {expiresIn: "1h"});

        res.status(200).json({result: existingUser, token});

    }catch(error){

        console.log(error);

        res.status(500).json({ message: 'Something went wrong.' });

    }

};


export const signUp = async (req, res) => {

    const {email, password, confirmPassword, firstName, lastName, } = req.body;

    try {

        console.log(email)

        const existingUser = await Users.findOne({email});

        if(existingUser) return res.status(400).json({message: "User already exist."});

        if(password !== confirmPassword) return res.status(400).json({message: "Passwords don't match."});

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await Users.create({email, password:hashedPassword, firstName, lastName});

        console.log(process.env.SECRET);

        const token = jwt.sign({email: result.email, id: result._id}, process.env.SECRET, {expiresIn: "1h"});     
        
        console.log(token);

        res.status(201).json({result, token});

    }catch(error){

        console.log(error);

        res.status(500).json({ message: 'Something went wrong.' });


    }
};



export const googleUser = async (req, res) => {

    const {email, firstName, lastName, googleId, imageUrl, tokenId } = req.body;

    console.log(req.body);

    try {

        const existingUser = await Users.findOneAndUpdate(email, { $set: { googleId }});

        console.log(existingUser);

        if(existingUser){
 
            const token = jwt.sign({email: existingUser.email, id: existingUser._id}, process.env.SECRET, {expiresIn: "1h"});    

            res.status(200).json({result: {... existingUser, imageUrl, token: tokenId}, token});

        }else{

            const hashedPassword = await bcrypt.hash(googleId, 12);

            const result = await Users.create({email, password:hashedPassword, firstName, lastName, googleId});    
   
            const token = jwt.sign({email: result.email, id: result._id}, process.env.SECRET, {expiresIn: "1h"});     
              
            res.status(201).json({result:{... result,  token: tokenId}, token});

        }    

    }catch(error){

        console.log(error);

        res.status(500).json({ message: 'Something went wrong.' });


    }
};
