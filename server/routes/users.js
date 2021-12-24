import express from 'express';

import { getUsers, signIn, signUp } from '../controllers/users.js'

const router = express.Router();

router.get('/', getUsers);

router.post('/signIn', signIn);
router.post('/signUp', signUp);

export default router;