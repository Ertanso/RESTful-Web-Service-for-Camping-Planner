const express = require('express');
const router = express.Router();
const { getAllGear, getGearById, createGear, updateGear, deleteGear } = require('../controllers/gearController');
const { protect } = require('../middleware/authMiddleware');

// Public routes
router.get('/', getAllGear);
router.get('/:id', getGearById);

// Protected routes (require authentication)
router.post('/', protect, createGear);
router.put('/:id', protect, updateGear);
router.delete('/:id', protect, deleteGear);

module.exports = router;
