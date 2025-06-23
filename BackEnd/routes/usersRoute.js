import express from 'express';
import { getUser , CreateUser} from '../controllers/usersController.js';

const router = express.Router();

router.get('/', getUser);

router.post('/signup', CreateUser);

export default router;
