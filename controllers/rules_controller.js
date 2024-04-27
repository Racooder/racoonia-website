var express = require('express');
var router = express.Router();
const i18next = require('i18next');


class RulesController {
    static list(req, res, next) {
        res.locals.site = "rules";
        res.locals.title = "Racoonia - Rules";

        res.render('rules');
    }
}

module.exports = RulesController;
