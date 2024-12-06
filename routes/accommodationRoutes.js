const express = require('express');
const router = express.Router();
const { listAccommodations } = require('../controllers/accommodationController');

// Konaklama önerilerini listeleme
router.get('/', listAccommodations);

const { getAccommodationDetails } = require('../controllers/accommodationController');

// Belirli bir konaklama detayını getir
router.get('/:id', getAccommodationDetails);


module.exports = router;
