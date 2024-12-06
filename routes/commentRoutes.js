const express = require('express');
const router = express.Router();
const { getComments } = require('../controllers/commentController');

// Belirli kategori ve ID'ye göre yorumları getir
router.get('/:category/:id', getComments);

const { listCommentsForCampground } = require('../controllers/commentController');

// Belirli kamp alanındaki yorumları listele
router.get('/campgrounds/:campgroundId/comments', listCommentsForCampground);


module.exports = router;
