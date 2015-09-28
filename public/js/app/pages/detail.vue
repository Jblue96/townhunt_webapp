<template>
  <div class="page__detail">
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
                <div class="detail_right">
                    <div class="detail_favorite" v-class="icon_favorite: item.favorited, icon_favorite_blank: !item.favorited" v-on="click: favorite"></div>
                </div>
            </div>
            <div class="detail_table">
                <div class="detail_middle">
                    <div class="detail_categories">
                        <span>{{item.shop.category | displayCategory}}</span>
                    </div>
                    <div class="detail_area">
                        <span>{{item.area | displayArea}}</span>
                    </div>
                    <div class="detail_michelin" v-if="item.shop.michelin">
                        <span class="detail_michelin_label">Michelin</span>
                        <span>{{{item.shop.michelin | michelin}}}</span>
                    </div>
                </div>
                <div class="detail_right">
                    <!--div class="detail_sns_wrap">
                        <a href="javascript:;" class="icon_sns_fb" v-on="click: onClickShareFB"></a>
                        <a href="javascript:;" class="icon_sns_tw" v-on="click: onClickShareTW"></a>
                    </div-->
                </div>
                <div class="detail_nowOpened">
                    {{{item | displayNowOpened}}}
                </div>
            </div>
        </div>
        <div class="detail_location">
            <a class="detail_location_link" v-attr="href: item.location | gMapLink" target="_blank">
                <p>{{item.address}}</p>
            </a>
            <div class="detail_location_icon"></div>
        </div>
        <div class="detail_main">
            <div class="component_table">
                <div class="table_row">
                    <div class="table_cell table_cell_left">
                        <label>Tel</label>
                    </div>
                    <div class="table_cell table_cell_right">
                        {{{item.shop.tel | displayTel}}}
                    </div>
                </div>
                <div class="table_row">
                    <div class="table_cell table_cell_left">
                        <label>Budget</label>
                    </div>
                    <div class="table_cell table_cell_right">
                        {{{item.shop.budget.display | displayBudget}}}
                    </div>
                </div>
                <div class="table_row">
                    <div class="table_cell table_cell_left">
                        <label>Credit Card</label>
                    </div>
                    <div class="table_cell table_cell_right">
                        {{item.shop.cardAvailable | displayAvailbility}}
                    </div>
                </div>
                <div class="table_row">
                    <div class="table_cell table_cell_left">
                        <label>Open Hours</label>
                    </div>
                    <div class="table_cell table_cell_right">
                        {{{item.shop.operatingHours | displayOperatingHours}}}
                    </div>
                </div>
                <div class="table_row">
                    <div class="table_cell table_cell_left">
                        <label>Closed on</label>
                    </div>
                    <div class="table_cell table_cell_right">
                        {{item.shop.shopHolidays | displayShopHolidays}}
                    </div>
                </div>
                <div class="table_row">
                    <div class="table_cell table_cell_left">
                        <label>Smoking</label>
                    </div>
                    <div class="table_cell table_cell_right">
                        {{item.shop.smokingAvailable | displayAvailbility}}
                    </div>
                </div>
            </div>
        </div>
        <div class="detail_description" v-show="item.description">
            <p>{{item.description}}</p>
        </div>
    </div>
    <div class="detail_footer" v-if="initialized">
        <div class="btn_submit_menu btn_large" v-on="click: menu">MENU</div>
        <div class="btn_submit_reserve btn_large" v-on="click: reserve">REQUEST RESERVE</div>
    </div>
    <div class="loading_page" v-if="showLoading">
        <div class="icon_loading"></div>
    </div>
  </div>
</template>

<script lang="babel">
import $ from 'npm-zepto'
import util from '../../common/util'
import config from '../../common/config'
import cache from '../../common/cache'
import Swiper from '../../lib/swiper.jquery'

export default {

    data() {
        return {
            initialized: false,
            showLoading: false,
            item: {
                location: {}
            }
        }
    },

    created() {
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
            // direct access if item does not exist, load an item
            this.refresh(this.$root.router.getRoute()[1])
        }
    },

    detached() {
      util.abortRequests()
      this.initialized = false
    },

    methods: {
        refresh(id) {
            if(this.initialized || !id) {
              return
            }
            this.showLoading = true
            // initial load
            var detailDeferred = util.request({
                // url: "./api/v1/offer/detail/" + id
                url: config.api.url + '/classes/Offer/' + id
            })
            // done both detail and me promises are resolved
            Promise.all([detailDeferred, util.me()]).then((data) => {
              // for initial router destroyed e.g. direct access to detail page
              if(!this.$root) { return }
              var item = data[0] || [],
                  me = data[1] || {favorites: []}
                // set favorited
                item.favorited = (me.favorites.indexOf(item.objectId) > -1)
                // store to cache
                this.item = item
                cache.set('detail', item)
                this.initialized = true
                this.showLoading = false
                this.initSwiper()
            }, () => {
                this.initialized = true
                this.showLoading = false
            })
        },

        onClickPayment() {
            location.href = '#/payment/order'
        },

        favorite(){
            util.toggleFavorite(this.item)
        },

        initSwiper() {
            // TODO: temp to attach after DOM is inserted by initialized flag
            setTimeout(() => {
              util.initBannerSwiper($(this.$el).find('.swiper-container'))
            }, 25)
        },

        onClickShareFB() {
          util.shareFB(config.baseUrl + '/#/detail/' + this.item.objectId)
        },

        onClickShareTW() {
          util.shareTW(config.baseUrl + '/#/detail/' + this.item.objectId, this.item.name)
        },

        menu() {
          location.href = '#/menu/' + this.item.objectId
        },

        reserve() {
          location.href = '#/reserve/date_form/' + this.item.objectId
        }
    }
}
</script>
