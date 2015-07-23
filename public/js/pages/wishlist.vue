<template>
  <div class="page__wishlist">
      <h2>Wish List</h2>
  </div>
</template>

<script lang="babel">
import config from '../common/config'

export default {
    data() {
        return {
        }
    },

    components: {
    },

    created() {
      if(!config.isLoggedIn){
        console.log('anonymous access to wishlist')
        location.href = '#/login'
        return
      }
      this.refresh()
    },

    methods: {
        refresh() {
          // TODO: disscuss need wishlist API? or client filter
          // util.request({
          //     url: './api/v1/wishlist'
          // }).then((data) => {
          //   this.items = data
          // })

        }
    }
}
</script>