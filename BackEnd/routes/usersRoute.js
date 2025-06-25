import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
import { createForm } from '../controllers/formController.js';
import { getUser , CreateUser} from '../controllers/usersController.js'
import { loginUser} from '../controllers/loginController.js';

const router = express.Router();

router.get('/', getUser);

router.post('/signup', CreateUser);

router.post('/form',createForm)

router.post('/login', loginUser)

//api route



export default router;
