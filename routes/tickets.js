var express = require('express');
var router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

router.get('/:id/ticket', ticketsCtrl.new);
router.post('/:id/ticket', ticketsCtrl.create);

module.exports = router;