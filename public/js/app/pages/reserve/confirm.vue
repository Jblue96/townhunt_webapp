<template>
  <div class="page__reserve">
    <div v-if="initialized">
      <div class="detail_banner swiper-container detail_banner_swiper">
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
      <div class="reserve_confirm">
      <div>
        <div>
          {{reserveRequestDate.date}}
        </div>
        <div>
          {{reserveRequestDate.menuType}}
        </div>
        <div>
          {{reserveRequestDate.time}}
        </div>
        <div>
          {{reserveRequestDate.numberOfPersons}}
        </div>
      </div>
        <div>
          <div>Name</div>
          <div>
            {{reserveRequestUser.name}}
          </div>
          <div>Email</div>
          <div>
            {{reserveRequestUser.email}}
          </div>
          <div>Special Request</div>
          <div>
            {{reserveRequestUser.special}}
          </div>
        </div>
      </div>
    </div>
    <div v-if="!initialized"></div>
  </div>
</template>

<script lang="babel">
import $ from 'npm-zepto'
import util from '../../../common/util'
import config from '../../../common/config'
import cache from '../../../common/cache'
import labels from '../../../common/labels'

export default {
    data() {
        return {
          initialized: false,
          showLoading: false,
          item: {},
          reserveRequestDate: {},
          reserveRequestUser: {}
        }
    },

    attached() {
        // check exisiting item
        var detail = cache.get('detail')
        // check reserve request object cache
        var reserveRequestDateCache = cache.get('reserveRequestDate')
        var reserveRequestUserCache = cache.get('reserveRequestUser')
        if (detail && reserveRequestDateCache && reserveRequestUserCache) {
            // TODO: temp workaround to scrollTop
            setTimeout(() => {
                this.initialized = true
                this.item = detail
                this.initSwiper()
            }, 25)
            this.reserveRequestDate = reserveRequestDateCache
            this.reserveRequestUser = reserveRequestUserCache
            // delete caches for requests
            cache.set('reserveRequestDate', null)
            cache.set('reserveRequestUser', null)
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
              util.initBannerSwiper($(this.$el).find('.detail_banner_swiper'))
            }, 25)
        }
    }
}
</script>
