const express = require('express');
const router = express.Router();
const { getAllActivities, getActivityById, createActivity, updateActivity, deleteActivity } = require('../controllers/activityController');
const { protect } = require('../middleware/authMiddleware');

// Public routes
router.get('/', getAllActivities);
router.get('/:id', getActivityById);

// Protected routes (require authentication)
router.post('/', protect, createActivity);
router.put('/:id', protect, updateActivity);
router.delete('/:id', protect, deleteActivity);

const { listActivities } = require('../controllers/activityController');

// // Aktiviteleri listeleme
// router.get('/ ', listActivities);

// const { getActivityDetails } = require('../controllers/activityController');

// // Belirli bir aktivitenin detaylarını getir
// router.get('/:id', getActivityDetails);


module.exports = router; 
