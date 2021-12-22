import express from 'express';

import { getVinyl, createVinyl, updateVinyl, deleteVinyl, likeVinyl } from '../controllers/vinyl.js'

const router = express.Router();

router.get('/', getVinyl);
router.post('/', createVinyl);
router.patch('/:id', updateVinyl);
router.delete('/:id', deleteVinyl);
router.patch('/:id/likeVinyl', likeVinyl);


export default router;