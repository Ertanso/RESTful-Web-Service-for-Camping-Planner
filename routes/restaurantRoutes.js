const express = require('express');
const router = express.Router();
const { listRestaurants } = require('../controllers/restaurantController');

// Restoran önerilerini listeleme
router.get('/', listRestaurants);

const { getRestaurantDetails } = require('../controllers/restaurantController');

// Belirli bir restoran detayını getir
router.get('/:id', getRestaurantDetails);


module.exports = router;
