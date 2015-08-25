import $ from 'npm-zepto'
import Slideout from '../lib/slideout'
import config from './config'

export default {

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
      return () => slideout
    })(),

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
        $.ajax({    
          type: "GET",
          headers: headers,
          url: options.url,
          data: options.data || null,
          dataType: options.dataType || "json",
          cache: options.cache || false,
          success: resolve,
          error: reject
        })
      })
    },

    getUrlQueryParams() {
      return $.deparam(location.search.substring(1))
    },

    // return for parse search query params
    // e.g. /?search={"where":{"town":{"$regex":"shibuya"}}}#/
    getUrlSearchQueryParams() {
      var search = {}
      var params = this.getUrlQueryParams()
      if(params && params.search) {
        try {
          search = JSON.parse(params.search)
        } catch(e) {}
      }
      return search
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
    }

}