var express = require('express')
var resourceBundle = require('../controllers/resourceBundle');

var router = express.Router()

/* GET App index page */
router.get('/', function(req, res, next) {
    var labels = resourceBundle.getLabels(req);
    res.render('app/index', { 
        loginUser: req.user,
        labels: labels
    })
})

module.exports = router