const express = require('express');
const { getRouteRecommendations } = require('../controllers/routeController');

const router = express.Router();

// Define the route
router.get('/route-recommendations', getRouteRecommendations);

module.exports = router;
