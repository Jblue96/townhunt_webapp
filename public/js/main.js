import Vue from 'vue'
import $ from 'npm-zepto'
import util from './common/util'
import vueDrawer from './components/drawer.vue'

Vue.config.debug = OPTION.debug

module.exports = new Vue({

    el: '#app',

    components: {
        "vue-drawer": vueDrawer
    },

    data: {
        items: [],
        drawerOpened: false,
        initialized: false
    },

    created: function() {
        this.$on("onDrawerClose", () => {
        })
        this.refresh()
    },

    methods: {
        refresh: function() {
            $.ajax({
                type: "GET",
                url: "./api/v1/event/list",
                dataType: "json",
                cache: false,
                success: (res) => {
                    this.initialized = true
                },
                error: () => {
                    this.initialized = true
                }
            })
        }
    }
})