var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var rulesRouter = require("./routes/rules");

var app = express();

// Localization
const i18next = require('i18next');
const i18nextMiddleware = require('i18next-http-middleware');
const Backend = require('i18next-fs-backend');

i18next
    .use(Backend)
    .use(i18nextMiddleware.LanguageDetector)
    .init({
        backend: {
            loadPath: path.join(__dirname, 'localization/{{lng}}/{{ns}}.json')
        },
        detection: {
            order: ['querystring', 'cookie', 'header'],
            caches: ['cookie']
        },
        fallbackLng: 'de',
        preload: ['de', 'en'],
        saveMissing: true
    });
app.use(i18nextMiddleware.handle(i18next, {
    removeLngFromUrl: false
}));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/rules", rulesRouter);


// Set variables
app.locals.discordURL = "https://discord.gg/Bkua7AKRaa";
app.locals.donateURL = "https://paypal.me/racooder";
app.locals.serverIP = "racoonia.net",
app.locals.mapURL = "http://map.racoonia.net/";

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.status = err.status;
    res.locals.error = process.env.DEVELOPEMENT == "True" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
