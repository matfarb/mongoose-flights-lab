var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

router.get('/', flightsCtrl.getAll);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);
router.delete('/:id', flightsCtrl.delete)
router.post('/', flightsCtrl.create);




module.exports = router;
