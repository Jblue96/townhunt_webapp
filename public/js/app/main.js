import Vue from 'vue'
import {Router} from 'director'
import config from '../common/config'
import util from '../common/util'
import cache from '../common/cache'
import localStorage from '../common/localStorage'
import InfiniteScroller from '../common/InfiniteScroller'
import constants from '../../../controllers/constants'
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
import pageAbout from './pages/about.vue'
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
// setup constants
constants.init(config.labels)

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
        'page-about': pageAbout,
        'page-wishlist': pageWishlist,
        'page-mypage-top': pageMypageTop,
        'page-mypage-edit': pageMypageEdit,
        'page-payment-order': pagePaymentOrder,
        'page-payment-success': pagePaymentSuccess,
        'page-request-list': pageRequestList,
        'page-request-detail': pageRequestDetail
    },

    data: {
        currentView: '',
        headerOptions: {},
        isMenuOpened: false,
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
        this.$on('toggleMenu', (opened) => {
            this.isMenuOpened = opened
        })
        util.getSlideOut().on('beforeclose', () => {
          this.$emit('toggleMenu', false)
        })
    },

    methods: {
        onClickMenuOverlay(e) {
            util.getSlideOut().close()
            e.preventDefault(e)
            return false
        }
    }
})

// setup infinite scroll
app._infiniteScroller = new InfiniteScroller({
    callback() {
        app.$broadcast('onScrollBottom')
    }
})

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
    '/favorites': function() {
        onRoute('page-wishlist', {type: 'favorites'})
    },
    '/about': function() {
        onRoute('page-about')
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
        if(!config.loginUser){
            if(NEED_LOGIN_PAGES.indexOf(router.getRoute()[0]) > -1){
                cache.set('loginCallbackUrl', current)
                location.href = '#/login'
                return false
            }
        }
        cache.get('histories').push(current)
    }
})

router.init(location.hash || '/')

module.exports = app