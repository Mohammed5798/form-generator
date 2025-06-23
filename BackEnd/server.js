import express from 'express';
import dotenv from 'dotenv';
import DBconnection from './config/DB.js';
import userRoute from './routes/usersRoute.js';


dotenv.config();

DBconnection();

const app = express();
app.use(express.json())

app.use('/api/users' , userRoute);



const PORT = process.env.PORT || 5000;

app.listen(PORT , () =>{
    console.log(`server is runnimg on port ${PORT}`)
})

