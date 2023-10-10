import express from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";

dotenv.config();
const db =process.env.MongoURL;
const po =process.env.PORT;
const app = express();

mongoose.connect(db).then( ()=>{
    console.log("Connected to database !...");
    app.listen(po, ()=>{
        console.log(`Server is runnimg on port  !!!${po}`)
    });
}).catch( (err)=>{
    console.log(err);
})




