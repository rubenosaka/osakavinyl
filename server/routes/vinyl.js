import express from 'express';
import auth from '../middleware/auth.js';
import { getVinyl, createVinyl, updateVinyl, deleteVinyl, likeVinyl, getVinylPaginate } from '../controllers/vinyl.js'

const router = express.Router();

router.get('/', getVinyl);
router.get('/page/:page', getVinylPaginate);
router.post('/', auth, createVinyl);
router.patch('/:id', auth, updateVinyl);
router.delete('/:id', auth, deleteVinyl);
router.patch('/:id/likeVinyl', auth, likeVinyl); 


export default router;