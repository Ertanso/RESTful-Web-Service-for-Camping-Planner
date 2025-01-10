const express = require('express');
const router = express.Router();
//const { listAccommodations } = require('../controllers/accommodationController');
const { 
    listAccommodations, 
    getAccommodationDetails, 
    addAccommodation, 
    updateAccommodation 
} = require('../controllers/accommodationController');

// Konaklama önerilerini listeleme
router.get('/', listAccommodations);

//const { getAccommodationDetails } = require('../controllers/accommodationController');

// Belirli bir konaklama detayını getir
router.get('/:id', getAccommodationDetails);

router.post('/', addAccommodation);

// Mevcut bir konaklamayı güncelle
router.put('/:id', updateAccommodation);

module.exports = router;
