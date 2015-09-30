<template>
  <div class="page__payment">
      <div class="detail_banner">
          <div class="detail_banner_bg" v-style="background-image: 'url(' + item.imageUrl + ')'"></div>
      </div>
      <div class="detail_summary">
          <div class="detail_title">{{item.title}}</div>
      </div>
      <div class="detail_main">
        <h3>Ticket Order</h3>
        <div>
        ...
        </div>
      </div>
      <div class="detail_footer">
        <div class="btn_large" v-on="click: onClickSubmit">Submit</div>
      </div>
  </div>
</template>

<script lang="babel">
import util from '../../../common/util'
import cache from '../../../common/cache'

export default {
    data() {
        return {
          item: {}
        }
    },

    components: {
    },

    created() {
        this.item = cache.get('detail')
    },

    methods: {

      onClickSubmit() {
        if(window.confirm('Are you sure you want to requests the order?')){
          // TODO: open 3rd party payment sdk

          // specify callback
          util.redirect("#/payment/success")
        }
      }
    }
}
</script>