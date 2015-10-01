<template>
  <div class="page__reserve">
    <div v-if="initialized">
      <div class="detail_banner swiper-container swiper_banner">
        <ul class="swiper-wrapper">
          <li v-repeat="item.images" class="swiper-slide detail_banner_bg" v-style="background-image: 'url(' + url + ')'"></li>
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
      <div class="reserve_summary">Your Reservation Detail</div>
      <hr>
      <div class="reserve_confirm">
        <div class="component_table">
          <div class="table_row">
            <div class="table_cell table_cell_left"><label>Date</label></div>
            <div class="table_cell table_cell_right">{{reserveRequestDate | displayReserveDate}}</div>
          </div>
          <div class="table_row">
            <div class="table_cell table_cell_left"><label>Seats</label></div>
            <div class="table_cell table_cell_right">{{reserveRequestDate.numberOfPersons | displayReservePersons}}</div>
          </div>
          <div class="table_row">
            <div class="table_cell table_cell_left"><label>Name</label></div>
            <div class="table_cell table_cell_right">{{reserveRequestUser.name}}</div>
          </div>
          <div class="table_row">
            <div class="table_cell table_cell_left"><label>Email</label></div>
            <div class="table_cell table_cell_right">{{reserveRequestUser.email}}</div>
          </div>
          <div class="table_row">
            <div class="table_cell table_cell_left"><label>Request</label></div>
            <div class="table_cell table_cell_right">{{reserveRequestUser.special ? reserveRequestUser.special : '-'}}</div>
          </div>
        </div>
      </div>
      <hr>
      <div class="reserve_summary">Confirmation email was sent to your email address.</div>
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
              util.initBannerSwiper($(this.$el).find('.swiper_banner'))
            }, 25)
        }
    }
}
</script>
