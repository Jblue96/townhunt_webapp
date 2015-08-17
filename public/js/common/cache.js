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
    // current top & map query conditions
    queryParams: null
  },

  set(key, value) {
    this._ref[key] = value
  },

  get(key) {
    return this._ref[key]
  }
}