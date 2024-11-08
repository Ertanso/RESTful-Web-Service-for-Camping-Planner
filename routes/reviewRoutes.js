const express = require('express');
const router = express.Router();
const { getReviewsForCampsite, createReview, updateReview, deleteReview } = require('../controllers/reviewController');
const { protect } = require('../middleware/authMiddleware');

// Public route
router.get('/:campsiteId', getReviewsForCampsite);

// Protected routes
router.post('/', protect, createReview);
router.put('/:id', protect, updateReview);
router.delete('/:id', protect, deleteReview);

module.exports = router;
