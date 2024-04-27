var express = require('express');
var router = express.Router();
const RulesController = require('../controllers/rules_controller');

/* GET home page. */
router.get('/', RulesController.list);

module.exports = router;
