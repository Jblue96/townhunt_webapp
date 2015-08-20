<template>
  <div class="page__payment">
      <div class="detail_banner">
          <div class="detail_banner_bg" v-style="background-image: 'url(' + item.imageUrl + ')'"></div>
      </div>
      <div class="detail_summary">
          <div>GOINGT TO:</div>
          <div class="detail_title">{{item.title}}</div>
      </div>
      <div class="detail_main">
        <h3>Date info</h3>
        <div>
        ...
        </div>
        <h3>Thank you for your request! We'll get in touch with you soon!</h3>
      </div>
      <div class="detail_footer">
          <div class="detail_btn btn_large" v-on="click: onClickDone">Back to Top</div>
      </div>
  </div>
</template>

<script lang="babel">
import cache from '../../../common/cache'

export default {
    data() {
        return {
          item: null
        }
    },

    components: {
    },

    created() {
      var detail = cache.get('detail')
      if(detail){
        this.item = detail
      }
    },

    methods: {
      onClickDone() {
        location.href = '#/'
      }
    }
}
</script>