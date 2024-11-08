const express = require('express');
const router = express.Router();
const { getAllCampsites, getCampsiteById, createCampsite, updateCampsite, deleteCampsite } = require('../controllers/campsiteController');
const { protect } = require('../middleware/authMiddleware');

// Public routes
router.get('/', getAllCampsites);
router.get('/:id', getCampsiteById);

// Protected routes (require authentication)
router.post('/', protect, createCampsite);
router.put('/:id', protect, updateCampsite);
router.delete('/:id', protect, deleteCampsite);

module.exports = router;
