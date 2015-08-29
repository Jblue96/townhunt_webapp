<template>
  <div class="page__detail">
    <div v-if="initialized">
        <div class="detail_banner swiper-container">
            <ul class="swiper-wrapper">
                <li v-repeat="item.images" class="swiper-slide detail_banner_bg" v-style="background-image: 'url(' + url + ')'"></li>
            </ul>
        </div>
        <div class="detail_summary">
            <div class="detail_title">{{item.name}}</div>
            <div class="detail_table">
                <div class="detail_middle">
                    <div class="detail_categories">
                    <span>{{item.town}}</span> / <span>{{item.shop.category}}</span>
                    </div>
                    <div>
                        <span>Michelin</span>
                        <span>{{item.shop.michelin | michelin}}</span>
                    </div>
                    <div>
                        {{item | displayNowOpened}}
                    </div>
                </div>
                <div class="detail_right">
                <div class="detail_favorite" v-class="icon_favorite: item.favorited, icon_favorite_blank: !item.favorited" v-on="click: favorite"></div>
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
            <dl>
                <dt>Budget</dt>
                <dd>{{item.shop.budget.display | displayBudget}}</dd>

                <dt>Credit Card</dt>
                <dd>{{item.shop.cardAvailable | displayAvailbility}}</dd>

                <dt>Open Hours</dt>
                <dd>{{item.shop.operatingHours | displayOperatingHours}}</dd>

                <dt>Closed on</dt>
                <dd>{{item.shop.shopHolidays | displayShopHolidays}}</dd>

                <dt>Smoking</dt>
                <dd>{{item.shop.smokingAvailable | displayAvailbility}}</dd>
            </dl>
        </div>
    </div>
    <div class="loading_page" v-if="showLoading">
        Loading...
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
                var $banners = $(this.$el).find('.swiper-container'),
                    size = $banners.find('li').size()
                new Swiper($banners, {
                    wrapperClass: "swiper-wrapper",
                    slideClass: "swiper-slide",
                    loop: size > 1,
                    autoplay: 4000,
                    autoplayDisableOnInteraction: false,
                })
            }, 25)
        }
    }
}
</script>