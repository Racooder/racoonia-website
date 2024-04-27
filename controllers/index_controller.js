var express = require('express');
var router = express.Router();
const i18next = require('i18next');


class IndexController {
    static list(req, res, next) {
        res.locals.site = "index";
        res.locals.title = "Racoonia - Home";

        res.render('index');
    }
}

module.exports = IndexController;
