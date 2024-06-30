import express from "express";


const router = express.Router();

// lh 5000;/posts//

router.get('/', (req, res) => {
       res.send('This Works')
})


export default router