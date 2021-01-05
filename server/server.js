import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import 'dotenv/config.js';

import exercisesRouter from './routes/exercises.js';
import usersRouter from './routes/users.js';

// routers



//Express setup
const app = express();
const port = process.env.PORT||5000;

//Middleware setup
app.use(cors());
app.use(express.json());

//routes setup
app.use('/exercises',exercisesRouter);
app.use('/users',usersRouter);

//Database Connection
const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{ useNewUrlParser:true,useCreateIndex:true});
const connection=mongoose.connection;
connection.once('open',() =>{
    console.log("MongoDB connection established");
})

//server starter code
app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
});