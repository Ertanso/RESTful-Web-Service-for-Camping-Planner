const express = require('express');
const router = express.Router();
const { listCampingHistory } = require('../controllers/campingHistory');
const protect = require('../middleware/authMiddleware'); // Kullanıcı kimliğini doğrulayan middleware

// Kullanıcının kamp geçmişini listele
router.get('/', protect, listCampingHistory);

module.exports = router;
