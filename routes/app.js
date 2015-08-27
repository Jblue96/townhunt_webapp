var express = require('express')
var responseInterceptor = require('../controllers/responseInterceptor')

var router = express.Router()

/* GET App index page */
router.get('/', function(req, res, next) {
    responseInterceptor.render(req, res, 'app/index', { 
        loginUser: req.user
    })
})

module.exports = router