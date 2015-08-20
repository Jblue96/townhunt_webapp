var Parse = require('node-parse-api').Parse;
 
module.exports = {

    _app: null,

    setup(options) {
        this._app = new Parse(options);
    },

    find(className, query, callback) {
        return this._app.find(className, query, callback)
    },

    findWithObjectId(className, objectId, callback) {
        return this._app.findWithObjectId(className, objectId, callback)
    }

}