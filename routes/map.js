var express = require('express');
var router = express.Router();
const MapController = require('../controllers/map_controller');

/* GET home page. */
router.get('/', MapController.list);

module.exports = router;
