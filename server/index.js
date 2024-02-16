import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";

mongoose.connect(process.env.MONGO).then(()=>{
    try {
        console.log("mongodb connected")
    } catch (error) {
        console.log(error)
    }
})

const app = express()

app.use(express.json());

app.listen(process.env.PORT || 3000 , ()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})

app.use("/api/user",userRouter);

app.use("/api/auth",authRouter);


app.use((err,req,res,next)=>{
   const satusCode = err.statusCode || 500;
   const message = err.message || 'Internal Server Error';
   return res.status(satusCode).json({
    sucsess: false,
    satusCode,
    message,
   })
})