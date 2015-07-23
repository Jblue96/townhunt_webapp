import Vue from 'vue'
import {Router} from 'director'
import config from './common/config'
import util from './common/util'
import componentHeader from './components/header.vue'
import componentNav from './components/nav.vue'
import componentFooter from './components/footer.vue'
import pageDetail from './pages/detail.vue'
import pageLogin from './pages/login.vue'
import pageTop from './pages/top.vue'
import pageWishlist from './pages/wishlist.vue'
import pageMypageTop from './pages/mypage/top.vue'
import pageMypageEdit from './pages/mypage/edit.vue'
import pagePaymentOrder from './pages/payment/order.vue'
import pagePaymentSuccess from './pages/payment/success.vue'
import pageRequestList from './pages/request/list.vue'
import pageRequestDetail from './pages/request/detail.vue'

// setup Vue
Vue.config.debug = config.debug

var app = new Vue({

    el: '#app',

    components: {
        'component-header': componentHeader,
        'component-nav': componentNav,
        'component-footer': componentFooter,
        'page-detail': pageDetail,
        'page-login': pageLogin,
        'page-top': pageTop,
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
    },

    methods: {
        closeMenu() {
            util.getSlideOut().close()
        },

        updateHeader(type, title='') {
            switch(type){
                case 'back':
                    this.headerOptions = {
                        title: title,
                        leftType: 'back',
                        rightType: 'none'
                    }
                    break
                default:
                    this.headerOptions = {
                        title: title,
                        leftType: 'menu',
                        rightType: config.isLoggedIn ? 'mypage' : 'login'
                    }
                    break
            }
        },

        fetchMe() {
            return new Promise((resolve, reject) => {
                // not loggedIn
                if(!config.isLoggedIn){
                    resolve()
                    return
                }
                // already loaded
                if(this.$root && this.$root.cache.me){
                    resolve(this.$root.cache.me)
                    return
                }
                // initial load
                util.request({
                    url: './api/v1/user/me'
                }).then((data) => {
                    this.$root.cache.me = data
                    resolve(data)
                }, reject)
            })
        }
    }
})

var onRoute = (componentId, params, headerType) => {
    app.currentView = componentId
    app.updateHeader(headerType)
    app.closeMenu()
    // temp
    setTimeout(() => {
        app.$broadcast('onRoute', params)
    }, 25)
}

// setup router
var routes = {
    '/': function() {
        onRoute('page-top')
    },
    '/detail/:id': function(id) {
        onRoute('page-detail', {id: id})
    },
    '/login': function() {
        onRoute('page-login')
    },
    '/wishlist': function() {
        onRoute('page-wishlist')
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
        onRoute('page-request-detail', {id: id})
    }
}

Router(routes).init('/')

module.exports = app