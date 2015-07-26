<template>
  <div class="page__detail">
    <div v-if="initialized">
        <div class="detail_banner">
            <div class="detail_banner_bg" v-style="background-image: 'url(' + item.imageUrl + ')'"></div>
        </div>
        <div class="detail_summary">
            <div class="detail_title">{{item.title}}</div>
            <div class="detail_table">
                <div class="detail_middle">
                    <div class="detail_categories">
                        <span v-repeat="cat : item.categories">{{cat}}</span>
                    </div>
                    <div class="detail_area">{{item.location.area}}</div>
                </div>
                <div class="detail_right">
                <div class="detail_favorite" v-class="icon_favorite: favorited, icon_favorite_blank: !favorited" v-on="click: favorite"></div>
                    <div class="detail_price">{{item.price}}</div>
                </div>
            </div>
        </div>
        <div class="detail_main">
            <h5>About this place</h5>
            <div>
                <p>Hours: {{item.availability}}</p>
            </div>
            <div class="detail_location">
                <div class="detail_location_icon"></div>
                <div class="detail_location_content">
                    <div class="detail_location_title">{{item.location.name}}</div>
                    <div class="detail_location_address">{{item.location.address}}</div>
                    <div class="detail_location_right">
                        <span>Open with Google Map</span>
                    </div>
                </div>
            </div>
            <p class="detail_description">{{{item.description}}}</p>
        </div>
        <div class="detail_footer">
            <div class="detail_btn btn_large" v-on="click: onClickPayment">GET TICKET {{item.price}}</div>
        </div>
    </div>
  </div>
</template>

<script lang="babel">
import $ from 'npm-zepto'
import util from '../common/util'
import cache from '../common/cache'

export default {

    data() {
        return {
            initialized: false,
            item: {
            }
        }
    },

    created() {
        // check exisiting item
        var detail = cache.get('detail')
        if(detail){
            this.item = detail
            this.initialized = true
        }else{
            // direct access if item does not exist, load an item
            this.refresh(this.$root.router.getRoute()[1])
        }
    },

    methods: {
        refresh(id) {
            if(!id) {
              return
            }
            // initial load
            var detailDeferred = util.request({
                url: "./api/v1/offer/detail/" + id
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
            })
        },

        onClickPayment() {
            location.href = '#/payment/order'
        },

        favorite(){
            alert("favorited!")
            // TODO
            var favorited = this.item.favorited
            if(favorited) {
                // send unfav
            } else {
                // send fav
            }
        }
    }
}
</script>