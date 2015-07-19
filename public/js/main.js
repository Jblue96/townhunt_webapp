import Vue from 'vue'
import route from 'vue-route'
import config from './common/config'
import util from './common/util'
import componentHeader from './components/header.vue'
import componentNav from './components/nav.vue'
import componentFooter from './components/footer.vue'
import pageTop from './pages/top.vue'
import pageDetail from './pages/detail.vue'

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
        'page-detail': pageDetail
    },

    routes: {
        '/': {
            componentId: 'page-top',
            isDefault: true
        },
        '/detail/:item': {
            componentId: 'page-detial'
            // afterUpdate: 'refresh'
        },
        options: {
            hashbang: true
        }
    },

    data: {
    },

    created() {
    },

    methods: {
    }
})