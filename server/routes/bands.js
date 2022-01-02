import express from 'express';
import auth from '../middleware/auth.js';
//import { getArtists, createVinyl, updateVinyl, deleteVinyl, likeVinyl } from '../controllers/vinyl.js'
import { getBands, createBand, updateBand } from '../controllers/bands.js';

const router = express.Router();

router.get('/', getBands);
router.post('/', auth, createBand);
router.patch('/:id', auth, updateBand);
// router.delete('/:id', auth, deleteVinyl);
// router.patch('/:id/likeVinyl', auth, likeVinyl); 


export default router;