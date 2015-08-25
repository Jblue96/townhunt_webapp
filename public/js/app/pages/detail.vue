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
                        Now Opened
                    </div>
                </div>
                <div class="detail_right">
                <div class="detail_favorite" v-class="icon_favorite: favorited, icon_favorite_blank: !favorited" v-on="click: favorite"></div>
                </div>
            </div>
        </div>
        <div class="detail_location">
            <div class="detail_location_content">
                <p>{{item.address}}</p>
            </div>
            <div class="detail_location_icon"></div>
        </div>
        <div class="detail_main">
            <dl>
                <dt>Budget</dt>
                <dd>{{item.shop.budget.display | displayBudget}}</dd>

                <dt>Credit Card</dt>
                <dd>{{item.shop.cardAvailable | displayCard}}</dd>

                <dt>Open Hours</dt>
                <dd>{{item.shop.operatingHours | displayOperatingHours}}</dd>

                <dt>Closed on</dt>
                <dd>{{item.shop.shopHolidays | displayShopHolidays}}</dd>
            </dl>
        </div>
        <div class="detail_footer">
            <div class="detail_btn btn_large" v-on="click: onClickLike">Lovin' it</div>
            <div class="detail_btn btn_large" v-on="click: onClickBucket">Bucket it</div>
        </div>
    </div>
    <div v-if="!initialized">
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
            item: {
            }
        }
    },

    created() {
    },

    attached() {
        this.initialized = false
        // check exisiting item
        var detail = cache.get('detail')
        if(detail){
            this.item = detail
            this.initialized = true
            this.initSwiper()
        }else{
            // direct access if item does not exist, load an item
            this.refresh(this.$root.router.getRoute()[1])
        }
    },

    detached() {
    },

    methods: {
        refresh(id) {
            if(this.initialized || !id) {
              return
            }
            // initial load
            var detailDeferred = util.request({
                // url: "./api/v1/offer/detail/" + id
                url: config.api.url + '/classes/Offer/' + id
            })
            // done both detail and me promises are resolved
            Promise.all([detailDeferred, this.$root.fetchMe()]).then((data) => {
              // for initial router destroyed e.g. direct access to detail page
              if(!this.$root) { return }
              var item = data[0] || [],
                  me = data[1] || {favorites: []}
                // set favorited
                item.favorited = (me.favorites.indexOf(item.id) > -1)
                // store to cache
                this.item = item
                cache.set('detail', item)
                this.initialized = true
                this.initSwiper()
            }, () => {
                this.initialized = true
            })
        },

        onClickPayment() {
            location.href = '#/payment/order'
        },

        onClickLike() {

        },

        onClickBucket() {

        },

        favorite(){
            // TODO
            var favorited = this.item.favorited
            if(favorited) {
                // send unfav
            } else {
                // send fav
            }
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