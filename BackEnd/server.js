import express from 'express';
import dotenv from 'dotenv';
import DBconnection from './config/DB.js';
import userRoute from './routes/usersRoute.js';
import cors from 'cors';

dotenv.config();

DBconnection();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // React dev server
 
}));
app.use(express.json())
app.use('/api/users' , userRoute);

app.get('/',(req,res) =>{
    res.send("server is running")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT , () =>{
    console.log(`server is runnimg on port ${PORT}`)
})

