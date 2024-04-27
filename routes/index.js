var express = require('express');
var router = express.Router();
const IndexController = require('../controllers/index_controller');

/* GET home page. */
router.get('/', IndexController.list);

module.exports = router;
