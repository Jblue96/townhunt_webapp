/**
 * Cache
 * Store API response cache and temp data
 */
export default {

  _ref: {
    // login user info
    me: null,
    // callback URL after login success
    loginCallbackUrl: null,
    // URL histories to move by back button
    histories: ['#/'],
    // current selected detail offer
    detail: null,
    // current selected request detail
    requestDetail: null,
    // force reload with ignoring keep-alive
    _forceReload: {
      'page-top': true
    }
  },

  set(key, value) {
    this._ref[key] = value
  },

  get(key) {
    return this._ref[key]
  },

  enableForceReload(componentId) {
    this._ref._forceReload[componentId] = true
  },

  disableForceReload(componentId) {
    this._ref._forceReload[componentId] = false
  },

  needForceReload(componentId) {
    return this._ref._forceReload[componentId] || false
  }

}