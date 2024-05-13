const {Router} = require('express')
const Region = require('../models/Region.js');
const Countries = require('../models/Countries');

const router = Router();

//configuramos los routers
router.use('/Region', Region);
router.use('/Countries', Countries);

module.exports = router;