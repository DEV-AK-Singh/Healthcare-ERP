const express = require('express');
const router = express.Router();
const {authController} = require('./authController');

router.post('/login',authController);

module.exports = router;
