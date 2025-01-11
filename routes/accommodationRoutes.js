const express = require('express');
const router = express.Router();
const { listAccommodations,getAccommodationDetails  } = require('../controllers/accommodationController');



// Konaklama önerilerini listeleme
router.get('/', listAccommodations);


// Belirli bir konaklama detayını getir
router.get('/:id', getAccommodationDetails);

//router.post('/', addAccommodation);

// Mevcut bir konaklamayı güncelle
//router.put('/:id', updateAccommodation);

module.exports = router;
