<template>
  <div class="page__payment">
      <h2>Payment</h2>
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
        if(cache){
            this.item = cache
        }else{
          alert('An error occurs')
          // move to top page
          location.href = '#/'
        }
    },

    methods: {
    }
}
</script>