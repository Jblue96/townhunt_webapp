var express = require('express')
var parseCtrl = require('../controllers/parseCtrl')
var responseInterceptor = require('../controllers/responseInterceptor')

var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
    // get offer list via Parse
    var promise = new Promise(function(resolve, reject) {
        parseCtrl.find('Offer', '', function(err, response) {
          err ? reject(err) : resolve(response && response.results)            
        })
    })

    promise.then(function(results) {
        // TODO: set uesr info
        responseInterceptor.render(req, res, 'index', { 
            loginUser: req.user,
            offers: results
        })
    })
})


module.exports = router