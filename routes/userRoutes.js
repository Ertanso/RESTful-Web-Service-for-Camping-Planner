const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getAllUsers, getUserProfile} = require('../controllers/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', getAllUsers);

const { protect } = require('../middleware/authMiddleware');

// Kullanıcı profili
router.get('/:userId', protect, getUserProfile);

module.exports = router;
