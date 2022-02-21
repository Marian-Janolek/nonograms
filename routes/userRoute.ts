import express from 'express';
const router = express.Router();
import { register } from '../controllers/userController';

router.route('/register').post(register);

export default router;
