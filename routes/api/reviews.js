
const express = require('express');
const router = express.Router();
const reviewCtrl = require('../../controllers/reviews')

// in server app.use('/api', likesRouter)
// so the full routes are 
// /api/posts/:id/likes
router.post('/products/:productName/reviews', reviewCtrl.create)
// /api/likes/:id
router.delete('/reviews/:id', reviewCtrl.deleteReview)

module.exports = router;