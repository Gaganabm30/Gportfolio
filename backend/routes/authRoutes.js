const express = require('express');
const { loginUser, registerAdmin } = require('../controllers/authController');
const router = express.Router();

router.post('/login', loginUser);
router.post('/register-admin', registerAdmin); // Protect this or remove after setup

module.exports = router;
