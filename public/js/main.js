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
        'page-payment-succsss': pagePaymentSuccess,
        'page-request-list': pageRequestList,
        'page-request-detail': pageRequestDetail
    },

    data: {
        currentView: 'page-top',
        headerOptions: {}
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
        }
    }
})

var onRoute = (componentId, params, headerType) => {
    app.currentView = componentId
    app.updateHeader(headerType)
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
    '/mypage': function() {
        onRoute('page-mypage-top')
    }
}

var router = Router(routes)
router.init('/')

module.exports = app