// Importing the modules we need
var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var passport = require('passport');
routes = require('./routes/routing')
require('./models/collections');
require('./config/passport');
var expressJWT = require('express-jwt');
var regex = RegExp("random")



// Connecting to the DB
mongoose.connect('mongodb://localhost:27017/comics');
mongoose.Promise = global.Promise;

// Create Express application
var app = module.exports = express();

var NODE_ENV = 'development';
//Set Variables
app.set('env', process.env.NODE_ENV || 'production');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(expressJWT({secret: 'shaktan'}).unless({path: ['/api/get_users',regex,'/api/get_series','/api/get_seasons','/api/get_comics','/api/register','/api/login', '/favicon.ico']}));



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

// Bring in the Passport config after model is defined
app.use(passport.initialize());

// Use the API routes when path starts with /api
app.use('/api', routes);

// Use environment defined port or 3000
var port = process.env.PORT || 2000;

// Start the server
app.listen(port);
console.log('Insert getat on port ' + port);
