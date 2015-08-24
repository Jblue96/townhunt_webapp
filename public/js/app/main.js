import Vue from 'vue'
import {Router} from 'director'
import config from '../common/config'
import util from '../common/util'
import cache from '../common/cache'
import InfiniteScroller from '../common/InfiniteScroller'
// components
import componentHeader from './components/header.vue'
import componentNav from './components/nav.vue'
import componentFooter from './components/footer.vue'
// pages
import pageDetail from './pages/detail.vue'
import pageQueries from './pages/queries.vue'
import pageLogin from './pages/login.vue'
import pageLogout from './pages/logout.vue'
import pageTop from './pages/top.vue'
import pageMap from './pages/map.vue'
import pageWishlist from './pages/wishlist.vue'
import pageMypageTop from './pages/mypage/top.vue'
import pageMypageEdit from './pages/mypage/edit.vue'
import pagePaymentOrder from './pages/payment/order.vue'
import pagePaymentSuccess from './pages/payment/success.vue'
import pageRequestList from './pages/request/list.vue'
import pageRequestDetail from './pages/request/detail.vue'
// filter
import filter from './filters/filter'
// zepto patch
// for swiper
import $ from 'npm-zepto'
import {} from '../lib/zepto.deparam'
import {} from '../lib/zepto.height'

// setup Vue
Vue.config.debug = config.debug

var app = new Vue({

    el: '#app',

    components: {
        'component-header': componentHeader,
        'component-nav': componentNav,
        'component-footer': componentFooter,
        'page-detail': pageDetail,
        'page-queries': pageQueries,
        'page-login': pageLogin,
        'page-logout': pageLogout,
        'page-top': pageTop,
        'page-map': pageMap,
        'page-wishlist': pageWishlist,
        'page-mypage-top': pageMypageTop,
        'page-mypage-edit': pageMypageEdit,
        'page-payment-order': pagePaymentOrder,
        'page-payment-success': pagePaymentSuccess,
        'page-request-list': pageRequestList,
        'page-request-detail': pageRequestDetail
    },

    data: {
        currentView: 'page-top',
        headerOptions: {},
        // API response cache
        cache: {
            detail: null,
            me: null,
            request: {
                detail: null
            }
        }
    },

    created() {
        // called by headear save button
        this.$on('onSave', (componentId) => {
            // e.g. onSave:page-mypage-edit
            this.$broadcast('onSave:' + componentId)
        })
    },

    methods: {
        fetchMe() {
            return new Promise((resolve, reject) => {
                // not loggedIn
                if(!config.isLoggedIn){
                    resolve()
                    return
                }
                // already loaded
                if(this.$root && cache.get('me')){
                    resolve(cache.get('me'))
                    return
                }
                // initial load
                util.request({
                    url: './api/v1/user/me'
                }).then((data) => {
                    cache.set('me', data)
                    resolve(data)
                }, reject)
            })
        }
    }
})

// setup infinite scroll
app._infiniteScroller = new InfiniteScroller({
    callback() {
        app.$broadcast('onScrollBottom')
    }
})
app._infiniteScroller.enable()

var onRoute = (componentId, options = {}) => {
    app.currentView = options.componentId = componentId
    setTimeout(() => {
        app.$broadcast('onRoute', options)
    }, 25)
}

// setup router
var routes = {
    '/': function() {
        onRoute('page-top')
    },
    '/map': function() {
        onRoute('page-map')
    },
    '/queries': function() {
        onRoute('page-queries')
    },
    '/detail/:id': function(id) {
        onRoute('page-detail')
    },
    '/login': function() {
        onRoute('page-login')
    },
    '/logout': function() {
        onRoute('page-logout')
    },
    '/likes': function() {
        onRoute('page-wishlist', {type: 'like'})
    },
    '/buckets': function() {
        onRoute('page-wishlist', {type: 'bucket'})
    },
    '/mypage/top': function() {
        onRoute('page-mypage-top')
    },
    '/mypage/edit': function() {
        onRoute('page-mypage-edit')
    },
    '/payment/order': function() {
        onRoute('page-payment-order')
    },
    '/payment/success': function() {
        onRoute('page-payment-success')
    },
    '/request/list': function() {
        onRoute('page-request-list')
    },
    '/request/detail/:id': function(id) {
        onRoute('page-request-detail')
    }
}

var NEED_LOGIN_PAGES = ['mypage', 'payment', 'request']

var router = app.router = Router(routes).configure({
    before() {
        // move login screen for anonymous login
        var current = '#/' + router.getRoute().join('/')
        if(!config.isLoggedIn){
            if(NEED_LOGIN_PAGES.indexOf(router.getRoute()[0]) > -1){
                cache.set('loginCallbackUrl', current)
                location.href = '#/login'
                return false
            }
        }
        cache.get('histories').push(current)
    }
})

router.init('/')

module.exports = app