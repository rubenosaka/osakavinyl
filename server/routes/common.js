import express from 'express';

const router = express.Router();

router.get('/', (req, res)=>{

    res.send("Please go to /vinyl");
    
});


export default router;