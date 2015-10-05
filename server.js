// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var fakeData = require('fake-data');
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

var router = express.Router();              // get an instance of the express Router

var genResponse = function(req) {
    return {
        "headers": req.headers,
        "response": fakeData.getFakeData(3)
    };
};

router.get('/', function(req, res) {
    res.json(genResponse(req));
});

router.post('/', function(req, res) {
    res.json(genResponse(req));
});

router.put('/', function(req, res) {
    res.json(genResponse(req));
});

router.delete('/', function(req, res) {
    res.json(fakeData.getFakeData(3));
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);