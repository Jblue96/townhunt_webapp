<template>
  <div class="page__reserve">
    <div v-if="initialized">
      <div class="detail_banner swiper-container detail_banner_swiper">
        <ul class="swiper-wrapper">
          <li v-repeat="item.images" class="swiper-slide detail_banner_bg" v-style="background-image: 'url(' + url + ')'"></li>
        </ul>
      </div>
      <div class="reserve_summary">
        <div>{{reserveRequestDate | displayReserveDate}}</div>
        <div>{{reserveRequestDate.numberOfPersons | displayReservePersons}}</div>
      </div>
      <hr>
      <div class="reserve_user_form">
        <div class="reserve_user_form_title">Your Information</div>  
        <div>
          <div class="reserve_user_form_input">
            <input v-model="reserveRequestUser.name" placeholder="Name">
          </div>
          <div class="reserve_user_form_input">
            <input v-model="reserveRequestUser.email" placeholder="Email">
          </div>
        </div>
        <hr>
        <div class="reserve_user_form_input">
          <textarea v-model="reserveRequestUser.special" rows="4" placeholder="Special Request (Food allegies, birthday etc.)"></textarea>
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
          initialized: false,
          showLoading: false,
          item: {},
          reserveRequestDate: {},
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
          this.reserveRequestDate = reserveRequestDateCache
          this.reserveRequestUser = cache.get('reserveRequestUser') || this.initialData()
        } else {
          // TODO: handling direct access
          util.redirect('#/')
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

        validate() {
            var errors = []
            if (util.trim(this.reserveRequestUser.name) === "") {
              errors.push({message: 'Please input your name'})
              return errors
            }
            if (util.trim(this.reserveRequestUser.email) === "") {
              errors.push({message: 'Please input your email'})
              return errors
            }
            // email format check
            if(!/^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}$/.test(this.reserveRequestUser.email)){
                errors.push({message: 'Invalid email address'})
                return errors
            }
            return errors;
        },

        next() {
          var errors = this.validate()
          if (errors.length > 0) {
            alert(util.pluck(errors, 'message').join('\n'))
            return
          }
          console.log(JSON.stringify(this.reserveRequestUser))
          // store into cache
          cache.set('reserveRequestUser', this.reserveRequestUser)
          util.redirect('#/reserve/confirm')

        }
    }
}
</script>
