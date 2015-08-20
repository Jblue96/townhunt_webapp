var express = require('express')
var parseCtrl = require('../controllers/parseCtrl')
var responseInterceptor = require('../controllers/responseInterceptor')

var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
    // get offer list via Parse
    var promise = new Promise(function(resolve, reject) {
        parseCtrl.find('Offer', {
          limit: 50,
          order: '-createdAt'
        }, function(err, response) {
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

/* GET detail page. */
router.get('/detail/:id', function(req, res, next) {
    var id = req.params['id']
    if(!id) {
        // return 404
        next()
        return
    }
    // get specified offer
    var promise = new Promise(function(resolve, reject) {
        parseCtrl.findWithObjectId('Offer', id, function(err, response) {
          err ? reject(err) : resolve(response)            
        })
    })

    promise.then(function(result) {
        // TODO: set uesr info
        responseInterceptor.render(req, res, 'detail', { 
            loginUser: req.user,
            offer: result
        })
    })

})

module.exports = router