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