import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"
import jwt from 'jsonwebtoken'
import { errorHandler } from "../utils.js/error.js";


export const signup = async (req,res , next)=>{
    const {username, email, password} =req.body;
    const hashedPassword = await bcryptjs.hash(password,10)
    const newUser = new User({username, email, password:hashedPassword});
    try {
        await newUser.save()
        res.status(201).json("user created successfully !...")
        
    } catch (error) {
        next(error);
    }
}

export const signin = async(req,res,next)=>{
    const{email, password} =req.body;
    
    try {
        const  validUser = User.findOne({email});
        if(!validUser){
            return next(errorHandler(404,'user not found..'))
        }
        const validPassword = bcryptjs.compareSync(password,validUser.password)
        if(!validPassword) return next(errorHandler(401,'Wrong cridential..'));
        const token = jwt.sign({_id:validUser._id},process.env.JWT_SECRET);
        res
        .cookie('access_token',token,{httpOnly:true})
        .status(200)
        .json(validUser)

    } catch (error) {
     next(error);   
    }
}    