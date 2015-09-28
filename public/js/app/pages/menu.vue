<template>
  <div class="page__menu">
    <div v-if="initialized">
      <div class="detail_banner swiper-container">
        <ul class="swiper-wrapper">
          <li v-repeat="item.images" class="swiper-slide detail_banner_bg" v-style="background-image: 'url(' + url + ')'"></li>
        </ul>
      </div>
      <div class="detail_summary">
        <div class="detail_table">
            <div class="detail_middle">
                <div class="detail_title">{{item.name}}</div>
            </div>
        </div>
      </div>
      <div class="">
        Menu
      </div>
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
import Swiper from '../../lib/swiper.jquery'

export default {
    data() {
        return {
          initialized: true,
          showLoading: false,
          item: {}
        }
    },

    components: {
    },

    created() {
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
          location.href = '#/menu/' + this.item.objectId
        }
    },

    detached() {
      util.abortRequests()
      this.initialized = false
    },

    methods: {
        initSwiper() {
            // TODO: temp to attach after DOM is inserted by initialized flag
            setTimeout(() => {
              util.initBannerSwiper($(this.$el).find('.swiper-container'))
            }, 25)
        },
    }
}
</script>