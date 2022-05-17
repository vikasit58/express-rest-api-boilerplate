const express = require('express');
const Validator = require('../../middleware/validate');
const authController = require('../../controllers/authController');

const router = express.Router();

router.post('/login',
    Validator('login'),
    authController.login
);

router.post('/regenerate-refereshtoken', authController.refreshToken);

module.exports = router;