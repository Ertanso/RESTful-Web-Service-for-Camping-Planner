const express = require('express');
const router = express.Router();
const { getProfile, updateProfile, listCampingHistory} = require('../controllers/profileController');
const { protect } = require('../middleware/authMiddleware');

// Protected routes
router.get('/', protect, getProfile);
router.put('/', protect, updateProfile);

// Kamp geçmişini listeleme
router.get('/camping-history', protect, listCampingHistory);


module.exports = router;
