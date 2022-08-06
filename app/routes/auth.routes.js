const express = require('express');
const router = express.Router();
const {signup,signin} = require('../controller/auth.controller')

router.post('/',signup)

router.post('/signin',signin)

module.exports = router;