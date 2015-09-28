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
      <div class="reserve_user_form">
        <div>
          <div>Name</div>
          <div>
            <input v-model="reserveRequestUser.name"></div>
          </div>
          <div>Email</div>
          <div>
            <input v-model="reserveRequestUser.email"></div>
          </div>
        </div>
        <div>
          <textarea v-model="reserveRequestUser.special" placeholder="Special Request (Food allegies, birthday etc.)"></textarea>
        </div>
      </div>
    </div>
    <div class="reserve_footer" v-if="initialized">
        <div class="btn_submit_reserve btn_large" v-on="click: next">NEXT</div>
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
          initialized: true,
          showLoading: false,
          item: {},
          reserveRequestUser: this.initialData()
        }
    },

    attached() {
        // check exisiting item
        var detail = cache.get('detail')
        // check reserve request object cache
        var reserveRequestDateCache = cache.get('reserveRequestDate')
        if (detail && reserveRequestDateCache) {
          // TODO: temp workaround to scrollTop
          setTimeout(() => {
              this.initialized = true
              this.item = detail
              this.initSwiper()
          }, 25)
          this.reserveRequestUser = cache.get('reserveRequestUser') || this.initialData()
        } else {
          // TODO: handling direct access
          location.href = '#/'
        }
    },

    detached() {
      this.initialized = false
    },

    methods: {
        initialData() {
          return {
            "id": "",
            "name": "",
            "email": "",
            "special": ""
          }
        },

        initSwiper() {
            // TODO: temp to attach after DOM is inserted by initialized flag
            setTimeout(() => {
              util.initBannerSwiper($(this.$el).find('.detail_banner_swiper'))
            }, 25)
        },

        next() {
          // TODO: validation
          if (util.trim(this.reserveRequestUser.name) === "") {
            alert('Please input your name')
            return
          }
          if (util.trim(this.reserveRequestUser.email) === "") {
            alert('Please input your email')
            return
          }
          console.log(JSON.stringify(this.reserveRequestUser))
          // store into cache
          cache.set('reserveRequestUser', this.reserveRequestUser)
          location.href = '#/reserve/confirm'

        }
    }
}
</script>
