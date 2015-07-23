<template>
  <div class="page__payment">
      <h2>Payment</h2>
      <div class="btn_large" v-on="click: onClickSubmit">Submit</div>
  </div>
</template>

<script lang="babel">

export default {
    data() {
        return {
          item: {}
        }
    },

    components: {
    },

    created() {
        var cache = this.$root.cache.detail
        if(!cache){
          console.log('anonymous access to payment/order')
          location.href = '#/'
          return
        }
        this.item = cache
    },

    methods: {

      onClickSubmit() {
        
      }
    }
}
</script>