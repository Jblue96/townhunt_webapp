<template>
  <div class="page__payment">
      <h2>Payment</h2>
      <div class="btn_large" v-on="click: onClickSubmit">Submit</div>
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
        this.item = cache.get('detail')
    },

    methods: {

      onClickSubmit() {
        
      }
    }
}
</script>