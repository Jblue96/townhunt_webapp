var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var compress = require('compression');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var parseCtrl = require('./controllers/parseCtrl')
var responseInterceptor = require('./controllers/responseInterceptor')
// routes
var routes = require('./routes/index');
var appRoute = require('./routes/app');
var apiRoute = require('./routes/api');
var authRoute = require('./routes/auth');

var config = {};
try{
  config = require('./app.config');
}catch(e){
  // no config file try to env for deployment
  config = process.env;
}

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Passport session setup.
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// Use the FacebookStrategy within Passport.
passport.use(new FacebookStrategy({
    clientID: config.FB_API_KEY,
    clientSecret:config.FB_API_SECRET ,
    callbackURL: config.FB_CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      //Check whether the User exists or not using profile.id
      //Further DB code.
      return done(null, profile);
    });
  }
));

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compress());

// static files
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/dist', express.static(__dirname + '/public/dist'));
app.use('/img', express.static(__dirname + '/public/img'));

// setup passport
app.use(passport.initialize());
app.use(passport.session());

// setup routes
app.use('/', routes);
app.use('/app', appRoute);
app.use('/api', apiRoute);
app.use('/auth', authRoute);

// setup parse
parseCtrl.setup({
    app_id: config.PARSE_APP_ID,
    master_key: config.PARSE_MASTER_KEY
    // api_key: ''
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        responseInterceptor.render(req, res, 'error', {
            loginUser: req.user,
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    responseInterceptor.render(req, res, 'error', {
        loginUser: req.user,
        message: err.message,
        error: {}
    });
});


module.exports = app;
