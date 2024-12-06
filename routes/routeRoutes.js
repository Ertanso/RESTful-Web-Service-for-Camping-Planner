/* const express = require('express');
const router = express.Router();
const { listRouteRecommendations } = require('../controllers/routeController');

// Rota önerilerini listeleme
router.get('/', listRouteRecommendations);


const { getRouteDetails } = require('../controllers/routeController');

// Belirli bir rotanın detaylarını getir
router.get('/:id', getRouteDetails);

module.exports = router;*/

const express = require('express');
const router = express.Router();
const { listRouteRecommendations , getRouteDetails} = require('../controllers/routeController');


// Rota önerileri endpoint'i
router.get('/', listRouteRecommendations);
// Rota detaylarını getirme endpoint'i
router.get('/:id', getRouteDetails);

module.exports = router;
