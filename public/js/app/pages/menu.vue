<template>
  <div class="page__menu">
    <div v-if="initialized">
      <div class="detail_banner swiper-container swiper_banner">
        <ul class="swiper-wrapper">
          <li v-repeat="item.images" class="swiper-slide detail_banner_bg" v-style="background-image: 'url(' + url + ')'">
          <div class="detail_banner_label" v-if="title">{{title}}</div>
          </li>
        </ul>
        <div class="swiper_banner_title_wrap">
            <div class="swiper_banner_title_table">
                <div class="swiper_banner_title">
                    <h3>{{item.name}}</h3>
                    <div class="swiper_banner_desc"></div>
                </div>
            </div>
        </div>
      </div>
      <div class="menu_wrap">
        <component-menus menus="{{item.menus}}"></component-menus>
      </div>
    </div>
    <div class="detail_footer" v-if="initialized">
        <div class="btn_submit_reserve btn_large" v-on="click: reserve">REQUEST RESERVE</div>
    </div>
    <div v-if="!initialized"></div>
  </div>
</template>

<script lang="babel">
import $ from 'npm-zepto'
import util from '../../common/util'
import config from '../../common/config'
import cache from '../../common/cache'
import labels from '../../common/labels'
import componentMenus from '../components/menus.vue'

export default {
    data() {
        return {
          initialized: false,
          showLoading: false,
          item: {}
        }
    },

    components: {
      'component-menus': componentMenus
    },

    attached() {
        // check exisiting item
        var detail = cache.get('detail')
        if(detail){
            // TODO: temp workaround to scrollTop
            setTimeout(() => {
                this.initialized = true
                this.item = detail
                this.initSwiper()
            }, 25)
        }else{
          // TODO: handling direct access
          util.redirect('#/')
        }
    },

    detached() {
      this.initialized = false
    },

    methods: {
        initSwiper() {
            // TODO: temp to attach after DOM is inserted by initialized flag
            setTimeout(() => {
              util.initBannerSwiper($(this.$el).find('.swiper_banner'))
            }, 25)
        },

        reserve() {
          util.redirect('#/reserve/date_form/' + this.item.objectId)
        }

    }
}
</script>
