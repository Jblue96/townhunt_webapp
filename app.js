var fs = require('fs');
var express = require('express');
var session = require('express-session');
var path = require('path');
var join = path.join;
var favicon = require('serve-favicon');
var compress = require('compression');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var parseCtrl = require('./controllers/parseCtrl')
var responseInterceptor = require('./controllers/responseInterceptor')

// auth
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var MongoStore = require('connect-mongo')(session);

// routes
var routes = require('./routes/index');
var appRoute = require('./routes/app');
var apiRoute = require('./routes/api');
var authRoute = require('./routes/auth');

// dbsetup
var mongoose = require('mongoose');
// Connect to mongodb
var connect = function () {
  var options = { server: { socketOptions: { keepAlive: 1 } } };
  mongoose.connect('mongodb://localhost/townhunt', options);
};
connect();
// Bootstrap models
fs.readdirSync(join(__dirname, 'models')).forEach(function (file) {
  if (~file.indexOf('.js')) require(join(__dirname, 'models', file));
});
// models
var User = mongoose.model('User');

mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);

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
  // done(null, user);
  console.log('serialize: ' + user.id)
   done(null, user.id)
});
passport.deserializeUser(function(id, done) {
  // done(null, obj);
  console.log('deserialize: ' + id)
  User.load({ criteria: { _id: id } }, function (err, user) {
    done(err, user)
  })
});

// Use the FacebookStrategy within Passport.
passport.use(new FacebookStrategy({
    clientID: config.FB_API_KEY,
    clientSecret:config.FB_API_SECRET ,
    callbackURL: config.FB_CALLBACK_URL,
    profileFields: ['id', 'displayName', 'link', 'photos', 'emails']
  },
  function(accessToken, refreshToken, profile, done) {
    var options = {
      criteria: { 'facebook.id': profile.id }
    };
    User.load(options, function (err, user) {
      if (err) return done(err);
      if (!user) {
        console.log(profile)
        user = new User({
          name: profile.displayName,
          email: profile.emails[0].value,
          username: profile.username,
          provider: 'facebook',
          facebook: profile._json
        });
        user.save(function (err) {
          if (err) console.log(err);
          return done(err, user);
        });
      } else {
        return done(err, user);
      }
    });
  }
));

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compress());

// static files
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/dist', express.static(__dirname + '/public/dist'));
app.use('/img', express.static(__dirname + '/public/img'));

app.use(cookieParser());
// https://github.com/madhums/node-express-mongoose-demo/blob/master/config/express.js
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'townhunt_secret',
  store: new MongoStore({
    db: 'townhunt',
    host: 'localhost',
    collection: 'sessions',
    clear_interval: 60 * 60
  }),
  cookie: {
    httpOnly: false,
    maxAge: new Date(Date.now() + 60 * 60 * 1000)
  }
}));
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
