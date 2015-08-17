<template>
  <div class="page__request">
      <div class="request_detail_banner">
          <div class="request_detail_banner_bg" v-style="background-image: 'url(' + item.offer.imageUrl + ')'"></div>
      </div>
      <div class="request_detail_summary">
          <div class="request_detail_title">{{item.offer.name}}</div>
          <div class="request_detail_table">
              <div class="request_detail_middle">
                  <div class="request_detail_categories">
                      <span>{{item.offer.type | type}</span>
                  </div>
                  <div class="request_detail_area">{{item.offer.address.city}}</div>
              </div>
              <div class="request_detail_right">
                  <div class="request_detail_price">{{item.offer.price | price}}</div>
              </div>
          </div>
      </div>
      <div class="request_detail_main">
          <h5>About this place</h5>
          <div>
              <p>Hours: {{item.offer.availability}}</p>
          </div>
          <div class="request_detail_location">
              <div class="request_detail_location_icon"></div>
              <div class="request_detail_location_content">
                  <div class="request_detail_location_title">{{item.offer.location.name}}</div>
                  <div class="request_detail_location_address">{{item.offer.location.address}}</div>
                  <div class="request_detail_location_right">
                      <span>Open with Google Map</span>
                  </div>
              </div>
          </div>
          <p class="request_detail_description">{{{item.offer.description}}}</p>
      </div>
  </div>
</template>

<script lang="babel">
import cache from '../../common/cache'

export default {
    data() {
        return {
          item: {}
        }
    },

    components: {
    },

    created() {
        // check exisiting item
        var detail = cache.get('requestDetail')
        if(detail){
            this.item = detail
        }
    },

    methods: {
    }
}
</script>