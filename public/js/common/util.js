import $ from 'npm-zepto'
import Slideout from '../lib/slideout'
import config from './config'
import cache from './cache'
import localStorage from './localStorage'
import constants from '../../../controllers/constants'

var util = {

    _requests: {},

    escapeHTML(text) {
      return text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    },

    // filter an item from list by id prop
    getItemById(items, targetId, idProp) {
      var results = $.grep(items, (item) => {
        return item['objectId' || idProp] === targetId
      })
      return (results && results[0]) || null
    },

    getSlideOut: (() => {
      // setup slideout at initialization
      var $menu = document.getElementById('menu')
      if(!$menu) {
        return
      }
      var slideout = new Slideout({
        'panel': document.getElementById('main'),
        'menu': $menu,
        'padding': 256,
        'tolerance': 70
      })
      // add event handler on main to close by click
      $('.component__main').on('click', (e) => {
        if(slideout.isOpen()){
          slideout.close()
        }
      })
      // disable slideout by default
      slideout.disableTouch()
      return () => slideout
    })(),

    timestamp() {
      return new Date().getTime()
    },

    request(options={}) {
      return new Promise((resolve, reject) => {
        var headers = options.headers || {}
        headers['X-Parse-Application-Id'] = config.api.appId
        headers['X-Parse-REST-API-Key'] = config.api.appKey
        // TODO 
        // var sessionToken = storage.get('sessionToken')
        // if (sessionToken) {
        //   headers['X-Parse-Session-Token'] = sessionToken
        // }
        var requestId = util.timestamp()
        var xhr = $.ajax({    
          type: "GET",
          headers: headers,
          url: options.url,
          data: options.data || null,
          dataType: options.dataType || "json",
          cache: options.cache || false,
          success: resolve,
          error: reject,
          complete() {
            delete util._requests[requestId]
          }
        })
        util._requests[requestId] = xhr
      })
    },

    abortRequests() {
      // abort all existing requests
      for (var requestId in util._requests) {
        if (requestId && util._requests[requestId]) {
          util._requests[requestId].abort()
        }
      }
      util._requests = {}
    },

    throttle(callback, limit) {
      var wait = false
      return function () {
        if (!wait) {
          callback()
          wait = true
          setTimeout(function () {
              wait = false
              callback()
          }, limit)
        }
      }
    },

    debouncer(onStart, onStop, delay) {
        var timer,
            count = 0
        return () => {
            if(count === 0) {
                onStart && onStart()
            }
            timer && clearTimeout(timer)
            timer = setTimeout(() => {
                onStop && onStop()
                count = 0
            }, delay || 500)
        }
    },

    me() {
      return new Promise((resolve, reject) => {
        // TODO: temp for server-side favorites
        var me = {
            favorites: localStorage.get(constants.clientStorages.favorites) || []
        }
        // not loggedIn
        if (!config.isLoggedIn) {
            resolve(me)
        } else if (cache.get('me')) {
            // already loaded
            resolve(cache.get('me'))
        } else {
            // initial load
            util.request({
                url: './api/v1/user/me'
            }).then((data) => {
                cache.set('me', data)
                resolve(data)
            }, reject)
        }
      })
    },

    toggleFavorite(item) {
      var favorited = item.favorited
      if(favorited) {
          return util.unfavorite(item.objectId).then(() => {
              // TODO: show success
              item.favorited = !item.favorited
          })
      } else {
          return util.favorite(item.objectId).then(() => {
              // TODO: show success
              item.favorited = !item.favorited
          })
      }
    },

    favorite(id) {
      return new Promise((resolve, reject) => {
        var favorites = localStorage.get(constants.clientStorages.favorites)
        if(!favorites) { favorites = [] }
        favorites.push(id)
        localStorage.set(constants.clientStorages.favorites, favorites)
        resolve()
      })
    },

    unfavorite(id) {
      return new Promise((resolve, reject) => {
        var favorites = localStorage.get(constants.clientStorages.favorites)
        if(!favorites) { favorites = [] }
        var index = favorites.indexOf(id);
        if (index > -1) {
          favorites.splice(index, 1)
        }
        localStorage.set(constants.clientStorages.favorites, favorites)
        resolve()
      })
    }
}

export default util