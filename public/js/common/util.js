import Slideout from 'slideout'
import $ from 'npm-zepto'
import config from './config'

export default {

    escapeHTML(text) {
      return text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    },

    // filter an item from list by id prop
    getItemById(items, targetId, idProp) {
      var results = $.grep(items, (item) => {
        return item['id' || idProp] === targetId
      })
      return (results && results[0]) || null
    },

    // getSlideOut: (() => {
    //   // setup slideout at initialization
    //   var slideout = new Slideout({
    //     'panel': document.getElementById('main'),
    //     'menu': document.getElementById('menu'),
    //     'padding': 256,
    //     'tolerance': 70
    //   })
    //   // add event handler on main to close by click
    //   $('.component__main').on('click', (e) => {
    //     if(slideout.isOpen()){
    //       slideout.close()
    //     }
    //   })
    //   return () => slideout
    // })(),

    request: (options={}) => {
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
    }

}