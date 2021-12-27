import express from 'express';

import { getUsers, signIn, signUp, googleUser } from '../controllers/users.js'

const router = express.Router();

router.get('/', getUsers);

router.post('/signIn', signIn);
router.post('/signUp', signUp);
router.post('/googleUser', googleUser);

export default router;