const express = require('express');
const router = express.Router();


const {login, hello } = require('../controller/main');
const authenticationMiddleware = require('../middleware/auth');

router.route('/login').post(login);

router.route('/hello').get(authenticationMiddleware, hello);

module.exports = router;