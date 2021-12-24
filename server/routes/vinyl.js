import express from 'express';
import auth from '../middleware/auth';
import { getVinyl, createVinyl, updateVinyl, deleteVinyl, likeVinyl } from '../controllers/vinyl.js'

const router = express.Router();

router.get('/', getVinyl);
router.post('/', auth, createVinyl);
router.patch('/:id', auth, updateVinyl);
router.delete('/:id', auth, deleteVinyl);
router.patch('/:id/likeVinyl', auth, likeVinyl);


export default router;