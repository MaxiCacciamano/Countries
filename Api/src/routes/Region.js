const {Router} = require('express');
const router = Router();
const RegionC = require('../Controls/RegionController.js')

router.get('/', RegionC.GetRegion);
router.get('/:id', RegionC.GetRegionId);

module.exports = router;