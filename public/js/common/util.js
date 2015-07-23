import Slideout from 'slideout'
import $ from 'npm-zepto'

export default {

    escapeHTML(text) {
      return text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    },

    getSlideOut: (() => {
      // setup slideout at initialization
      var slideout = new Slideout({
        'panel': document.getElementById('main'),
        'menu': document.getElementById('menu'),
        'padding': 256,
        'tolerance': 70
      })
      return () => slideout
    })(),

    request: (options={}) => {
      return new Promise((resolve, reject) => {
        $.ajax({    
          type: "GET",
          url: options.url,
          dataType: options.dataType || "json",
          cache: options.cache || false,
          success: resolve,
          error: reject
        })
      })
      return 
    }

}