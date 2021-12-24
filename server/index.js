import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// import common from './routes/common.js';
import usersRoutes from './routes/users.js';
import vinylRoutes from './routes/vinyl.js';

// // app.use('/', common);
app.use('/users', usersRoutes);
app.use('/vinyl', vinylRoutes);

const CONNECTION_URL = process.env.CONNECTION_URL;

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, () => console.log(`Sever running on server ${PORT}`)))
    .catch((error)=>{console.log(error)});  
