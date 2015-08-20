var resourceBundle = require('../controllers/resourceBundle');

module.exports = {

    render(req, res, view, data) {
        // add nls messages
        data = data || {}
        data.labels = resourceBundle.getLabels(req)
        // switch pc/mobile by ua
        var ua = req.header('user-agent');
        if (/mobile/i.test(ua)) {
            res.render('sp/' + view, data);
        } else {
            res.render('pc/' + view, data);
        }
    }
    
}