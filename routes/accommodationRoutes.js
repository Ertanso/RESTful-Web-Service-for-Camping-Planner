const express = require('express');
const router = express.Router();
const { listAccommodations  } = require('../controllers/accommodationController');
const { getAccommodationDetails  } = require('../controllers/accommodationController');


// Konaklama önerilerini listeleme
router.get('/', listAccommodations);


// Belirli bir konaklama detayını getir
router.get('/:id', getAccommodationDetails);


module.exports = router;
