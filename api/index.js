import express from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js"

dotenv.config();
const db =process.env.MongoURL;
const po =process.env.PORT;
const app = express();
app.use(express.json())

mongoose.connect(db).then( ()=>{
    console.log("Connected to database !...");
    app.listen(po, ()=>{
        console.log(`Server is runnimg on port  !!!${po}`)
    });
}).catch( (err)=>{
    console.log(err);
})

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter)
app.use((err, req,res,next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "internal server error";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });
})
