var express = require('express');
var router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

router.post('/:id', destinationsCtrl.addDestination);
router.delete('/:id', destinationsCtrl.delete);

module.exports = router;
