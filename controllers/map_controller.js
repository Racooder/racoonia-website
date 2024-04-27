var express = require('express');
var router = express.Router();
const i18next = require('i18next');


class MapController {
    static list(req, res, next) {
        res.locals.site = "map";
        res.locals.title = "Racoonia - Map";

        res.render('map');
    }
}

module.exports = MapController;
