const {Router} = require('express');
const router = Router();
const CountriesC = require('../Controls/CountriesController');

router.get('/', CountriesC.GetCountries );
router.get('/:id', CountriesC.GetCountriId);

module.exports = router;