var resourceBundle = require('../controllers/resourceBundle');
var constants = require('../controllers/constants');
var filter = require('../controllers/filter');

module.exports = {

    render(req, res, view, data) {
        // add nls messages
        data = data || {}
        data.labels = resourceBundle.getLabels(req)
        data.constants = constants,
        data.filter = filter

        // TODO: to be removed. temp for v0.1
        if (view === 'index') {
            res.render('app/index', data)
        } else {
            // switch pc/mobile by ua
            var ua = req.header('user-agent');
            if (/mobile/i.test(ua)) {
                res.render('sp/' + view, data);
            } else {
                res.render('pc/' + view, data);
            }
        }
    }
    
}