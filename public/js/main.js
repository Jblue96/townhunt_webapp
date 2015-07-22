import Vue from 'vue'
import route from 'vue-route'
import config from './common/config'
import util from './common/util'
import componentHeader from './components/header.vue'
import componentNav from './components/nav.vue'
import componentFooter from './components/footer.vue'
import pageTop from './pages/top.vue'
import pageDetail from './pages/detail.vue'
import pageMypage from './pages/mypage.vue'

// setup Vue
Vue.config.debug = config.debug
Vue.use(route)

module.exports = new Vue({

    el: '#app',

    components: {
        'component-header': componentHeader,
        'component-nav': componentNav,
        'component-footer': componentFooter,
        'page-top': pageTop,
        'page-detail': pageDetail,
        'page-mypage': pageMypage
    },

    routes: {
        '/': {
            componentId: 'page-top',
            afterUpdate: function() {
                this.updateHeader()
                this.closeMenu()
            },
            isDefault: true
        },
        '/detail/:id': {
            componentId: 'page-detail',
            afterUpdate:  function() {
                this.updateHeader()
                this.closeMenu()
            }
        },
        '/mypage': {
            componentId: 'page-mypage',
            afterUpdate:  function() {
                this.updateHeader()
                this.closeMenu()
            }
        },
        options: {
            hashbang: true
        }
    },

    data: {
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