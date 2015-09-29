import $ from 'npm-zepto'
import moment from 'moment'
import Slideout from '../lib/slideout'
import Swiper from '../lib/swiper.jquery'
import config from './config'
import cache from './cache'
import localStorage from './localStorage'
import constants from '../../../controllers/constants'

var util = {

    _requests: {},

    escapeHTML(text) {
      return text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    },

    trim(str) {
      if (str === null) { str = '' }
      str = str.trim()
      return str.replace(/\n/g, '');
    },

    redirect(path) {
      cache.get('histories').push(path)
      location.href = path
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

    detect(list, iterator) {
      var r = null
      list.forEach((obj) => {
        var result = iterator(obj)
        if (result) {
          r = obj
        }
      })
      return r
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
    },

    shareFB(url) {
        var shareUrl = url || location.href
        window.open('http://wwww.facebook.com/sharer.php?u=' + encodeURIComponent(shareUrl), 'FacebookShare', 'width=550,height=450,resizable=yes,scrollbars=no')
    },

    shareTW(url, text, hashtags) {
        var shareUrl = url || location.href
        var shareText = text || document.title
        var hashtags = 'townhunt_tokyo'
        window.open('http://twitter.com/share?url=' + encodeURIComponent(shareUrl) + '&text=' + encodeURIComponent(shareText) + '&hashtags=' + encodeURIComponent(hashtags), 'TwitterShare', 'width=550,height=450,resizable=yes,scrollbars=no')
    },

    scrollTo(element, to, duration) {
      if (duration < 0) return;
      var difference = to - element.scrollTop;
      var perTick = difference / duration * 10;

      setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop == to) return;
        util.scrollTo(element, to, duration - 10);
      }, 10);
    },

    initBannerSwiper($banners) {
      var size = $banners.find('li').size()
      new Swiper($banners, {
          wrapperClass: "swiper-wrapper",
          slideClass: "swiper-slide",
          loop: size > 1,
          autoplay: 4000,
          autoplayDisableOnInteraction: false,
      })
    },

    initHorizontalSwiper(el) {
      new Swiper(el, {
          freeMode: true,
          freeModeMomentumBounce: false,
          freeModeMomentumRatio: 0.6,
          wrapperClass: "swiper-wrapper",
          slideClass: "swiper-slide",
          slidesPerView: "auto"
      })
    },

    convetDateToLongValue(obj) {
        // obj: {value: "2014-07-17", hour: "20", minutes: "10"}
        if(!obj || !obj.value){ return null; }
        // format with ISO 8601 e.g. 2014-07-17T00:00
        // moment("2014-07-17T00:00", moment.ISO_8601).isValid();
        // (new moment()).valueOf() <-> new moment(1405585320000)
        var dateValue = obj.value;
        if(obj.hour){
            dateValue += "T" + obj.hour;
            if(obj.minutes){
                dateValue += ":" + obj.minutes;
            }
        }
        var m = moment(dateValue, moment.ISO_8601);
        return m.isValid() ? m.valueOf() : null;
    },

    convertLongValueToDateInfo(longValue) {
        // ISO format (YYYY-MM-DDTHH:mm:ssZ) is not compatible with datetime-local input
        var m = new moment(longValue);
        return {
            value: m.format("YYYY-MM-DD"),
            hour: m.format("HH"),
            minutes: m.format("mm"),
            iso: m.format("YYYY-MM-DDTHH:mm"),
            // Jan Feb ... Nov Dec
            month: m.format('MMM'),
            // 1st 2nd ... 30th 31st
            dayOfMonth: m.format('Do'),
            // Sun Mon ... Fri Sat
            dayOfWeek: m.format('ddd'),
            longValue: longValue
        }
    },

    today() {
        var m = new moment();
        return m.format("YYYY-MM-DD");
    },

    tomorrow(isoValue) {
        isoValue = isoValue || this.today();
        var m = moment(isoValue, moment.ISO_8601);
        m.add(1, 'days');
        return m.format("YYYY-MM-DD");
    }

}

export default util