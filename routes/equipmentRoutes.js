const express = require('express');
const router = express.Router();
const { listCampingEquipment } = require('../controllers/equipmentController');

// Kamp ekipman önerilerini listeleme
router.get('/', listCampingEquipment);

module.exports = router;
